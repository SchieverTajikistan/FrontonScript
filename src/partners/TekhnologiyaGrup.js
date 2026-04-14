// ==============================================================
// Tekhnologiya grup BEGIN
var VAR_FISCAL_IP_ADDRESS = 'fiscalipadres';
var VAR_IS_TG_FISCAL = 'isfiscalTG';
var VAR_SESSION_STATUS_KASSA = 'SESSION_STATUS_KASSA';
var VAR_SESSION_STATUS_FR = 'SESSION_STATUS_FR';
var VAR_MUST_LOG = 'isWriteLog';

var VAR_PRINT_WITHOUT_SENDING = "PrintWithoutSending";
var VAR_PRINT_WITH_SENDING_PHONE = 'PrintWithSendingToPhone';
var VAR_PRINT_WITH_SENDING_EMAIL = 'PrintWithSendingToMail';

// FR COMMANDS
var CMD_OPEN_SHIFT_FR = 'openShift';
var CMD_CLOSE_SHIFT_FR = 'closeShift';
var CMD_ADD_CASH_FR = 'addCash';
var CMD_REMOVE_CASH_FR = 'removeCash';
var CMD_FORM_RECEIPT_FR = 'formReceipt';
var CMD_PRINT_X_REPORT_FR = 'getXReport';
var CMD_PRINT_Z_REPORT_FR = 'closeShift';


function init_TG() {
    frontol.addEventListener("openDocument", "TG_beforeOpenDocument", true);
    frontol.addEventListener("closeDocument", "TG_beforeCloseDocument", true);
    frontol.addEventListener("openSession", "TG_afterOpenSession", false);
    frontol.addEventListener("closeSession", "TG_afterCloseSession", false);
}


// Listenes +
function TG_beforeOpenDocument() {

    if (!IsFRfromTG()) {
        return;
    }

    // CashBox
    /*
    if (getClientUUID() === "29A1BC43-C747-4B97-ACD7-6F74CFC88BA1") {
        /*if (!cashBox) {
            showMessage(
                "Компонента для работы с CashBoxSystem не была проинициализирована!" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE,
                Icon.Error
            );
            cancelAct();
        }
        var operatorName = frontol.currentUser.name;
        var operatorCode = frontol.currentUser.code;
        var documentNumber = doc.number;
        var kkmPos = frontol.codeWorkplace;

        switch (doc.type.code) {
            case 3:
            case 4: {
                showMessage("Операция '" + doc.type.name + "' не поддерживается ОФД сервером!", Icon.Error);
                cancelAct();
                break;
            }
            case 1131: {
                //operationReportX(AO, RO, operatorName, operatorCode, documentNumber, kkmPos);
                if (!cashBox.ReportX(operatorName, operatorCode, documentNumber, kkmPos)) {
                    if (cashBox.LastError.length === 0) {
                        showMessage("Не удалось снять X-Отчет!", Icon.Error);
                    } else {
                        showMessage("Не удалось снять X-Отчет!" + CR_MESSAGE + cashBox.LastError + "!", Icon.Error);
                    }
                }
                cancelAct();
                break;
            }
            case 1132: {
                //operationLastReportZ(AO, RO, operatorName, operatorCode, documentNumber, kkmPos);
                if (!cashBox.ReportZLast(kkmPos)) {
                    if (cashBox.LastError.length === 0) {
                        showMessage("Не удалось снять последний Z-Отчет!", Icon.Error);
                    } else {
                        showMessage("Не удалось снять последний Z-Отчет!" + CR_MESSAGE + cashBox.LastError + "!");
                    }
                }
                cancelAct();
                break;
            }
        }
    }
    */

    OpenSessionFR();
    if (!IsSessionOpen_FR()) {
        // Значит не удалось открыть сессию
        cancelAct();
        return;
    }
}

