// ==============================================================
// FreedomBank BEGIN

var VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS = 'FreedomBankTerminalIpAddress';
var VAR_SESSION_STATUS_KASSA = 'SESSION_STATUS_KASSA'
var VAR_SESSION_STATUS_FR = 'SESSION_STATUS_FR'


var FREEDOM_BANK_PAYMENT_CODE = 116;

function getISODateToString(separator) {
	if (!separator) separator = "_";


	var dateTime = new Date();
	var dateTimeYear = dateTime.getFullYear();
	var dateTimeMonth =
		dateTime.getMonth() + 1 <= 9
			? "0" + (dateTime.getMonth() + 1).toString()
			: (dateTime.getMonth() + 1).toString();
	var dateTimeDate =
		dateTime.getDate() <= 9 ? "0" + dateTime.getDate().toString() : dateTime.getDate().toString();

	return (
		dateTimeYear +
		separator +
		dateTimeMonth +
		separator +
		dateTimeDate
	);
}

function _initFreedomBankLog() {
	var config = getPartnerSettings('FreedomBank')
	var baseFolder = config['LOG_FOLDER']

	if (isEmptyValue(baseFolder)) {
		showError('Не указана папка для логов для FreedomBank.', Icon.Error)
		return;
	}

	try {
		createDirectory(baseFolder)
	} catch (err) {
		showMessage(
			'Не удалось создать папку для FreedomBank' +
			CR_MESSAGE +
			err.message +
			CR_MESSAGE +
			CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		return;
	}

	var dateNow = getISODateToString();
	var logFileName = baseFolder + '\\' + 'terminal_' + dateNow + '.log';

	return logFileName;
}

function _generateLogMessage(message) {
	var logDateTime = getISODateTimeToString();
	var logDatePart = '[ ' + logDateTime + ' ]';

	var posPart = frontol.codeWorkplace + ' ' + frontol.currentDocument.number + ' ' + frontol.sessionNumber;

	var logMessage = [logDatePart, posPart, message].join(' ');

	return logMessage;
}

function freedomWriteLog(message) {
	var logFullPath = _initFreedomBankLog();

	if (isEmptyValue(logFullPath)) {
		return;
	}

	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var logFile;

	try {
		logFile = fso.OpenTextFile(logFullPath, 8, 0); //открыть файл
	} catch (err) {
		// Файл должен уже существовать (созданный шагом выше)
		// Значит ошибка не в существовании файла ...
		showMessage(
			'Не удалось открыть FreedomBank лог файл' + logFullPath +
			CR_MESSAGE +
			err.message +
			CR_MESSAGE +
			CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		return;
	}

	var logMessage = _generateLogMessage(message);

	try {
		logFile.WriteLine(logMessage);
		logFile.Close();
	} catch (err) {
		showMessage(
			'Не удалось записать лог FreedomBank' +
			CR_MESSAGE +
			err.message +
			CR_MESSAGE +
			CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		return;
	}
}


function _setFreedomBankTerminalNetworkSettings() {
    var settings = getPartnerSettings('FreedomBank');

    var terminalIpAdress = settings['TERMINAL_IP_ADDRESS'];
    setGlobalParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS, terminalIpAdress);
}

function init_FreedomBank() {
    _setFreedomBankTerminalNetworkSettings();
	_initFreedomBankLog();

	frontol.addEventListener('addPayment', 'FreedomBankBeforeAddPayment', true);
	frontol.addEventListener(
		'cancelDocument',
		'FreedomBankBeforeCancelDocument',
		true
	);

	frontol.addEventListener(
		'cancelDocument',
		'FreedomBankAfterCancelDocument',
		false
	);

	frontol.addEventListener('closeSession', 'FreedomBankAfterSessionClose', false);
}

function _getTerminalHttpAddress(terminalIpAddress) {
	return ['http://' + terminalIpAddress].join('/');
}


function isAppIsNotLaunched(err) {
    var errCode = -2146697211 // код когда приложение фридом не запущено
	if (err.number) {
		return err.number == errCode;
	}
	return false;
}

function _validateResult(result) {
	var isOk = false;
	if (result.success) {
		var responseData = result.data.data;
		// Обработка успешного ответа
		if (responseData.result == 0) {
			isOk = true;
		} else {
			// result хранит код. Даже если мы могли выпонить операцию
			// проблема может быть с банком или картой клиента. В таком случае
			// success == true, но result != 0.
			var msg = result.message || responseData.msg;
			showMessage(
				'Ошибка при выполнении операции на терминале.' +
					CR_MESSAGE +
					msg,
				Icon.Exclamation
			);
		}
	} else {
		// Обработка ошибки запроса
		showMessage(
			'Не удалось выполнить запрос к терминалу Freedom Bank' +
				CR_MESSAGE +
				result.message +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
	}
	return isOk;

}

// ACTIONS
function _freedomBankSale(payment, terminalIpAdd) {
	var amount = payment.sumInBaseCurrency;

	// Округлим значение до двух десятичных знаков
	var amountRounded = Math.round(amount * 100) / 100;
	var dataToSend = {
		task: 'purchase',
		data: {
			amount: amountRounded.toString()
		}
	};

	var url = _getTerminalHttpAddress(terminalIpAdd);
	try {
		var result = sendHttpRequestSimple(url, 'POST', dataToSend);
	} catch (e) {
		if (isAppIsNotLaunched(e)) {
			e.message = 'Не удалось отправить запрос на терминал. Убедитесь, что терминал включен' +
			' и приложение банка запущено.'
		}
		showMessage(
			'Ошибка при отправке запроса к терминалу Freedom Bank' +
				CR_MESSAGE +
				e.message +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		return;
	}

	var isSuccess = _validateResult(result);
	
	var currDoc = frontol.currentDocument;
	if (isSuccess) {
		var responseData = result.data.data;
		// Обработка успешного ответа
		var RRN = responseData.tagRRN;
		Doc_SetBankRRN(currDoc, RRN);
		currDoc.addPayment(payment.type.code, amount, null);
	}
}

function _freedomBankReturn(payment, terminalIpAdd) {
	var currDoc = frontol.currentDocument;
	var baseDocument = currDoc.baseDocument;

	var amount = payment.sumInBaseCurrency;

	var RRN;
	if (baseDocument) {
		// Если вводится на основании, то RRN должен быть у документа основания
		RRN = Doc_GetBankRRN(baseDocument);
	} else {
		// Возврат без основания
		RRN = _askRRNFromUser();
	}

	if (!RRN) {
		showMessage(
			'RRN не введен для возврата.' + CR_MESSAGE + 'Возврат невозможен.',
			Icon.Exclamation
		);
		cancelAct();
		return;
	}

	var amountRounded = Math.round(amount * 100) / 100;
	var dataToSend = {
		task: 'refund',
		data: {
			amount: amountRounded.toString(),
			tagRRN: RRN
		}
	};
	var url = _getTerminalHttpAddress(terminalIpAdd);
	try {
		var result = sendHttpRequestSimple(url, 'POST', dataToSend);
	} catch (e) {
		if (isAppIsNotLaunched(e)) {
			e.message = 'Не удалось отправить запрос на терминал. Убедитесь, что терминал включен' +
			' и приложение банка запущено.'
		}
		showMessage(
			'Ошибка при отправке запроса к терминалу Freedom Bank' +
				CR_MESSAGE +
				e.message +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		return;
	}

	var isSuccess = _validateResult(result);
	var currDoc = frontol.currentDocument;

	if (isSuccess) {
		currDoc.addPayment(payment.type.code, amount, null);
	}
}

function _freedomBankCancelDoc(doc, terminalIpAdd) {
	if (!Doc_IsSale(doc)) {
		// Отмена возможна для документа продажи
		// Можно внедрить логику и для возвратов, но пока раз уже добавили
		// оплату в возврат, то нужно провести документ
		showMessage(
			'Документ не является продажей. Отмена невозможна.',
			Icon.Error
		);
		cancelAct();
		return;
	}

	// Проведенный документ нельзя отменить, значит документ еще не закрыт
	// Если документ продажи отменяется, значит до этого был вызвана функция
	// FreedomBankBeforeAddPayment, который обработал и добавил платеж,
	// а так же добавил RRN в пользовательские поля документа
	var RRN = Doc_GetBankRRN(doc);
	if (isEmptyValue(RRN)) {
		// АПИ требует RRN для отмены
		showMessage(
			'RRN не найден в документе. Отмена невозможна.' +
            CR_MESSAGE +
            CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}

	var docPayment = Doc_GetPaymentType(doc, FREEDOM_BANK_PAYMENT_CODE);
	if (!docPayment) {
		// Платеж Freedom Bank не найден. Такого не должно быть, т.к RRN есть
		// и платеж был найден в вызывающей функции (AfterCancelDocument)
		showMessage(
			'Платеж типа Freedom Bank не найден в документе. Отмена невозможна.' +
            CR_MESSAGE +
            CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}

	var dataToSend = {
		task: 'reversal',
		data: {
			amount: docPayment.sumInBaseCurrency,
			tagRRN: RRN
		}
	}
	var url = _getTerminalHttpAddress(terminalIpAdd);
	var result = sendHttpRequestSimple(url, 'POST', dataToSend);
	var isSuccess = _validateResult(result);

	if (!isSuccess) {
		cancelAct();
		return;
	}
}

function _freedomBankCloseSession(terminalIpAdd) {
	var url = _getTerminalHttpAddress(terminalIpAdd)

	var dataToSend = {
		task: 'settle'
	};

	var result = sendHttpRequestSimple(url, 'POST', dataToSend);
	if (result.success === false || result.data.data.result !== 0) {
		var responseData = result.data.data;
		var msg = responseData.message || responseData.msg;
		showMessage(
			'Ошибка при обработке запроса. Попробуйте закрыть смену вручную на терминале!' +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE +
				CR_MESSAGE +
				msg,
			Icon.Warning
		);
	}
}
//

function FreedomBankBeforeAddPayment(payment) {
	if (payment.type.code !== FREEDOM_BANK_PAYMENT_CODE) {
		return;
	}

	var terminalIpAdd = getGlobalParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS);
	if (isEmptyValue(terminalIpAdd)) {
		showMessage(
			'Не задан IP адрес терминала Freedom Bank' +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}

	// Платеж добавляется в:
	if (Doc_IsSale(frontol.currentDocument)) {
		// Продажа
		_freedomBankSale(payment, terminalIpAdd);
	} else if (Doc_IsReturn(frontol.currentDocument)) {
		// Возврат
		_freedomBankReturn(payment, terminalIpAdd);
	} else {
		showMessage(
			'Операция не поддерживается терминалом Freedom Bank' +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
	}
	
	// every action handler MUST add/not add the payment
	// here we MUST cancel the action. Otherwise we can end up
	// adding one more payment in any case.
	cancelAct();
}

function FreedomBankBeforeCancelDocument() {
	var currDoc = frontol.currentDocument;
	if (!Doc_HasPaymentType(FREEDOM_BANK_PAYMENT_CODE)) {
		return;
	}

	if (!Doc_IsSale(currDoc)) {
		// Отмена возможна для документа продажи
		// Можно внедрить логику и для возвратов, но пока раз уже добавили
		// оплату в возврат, то нужно провести документ
		showMessage(
			'Документ не является продажей. Отмена невозможна.',
			Icon.Error
		);
		cancelAct();
		return;
	}

	var terminalIpAdd = getGlobalParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS);
	if (isEmptyValue(terminalIpAdd)) {
        // Есть тип оплаты фридом банка и это продажа, но НЕ задан ИП адес терминала ?
        // Стопэ-стопэ
		showMessage(
			'Не задан IP адрес терминала Freedom Bank' +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}
}

function FreedomBankAfterCancelDocument() {
	var currDoc = frontol.currentDocument;
	
	// Все проверки должны быть осуществлены в функции ДО (FreedomBankBeforeCancel).
	// Чтобы в случае чего можно было отменить процесс отмены чека
	// Здесь мы делаем проверки на всякий случай.
	// Главным элементом является, то что здесь мы проверяем есть ли
	// тип оплаты Фридом банка в документе
	if (!Doc_HasPaymentType(FREEDOM_BANK_PAYMENT_CODE)) {
		return;
	}

	if (!Doc_IsSale(currDoc)) {
		showMessage(
			'Документ не является продажей. Отмена невозможна.',
			Icon.Error
		);
		cancelAct();
		return;
	}

	var terminalIpAdd = getGlobalParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS);
	//
	_freedomBankCancelDoc(currDoc, terminalIpAdd);

}

function FreedomBankAfterSessionClose() {
	var terminalIpAdd = getGlobalParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS);
	if (!terminalIpAdd) {
        // Видимо терминал не подключен.
		return;
	}
	_freedomBankCloseSession(terminalIpAdd)
}


// MISC
function $TestFreedomConnection() {
	var dataToSend = {
		task: 'print',
		data: {
			actionCode: "2"
		}
	};
	var terminalIpAdd = getGlobalParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS);
		if (isEmptyValue(terminalIpAdd)) {
			frontol.actions.showMessage(
				'Не задан IP адрес терминала Freedom Bank' +
					CR_MESSAGE +
					CONTACT_YOUR_TECHNICIAN_MESSAGE,
				Icon.Error
			);
			cancelAct();
			return;
		}

	var url = _getTerminalHttpAddress(terminalIpAdd);

	try {
		showMessage('Sending request to ' + url)
		showMessage('Payload ' + JSON.stringify(dataToSend))
		var result = sendHttpRequestSimple(url, 'POST', dataToSend);
		showMessage('RESULT FROM PRINT -> ' + JSON.stringify(result))
	} catch (e) {
		if (isAppIsNotLaunched(e)) {
			e.message = 'Не удалось отправить запрос на терминал. Убедитесь, что терминал включен' +
			' и приложение банка запущено.'
		}
		showMessage(
			'Ошибка при отправке запроса к терминалу Freedom Bank' +
				CR_MESSAGE +
				e.message +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}
}
// FreedomBank END
// ==============================================================