function TG_beforeCloseDocument() {
    if (!IsFRfromTG()) {
        return;
    }
    // Убрал проверку проверки статуса ККМ при каждом закрытии документа.
    // Easier to Ask Forgiveness than it is to get Permission (c) Jacky Chan
    // StatusKKM();

    var doc = frontol.currentDocument;
    var FRadress = getGlobalParam(VAR_FISCAL_IP_ADDRESS);
    //show(doc.type.operation)
    var isOkay = true;
    if (Doc_IsVnesenie(doc)) {
        
        var options = {
            formCode: "ADD_CASH",
            shouldPrintSlip: true,
            addAmount: Number(doc.totalSum * 100)
        };

        var stringToSend = JSONStringify(options);
        var result = sendToFiscal(FRadress, CMD_ADD_CASH_FR, stringToSend);

        if (result.success) {
            OpenDraw();
        }
    } else if (doc.type.operation == 5) {
        // Выплата
        var options = {
            formCode: "REMOVE_CASH",
            shouldPrintSlip: true,
            removeAmount: Number(doc.totalSum * 100)
        };
        var stringToSend = JSONStringify(options);

        var result = sendToFiscal(FRadress, CMD_REMOVE_CASH_FR, stringToSend);

        if (result.success) {
            OpenDraw();
        }
    } else if (Doc_IsSale(doc) || Doc_IsReturn(doc)) {
        //Окно печати
        ManualPrintOptionsButton();
        if (!IsSessionOpen_FR()) {
            // Хм .. смена закрыта при закрытии документа.
            // Не должно было случиться ..
            showMessage('Смена закрыта в ККМ.' + CR_MESSAGE + CONTACT_SUPPORT_MESSAGE);
            cancelAct();
            return;
        }

        // Значение параметры вариантов печати чека
        var PrintWithSendingToPhone = getGlobalParam(VAR_PRINT_WITH_SENDING_PHONE);
        var PrintWithSendingToMail = getGlobalParam(VAR_PRINT_WITH_SENDING_EMAIL);

        var PrintOption;
        if (!isEmptyValue(PrintWithSendingToPhone)) {
            PrintOption = PrintWithSendingToPhone;
        } else if (!isEmptyValue(PrintWithSendingToMail)) {
            PrintOption = PrintWithSendingToMail;
        }

        var stringToSend = stringifyDocumentForPrint(doc, PrintOption);
        if (!isEmptyValue(stringToSend)) {
            //show(stringToSend);
            var result = sendToFiscal(FRadress, CMD_FORM_RECEIPT_FR, stringToSend);

            if (result.success) {
                // Очищаем значение параметров печати
                ClearValuePrintOptions();
                OpenDraw();
            };
        } else {
            showMessage('Не удалось сформировать чек для печати. ' +
                CR_MESSAGE +
                CONTACT_SUPPORT_MESSAGE,
                Icon.Error
            )
            isOkay = false;
        }
    }

    if (!isOkay) {
        // Что-то пошло не так ... отменяем
        cancelAct();
        return;
    }
}

function TG_afterOpenSession() {
    if (!IsFRfromTG()) {
        return;
    }
    OpenSessionFR();
}

function TG_afterCloseSession() {
    if (!IsFRfromTG()) {
        return;
    }
    
    CloseSessionFR();
}
// -

Fiscat: {
	var FISCAT_PORT = 'fiscatPort';
	var COM_PORT_ENABLED = 'comPortEnabled';

	function isMenuAccessAvailable() {
		return isSysAdmin() || isServiceUser();
	}

	function FR_printLastDoc() {
		var dataString = JSON.stringify(
            {
                formCode: 'PRINT_LAST_FD',
                ffdVersion: 'VER_1',
                shouldPrintSlip: true
            }
        );

		FR_printDocument(dataString, 'getLastFD');
	}

	function FR_printLastDocByFDNum() {
		var docNumber = frontol.actions.inputString(
			'Введите номер документа',
			''
		);
		if (!docNumber) {
			showMessage(
				'Номер документа не введен',
				Icon.Error
			);
			return;
		}

		if (!/^\d+$/g.test(docNumber)) {
			showMessage(
				'Номер документа должен состоять из цифр',
				Icon.Error
			);
			return;
		}

		var dataString = JSON.stringify({
			formCode: 'PRINT_FD_BY_NUMBER',
			ffdVersion: 'VER_1',
			shouldPrintSlip: true,
			fdNumber: +docNumber
		});

		FR_printDocument(dataString, 'getFDByNumber');
	}

	function FR_printDocument(dataString, action) {
		var FRadress = getGlobalParam(VAR_FISCAL_IP_ADDRESS);
		var result = sendToFiscal(FRadress, action, dataString);

        if (!result.success) {
			cancelAct();
			return false;
        }

        return true;
	}
}

// KKM Actions +
// Тело запроса на Проверка Статуса ФР
function deviceStatusToSend() {
	var options = JSONStringify({
		formCode: 'DEVICE_STATUS',
		shouldPrintSlip: true
	});
	return options;
}

function StatusKKM() {
	var options = JSONStringify({
		formCode: 'DEVICE_STATUS',
		shouldPrintSlip: false
	});

	var stringToSend = options;
	var FRadress = getGlobalParam(VAR_FISCAL_IP_ADDRESS);
	var result = sendToFiscal(FRadress, 'deviceStatus', stringToSend);
	// frontol.actions.showMessage(result.data.onlineStatus);
	if (result.rc == 'SUCCESS') {
		if (result.data.onlineStatus !== true) {
			showMessage('ПРОВЕРЬТЕ СОСТОЯНИЕ ККМ', Icon.Error);
		}
		// return result.rc;
	} else if (result.rc !== 'SUCCESS') {
		var error = getErrorOFD(result.rc);
		showMessage(
			'Ответ ККМ: ' + CR_MESSAGE + CR_MESSAGE + error,
			Icon.Error
		);
	}
}

function OpenDraw() {
	var options = JSONStringify({
		formCode: 'OPEN_DRAWER',
		onTimeout: 500,
		offTimeout: 100,
		onQuantity: 1
	});

	var stringToSend = options;
	var FRadress = getGlobalParam(VAR_FISCAL_IP_ADDRESS);
	var result = sendToFiscal(FRadress, 'openDrawer', stringToSend);
	if (result.rc == 'SUCCESS') {
		return result.rc;
	} else if (result.rc !== 'SUCCESS') {
		var error = getErrorOFD(result.rc);
		showMessage(
			'Не исправность с ДЯ: ' + CR_MESSAGE + CR_MESSAGE + error,
			Icon.Error
		);
		//break;
		return;
	}
}

function OpenSessionFR() {

    var isSessionOpen = IsSessionOpen_FR();
    if (!isSessionOpen) {
        // Смена закрыта в фискальнике
        var options = {
            formCode: "OPEN_SHIFT",
            ffdVersion: "VER_1",
            shouldPrintSlip: true,
            cashier: frontol.currentUser.name,
            kktVersion: "1"
        };

        var stringToSend = JSONStringify(options);
        var FRadress = getGlobalParam(VAR_FISCAL_IP_ADDRESS);
        var result = sendToFiscal(FRadress, CMD_OPEN_SHIFT_FR, stringToSend);

        if (!result.success) {
            // its closed anyway. Just to be sure
            SetSessionClose_FR();
            cancelAct();
        } else {
            SetSessionOpen_FR();
        }
    }
}

function CloseSessionFR() {
    if (IsSessionOpen_FR()) {
        var options = {
            formCode: "CLOSE_SHIFT",
            ffdVersion: "VER_1",
            shouldPrintSlip: true,
            cashier: frontol.currentUser.name,
            kktVersion: "1"
        };
        var stringToSend = JSONStringify(options);
        var FRadress = getGlobalParam(VAR_FISCAL_IP_ADDRESS);
        var result = sendToFiscal(FRadress, CMD_CLOSE_SHIFT_FR, stringToSend);
        
        if (!result.success) {
            SetSessionOpen_FR();  // не удалось закрыть.. значит до сих пор октрыта
            cancelAct();

            return false;
        } else {
            SetSessionClose_FR();
            OpenDraw();

            return true;
        }
    }
}

function PrintXReportFR() {
    var FRadress = getGlobalParam(VAR_FISCAL_IP_ADDRESS);

    var options = {
        formCode: 'GET_X_REPORT',
        ffdVersion: 'VER_1',
        shouldPrintSlip: true
    };

    var stringToSend = JSONStringify(options);

    sendToFiscal(FRadress, CMD_PRINT_X_REPORT_FR, stringToSend);
}

function PrintZReportFR() {
    var FRadress = getGlobalParam(VAR_FISCAL_IP_ADDRESS);

    var options = {
        formCode: 'CLOSE_SHIFT',
        ffdVersion: 'VER_1',
        shouldPrintSlip: true,
        cashier: frontol.currentUser.name,
        kktVersion: '1'
    };

    var stringToSend = JSONStringify(options);
    var result = sendToFiscal(FRadress, CMD_PRINT_Z_REPORT_FR, stringToSend);

    if (result.success) {
        SetSessionClose_FR();
    } else {
        showMessage('Не удалось закрыть смену в ФР. ' + CR_MESSAGE + CONTACT_SUPPORT_MESSAGE);
        cancelAct();
        return;
    }
}


function sendToFiscal(deviceIp, command, stringToSend) {
    var url = 'http://' + deviceIp + '/api/' + command;

    var response = sendHttpRequestSimple(url, 'POST', stringToSend, 30);
    _validateFiscalResponse(response);

    return response;
}

function _validateFiscalResponse(response){

    if (!response.success) {
		if (response.data.rc == 'SHIFT_MUST_BE_CLOSED') {
            SetSessionClose_FR();
            showMessage('Смена открыта в ФР. Закройте смену.', Icon.Exclamation);
        } else {
            var errorMsg = getErrorOFD(response.data.rc);
            showMessage("Ответ ОФД с ошибкой: " + CR_MESSAGE + " -> " + errorMsg, Icon.Error);
        }

        return false;
    }

    return true;
}

// Ошибки Фискат
function getErrorOFD(errorCode) {
	switch (errorCode) {
		case 'CORE_IS_BLOCKED':
			return 'Фискальный модуль заблокирован';
		case 'CORE_IS_NOT_ACTIVATED':
			return 'Фискальный модуль не активирован';
		case 'DATETIME_ERROR':
			return 'Ошибка при работе с датой и временем: проверьте настройки';
		case 'FISCAL_MODULE_EXPIRED':
			return 'Срок действия фискального модуля вышел';
		case 'FISCAL_MODULE_ERROR':
			return 'Ошибка в работе фискального модуля';
		case 'INVALID_DOC':
			return 'Некорректный документ';
		case 'INVALID_CONSUMER_CONTACT':
			return 'Ошибка в поле с контактами.';
		case 'KEYS_ERROR':
			return 'Ошибка ключей';
		case 'SHIFT_MUST_BE_CLOSED':
			return 'Смена должна быть закрыта';
		case 'SHIFT_MUST_BE_OPENED':
			return 'Смена должна быть открыта';
		case 'UNKNOWN_ERROR':
			return 'Неизвестная ошибка';
		case 'FD_NOT_FOUND':
			return 'Фискальный документ не найден';
		case 'INVALID_BANK_RRN':
			return 'Отсутствует или некорректный РРН';
		case 'INVALID_COSTOM_MESSAGE':
			return 'Ошибка в произвольном сообщении для печати';
		case 'SHIFT_TOO_LONG':
			return 'Смена превысила 24 часа. Необходимо закрыт смену и заново открыть!';
		default:
			return 'Неизвестный код ошибки';
	}
}

// -

// Printing +

function escapeSpecialChars(str) {
	// Создаем объект, который содержит специальные символы и их экранированные версии
	var specialChars = {
		'\\': '\\\\',
		'"': '\\"',
		'\n': '\\n',
		'\r': '\\r',
		'\t': '\\t',
		'\b': '\\b',
		'\f': '\\f'
	};

	// Замещаем все специальные символы в строке их экранированными версиями
	return str.replace(/[\\\"\n\r\t\b\f]/g, function (char) {
		return specialChars[char] || char;
	});
}


function ManualPrintOptionsButton() {
	//Зададим переменные
	var choosePrintWithoutSending = 'Печать чека без отправки клиенту';
	if (getGlobalParam(VAR_PRINT_WITHOUT_SENDING) == '0') {
		choosePrintWithoutSending += ' (!)';
	}

	var printWithSendingToPhoneString =
		'Печать чека c отправкой на номер телефон';
	if (getGlobalParam(VAR_PRINT_WITH_SENDING_PHONE) == '') {
		printWithSendingToPhoneString += ' (!)';
	}

	var printWithSendingToMailString = 'Печать чека c отправкой на e-mail';
	if (getGlobalParam(VAR_PRINT_WITH_SENDING_EMAIL) == '') {
		printWithSendingToMailString += ' (!)';
	}

	// Окно меню
	var st = frontol.actions.selectString(
		'Варианты печати чека',
		choosePrintWithoutSending +
			'\n' +
			printWithSendingToPhoneString +
			'\n' +
			printWithSendingToMailString,

		'choosePrintWithoutSending\n' +
			'printWithSendingToPhone\n' +
			'printWithSendingToMail\n'
	);

	if (st == null || st == '') return;

	switch (st) {
		case 'choosePrintWithoutSending': {
            setGlobalParam(VAR_PRINT_WITHOUT_SENDING, '1');
			break;
		}
		case 'printWithSendingToPhone': {
			EnterParameter(VAR_PRINT_WITH_SENDING_PHONE, 'номер телефон клиента', true);
			break;
		}
		case 'printWithSendingToMail': {
			EnterParameter(VAR_PRINT_WITH_SENDING_EMAIL, 'e-mail клиента', true);
			break;
		}
	}
}

// Очистка значение параметров печати ФР
function ClearValuePrintOptions() {
	frontol.userValues.set('PrintWithoutSending', '0');
	frontol.userValues.remove('PrintWithSendingToPhone');
	frontol.userValues.remove('PrintWithSendingToMail');
}


/*
	Для возврата безналичных платежей нам нужен РРН.
На данный момент только ФридомБанк добавляет РРН
в переменные документа.

Каждая касса имеет только один ПОС терминал от определенного банка
если в будушем терминалов станет несколько и будут разрешены комбинированные
оплаты, то логику данной функции придется поменять.
*/
function _getRRNForCheck(doc) {
	if (Doc_IsReturn(doc)) {
		// Проверим вводили ли на основании
		if (doc.baseDocument) {
			// На основании, значит документ основания (т.е продажа)
			// должна иметь РРН
			return Doc_GetBankRRN(doc.baseDocument)
		}
	}
	// значит обычная продажа
	return Doc_GetBankRRN(doc)
}

function _getFiscalVatValue(vat) {
    // Карта соответствия ставок и кодов
    var vatMap = {
        0: 1,
        2.5: 3,
        5: 6,
        7: 8,
        14: 15,
        15: 16,
        18: 19
    };

    // Проверка: ставка не указана
    if (isEmptyValue(vat) || vat === "-") {
        return;
    }

     // Проверка: есть ли такая ставка в карте
    if (!(vat in vatMap)) {
        return;
    }

    var vatValue;
    switch (vat) {
        case 7:
            vatValue = 'REDUCED1';
            break;
        case 5:
            vatValue = 'REDUCED2';
            break;
        case 2.5:
            vatValue = 'REDUCED3';
            break;
        case 10:
            vatValue = 'REDUCED4';
            break;
        case 14:
            vatValue = 'STANDARD';
            break;
        case 0:
            vatValue = 'ZERO_TAX';
            break;
        default:
            vatValue = 'STANDARD'; // на всякий случай
            break;
    }

    return vatValue;
}


// Формируем документ типом строки для запроса
/**
 * Собирает строку JSON-массива товаров документа для отправки в ФР.
 * Проходится по позициям (товарам) документа, пропуская сторнированные,
 * и возвращает строку вида: "products":[{...},{...}]
 *
 * Args:
 *      doc - документ Фронтол
 *
 *  Returns
 *      returns {string} строка JSON-массива товаров
 */
function _buildProductsString(doc) {
	var products = '';
	for (
		doc.position.index = 1;
		doc.position.index <= doc.position.count;
		doc.position.index++
	) {
		if (doc.position.storno == 0) {
			//Налог позиция+
			for (
				doc.position.tax.index = 1;
				doc.position.tax.index <= doc.position.tax.count;
				doc.position.tax.index++
			) {
				var vatValue = doc.position.tax.taxRateValue;
			}
			//Налог Позиция-

			//Заполняем переменные
			var code = base64Encode(doc.position.barcode); // ШК товара
            var name = doc.position.ware.text; // Название товара
            var price = Number(doc.position.price * 100).round(0); // цена товара
            var quantity = parseFloat(doc.position.quantity.toFixed(3)); // Number(doc.position.quantity);
            var sum = Number(doc.position.sum * 100).round(0); // Сумма товара

            var vatFiscalValue = _getFiscalVatValue(vatValue);
            if (isEmptyValue(vatFiscalValue)) {
                showMessage("Ошибка: Неверная ставка НДС у товара '" + name + "'. Указано: " + vatValue + "%", Icon.Error);
                return;
            }

            var productNameFormatted = escapeSpecialChars(name);
            var payload = {
                code: code,
                name: productNameFormatted,
                price: price,
                quantity: quantity,
                commodity: 'GOODS',
                sum: sum,
                marker: '',
                vatCode: vatFiscalValue
            }
            //Получаем массив товаров в строчном виде
            var product = JSONStringify(payload);

            //присвоим запятую
            products = products + product + ",";
		}
	}

	products = products.slice(0, -1);  // убираем последнюю запятую
	products = '"products" : [' + products + ']';

    return products;
}

/*
//TODO. Proveti zameniv originlniy code
function _getProductsForPrint(doc) {
	var products = [];
	for (
		doc.position.index = 1;
		doc.position.index <= doc.position.count;
		doc.position.index++
	) {
		if (doc.position.storno == 0) {
			//Налог позиция+
			for (
				doc.position.tax.index = 1;
				doc.position.tax.index <= doc.position.tax.count;
				doc.position.tax.index++
			) {
				var vatValue = doc.position.tax.taxRateValue;
			}
			//Налог Позиция-

			//Заполняем переменные
			var code = base64Encode(doc.position.barcode); // ШК товара
            var name = doc.position.ware.text; // Название товара
            var price = Number(doc.position.price * 100).round(0); // цена товара
            var quantity = parseFloat(doc.position.quantity.toFixed(3)); // Number(doc.position.quantity);
            var sum = Number(doc.position.sum * 100).round(0); // Сумма товара

            var vatFiscalValue = _getFiscalVatValue(vatValue);
            if (isEmptyValue(vatFiscalValue)) {
                showMessage("Ошибка: Неверная ставка НДС у товара '" + name + "'. Указано: " + vatValue + "%", Icon.Error);
                return;
            }

            var productNameFormatted = escapeSpecialChars(name);
            var product = {
                code: code,
                name: productNameFormatted,
                price: price,
                quantity: quantity,
                commodity: 'GOODS',
                sum: sum,
                marker: '',
                vatCode: vatFiscalValue
            }

            products.push(product);
		}
	}

    return { products: products }
}
*/


/**
 * Собирает строку JSON-массива налогов (НДС) документа.
 * Проходится по налогам документа и возвращает строку вида: [{vatCode:..., vatSum:...},...]
 *
 * Args:
 *      doc - документ Фронтол
 *
 * Returns:
 *      {string} строка JSON-массива налогов
 */
function _buildDocumentTaxes(doc) {
    var vatString = '';
    for (doc.tax.index = 1; doc.tax.index <= doc.tax.count; doc.tax.index++) {
        var TS = Number(doc.tax.sum * 100).round(0);
        var TTRV = doc.tax.taxRateValue;
        var FR_vatCode = _getFiscalVatValue(TTRV);

        if (isEmptyValue(FR_vatCode)) {
            return;
        }

        var vatData = { vatCode: FR_vatCode, vatSum: TS }
        var vats = JSONStringify(vatData);

        vatString = vatString + vats + ',';
    }

    if (isEmptyValue(vatString)) {
        return;
    }

    vatString = vatString.slice(0, -1);  // убираем лишнюю запятую в конце
    return '"taxes": { "vats": [' + vats + '] }}'
}


/*
//TODO. Proverit zameniv original
function _buildDocumentVats(doc) {
    var vats = [];
    for (doc.tax.index = 1; doc.tax.index <= doc.tax.count; doc.tax.index++) {
        var TS = Number(doc.tax.sum * 100).round(0);
        var TTRV = doc.tax.taxRateValue;
        var FR_vatCode = _getFiscalVatValue(TTRV);

        var vatData = { vatCode: FR_vatCode, vatSum: TS }
        vats.push(vatData)
    }

    return { taxes: vats }
}
*/

function _printCardBalances(doc) {
	var cardNumbers = doc.userValues.get('cardBoxNumbers');
	var cardBalances = doc.userValues.get('cardBoxBalances');

	var res = '';
	if (!isEmptyValue(cardNumbers)) {
		var cardNumberArray = cardNumbers.split(';');
		var cardBalanceArray = cardBalances.split(';');

		if (cardNumberArray.length > 0 && cardBalanceArray.length > 0) {
			for (var i in cardNumberArray) {
				res =
					res +
					'Бон. карта ' +
					hideCardNumber(cardNumberArray[i]) +
					', баланс: ' +
					(cardBalanceArray[i] || '0') +
					'\n';
			}
		}
	}
	return res;
}

function removeNewlines(str) {
	// Удаляем символы новой строки (\n) и возврата каретки (\r)
	return str.replace(/[\n\r]/g, '');
}

function _getCustomMessageForPrint(doc) {
	var message = frontol.currentDocument.userValues.get('CustomActionMess');
	if (!isEmptyValue(message)) message = message + '\n';

	message = message + _printCardBalances(doc);
	message = message + doc.userValues.get(PROMO_TEXT_KEY);
	return message;
}

function _generateBillInfoArea(doc) {
	var infoAreaString = '';
	infoAreaString =
		infoAreaString +
		'\\nСмена № ----------------> ' +
		frontol.sessionNumber;
	infoAreaString =
		infoAreaString +
		'\\n' +
		doc.type.name +
		'№ ---------------> ' +
		doc.number;
	infoAreaString =
		infoAreaString +
		'\\nКасса № ----------------> ' +
		frontol.codeWorkplace;
	infoAreaString =
		infoAreaString +
		'\\nКассир № ---------------> ' +
		frontol.currentUser.name;

	return infoAreaString;
}

function _getBillInfoMessage(doc) {
    var customMess = _getCustomMessageForPrint(doc);
    var infoCardClient = removeNewlines(customMess);
    var extraInfo = _generateBillInfoArea(doc);
    infoCardClient = infoCardClient + extraInfo;

    return '"customMessage":' + infoCardClient;
}

/*
//TODO. Zamenit original i proverit
function _getBillInfoMessage(doc) {
    var customMess = _getCustomMessageForPrint(doc);
    var infoCardClient = removeNewlines(customMess);
    var extraInfo = _generateBillInfoArea(doc);
    infoCardClient = infoCardClient + extraInfo;

    var result = { customMessage: infoCardClient };

    return result;
}
*/


function _buildPaymentData(doc) {
    var cashamount = 0;
    var nocashamount = 0;

    for (
        doc.payment.index = 1;
        doc.payment.index <= doc.payment.count;
        doc.payment.index++
    ) {
        if (doc.payment.sumInBaseCurrency > 0) {
            var paymentSum = doc.payment.sumInPaymentCurrency;
            if (doc.payment.type.code == 1) {   // Если наличка
                cashamount = cashamount + paymentSum; 
            } else {
                nocashamount = nocashamount + paymentSum; 
            }
        }
    }

    var oddmoney = doc.totalSum - (nocashamount + cashamount);
    var amountChangeCash = (oddmoney < 0) ? oddmoney * -1 : 0;
    cashamount = cashamount - amountChangeCash;

    var paymentInfo = {
        receiptSum: Number(doc.totalSum * 100).round(0),
        receiptCash: Number(cashamount * 100).round(0),
        receiptNonCash: Number(nocashamount * 100).round(0),
        cashChangeAmount: Number(amountChangeCash * 100).round(0), //Сдача
        bankRRN: null,
        bankCard: null
    };

    if (nocashamount > 0) {
        paymentInfo.bankRRN = _getRRNForCheck(doc);
    } 

    return JSONStringify(paymentInfo);
}

/*
    Чек для ФР состоит из нескольких секций:
        1. Шапка - содержит информацию для всего чека: Вид операции, почта или номер покупателя и тд
        2. Товары - эта секция содержит информацию по каждому товару из чека: Код/ШК, цена, кол-во и тд
        3. Сообщение - содержит информацию которая должна выводится на чеке
        4. Оплаты - сумма наличной/безналичной оплаты, сдача и тд
        5. Налоги - вся информация о налогах в документе
*/
function stringifyDocumentForPrint(doc, printOption) {


    var operationType = (Doc_IsReturn(doc)) ? 'REVERT_INCOME' : 'INCOME';
    // Шапка
    var billHeader = JSONStringify(
        {
            formCode: 'RECEIPT',
            ffdVersion: 'VER_1',
            shouldPrintSlip: true,
            operationType: operationType,
            taxType: 'GENERAL',
            consumerContacts: printOption
        }
    );
    // -

    // Товары  +
    var billProducts = _buildProductsString(doc);
    if (isEmptyValue(billProducts)) {
        // Без товаров никуда ..
        return;
    }
    // -

    // Сообщение +
    var billCustomMessage = _getBillInfoMessage(doc);
    // -
    
    // Оплаты +
    var billPayments = _buildPaymentData(doc);
    if (isEmptyValue(billPayments)) {
        return;
    }
    // -


    // Налоги +
    var billTaxes = _buildDocumentTaxes(doc);
    if (isEmptyValue(billTaxes)) {
        return;
    }
    // -

    // Собираем итоговую строку: шапка + товары + оплата + налоги
    // Сначала убираем лишние скобки '{' или '}'
    billHeader = billHeader.slice(0, -1);

    billPayments = billPayments.slice(1);  // убираем открывающуюся скобку
    billPayments = billPayments.slice(0, -1);  // и закрывающуюся

    // var stringToSend = header + payment + '"taxes":{ "vats":' + vats + '}}';

    var finalString = billHeader + ', ' + 
                      billCustomMessage + ', ' + 
                      billProducts + ', ' +
                      billPayments + ', '
                      billTaxes +
                      ' }'

    if (mustLog()) {
        var stringToSendObject = JSON.parse(finalString);
        writeToFile('\nТело запроса:\n' + JSON.stringify(stringToSendObject, null, 2));
    }

    return finalString;
}


function IsFRfromTG() {
	return getGlobalParam('isfiscalTG') === '1';
}

function formatDate(date) {
	// Формат года YY
	var yy = date.getFullYear() % 100;
	if (yy < 10) yy = '0' + yy;
	// Формат месяца MM
	var mm = date.getMonth() + 1;
	if (mm < 10) mm = '0' + mm;
	// Формат дня dd
	var dd = date.getDate();
	if (dd < 10) dd = '0' + dd;
	// Формат часа hh
	var hh = date.getHours();
	if (hh < 10) hh = '0' + hh;
	// Формат минуты mm
	var min = date.getMinutes();
	if (min < 10) min = '0' + min;
	// Формат секунды ss
	var sek = date.toLocaleTimeString();
	sek = sek.slice(sek.length - 5);
	sek = sek.substring(0, 2);
	var result = String(yy) + mm + dd + hh + min + sek;
	return result;
}

function mustLog() {
	return getGlobalParam(VAR_MUST_LOG) == '1'
}

function writeToFile(content) {
	var filePath = 'D:\\Log_Fis.txt';
	try {
		var fso = new ActiveXObject('Scripting.FileSystemObject');
		var file = fso.OpenTextFile(filePath, 8, true); // true для перезаписи файла, если он существует
		file.WriteLine(content);
		file.Close();
		//frontol.actions.showMessage("Запись завершена успешно.");
	} catch (e) {
		showMessage('Ошибка записи в файл: ' + e.message, Icon.Error);
	}
}
// -

// Tekhnologiya grup END
// ==============================================================