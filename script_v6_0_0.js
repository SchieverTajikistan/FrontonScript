//////////////////////////////////////////////
//                                          //
//     Modified : 2025-11-13 14:25 2025v7   //
//                                          //
//      Version : 7.0                       //
//                                          //
//       Author : RobotX, Kaliningrad, RU   //
//                                          //
//     Contacts : proc@robotx.ru            //
//                                          //
//  Description : F5-F6, RxLoyalty v.2,     //
//                AUCHAN DUSHANBE           //
//                                          //
//////////////////////////////////////////////

/* jshint maxerr: 1000 */ // error limit 1000
/* jshint -W082 */ // function declarations should not be placed in blocks
/* jshint -W004 */ // already defined
/* jshint -W038 */ // out of scope
/* jshint -W018 */ // confusing use of '!'

var LOG_DIR = 'D:/logs';
var IS_DUBUG = false;

//======Технология групп +
var ENTER = '\n';
var CONNECT_ERROR = 'Ошибка сети ' + ENTER;
var REQUEST_PROCESS = 'Идет запрос ждите...' + ENTER;
var REQUEST_PROCESS_OFD = 'Процесс печати чека...' + ENTER;
//================================================================
var CR_MESSAGE = '\n';
var CR = '\n';
var REQUEST_IN_PROCESS_MESSAGE = 'Обработка запроса...';
var TRY_AGAIN_MESSAGE = 'Попробуйте ещё раз';

var CONTACT_YOUR_TECHNICIAN_MESSAGE =
	'Обратитесь к администратору или к своему техническому специалисту' +
	CR_MESSAGE;
var SERVER_ADDRESS_NOT_SET_MESSAGE =
	'Не указан адрес сервера' + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var UNKNOWN_ERROR_MESSAGE = 'Неизвестная ошибка' + CR_MESSAGE;
var NO_SERVER_RESPONSE_MESSAGE = 'Нет ответа от сервера' + CR_MESSAGE;
var INTERNET_ERROR_MESSAGE = 'Ошибка сети' + CR_MESSAGE;
var SERVER_ERROR_MESSAGE = 'Ошибка сервера' + CR_MESSAGE;
var ERROR_MESSAGE = 'Ошибка' + CR_MESSAGE;
var DESCRIPTION_MESSAGE = 'Описание: ';
var HTTP_STATE_MESSAGE = 'Статус HTTP-запроса->';
var HTTP_CODE_MESSAGE = 'HTTP-код->';
//Технология групп -

var PROMO_TEXT_KEY = 'promoText';
var PROMO_TEXT_VALUE =
	'Поздравляем! Вы стали нашим 111-м покупателем в гипермаркете Би1. Вы стали обладателем подарка! Спасибо, что Вы с нами!';
var CUSTOM_ACTION_DATA = 'customActionData'; //customActionForAshan
var CUSTOM_ACTIONS_FILE_NAME = 'actions.txt'; //customActionForAshan
var SHELF_LIFE_DISCOUNTS_VALUE_NAME = 'ShelfLifeDiscounts';
var SHELF_LIFE_DISCOUNTS_PATH_VALUE_NAME = 'ShelfLifeDiscountsPath';
var SHELF_LIFE_DISCOUNTS_FILE = 'discounts.txt';

var BONUS_PAYMENT_CODE_NAME = 'BonusPaymentCode';
var COUPON_PAYMENT_CODE_NAME = 'CouponPaymentCode';
var DISCOUNT_PAYMENT_CODE_NAME = 'DiscountPaymentCode';
var DEPOSIT_PAYMENT_CODE_NAME = 'DepositPaymentCode';

var GET_ALL_CHECKS_FROM_CASH_VALUE_NAME = 'GetAllChecksFromCash';

var CR_MESSAGE = '\n';

var RX_LOYALTY_NAME = 'RxLoyalty';
var CONTROL_MENU_TITLE = 'Меню управления ' + RX_LOYALTY_NAME;

var REQUEST_IN_PROCESS_MESSAGE = 'Обработка запроса...';
var TRY_AGAIN_MESSAGE = 'Попробуйте ещё раз';
var REQUEST_WILL_BE_SEND_LATER_MESSAGE = 'Запрос будет отправлен позже';
var CHECK_SETTINGS_MESSAGE =
	'Проверьте настройки программы лояльности ' + RX_LOYALTY_NAME + CR_MESSAGE;
var OR_MESSAGE = 'или' + CR_MESSAGE;
var CONTACT_YOUR_TECHNICIAN_MESSAGE =
	'Обратитесь к администратору или к своему техническому специалисту' +
	CR_MESSAGE;
var CONTACT_SUPPORT_MESSAGE =
	'Обратитесь в службу поддержки программы лояльности ' +
	RX_LOYALTY_NAME +
	CR_MESSAGE;

var LICENSE_NOT_SET_MESSAGE =
	'Не указана лицензия' +
	CR_MESSAGE +
	CHECK_SETTINGS_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var SERVER_ADDRESS_NOT_SET_MESSAGE =
	'Не указан адрес сервера' +
	CR_MESSAGE +
	CHECK_SETTINGS_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var TOKEN_NOT_SET_MESSAGE =
	'Не указан токен авторизации' +
	CR_MESSAGE +
	CHECK_SETTINGS_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;

var LICENSE_NOT_FOUND_MESSAGE =
	'Лицензия не найдена' +
	CR_MESSAGE +
	CHECK_SETTINGS_MESSAGE +
	OR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var TOKEN_NOT_FOUND_MESSAGE =
	'Токен авторизации не найден' +
	CR_MESSAGE +
	CHECK_SETTINGS_MESSAGE +
	OR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;

var CARD_CODE_EMPTY_MESSAGE = 'Не указан номер карты, купона или сертификата';
var CARD_PATTERN_NOT_VALID_MESSAGE =
	'Номер карты, купона или сертификата не соответствует шаблону' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_PATTERN_NOT_EXIST_MESSAGE =
	'Шаблон номера карты, купона или сертификата не найден' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_BLOCKED_MESSAGE =
	'Карта, купон или сертификат заблокированы' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_ALREADY_REGISTERED_MESSAGE =
	'Карта, купон или сертификат скорее всего уже были зарегистрированы на другой кассе.' +
	CR_MESSAGE +
	'Одновременное использование на разных кассах не допускается' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE +
	OR_MESSAGE +
	CONTACT_SUPPORT_MESSAGE;
var CARD_SYNCHRONOUS_REGISTRATION_MESSAGE =
	'Попытка одновременной регистрации карты, купона или сертификата с разных касс' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_NOT_FOUND_MESSAGE =
	'Номер карты, купона или сертификата не найден' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_EXPIRED_MESSAGE =
	'Срок действия карты, купона или сертификата истек' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_ACCUMULATION_ONLY_MESSAGE =
	'Бонусная карта доступна только для накопления';
var CARD_REGISTRATION_CANCELED_MESSAGE = 'Ввод карты отменен';
var CARD_USING_NOT_CONFIRMED =
	'Правомерность использования карты не подтверждена';

var DOCUMENT_TYPE_NOT_FOUND_MESSAGE =
	'Не найден тип отправленного документа' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_TYPE_INCORRECT_MESSAGE =
	'Некорректный тип отправленного документа' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_DETAILS_EMPTY_MESSAGE =
	'Список товаров в отправленном документе пуст' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_DISCOUNTS_EMPTY_MESSAGE =
	'В отправленном документе нет скидок' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_ALREADY_RETURNED_MESSAGE =
	'По отправленному документу уже был возврат' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_EMPTY_MESSAGE =
	'Отправленый документ пуст' + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var PARENT_DOCUMENT_NOT_FOUND_MESSAGE =
	'Для отправленного документа не найден документ-основание' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_WILL_BE_SEND_LATER_MESSAGE = 'Документ будет отправлен позже';
var NO_OPENED_DOCUMENTS_MESSAGE = 'Нет открытых документов';
var NO_DELAYED_DOCUMENTS_TO_SEND_MESSAGE =
	'Нет отложенных документов для отправки';

var UNAUTHORIZED_MESSAGE =
	'Ошибка авторизации, возможно указан неверный токен' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var LICENSE_NOT_ACTIVE_MESSAGE =
	'Лицензия недействительна' + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var SUBJECT_NOT_FOUND_MESSAGE =
	'Не найден магазин, указанный для этой кассы' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CALCULATION_ALGORITHM_NOT_FOUND_MESSAGE =
	'Не найдены правила для расчета скидок' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var INVALID_CODE_TO_START_GENERATE =
	'Невозможно запустить генератор для отправленного кода' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var NO_CASH_PARAMS_FOR_LICENSE_MESSAGE =
	'Нет настроек для кассы с указанной лицензией' +
	CR_MESSAGE +
	CONTACT_YOUR_TECHNICIAN_MESSAGE;
var UNKNOWN_ERROR_MESSAGE = 'Неизвестная ошибка' + CR_MESSAGE;
var NO_SERVER_RESPONSE_MESSAGE = 'Нет ответа от сервера' + CR_MESSAGE;
var INTERNET_ERROR_MESSAGE = 'Ошибка сети' + CR_MESSAGE;
var SERVER_ERROR_MESSAGE = 'Ошибка сервера' + CR_MESSAGE;
var ERROR_MESSAGE = 'Ошибка' + CR_MESSAGE;
var DESCRIPTION_MESSAGE = 'Описание: ';
var INSUFFICIENT_FUNDS = 'Недостаточно средств для списания';

var INPUT_CARD_CODE_MESSAGE =
	'Введите или отсканируйте номер карты, сертификата,\nкупона или QR-код из мобильного приложения';

var INPUT_PHONE_NUMBER_MESSAGE =
	'Введите номер телефона' +
	CR_MESSAGE +
	'в международном формате (только цифры).' +
	CR_MESSAGE +
	'Для России первая цифра 7';
var PHONE_NUMBER_EMPTY_MESSAGE = 'Не указан номер телефона';
var PHONE_NUMBER_ERROR_MESSAGE =
	'Ошибка ввода номера телефона:\nНеобходимо указывать только цифры\nлибо номер слишком короткий!';
var PHONE_NUMBER_ALL_READY_REGISTERED_MESSAGE =
	'Этот телефонный номер уже зарегистрирован';

var INPUT_CONFIRM_CODE_MESSAGE = 'Введите код подтверждения:';
var CONFIRM_CODE_EMPTY_MESSAGE = 'Не указан код подтверждения';
var CONFIRM_CODE_ERROR_MESSAGE =
	'Ошибка ввода кода подтверждения:\nкод может состоять из четырех или более цифр!';
var CONFIRM_CODE_INCORRECT_MESSAGE = 'Неверный код подтверждения';
var SELECT_AVAILABLE_DISCOUNTS_MESSAGE = 'Выберите доступные скидки';

var HTTP_STATE_MESSAGE = 'Статус HTTP-запроса->';
var HTTP_CODE_MESSAGE = 'HTTP-код->';

var RX_LOYALTY_DIRECTORY = '';
var RX_LOYALTY_DIRECTORY_FRONTOL = '';
var RX_LOYALTY_DIRECTORY_FRONTOL_DEV = '';
var CUSTOM_ACTIONS_DATA_FILE_PATH = '';

var rxF2SM = null;
var rxEnterCard = null;

var cashBox = null;
var cashBoxItems = null;

var shelfLifeDiscounts = null;
//Технология Групп +
var AdminUser = 100000079;
var HeadCashier = 3;
//Технология Групп -
var FTP_REGEXP = /^ftp:\/\/(.+):(.+)@([^\/]+)\/(.+)$/;

// USER PARAMETERS \ START ===========================================================

VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS = 'FreedomBankTerminalIpAddress';

// USER PARAMTERS \ END ==============================================================

// sboboev+
// Уведомление о закрытии смены
function checkShiftReminder() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();

	if (hours === 23 && minutes >= 50 && minutes <= 59) {
		frontol.actions.showMessage(
			'Закройте смену! Через 10 минут ККМ будет заблокирована!',
			Icon.Warning
		);
	}
}
// sboboev-

function init() {
	var wScriptShell = new ActiveXObject('WScript.Shell');

	RX_LOYALTY_DIRECTORY =
		wScriptShell.ExpandEnvironmentStrings('%SystemDrive%') + '\\RxLoyalty';
	RX_LOYALTY_DIRECTORY_FRONTOL = RX_LOYALTY_DIRECTORY + '\\Frontol5';
	RX_LOYALTY_DIRECTORY_FRONTOL_DEV = RX_LOYALTY_DIRECTORY_FRONTOL + '\\dev';
	CUSTOM_ACTIONS_DATA_FILE_PATH =
		RX_LOYALTY_DIRECTORY_FRONTOL + '\\' + CUSTOM_ACTIONS_FILE_NAME;

	//подключаем методы для работы с JSON
	getJson2();
	toISOProto();

	// добавляем для типа String метод trim
	if (!String.prototype.trim) {
		(function () {
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function () {
				return this.replace(rtrim, '');
			};
		})();
	}

	// добавляем для типа Number метод round
	if (!Number.prototype.round) {
		(function () {
			Number.prototype.round = function (decimalNumber) {
				var multiplier = Math.pow(10, decimalNumber);
				return Math.round(this.valueOf() * multiplier) / multiplier;
			};
		})();
	}

	checkRequiredCashParams();

	loadTree();

	setCustomActionData(CUSTOM_ACTIONS_DATA_FILE_PATH); //customActionForAshan

	//ОТКРЫТИЕ ДОКУМЕНТА - ДО
	frontol.addEventListener('openDocument', 'beforeOpenDocument', true);

	//ОТКРЫТИЕ ДОКУМЕНТА - ПОСЛЕ
	frontol.addEventListener('openDocument', 'afterOpenDocument', false);

	//ЗАКРЫТИЕ ДОКУМЕНТА - ДО
	frontol.addEventListener('closeDocument', 'beforeCloseDocument', true);

	//ЗАКРЫТИЕ ДОКУМЕНТА - ПОСЛЕ
	frontol.addEventListener('closeDocument', 'afterCloseDocument', false);

	//ОТМЕНА ДОКУМЕНТА - ДО
	frontol.addEventListener('cancelDocument', 'beforeCancelDocument', true);

	//ОТМЕНА ДОКУМЕНТА - ПОСЛЕ
	frontol.addEventListener('cancelDocument', 'afterCancelDocument', false);

	//ВВОД ПЛАТЕЖА - ДО
	frontol.addEventListener('addPayment', 'addPaymentBefore', true);

	//ИЗМЕНЕНИЕ РЕЖИМА ДО
	//frontol.addEventListener("changeMode", "changeModeBefore", true);

	//УДАЛЕНИЕ ПЛАТЕЖА - ДО
	frontol.addEventListener('stornoPayment', 'stornoPaymentBefore', true);

	//УДАЛЕНИЕ ПЛАТЕЖА - ПОСЛЕ
	frontol.addEventListener('stornoPayment', 'stornoPaymentAfter', false);

	//ОТКРЫТИЕ СМЕНЫ - ПОСЛЕ
	frontol.addEventListener('openSession', 'afterOpenSession', false);

	//ЗАКРЫТИЕ СМЕНЫ - ДО
	frontol.addEventListener('closeSession', 'beforeCloseSession', true);

	//ЗАКРЫТИЕ СМЕНЫ - ПОСЛЕ
	frontol.addEventListener('closeSession', 'afterCloseSession', false);

	//ДОБАВЛЕНИЕ ПОЗИЦИИ - ДО
	frontol.addEventListener('addPosition', 'beforeAddPosition', true);

	//ДОБАВЛЕНИЕ ПОЗИЦИИ - ПОСЛЕ
	frontol.addEventListener('addPosition', 'afterAddPosition', false);

	//ИЗМЕНЕНИЕ ПОЗИЦИИ - ДО
	frontol.addEventListener('changePosition', 'beforeChangePosition', true);

	//ИЗМЕНЕНИЕ ПОЗИЦИИ - ПОСЛЕ
	frontol.addEventListener('changePosition', 'afterChangePosition', false);

	//ДОБАВЛЕНИЕ РУЧНОЙ СКИДКИ - ПОСЛЕ
	frontol.addEventListener(
		'addManualDiscount',
		'addManualDiscountAfter',
		false
	);

	//ВВОД КАРТЫ - ДО
	frontol.addEventListener('addCard', 'addCardBefore', true);

	// Проверка закрытии смены  -- sboboev
	frontol.addEventListener('addPosition', 'checkShiftReminder', false);

	// RX Card number form
	try {
		rxEnterCard = new ActiveXObject('RobotX.EnterCard');
	} catch (e) {
		if (
			isDebugMode() &&
			getClientUUID() == 'A7DAA9DB-5664-DF4C-ACE0-CE39CFD695C6'
		) {
			showMessage(
				'Ошибка инициализации компоненты RobotX.EnterCard!' +
					CR_MESSAGE +
					e.message +
					CR_MESSAGE +
					CONTACT_YOUR_TECHNICIAN_MESSAGE,
				Icon.Error
			);
		}
	}

	if (isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) {
		copyShelfLifeDiscountsFile();
	}

	JetQrPayInit();
	EMVCo_JetQrPayInit();
	dcinit();
	FreedomBankInit()
}

//==========================================================================================================================================================================================
//ПРОЦЕССИНГ BEGIN
FunctionsOfEventListeners: {
	//ИЗМЕНЕНИЕ РЕЖИМА ДО
	function changeModeBefore() {
		// showMessage("changeMode event");
	}

	//ОТКРЫТИЕ ДОКУМЕНТА - ДО
	function beforeOpenDocument() {
		var doc = frontol.currentDocument;

		if (
			getClientUUID() == 'E97FC591-1DC1-472C-AA47-070A8E93954B' &&
			isReceiptDocument(doc)
		) {
			inputReceiptDocumentInformation(doc);
		}

		if (frontol.userValues.get('IsShiftClosed') == '1') {
			afterOpenSession();
		}

		if (frontol.userValues.get('ForbidReturnWithPayments') != '') {
			forbidReturnDocWithProcPayments();
		}
		// CashBox
		if (getClientUUID() === '29A1BC43-C747-4B97-ACD7-6F74CFC88BA1') {
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
            }*/
		}
		//Технология Групп +
		if (IsFRfromTG()) {
			if (IsSessionOpen()) {
				// Смена уже открыта — ничего не делаем
			} else {
				var options = {
					formCode: 'OPEN_SHIFT',
					ffdVersion: 'VER_1',
					shouldPrintSlip: true,
					cashier: frontol.currentUser.name,
					kktVersion: '1'
				};

				var stringToSend = JSONStringify(options);
				var FRadress = frontol.userValues.get('fiscalipadres');
				var result = sendtofiscal(FRadress, 'openShift', stringToSend);

				if (result.rc !== 'SUCCESS') {
					var error = getErrorOFD(result.rc);
					frontol.userValues.set('IsSessionOn', '0');
					frontol.actions.showMessage(
						'Ответ ОФД с ошибкой: ' + CR_MESSAGE + ' -> ' + error,
						Icon.Error
					);
					cancelAct();
					return;
				}

				frontol.userValues.set('IsSessionOn', '1');
			}
		}
		//Технология Групп -
	}

	//ОТКРЫТИЕ ДОКУМЕНТА - ПОСЛЕ
	function afterOpenDocument() {
		var doc = frontol.currentDocument;
		// прихода товара
		if (isReceiptDocument(doc)) {
			if (doc.counteragent.code == 0) {
				sendKeys('^+5'); // Ctrl-Shift-5
			}
		}
		// second monitor
		if (frontol.userValues.get('SecondMonitor') == '1') {
			if (rxF2SM === null) {
				rxF2SM = new RxFrontolToSecondMonitor();
			} else {
				if (isSaleDocument(doc)) {
					rxF2SM.deleteRegisterInfo();
					rxF2SM.deleteCheque();
				}
			}
		}
		//Параметры
		// Используется для обмена заказов из 1С Битрикс
		vSet('FilePath', '\\\\10.101.42.107\\Rarus\\BitrixOrders\\');
		EO_AfterOpenDocument();
	}

	//ЗАКРЫТИЕ ДОКУМЕНТА - ДО
	function beforeCloseDocument() {
		var doc = frontol.currentDocument;

		//если документ - продажа
		if (
			isSaleDocument(doc) &&
			frontol.userValues.get('SumToCreateCard') != ''
		) {
			requestCreateCard();
		}

		if (
			frontol.userValues.get('SaleBeforePrintCheck') == '1' &&
			isSaleDocument(doc)
		) {
			//если документ - продажа и введена хотя бы одна карта
			if (
				doc.userValues.get('cardBoxDocDiscDtos') != '' ||
				frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) ==
					'1'
			) {
				var stringToSend = getSaleDataAfterClosing(doc);

				if (doc.userValues.get('cardBoxDocDiscDtos') != '') {
					sendDocumentAfterClosing(stringToSend, 1);
				}

				if (
					frontol.userValues.get(
						GET_ALL_CHECKS_FROM_CASH_VALUE_NAME
					) == '1'
				) {
					saveDocumentAfterClosing(stringToSend, 1);
				}
			}
			//GetFooter(doc);
		}

		EO_BeforeCloseDocument();

		//Технология групп +
		getJson2();
		StatusKKM();
		var doc = frontol.currentDocument;
		if (isVnesenieDocument(doc)) {
			var FRadress = frontol.userValues.get('fiscalipadres');
			var options = {
				formCode: 'ADD_CASH',
				shouldPrintSlip: true,
				addAmount: Number(doc.totalSum * 100)
			};
			var stringToSend = JSONStringify(options);
			var result = sendtofiscal(FRadress, 'addCash', stringToSend);
			if (result.rc !== 'SUCCESS') {
				var error = getErrorOFD(result.rc);
				frontol.actions.showMessage(
					'Ответ ОФД с ошибкой: ' + CR_MESSAGE + ' -> ' + error,
					Icon.Error
				);
				//break;
				cancelAct();
				return;
			}
			OpenDraw();
		}

		if (doc.type.operation == 5) {
			// изъятие/выплата
			var FRadress = frontol.userValues.get('fiscalipadres');
			var options = {
				formCode: 'REMOVE_CASH',
				shouldPrintSlip: true,
				removeAmount: Number(doc.totalSum * 100)
			};
			var stringToSend = JSONStringify(options);
			var result = sendtofiscal(FRadress, 'removeCash', stringToSend);
			if (result.rc !== 'SUCCESS') {
				var error = getErrorOFD(result.rc);
				frontol.actions.showMessage(
					'Ответ ОФД с ошибкой: ' + CR_MESSAGE + ' -> ' + error,
					Icon.Error
				);
				//break;
				cancelAct();
				return;
			}
			OpenDraw();
		}

		//
		if (isSaleDocument(doc) || isReturnDocument(doc)) {
			//Окно печати
			ManualPrintOptionsButton();

			if (IsFRfromTG()) {
				if (IsSessionOpen()) {
					// Значение параметры вариантов печати чека
					var PrintWithoutSending = frontol.userValues.get(
						'PrintWithoutSending'
					);
					var PrintWithSendingToPhone = frontol.userValues.get(
						'PrintWithSendingToPhone'
					);
					var PrintWithSendingToMail = frontol.userValues.get(
						'PrintWithSendingToMail'
					);
					var PrintOption = '';

					// Обработка значение параметров печати
					if (PrintWithoutSending == '1') {
						PrintOption = null;
					} else if (PrintWithSendingToPhone !== '') {
						PrintOption = PrintWithSendingToPhone;
					} else if (PrintWithSendingToMail !== '') {
						PrintOption = PrintWithSendingToMail;
					}

					var stringToSend = GiveDocumentToString(doc, PrintOption);
					var FRadress = frontol.userValues.get('fiscalipadres');
					var result = sendtofiscal(
						FRadress,
						'formReceipt',
						stringToSend
					);
					if (result.rc !== 'SUCCESS') {
						var error = getErrorOFD(result.rc);
						frontol.actions.showMessage(
							'Ответ ОФД с ошибкой: ' +
								CR_MESSAGE +
								' -> ' +
								error,
							Icon.Error
						);
						//break;
						cancelAct();
						return;
					}
					// Очищаем значение параметров печати
					ClearValuePrintOptions();
					OpenDraw();
				}
			}
		}
		//Технология Групп -
	}

	//ЗАКРЫТИЕ ДОКУМЕНТА - ПОСЛЕ
	function afterCloseDocument() {
		var doc = frontol.currentDocument;
		if (
			frontol.userValues.get('SecondMonitor') == '1' &&
			rxF2SM !== null &&
			isSaleDocument(doc)
		) {
			rxF2SM.deleteCheque();
		}

		// выгрузка сертификатов для РЮД
		if (getClientUUID() === '75F55178-1B5C-4001-B852-1B61746896D2') {
			var rudGiftCards = new RudGiftCards();
			rudGiftCards.upload();
		}

		var sumToCreateCoupon = Number(
			frontol.userValues.get('SumToCreateCoupon')
		);
		var stringToSend = '';
		// автокупоны
		if (
			isSaleDocument(doc) && // продажа
			!isNaN(sumToCreateCoupon) &&
			sumToCreateCoupon > 0 && // число, ненулевое значение
			doc.totalSum > sumToCreateCoupon && // сумма документа больше минимально необходимой суммы
			!doc.userValues.get('cardBoxNumbers') // не было введено никаких карт
		) {
			stringToSend = getSaleDataAfterClosing(doc);
			sendDocumentAfterClosing(stringToSend, 1);
		}

		if (
			frontol.userValues.get('SaleBeforePrintCheck') != '1' &&
			isSaleDocument(doc)
		) {
			//если документ - продажа и введена хотя бы одна карта
			if (
				doc.userValues.get('cardBoxNumbers') != '' ||
				frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) ==
					'1'
			) {
				stringToSend = getSaleDataAfterClosing(doc);

				if (doc.userValues.get('cardBoxNumbers') != '') {
					sendDocumentAfterClosing(stringToSend, 1);
				}

				if (
					frontol.userValues.get(
						GET_ALL_CHECKS_FROM_CASH_VALUE_NAME
					) == '1'
				) {
					saveDocumentAfterClosing(stringToSend, 1);
				}
			}
			//GetFooter(doc);
		}
		//если документ - возврат
		if (isReturnDocument(doc)) {
			// существует документ-основание и в документе основании введена одна карта
			if (
				doc.baseDocument.number != null &&
				doc.baseDocument.number != ''
			) {
				stringToSend = getReturnDataAfterClosing(doc);

				if (
					doc.baseDocument.userValues.get('cardBoxDocDiscDtos') != ''
				) {
					sendDocumentAfterClosing(stringToSend, 2);
				}
			}
			// если документ возврата не на основании
			else if (
				getClientUUID() === '29A1BC43-C747-4B97-ACD7-6F74CFC88BA1'
			) {
				var baseDocUserValuesString = doc.userValues.get(
					'BaseDocumentUserValues'
				);

				if (baseDocUserValuesString) {
					baseDocUserValuesString = base64_decode(
						baseDocUserValuesString
					);

					var baseDocumentUserValues = deserializingDocumentUserValue(
						baseDocUserValuesString
					);

					stringToSend = getReturnDataAfterClosing(
						doc,
						false,
						baseDocumentUserValues
					);

					if (
						baseDocumentUserValues.cardBoxDocDiscDtos !==
							undefined &&
						baseDocumentUserValues.cardBoxDocDiscDtos
					) {
						sendDocumentAfterClosing(stringToSend, 2);
					}
				}
			}
			// сбор всех чеков
			if (
				frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) ==
				'1'
			) {
				saveDocumentAfterClosing(stringToSend, 2);
			}
		}
	}

	// ОТМЕНА РЕГИСТРАЦИИ КАРТЫ
	function cancelCardRegister(cardNumber) {
		var currentDocument = null;
		//проверим, что текущий документ существует
		try {
			currentDocument = frontol.currentDocument;
		} catch (e) {}

		if (currentDocument == null) {
			showMessage(NO_OPENED_DOCUMENTS_MESSAGE, Icon.Error);
			return;
		}

		if (!isSaleDocument(currentDocument)) {
			showMessage(
				OPERATION_AVAILABLE_IN_SALE_DOCUMENT_ONLY_MESSAGE,
				Icon.Error
			);
			return;
		}

		if (frontol.userValues.get('SecondMonitor') == '1' && rxF2SM !== null) {
			rxF2SM.deleteRegisterInfo();
		}

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) {
			showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		//получаем токен
		var accessToken = getAccessToken();

		if (!accessToken) {
			showMessage(TOKEN_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		var result = {
			success: false,
			message: '',
			data: ''
		};

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			AccessTokenGuid: accessToken,
			CardCode: cardNumber
		});

		result = sendHttpRequest(
			processingServerAddress + '/BonusWebApi/api/processing/cancel',
			'POST',
			stringToSend,
			'register_cancel'
		);

		if (result.success) {
			if (getClientUUID() == '4C70C190-EAD8-43A8-87DE-212899357830')
				cardNumber = hideCardNumber(cardNumber);

			showMessage(
				'Регистрация в процессинге успешно отменена!' +
					CR_MESSAGE +
					'Номер: ' +
					cardNumber
			);
		} else {
			showMessage(result.message, Icon.Error);
		}
	}
	// ОТМЕНА ДОКУМЕНТА - ДО
	function beforeCancelDocument() {
		var doc = frontol.currentDocument;
		// прихода товара
		if (
			getClientUUID() == 'E97FC591-1DC1-472C-AA47-070A8E93954B' &&
			isReceiptDocument(doc)
		) {
			doc.userValues.remove('receiptNumber');
			doc.userValues.remove('receiptDate');
		}
	}
	// ОТМЕНА ДОКУМЕНТА - ПОСЛЕ
	function afterCancelDocument(cancelOnlyCard) {
		if (typeof cancelOnlyCard == 'undefined') {
			cancelOnlyCard = false;
		}

		var currentDocument = null;
		//проверим, что текущий документ существует
		try {
			currentDocument = frontol.currentDocument;
		} catch (e) {}

		if (currentDocument == null) {
			showMessage(NO_OPENED_DOCUMENTS_MESSAGE, Icon.Error);
			return;
		}

		if (
			frontol.userValues.get('SecondMonitor') == '1' &&
			rxF2SM !== null &&
			isSaleDocument(currentDocument)
		) {
			rxF2SM.deleteRegisterInfo();

			if (!cancelOnlyCard) {
				rxF2SM.deleteCheque();
			}
		}

		if (isSaleDocument(currentDocument)) {
			var cardBoxNumbers =
				currentDocument.userValues.get('cardBoxNumbers');

			if (cardBoxNumbers) {
				var processingServerAddress = getServerAddress();

				if (!processingServerAddress) {
					showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
					return;
				}

				//получаем лицензию
				var license = getLicense();

				if (!license) {
					showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
					return;
				}

				//получаем токен
				var accessToken = getAccessToken();

				if (!accessToken) {
					showMessage(TOKEN_NOT_SET_MESSAGE, Icon.Error);
					return;
				}

				var cardBoxNumbersArray = cardBoxNumbers.split(';');

				for (var i = 0; i < cardBoxNumbersArray.length; i++) {
					var result = {
						success: false,
						message: '',
						data: ''
					};

					//формируем строку для отправки
					var stringToSend = JSON.stringify({
						LicenseGuid: license,
						AccessTokenGuid: accessToken,
						CardCode: cardBoxNumbersArray[i]
					});

					result = sendHttpRequest(
						processingServerAddress +
							'/BonusWebApi/api/processing/cancel',
						'POST',
						stringToSend,
						'register_cancel'
					);

					if (result.success) {
						var cardNumber = cardBoxNumbersArray[i];

						if (
							getClientUUID() ==
							'4C70C190-EAD8-43A8-87DE-212899357830'
						)
							cardNumber = hideCardNumber(cardNumber);

						showMessage(
							'Регистрация в процессинге успешно отменена!\n' +
								'Номер: ' +
								cardNumber
						);
					} else {
						showMessage(result.message, Icon.Error);
					}
				}
			}
		}
		EO_BeforeCancelDocument();
	}

	// ВВОД ПЛАТЕЖА - ДО
	function addPaymentBefore(payment) {
		var doc = frontol.currentDocument;
		//если документ - продажа
		if (isSaleDocument(doc)) {
			CheckEnterPayment(payment, 1);
			if (IsExtraEnabled('ExtraTaxKyrgyzstan'))
				ControlEnterPayment_ExtraTaxKyrgyzstan(payment);
		}

		if (isReturnDocument(doc)) {
			CheckEnterPayment(payment, 2);
		}

		EO_BeforeAddPayment(payment);
	}

	//УДАЛЕНИЕ ПЛАТЕЖА - ДО
	function stornoPaymentBefore(payment) {
		//если документ - продажа
		if (isSaleDocument(frontol.currentDocument)) {
			CheckDeletePayment(payment, 1);
		}

		EO_BeforeRemovePayment(payment);
	}

	//УДАЛЕНИЕ ПЛАТЕЖА - ПОСЛЕ
	function stornoPaymentAfter(payment) {
		//если документ - продажа
		if (isSaleDocument(frontol.currentDocument)) {
			if (IsExtraEnabled('ExtraTaxKyrgyzstan'))
				ControlStornoPayment_ExtraTaxKyrgyzstan();
		}
	}

	//ОТКРЫТИЕ СМЕНЫ - ПОСЛЕ
	function afterOpenSession() {
		frontol.userValues.set('IsShiftClosed', '0');
		getCashParams(true);

		if (isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) {
			copyShelfLifeDiscountsFile();
		}

		if (
			frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == '1'
		) {
			clearStatFiles();
		}

		setCustomActionData(CUSTOM_ACTIONS_DATA_FILE_PATH); //customActionForAshan

		// Promo action
		/*if (getClientUUID() == "A527335D-BE7A-4D52-AAE0-DAC465A0BB5C") {
            var dbRx = new RxDB();
            var connected = dbRx.connect();

            if (!connected) {
                showMessage("Соединение с базой настроек промо-акции не установлено!");
            }
            else {
                var promoRx = new RxPromo(dbRx);

                promoRx.init(false);
            }
        }*/

		//Технология Групп +
		getJson2();
		//Технология Групп +
		if (IsFRfromTG()) {
			if (IsSessionOpen()) {
				showMessage('Смена открыта в ККМ', Icon.Exclamation);
			} else {
				var options = {
					formCode: 'OPEN_SHIFT',
					ffdVersion: 'VER_1',
					shouldPrintSlip: true,
					cashier: frontol.currentUser.name,
					kktVersion: '1'
				};

				var stringToSend = JSONStringify(options);
				var FRadress = frontol.userValues.get('fiscalipadres');
				var result = sendtofiscal(FRadress, 'openShift', stringToSend);
				frontol.userValues.set('IsSessionOn', '1');
				if (result.rc !== 'SUCCESS') {
					var error = getErrorOFD(result.rc);
					frontol.actions.showMessage(
						'Ответ ОФД с ошибкой: ' + CR_MESSAGE + ' -> ' + error,
						Icon.Error
					);
					//break;
					cancelAct();
					return;
				}
			}
			//frontol.userValues.set("IsSessionOn", "1");
		}
		//Технология Групп -
	}
	//ЗАКРЫТИЕ СМЕНЫ - ДО
	function beforeCloseSession() {
		if (getClientUUID() === '29A1BC43-C747-4B97-ACD7-6F74CFC88BA1') {
			/*if (!cashBox) {
                showMessage(
                    "Компонента для работы с CashBoxSystem не была проинициализирована!" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE,
                    Icon.Error
                );
                cancelAct();
            }

            var operatorName = frontol.currentUser.name;
            var operatorCode = frontol.currentUser.code;
            var documentNumber = frontol.currentDocument.number;
            var kkmPos = -1;

            if (!cashBox.CloseShift(operatorName, operatorCode, documentNumber, kkmPos)) {
                if (cashBox.LastError.length === 0) {
                    showMessage("Ошибка закрытия смены CashBoxSystem!", Icon.Error);
                    cancelAct();
                }
                else {
                    showMessage("Ошибка закрытия смены CashBoxSystem!" + CR_MESSAGE + cashBox.LastError + "!", Icon.Error);
                    cancelAct();
                }
            }*/
		}
	}

	//ЗАКРЫТИЕ СМЕНЫ - ПОСЛЕ
	function afterCloseSession() {
		frontol.userValues.remove(CUSTOM_ACTION_DATA);
		frontol.userValues.set('IsShiftClosed', '1');
		SendDelayed(true);
		//Технология групп +
		getJson2();

		if (IsFRfromTG()) {
			if (IsSessionOpen()) {
				var options = {
					formCode: 'CLOSE_SHIFT',
					ffdVersion: 'VER_1',
					shouldPrintSlip: true,
					cashier: frontol.currentUser.name,
					kktVersion: '1'
				};
				var stringToSend = JSONStringify(options);
				var FRadress = frontol.userValues.get('fiscalipadres');
				var result = sendtofiscal(FRadress, 'closeShift', stringToSend);
				frontol.userValues.set('IsSessionOn', '0');
				if (result.rc !== 'SUCCESS') {
					var error = getErrorOFD(result.rc);
					frontol.actions.showMessage(
						'Ответ ОФД с ошибкой: ' + CR_MESSAGE + ' -> ' + error,
						Icon.Error
					);
					cancelAct();
					return;
				}
				frontol.userValues.set('IsSessionOn', '0');
				OpenDraw();
			}
		}
		// Технология групп -
	}

	//ДОБАВЛЕНИЕ ПОЗИЦИИ - ДО
	function beforeAddPosition(pos) {
		var doc = frontol.currentDocument;

		if (
			getClientUUID() == 'A7DAA9DB-5664-DF4C-ACE0-CE39CFD695C6' &&
			isExcisableWare(pos.ware)
		) {
			if (!is18YearsOld()) {
				cancelAct();
			}
		}

		if (getClientUUID() == 'E97FC591-1DC1-472C-AA47-070A8E93954B') {
			// прихода товара
			if (isReceiptDocument(doc)) {
				if (doc.counteragent.code == 0)
					showError('Необходимо указать контрагента!');
			}
		}

		//if (getClientUUID() === "29A1BC43-C747-4B97-ACD7-6F74CFC88BA1") forbidAlco(pos);

		//если в документе есть процессинговая карта
		if (doc.userValues.get('FirstCardNumber') != '') {
			showError('Введены процессинговые карты!');
		}

		if (
			isSaleDocument(doc) &&
			isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)
		) {
			// продажа
			if (shelfLifeDiscounts == null) {
				shelfLifeDiscounts = new RxShelfLifeDiscounts(doc);
			}

			shelfLifeDiscounts.clearLastAddedWare();

			shelfLifeDiscounts.saveLastAddedWare(pos, true);

			if (
				(pos.ware.type == 1 && pos.ware.hasAlcoStamp == 1) ||
				pos.ware.type > 0
			) {
				// выходим если это маркированная продукция или алкоголь с акцизной маркой
				return;
			}

			var posId = shelfLifeDiscounts.getWareWithoutDiscountPostionId(
				pos.ware.code
			);

			if (posId > -1) {
				shelfLifeDiscounts.addWareToPosition(
					pos.ware.code,
					pos.quantity,
					posId
				);
				cancelAct();
			}
		}
	}
	// ИЗМЕНЕНИЕ ПОЗИЦИИ - ДО
	function beforeChangePosition(pos) {
		var doc = frontol.currentDocument;

		if (
			getClientUUID() == 'A7DAA9DB-5664-DF4C-ACE0-CE39CFD695C6' &&
			isExcisableWare(pos.ware)
		) {
			if (!is18YearsOld()) {
				cancelAct();
			}
		}

		//if (getClientUUID() === "29A1BC43-C747-4B97-ACD7-6F74CFC88BA1") forbidAlco(pos);

		//если в документе есть процессинговая карта
		if (doc.userValues.get('FirstCardNumber') != '') {
			showError('Введены процессинговые карты!');
		}

		if (
			isSaleDocument(doc) &&
			isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)
		) {
			// продажа
			if (shelfLifeDiscounts == null) {
				shelfLifeDiscounts = new RxShelfLifeDiscounts(doc);
			}

			var shelfLifeDiscount = shelfLifeDiscounts.getDiscount(
				pos.ware.code,
				pos.id
			);
			var textMessage = '';

			if (shelfLifeDiscount > 0) {
				textMessage =
					'На позицию установлена цена с учётом скидки по сроку годности,';
			}

			textMessage += '\nредактирование запрещено!';

			if (pos.storno === 0 && shelfLifeDiscount > 0) {
				showMessage(textMessage);
				cancelAct();
			}
		}
	}

	//ДОБАВЛЕНИЕ ПОЗИЦИИ - ПОСЛЕ
	function afterAddPosition(pos) {
		var doc = frontol.currentDocument;

		if (frontol.userValues.get('SecondMonitor') == '1') {
			if (rxF2SM) rxF2SM.updateCheque(doc);
		}

		if (
			isSaleDocument(doc) &&
			isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)
		) {
			// продажа
			if (pos.ware.type === 0) {
				// только для обычного товара
				shelfLifeDiscounts.saveLastAddedWare(pos, false);
			}
		}
	}

	//ИЗМЕНЕНИЕ ПОЗИЦИИ - ПОСЛЕ
	function afterChangePosition(pos) {
		var doc = frontol.currentDocument;

		if (frontol.userValues.get('SecondMonitor') == '1') {
			if (rxF2SM) rxF2SM.updateCheque(doc);
		}

		if (
			isSaleDocument(doc) &&
			isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)
		) {
			// продажа
			if (pos.ware.type === 0) {
				// только для обычного товара
				shelfLifeDiscounts.saveLastAddedWare(pos, false);
			}
		}
	}

	// ДОБАВЛЕНИЕ РУЧНОЙ СКИДКИ - ПОСЛЕ
	function addManualDiscountAfter(discount) {
		var doc = frontol.currentDocument;

		if (frontol.userValues.get('SecondMonitor') == '1') {
			if (rxF2SM) rxF2SM.updateCheque(doc);
		}
	}

	//ВВОД КАРТЫ - ДО
	function addCardBefore() {
		//если в документе есть процессинговая карта
		if (
			frontol.userValues.get('DontWorkWithStandartCards') == '1' &&
			frontol.currentDocument.userValues.get('FirstCardNumber') != ''
		) {
			showError('Введены карты другого типа!');
		}
	}
}
//==========================================================================================================================================================================================

MainFunctions: {
	//ПОЛУЧЕНИЕ ГЛОБАЛЬНЫХ ПЕРЕМЕННЫХ
	/* silent - режим выполнения (true - фоновый, false - обычный)*/
	function getCashParams(silent) {
		//получаем лицензию
		var license = getLicense();

		if (!license) showError(LICENSE_NOT_SET_MESSAGE);

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		var result = {
			success: false,
			message: '',
			data: ''
		};

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license
		});

		result = sendHttpRequest(
			processingServerAddress + '/BonusWebApi/api/processing/cashparams',
			'POST',
			stringToSend,
			'cashparams'
		);

		if (result.success) {
			ClearGlobal(GetSettingsArray());

			for (var i = 0; i < result.data.CashParamResponseDtos.length; i++) {
				if (result.data.CashParamResponseDtos[i].Value) {
					frontol.userValues.set(
						result.data.CashParamResponseDtos[
							i
						].Name.toString().trim(),
						result.data.CashParamResponseDtos[
							i
						].Value.toString().trim()
					);
				}
			}

			if (
				'GlasswareResponseDtos' in result.data &&
				result.data.GlasswareResponseDtos
			) {
				var tare = new RxTare();
				tare.load(result.data.GlasswareResponseDtos);
			}

			// получить список программ лояльности для РЮД
			if (getClientUUID() === '75F55178-1B5C-4001-B852-1B61746896D2') {
				var rxLoyaltyPrograms = new LoyaltyPrograms();
				rxLoyaltyPrograms.get();
			}

			if (silent == false) {
				showMessage('Параметры кассы успешно загружены.');
			}
		} else {
			showMessage(result.message, Icon.Error);
			return;
		}
	}

	//ВЫВЕСТИ НА ЭКРАН ПАРАМЕТРЫ КАССЫ
	function ShowCashParams() {
		var settingsArray = GetSettingsArray();
		var messageArray = [];

		for (var i = 0; i < settingsArray.length; i++) {
			if (frontol.userValues.get(settingsArray[i]) != '') {
				var k = messageArray.length;

				messageArray[k] =
					settingsArray[i] +
					': ' +
					frontol.userValues.get(settingsArray[i]);
			}
		}

		var message = '';

		message += messageArray.join('\n');
		showMessage(message);
	}

	//ФОРМИРОВАНИЕ ОТСЫЛАЕМЫХ ДАННЫХ ПРИ ПРОДАЖЕ ПОСЛЕ ПРОБИТИЯ ЧЕКА
	// doc - документ
	// функция возвращает строку с данными
	function getSaleDataAfterClosing(doc) {
		//получаем лицензию
		var license = getLicense();

		if (!license) showError(LICENSE_NOT_SET_MESSAGE);

		if (
			isSaleDocument(doc) &&
			getClientUUID() == '29A1BC43-C747-4B97-ACD7-6F74CFC88BA1'
		) {
			doc.userValues.set('License', license);
			doc.userValues.set('CashBoxCode', frontol.codeWorkplace.toString());
			doc.userValues.set('DocumentBarcode', doc.barcode);
		}

		//получаем токен
		var token = getAccessToken();

		if (!token) showError(TOKEN_NOT_SET_MESSAGE);

		var tDocumentDateTime = '';
		// если в процессинге продажу закрываем  до закрытия чека, то берём текущее время
		if (frontol.userValues.get('SaleBeforePrintCheck') == '1') {
			var nowDateTime = getISODateTimeToString(':');
			var nowDateTimeArray = nowDateTime.split('T');

			tDocumentDateTime = nowDateTimeArray[0] + ' ' + nowDateTimeArray[1];
		} else {
			//формируем строку с датой и временем закрытия документа в формате YYYY-MM-DD HH24:MM:SS
			var dateList = doc.dateClose.split('.');

			tDocumentDateTime =
				'20' +
				dateList[2] +
				'-' +
				dateList[1] +
				'-' +
				dateList[0] +
				' ' +
				doc.timeClose;
		}

		//формируем массив объектов с картами
		var tDocumentDiscountDtos = [];
		var totalDiscount = 0.0;

		if (doc.userValues.get('cardBoxDocDiscDtos') != '') {
			var cardBoxDocDiscDtos = doc.userValues.get('cardBoxDocDiscDtos');
			var allCardsArray = cardBoxDocDiscDtos.split(';');

			for (var i = 0; i < allCardsArray.length; i++) {
				var cardArray = allCardsArray[i].split('&');
				var discount = Number(cardArray[4]);

				totalDiscount += discount;

				tDocumentDiscountDtos[i] = {
					AccountId: Number(cardArray[0]),
					CardCode: cardArray[1],
					SumBase: Number(cardArray[2]).round(2),
					SumDiscounted: Number(cardArray[3]).round(2),
					Discount: Number(discount).round(2),
					Percent: Number(cardArray[5]).round(2)
				};

				// ProcV2, передаем BonusDiscount
				if (cardArray.length > 6) {
					tDocumentDiscountDtos[i].BonusDiscount = Number(
						cardArray[6]
					).round(2);
				}
			}
		} else if (
			frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == '1'
		) {
			tDocumentDiscountDtos[0] = {
				CardCode: '',
				SumBase: doc.sum,
				SumDiscounted: doc.totalSum,
				Discount: doc.totalSumDiscount,
				Percent: doc.totalPercentDiscount
			};
		}
		// автокупоны
		var sumToCreateCoupon = Number(
			frontol.userValues.get('SumToCreateCoupon')
		);

		if (
			!isNaN(sumToCreateCoupon) &&
			sumToCreateCoupon > 0 && // число, ненулевое значение
			doc.totalSum > sumToCreateCoupon && // сумма документа больше минимально необходимой суммы
			!doc.userValues.get('cardBoxNumbers') // не было введено никаких карт
		) {
			tDocumentDiscountDtos[0] = {
				CardCode: '0',
				SumBase: doc.sum,
				SumDiscounted: doc.totalSum,
				Discount: doc.totalSumDiscount,
				Percent: doc.totalPercentDiscount
			};
		}

		//формируем массив объектов с позициями
		var tDocumentDetailDtos = [];
		var numberInArray = 0;

		var bonusDiscountPositions = doc.userValues.get(
			'BonusDiscountPositions'
		);
		var bonusDiscountPositionsArray = [];

		if (bonusDiscountPositions.length > 0) {
			bonusDiscountPositionsArray = bonusDiscountPositions.split(';');
		}

		//doc.position.count возвращает кол-во позиций с учетом сторнированных
		for (
			doc.position.index = 1;
			doc.position.index <= doc.position.count;
			doc.position.index++
		) {
			//если позиция не сторнирована
			if (doc.position.storno == 1) continue;

			tDocumentDetailDtos[numberInArray] = {
				ProductCode:
					frontol.userValues.get('WareMarkPrefix') +
					(isCodeWareId()
						? doc.position.ware.code.toString()
						: doc.position.ware.mark),
				Quantity: Number(doc.position.quantity).round(3),
				TotalPrice: Number(doc.position.sum).round(2),
				TotalPriceDiscounted: Number(doc.position.totalSum).round(2)
			};

			var marketPrograms = new RxMarketPrograms();
			var marketProgram = marketPrograms.getPositionMarketProgram(
				doc.position.id
			);

			if (
				marketProgram &&
				marketProgram.length > 0 &&
				!isNaN(parseInt(marketProgram[1], 10))
			) {
				tDocumentDetailDtos[numberInArray].MarketProgramId = Number(
					marketProgram[1]
				);
				tDocumentDetailDtos[numberInArray].MarketProgramIsForced =
					marketProgram[2] == '1' ? true : false;
			} else {
				tDocumentDetailDtos[numberInArray].MarketProgramId = 0;
				tDocumentDetailDtos[
					numberInArray
				].MarketProgramIsForced = false;
			}

			var cardBoxSpecialDetailDto = '';

			cardBoxSpecialDetailDto = getCardBoxSpecialDetailDto(
				doc,
				doc.position.index
			);

			if (cardBoxSpecialDetailDto) {
				tDocumentDetailDtos[numberInArray].SpecialPrice = Number(
					cardBoxSpecialDetailDto.SpecialPrice
				);
				tDocumentDetailDtos[numberInArray].SpecialPriceQuantity =
					Number(cardBoxSpecialDetailDto.SpecialPriceQuantity);
			}

			if (bonusDiscountPositionsArray.length > 0) {
				for (var i = 0; i < bonusDiscountPositionsArray.length; i++) {
					var bonusDiscountPositionString =
						bonusDiscountPositionsArray[i];

					var bonusDiscountPositionArray =
						bonusDiscountPositionString.split('&');

					if (bonusDiscountPositionArray.length >= 2) {
						var positionIndex = Number(
							bonusDiscountPositionArray[0]
						);
						var positionSpendBonuses = Number(
							bonusDiscountPositionArray[1]
						).round(2);

						if (positionIndex == doc.position.index) {
							tDocumentDetailDtos[numberInArray].BonusDiscount =
								positionSpendBonuses;
							// скидка за счет оплаты бонусами
							if (
								Number(
									frontol.userValues.get(
										BONUS_PAYMENT_CODE_NAME
									)
								) > 0
							) {
								tDocumentDetailDtos[
									numberInArray
								].TotalPriceDiscounted = Number(
									tDocumentDetailDtos[numberInArray]
										.TotalPriceDiscounted -
										positionSpendBonuses
								).round(2);
							}

							break;
						}
					}
				}
			}
			numberInArray++;
		}

		//формируем объект с данными
		var dataJSON = {
			LicenseGuid: license,
			AccessTokenGuid: token,
			CashierName: frontol.currentUser.name,
			ProcV2: true,
			DocumentType: 1,
			DocumentCode: doc.number.toString(),
			DocumentFiscalCode: doc.number.toString(),
			DocumentParentCode: '',
			DocumentDateTime: tDocumentDateTime,
			SubjectCode: frontol.userValues.get('SubjectCode'),
			CashboxCode: frontol.codeWorkplace.toString(),
			TotalSum: Number(doc.sum).round(2),
			TotalSumDiscounted: Number(doc.sum - totalDiscount).round(2),
			DocumentDiscountDtos: tDocumentDiscountDtos,
			DocumentDetailDtos: tDocumentDetailDtos
		};

		if (getClientUUID() == '4C70C190-EAD8-43A8-87DE-212899357830') {
			var paymentDocument = getDocumentPaymentMethod(doc);

			if (paymentDocument) {
				dataJSON.PaymentMethod = paymentDocument.method;
				dataJSON.PaymentFormCode = paymentDocument.code;
			}
		} else {
			dataJSON.DocumentPaymentDtos = getDocumentPayments(doc);
		}

		//пишем объект в строку
		var dataString = JSON.stringify(dataJSON);
		//возвращаем строку с данными
		return dataString;
	}
	// ф-ция возвращает массив оплат
	function getDocumentPayments(doc) {
		var payments = [];

		if (isSaleDocument(doc) || isReturnDocument(doc)) {
			for (
				doc.payment.index = 1;
				doc.payment.index <= doc.payment.count;
				doc.payment.index++
			) {
				var payment = {
					PaymentFormCode: doc.payment.type.code,
					PaymentMethod: doc.payment.type.operation === 0 ? 1 : 2, // 1 - наличные, 2 - всё останое
					Sum: Number(doc.payment.sumInBaseCurrency).round(2)
				};
				var foundPaymentCodeIndex = -1;
				// ищем вид оплаты с таким же кодом
				for (var i = 0; i < payments.length; i++) {
					if (
						payments[i].PaymentFormCode == payment.PaymentFormCode
					) {
						foundPaymentCodeIndex = i;
						break;
					}
				}

				if (foundPaymentCodeIndex > -1) {
					// такой код уже есть - суммируем
					payments[foundPaymentCodeIndex].Sum += payment.Sum;
				} else {
					// такого кода нет - добавляем вид оплаты
					payments.push(payment);
				}
			}
		}
		return payments;
	}
	// ф-ция возвращает 1 если оплата была наличными
	// 2 - если был безнал
	function getDocumentPaymentMethod(doc) {
		var documentPayment = false;

		if (isSaleDocument(doc)) {
			var payment = doc.payment;
			// учитываем только последний вид оплаты
			payment.index = payment.count;
			documentPayment = {
				code: payment.type.code,
				method: 0
			};

			for (
				payment.index = 1;
				payment.index <= payment.count;
				payment.index++
			) {
				if (payment.type.operation == 0 || payment.type.code == 1) {
					// наличные
					documentPayment.method = 1;
				}

				if (payment.type.operation == 1 || payment.type.code > 1) {
					// безнал
					documentPayment.method = 2;
					return documentPayment;
				}
			}
		}
		return documentPayment;
	}
	// ПОЛУЧИТЬ СВОЙСТВА ТОВАРА
	function getCardBoxSpecialDetailDto(doc, positionId) {
		var cardBoxSpecialDetailDtos = doc.userValues.get(
			'cardBoxSpecialDetailDtos'
		);

		if (cardBoxSpecialDetailDtos.length > 0) {
			var cardBoxSpecialDetailDtosArray =
				cardBoxSpecialDetailDtos.split(';');

			if (cardBoxSpecialDetailDtosArray.length > 0) {
				for (var i = 0; i < cardBoxSpecialDetailDtosArray.length; i++) {
					var cardBoxSpecialDetailDto =
						cardBoxSpecialDetailDtosArray[i];

					var cardBoxSpecialDetailDtoArray =
						cardBoxSpecialDetailDto.split('&');

					if (cardBoxSpecialDetailDtoArray.length > 0) {
						var dto = {};

						try {
							dto.PositionId = cardBoxSpecialDetailDtoArray[0];
							dto.SpecialPrice = cardBoxSpecialDetailDtoArray[1];
							dto.SpecialPriceQuantity =
								cardBoxSpecialDetailDtoArray[2];
						} catch (e) {
							showMessage(
								'Ошибка получения специальных параметров товара!'
							);
						}

						if (dto.PositionId == positionId) {
							return dto;
						}
					}
				}
			}
		}
		return '';
	}
	//ФОРМИРОВАНИЕ ОТСЫЛАЕМЫХ ДАННЫХ ПРИ ВОЗВРАТЕ ПОСЛЕ ПРОБИТИЯ ЧЕКА
	/* doc - документ
    функция возвращает строку с данными*/
	function getReturnDataAfterClosing(
		doc,
		useBonusCardOnly,
		baseDocumentUserValues
	) {
		if (useBonusCardOnly == undefined) useBonusCardOnly = false;

		if (baseDocumentUserValues == undefined) baseDocumentUserValues = false;

		//получаем лицензию
		var license = getLicense();

		if (baseDocumentUserValues && 'License' in baseDocumentUserValues) {
			license = baseDocumentUserValues.License;
		}

		if (!license) showError(LICENSE_NOT_SET_MESSAGE);

		var tDocumentDateTime = '';
		// если в процессинге продажу закрываем  до закрытия чека или документ не закрыт, то берём текущее время
		if (
			frontol.userValues.get('SaleBeforePrintCheck') == '1' ||
			doc.dateClose == '30.12.99'
		) {
			var nowDateTime = getISODateTimeToString(':');
			var nowDateTimeArray = nowDateTime.split('T');

			tDocumentDateTime = nowDateTimeArray[0] + ' ' + nowDateTimeArray[1];
		} else {
			//формируем строку с датой и временем закрытия документа в формате YYYY-MM-DD HH24:MM:SS
			var dateList = doc.dateClose.split('.');

			tDocumentDateTime =
				'20' +
				dateList[2] +
				'-' +
				dateList[1] +
				'-' +
				dateList[0] +
				' ' +
				doc.timeClose;
		}

		//формируем массив объектов с позициями
		var tReturnDiscountDtos = [];
		//!attn - работает только для видов оплат

		//создаем массив с процессинговыми оплатами
		//[0] - бонусы
		//[1] - дисконт
		//[2] - депозит
		//[3] - купоны
		var procPayments = [0, 0, 0, 0];
		//ищем по коду суммы процессинговых оплат и суммируем их отдельно
		for (
			doc.payment.index = 1;
			doc.payment.index <= doc.payment.count;
			doc.payment.index++
		) {
			if (
				doc.payment.type.code ==
				frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
			) {
				procPayments[0] += doc.payment.sumInBaseCurrency;
			}

			if (
				doc.payment.type.code ==
				frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME)
			) {
				procPayments[1] += doc.payment.sumInBaseCurrency;
			}

			if (
				doc.payment.type.code ==
				frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME)
			) {
				procPayments[2] += doc.payment.sumInBaseCurrency;
			}

			if (
				doc.payment.type.code ==
				frontol.userValues.get(COUPON_PAYMENT_CODE_NAME)
			) {
				procPayments[3] += doc.payment.sumInBaseCurrency;
			}
		}

		var cardBoxAccountTypes = '';
		var cardBoxDocDiscDtos = '';

		var cardArrayAccountTypes = [];
		var cardArrayDocDiscDtos = [];

		if (baseDocumentUserValues) {
			cardBoxAccountTypes = baseDocumentUserValues.cardBoxAccountTypes;
			cardBoxDocDiscDtos = baseDocumentUserValues.cardBoxDocDiscDtos;
		} else {
			cardBoxAccountTypes = doc.baseDocument.userValues.get(
				'cardBoxAccountTypes'
			);
			cardBoxDocDiscDtos =
				doc.baseDocument.userValues.get('cardBoxDocDiscDtos');
		}

		if (cardBoxAccountTypes && cardBoxDocDiscDtos) {
			cardArrayAccountTypes = cardBoxAccountTypes.split(';');
			cardArrayDocDiscDtos = cardBoxDocDiscDtos.split(';');
		}

		//идем по всем возможным типам оплаты
		for (var i = 0; i <= (useBonusCardOnly ? 0 : 3); i++) {
			//идем по всем зарегистрированным картам
			for (var j = 0; j < cardArrayAccountTypes.length; j++) {
				//если тип карты тот, с которым сейчас работаем в самом внешнем цикле, возвращаем на него соответствующий тип оплаты
				if (Number(cardArrayAccountTypes[j]) == i + 1) {
					var k = tReturnDiscountDtos.length;

					tReturnDiscountDtos[k] = {};

					var cardArray = [];

					cardArray = cardArrayDocDiscDtos[j].split('&');

					tReturnDiscountDtos[k].AccountId = Number(cardArray[0]);
					tReturnDiscountDtos[k].CardCode = cardArray[1];

					var cardSum = Number(cardArray[4]);

					//если сумма возврата меньше суммы платежа по текущей карте, то возвращаем всю и сразу идем на следующую итерацию внешнего цикла
					if (procPayments[i] <= cardSum) {
						tReturnDiscountDtos[k].ReturnDiscount = procPayments[i];
						procPayments[i] = 0;
						break;
					}
					//если сумма возврата больше суммы платежа по текущей карте, то возвращаем, что можем и продолжаем искать следующую карту, чтобы вернуть остаток
					else {
						tReturnDiscountDtos[k].ReturnDiscount = cardSum;
						procPayments[i] -= cardSum;
					}
				}
			}
		}

		//делаем отдельный проход по всем картам для поиска неучтенных (неизвестные и те, по которым нет движений при возврате)
		//создаем всмомогательный массив уже используемых при возврате карт
		var alreadyUsedCardsNumbers = [];

		for (var i = 0; i < tReturnDiscountDtos.length; i++) {
			var k = alreadyUsedCardsNumbers.length;
			alreadyUsedCardsNumbers[k] = tReturnDiscountDtos[i].CardCode;
		}
		//ищем и обрабатывает карты, которых нет в сформированном вспомогательном массиве
		for (var i = 0; i < cardArrayDocDiscDtos.length; i++) {
			//получаем массив с информацией о карте
			var cardArray = [];

			cardArray = cardArrayDocDiscDtos[i].split('&');

			//если карта не используется, пишем нулевые движения
			if (IsInArray(cardArray[1], alreadyUsedCardsNumbers) == false) {
				var k = tReturnDiscountDtos.length;

				tReturnDiscountDtos[k] = {};

				tReturnDiscountDtos[k].AccountId = Number(cardArray[0]);
				tReturnDiscountDtos[k].CardCode = cardArray[1];
				tReturnDiscountDtos[k].ReturnDiscount = 0;
			}
		}
		//массив объектов с позициями tReturnDiscountDtos готов

		//формируем массив объектов с возвращаемыми позициями
		var tReturnDetailDtos = [];
		//doc.position.count возвращает кол-во позиций с учетом сторнированных
		for (
			doc.position.index = 1;
			doc.position.index <= doc.position.count;
			doc.position.index++
		) {
			//если позиция текущего документа не сторнирована
			if (doc.position.storno == 0) {
				var n = tReturnDetailDtos.length;

				tReturnDetailDtos[n] = {
					ProductCode:
						frontol.userValues.get('WareMarkPrefix') +
						(isCodeWareId()
							? doc.position.ware.code.toString()
							: doc.position.ware.mark),
					Quantity: Number(doc.position.quantity).round(3),
					TotalPrice: Number(doc.position.sum).round(2)
				};
			}
		}

		//формируем объект с данными
		var dataJSON = {
			LicenseGuid: license,
			DocumentType: 2,
			ProcV2: true,
			DocumentCode: doc.number.toString(),
			DocumentFiscalCode: doc.number.toString(),
			DocumentParentCode: baseDocumentUserValues
				? doc.userValues.get('BaseDocumentCode')
				: doc.baseDocument.number.toString(),
			DocumentDateTime: tDocumentDateTime,
			SubjectCode: frontol.userValues.get('SubjectCode'),
			CashboxCode:
				baseDocumentUserValues &&
				'CashBoxCode' in baseDocumentUserValues
					? baseDocumentUserValues.CashBoxCode
					: frontol.codeWorkplace.toString(),
			TotalSum: Number(doc.totalSum).round(2),
			ReturnDiscountDtos: tReturnDiscountDtos,
			ReturnDetailDtos: tReturnDetailDtos
		};

		if (getClientUUID() == '4C70C190-EAD8-43A8-87DE-212899357830') {
			var paymentDocument = getDocumentPaymentMethod(doc);

			if (paymentDocument) {
				dataJSON.PaymentMethod = paymentDocument.method;
				dataJSON.PaymentFormCode = paymentDocument.code;
			}
		} else {
			dataJSON.ReturnPaymentDtos = getDocumentPayments(doc);
		}

		//пишем объект в строку
		var dataString = JSON.stringify(dataJSON);
		//возвращаем строку с данными
		return dataString;
	}

	//ЗАПИСЬ ДАННЫХ ДОКУМЕНТА ПОСЛЕ ПРОБИТИЯ ЧЕКА
	// stringToSend - строка с данными для отправки
	function saveDocumentAfterClosing(stringToSend, documentType) {
		try {
			var fso = new ActiveXObject('Scripting.FileSystemObject');

			try {
				var path = RX_LOYALTY_DIRECTORY_FRONTOL + '\\stat';
				createFullPath(fso, path);
			} catch (e) {
				showMessage(
					'Не удалось создать каталог для сбора статистики!\n' +
						e.name +
						'\n' +
						e.message,
					Icon.Error
				);
				throw e;
			}

			var dateTimeNow = getISODateTimeToString();

			var file = fso.CreateTextFile(
				path +
					'\\' +
					(documentType == 1 ? 'sale' : 'return') +
					'_' +
					dateTimeNow +
					'.log',
				true
			);
			file.WriteLine(stringToSend);

			file.Close();
		} catch (e) {
			showMessage(
				'Произошла ошибка при записи документа статистики: ' +
					e.name +
					'\n' +
					e.message,
				Icon.Error
			);
		}
	}
	//ПЕРЕДАЧА ДАННЫХ ДОКУМЕНТА ПОСЛЕ ПРОБИТИЯ ЧЕКА
	/* stringToSend - строка с данными для отправки
    documentType - тип документа (1 - продажа, 2 - возврат на основании)*/
	function sendDocumentAfterClosing(stringToSend, documentType) {
		var doc = frontol.currentDocument;
		//если документ уже помечен к откладыванию, вызываем соответствующую функцию и завершаемся без ошибки
		if (doc.userValues.get('Delay') == 1) {
			DelayDocument(stringToSend, documentType);
			return;
		}

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		var result = {
			success: false,
			message: '',
			data: ''
		};

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/api/processing/' +
				(documentType == 1 ? 'sale' : 'return'),
			'POST',
			stringToSend,
			documentType == 1 ? 'sale' : 'return',
			documentType,
			true
		);

		if (result.success) {
			//если документ - продажа
			if (documentType == 1) {
				//печатать движения по картам
				if (frontol.userValues.get('PrintCardsMoves') == '1') {
					var printCardCodes = '';
					var printAddBonuses = '';
					var printRemoveBonuses = '';
					var printBalances = '';
					var printClientStatuses = '';

					for (
						var i = 0;
						i < result.data.SaleDiscountResponseDtos.length;
						i++
					) {
						printCardCodes = AddPrintString(
							printCardCodes,
							result.data.SaleDiscountResponseDtos[i].CardCode
						);
						printAddBonuses = AddPrintString(
							printAddBonuses,
							Number(
								result.data.SaleDiscountResponseDtos[i]
									.AddBonus
							).round(2)
						);
						printRemoveBonuses = AddPrintString(
							printRemoveBonuses,
							Number(
								result.data.SaleDiscountResponseDtos[i]
									.RemoveBonus
							).round(2)
						);
						printBalances = AddPrintString(
							printBalances,
							Number(
								result.data.SaleDiscountResponseDtos[i].Balance
							).round(2)
						);

						if (
							'ClientStatus' in
								result.data.SaleDiscountResponseDtos[i] &&
							result.data.SaleDiscountResponseDtos[i].ClientStatus
						) {
							printClientStatuses = AddPrintString(
								printClientStatuses,
								result.data.SaleDiscountResponseDtos[i]
									.ClientStatus
							);
						}

						if ('Footer' in result.data && result.data.Footer) {
							saveFooter(
								doc,
								result.data.SaleDiscountResponseDtos[i]
									.CardCode,
								result.data.Footer
							);
						}

						if (
							'FooterArray' in result.data &&
							result.data.FooterArray &&
							result.data.FooterArray.length > 0
						) {
							for (
								var j = 0;
								j < result.data.FooterArray.length;
								j++
							) {
								saveFooter(
									doc,
									result.data.SaleDiscountResponseDtos[i]
										.CardCode,
									result.data.FooterArray[j],
									j.toString()
								);
							}
						}
					}

					doc.userValues.set('PrintCardCodes', printCardCodes);
					doc.userValues.set('PrintAddBonuses', printAddBonuses);
					doc.userValues.set(
						'PrintRemoveBonuses',
						printRemoveBonuses
					);
					doc.userValues.set('PrintBalances', printBalances);
					doc.userValues.set(
						'PrintClientStatuses',
						printClientStatuses
					);
				}

				//если надо показать информацию
				if (frontol.userValues.get('ShowCardsMoves') == '1') {
					ShowCardsMoves(result.data);
				}

				if (
					'ClientChipInfo' in result.data &&
					result.data.ClientChipInfo &&
					result.data.ClientChipInfo.length > 0
				) {
					var clientChipInfoValueName = 'clientChipInfo';
					var clientChipInfoStrings = '';

					doc.userValues.remove(clientChipInfoValueName);

					for (
						var i = 0;
						i < result.data.ClientChipInfo.length;
						i++
					) {
						var clientChipInfo = result.data.ClientChipInfo[i];

						if (
							'MarketProgramId' in clientChipInfo &&
							clientChipInfo.MarketProgramId &&
							Number(clientChipInfo.MarketProgramId) > 0 &&
							'MarketProgramName' in clientChipInfo &&
							clientChipInfo.MarketProgramName &&
							clientChipInfo.MarketProgramName.length > 0 &&
							'AddChip' in clientChipInfo &&
							clientChipInfo.AddChip.toString() &&
							'Balance' in clientChipInfo &&
							clientChipInfo.Balance.toString()
						) {
							if (clientChipInfoStrings) {
								clientChipInfoStrings += ';';
							}

							clientChipInfoStrings +=
								clientChipInfo.MarketProgramId +
								'&' +
								clientChipInfo.MarketProgramName +
								'&' +
								clientChipInfo.AddChip +
								'&' +
								clientChipInfo.Balance;
						}
					}

					if (clientChipInfoStrings.length > 0) {
						doc.userValues.set(
							clientChipInfoValueName,
							clientChipInfoStrings
						);
					}
				}
				// лотерейные билеты
				if (
					'AdditionalInfos' in result.data &&
					result.data.AdditionalInfos
				) {
					var additionalInfos = result.data.AdditionalInfos;

					if (
						'lotteryTicketCode' in additionalInfos &&
						additionalInfos.lotteryTicketCode
					) {
						var lotteryTicketCodes = '';

						for (
							var i = 0;
							i < additionalInfos.lotteryTicketCode.length;
							i++
						) {
							var lotteryTicketCode =
								additionalInfos.lotteryTicketCode;

							if (lotteryTicketCodes) lotteryTicketCodes += ';';
							if (typeof lotteryTicketCode == 'string')
								lotteryTicketCode = lotteryTicketCode.trim();

							lotteryTicketCodes += lotteryTicketCode;
						}
						if (lotteryTicketCodes)
							doc.userValues.set(
								'lotteryTicketCodes',
								lotteryTicketCodes
							);
					}
				}
			}
		} else {
			showMessage(result.message, Icon.Error);
			return;
		}
	}

	//ОТЛОЖИТЬ ДАННЫЕ ДОКУМЕНТА
	/* stringToDelay - строка для откладывания
    documentType - тип документа (1 - продажа, 2 - возврат)*/
	function DelayDocument(stringToDelay, documentType) {
		try {
			var fDelay, fsoDelay;

			fsoDelay = new ActiveXObject('Scripting.FileSystemObject');

			try {
				var pathDelayedFolder =
					RX_LOYALTY_DIRECTORY_FRONTOL + '\\delayed';
				createFullPath(fsoDelay, pathDelayedFolder);
			} catch (e) {
				showMessage(
					'Не удалось создать каталог для отложенных документов!\n' +
						e.name +
						'\n' +
						e.message,
					Icon.Error
				);
				throw e;
			}

			if (documentType == 1) {
				fDelay = fsoDelay.OpenTextFile(
					pathDelayedFolder + '\\sale.log',
					8,
					true
				);
			} else if (documentType == 2) {
				fDelay = fsoDelay.OpenTextFile(
					pathDelayedFolder + '\\return.log',
					8,
					true
				);
			}
			fDelay.WriteLine(stringToDelay);
			fDelay.Close();
		} catch (e) {
			showMessage(
				'Произошла ошибка при записи отложенного документа: ' +
					e.name +
					'\n' +
					e.message,
				Icon.Error
			);
		}
	}

	//ПОКАЗ ИНФОРМАЦИИ О ДВИЖЕНИИ ПО КАРТАМ
	/* saleDiscountResponseDtos - массив с информацией по картам, полученный в ответе от сервера*/
	function ShowCardsMoves(resultData) {
		var saleDiscountResponseDtos = resultData.SaleDiscountResponseDtos;
		var messageArray = [];

		for (var i = 0; i < saleDiscountResponseDtos.length; i++) {
			//если карта бонусная или депозитная
			if (
				saleDiscountResponseDtos[i].AccountTypeId == 1 ||
				saleDiscountResponseDtos[i].AccountTypeId == 3
			) {
				var cardCode = saleDiscountResponseDtos[i].CardCode;

				if (getClientUUID() == '4C70C190-EAD8-43A8-87DE-212899357830')
					cardCode = hideCardNumber(cardCode);

				messageArray.push(
					'По карте ' +
						cardCode +
						' начислено: ' +
						Number(saleDiscountResponseDtos[i].AddBonus).round(2) +
						', списано: ' +
						Number(saleDiscountResponseDtos[i].RemoveBonus).round(
							2
						) +
						'. Баланс: ' +
						Number(saleDiscountResponseDtos[i].Balance).round(2)
				);
			}
		}

		if (
			'ClientChipInfo' in resultData &&
			resultData.ClientChipInfo &&
			resultData.ClientChipInfo.length > 0
		) {
			var clientChipInfoValueName = 'clientChipInfo';

			messageArray.push(
				'Информация об участии в маркетинговых программах:'
			);

			frontol.currentDocument.userValues.remove(clientChipInfoValueName);

			for (var i = 0; i < resultData.ClientChipInfo.length; i++) {
				var clientChipInfo = resultData.ClientChipInfo[i];

				if (
					'MarketProgramId' in clientChipInfo &&
					clientChipInfo.MarketProgramId &&
					Number(clientChipInfo.MarketProgramId) > 0 &&
					'MarketProgramName' in clientChipInfo &&
					clientChipInfo.MarketProgramName &&
					clientChipInfo.MarketProgramName.length > 0 &&
					'AddChip' in clientChipInfo &&
					clientChipInfo.AddChip.toString() &&
					'Balance' in clientChipInfo &&
					clientChipInfo.Balance.toString()
				) {
					messageArray.push(
						clientChipInfo.MarketProgramName +
							', ' +
							(Number(clientChipInfo.AddChip) > 0
								? 'добавлено фишек ' +
								  clientChipInfo.AddChip +
								  ', '
								: '') +
							'баланс ' +
							clientChipInfo.Balance
					);
				}
			}
		}

		//если показывать нечего, завершаемся
		if (messageArray.length == 0) return;

		var message = messageArray.join('\n');

		if (frontol.userValues.get('ShowCardsMovesTimeout') != '') {
			var timeout = Number(
				frontol.userValues.get('ShowCardsMovesTimeout')
			);

			showMessage(message, Icon.Information, timeout);
		} else {
			showMessage(message);
		}
	}
	// ПОЛУЧИТЬ СУММУ ДОКУМЕНТА ДО ВСЕХ ВОЗВРАТОВ ПО БОНУСНОЙ КАРТЕ
	function getSummForDBeforeReturn(doc) {
		var cardBoxAccountTypes = doc.userValues.get('cardBoxAccountTypes');
		var cardBoxDocDiscDtos = doc.userValues.get('cardBoxDocDiscDtos');

		var summForD = 0;

		if (cardBoxDocDiscDtos.length > 0 && cardBoxAccountTypes.length > 0) {
			var cardBoxDocDiscDtoArray = cardBoxDocDiscDtos.split(';');
			var cardBoxAccountTypeArray = cardBoxAccountTypes.split(';');

			for (var i = 0; i < cardBoxDocDiscDtoArray.length; i++) {
				var cardBoxDocDiscDto = cardBoxDocDiscDtoArray[i].split('&');
				var cardBoxAccountType = cardBoxAccountTypeArray[i];

				if (Number(cardBoxAccountType) == 1) {
					if (summForD < Number(cardBoxDocDiscDto[2])) {
						summForD = Number(cardBoxDocDiscDto[2]);
					}
				}
			}
		}
		return summForD;
	}
	// расчёт суммы бонусов при частичном возврате
	function calculateReturnBonus(doc) {
		var stringToSend = getReturnDataAfterClosing(doc, true);
		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		var result = {
			success: false,
			message: '',
			data: ''
		};

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/api/processing/calculateReturn',
			'POST',
			stringToSend,
			'calculate_return',
			2 // документ-возврат
		);

		if (result.success) {
			if (
				'ReturnDiscountResponseDtos' in result.data &&
				result.data.ReturnDiscountResponseDtos
			) {
				var returnDiscountResponseDtosLength =
					result.data.ReturnDiscountResponseDtos.length;

				for (var i = 0; i < returnDiscountResponseDtosLength; i++) {
					var returnDiscountResponseDtosItem =
						result.data.ReturnDiscountResponseDtos[i];

					if (
						'AddBonus' in returnDiscountResponseDtosItem &&
						!isNaN(returnDiscountResponseDtosItem.AddBonus)
					) {
						var addBonus = returnDiscountResponseDtosItem.AddBonus;

						//return Math.floor(Number(addBonus));
						return Number(addBonus);
					}
				}
			}
		} else {
			showMessage(
				'Система рассчета бонусов для частичного возврата временно недоступна, попробуйте позже.\n' +
					result.message,
				Icon.Error
			);
		}
		return false;
	}
	// Проверка что документ оплачен только процессинговыми платежами
	function isDocPaidByOnlyProcPayments(doc) {
		var processingPaymentTypeCodes = [];

		var processingPaymentTypeNames = [
			BONUS_PAYMENT_CODE_NAME,
			DISCOUNT_PAYMENT_CODE_NAME,
			DEPOSIT_PAYMENT_CODE_NAME,
			COUPON_PAYMENT_CODE_NAME,
		];

		for (var i = 0; i < processingPaymentTypeNames.length; i++) {
			var processingPaymentTypeName = processingPaymentTypeNames[i];
			var processingPaymentTypeCode = Number(
				frontol.userValues.get(processingPaymentTypeName)
			);

			if (processingPaymentTypeCode > 0) {
				processingPaymentTypeCodes.push(processingPaymentTypeCode);
			}
		}

		for (
			doc.payment.index = 1;
			doc.payment.index <= doc.payment.count;
			doc.payment.index++
		) {
			if (!IsInArray(doc.payment.type.code, processingPaymentTypeCodes)) {
				return false;
			}
		}

		return true;
	}
	// проверка введенных карт
	function checkRegisteredCards(doc, registeringCard) {
		if (getClientUUID() == 'A7DAA9DB-5664-DF4C-ACE0-CE39CFD695C6') {
			var cardNumbers = doc.userValues.get(cardBoxNumbers).split(';');
			var cardTypes = doc.userValues.get(cardBoxAccountTypes).split(';');
		}
	}
	//ПРОВЕРКА ПРИ ВВОДЕ ПЛАТЕЖА
	/* payment - вводимый платеж
    documentType - тип документа (1 - продажа, 2 - возврат)*/
	function CheckEnterPayment(payment, documentType) {
		var processingPaymentTypeCodes = [];

		var processingPaymentTypeNames = [
			BONUS_PAYMENT_CODE_NAME,
			DISCOUNT_PAYMENT_CODE_NAME,
			DEPOSIT_PAYMENT_CODE_NAME,
			COUPON_PAYMENT_CODE_NAME,
		];

		for (var i = 0; i < processingPaymentTypeNames.length; i++) {
			var processingPaymentTypeName = processingPaymentTypeNames[i];
			var processingPaymentTypeCode = Number(
				frontol.userValues.get(processingPaymentTypeName)
			);

			if (processingPaymentTypeCode > 0) {
				processingPaymentTypeCodes.push(processingPaymentTypeCode);
			}
		}
		//если документ - продажа
		if (documentType == 1) {
			//если добавляется процессинговый платеж
			if (IsInArray(payment.type.code, processingPaymentTypeCodes)) {
				showError('Ввод процессинговых платежей вручную невозможен!');
			}
		}

		//если документ - возврат
		if (documentType == 2) {
			var currentDocument = frontol.currentDocument;
			var baseDocument = frontol.currentDocument.baseDocument;

			//если делается возврат без документа-основания
			if (baseDocument.number == null || baseDocument.number == '') {
				//если добавляется процессинговый платеж
				if (IsInArray(payment.type.code, processingPaymentTypeCodes)) {
					showError(
						'Ввод процессинговых платежей возможен только при возврате на основании!'
					);
				}
			}

			//если возврат делается на основании документа
			if (baseDocument.number != null && baseDocument.number != '') {
				//если вводится процессинговый платеж
				var isDocHaveProcPaymentsOnly =
					isDocPaidByOnlyProcPayments(baseDocument);

				if (
					IsInArray(payment.type.code, processingPaymentTypeCodes) &&
					!isDocHaveProcPaymentsOnly
				) {
					showError(
						'Ввод процессинговых оплат возможен только автоматически!'
					);
				}
				// закомментировал запрет дублирования вида оплат т.к. непонятно зачем это было сделано
				/*for (currentDocument.payment.index = 1; currentDocument.payment.index <= currentDocument.payment.count; currentDocument.payment.index++) {
                    if (payment.type.code == currentDocument.payment.type.code) {
                        showError("Данный вид оплаты уже добавлен!");
                    }
                }*/

				//посчитаем введеные в документ-основание процессинговые платежи
				var procPaymentBaseDocumentEntered = 0;

				for (
					baseDocument.payment.index = 1;
					baseDocument.payment.index <= baseDocument.payment.count;
					baseDocument.payment.index++
				) {
					if (
						IsInArray(
							baseDocument.payment.type.code,
							processingPaymentTypeCodes
						)
					) {
						procPaymentBaseDocumentEntered +=
							baseDocument.payment.sumInBaseCurrency;
					}
				}
				// если процессинговых платежей не было - заканчиваем проверку

				if (procPaymentBaseDocumentEntered == 0) return;

				//если вводится непроцессинговый платеж
				if (!IsInArray(payment.type.code, processingPaymentTypeCodes)) {
					var needToPaySum = currentDocument.sumWithDiscs;

					for (
						baseDocument.payment.index = 1;
						baseDocument.payment.index <=
						baseDocument.payment.count;
						baseDocument.payment.index++
					) {
						var parentSum = baseDocument.payment.sumInBaseCurrency;
						// частичный возврат бонусов
						if (
							baseDocument.payment.type.code ==
							Number(
								frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
							)
						) {
							// частичный возврат бонусов
							// сумму документа-основания берем из пользовательской переменной документа cardBoxDocDiscDtos,
							// т.к. если по документу-основанию уже были возвраты - его итоговая сумма будет меньше, с учётом возвратов
							if (
								currentDocument.totalSum <
								getSummForDBeforeReturn(baseDocument)
							) {
								var calculatedReturnBonus =
									calculateReturnBonus(currentDocument);

								if (
									calculatedReturnBonus !== false &&
									!isNaN(calculatedReturnBonus)
								) {
									if (
										baseDocument.payment.sumInBaseCurrency -
											calculatedReturnBonus <=
											1 &&
										calculatedReturnBonus > 0
									) {
										// скорее всего это остаток из-за округлений бонусов
										parentSum =
											baseDocument.payment
												.sumInBaseCurrency;
									} else {
										parentSum = calculatedReturnBonus;
									}
								}
							}
						}

						var currentPayment = {
							code: baseDocument.payment.type.code,
							currentExists: false,
							currentSum: 0,
							parentSum: parentSum
						};

						for (
							currentDocument.payment.index = 1;
							currentDocument.payment.index <=
							currentDocument.payment.count;
							currentDocument.payment.index++
						) {
							// оплата такого вида есть
							if (
								currentDocument.payment.type.code ==
								currentPayment.code
							) {
								currentPayment.currentExists = true;
								currentPayment.currentSum =
									currentDocument.payment.sumInBaseCurrency;
							}
						}

						var paymentSum = 0;

						if (currentPayment.currentExists) {
							// если этот вид оплаты уже есть в оплатах документа
							// если сумма вида оплаты в документе-основании больше
							if (
								currentPayment.parentSum >
								currentPayment.currentSum
							) {
								// если недостающая сумма этого вида оплаты больше или равна недостающей суммы для оплаты документа
								if (
									currentPayment.parentSum -
										currentPayment.currentSum >=
									needToPaySum
								) {
									paymentSum = needToPaySum;
								} else {
									// добавляем недостающую сумму
									paymentSum =
										currentPayment.parentSum -
										currentPayment.currentSum;
								}
							}
						} else {
							// если такого вид оплаты в оплатах документа нет
							// если величина суммы оплаты больше чем нужно для оплаты документа
							if (currentPayment.parentSum >= needToPaySum) {
								// оплачивает недостающую часть
								paymentSum = needToPaySum;
							} else {
								// добавляем всю сумму для данного вида оплаты
								paymentSum = currentPayment.parentSum;
							}
						}

						if (paymentSum > 0) {
							currentDocument.addPayment(
								currentPayment.code,
								paymentSum,
								null
							);
							needToPaySum -= paymentSum;
						}
					}
					cancelAct();
				}
			}
		}
	}

	//ПРОВЕРКА ПРИ УДАЛЕНИИ ПЛАТЕЖА
	/* payment - вводимый платеж
    documentType - тип документа (1 - продажа)*/
	function CheckDeletePayment(payment, documentType) {
		//если документ - продажа
		if (documentType == 1) {
			//если тип оплаты - процессинговый
			if (
				payment.type.code ==
					Number(frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)) ||
				payment.type.code ==
					Number(
						frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME)
					) ||
				payment.type.code ==
					Number(frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME)) ||
				payment.type.code ==
					Number(frontol.userValues.get(COUPON_PAYMENT_CODE_NAME))
			) {
				if (frontol.userValues.get('StornoProcPayments') == 1) {
					var message =
						'При удалении процессингового платежа отменятся все введеные процессиговые карты и платежи.\nПодтверждаете отмену?';

					if (
						showMessage(message, Button.YesNo) == DialogResult.Yes
					) {
						DeleteAllProc(frontol.currentDocument);
						cancelAct();
					} else {
						cancelAct();
					}
				} else {
					showError(
						'Сторно процессинговых платежей вручную запрещено!'
					);
				}
			}
		}
	}

	//УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЬСКИХ ПЕРЕМЕННЫХ ДОКУМЕНТА (ОТМЕНА ПРОЦЕССИНГОВЫХ КАРТ И ПЛАТЕЖЕЙ)
	/* doc - документ*/
	function DeleteAllProc(doc) {
		if (IsExtraEnabled('ExtraTaxKyrgyzstan')) {
			var IsDecreasedPricesForTax = doc.userValues.get(
				'IsDecreasedPricesForTax'
			);
		}

		doc.userValues.clear();
		//удаляем введенные процессинговые платежи
		for (
			doc.payment.index = doc.payment.count;
			doc.payment.index >= 1;
			doc.payment.index--
		) {
			if (
				doc.payment.type.code ==
					Number(frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)) ||
				doc.payment.type.code ==
					Number(
						frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME)
					) ||
				doc.payment.type.code ==
					Number(frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME)) ||
				doc.payment.type.code ==
					Number(frontol.userValues.get(COUPON_PAYMENT_CODE_NAME))
			) {
				var tmpIndex = doc.payment.index;

				doc.stornoPayment(doc.payment.index);
				doc.payment.index = tmpIndex;
			}
		}
		doc.recalculateAllDiscounts();

		if (frontol.userValues.get('SecondMonitor') == '1') {
			if (rxF2SM) rxF2SM.updateCheque(frontol.currentDocument);
		}

		if (IsExtraEnabled('ExtraTaxKyrgyzstan')) {
			if (
				IsDecreasedPricesForTax != undefined &&
				IsDecreasedPricesForTax != ''
			) {
				doc.userValues.set(
					'IsDecreasedPricesForTax',
					IsDecreasedPricesForTax
				);
			}
		}
	}

	//ОТПРАВКА ОТЛОЖЕННЫХ
	/* silent - режим выполнения (true - фоновый, false - обычный)*/
	function SendDelayed(silent) {
		var fDelay, fsoDelay;

		fsoDelay = new ActiveXObject('Scripting.FileSystemObject');

		var saleFilePath = RX_LOYALTY_DIRECTORY_FRONTOL + '\\delayed\\sale.log';
		var returnFilePath =
			RX_LOYALTY_DIRECTORY_FRONTOL + '\\delayed\\return.log';

		//если нет отложенных, завершаемся без ошибки
		if (
			fsoDelay.FileExists(saleFilePath) == false &&
			fsoDelay.FileExists(returnFilePath) == false
		) {
			if (silent == false)
				showMessage(NO_DELAYED_DOCUMENTS_TO_SEND_MESSAGE);

			return;
		}

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		//проверяем наличие лицензии
		var license = getLicense();

		if (!license) showError(LICENSE_NOT_SET_MESSAGE);

		//получаем информацию из отложенных файлов
		var tDocumentDtos = [];
		var tReturnDtos = [];

		//собираем продажи
		if (fsoDelay.FileExists(saleFilePath) == true) {
			fDelay = fsoDelay.OpenTextFile(saleFilePath, 1);
			var saleFileText = fDelay.ReadAll();
			fDelay.Close();

			var lineStringSaleArray = [];
			lineStringSaleArray = saleFileText.split(/\r?\n+/);

			for (var i = 0; i < lineStringSaleArray.length; i++) {
				tDocumentDtos[i] = JSON.parse(lineStringSaleArray[i]);
			}
		}

		//собираем возвраты
		if (fsoDelay.FileExists(returnFilePath) == true) {
			fDelay = fsoDelay.OpenTextFile(returnFilePath, 1);

			var returnFileText = fDelay.ReadAll();

			fDelay.Close();

			var lineStringReturnArray = [];

			lineStringReturnArray = returnFileText.split(/\r?\n+/);

			for (var i = 0; i < lineStringReturnArray.length; i++) {
				tReturnDtos[i] = JSON.parse(lineStringReturnArray[i]);
			}
		}

		var result = {
			success: false,
			message: '',
			data: ''
		};

		//формируем запрос для отправки отложенных
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			DocumentDtos: tDocumentDtos,
			ReturnDtos: tReturnDtos
		});

		result = sendHttpRequest(
			processingServerAddress + '/BonusWebApi/api/processing/delay',
			'POST',
			stringToSend,
			'delay'
		);

		if (result.success) {
			if (fsoDelay.FileExists(saleFilePath) == true) {
				fsoDelay.DeleteFile(saleFilePath);
			}

			if (fsoDelay.FileExists(returnFilePath) == true) {
				fsoDelay.DeleteFile(returnFilePath);
			}
		} else {
			var errorDelayInformation =
				result.message + CR_MESSAGE + 'Отправка документов отменена';

			if (silent == true) {
				frontol.actions.wait(errorDelayInformation, 15);
				cancelAct();
			} else {
				showError(errorDelayInformation);
			}
		}
	}
	// содержит ли позиция Фронтольные скидки
	function hasPositionFrontolDiscounts(pos) {
		var rxMarketingActionCode = frontol.userValues.get(
			'MarketingActionCode'
		);

		if (rxMarketingActionCode) {
			rxMarketingActionCode = rxMarketingActionCode.trim();
		} else {
			rxMarketingActionCode = '770000';
		}

		if (pos.discountDoc.totalSum != 0) {
			// считаем скидки на документ, распределенные на позицию
			for (
				pos.discountDoc.index = 1;
				pos.discountDoc.index <= pos.discountDoc.count;
				pos.discountDoc.index++
			) {
				// если это не наша скидка и её сумма отлична от нуля
				if (
					pos.discountDoc.marketingAction.code !=
						rxMarketingActionCode &&
					pos.discountDoc.sum != 0
				) {
					return true;
				}
			}
		}

		if (pos.discountPos.totalSum != 0) {
			// считаем скидки на позицию
			for (
				pos.discountPos.index = 1;
				pos.discountPos.index <= pos.discountPos.count;
				pos.discountPos.index++
			) {
				// если это не наша скидка и её сумма отлична от нуля
				if (
					pos.discountPos.marketingAction.code !=
						rxMarketingActionCode &&
					pos.discountPos.sum != 0
				) {
					return true;
				}
			}
		}
		return false;
	}
	//ПОЛУЧЕНИЕ ДАННЫХ ДОКУМЕНТА ДЛЯ РЕГИСТРАЦИИ КАРТЫ
	/* doc - документ
    функция возвращает массив с данными*/
	function GetRegisterDetailDtos(doc) {
		var registerDetailDtos = [];
		var numberInArray = 0;
		//doc.position.count возвращает кол-во позиций с учетом сторнированных
		for (
			doc.position.index = 1;
			doc.position.index <= doc.position.count;
			doc.position.index++
		) {
			if (
				doc.position.storno == 0 && //если позиция не сторнирована
				!(
					hasPositionFrontolDiscounts(doc.position) &&
					useFrontolDiscountOnly()
				) && // позиция не имеет фронтольных скидок при установленом флаге UseFrontolDiscountOnly
				!(
					getClientUUID() == 'A7DAA9DB-5664-DF4C-ACE0-CE39CFD695C6' &&
					isExcisableWare(doc.position.ware)
				) // не передаем в процессинг алкоголь, табак и мех для этого клиента
			) {
				registerDetailDtos[numberInArray] = {
					ProductCode:
						frontol.userValues.get('WareMarkPrefix') +
						(isCodeWareId()
							? doc.position.ware.code.toString()
							: doc.position.ware.mark),
					TotalPrice: Number(doc.position.totalSum).round(2),
					PositionId: doc.position.id,
					Properties: GetPositionProperties(doc.position),
					Quantity: doc.position.quantity
				};
				numberInArray++;
			}
		}
		return registerDetailDtos;
	}

	//РЕГИСТРАЦИЯ ПРОЦЕССИНГОВОЙ КАРТЫ
	/* cardNumber - номер карты клиента*/
	function RegisterProcCard(cardNumber, phoneNumber, bonusProgramId) {
		var doc = frontol.currentDocument;

		if (cardNumber == undefined || cardNumber == null) cardNumber = '';

		if (phoneNumber == undefined || phoneNumber == null) phoneNumber = '';

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) showError(LICENSE_NOT_SET_MESSAGE);

		//получаем токен
		var token = getAccessToken();

		//флаг добавочной карты
		var isAdditionalCard = false;

		if (doc.userValues.get('FirstCardNumber') != '')
			isAdditionalCard = true;

		//получаем массив позиций со стоимостью
		var tRegisterDetailDtos = [];

		tRegisterDetailDtos = GetRegisterDetailDtos(doc);

		if (tRegisterDetailDtos.length == 0) {
			if (useFrontolDiscountOnly()) {
				showMessage(
					'К документу применены внутренние скидки,\nрасчет скидок программы лояльности ' +
						RX_LOYALTY_NAME +
						' невозможен',
					Icon.Warning
				);
			} else {
				showMessage(
					'Отсутствуют товарные позиции\nдля расчета скидок программы лояльности ' +
						RX_LOYALTY_NAME,
					Icon.Warning
				);
			}
		}

		var mainParamsToSend = {
			LicenseGuid: license,
			AccessTokenGuid: token,
			//CardCode: cardNumber,
			CardRegisterDateTime: getISODateTimeToString(':', ' '),
			IsAdditionalCard: isAdditionalCard,
			AllowFullBonusPay: false,
			RegisterDetailDtos: tRegisterDetailDtos
		};

		if (cardNumber) {
			mainParamsToSend.CardCode = cardNumber;
		} else {
			mainParamsToSend.PhoneMobile = phoneNumber;
		}

		// если была выбрана программа лояльности
		if (bonusProgramId !== undefined && bonusProgramId !== null) {
			mainParamsToSend.BonusProgramId = bonusProgramId;
		}

		var result = {
			success: false,
			message: '',
			data: ''
		};

		//формируем строку для отправки
		var stringToSend = JSON.stringify(mainParamsToSend);

		//создаем и обнуляем флаг
		var switchStatusReg = 0;

		//устанавливаем флаг отложенного документа на ложь
		doc.userValues.set('Delay', 0);

		//создаем переменную для нового токена
		var newToken;

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/api/processing/' +
				(cardNumber ? 'register' : 'registerByPhone'),
			'POST',
			stringToSend,
			cardNumber ? 'register' : 'register_by_phone'
		);

		if (result.success) {
			var silent = false;
			// если регистрация была по номеру телефона - записываем номер карты
			if (
				phoneNumber &&
				'CardCode' in result.data &&
				result.data.CardCode
			) {
				cardNumber = result.data.CardCode;
				doc.userValues.set('RegisteredByPhone', '1');
			}
			//пишем новый ключ
			if (
				'AccessTokenGuid' in result.data &&
				result.data.AccessTokenGuid
			) {
				newToken = result.data.AccessTokenGuid;

				try {
					frontol.userValues.set('AccessToken', newToken);
				} catch (e) {
					showError(
						'Не удалось записать полученный токен авторизации!\nОбратитесь к администратору!'
					);
				}
			} else {
				showError(
					'Не удалось получить токен авторизации!\nОбратитесь к администратору!'
				);
			}

			//записываем тип карты
			var cardAccountType = result.data.AccountTypeId;

			// обработка запрета на совместное использование бонусных карт и купонов или сертификатов
			if (getClientUUID() === '29A1BC43-C747-4B97-ACD7-6F74CFC88BA1') {
				var foundFlag = false;
				var prohibitingMessage = '';

				switch (cardAccountType) {
					case 1: {
						//если тип счета - бонусный
						foundFlag = findRegisteredAccountType(doc, 4); // ищем введены ли купоны

						if (foundFlag)
							prohibitingMessage =
								'В документе были использованы купоны или сертификаты,' +
								CR_MESSAGE +
								'ввод бонусной карты будет отменен!';

						break;
					}
					case 4: {
						//если тип счета - купон
						foundFlag = findRegisteredAccountType(doc, 1); // ищем введены ли бонусные карты

						if (foundFlag)
							prohibitingMessage =
								'В документе были использованы бонусные карты,' +
								CR_MESSAGE +
								'ввод купона или сертификата будет отменен!';

						break;
					}
				}
				if (foundFlag) {
					showMessage(prohibitingMessage, Icon.Warning);
					cancelCardRegister(cardNumber);
					return;
				}
			}

			if (getClientUUID() == 'A7DAA9DB-5664-DF4C-ACE0-CE39CFD695C6') {
				var foundType = false;
				var cancelRegistration = false;
				var prohibitingMessage = '';

				switch (cardAccountType) {
					case 1: {
						// ввод бонусной карты
						foundType = findRegisteredAccountType(doc, 4); // ищем введены ли купоны

						if (foundType) {
							prohibitingMessage =
								'В документе были использованы купоны, списание бонусов недоступно!';
							showMessage(prohibitingMessage, Icon.Warning);
							result.data.AccumulateOnly = true;
							silent = true;
						}
						break;
					}
					case 4: {
						// ввод купона
						foundType = findRegisteredAccountType(doc, 1); // ищем введены ли бонусные карты

						if (foundType) {
							prohibitingMessage =
								'В документе была использована бонусная карта, действие введенного купона будет отменено!' +
								CR_MESSAGE +
								'Для использования купона отмените ввод бонусной карты и введите номер купона';
							cancelRegistration = true;
							break;
						}

						foundType = findRegisteredAccountType(doc, 4); // ищем введены ли другие купоны

						if (foundType) {
							prohibitingMessage =
								'В документе уже были использованы купоны, действие введенного купона будет отменено!';
							cancelRegistration = true;
						}
						break;
					}
				}
				if (cancelRegistration) {
					showMessage(prohibitingMessage, Icon.Warning);
					cancelCardRegister(cardNumber);
					return;
				}
			}

			//показываем сообщение
			if ('Message' in result.data && result.data.Message) {
				showMessage(result.data.Message);
			}

			if (
				'PrintFooter' in result.data &&
				result.data.PrintFooter == true
			) {
				doc.userValues.set('NeedGetFooter', '1');
			} else {
				doc.userValues.remove('NeedGetFooter');
			}

			var responseRegJSON = result.data; // чтобы не менять во всех вспомогательных ф-циях

			// если нужно выбрать маркетинговые программы
			if (
				'AlternativeDiscountDtos' in responseRegJSON &&
				responseRegJSON.AlternativeDiscountDtos
			) {
				var marketPrograms = new RxMarketPrograms();
				responseRegJSON = marketPrograms.register(
					responseRegJSON,
					phoneNumber
				);
			} else {
				var marketPrograms = new RxMarketPrograms();
				responseRegJSON =
					marketPrograms.savePositionsMarketPrograms(responseRegJSON);
			}

			if (
				frontol.userValues.get('SecondMonitor') == '1' &&
				rxF2SM !== null
			) {
				rxF2SM.addRegisterInfo(responseRegJSON);
				rxF2SM.updateCheque(doc);
			}

			//если тип счета - бонусный
			if (cardAccountType == 1) {
				HandleBonusCard(silent);
			} else {
				frontol.userValues.remove('scannedQR'); // удаляем информацию о введенном QR-коде т.к. это актуально только для бонусных карт
			}

			//если тип счета - дисконтный
			if (cardAccountType == 2) HandleDiscountCard();

			//!attn депозита еще нет
			//если тип счета - депозитный
			if (cardAccountType == 3) showMessage('Депозит недоступен');

			//если тип счета - купон
			if (cardAccountType == 4) HandleCouponCard();
		} else {
			frontol.userValues.remove('scannedQR'); // удаляем информацию о введенном QR-коде

			if (result.data == 4) {
				//формируем сообщение
				var errorInformation = result.message;

				errorInformation += 'Ввод карты отменен!';
				showError(errorInformation);
			} else {
				doc.userValues.set('Delay', 1);
				HandleUnknownCard();

				//формируем сообщение
				var errorInformation = result.message + CR_MESSAGE;

				errorInformation += REQUEST_WILL_BE_SEND_LATER_MESSAGE;
				showMessage(errorInformation, Icon.Error);
			}
		}

		//вспомогательная функция - обработка бонусной карты
		function HandleBonusCard(silent) {
			if (silent === undefined) silent = false;
			//если карта только накопительная
			if (responseRegJSON.AccumulateOnly == true) {
				AddProcPaymentCard(
					cardNumber,
					0,
					0,
					responseRegJSON,
					frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
				);
				if (!silent) showMessage(CARD_ACCUMULATION_ONLY_MESSAGE);
			}
			//если у карты нулевой баланс
			else if (responseRegJSON.Balance <= 0) {
				AddProcPaymentCard(
					cardNumber,
					0,
					0,
					responseRegJSON,
					frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
				);

				if (responseRegJSON.BonusBalance > 0) {
					showMessage(
						'Списание средств невозможно для этого документа',
						Icon.Warning
					);
				} else {
					showMessage(
						INSUFFICIENT_FUNDS +
							CR_MESSAGE +
							CARD_ACCUMULATION_ONLY_MESSAGE,
						Icon.Warning
					);
				}
			} else if (
				frontol.userValues.get('scannedQR') != '1' &&
				cardNumber.search(/^\+79[0-9]{9,}$/) !== -1
			) {
				// Морошка: если карта - номер телефона и введена руками, то бонусы - только копить
				AddProcPaymentCard(
					cardNumber,
					0,
					0,
					responseRegJSON,
					frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
				);
				showMessage(
					'Номер телефона введен не через мобильное приложение, бонусы можно только копить'
				);
			} else if (
				doc.userValues.get('RegisteredByPhone') == '1' &&
				frontol.userValues.get(
					'ProhibitSpendBonusByPhoneRegistration'
				) == '1'
			) {
				AddProcPaymentCard(
					cardNumber,
					0,
					0,
					responseRegJSON,
					frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
				);
				showMessage(
					'Регистрация осуществлялась по номеру телефона,' +
						CR_MESSAGE +
						'бонусы можно только копить'
				);
				doc.userValues.remove('RegisteredByPhone');
			}
			//если есть, что списать
			else {
				//объявляем переменную со значением добавляемых бонусов
				var bonusPay = 0;

				//считаем введенные платежи
				var paymentsEntered = 0;

				for (
					doc.payment.index = 1;
					doc.payment.index <= doc.payment.count;
					doc.payment.index++
				) {
					paymentsEntered += doc.payment.sumInBaseCurrency;
				}

				//получаем остаток для оплаты
				var residueToPay = doc.totalSum - paymentsEntered;

				if (responseRegJSON.Balance < residueToPay) {
					residueToPay = responseRegJSON.Balance;
				}

				//создаем флаг проверки успешного ввода
				var flagSuccessBonusPay = false;

				for (var i = 1; i <= 3; i++) {
					bonusPay = frontol.actions.inputString(
						'Доступно бонусов: ' +
							responseRegJSON.Balance +
							'. Сколько списать?',
						getClientUUID() ==
							'ADA00981-1CE1-41B0-A6AD-7AAD516EAD31'
							? '0'
							: residueToPay // по умолчанию - сумма доступных для списания бонусов, в случае исключения - 0
					);

					if (bonusPay == null) {
						break;
					}
					bonusPay = Number(bonusPay.replace(',', '.'));

					//проверяем на число
					if (isNaN(bonusPay)) {
						showMessage('Введено не число!', Icon.Error);
						continue;
					}

					//проверяем, что число неотрицательное
					if (bonusPay < 0) {
						showMessage('Введено отрицательное число!', Icon.Error);
						continue;
					}

					bonusPay = Number(bonusPay).round(2);

					//проверяем на доступность введенного количества
					if (Number(responseRegJSON.Balance) < bonusPay) {
						showMessage(
							'Недостаточно бонусов!\n' +
								Number(responseRegJSON.Balance) +
								' меньше, чем ' +
								bonusPay,
							Icon.Error
						);
						continue;
					}

					//если введенное число больше итоговой суммы документа
					if (residueToPay < bonusPay) {
						bonusPay = residueToPay;
					}

					//если дошли до сюда, значит значение введенных бонусов корректно
					flagSuccessBonusPay = true;
					break;
				}
				// если регистрация была по номеру телефона - проверяем правомерность использования через код подтверждения
				if (
					flagSuccessBonusPay &&
					phoneNumber &&
					frontol.userValues.get('ConfirmRegisterPhoneNumber') == '1'
				) {
					var smsPrice = sendConfirmCodeAndSaleSms(
						cardNumber,
						phoneNumber
					);

					if (smsPrice === false) {
						flagSuccessBonusPay = false;
						bonusPay = 0;
						showMessage(CARD_USING_NOT_CONFIRMED, Icon.Error);
					} else {
						if (smsPrice > 0) {
							bonusPay = bonusPay - smsPrice;

							if (bonusPay <= 0) {
								flagSuccessBonusPay = false;
								bonusPay = 0;
							}
						}
					}
				}
				//если флаг ложный, вводим 0
				if (flagSuccessBonusPay == false) {
					AddProcPaymentCard(
						cardNumber,
						0,
						0,
						responseRegJSON,
						frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
					);
				}
				//если флаг - истина, отрабатываем ввод платежа
				else {
					if (frontol.userValues.get(BONUS_PAYMENT_CODE_NAME) != '') {
						AddProcPaymentCard(
							cardNumber,
							0,
							bonusPay,
							responseRegJSON,
							frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
						);
						return;
					}
					if (
						frontol.userValues.get('BonusRateCode') != '' ||
						frontol.userValues.get('BonusRatePositionsCode') != ''
					) {
						AddProcPaymentCard(
							cardNumber,
							0,
							bonusPay,
							responseRegJSON,
							'discount'
						);
						return;
					}
					showMessage(
						'Не заданы тип оплаты или ставка! Карта не была введена!',
						Icon.Error
					);
				}
			}
		}

		function HandleDiscountCard() {
			if (frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME) == '') {
				if (doc.userValues.get('FirstCardNumber') == '') {
					AddProcDiscountCard(cardNumber, 0, responseRegJSON);
				} else {
					showError(
						'В документ уже введены карты.\nДисконтная карта вводится первой!'
					);
				}
			} else {
				//!attn дисконт как вид оплаты недоступен
				showMessage('Дисконт как вид оплаты недоступен');
			}
		}

		//вспомогательная функция - обработка купонной карты
		function HandleCouponCard() {
			//если карта только накопительная
			if (responseRegJSON.AccumulateOnly == true) {
				showMessage(
					'Купон ' + cardNumber + ' недоступн для списания средств!',
					Icon.Error
				);
			}
			//если у карты нулевой баланс
			else if (responseRegJSON.Balance <= 0) {
				showMessage(
					'Купон ' +
						cardNumber +
						' уже был использован или имеет нулевой баланс!',
					Icon.Error
				);
			}
			//если есть, что списать
			else {
				//считаем оплату, которую будем начислять
				var finalCouponSum = getUsedCouponSum(responseRegJSON.Balance);

				finalCouponSum = Number(finalCouponSum).round(2);

				//считаем сдачу
				//считаем введенные платежи
				var paymentsEntered = 0;

				for (
					doc.payment.index = 1;
					doc.payment.index <= doc.payment.count;
					doc.payment.index++
				) {
					paymentsEntered += doc.payment.sumInBaseCurrency;
				}
				//получаем остаток для оплаты
				var residueToPay = doc.totalSum - paymentsEntered;

				if (responseRegJSON.Balance < residueToPay) {
					residueToPay = responseRegJSON.Balance;
				}

				var changeFromCoupon = Number(
					responseRegJSON.Balance - residueToPay
				).round(2);

				if (changeFromCoupon < 0) {
					changeFromCoupon = 0;
				}

				//добавляем карту
				if (frontol.userValues.get(COUPON_PAYMENT_CODE_NAME) != '') {
					AddProcPaymentCard(
						cardNumber,
						0,
						finalCouponSum,
						responseRegJSON,
						frontol.userValues.get(COUPON_PAYMENT_CODE_NAME)
					);
					doc.userValues.set('ChangeFromCoupon', changeFromCoupon);
					return;
				}

				if (frontol.userValues.get('CouponRateCode') != '') {
					AddProcPaymentCard(
						cardNumber,
						0,
						finalCouponSum,
						responseRegJSON,
						'discount'
					);
					doc.userValues.set('ChangeFromCoupon', changeFromCoupon);
					return;
				}
				showMessage(
					'Не заданы тип оплаты или ставка!' +
						CR_MESSAGE +
						'Купон ' +
						cardNumber +
						' не был введён!',
					Icon.Error
				);
			}
		}

		//вспомогательная функция - обработка неизвестной карты с нулевыми движениями при отсутствии связи
		function HandleUnknownCard() {
			//если дисконт по умолчанию не предусмотрен
			if (frontol.userValues.get('DefaultDiscountValue') == '') {
				AddUnknownCard(cardNumber);
			}
			//иначе, если не используются оплатные системы
			else if (
				frontol.userValues.get(BONUS_PAYMENT_CODE_NAME) == '' &&
				frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME) == '' &&
				frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME) == '' &&
				frontol.userValues.get(COUPON_PAYMENT_CODE_NAME) == '' &&
				frontol.userValues.get('BonusRateCode') == '' &&
				frontol.userValues.get('BonusRatePositionsCode') == '' &&
				frontol.userValues.get('CouponRateCode') == ''
			) {
				if (doc.userValues.get('FirstCardNumber') == '') {
					AddProcDiscountCard(cardNumber, 1);
				} else {
					showError(
						'В документ уже введены карты.\nДисконтная карта вводится первой!'
					);
				}
			}
			//иначе, если дисконтные карты со скидкой по умолчанию имеют префикс
			else if (
				frontol.userValues.get('DefaultDiscountCardPrefix') != ''
			) {
				var checkPrefix = '';

				for (
					var i = 1;
					i <=
					frontol.userValues.get('DefaultDiscountCardPrefix').length;
					i++
				) {
					checkPrefix += cardNumber.charAt(i - 1);
				}

				if (
					frontol.userValues.get('DefaultDiscountCardPrefix') ==
					checkPrefix.toString()
				) {
					if (doc.userValues.get('FirstCardNumber') == '') {
						AddProcDiscountCard(cardNumber, 1);
					} else {
						showError(
							'В документ уже введены карты.\nДисконтная карта вводится первой!'
						);
					}
				} else {
					AddUnknownCard(cardNumber);
				}
			} else {
				if (
					showMessage(
						'Вводится дисконтная карта?',
						Button.YesNo + Icon.Question
					) == DialogResult.Yes
				) {
					if (doc.userValues.get('FirstCardNumber') == '') {
						AddProcDiscountCard(cardNumber, 1);
					} else {
						showError(
							'В документ уже введены карты.\nДисконтная карта вводится первой!'
						);
					}
				} else {
					AddUnknownCard(cardNumber);
				}
			}
		}

		//вспомогательная функция - получение кол-ва используемых для оплаты бонусов
		function getUsedCouponSum(couponSum) {
			var finalCouponSum = 0;
			var sumForPayment = GetSumForPayment();

			if (couponSum < sumForPayment) {
				finalCouponSum = couponSum;
			} else {
				finalCouponSum = sumForPayment;

				if (getClientUUID() === '29A1BC43-C747-4B97-ACD7-6F74CFC88BA1')
					doc.userValues.set('KenmartMarkup', '1');
			}
			return finalCouponSum;
		}
	}

	//ДОБАВЛЕНИЕ В ДОКУМЕНТ ПРОЦЕССИНГОВОЙ КАРТЫ ОПЛАТЫ
	/* cardNumber - номер карты клиента
       delayFlag - флаг отложенного документа (0 - нет, 1 - отложенный)
       sum - вводимая сумма
       serverResponse - распарсенный ответ сервера
       paymentType - код типа оплаты или "discount" при суммовой скидке на документ; при sum = 0 не используется*/
	function AddProcPaymentCard(
		cardNumber,
		delayFlag,
		sum,
		serverResponse,
		paymentType
	) {
		var doc = frontol.currentDocument;
		var accountTypeId = serverResponse.AccountTypeId;
		// флаг скидки бонусами для бонусной карты
		var isBonusRateForBonusCard = false;

		if (
			accountTypeId == 1 &&
			(frontol.userValues.get('BonusRateCode') ||
				frontol.userValues.get('BonusRatePositionsCode'))
		) {
			isBonusRateForBonusCard = true;
		}

		// флаг скидки купонами для купона
		var isCouponRateForCoupon = false;

		if (accountTypeId == 4 && frontol.userValues.get('CouponRateCode')) {
			isCouponRateForCoupon = true;
		}
		//вспомогательная функция для добавления элемента к строке
		/*  cardBox - имя пользовательской переменной документа
            item - добавляемое значение (строка)*/
		function AddNewItemToCardBox(cardBox, item) {
			if (doc.userValues.get(cardBox) != '') {
				doc.userValues.set(cardBox, doc.userValues.get(cardBox) + ';');
			}
			doc.userValues.set(cardBox, doc.userValues.get(cardBox) + item);
		}

		//если введенная карта - первая, зафиксируем это
		if (doc.userValues.get('FirstCardNumber') == '') {
			doc.userValues.set('FirstCardNumber', cardNumber);
		}

		//если документ не отложенный и у нас есть ответ от сервера
		if (delayFlag == 0) {
			//cardBoxNumbers - номера карт
			AddNewItemToCardBox('cardBoxNumbers', cardNumber);

			//cardBoxAccountTypes - номера типов карт
			AddNewItemToCardBox('cardBoxAccountTypes', accountTypeId);

			//cardBoxTypes - типы карт
			switch (accountTypeId) {
				case 1: {
					AddNewItemToCardBox('cardBoxTypes', 'бонусная');
					break;
				}
				case 2: {
					AddNewItemToCardBox('cardBoxTypes', 'дисконтная');
					break;
				}
				case 3: {
					AddNewItemToCardBox('cardBoxTypes', 'депозитная');
					break;
				}
				case 4: {
					AddNewItemToCardBox('cardBoxTypes', 'купон');
					break;
				}
				default: {
					AddNewItemToCardBox('cardBoxTypes', '-');
					break;
				}
			}

			//cardBoxOwners - ФИО владельцев
			var owner = '';

			if (serverResponse.LastName != null) {
				owner += serverResponse.LastName;
			}

			if (serverResponse.FirstName != null) {
				if (owner != '') {
					owner += ' ';
				}
				owner += serverResponse.FirstName;
			}

			if (serverResponse.SurName != null) {
				if (owner != '') {
					owner += ' ';
				}
				owner += serverResponse.SurName;
			}
			//чтобы значение в любом случае было непустым
			if (owner == '') owner += '-';

			AddNewItemToCardBox('cardBoxOwners', owner);

			//cardBoxBalances - балансы карт
			AddNewItemToCardBox('cardBoxBalances', serverResponse.BonusBalance);

			//считаем SumBase заранее
			var sumBase = doc.totalSum;

			for (
				doc.payment.index = 1;
				doc.payment.index <= doc.payment.count;
				doc.payment.index++
			) {
				if (
					doc.payment.type.code ==
						Number(
							frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
						) ||
					doc.payment.type.code ==
						Number(
							frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME)
						) ||
					doc.payment.type.code ==
						Number(
							frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME)
						) ||
					doc.payment.type.code ==
						Number(frontol.userValues.get(COUPON_PAYMENT_CODE_NAME))
				) {
					sumBase -= doc.payment.sumInBaseCurrency;
				}
			}
			sumBase = Number(sumBase).round(2);

			//cardBoxAvailables - доступные для списания средства
			//здесь же добавляем дисконт, если надо
			if (serverResponse.AccumulateOnly != true) {
				AddNewItemToCardBox(
					'cardBoxAvailables',
					serverResponse.Balance
				);

				if (accountTypeId == 1) {
					// бонусный счет
					if (
						frontol.userValues.get('BonusRateCode') != '' || // бонусы как скидка
						frontol.userValues.get('BonusRatePositionsCode') !=
							'' || // бонусы как скидка по позициям
						Number(
							frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
						) > 0 // бонусы как оплата
					) {
						if (
							frontol.userValues.get('BonusRateOnDocument') == '1'
						) {
							//""+ для того, чтобы точка не превратилась в запятую
							doc.userValues.set(
								'BonusDiscount',
								'' +
									(Number(
										doc.userValues.get('BonusDiscount')
									) +
										sum)
							);
						} else {
							// абсолютная бонусная скидка по позициям
							if (
								frontol.userValues.get(
									'BonusRatePositionsCode'
								) != '' || // бонусы как скидка по позициям
								Number(
									frontol.userValues.get(
										BONUS_PAYMENT_CODE_NAME
									)
								) == paymentType // бонусы как оплата
							) {
								makeStringPositionBonusDiscount(
									serverResponse.Balance,
									sum,
									serverResponse.RegisterDetailResponseDtos,
									'BonusDiscountPositions'
								);
							} else {
								MakeStringPositionDiscount(
									sum,
									'BonusDiscount'
								);
							}
						}
					}
				}

				if (isCouponRateForCoupon) {
					if (frontol.userValues.get('CouponRateOnDocument') == '1') {
						//""+ для того, чтобы точка не превратилась в запятую
						doc.userValues.set(
							'CouponDiscount',
							'' +
								(Number(doc.userValues.get('CouponDiscount')) +
									sum)
						);
					} else {
						MakeStringPositionDiscount(sum, 'CouponDiscount');
					}
				}
			} else {
				AddNewItemToCardBox('cardBoxAvailables', 0);
				AddNewItemToCardBox('cardBoxAccumulateOnly', '1');

				if (isBonusRateForBonusCard) {
					if (frontol.userValues.get('BonusRateOnDocument') == '1') {
						// "" + для того, чтобы точка не превратилась в запятую
						doc.userValues.set(
							'BonusDiscount',
							'' + Number(doc.userValues.get('BonusDiscount'))
						);
					} else {
						MakeStringPositionDiscount(0, 'BonusDiscount');
					}
				}

				if (isCouponRateForCoupon) {
					if (frontol.userValues.get('CouponRateOnDocument') == '1') {
						//""+ для того, чтобы точка не превратилась в запятую
						doc.userValues.set(
							'CouponDiscount',
							'' + Number(doc.userValues.get('CouponDiscount'))
						);
					} else {
						MakeStringPositionDiscount(0, 'CouponDiscount');
					}
				}
			}

			// если есть спеццены
			var specialPriceDiscount = 0; // скида спеццен
			//считаем сумму скидки до пересчета скидок
			var discountBeforeRecalc = GetSumBonusOrCouponRate();
			var discountAfterRecalc = 0;

			if ('RegisterDetailResponseDtos' in serverResponse) {
				addCardBoxSpecialDetailDtos(
					serverResponse.RegisterDetailResponseDtos,
					accountTypeId
				);
			}

			if (
				doc.userValues.get('DiscountPositions') ||
				(sum > 0 && (isBonusRateForBonusCard || isCouponRateForCoupon))
			) {
				doc.recalculateAllDiscounts();

				if (frontol.userValues.get('SecondMonitor') == '1') {
					if (rxF2SM) rxF2SM.updateCheque(doc);
				}
				// закоментировал т.к. спеццена нужна только для передачи информации из метода register в метод sale
				if (doc.userValues.get('cardBoxSpecialDetailDtos'))
					specialPriceDiscount = GetSumDiscountRate();

				if (
					sum > 0 &&
					(isBonusRateForBonusCard || isCouponRateForCoupon)
				) {
					//считаем сумму скидки после пересчета скидок
					discountAfterRecalc = GetSumBonusOrCouponRate();
				}
			}

			if (sum > 0 && (isBonusRateForBonusCard || isCouponRateForCoupon)) {
				if (
					paymentType !=
					Number(frontol.userValues.get(BONUS_PAYMENT_CODE_NAME))
				) {
					//считаем Discount если бонусы - не оплата
					sum = discountAfterRecalc - discountBeforeRecalc;
					sum = Number(sum).round(2);
				}
			}
			//cardBoxDocDiscDtos - объект DocumentDiscountDtos, записанный в строку со внутренним разделителем &
			//AccountId уже знаем
			//CardCode уже знаем
			//считаем SumDiscounted
			var sumDiscounted = sumBase - sum;

			sumDiscounted = Number(sumDiscounted).round(2);
			//Discount уже знаем
			//считаем Percent
			var percent = 0;

			if (sumBase > 0) {
				percent = Number(
					((sum + specialPriceDiscount) * 100) / sumBase
				).round(2);
			}

			try {
				//добавляем оплату
				if (sum > 0 && paymentType != 'discount') {
					try {
						if (IsExtraEnabled('ExtraTaxKyrgyzstan')) {
							if (
								sum < GetSumForPayment() &&
								doc.userValues.get('IsDecreasedPricesForTax') ==
									''
							) {
								if (
									showMessage(
										'Остаток будет оплачиваться кредитом?',
										Button.YesNo + Icon.Question
									) == DialogResult.Yes
								) {
									doc.userValues.set('NeedCalc', '1');
									CalculateSalesTaxKirg_ExtraTaxKyrgyzstan();
								}
							}
						}
					} catch (e) {
						showMessage(
							'Ошибка при расчете налога с продаж!' +
								'\n' +
								e.name +
								'\n' +
								e.message,
							Icon.Error
						);
					}
					doc.addPayment(Number(paymentType), sum);
				}
				AddNewItemToCardBox(
					'cardBoxDocDiscDtos',
					serverResponse.AccountId +
						'&' +
						cardNumber +
						'&' +
						sumBase +
						'&' +
						Number(sumDiscounted - specialPriceDiscount) +
						'&' +
						Number(sum + specialPriceDiscount) +
						'&' +
						percent +
						'&' +
						sum // for ProcV2
				);
			} catch (e) {
				showMessage(
					'Ошибка при добавлении оплаты!' +
						'\n' +
						e.name +
						'\n' +
						e.message,
					Icon.Error
				);
			}
		}
		//если документ отложен и ответа от сервера у нас нет
		else {
			AddUnknownCard(cardNumber);
		}

		//вспомогательная функция - получает сумму скидки документа по ставке бонусов или купонов
		function GetSumBonusOrCouponRate() {
			var discount = 0;

			//если суммовая скидка на документ
			if (
				(accountTypeId == 1 &&
					frontol.userValues.get('BonusRateOnDocument') == '1') ||
				(accountTypeId == 4 &&
					frontol.userValues.get('CouponRateOnDocument') == '1')
			) {
				for (
					doc.discountDoc.index = 1;
					doc.discountDoc.index <= doc.discountDoc.count;
					doc.discountDoc.index++
				) {
					if (
						(accountTypeId == 1 &&
							doc.discountDoc.marketingEvent.code ==
								Number(
									frontol.userValues.get('BonusRateCode')
								)) ||
						(accountTypeId == 4 &&
							doc.discountDoc.marketingEvent.code ==
								Number(
									frontol.userValues.get('CouponRateCode')
								))
					) {
						discount += doc.discountDoc.sum;
					}
				}
			}
			//если суммовая скидка на позиции
			else {
				for (
					doc.position.index = 1;
					doc.position.index <= doc.position.count;
					doc.position.index++
				) {
					if (doc.position.storno == 0) {
						for (
							doc.position.discountPos.index = 1;
							doc.position.discountPos.index <=
							doc.position.discountPos.count;
							doc.position.discountPos.index++
						) {
							if (
								(accountTypeId == 1 &&
									(doc.position.discountPos.marketingEvent
										.code ==
										Number(
											frontol.userValues.get(
												'BonusRateCode'
											)
										) ||
										doc.position.discountPos.marketingEvent
											.code ==
											Number(
												frontol.userValues.get(
													'BonusRatePositionsCode'
												)
											))) ||
								(accountTypeId == 4 &&
									doc.position.discountPos.marketingEvent
										.code ==
										Number(
											frontol.userValues.get(
												'CouponRateCode'
											)
										))
							) {
								discount += doc.position.discountPos.sum;
							}
						}
					}
				}
			}
			return discount;
		}
	}

	//ДОБАВЛЕНИЕ В ДОКУМЕНТ ПРОЦЕССИНГОВОЙ ДИСКОНТНОЙ КАРТЫ
	/* cardNumber - номер карты клиента
       delayFlag - флаг отложенного документа (0 - нет, 1 - отложенный)
       serverResponse - распарсенный ответ сервера*/
	function AddProcDiscountCard(cardNumber, delayFlag, serverResponse) {
		var doc = frontol.currentDocument;
		//вспомогательная функция для добавления элемента к строке
		/*  cardBox - имя пользовательской переменной документа
            item - добавляемое значение (строка)*/
		function AddNewItemToCardBox(cardBox, item) {
			if (doc.userValues.get(cardBox) != '') {
				doc.userValues.set(cardBox, doc.userValues.get(cardBox) + ';');
			}
			doc.userValues.set(cardBox, doc.userValues.get(cardBox) + item);
		}

		//если введенная карта - первая, зафиксируем это
		if (doc.userValues.get('FirstCardNumber') == '') {
			doc.userValues.set('FirstCardNumber', cardNumber);
		}

		//если документ не отложенный и у нас есть ответ от сервера
		if (delayFlag == 0) {
			//cardBoxNumbers - номера карт
			AddNewItemToCardBox('cardBoxNumbers', cardNumber);

			//cardBoxAccountTypes - номера типов карт
			AddNewItemToCardBox(
				'cardBoxAccountTypes',
				serverResponse.AccountTypeId
			);

			//cardBoxTypes - типы карт
			switch (serverResponse.AccountTypeId) {
				case 2: {
					AddNewItemToCardBox('cardBoxTypes', 'дисконтная');
					break;
				}
				default: {
					AddNewItemToCardBox('cardBoxTypes', '-');
					break;
				}
			}

			//cardBoxOwners - ФИО владельцев
			var owner = '';

			if (serverResponse.LastName != null) {
				owner += serverResponse.LastName;
			}

			if (serverResponse.FirstName != null) {
				if (owner != '') {
					owner += ' ';
				}
				owner += serverResponse.FirstName;
			}

			if (serverResponse.SurName != null) {
				if (owner != '') {
					owner += ' ';
				}
				owner += serverResponse.SurName;
			}
			//чтобы значение в любом случае было непустым
			if (owner == '') {
				owner += '-';
			}
			AddNewItemToCardBox('cardBoxOwners', owner);

			//cardBoxBalances - балансы карт
			AddNewItemToCardBox('cardBoxBalances', serverResponse.Balance);

			//считаем SumBase заранее, до пересчета скидок
			var sumBase = doc.totalSum;

			//cardBoxAvailables - доступные для списания средства
			//здесь же добавляем дисконт
			if (serverResponse.AccumulateOnly != true) {
				AddNewItemToCardBox(
					'cardBoxAvailables',
					serverResponse.Balance
				);

				if (serverResponse.UsePercent == true) {
					//""+ для того, чтобы точка не превратилась в запятую
					doc.userValues.set('Discount', '' + serverResponse.Percent);
				} else {
					//""+ для того, чтобы точка не превратилась в запятую
					//doc.userValues.set("Discount", "" + serverResponse.Balance);
				}
				setStringPositionDiscounts(
					serverResponse.RegisterDetailResponseDtos
				);
			} else {
				AddNewItemToCardBox('cardBoxAvailables', 0);
			}

			//пересчитываем скидки
			doc.recalculateAllDiscounts();

			if (frontol.userValues.get('SecondMonitor') == '1') {
				if (rxF2SM) rxF2SM.updateCheque(doc);
			}

			//cardBoxDocDiscDtos - объект DocumentDiscountDtos, записанный в строку со внутренним разделителем &
			//считаем Discount
			var discount = GetSumDiscountRate();

			//AccountId уже знаем
			//CardCode уже знаем
			//SumBase был посчитан заранее
			//считаем SumDiscounted
			var sumDiscounted = sumBase - discount;
			//считаем Percent
			var percent = 0;

			if (sumBase > 0) percent = (discount * 100) / sumBase;

			//округляем все данные
			sumBase = Number(sumBase).round(2);
			discount = Number(discount).round(2);
			sumDiscounted = Number(sumDiscounted).round(2);
			percent = Number(percent).round(2);

			//добавляем карту в документ
			AddNewItemToCardBox(
				'cardBoxDocDiscDtos',
				serverResponse.AccountId +
					'&' +
					cardNumber +
					'&' +
					sumBase +
					'&' +
					sumDiscounted +
					'&' +
					discount +
					'&' +
					percent
			);

			//добавляем информацию в поле с номером дисконтной карты
			doc.userValues.set('DiscountCardNumber', cardNumber);
		}
		//если документ отложен и ответа от сервера у нас нет
		else {
			//cardBoxNumbers - номера карт
			AddNewItemToCardBox('cardBoxNumbers', cardNumber);
			//cardBoxAccountTypes - номера типов карт
			AddNewItemToCardBox('cardBoxAccountTypes', 0);
			//cardBoxTypes - типы карт
			AddNewItemToCardBox('cardBoxTypes', '-');
			//cardBoxOwners - ФИО владельцев
			AddNewItemToCardBox('cardBoxOwners', '-');
			//cardBoxBalances - балансы карт
			AddNewItemToCardBox('cardBoxBalances', 0);
			//cardBoxAvailables - доступные для списания средства
			AddNewItemToCardBox('cardBoxAvailables', 0);

			//считаем SumBase заранее, до пересчета скидок
			var sumBase = doc.totalSum;

			//добавляем дисконт по умолчанию
			if (frontol.userValues.get('DefaultDiscountValue') != '') {
				doc.userValues.set(
					'Discount',
					Number(
						frontol.userValues
							.get('DefaultDiscountValue')
							.replace(',', '.')
					)
				);
				//doc.userValues.set("Discount", doc.userValues.get("Discount").replace(",","."));
				//doc.userValues.set("Discount", Number(doc.userValues.get("DiscountPositions").replace(",",".")));
				//doc.userValues.set("Discount", "df" + doc.userValues.get("DiscountPositions").replace(",","."));
			} else {
				doc.userValues.set('Discount', 0);
			}

			//пересчитываем скидки
			doc.recalculateAllDiscounts();

			if (frontol.userValues.get('SecondMonitor') == '1') {
				if (rxF2SM) rxF2SM.updateCheque(doc);
			}

			//cardBoxDocDiscDtos - объект DocumentDiscountDtos, записанный в строку со внутренним разделителем &
			//считаем Discount
			var discount = GetSumDiscountRate();

			//AccountId = 0
			//CardCode уже знаем
			//SumBase был посчитан заранее
			//считаем SumDiscounted
			var sumDiscounted = sumBase - discount;
			//считаем Percent
			var percent = 0;

			if (sumBase > 0) percent = (discount * 100) / sumBase;

			//округляем все данные
			sumBase = Number(sumBase).round(2);
			discount = Number(discount).round(2);
			sumDiscounted = Number(sumDiscounted).round(2);
			percent = Number(percent).round(2);

			//добавляем карту в документ
			AddNewItemToCardBox(
				'cardBoxDocDiscDtos',
				'0' +
					'&' +
					cardNumber +
					'&' +
					sumBase +
					'&' +
					sumDiscounted +
					'&' +
					discount +
					'&' +
					percent
			);

			//добавляем информацию в поле с номером дисконтной карты
			doc.userValues.set('DiscountCardNumber', cardNumber);
		}
	}

	//ДОБАВЛЕНИЕ В ДОКУМЕНТ НЕИЗВЕСТНОЙ КАРТЫ
	/* cardNumber - номер карты клиента*/
	function AddUnknownCard(cardNumber) {
		var doc = frontol.currentDocument;
		//вспомогательная функция для добавления элемента к строке
		/*  cardBox - имя пользовательской переменной документа
            item - добавляемое значение (строка)*/
		function AddNewItemToCardBox(cardBox, item) {
			if (doc.userValues.get(cardBox) != '') {
				doc.userValues.set(cardBox, doc.userValues.get(cardBox) + ';');
			}
			doc.userValues.set(cardBox, doc.userValues.get(cardBox) + item);
		}

		//если введенная карта - первая, зафиксируем это
		if (doc.userValues.get('FirstCardNumber') == '') {
			doc.userValues.set('FirstCardNumber', cardNumber);
		}

		//cardBoxNumbers - номера карт
		AddNewItemToCardBox('cardBoxNumbers', cardNumber);
		//cardBoxAccountTypes - номера типов карт
		AddNewItemToCardBox('cardBoxAccountTypes', 0);
		//cardBoxTypes - типы карт
		AddNewItemToCardBox('cardBoxTypes', '-');
		//cardBoxOwners - ФИО владельцев
		AddNewItemToCardBox('cardBoxOwners', '-');
		//cardBoxBalances - балансы карт
		AddNewItemToCardBox('cardBoxBalances', 0);
		//cardBoxAvailables - доступные для списания средства
		AddNewItemToCardBox('cardBoxAvailables', 0);
		//cardBoxDocDiscDtos - объект DocumentDiscountDtos, записанный в строку со внутренним разделителем &
		//!attn - если появится возможность процентного дисконта, расчет SumBase надо будет переделать
		var sumBase = doc.totalSum;

		for (
			doc.payment.index = 1;
			doc.payment.index <= doc.payment.count;
			doc.payment.index++
		) {
			if (
				doc.payment.type.code ==
					Number(frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)) ||
				doc.payment.type.code ==
					Number(
						frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME)
					) ||
				doc.payment.type.code ==
					Number(frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME)) ||
				doc.payment.type.code ==
					Number(frontol.userValues.get(COUPON_PAYMENT_CODE_NAME))
			) {
				sumBase -= doc.payment.sumInBaseCurrency;
			}
		}
		sumBase = Number(sumBase).round(2);
		AddNewItemToCardBox(
			'cardBoxDocDiscDtos',
			'0' +
				'&' +
				cardNumber +
				'&' +
				sumBase +
				'&' +
				sumBase +
				'&' +
				'0' +
				'&' +
				'0'
		);

		if (IsExtraEnabled('ExtraTaxKyrgyzstan')) {
			doc.recalculateAllDiscounts();

			if (frontol.userValues.get('SecondMonitor') == '1') {
				if (rxF2SM) rxF2SM.updateCheque(doc);
			}
		}
	}
	//вспомогательная функция - получает сумму скидки документа по ставке дисконтной карты
	function GetSumDiscountRate() {
		var discount = 0;
		var doc = frontol.currentDocument;
		//если ставка на документ
		for (
			doc.discountDoc.index = 1;
			doc.discountDoc.index <= doc.discountDoc.count;
			doc.discountDoc.index++
		) {
			if (doc.discountDoc.marketingEvent.name == 'RxDiscount') {
				discount += doc.discountDoc.sum;
			}
		}

		//если ставка на позицию
		for (
			doc.position.index = 1;
			doc.position.index <= doc.position.count;
			doc.position.index++
		) {
			if (doc.position.storno == 0) {
				for (
					doc.position.discountPos.index = 1;
					doc.position.discountPos.index <=
					doc.position.discountPos.count;
					doc.position.discountPos.index++
				) {
					if (
						doc.position.discountPos.marketingEvent.name ==
							'RxPositions' ||
						doc.position.discountPos.marketingEvent.name ==
							'RxDiscount'
					) {
						discount += doc.position.discountPos.sum;
					}
				}
			}
		}
		return discount;
	}
	//ПОЛУЧЕНИЕ ИНФОРМАЦИИ О КАРТЕ
	function GetCardInfo() {
		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) showError(LICENSE_NOT_SET_MESSAGE);

		//получаем номер карты
		var cardNumber = frontol.actions.inputString(
			INPUT_CARD_CODE_MESSAGE,
			''
		);

		if (!cardNumber) showError(CARD_CODE_EMPTY_MESSAGE);

		cardNumber = CorrectCardNumber(cardNumber);

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			CardCode: cardNumber
		});

		var result = {
			success: false,
			message: '',
			data: ''
		};

		result = sendHttpRequest(
			processingServerAddress + '/BonusWebApi/api/processing/info',
			'POST',
			stringToSend,
			'info'
		);

		if (result.success) {
			var messageArray = [];

			//владелец
			var owner = '';

			if ('FirstName' in result.data && result.data.FirstName) {
				owner += result.data.FirstName.trim();
			}

			if ('SurName' in result.data && result.data.SurName) {
				if (owner) owner += ' ';

				owner += result.data.SurName.trim();
			}

			if ('LastName' in result.data && result.data.LastName) {
				if (owner) owner += ' ';

				owner += result.data.LastName.trim();
			}

			if (owner) messageArray.push(owner);

			//тип карты
			var cardType = '';

			if ('AccountType' in result.data) {
				switch (result.data.AccountType) {
					case 1: {
						cardType = 'бонусная';
						break;
					}
					case 2: {
						cardType = 'дисконтная';
						break;
					}
					case 3: {
						cardType = 'депозитная';
						break;
					}
					case 4: {
						cardType = 'купон';
						break;
					}
					default: {
						cardType = 'неопределено';
						break;
					}
				}
			}

			if (cardType) messageArray.push('Тип карты: ' + cardType);

			//если тип счета - бонусный, депозитный или купон
			if (
				'AccountType' in result.data &&
				(result.data.AccountType == 1 ||
					result.data.AccountType == 3 ||
					result.data.AccountType == 4)
			) {
				//баланс
				var balance =
					'Balance' in result.data ? result.data.Balance : 0;

				messageArray.push('Баланс: ' + balance);

				//является ли карта только накопительной
				if (
					'AccumulateOnly' in result.data &&
					result.data.AccumulateOnly == true
				) {
					messageArray.push('Только накопительная');
				}
			}
			// оборот
			if ('Turnover' in result.data && result.data.Turnover) {
				messageArray.push('Оборот: ' + result.data.Turnover);
			}
			// баланс фишек по маркетинговым программам
			if (
				'ClientChipInfo' in result.data &&
				result.data.ClientChipInfo &&
				result.data.ClientChipInfo.length > 0
			) {
				messageArray.push(
					'Информация об участии в маркетинговых программах:'
				);

				for (var i = 0; i < result.data.ClientChipInfo.length; i++) {
					var clientChipInfo = result.data.ClientChipInfo[i];

					if (
						'MarketProgramId' in clientChipInfo &&
						clientChipInfo.MarketProgramId &&
						Number(clientChipInfo.MarketProgramId) > 0 &&
						'MarketProgramName' in clientChipInfo &&
						clientChipInfo.MarketProgramName &&
						clientChipInfo.MarketProgramName.length > 0 &&
						'AddChip' in clientChipInfo &&
						clientChipInfo.AddChip.toString() &&
						'Balance' in clientChipInfo &&
						clientChipInfo.Balance.toString()
					) {
						messageArray.push(
							clientChipInfo.MarketProgramName +
								', ' +
								(clientChipInfo.AddChip > 0
									? 'добавлено фишек ' +
									  clientChipInfo.AddChip +
									  ', '
									: '') +
								'баланс ' +
								clientChipInfo.Balance
						);
					}
				}
			}

			//заблокирована ли карта
			if ('Blocked' in result.data && result.data.Blocked == true) {
				messageArray.push('Карта заблокирована!');
			}

			//формируем сообщение
			var message = messageArray.join('\n');

			//показ
			if (frontol.userValues.get('ShowCardInfo') == '1')
				showMessage(message);
		} else {
			showMessage(result.message, Icon.Error);
			return;
		}
	}

	//ПОЛУЧИТЬ МАССИВ НАИМЕНОВАНИЙ НАСТРОЕК
	function GetSettingsArray() {
		return [
			//код магазина
			'SubjectCode',
			//таймаут ожидания ответа на запрос
			'TimeoutQuery',
			//код оплаты бонусами
			BONUS_PAYMENT_CODE_NAME,
			// курс бонуса
			'BonusScale',
			//код оплаты скидкой
			DISCOUNT_PAYMENT_CODE_NAME,
			//код оплаты депозитом
			DEPOSIT_PAYMENT_CODE_NAME,
			//код оплаты купонами
			COUPON_PAYMENT_CODE_NAME,
			//префикс карт
			'CardPrefix',
			//добавляемый префикс карт
			'AddedCardPrefix',
			//начало диапазона
			'CardRangeStart',
			//конец диапазона
			'CardRangeEnd',
			//показ движений по картам
			'ShowCardsMoves',
			//таймаут показа движений по картам
			'ShowCardsMovesTimeout',
			//печать движений по картам
			'PrintCardsMoves',
			//печать движений по купонам,
			'PrintCouponCardsMoves',
			//показ информации по карте
			'ShowCardInfo',
			//печать информации по карте
			'PrintCardInfo',
			//добавляемый к артикулам товара префикс
			'WareMarkPrefix',
			//код ставки для дисконтных карт - не используется с 20180608
			'DiscountRateCode',
			//код ставки для бонусных карт
			'BonusRateCode',
			//код ставки по позициям для бонусных карт
			'BonusRatePositionsCode',
			//признак ставки для бонусных карт на документ
			'BonusRateOnDocument',
			//код ставки для купонов
			'CouponRateCode',
			//признак ставки для купонов на документ
			'CouponRateOnDocument',
			//значение дисконта по умолчанию
			'DefaultDiscountValue',
			//префикс карт с дисконтом по умолчанию
			'DefaultDiscountCardPrefix',
			//запрет возврата документа с процессинговыми платежами (коды платежей через запятую, без пробелов)
			'ForbidReturnWithPayments',
			//сторнирование процессинговых платежей
			'StornoProcPayments',
			//минимальная сумма чека для запроса на создание купона
			'SumToCreateCoupon',
			//минимальная сумма чека для запроса на создание карты
			'SumToCreateCard',
			//наименование группы товаров, для которых считается сумма для создания карты
			'NameWareGroupToCreateCard',
			//идентификатор товара - код вместо артикула
			'WareIdIsCode',
			//только одна карта в документе
			'OnlyOneCard',
			//вариант формирования характеристик
			'PropertiesSettings',
			//без отложенных
			'NoDelay',
			// не округлять скидку (нужно для более точного вычисления суммы скидки)
			'NotRoundDiscount',
			//удаляемые символы номера карты (regex)
			'RemoveCardNumberRegex',
			//не работать если введены стандартные карты
			'DontWorkWithStandartCards',
			// передавать продажу в процессинг до закрытия и печати чека
			'SaleBeforePrintCheck',
			// собирать статистику по документам без использования процессинговых карт
			GET_ALL_CHECKS_FROM_CASH_VALUE_NAME,
			// выгружать сертификаты для РЮД
			'rxIsRUD',
			// UID клиента
			'ClientUUID',
			// префикс специальных дисконтных карт
			'SpecialDiscountCardPrefix',
			// подтверждать номер телефона кодом при регистрации в процессинге по номеру телефона вместо карты
			'ConfirmRegisterPhoneNumber',
			// не начислять скидки, если уже есть скидки Фронтол
			'UseFrontolDiscountOnly',
			// код маркетинговой акции RxLoyalty
			'MarketingActionCode',
			// запрет тратить бонусы при регистрации по телефону
			'ProhibitSpendBonusByPhoneRegistration',
			// префикс номера телефона
			'PhonePrefix',
			// округлять сумму чека бонусной скидкой в большую сторону
			'BonusCeil',
			// ККМ платформа 5
			'KKMFirmware5',
			// масштаб печати изображений для ККМ платформа 5 (%)
			'KKMPictureScale',
			//
			//дополнительный функционал
			// второй монитор
			'SecondMonitor',
			// ССГ
			SHELF_LIFE_DISCOUNTS_VALUE_NAME,
			//налог с продаж в Киргизии
			'ExtraTaxKyrgyzstan',
			//для налога с продаж в Киргизии: кнопка, запускающая макрос Дополнительные \ Отмена (Выход) + Вызов FuncAct_ExtraTaxKyrgyzstan
			'ExtraTaxKyrgyzstanKeyMacros',
		];
	}

	//ЗАПРОС НА ФОРМИРОВАНИЕ КУПОНА В ЗАВИСИМОСТИ ОТ СУММЫ ДОКУМЕНТА
	function requestCreateCard() {
		var sumTotal = 0;
		var sumDiscounted = 0;
		var doc = frontol.currentDocument;

		if (frontol.userValues.get('NameWareGroupToCreateCard') == '') {
			sumTotal = doc.sum;
			sumDiscounted = doc.totalSum;
		} else {
			for (
				doc.position.index = 1;
				doc.position.index <= doc.position.count;
				doc.position.index++
			) {
				//если позиция текущего документа не сторнирована
				if (doc.position.storno == 0) {
					var wareInGroupFlag = false;

					for (
						doc.position.ware.parent.index = 1;
						doc.position.ware.parent.index <=
						doc.position.ware.parent.count;
						doc.position.ware.parent.index++
					) {
						if (
							doc.position.ware.parent.name ==
							frontol.userValues.get('NameWareGroupToCreateCard')
						) {
							wareInGroupFlag = true;
							break;
						}
					}

					if (wareInGroupFlag == true) {
						sumTotal += doc.position.totalSum;
						sumDiscounted += doc.position.sumWithDiscs;
					}
				}
			}
		}

		if (sumTotal < Number(frontol.userValues.get('SumToCreateCard')))
			return;

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}
		//получаем лицензию
		var license = getLicense();

		if (!license) showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);

		//получаем токен
		var token = getAccessToken();
		var dateTimeNow = getISODateTimeToString(':');

		var result = {
			success: false,
			message: '',
			data: ''
		};

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			AccessTokenGuid: token,
			DateTimeNow: dateTimeNow,
			SumTotal: Number(sumTotal).round(2),
			SumDiscounted: Number(sumDiscounted).round(2)
		});

		result = sendHttpRequest(
			processingServerAddress + '/BonusWebApi/api/processing/GetCoupons',
			'POST',
			stringToSend,
			'coupon_get'
		);

		if (result.success) {
			try {
				for (var i = 0; i < result.data.length; i++) {
					if (i != 0) {
						doc.userValues.set(
							'PrintNewCardHeaders',
							doc.userValues.get('PrintNewCardHeaders') + '&&'
						);
						doc.userValues.set(
							'PrintNewCardCodes',
							doc.userValues.get('PrintNewCardCodes') + '&&'
						);
						doc.userValues.set(
							'PrintNewCardFooters',
							doc.userValues.get('PrintNewCardFooters') + '&&'
						);
					}
					doc.userValues.set(
						'PrintNewCardHeaders',
						doc.userValues.get('PrintNewCardHeaders') +
							result.data[i].Header
					);
					doc.userValues.set(
						'PrintNewCardCodes',
						doc.userValues.get('PrintNewCardCodes') +
							result.data[i].CardCode
					);
					doc.userValues.set(
						'PrintNewCardFooters',
						doc.userValues.get('PrintNewCardFooters') +
							result.data[i].Footer
					);
				}
			} catch (e) {
				showMessage('Ошибка ' + e.name + ':' + e.message, Icon.Error);
			}
		} else {
			showMessage(result.message, Icon.Error);
		}
	}

	//РАСШИФРОВКА ОШИБОК СЕРВЕРА
	/* responseText - текст ответа от сервера
    возвращает строку с описанием ошибки, либо пустую строку, либо текст ответа без изменений
    */
	function DecryptServerError(responseText) {
		if (
			responseText == null ||
			responseText == undefined ||
			responseText == ''
		) {
			return '';
		}

		try {
			var errorObj = JSON.parse(responseText);

			if (
				'Message' in errorObj &&
				errorObj.Message &&
				'Description' in errorObj &&
				errorObj.Description
			) {
				return (
					errorObj.Description + '\nКод ошибки: ' + errorObj.Message
				);
			}

			switch (errorObj.Message) {
				case 'CardCodeEmpty': {
					return CARD_CODE_EMPTY_MESSAGE;
				}
				case 'CardPatternNotValid': {
					return CARD_PATTERN_NOT_VALID_MESSAGE;
				}
				case 'CardPatternsNotExist': {
					return CARD_PATTERN_NOT_EXIST_MESSAGE;
				}
				case 'CardBlocked': {
					return CARD_BLOCKED_MESSAGE;
				}
				case 'CardAlreadyRegistered': {
					return CARD_ALREADY_REGISTERED_MESSAGE;
				}
				case 'CardSynchronousRegistration': {
					return CARD_SYNCHRONOUS_REGISTRATION_MESSAGE;
				}
				case 'DocumentEmpty': {
					return DOCUMENT_EMPTY_MESSAGE;
				}
				case 'CardNotFound': {
					return CARD_NOT_FOUND_MESSAGE;
				}
				case 'Unauthorized': {
					return UNAUTHORIZED_MESSAGE;
				}
				case 'AccessTokenNotFound': {
					return TOKEN_NOT_FOUND_MESSAGE;
				}
				case 'LicenseTokenNotFound': {
					return LICENSE_NOT_FOUND_MESSAGE;
				}
				case 'LicenseIsNotActive': {
					return LICENSE_NOT_ACTIVE_MESSAGE;
				}
				case 'SubjectNotFound': {
					return SUBJECT_NOT_FOUND_MESSAGE;
				}
				case 'DocumentTypeNotFound': {
					return DOCUMENT_TYPE_NOT_FOUND_MESSAGE;
				}
				case 'DocumentTypeIncorrect': {
					return DOCUMENT_TYPE_INCORRECT_MESSAGE;
				}
				case 'DocumentDetailsIsEmpty': {
					return DOCUMENT_DETAILS_EMPTY_MESSAGE;
				}
				case 'DocumentDiscountsIsEmpty': {
					return DOCUMENT_DISCOUNTS_EMPTY_MESSAGE;
				}
				case 'ParentDocumentNotFound': {
					return PARENT_DOCUMENT_NOT_FOUND_MESSAGE;
				}
				case 'DocumentAlreadyReturned': {
					return DOCUMENT_ALREADY_RETURNED_MESSAGE;
				}
				case 'CalculationAlgorithmNotFound': {
					return CALCULATION_ALGORITHM_NOT_FOUND_MESSAGE;
				}
				case 'InvalidCodeToStartGenerate': {
					return INVALID_CODE_TO_START_GENERATE;
				}
				case 'NoCashParamsForLicense': {
					return NO_CASH_PARAMS_FOR_LICENSE_MESSAGE;
				}
				case 'CardExpired': {
					return CARD_EXPIRED_MESSAGE;
				}
				case 'ThisPhoneAllReadyRegistered':
				case 'ThisPhoneAllReadyRegisterd': {
					return PHONE_NUMBER_ALL_READY_REGISTERED_MESSAGE;
				}
				case 'IncorrectConfirmCode':
				case 'IncorectConfirmCode': {
					return CONFIRM_CODE_INCORRECT_MESSAGE;
				}
				default: {
					if ('Description' in errorObj && errorObj.Description) {
						return (
							errorObj.Description +
							'\nКод ошибки: ' +
							errorObj.Message
						);
					} else {
						return errorObj.Message;
					}
				}
			}
		} catch (e) {
			return responseText;
		}
	}

	//ЗАПРЕТ ВОЗВРАТА ДОКУМЕНТА С ПРОЦЕССИНГОВЫМИ ПЛАТЕЖАМИ
	function forbidReturnDocWithProcPayments() {
		//если документ - возврат и есть документ-основание с введенными процессинговыми картами
		if (
			isReturnDocument(frontol.currentDocument) &&
			frontol.currentDocument.baseDocument.number != null &&
			frontol.currentDocument.baseDocument.number != ''
		) {
			var forbiddenPaymentsString = frontol.userValues.get(
				'ForbidReturnWithPayments'
			);
			var forbiddenPaymentsArray = forbiddenPaymentsString.split(',');

			for (
				frontol.currentDocument.baseDocument.payment.index = 1;
				frontol.currentDocument.baseDocument.payment.index <=
				frontol.currentDocument.baseDocument.payment.count;
				frontol.currentDocument.baseDocument.payment.index++
			) {
				for (var j = 0; j <= forbiddenPaymentsArray.length; j++) {
					if (
						frontol.currentDocument.baseDocument.payment.type
							.code == Number(forbiddenPaymentsArray[j])
					) {
						showError(
							'Возвраты на основании документа с платежом ' +
								frontol.currentDocument.baseDocument.payment
									.type.text +
								' запрещены!'
						);
					}
				}
			}
		}
	}

	function GetCorrectServerAddress(serverAddress) {
		while (serverAddress.slice(-1) == '/') {
			serverAddress = serverAddress.slice(0, -1);
		}

		var arr = serverAddress.split('://');

		if (arr.length == 1) serverAddress = 'http://' + serverAddress;

		return serverAddress;
	}

	//УДАЛИТЬ ГЛОБАЛЬНЫЕ ПАРАМЕТРЫ
	/* settingsArray - массив со списком параметров*/
	function ClearGlobal(settingsArray) {
		//обнуляем глобальные параметры
		for (i = 0; i < settingsArray.length; i++) {
			frontol.userValues.remove(settingsArray[i]);
		}
	}

	//ВВОД ГЛОБАЛЬНОГО ПАРАМЕТРА
	/* param - имя параметра в пользовательских переменных
       header - имя параметра в заголовке
       возвращает true при успехе, false при  отказе ввода*/
	function EnterGlobalParameter(param, header) {
		var headerString = 'Вводимый параметр: ' + header;

		var newValue = frontol.actions.inputString(
			headerString,
			frontol.userValues.get(param)
		);

		if (newValue == null) return false;

		frontol.userValues.set(param, newValue.trim());
		return true;
	}

	//СФОРМИРОВАТЬ СТРОКУ СУММОВЫХ СКИДОК НА ПОЗИЦИИ
	/* sum - общая сумма скидки
       userValue - имя пользовательской переменной*/
	function MakeStringPositionDiscount(sum, userValue) {
		var discountSum = sum;
		var arrResiduePos = [];
		var doc = frontol.currentDocument;

		for (
			doc.position.index = 1;
			doc.position.index <= doc.position.count;
			doc.position.index++
		) {
			if (doc.position.storno == 0) {
				var obj = {};

				obj.PosID = doc.position.id;
				residueToDiscPosition = doc.position.totalSum;
				obj.Disc =
					residueToDiscPosition < discountSum
						? residueToDiscPosition
						: discountSum;
				discountSum -= obj.Disc;
				obj.Disc += GetSumRatePositionFromUserValue(
					doc.position,
					userValue
				);
				arrResiduePos.push(obj);
			}
		}

		var stringBonusDiscount = '';

		for (var i = 0; i < arrResiduePos.length; i++) {
			stringBonusDiscount +=
				'' +
				arrResiduePos[i].PosID +
				'&' +
				Number(arrResiduePos[i].Disc).round(2);

			if (i != arrResiduePos.length - 1) stringBonusDiscount += ';';
		}
		doc.userValues.set(userValue, stringBonusDiscount);
	}

	//СФОРМИРОВАТЬ СТРОКУ СКИДОК НА ПОЗИЦИИ ИЗ ОТВЕТА СЕРВЕРА
	/* registerDetailResponseDtos - массив с позициями из ответа сервера
       userValue - имя пользовательской переменной*/
	function setStringPositionDiscounts(dtos) {
		var doc = frontol.currentDocument;
		var discountPositions = doc.userValues.get('DiscountPositions');
		var discountPositionArray = [];

		if (discountPositions) discountPositions = discountPositions.split(';');

		if (discountPositions.length > 0) {
			for (var j = 0; j < discountPositions.length; j++) {
				var pos = discountPositions[j];
				var discountPosition = pos.split('&');

				if (discountPosition.length > 1) {
					var positionId = Number(discountPosition[0]);
					var positionDiscount = Number(discountPosition[1]);

					discountPositionArray[positionId] = positionDiscount;
				}
			}
		}

		for (var i = 0; i < dtos.length; i++) {
			var dto = dtos[i];

			if (dto.UsePercent) {
				if (frontol.userValues.get('NotRoundDiscount') != '1') {
					dto.Discount = Number(dto.Discount).round(2);
				}
				// если уже есть скидка на эту позицию
				if (discountPositionArray[dto.PositionId] != undefined) {
					// если установлен флаг "Объединять скидки"
					if (
						Number(frontol.userValues.get('CombineDiscounts')) == 1
					) {
						discountPositionArray[dto.PositionId] += Number(
							dto.Discount
						);
					} else {
						// назначаем новую скидку если она больше предыдущей
						if (
							Number(discountPositionArray[dto.PositionId]) <
							Number(dto.Discount)
						) {
							discountPositionArray[dto.PositionId] = Number(
								dto.Discount
							);
						}
					}
				} else {
					discountPositionArray[dto.PositionId] = Number(
						dto.Discount
					);
				}
			}
		}

		if (discountPositionArray.length > 0) {
			var stringDiscountPositions = '';

			for (var i = 0; i < discountPositionArray.length; i++) {
				if (discountPositionArray[i] != undefined) {
					if (stringDiscountPositions) stringDiscountPositions += ';';

					stringDiscountPositions +=
						i.toString() +
						'&' +
						discountPositionArray[i].toString();
				}
			}
			if (stringDiscountPositions)
				doc.userValues.set(
					'DiscountPositions',
					stringDiscountPositions
				);
		}
	}

	//СФОРМИРОВАТЬ СТРОКУ СКИДОК НА ПОЗИЦИИ ИЗ ОТВЕТА СЕРВЕРА
	/*  balance - бонусный баланс карты, доступный для списания
        sum - сумма списываемых бонусов
        registerDetailResponseDtos - массив с позициями из ответа сервера
        userValue - имя пользовательской переменной*/
	function makeStringPositionBonusDiscount(
		balance,
		sum,
		registerDetailResponseDtos,
		userValue
	) {
		if (
			!(balance > 0) ||
			!(sum > 0) ||
			typeof registerDetailResponseDtos === 'undefined' ||
			!registerDetailResponseDtos ||
			!(registerDetailResponseDtos.length > 0) ||
			userValue == ''
		) {
			return;
		}

		var stringBonusDiscount = '';

		try {
			var positions = [];
			var maxDiscountIndex = 0; // индекс позиции с максимально возможной скидкой
			var maxDiscount = 0; // максимально возможная скидка
			var spentBonusSum = 0; // сумма распределенных по позициям бонусов

			sum = Number(sum).round(2);

			if (frontol.userValues.get('BonusCeil') == '1') {
				var doc = frontol.currentDocument;
				var totalSum = Number(doc.totalSum - sum).round(2);
				var ceilSum = Math.ceil(totalSum) - totalSum;

				if (Math.abs(ceilSum) > 0) sum -= ceilSum;
			}

			for (var i = 0; i < registerDetailResponseDtos.length; i++) {
				// пропускаем если это процентная скидка или на эту позицию нельзя тратить бонусы
				//if (registerDetailResponseDtos[i].UsePercent || !registerDetailResponseDtos[i].CanSpendBonus) {
				if (!registerDetailResponseDtos[i].CanSpendBonus) {
					continue;
				}

				var position = {
					id: registerDetailResponseDtos[i].PositionId,
					discount: registerDetailResponseDtos[i].Discount
				};

				position.spentBonusDiscount =
					Math.round((position.discount * 100 * sum) / balance) / 100; //пропорционально распределяем списываемые бонусы
				spentBonusSum += position.spentBonusDiscount;

				var currentIndex = positions.push(position) - 1;

				if (position.discount > maxDiscount) {
					// ищем позицию с максимально возможной скидкой
					maxDiscount = position.discount;
					maxDiscountIndex = currentIndex;
				}
			}

			var differenceSum = sum - spentBonusSum;

			if (Math.abs(differenceSum) > 0 && positions.length > 0) {
				positions[maxDiscountIndex].spentBonusDiscount += differenceSum;
			}

			for (var i = 0; i < positions.length; i++) {
				var position = positions[i];

				if (stringBonusDiscount) stringBonusDiscount += ';';

				stringBonusDiscount +=
					'' + position.id + '&' + position.spentBonusDiscount;
			}

			if (stringBonusDiscount != '') {
				frontol.currentDocument.userValues.set(
					userValue,
					stringBonusDiscount
				);
			}
		} catch (e) {
			showMessage(
				'Error of setting ' + userValue + ' value\n' + e.message,
				Icon.Error
			);
			return;
		}
	}
	//ДОБАВИТЬ СВОЙСТВА ТОВАРА ИЗ ОТВЕТА СЕРВЕРА
	function addCardBoxSpecialDetailDtos(dtos, accountTypeId) {
		var doc = frontol.currentDocument;
		var discountPositions = doc.userValues.get('DiscountPositions');
		var discountPositionArray = [];

		if (discountPositions) discountPositions = discountPositions.split(';');

		if (discountPositions.length > 0) {
			for (var j = 0; j < discountPositions.length; j++) {
				var pos = discountPositions[j];
				var discountPosition = pos.split('&');

				if (discountPosition.length > 1) {
					var positionId = Number(discountPosition[0]);
					var positionDiscount = Number(discountPosition[1]);

					discountPositionArray[positionId] = positionDiscount;
				}
			}
		}

		for (var i = 0; i < dtos.length; i++) {
			var dto = dtos[i];

			if (
				'UsePercent' in dto &&
				dto.UsePercent.toString() &&
				dto.UsePercent.toString().length > 0 &&
				dto.UsePercent == true &&
				'SpecialPrice' in dto &&
				dto.SpecialPrice.toString() &&
				dto.SpecialPrice.toString().length > 0 &&
				isNaN(dto.SpecialPrice) == false &&
				Number(dto.SpecialPrice) > 0 &&
				'SpecialPriceQuantity' in dto &&
				dto.SpecialPriceQuantity.toString() &&
				dto.SpecialPriceQuantity.toString().length > 0 &&
				isNaN(dto.SpecialPriceQuantity) == false &&
				Number(dto.SpecialPriceQuantity) > 0
			) {
				// устанавливаем параметры спеццены
				var cardBoxSpecialDetailDtos = doc.userValues.get(
					'cardBoxSpecialDetailDtos'
				);

				if (cardBoxSpecialDetailDtos.length > 0) {
					cardBoxSpecialDetailDtos += ';';
				}

				cardBoxSpecialDetailDtos +=
					dto.PositionId +
					'&' +
					dto.SpecialPrice.toString() +
					'&' +
					dto.SpecialPriceQuantity.toString();

				doc.userValues.set(
					'cardBoxSpecialDetailDtos',
					cardBoxSpecialDetailDtos
				);

				// устанавлеваем скидку если карта бонусная
				if (accountTypeId == 1) {
					// если уже есть скидка на эту позицию
					if (discountPositionArray[dto.PositionId] != undefined) {
						// если установлен флаг "Объединять скидки"
						if (
							Number(
								frontol.userValues.get('CombineDiscounts')
							) == 1
						) {
							discountPositionArray[dto.PositionId] += Number(
								dto.Discount
							);
						} else {
							// назначаем новую скидку если она больше предыдущей
							if (
								Number(discountPositionArray[dto.PositionId]) <
								Number(dto.Discount)
							) {
								discountPositionArray[dto.PositionId] = Number(
									dto.Discount
								);
							}
						}
					} else {
						discountPositionArray[dto.PositionId] = Number(
							dto.Discount
						);
					}
				}
			}
		}
		if (discountPositionArray.length > 0) {
			var stringDiscountPositions = '';

			for (var i = 0; i < discountPositionArray.length; i++) {
				if (discountPositionArray[i] != undefined) {
					if (stringDiscountPositions) stringDiscountPositions += ';';

					stringDiscountPositions +=
						i.toString() +
						'&' +
						discountPositionArray[i].toString();
				}
			}
			if (stringDiscountPositions)
				doc.userValues.set(
					'DiscountPositions',
					stringDiscountPositions
				);
		}
	}

	//ПОЛУЧИТЬ ЗНАЧЕНИЕ СУММОВОЙ СКИДКИ НА ПОЗИЦИЮ ИЗ ПОЛЬЗОВАТЕЛЬСКОЙ ПЕРЕМЕННОЙ
	/* pos - позиция
       userValue - имя пользовательской переменной*/
	function GetSumRatePositionFromUserValue(pos, userValue) {
		if (frontol.currentDocument.userValues.get(userValue) == '') return 0;

		var arrStringPosIdAndDisc = frontol.currentDocument.userValues
			.get(userValue)
			.split(';');
		var arrObjPosIdAndDisc = [];

		for (var i = 0; i < arrStringPosIdAndDisc.length; i++) {
			var obj = {};
			var arr = arrStringPosIdAndDisc[i].split('&');

			obj.PosID = Number(arr[0]);
			obj.Disc = Number(arr[1]);
			arrObjPosIdAndDisc.push(obj);
		}

		for (var i = 0; i < arrObjPosIdAndDisc.length; i++) {
			if (pos.id == arrObjPosIdAndDisc[i].PosID) {
				return arrObjPosIdAndDisc[i].Disc;
			}
		}
		return 0;
	}

	//ПРОВЕРКА ОБЯЗАТЕЛЬНЫХ ПАРАМЕТРОВ КАССЫ
	function checkRequiredCashParams() {
		if (!getLicense()) EnterGlobalParameter('License', 'лицензия');

		if (!getServerAddress())
			EnterGlobalParameter('ServerAddress', 'адрес сервера');
	}

	//КОРРЕКЦИЯ ВВОДИМОГО НОМЕРА КАРТЫ
	/* cardNumber - номер карты*/
	function CorrectCardNumber(cardNumber) {
		cardNumber = cardNumber.trim();

		if (frontol.userValues.get('RemoveCardNumberRegex') != '') {
			var removeRegex = new RegExp(
				frontol.userValues.get('RemoveCardNumberRegex'),
				'g'
			);
			cardNumber = cardNumber.replace(removeRegex, '');
		}

		var addedCardPrefix = frontol.userValues.get('AddedCardPrefix');

		if (addedCardPrefix != '') {
			cardNumber = addedCardPrefix + cardNumber;
		}
		return cardNumber;
	}
	// ЗАПИСАТЬ ФУТЕР
	// doc - текущий документа
	// cardCode - номер карты
	// footerData - бинарные данные
	function saveFooter(doc, cardCode, footerData, footerNumber) {
		if (footerNumber === undefined) {
			footerNumber = '';
		} else {
			footerNumber = '_' + footerNumber;
		}

		var footerImgName = cardCode + footerNumber + '.bmp';
		var fsoFooter = new ActiveXObject('Scripting.FileSystemObject');

		try {
			var pathFooterFolder =
				RX_LOYALTY_DIRECTORY_FRONTOL + '\\img\\footer';

			createFullPath(fsoFooter, pathFooterFolder);

			var pathFooterFile = pathFooterFolder + '\\' + footerImgName;

			if (fsoFooter.FileExists(pathFooterFile) == true)
				fsoFooter.DeleteFile(pathFooterFile);

			var stream = new ActiveXObject('ADODB.Stream');

			stream.Type = 2;
			stream.Charset = 'ISO-8859-1';
			stream.Open();
			stream.WriteText(base64_decode(footerData));
			stream.Flush();
			stream.Position = 0;
			stream.SaveToFile(pathFooterFile);
			stream.Close();

			var footerImgNames = doc.userValues.get('FooterImgNames').trim();

			if (footerImgNames) footerImgNames += ';';

			footerImgNames += footerImgName;
			doc.userValues.set('FooterImgNames', footerImgNames);
		} catch (e) {
			showMessage(
				'Не удалось сохранить данные для печати на чеке!\n' +
					e.name +
					'\n' +
					e.message,
				Icon.Error
			);
		}
		doc.userValues.remove('NeedGetFooter');
	}
	//ПОЛУЧИТЬ ФУТЕР
	/* doc - документ*/
	function GetFooter(doc) {
		if (doc.userValues.get('NeedGetFooter') != '1') return;

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) showError(LICENSE_NOT_SET_MESSAGE);

		var result = {
			success: false,
			message: '',
			data: ''
		};

		var cardCode = doc.userValues.get('FirstCardNumber');

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGUID: license,
			CardCode: cardCode
		});

		result = sendHttpRequest(
			processingServerAddress + '/BonusWebApi/api/processing/GetFooter',
			'POST',
			stringToSend,
			'footer_get'
		);

		if (result.success) {
			var fsoFooter = new ActiveXObject('Scripting.FileSystemObject');

			try {
				var pathFooterFolder =
					RX_LOYALTY_DIRECTORY_FRONTOL + '\\img\\footer';
				createFullPath(fsoFooter, pathFooterFolder);

				var pathFooterFile =
					pathFooterFolder + '\\_' + cardCode + '.bmp';

				if (fsoFooter.FileExists(pathFooterFile) == true)
					fsoFooter.DeleteFile(pathFooterFile);

				var stream = new ActiveXObject('ADODB.Stream');

				stream.Open();
				stream.Type = 1;
				stream.Write(result.data.ResponseBody);
				stream.Position = 0;
				stream.SaveToFile(pathFooterFile);
				stream.Close();

				doc.userValues.set('FooterImgName', cardCode + '.bmp');
			} catch (e) {
				//_SM("Не удалось сохранить данные для печати на чеке!\n" + e.name + "\n" + e.message, Icon.Error);
			}
		} else {
			showMessage(result.message, Icon.Error);
			return;
		}
		doc.userValues.remove('NeedGetFooter');
	}

	//проверяем префикс карты
	function checkPrefixCard(cardNumber) {
		var result = {
			success: true,
			message: ''
		};

		if (frontol.userValues.get('CardPrefix') != '') {
			var checkPrefix = '';

			for (
				var i = 1;
				i <= frontol.userValues.get('CardPrefix').length;
				i++
			) {
				checkPrefix += cardNumber.charAt(i - 1);
			}

			if (
				frontol.userValues.get('CardPrefix') != checkPrefix.toString()
			) {
				//_SE("Неверный формат карты!");
				result.success = false;
				result.message = 'Неверный формат карты!';
				return result;
			}
		}
		return result;
	}

	//проверяем диапазон карты
	function checkRangeCard(cardNumber) {
		var result = {
			success: true,
			message: ''
		};

		//проверяем начало диапазона
		if (frontol.userValues.get('CardRangeStart') != '') {
			//!attn
			//сработает ли символьное сравнение для всех случаев
			if (cardNumber < frontol.userValues.get('CardRangeStart')) {
				//_SE("Неверный формат карты!");
				result.success = false;
				result.message = 'Неверный формат карты!';
				return result;
			}
		}

		//проверяем конец диапазона
		if (frontol.userValues.get('CardRangeEnd') != '') {
			//!attn
			//сработает ли символьное сравнение для всех случаев
			if (frontol.userValues.get('CardRangeEnd') < cardNumber) {
				//_SE("Неверный формат карты!");
				result.success = false;
				result.message = 'Неверный формат карты!';
				return result;
			}
		}
		return result;
	}
}
//==========================================================================================================================================================================================
function inputReceiptDocumentInformation(doc) {
	var MAX_COUNT = 3;

	var receiptDocument = {
		number: '',
		date: ''
	};

	var count = 0;
	// ввод номера приходного документа
	while (!receiptDocument.number && count < MAX_COUNT) {
		receiptDocument.number = frontol.actions.inputString(
			'Введите номер приходного документа',
			''
		);

		if (typeof receiptDocument.number === 'string') {
			receiptDocument.number = receiptDocument.number.trim();
		}

		if (!receiptDocument.number) {
			showMessage('Введено пустное значение!', Icon.Warning);
			count++;
		}
	}

	if (!receiptDocument.number) {
		showError(
			'Не введен номер приходного документа!' +
				'\nВвод документа "' +
				doc.type.name +
				'" отменен!'
		);
	}

	count = 0;
	// ввод даты приходного документа
	while (!checkDate(receiptDocument.date) && count < MAX_COUNT) {
		receiptDocument.date = frontol.actions.inputString(
			'Введите дату приходного документа\nв формате ДД.ММ.ГГГГ',
			receiptDocument.date ? receiptDocument.date : ''
		);

		if (!checkDate(receiptDocument.date)) {
			showMessage(
				'Введено пустное значение\nлибо дата указана некорректно!',
				Icon.Warning
			);
			count++;
		}
	}

	if (!checkDate(receiptDocument.date)) {
		showError(
			'Не введена дата приходного документа\nлибо она указана некорректно!' +
				'\nВвод документа "' +
				doc.type.name +
				'" отменен!'
		);
	}

	if (
		isReceiptDocument(doc) &&
		'number' in receiptDocument &&
		receiptDocument.number &&
		'date' in receiptDocument &&
		receiptDocument.date
	) {
		doc.userValues.set('receiptNumber', receiptDocument.number);
		doc.userValues.set('receiptDate', receiptDocument.date);
	}
}

function manualAddShelfLifeDiscount() {
	if (shelfLifeDiscounts == null) {
		showError('Скидки по сроку годности отключены!');
	}
	shelfLifeDiscounts.manualAddDiscount();
}

function shelfLifeDiscount(pos) {
	return shelfLifeDiscounts.getDiscount(pos.ware.code, pos.id);
}

function copyShelfLifeDiscountsFile() {
	if (!isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) return;

	var path = frontol.userValues
		.get(SHELF_LIFE_DISCOUNTS_PATH_VALUE_NAME)
		.trim();

	if (!path) return;

	var matchs = path.match(FTP_REGEXP);

	if (!matchs) return;

	var ftpUser = matchs[1].trim();
	var ftpPassword = matchs[2].trim();
	var ftpServer = matchs[3].trim();
	var ftpFolder = matchs[4].trim();

	var flagWindowStyleHidden = 0;
	var flagWindowStyleNormalWithFocus = 1;

	var shell, fso, resultCode, command;

	try {
		shell = new ActiveXObject('WScript.Shell');
	} catch (e) {
		showMessage(
			'Ошибка создания объекта WScript.Shell!' +
				CR_MESSAGE +
				e.name +
				': ' +
				e.message,
			Icon.Error
		);
		return false;
	}

	command =
		'"curl.exe" --output ' +
		SHELF_LIFE_DISCOUNTS_FILE +
		(isDebugMode() ? ' -v' : '') +
		' --user ' +
		ftpUser +
		':' +
		ftpPassword +
		' ftp://' +
		ftpServer +
		'/' +
		ftpFolder +
		'/' +
		SHELF_LIFE_DISCOUNTS_FILE;

	try {
		fso = new ActiveXObject('Scripting.FileSystemObject');
	} catch (e) {
		showMessage(
			'Ошибка создания объекта Scripting.FileSystemObject!' +
				CR_MESSAGE +
				e.name +
				': ' +
				e.message,
			Icon.Error
		);
		return false;
	}

	try {
		createFullPath(fso, RX_LOYALTY_DIRECTORY);
	} catch (e) {
		showMessage(
			'Ошибка созадния каталога ' +
				RX_LOYALTY_DIRECTORY +
				'!' +
				CR_MESSAGE +
				e.name +
				': ' +
				e.message,
			Icon.Error
		);
		return false;
	}

	if (isDebugMode()) {
		try {
			createFullPath(fso, RX_LOYALTY_DIRECTORY_FRONTOL_DEV);
		} catch (e) {
			showMessage(
				'Ошибка созадния каталога ' +
					RX_LOYALTY_DIRECTORY_FRONTOL_DEV +
					'!' +
					CR_MESSAGE +
					e.name +
					': ' +
					e.message,
				Icon.Error
			);
			return false;
		}
	}

	try {
		shell.CurrentDirectory = RX_LOYALTY_DIRECTORY;
	} catch (e) {
		showMessage(
			'Ошибка присвоения свойству CurrentDirectory объекта WScript.Shell значения ' +
				RX_LOYALTY_DIRECTORY +
				'!' +
				CR_MESSAGE +
				e.name +
				': ' +
				e.message,
			Icon.Error
		);
		return false;
	}

	try {
		command = 'cmd.exe /S /C "' + command;

		if (isDebugMode()) {
			command +=
				' 2> ' +
				RX_LOYALTY_DIRECTORY_FRONTOL_DEV +
				'\\ftp_' +
				getISODateTimeToString() +
				'.log"';
		}

		resultCode = shell.run(
			command,
			isDebugMode()
				? flagWindowStyleNormalWithFocus
				: flagWindowStyleHidden,
			true
		);

		if (resultCode) {
			showMessage(
				'Ошибка загрузки файла ' +
					SHELF_LIFE_DISCOUNTS_FILE +
					' c ftp-сервера ' +
					ftpServer +
					CR_MESSAGE +
					'Код ошибки ' +
					resultCode,
				Icon.Error
			);
		}
	} catch (e) {
		showMessage(
			'Ошибка выполнения метода run объекта WScript.Shell!' +
				CR_MESSAGE +
				e.name +
				': ' +
				e.message,
			Icon.Error
		);
		return false;
	}
}

function RxShelfLifeDiscounts(doc) {
	var positions = doc.position;
	var SHELF_LIFE_DISCOUNTS = 'ShelfLifeDiscounts';
	var withoutWareId = false;

	var lastAddedWare = {
		code: 0,
		mark: '',
		prevQuantity: 0,
		nextQuantity: 0,
		positionId: -1,
		price: 0.0,
		discount: 0,
		discountCode: '',
		type: 0,
		hasAlcoStamp: 0,
		fracSale: 0
	};

	this.clearLastAddedWare = function clearLastAddedWare() {
		lastAddedWare.code = 0;
		lastAddedWare.mark = '';
		lastAddedWare.prevQuantity = 0;
		lastAddedWare.nextQuantity = 0;
		lastAddedWare.positionId = -1;
		lastAddedWare.price = 0.0;
		lastAddedWare.discount = 0;
		lastAddedWare.discountCode = '';
		lastAddedWare.type = 0;
		lastAddedWare.hasAlcoStamp = 0;
		lastAddedWare.fracSale = 0;
	};
	// возвращает размер скидки для товара warCode в позиции id
	this.getDiscount = function getDiscount(wareCode, positionId) {
		var strShelfLifeDiscounts = doc.userValues.get(SHELF_LIFE_DISCOUNTS);

		if (strShelfLifeDiscounts) {
			var arrShelfLifeDiscounts = strShelfLifeDiscounts.split(';');

			if (arrShelfLifeDiscounts.length >= 1) {
				for (var i = 0; i < arrShelfLifeDiscounts.length; i++) {
					var strShelfLifeDiscount = arrShelfLifeDiscounts[i];

					if (strShelfLifeDiscount) {
						var arrShelfLifeDiscount =
							strShelfLifeDiscount.split('&');

						if (arrShelfLifeDiscount.length >= 4) {
							var position = {
								discountCode: arrShelfLifeDiscount[0],
								wareCode: arrShelfLifeDiscount[1],
								discount: arrShelfLifeDiscount[2],
								id: arrShelfLifeDiscount[3]
							};
							if (
								position.wareCode == wareCode &&
								position.id == positionId
							) {
								return position.discount;
							}
						}
					}
				}
			}
		}
		return 0;
	};
	// возвращает размер скидки товара с артикулом wareMark по коду discountCode
	this.getWareDiscountByCode = function getWareDiscountByCode(
		wareId,
		discountCode
	) {
		return getBarcodeDiscount(wareId, discountCode);
	};

	var getBarcodeDiscount = function getBarcodeDiscount(wareId, discountCode) {
		// получим все скидки для штрих-кода
		var discounts = getDicountsForCode(discountCode);

		if (discounts.length <= 0) return 0;

		//doc.position.index = doc.indexCurrentPosition;
		//var ware = doc.position.ware;

		for (var j = 0; j < discounts.length; j++) {
			if (
				discounts[j].barcode == discountCode &&
				discounts[j].wareId == wareId
			) {
				return discounts[j].discount;
			}
		}
		return 0;
	};

	var getDicountsForCode = function getDicountsForCode(cardCode) {
		var barcodeDiscounts = getAllBarcodeDiscounts();
		var result = [];

		for (var i = 0; i < barcodeDiscounts.length; i++) {
			if (barcodeDiscounts[i].barcode == cardCode.toString()) {
				result.push(barcodeDiscounts[i]);
			}
		}
		return result;
	};

	var getAllBarcodeDiscounts = function getAllBarcodeDiscounts() {
		var path = frontol.userValues
			.get(SHELF_LIFE_DISCOUNTS_PATH_VALUE_NAME)
			.trim();

		if (path) {
			var matchs = path.match(FTP_REGEXP); // проверка: файл на ftp?

			if (matchs) {
				// файл на ftp, используем копию файла из локального каталога RX
				path = RX_LOYALTY_DIRECTORY + '\\' + SHELF_LIFE_DISCOUNTS_FILE;
			} else {
				// файл НЕ на ftp, используем путь, полученный из пользовательской переменной
				path += '\\' + SHELF_LIFE_DISCOUNTS_FILE;
			}
		} else {
			// переменная пуста или не существует, используем копию файла из локального каталога RX
			path = RX_LOYALTY_DIRECTORY + '\\' + SHELF_LIFE_DISCOUNTS_FILE;
		}

		var barcodeDiscounts = [];
		var lines = readLinesFromFile(path);

		for (var i = 0; i < lines.length; i++) {
			var line = lines[i].trim();
			var arr = line.split(';');

			if (arr.length < 2) {
				continue;
			}

			if (arr.length < 3) withoutWareId = true;

			var obj = {
				barcode: arr[0],
				discount: Number(arr[1].replace(',', '.')),
				wareId: withoutWareId ? '' : arr[2].toString()
			};
			barcodeDiscounts.push(obj);
		}

		return barcodeDiscounts;
	};

	var readLinesFromFile = function (filePath) {
		var lines = [],
			read;
		var fso = new ActiveXObject('Scripting.FileSystemObject');

		if (!fso.FileExists(filePath)) {
			showMessage('Файл ' + filePath + ' не существует!', Icon.Error);
			return lines;
		}

		try {
			read = fso.OpenTextFile(filePath, 1);

			while (!read.AtEndOfStream) {
				lines.push(read.ReadLine());
			}
		} catch (e) {
			showMessage(
				'Не удалось открыть файл ' +
					filePath +
					'!' +
					'\n' +
					e.name +
					': ' +
					e.message,
				Icon.Error
			);
		} finally {
			try {
				read.Close();
			} catch (e) {}
		}
		return lines;
	};

	this.manualAddDiscount = function manualAddDiscount() {
		if (doc.type.operation !== 0) {
			showError(
				'Скидку по сроку годности можно добавлять только в документ-продажа.'
			);
		}
		if (lastAddedWare.type !== 0) {
			showError(
				'Скидка по сроку годности не распространяется на алкогольную и табачную продукцию.'
			);
		}
		if (lastAddedWare.code == 0) {
			showError(
				'Перед вводом скидки по сроку годности должен быть добавлен товар.\n' +
					'Добавьте товар, затем отсканируйте штрих-код скидки.'
			);
		}

		var quantity = lastAddedWare.nextQuantity - lastAddedWare.prevQuantity;

		if (
			lastAddedWare.fracSale == 0 &&
			(quantity > 1 || (quantity == 0 && lastAddedWare.prevQuantity > 1))
		) {
			showError(
				'Применение скидки по сроку годности возможно только на одну единицу товара!'
			);
		}

		var discountCode = frontol.actions.inputString(
			'Отсканируйте штрих-код скидки по сроку годности',
			''
		);

		if (!discountCode) {
			showError('Штрих-код скидки по сроку годности не введён!');
		}

		lastAddedWare.discountCode = discountCode;

		if (withoutWareId) {
			lastAddedWare.discount = this.getWareDiscountByCode(
				'',
				lastAddedWare.discountCode
			); // without ware mark
		} else {
			lastAddedWare.discount = this.getWareDiscountByCode(
				isCodeWareId() ? lastAddedWare.code : lastAddedWare.mark,
				lastAddedWare.discountCode
			);
		}

		if (lastAddedWare.discount > 0) {
			var foundPositionId = getWareWithDiscountPositionId(
				lastAddedWare.code,
				lastAddedWare.discountCode
			);

			if (foundPositionId > -1) {
				if (quantity > 0) {
					moveWareBetweenPositions(
						lastAddedWare.code,
						quantity,
						lastAddedWare.positionId,
						foundPositionId
					);
				} else {
					this.addLastAddedWareDiscount();
				}
			} else {
				if (quantity == 0) {
					// кол-во товара в позиции 1, просто добавляем для неё скидку
					this.addLastAddedWareDiscount();
				} else {
					// добавляем новую позицию
					//var discountedPrice = lastAddedWare.price * (100 - lastAddedWare.discount) / 100;
					doc.addPosition(
						'Code',
						lastAddedWare.code,
						null,
						quantity,
						null,
						false
					);
					//doc.addPosition("Code", lastAddedWare.code, discountedPrice, quantity, null, false);

					if (frontol.userValues.get('SecondMonitor') == '1') {
						if (rxF2SM) rxF2SM.updateCheque(doc);
					}

					var lastAddedPositionId = getLastAddedWarePostionId(
						lastAddedWare.code,
						lastAddedWare.positionId
					); // id последней добавленной позиции

					var prevPositionId = lastAddedWare.positionId; // сохраняем номер позиции

					if (lastAddedPositionId > -1) {
						lastAddedWare.positionId = lastAddedPositionId;
						this.addLastAddedWareDiscount();
					}

					foundPositionId = this.getPositionIndexById(prevPositionId); // ищем индекс позици по id

					if (foundPositionId > -1) {
						positions.index = foundPositionId;
						positions.setQuantity(lastAddedWare.prevQuantity); // меняем кол-во на предыдущее
					}
				}
			}

			doc.recalculateAllDiscounts();
			this.clearLastAddedWare();
		} else {
			if (isCodeWareId()) {
				showError(
					'На товар с кодом ' +
						lastAddedWare.code +
						' нет скидки по сроку годности с кодом ' +
						lastAddedWare.discountCode +
						'!'
				);
			} else {
				showError(
					'На товар с артикулом ' +
						lastAddedWare.mark +
						' нет скидки по сроку годности с кодом ' +
						lastAddedWare.discountCode +
						'!'
				);
			}
		}
	};
	// добавляет скидку по сроку годности для позиции с id positionId и товара wareCode
	this.addLastAddedWareDiscount = function addLastAddedWareDiscount() {
		if (
			lastAddedWare.code != 0 &&
			lastAddedWare.positionId > -1 &&
			lastAddedWare.discount > 0 &&
			lastAddedWare.discountCode != ''
		) {
			var index = this.getPositionIndexById(lastAddedWare.positionId);
			positions.index = index;
			positions.setSpecialPrice(
				(lastAddedWare.price * (100 - lastAddedWare.discount)) / 100,
				0
			);
			addDiscountToUserValues();
			return true;
		}
		return false;
	};
	// добавляет скидку для позиции в пользовательскую переменную текущего документа
	function addDiscountToUserValues() {
		var strLastAddedWareDiscountPosition =
			lastAddedWare.discountCode +
			'&' +
			lastAddedWare.code +
			'&' +
			lastAddedWare.discount +
			'&' +
			lastAddedWare.positionId;
		var strShelfLifeDiscounts = doc.userValues.get(SHELF_LIFE_DISCOUNTS);

		if (strShelfLifeDiscounts) {
			// в переменной что-то есть

			var arrShelfLifeDiscounts = strShelfLifeDiscounts.split(';');

			var newStrShelfLifeDiscounts = '';

			if (arrShelfLifeDiscounts.length >= 1) {
				var foundLastAddedWarePosition = false;
				for (var i = 0; i < arrShelfLifeDiscounts.length; i++) {
					var strShelfLifeDiscount = arrShelfLifeDiscounts[i];

					if (strShelfLifeDiscount) {
						var arrShelfLifeDiscount =
							strShelfLifeDiscount.split('&');

						if (arrShelfLifeDiscount.length >= 4) {
							var position = {
								discountCode: arrShelfLifeDiscount[0],
								wareCode: arrShelfLifeDiscount[1],
								discount: arrShelfLifeDiscount[2],
								id: arrShelfLifeDiscount[3]
							};

							if (position.id == lastAddedWare.positionId) {
								// если такая позиция уже есть - меняем её на новое значение

								if (i > 0) {
									newStrShelfLifeDiscounts +=
										';' + strLastAddedWareDiscountPosition;
								} else {
									newStrShelfLifeDiscounts +=
										strLastAddedWareDiscountPosition;
								}
								foundLastAddedWarePosition = true;
							} else {
								if (i > 0) {
									newStrShelfLifeDiscounts +=
										';' + strShelfLifeDiscount;
								} else {
									newStrShelfLifeDiscounts +=
										strShelfLifeDiscount;
								}
							}
						}
					}
				}
				if (!foundLastAddedWarePosition) {
					if (i > 0) {
						newStrShelfLifeDiscounts +=
							';' + strLastAddedWareDiscountPosition;
					} else {
						newStrShelfLifeDiscounts +=
							strLastAddedWareDiscountPosition;
					}
				}
				doc.userValues.set(
					SHELF_LIFE_DISCOUNTS,
					newStrShelfLifeDiscounts
				);
				return true;
			}
		} else {
			// переменная пуста, просто добавляем новое значение
			doc.userValues.set(
				SHELF_LIFE_DISCOUNTS,
				strLastAddedWareDiscountPosition
			);
			return true;
		}
		return false;
	}
	// возвращает код скидки по сроку годности позиции positionId с товаром wareCode
	this.getDiscountCode = function getDiscountCode(wareCode, positionId) {
		var strShelfLifeDiscounts = doc.userValues.get(SHELF_LIFE_DISCOUNTS);

		if (strShelfLifeDiscounts) {
			var arrShelfLifeDiscounts = strShelfLifeDiscounts.split(';');

			if (arrShelfLifeDiscounts.length >= 1) {
				for (var i = 0; i < arrShelfLifeDiscounts.length; i++) {
					var strShelfLifeDiscount = arrShelfLifeDiscounts[i];

					if (strShelfLifeDiscount) {
						var arrShelfLifeDiscount =
							strShelfLifeDiscount.split('&');

						if (arrShelfLifeDiscount.length >= 4) {
							var position = {
								discountCode: arrShelfLifeDiscount[0],
								wareCode: arrShelfLifeDiscount[1],
								discount: arrShelfLifeDiscount[2],
								id: arrShelfLifeDiscount[3]
							};
							if (
								position.wareCode == wareCode &&
								position.id == positionId
							) {
								return position.discountCode;
							}
						}
					}
				}
			}
		}
		return '';
	};
	// возвращает id добавленной позиции товара wareCode
	this.getLastAddedWarePostionId = function getLastAddedWarePostionId(
		wareCode,
		existsPositionId
	) {
		for (
			positions.index = 1;
			positions.index <= positions.count;
			positions.index++
		) {
			if (positions.storno == 1) {
				continue;
			}
			var discountCode = getDiscountCode(wareCode, positions.id);
			if (
				positions.ware.code == wareCode &&
				discountCode == '' &&
				existsPositionId != positions.id
			) {
				return positions.id;
			}
		}
		return -1;
	};
	// возвращает id позиции товара wareCode без скидки по сроку годности
	this.getWareWithoutDiscountPostionId =
		function getWareWithoutDiscountPostionId(wareCode) {
			for (
				positions.index = 1;
				positions.index <= positions.count;
				positions.index++
			) {
				if (positions.storno == 1) {
					continue;
				}
				var discountCode = getDiscountCode(wareCode, positions.id);
				if (positions.ware.code == wareCode && discountCode == '') {
					return positions.id;
				}
			}
			return -1;
		};
	// возвращает id позиции по коду товара wareCode и коду скидки discountCode
	this.getWareWithDiscountPositionId = function getWareWithDiscountPositionId(
		wareCode,
		discountCode
	) {
		var strShelfLifeDiscounts = doc.userValues.get(SHELF_LIFE_DISCOUNTS);

		if (strShelfLifeDiscounts) {
			var arrShelfLifeDiscounts = strShelfLifeDiscounts.split(';');

			if (arrShelfLifeDiscounts.length >= 1) {
				for (var i = 0; i < arrShelfLifeDiscounts.length; i++) {
					var strShelfLifeDiscount = arrShelfLifeDiscounts[i];

					if (strShelfLifeDiscount) {
						var arrShelfLifeDiscount =
							strShelfLifeDiscount.split('&');

						if (arrShelfLifeDiscount.length >= 4) {
							var position = {
								discountCode: arrShelfLifeDiscount[0],
								wareCode: arrShelfLifeDiscount[1],
								discount: arrShelfLifeDiscount[2],
								id: arrShelfLifeDiscount[3]
							};

							if (
								position.wareCode == wareCode &&
								position.discountCode == discountCode
							) {
								return position.id;
							}
						}
					}
				}
			}
		}
		return -1;
	};
	// добавляет товар wareCode в кол-ве quantity в позицию c positionId
	this.addWareToPosition = function addWareToPosition(
		wareCode,
		quantity,
		positionId
	) {
		if (doc.type.operation === 0) {
			// продажа

			var index = this.getPositionIndexById(positionId);

			if (index > -1) {
				if (positions.ware.code == wareCode) {
					positions.index = index;
					var prevQuantity = positions.quantity;
					var nextQuantity = prevQuantity + quantity;
					positions.setQuantity(nextQuantity);

					lastAddedWare.code = wareCode;
					lastAddedWare.positionId = positionId;
					lastAddedWare.prevQuantity = prevQuantity;
					lastAddedWare.nextQuantity = nextQuantity;
				}
			}
		}
	};
	// переносит товар wareCode в кол-ве quantity из позиции с id fromPositionId в позицию с id toPositionId
	this.moveWareBetweenPositions = function moveWareBetweenPositions(
		wareCode,
		quantity,
		fromPositionId,
		toPositionId
	) {
		var fromPosition = {
			index: getPositionIndexById(fromPositionId),
			wareCode: 0,
			quantity: 0
		};
		var toPosition = {
			index: getPositionIndexById(toPositionId),
			wareCode: 0,
			quantity: 0
		};

		if (fromPosition.index > -1 && toPosition.index > -1) {
			positions.index = fromPosition.index;
			fromPosition.wareCode = positions.ware.code;
			fromPosition.quantity = positions.quantity;

			positions.index = toPosition.index;
			toPosition.wareCode = positions.ware.code;
			toPosition.quantity = positions.quantity;

			if (
				wareCode == fromPosition.wareCode &&
				wareCode == toPosition.wareCode
			) {
				positions.index = fromPosition.index;
				positions.setQuantity(fromPosition.quantity - quantity);

				positions.index = toPosition.index;
				positions.setQuantity(toPosition.quantity + quantity);
			}
		}
	};
	// возвращает index позиции по id
	this.getPositionIndexById = function getPositionIndexById(posId) {
		for (
			positions.index = 1;
			positions.index <= positions.count;
			positions.index++
		) {
			if (positions.storno == 1) {
				continue;
			}

			if (positions.id == posId) {
				return positions.index;
			}
		}
		return -1;
	};
	// записывает в объект последний введенный товар
	this.saveLastAddedWare = function saveLastAddedWare(pos, stage) {
		// stage = true -> before, stage = false -> after
		if (stage) {
			lastAddedWare.code = pos.ware.code;
			lastAddedWare.mark = pos.ware.mark;
			lastAddedWare.prevQuantity = pos.quantity;
			lastAddedWare.price = pos.ware.price;
			lastAddedWare.type = pos.ware.type;
			lastAddedWare.hasAlcoStamp = pos.ware.hasAlcoStamp;
			lastAddedWare.fracSale = pos.ware.fracSale;
		} else {
			lastAddedWare.nextQuantity = pos.quantity;
			lastAddedWare.positionId = pos.id;
		}
	};
}
//==========================================================================================================================================================================================

HelpFunctions: {
	// маскировка номера карты
	function hideCardNumber(cardNumber) {
		return cardNumber.replace(
			/(\d{1})(\d{6})(\d{4})(\d*)/,
			function (matchMedia, p1, p2, p3, p4) {
				return (
					p1 + p2.replace(/\d/g, '*') + p3 + p4.replace(/\d/g, '*')
				);
			}
		);
	}
	// создаёт указанный полный путь
	function createFullPath(fso, path) {
		if (!fso || !path) return false;

		var dirs = path.split('\\');
		var driveName = dirs[0];

		if (driveName.length > 2) return false;

		driveName = driveName.substr(0, 1);
		if (!fso.DriveExists(driveName)) return false;

		driveName += ':';

		var fullPath = driveName;

		for (var i = 1; i < dirs.length; i++) {
			fullPath += '\\' + dirs[i];

			if (!fso.FolderExists(fullPath)) {
				fso.CreateFolder(fullPath);
			}
			if (!fso.FolderExists(fullPath)) return false;
		}
		return true;
	}

	// string to binary
	function base64_encode(data) {
		// Encodes data with MIME base64
		//
		// +   original by: Tyler Akins (http://rumkin.com)
		// +   improved by: Bayron Guevara

		var b64 =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
		var o1,
			o2,
			o3,
			h1,
			h2,
			h3,
			h4,
			bits,
			i = 0,
			enc = '';

		do {
			// pack three octets into four hexets
			o1 = data.charCodeAt(i++);
			o2 = data.charCodeAt(i++);
			o3 = data.charCodeAt(i++);

			bits = (o1 << 16) | (o2 << 8) | o3;

			h1 = (bits >> 18) & 0x3f;
			h2 = (bits >> 12) & 0x3f;
			h3 = (bits >> 6) & 0x3f;
			h4 = bits & 0x3f;

			// use hexets to index into b64, and append result to encoded string
			enc +=
				b64.charAt(h1) +
				b64.charAt(h2) +
				b64.charAt(h3) +
				b64.charAt(h4);
		} while (i < data.length);

		switch (data.length % 3) {
			case 1:
				enc = enc.slice(0, -2) + '==';
				break;
			case 2:
				enc = enc.slice(0, -1) + '=';
				break;
		}
		return enc;
	}

	function base64_decode(data) {
		// Decodes data encoded with MIME base64
		//
		// +   original by: Tyler Akins (http://rumkin.com)

		var b64 =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
		var o1,
			o2,
			o3,
			h1,
			h2,
			h3,
			h4,
			bits,
			i = 0,
			enc = '';

		do {
			// unpack four hexets into three octets using index points in b64
			h1 = b64.indexOf(data.charAt(i++));
			h2 = b64.indexOf(data.charAt(i++));
			h3 = b64.indexOf(data.charAt(i++));
			h4 = b64.indexOf(data.charAt(i++));

			bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;

			o1 = (bits >> 16) & 0xff;
			o2 = (bits >> 8) & 0xff;
			o3 = bits & 0xff;

			if (h3 == 64) enc += String.fromCharCode(o1);
			else if (h4 == 64) enc += String.fromCharCode(o1, o2);
			else enc += String.fromCharCode(o1, o2, o3);
		} while (i < data.length);
		return enc;
	}

	function checkDate(date) {
		if (!date) return false;

		if (date.search(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/) === -1) return false;

		date = date.split('.');

		if (Number(date[0]) > 31) return false;
		if (Number(date[1]) > 12) return false;
		if (Number(date[2]) < 2020) return false;

		return true;
	}

	// get ISO DateTime to string
	function getISODateTimeToString(timeSeparator, dateTimeSeparator) {
		if (!timeSeparator) timeSeparator = '-';

		if (!dateTimeSeparator) dateTimeSeparator = 'T';

		var dateTime = new Date();
		var dateTimeYear = dateTime.getFullYear();
		var dateTimeMonth =
			dateTime.getMonth() + 1 <= 9
				? '0' + (dateTime.getMonth() + 1).toString()
				: (dateTime.getMonth() + 1).toString();
		var dateTimeDate =
			dateTime.getDate() <= 9
				? '0' + dateTime.getDate().toString()
				: dateTime.getDate().toString();
		var dateTimeHours =
			dateTime.getHours() <= 9
				? '0' + dateTime.getHours().toString()
				: dateTime.getHours().toString();
		var dateTimeMinutes =
			dateTime.getMinutes() <= 9
				? '0' + dateTime.getMinutes().toString()
				: dateTime.getMinutes().toString();
		var dateTimeSeconds =
			dateTime.getSeconds() <= 9
				? '0' + dateTime.getSeconds().toString()
				: dateTime.getSeconds().toString();

		return (
			dateTimeYear +
			'-' +
			dateTimeMonth +
			'-' +
			dateTimeDate +
			dateTimeSeparator +
			dateTimeHours +
			timeSeparator +
			dateTimeMinutes +
			timeSeparator +
			dateTimeSeconds
		);
	}
	//вспомогательная функция - получение суммы остатка для платежей
	function GetSumForPayment() {
		var p = 0;
		var doc = frontol.currentDocument;

		if (doc.payment.count > 0) {
			for (
				doc.payment.index = 1;
				doc.payment.index <= doc.payment.count;
				doc.payment.index++
			) {
				p += doc.payment.sumInBaseCurrency;
			}
		}
		return doc.totalSum - p;
	}

	//вспомогательная функция - получение суммы остатка для платежей по позициям
	function GetSumForPaymentFromPositions() {
		var sumDocument = 0;
		var doc = frontol.currentDocument;

		for (
			doc.position.index = 1;
			doc.position.index <= doc.position.count;
			doc.position.index++
		) {
			if (doc.position.storno == 0) {
				sumDocument +=
					doc.position.quantity * doc.position.priceWithDiscs;
			}
		}

		var p = 0;

		if (doc.payment.count > 0) {
			for (
				doc.payment.index = 1;
				doc.payment.index <= doc.payment.count;
				doc.payment.index++
			) {
				p += doc.payment.sumInBaseCurrency;
			}
		}
		return sumDocument - p;
	}

	//вспомогательная функция проверки принадлежности элемента массиву
	function IsInArray(value, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == value) return true;
		}
		return false;
	}

	function sendKeys(keys) {
		var wsShell = new ActiveXObject('WScript.Shell');
		wsShell.SendKeys(keys);
	}

	//вспомогательная функция - дополнить строку для печати движений по картам
	function AddPrintString(st, addedValue) {
		if (st != '') {
			st += '&&';
		}
		st += addedValue;
		return st;
	}

	function isEmptyValue(value) {
		return value === '' || value === null || value === undefined;
	}

	function getUserParam(paramName, defaultValue) {
		var paramValue = frontol.userValues.get(paramName);
		if (!isEmptyValue(paramValue)) {
			return paramValue;
		}
		return defaultValue;
	}
}
//==========================================================================================================================================================================================

Rates: {
	function rxDefaultRate(pos) {
		if (getClientUUID() != '29A1BC43-C747-4B97-ACD7-6F74CFC88BA1') return;

		var doc = frontol.currentDocument;

		if (doc.card.count === 0) return; // нет фронтольных карт

		doc.card.index = 1; // учитываем только первую карту

		if (pos.ware.description == 'notdiscount') return 0;

		for (
			pos.ware.parent.index = 1;
			pos.ware.parent.index <= pos.ware.parent.count;
			pos.ware.parent.index++
		) {
			if (pos.ware.parent.description == 'notdiscount') return 0;
		}

		if (
			doc.card.value == '40429184838068868675' ||
			doc.card.value.substr(0, 19) == 'c110020404291848380'
		) {
			//получаем текущую дату
			var currentDate = new Date();
			var dayOfWeek = currentDate.getDay();

			if (dayOfWeek > 4) return 0; //проверяем день недели

			var hour = currentDate.getHours();

			if (hour < 9 || hour >= 17) return 0; //проверяем часы

			return 5; //если прошли все проверки, возвращаем скидку пенсионерам
		} else if (doc.card.value.substr(1, 9) == '110020555') {
			return 3; //возвращаем скидку сотрудникам
		}
	}

	function ProcessingRatePositions(pos) {
		var doc = frontol.currentDocument;

		if (doc.userValues.get('DiscountPositions') == '') return 0;

		if (doc.userValues.get('DiscountPositions').substr(0, 2) == 'df') {
			return Number(doc.userValues.get('DiscountPositions').substr(2));
		}

		var arrStringPosIdAndDisc = doc.userValues
			.get('DiscountPositions')
			.split(';');
		var arrObjPosIdAndDisc = [];

		for (var i = 0; i < arrStringPosIdAndDisc.length; i++) {
			var obj = {};
			var arr = arrStringPosIdAndDisc[i].split('&');

			obj.PosID = Number(arr[0]);
			obj.Disc = Number(arr[1]);
			arrObjPosIdAndDisc.push(obj);
		}

		for (var i = 0; i < arrObjPosIdAndDisc.length; i++) {
			if (pos.id == arrObjPosIdAndDisc[i].PosID) {
				return arrObjPosIdAndDisc[i].Disc;
			}
		}
		return;
	}

	function ProcessingDiscountRate() {
		var doc = frontol.currentDocument;

		if (isNaN(doc.userValues.get('Discount'))) {
			return;
		} else {
			return Number(doc.userValues.get('Discount'));
		}
	}

	function ProcessingBonusDiscRate(pos) {
		var doc = frontol.currentDocument;

		if (doc.userValues.get('BonusDiscount') == '') return;

		//если суммовая скидка на документ
		if (frontol.userValues.get('BonusRateOnDocument') == '1') {
			return Number(doc.userValues.get('BonusDiscount'));
		}

		var arrStringPosIdAndDisc = doc.userValues
			.get('BonusDiscount')
			.split(';');
		var arrObjPosIdAndDisc = [];

		for (var i = 0; i < arrStringPosIdAndDisc.length; i++) {
			var obj = {};
			var arr = arrStringPosIdAndDisc[i].split('&');

			obj.PosID = Number(arr[0]);
			obj.Disc = Number(arr[1]);
			arrObjPosIdAndDisc.push(obj);
		}

		for (var i = 0; i < arrObjPosIdAndDisc.length; i++) {
			if (pos.id == arrObjPosIdAndDisc[i].PosID) {
				return arrObjPosIdAndDisc[i].Disc;
			}
		}
		return;
	}

	function ProcessingBonusRatePosition(pos) {
		var doc = frontol.currentDocument;

		if (
			Number(frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)) > 0 || // если бонусы - это вид оплаты
			!(Number(frontol.userValues.get('BonusRatePositionsCode')) > 0) || // бонусы - не скидка по позициям
			doc.userValues.get('BonusDiscountPositions') == '' // бонусы не распределены по позициям
		) {
			return 0;
		}

		var arrStringPosIdAndDisc = doc.userValues
			.get('BonusDiscountPositions')
			.split(';');
		var arrObjPosIdAndDisc = [];

		for (var i = 0; i < arrStringPosIdAndDisc.length; i++) {
			var obj = {};
			var arr = arrStringPosIdAndDisc[i].split('&');

			obj.PosID = Number(arr[0]);
			obj.Disc = Number(arr[1]);
			arrObjPosIdAndDisc.push(obj);
		}

		for (var i = 0; i < arrObjPosIdAndDisc.length; i++) {
			if (pos.id == arrObjPosIdAndDisc[i].PosID) {
				return arrObjPosIdAndDisc[i].Disc;
			}
		}
		return;
	}

	function rxMarkupPosition(pos) {
		var doc = frontol.currentDocument;

		if (doc.userValues.get('CouponDiscount') == '') return 0;

		//если суммовая скидка на документ
		if (
			frontol.userValues.get('CouponRateOnDocument') == '1' &&
			doc.userValues.get('KenmartMarkup') == '1'
		) {
			if (pos.number == 1) return -1;
		}
	}

	function ProcessingCouponDiscRate(pos) {
		var doc = frontol.currentDocument;

		if (doc.userValues.get('CouponDiscount') == '') {
			return;
		}

		//если суммовая скидка на документ
		if (frontol.userValues.get('CouponRateOnDocument') == '1') {
			var couponDiscount = Number(doc.userValues.get('CouponDiscount'));

			if (doc.userValues.get('KenmartMarkup') == '1') couponDiscount -= 1;

			return couponDiscount;
		}

		var arrStringPosIdAndDisc = doc.userValues
			.get('CouponDiscount')
			.split(';');
		var arrObjPosIdAndDisc = [];

		for (var i = 0; i < arrStringPosIdAndDisc.length; i++) {
			var obj = {};
			var arr = arrStringPosIdAndDisc[i].split('&');

			obj.PosID = Number(arr[0]);
			obj.Disc = Number(arr[1]);
			arrObjPosIdAndDisc.push(obj);
		}

		for (var i = 0; i < arrObjPosIdAndDisc.length; i++) {
			if (pos.id == arrObjPosIdAndDisc[i].PosID) {
				return arrObjPosIdAndDisc[i].Disc;
			}
		}

		return;
	}

	function ProcessingPositionPrice(position) {
		var doc = frontol.currentDocument;

		if (!doc.userValues.get('PositionPrices')) return;

		var positionPrices = doc.userValues.get('PositionPrices').split(';');

		for (var i = 0; i < positionPrices.length; i++) {
			var positionPrice = positionPrices[i].split('&');

			if (positionPrice.length == 2) {
				var positionPriceObject = {};

				positionPriceObject.PosID = Number(positionPrice[0]);
				positionPriceObject.Price = Number(positionPrice[1]);

				if (position.id == positionPriceObject.PosID) {
					return position.totalSum - positionPriceObject.Price;
				}
			}
		}
	}
}
//==========================================================================================================================================================================================

ManualFunctions: {
	//MANUAL ОТПРАВКА ОТЛОЖЕННЫХ
	function ManualSendDelayed() {
		SendDelayed(false);
	}
	//=========================================================================================================================================================================
	function manualCardMultiRegister() {
		var rxLoyaltyV2 = new RxLoyaltyV2();

		rxLoyaltyV2.manualCardMultiRegister();
	}

	function manualSendCardMultiRegister() {
		var rxLoyaltyV2 = new RxLoyaltyV2();

		rxLoyaltyV2.manualSendCardMultiRegister();
	}

	function RxLoyaltyV2() {
		var NEW_LINE_MESSAGE = '\n';
		var CARDS_WERE_NOT_USED_MESSAGE =
			'Следующие номера карт, сертификатов или купонов не были использованы';
		var DOCUMENT_HAS_NO_POSITION_MESSAGE =
			'В документе нет ни одной позиции';
		var OPERATION_AVAILABLE_IN_SALE_DOCUMENT_ONLY_MESSAGE =
			'Операция доступна только в документе-продажа';
		var NO_CARDS_TO_SEND_MESSAGE =
			'В документе нет ни одной карты, сертификата или купона';

		var currentDocument = frontol.currentDocument;

		getJson2();

		// добавить значение в пользовательскую переменную документа
		var addDocumentValue = function (valueName, value, checkUnique) {
			valueName = valueName.toString().trim();
			value = value.toString().trim();

			if (typeof checkUnique == 'undefined') {
				checkUnique = false;
			}

			var documentValue = currentDocument.userValues.get(valueName);

			if (documentValue) {
				documentValue += ';';
			}

			var documentValueArray = documentValue.split(';');

			if (checkUnique) {
				for (var i = 0; i < documentValueArray.length; i++) {
					if (documentValueArray[i].trim() == value) {
						showError('Значение ' + value + ' уже было введено!');
					}
				}
			}

			documentValue += '' + value;
			currentDocument.userValues.set(valueName, documentValue);
		};
		// удалить значение из пользовательской переменной документа
		var deleteDocumentValue = function (valueName, value) {
			valueName = valueName.toString().trim();
			value = value.toString().trim();

			var documentValue = currentDocument.userValues.get(valueName);

			if (documentValue) {
				var documentValueArray = documentValue.split(';');
				var oldLength = documentValueArray.length;

				for (var i = 0; i < documentValueArray.length; i++) {
					if (documentValueArray[i].trim() == value) {
						documentValueArray.splice(i, 1);
					}
				}

				if (oldLength != documentValueArray.length) {
					currentDocument.userValues.set(
						valueName,
						documentValueArray.join(';')
					);
				}
			}
		};

		this.manualCardMultiRegister = function () {
			if (!currentDocument) {
				showError(NO_OPENED_DOCUMENTS_MESSAGE);
			}

			if (currentDocument.type.code != 1) {
				showError(OPERATION_AVAILABLE_IN_SALE_DOCUMENT_ONLY_MESSAGE);
			}

			if (currentDocument.position.count <= 0) {
				showError(DOCUMENT_HAS_NO_POSITION_MESSAGE);
			}

			var cardNumber = frontol.actions.inputString(
				INPUT_CARD_CODE_MESSAGE,
				''
			);

			if (!cardNumber) {
				showError(CARD_CODE_EMPTY_MESSAGE);
			}
			addDocumentValue('cardBoxNumbers', cardNumber, true);
		};

		var getDocumentValueAsArray = function (valueName) {
			var documentValue = currentDocument.userValues.get(valueName);

			if (!documentValue) return [];

			var documentValueArray = documentValue.split(';');

			return documentValueArray;
		};

		this.manualSendCardMultiRegister = function () {
			if (!currentDocument) showError(NO_OPENED_DOCUMENTS_MESSAGE);

			var cardBoxNumberArray = getDocumentValueAsArray('cardBoxNumbers');

			if (!cardBoxNumberArray.length) showError(NO_CARDS_TO_SEND_MESSAGE);

			if (currentDocument.type.code != 1)
				showError(OPERATION_AVAILABLE_IN_SALE_DOCUMENT_ONLY_MESSAGE);

			var processingServerAddress = getServerAddress();

			if (!processingServerAddress)
				showError(SERVER_ADDRESS_NOT_SET_MESSAGE);

			//получаем лицензию
			var license = getLicense();

			if (!license) {
				showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
				return;
			}

			//получаем токен
			var accessToken = getAccessToken();

			if (!accessToken) {
				showMessage(TOKEN_NOT_SET_MESSAGE, Icon.Error);
				return;
			}

			var result = {
				success: false,
				message: '',
				data: ''
			};

			var registerDetailDtos = GetRegisterDetailDtos(currentDocument);

			var stringToSend = JSON.stringify({
				LicenseGuid: license,
				AccessTokenGuid: accessToken,
				CardCodes: cardBoxNumberArray,
				RegisterDetailDtos: registerDetailDtos
			});

			result = sendHttpRequest(
				processingServerAddress +
					'/BonusWebApi/api/processing/multiregister',
				'POST',
				stringToSend,
				'multiregister'
			);

			if (result.success) {
				// не использованные карты
				if ('UnusedCards' in result.data && result.data.UnusedCards) {
					// удаляем неиспользуемые номера карт, чтобы по ним не делать отмену в случае отмены документа
					for (var i = 0; i < result.data.UnusedCards.length; i++) {
						var unusedCard = result.data.UnusedCards[i];

						deleteDocumentValue('cardBoxNumbers', unusedCard);
					}
					showMessage(
						CARDS_WERE_NOT_USED_MESSAGE +
							':' +
							NEW_LINE_MESSAGE +
							result.data.UnusedCards
					);
				}
				// использованные карты
				if ('UsedCards' in result.data && result.data.UsedCards) {
					var usedCards = result.data.UsedCards;

					for (var i = 0; i < usedCards.length; i++) {
						var usedCard = usedCards[i];

						if (
							'AccountId' in usedCard &&
							usedCard.AccountId.toString()
						) {
							addDocumentValue(
								'cardBoxAccountIds',
								usedCard.AccountId
							);
						}

						if (
							'AccountType' in usedCard &&
							usedCard.AccountType.toString()
						) {
							addDocumentValue(
								'cardBoxAccountTypes',
								usedCard.AccountType
							);
						}

						if (
							'Balance' in usedCard &&
							usedCard.Balance.toString()
						) {
							addDocumentValue(
								'cardBoxBalances',
								usedCard.Balance.toString()
							);
						}

						if (
							'registerDetails' in usedCard &&
							usedCard.registerDetails
						) {
							for (
								var i = 0;
								i < usedCard.registerDetails.length;
								i++
							) {
								var registerDetails =
									usedCard.registerDetails[i];

								if (
									'PositionId' in registerDetails &&
									registerDetails.PositionId.toString() &&
									'Discount' in registerDetails &&
									registerDetails.Discount.toString() &&
									'UsePercent' in registerDetails &&
									registerDetails.UsePercent &&
									'SpecialPrice' in registerDetails &&
									registerDetails.SpecialPrice.toString() &&
									'SpecialPriceQuantity' in registerDetails &&
									registerDetails.SpecialPriceQuantity.toString() &&
									'EndPrice' in registerDetails &&
									registerDetails.EndPrice.toString()
								) {
									var registerDetailsArray = [];

									registerDetailsArray.push(
										registerDetails.PositionId.toString()
									);
									registerDetailsArray.push(
										registerDetails.Discount.toString()
									);
									registerDetailsArray.push(
										registerDetails.UsePercent
									);
									registerDetailsArray.push(
										registerDetails.SpecialPrice.toString()
									);
									registerDetailsArray.push(
										registerDetails.SpecialPriceQuantity.toString()
									);
									registerDetailsArray.push(
										registerDetails.EndPrice.toString()
									);

									addDocumentValue(
										currentDocument,
										'cardBoxRegisterDetails',
										registerDetailsArray.join('&')
									);
								}
							}
						}
					}
				}

				if (
					'RegisterDetailResponseDtos' in result.data &&
					result.data.RegisterDetailResponseDtos
				) {
					var registerDetailResponseDtos =
						result.data.RegisterDetailResponseDtos;

					for (
						var i = 0;
						i < registerDetailResponseDtos.length;
						i++
					) {
						var position = registerDetailResponseDtos[i];

						if (
							'PositionId' in position &&
							position.PositionId.toString() &&
							'EndPrice' in position &&
							position.EndPrice.toString()
						) {
							addDocumentValue(
								'PositionPrices',
								position.PositionId + '&' + position.EndPrice
							);
						}
					}

					currentDocument.recalculateAllDiscounts();

					if (frontol.userValues.get('SecondMonitor') == '1') {
						if (rxF2SM)
							rxF2SM.updateCheque(frontol.currentDocument);
					}
				}
			} else {
				showMessage(result.message, Icon.Error);
				return;
			}
		};
	}
	//=========================================================================================================================================================================
	//MANUAL ВВОД КАРТЫ
	function ManualEnterProcPaymentCard() {
		//проверим, что текущий документ существует
		var doc;

		try {
			doc = frontol.currentDocument;
		} catch (e) {}

		if (doc == null) showError(NO_OPENED_DOCUMENTS_MESSAGE);

		//проверим, что документ - продажа
		if (!isSaleDocument(doc)) {
			showError(
				'Ввод процессинговой карты возможен только в документе продажи!'
			);
		}

		if (frontol.userValues.get('OnlyOneCard') == '1') {
			if (doc.userValues.get('cardBoxNumbers') != '') {
				showError(
					'В документе уже введена карта или расчитаны скидки!'
				);
			}
		}

		if (
			frontol.userValues.get('DontWorkWithStandartCards') == '1' &&
			doc.card.count > 0
		) {
			showError('В документ уже введены карты другого типа!');
		}

		//проверяем наличие остатка для оплаты
		if (GetSumForPayment() <= 0) {
			showError('Документ уже оплачен!');
		}

		for (
			doc.payment.index = 1;
			doc.payment.index <= doc.payment.count;
			doc.payment.index++
		) {
			if (
				!(
					doc.payment.type.code ==
						Number(
							frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
						) ||
					doc.payment.type.code ==
						Number(
							frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME)
						) ||
					doc.payment.type.code ==
						Number(
							frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME)
						) ||
					doc.payment.type.code ==
						Number(frontol.userValues.get(COUPON_PAYMENT_CODE_NAME))
				)
			) {
				showError('Введены непроцессинговые платежи!');
			}
		}

		var cardNumber;

		// if (rxEnterCard) {
		//     cardNumber = rxEnterCard.CardNum("Отсканируйте карту/сертификат/QR-код");
		// }
		// else {
		cardNumber = frontol.actions.inputString(INPUT_CARD_CODE_MESSAGE, '');
		// }

		if (cardNumber) cardNumber = cardNumber.trim();

		if (!cardNumber) showError(CARD_CODE_EMPTY_MESSAGE);

		if (
			getClientUUID === '29A1BC43-C747-4B97-ACD7-6F74CFC88BA1' &&
			cardNumber.length > 13
		) {
			cardNumber = cardNumber.slice(7, 17);
		}

		if (cardNumber.length >= 32) {
			// это QR-код
			cardNumber = manualScanQRCode(cardNumber);
			frontol.userValues.set('scannedQR', '1'); // был считан QR-код
		} else {
			frontol.userValues.remove('scannedQR');
		}

		cardNumber = CorrectCardNumber(cardNumber);

		//проверим, что карта вводится в документ первый раз
		if (doc.userValues.get('cardBoxNumbers') != '') {
			var cardBoxNumbers = doc.userValues.get('cardBoxNumbers');
			var cardBoxNumbersArray = [];

			cardBoxNumbersArray = cardBoxNumbers.split(';');

			for (var i = 0; i < cardBoxNumbersArray.length; i++) {
				if (cardNumber == cardBoxNumbersArray[i]) {
					showError('Карта с таким кодом уже введена!');
				}
			}
		}

		//проверяем префикс карты
		if (frontol.userValues.get('CardPrefix') != '') {
			var checkPrefix = '';

			for (
				var i = 1;
				i <= frontol.userValues.get('CardPrefix').length;
				i++
			) {
				checkPrefix += cardNumber.charAt(i - 1);
			}

			if (
				frontol.userValues.get('CardPrefix') != checkPrefix.toString()
			) {
				showError('Неверный формат карты!');
			}
		}

		//проверяем начало диапазона
		if (frontol.userValues.get('CardRangeStart') != '') {
			//!attn
			//сработает ли символьное сравнение для всех случаев
			if (cardNumber < frontol.userValues.get('CardRangeStart')) {
				showError('Неверный формат карты!');
			}
		}

		//проверяем конец диапазона
		if (frontol.userValues.get('CardRangeEnd') != '') {
			//!attn
			//сработает ли символьное сравнение для всех случаев
			if (frontol.userValues.get('CardRangeEnd') < cardNumber) {
				showError('Неверный формат карты!');
			}
		}

		// для специальных дисконтных карт выбор программы лояльности не показываем
		var specialDiscountCardPrefix = frontol.userValues.get(
			'SpecialDiscountCardPrefix'
		);
		var patternSpecialDiscountCardPrefix =
			'^' + specialDiscountCardPrefix + '[0-9]+$';

		// если карта не специальная
		if (cardNumber.search(patternSpecialDiscountCardPrefix) === -1) {
			// есть ли выбор программы лояльности
			var loyaltyPrograms = new LoyaltyPrograms();
			var listLoyaltyPrograms = loyaltyPrograms.selectionEnabled();
			var loyaltyProgram = null;

			if (listLoyaltyPrograms) {
				loyaltyProgram = frontol.actions.selectString(
					'Выберите программу лояльности',
					listLoyaltyPrograms.Names,
					listLoyaltyPrograms.Ids
				);

				if (!loyaltyProgram) {
					showError('Не выбрана программа лояльности!');
				}
			}
		}
		RegisterProcCard(cardNumber, '', loyaltyProgram);
	}

	var cardNumber = '';

	function Card0() {
		cardNumber = '0';
		ManualCalculateDiscounts();
	}

	function Card1() {
		cardNumber = '1';
		ManualCalculateDiscounts();
	}

	//MANUAL РАСЧЕТ СКИДОК
	function ManualCalculateDiscounts() {
		//проверим, что текущий документ существует
		var doc;

		try {
			doc = frontol.currentDocument;
		} catch (e) {}

		if (doc == null) showError(NO_OPENED_DOCUMENTS_MESSAGE);

		//проверим, что документ - продажа
		if (!isSaleDocument(frontol.currentDocument)) {
			showError(
				'Ввод процессинговой карты и расчет скидки возможны только в документе продажи!'
			);
		}

		if (frontol.currentDocument.userValues.get('cardBoxNumbers') != '') {
			showError('В документе уже введена карта или расчитаны скидки!');
		}

		if (
			frontol.userValues.get('DontWorkWithStandartCards') == '1' &&
			frontol.currentDocument.card.count > 0
		) {
			showError('В документ уже введены карты другого типа!');
		}

		//проверяем наличие остатка для оплаты
		if (GetSumForPayment() <= 0) showError('Документ уже оплачен!');

		for (
			frontol.currentDocument.payment.index = 1;
			frontol.currentDocument.payment.index <=
			frontol.currentDocument.payment.count;
			frontol.currentDocument.payment.index++
		) {
			if (
				!(
					frontol.currentDocument.payment.type.code ==
						Number(
							frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
						) ||
					frontol.currentDocument.payment.type.code ==
						Number(
							frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME)
						) ||
					frontol.currentDocument.payment.type.code ==
						Number(
							frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME)
						) ||
					frontol.currentDocument.payment.type.code ==
						Number(frontol.userValues.get(COUPON_PAYMENT_CODE_NAME))
				)
			) {
				showError('Введены непроцессинговые платежи!');
			}
		}

		//var cardNumber = "0";

		//проверим, что карта вводится в документ первый раз
		if (frontol.currentDocument.userValues.get('cardBoxNumbers') != '') {
			var cardBoxNumbers =
				frontol.currentDocument.userValues.get('cardBoxNumbers');
			var cardBoxNumbersArray = [];

			cardBoxNumbersArray = cardBoxNumbers.split(';');

			for (var i = 0; i < cardBoxNumbersArray.length; i++) {
				if (cardNumber == cardBoxNumbersArray[i]) {
					showError('Скидка уже была рассчитана!');
				}
			}
		}
		RegisterProcCard(cardNumber);
	}

	//MANUAL ОТМЕНА КАРТ И СКИДОК
	function ManualDeleteAllProc() {
		//проверим, что текущий документ существует
		var doc;

		try {
			doc = frontol.currentDocument;
		} catch (e) {}

		if (doc == null) showError(NO_OPENED_DOCUMENTS_MESSAGE);

		afterCancelDocument(true);
		DeleteAllProc(doc);
	}

	//MANUAL ПОЛУЧЕНИЕ ПАРАМЕТРОВ КАССЫ
	function ManualGetGlobal() {
		getCashParams(false);
	}

	//MANUAL ВЫВОД НА ЭКРАН ПАРАМЕТРОВ КАССЫ
	function ManualShowGlobal() {
		ShowCashParams();
	}

	//MANUAL ПОЛУЧЕНИЕ ИНФОРМАЦИИ О КАРТЕ
	function ManualGetCardInfo() {
		GetCardInfo();
	}

	function ShelfLifeDiscountsMenu() {
		var itemTitles = '';
		var itemCodes = '';

		this.show = function () {
			setItems();

			var itemCode = frontol.actions.selectString(
				'Меню управления ССГ',
				itemTitles,
				itemCodes
			);

			if (!itemCode) return;

			switch (itemCode) {
				case 'status':
					if (isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) {
						frontol.userValues.set(
							SHELF_LIFE_DISCOUNTS_VALUE_NAME,
							'0'
						);
					} else {
						frontol.userValues.set(
							SHELF_LIFE_DISCOUNTS_VALUE_NAME,
							'1'
						);

						if (
							frontol.currentDocument &&
							isSaleDocument(frontol.currentDocument)
						) {
							showMessage(
								'Скидки по сроку годности включены!\n' +
									'Для корректной работы документ необходимо открыть заново!'
							);
						}
					}
					break;
				case 'path':
					var shelfLifeDiscountsPath = frontol.userValues.get(
						SHELF_LIFE_DISCOUNTS_PATH_VALUE_NAME
					);
					var path = frontol.actions.inputString(
						'Введите полный путь к файлу ССГ ' +
							SHELF_LIFE_DISCOUNTS_FILE +
							'.' +
							CR_MESSAGE +
							'В случае использования FTP укажите полный путь в следующем формате:' +
							CR_MESSAGE +
							'ftp://ИМЯ_ПОЛЬЗОВАТЕЛЯ:ПАРОЛЬ@FTP_СЕРВЕР/ПУТЬ_К_ФАЙЛУ/',
						shelfLifeDiscountsPath
					);

					if (path) {
						frontol.userValues.set(
							SHELF_LIFE_DISCOUNTS_PATH_VALUE_NAME,
							path.trim()
						);

						if (
							frontol.currentDocument &&
							isSaleDocument(frontol.currentDocument)
						) {
							showMessage(
								'Путь к файлу ССГ ' +
									SHELF_LIFE_DISCOUNTS_FILE +
									' был изменён!\n' +
									'Для применения изменений документ необходимо открыть заново!'
							);
						}
						copyShelfLifeDiscountsFile();
					}

					break;
			}
		};

		var getStatus = function () {
			if (isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) return true;
			else return false;
		};

		var getStatusDescription = function () {
			var status = getStatus();

			if (status) return 'Отключить ССГ';
			else return 'Включить ССГ';
		};

		var setItems = function () {
			itemTitles =
				'Полный путь к файлу ' +
				SHELF_LIFE_DISCOUNTS_FILE +
				'\n' +
				getStatusDescription();

			itemCodes = 'path\nstatus';
		};
	}

	//MANUAL КНОПКА УПРАВЛЕНИЯ
	function ManualControlButton() {
		var licenseString = 'Лицензия';

		if (!getLicense()) licenseString += ' (!)';

		var serverAddressString = 'Адрес сервера';

		if (!getServerAddress()) serverAddressString += ' (!)';

		var statusRxLoyaltyDebugging = 'Включить отладку';

		if (isDebugMode()) statusRxLoyaltyDebugging = 'Отключить отладку';

		var statusSecondMonitor = 'Включить второй монитор';

		if (frontol.userValues.get('SecondMonitor') == '1') {
			statusSecondMonitor = 'Отключить второй монитор';
		}

		var st = frontol.actions.selectString(
			CONTROL_MENU_TITLE,
			licenseString +
				'\n' +
				serverAddressString +
				'\n' +
				'Показать параметры кассы\n' +
				'Загрузить параметры кассы\n' +
				'Отправить отложенные\n' +
				'Установить токен\n' +
				statusRxLoyaltyDebugging +
				'\n' +
				statusSecondMonitor +
				'\n' +
				'ССГ',

			'license\n' +
				'serverAddress\n' +
				'showcashparams\n' +
				'getcashparams\n' +
				'senddelay\n' +
				'accessToken\n' +
				'setRxLoyaltyDebugging\n' +
				'setSecondMonitor\n' +
				'showShelfLifeDiscountsMenu'
		);

		if (st == null || st == '') return;

		switch (st) {
			case 'license': {
				EnterGlobalParameter('License', 'лицензия');
				break;
			}
			case 'serverAddress': {
				EnterGlobalParameter('ServerAddress', 'адрес сервера');
				break;
			}
			case 'showcashparams': {
				ManualShowGlobal();
				break;
			}
			case 'getcashparams': {
				ManualGetGlobal();
				break;
			}
			case 'senddelay': {
				ManualSendDelayed();
				break;
			}
			case 'accessToken': {
				EnterGlobalParameter('AccessToken', 'токен (код доступа)');
				break;
			}
			case 'setRxLoyaltyDebugging': {
				if (isDebugMode()) {
					frontol.userValues.set('RxLoyaltyDebugging', '0');
				} else {
					frontol.userValues.set('RxLoyaltyDebugging', '1');
				}
				break;
			}
			case 'setSecondMonitor': {
				if (frontol.userValues.get('SecondMonitor') == '1') {
					frontol.userValues.set('SecondMonitor', '0');
				} else {
					frontol.userValues.set('SecondMonitor', '1');
				}
				break;
			}
			case 'showShelfLifeDiscountsMenu': {
				var shelfLifeDiscountsMenu = new ShelfLifeDiscountsMenu();

				shelfLifeDiscountsMenu.show();

				break;
			}
			default: {
				return;
			}
		}
	}
	// MANUAL АКТИВАЦИЯ КУПОНА
	function manualCouponActivation() {
		var couponNumber = frontol.actions.inputString(
			INPUT_CARD_CODE_MESSAGE,
			''
		);

		if (couponNumber) couponNumber = couponNumber.trim();

		if (!couponNumber) showError(CARD_CODE_EMPTY_MESSAGE);

		// удаляем из введенного номера купона все символы, которые не цифры
		var removeRegex = new RegExp('[^0-9]', 'g');
		couponNumber = couponNumber.replace(removeRegex, '');

		if (couponNumber.search(/^[0-9]*$/) === -1 || !couponNumber) {
			showError(
				'Ошибка ввода номера купона:\nНеобходимо указывать только цифры!'
			);
		}

		var result = {
			success: false,
			message: '',
			data: ''
		};

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) showError(LICENSE_NOT_SET_MESSAGE);

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			CardCode: couponNumber
		});

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/api/processing/activateCoupon',
			'POST',
			stringToSend,
			'coupon_activate'
		);

		if (result.success) {
			showMessage(
				'Купон активирован!\n' +
					'Статус: ' +
					result.data.CardStatus +
					'\n' +
					'Баланс: ' +
					result.data.Balance
			);
		} else {
			showError(result.message);
		}
	}
	// создание клиента по номеру телефона
	function manualClientRegistrationByPhoneNumber() {
		sendConfirmCodeToPhoneNumber();
	}
	// подтверждение номера телефона клиента
	function manualConfirmClientPhoneNumber() {
		sendConfirmCodeToClient();
	}

	// MANUAL ВЕРИФИКАЦИЯ НОМЕРА ТЕЛЕФОНА С УСТАНОВКОЙ ДАТЫ РОЖДЕНИЯ (для РЮД)
	function manualPhoneNumberVerification() {
		var cardNumber = sendConfirmCodeToClient();

		if (cardNumber) setClientBirthday(cardNumber);
	}

	// MANUAL УСТАНОВКА ДАТЫ РОЖДЕНИЯ КЛИЕНТА
	function manualSetClientBirthday() {
		setClientBirthday();
	}

	// установка даты рождения клиента
	function setClientBirthday(cardNumber) {
		if (typeof cardNumber == 'undefined') {
			cardNumber = frontol.actions.inputString(
				INPUT_CARD_CODE_MESSAGE,
				''
			);
		}

		if (!cardNumber) {
			showMessage(CARD_CODE_EMPTY_MESSAGE, Icon.Error);
			return false;
		}

		cardNumber = CorrectCardNumber(cardNumber);

		var result = {
			success: false,
			message: '',
			data: ''
		};

		result = checkPrefixCard(cardNumber);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		result = checkRangeCard(cardNumber);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		var clientBirthday = frontol.actions.inputString(
			'Введите дату рождения клиента в формате\nДДММГГГГ (только цифры):',
			''
		);

		if (!clientBirthday) {
			showMessage('Значение не введено!', Icon.Error);
			return false;
		}

		clientBirthday = clientBirthday.trim();

		if (clientBirthday.search(/^[0-9]{8}$/) === -1) {
			showMessage(
				'Ошибка ввода даты рождения:\nНеобходимо указывать только цифры\nлибо дата указана некорректно!',
				Icon.Error
			);
			return false;
		}

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) {
			showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}
		// разворачиваем введенную дату в формат ГГГГ-ММ-ДД
		clientBirthday =
			clientBirthday.slice(4, 8) +
			'-' +
			clientBirthday.slice(2, 4) +
			'-' +
			clientBirthday.slice(0, 2);

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			CardCode: cardNumber,
			Birthday: clientBirthday
		});

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/api/processing/SetClientBirthday',
			'POST',
			stringToSend,
			'set_client_birthday'
		);

		if (result.success) {
			var message = 'Дата рождения клиента установлена успешно.';

			if ('data' in result && result.data) {
				message = result.data;
				showMessage(message, Icon.Error);
				return false;
			}

			showMessage(message);
			return true;
		} else {
			showMessage(result.message, Icon.Error);
			return false;
		}
	}
	// отправка кода подтверждения на телефон для регистрации клиента
	function sendConfirmCodeToPhoneNumber() {
		var result = {
			success: false,
			message: '',
			data: ''
		};

		var phoneNumber = showInputPhoneNumberDialog();

		if (!phoneNumber) return false;

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/Mobile/SendConfirmCode?phoneMobile=' +
				phoneNumber.replace('+', '%2b'), // кодируем + для передачи в url
			'POST',
			'',
			'send_confirmcode_to_phone_number'
		);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		var confirmCode = showInputConfirmCodeDialog();

		if (!confirmCode) return false;

		if (registerClientByPhoneNumber(phoneNumber, confirmCode)) {
			return true;
		} else {
			return false;
		}
	}
	// отправка кода подтверждения на телефон
	function sendConfirmCodeToClient(cardNumber, phoneNumber) {
		if (typeof cardNumber == 'undefined') {
			cardNumber = frontol.actions.inputString(
				INPUT_CARD_CODE_MESSAGE,
				''
			);
		}

		if (!cardNumber) {
			showMessage(CARD_CODE_EMPTY_MESSAGE, Icon.Error);
			return false;
		}

		cardNumber = CorrectCardNumber(cardNumber);

		var result = {
			success: false,
			message: '',
			data: ''
		};

		result = checkPrefixCard(cardNumber);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		result = checkRangeCard(cardNumber);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		if (typeof phoneNumber == 'undefined') {
			phoneNumber = showInputPhoneNumberDialog();
		}

		if (!phoneNumber) return false;

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) {
			showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			CardCode: cardNumber,
			PhoneMobile: phoneNumber
		});

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/api/processing/SendConfirmCodeToClient',
			'POST',
			stringToSend,
			'send_confirmcode_to_client'
		);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		if (confirmClientPhone(cardNumber, phoneNumber)) {
			return cardNumber;
		} else {
			return false;
		}
	}

	// отправка кода подтверждения на телефон клиента при продаже
	function sendConfirmCodeAndSaleSms(cardNumber, phoneNumber) {
		if (typeof cardNumber == 'undefined') {
			cardNumber = frontol.actions.inputString(
				INPUT_CARD_CODE_MESSAGE,
				''
			);
		}

		if (!cardNumber) {
			showMessage(CARD_CODE_EMPTY_MESSAGE, Icon.Error);
			return false;
		}

		cardNumber = CorrectCardNumber(cardNumber);

		var result = {
			success: false,
			message: '',
			data: ''
		};

		result = checkPrefixCard(cardNumber);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		result = checkRangeCard(cardNumber);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		if (typeof phoneNumber == 'undefined') {
			phoneNumber = showInputPhoneNumberDialog();
		}

		if (!phoneNumber) return false;

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) {
			showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			CardCode: cardNumber,
			PhoneMobile: phoneNumber,
			SendByDefaultProvider: true
		});

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/api/processing/SendConfirmCodeAndSaleSms',
			'POST',
			stringToSend,
			'send_confirmcode_and_sale_sms'
		);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		if ('NoMoney' in result.data && result.data.NoMoney) {
			showMessage(
				'Недостаточный баланс для оплаты SMS с кодом подтверждения'
			);
			return false;
		}

		var returnedConfirmCode = '';

		if ('ConfirmCode' in result.data && result.data.ConfirmCode) {
			returnedConfirmCode = result.data.ConfirmCode;
		} else {
			showMessage(
				'В ответе сервера отсутствует код подтверждения' +
					CR_MESSAGE +
					CONTACT_YOUR_TECHNICIAN_MESSAGE +
					OR_MESSAGE +
					CONTACT_SUPPORT_MESSAGE,
				Icon.Error
			);
			return false;
		}

		var returnedSmsPrice = '';

		if ('SmsPrice' in result.data) {
			returnedSmsPrice = result.data.SmsPrice;
		} else {
			showMessage(
				'В ответе сервера отсутствует цена за SMS-сообщение с кодом подтверждения' +
					CR_MESSAGE +
					CONTACT_YOUR_TECHNICIAN_MESSAGE +
					OR_MESSAGE +
					CONTACT_SUPPORT_MESSAGE,
				Icon.Error
			);
			return false;
		}

		var confirmCode = showInputConfirmCodeDialog();

		if (!confirmCode) return false;

		if (confirmCode == returnedConfirmCode) {
			showMessage('Подтверждение телефонного номера прошло успешно.');
			return returnedSmsPrice;
		} else {
			showMessage('Введенный код подтверждения неверен', Icon.Error);
			return false;
		}
	}
	// регистрация клиента в процессинге по номеру телефона и коду подтверждения
	function registerClientByPhoneNumber(phoneNumber, confirmCode) {
		var result = {
			success: false,
			message: '',
			data: ''
		};

		if (typeof phoneNumber == 'undefined') {
			phoneNumber = showInputPhoneNumberDialog();
		}

		if (!phoneNumber) return false;

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		if (typeof confirmCode == 'undefined')
			confirmCode = showInputConfirmCodeDialog();

		if (!confirmCode) return false;

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			CardNum: phoneNumber,
			PhoneConfirmCode: confirmCode,
			RegSource: 'Bar'
		});

		result = sendHttpRequest(
			processingServerAddress + '/BonusWebApi/Mobile/Register',
			'POST',
			stringToSend,
			'register_client_by_phone_number'
		);

		if (result.success) {
			showMessage('Регистрация клиента прошла успешно.');
			return true;
		} else {
			showMessage(result.message, Icon.Error);
			return false;
		}
	}
	// проверка кода подтверждения
	function confirmClientPhone(cardNumber, phoneNumber, confirmCode) {
		if (typeof cardNumber == 'undefined') {
			cardNumber = frontol.actions.inputString(
				INPUT_CARD_CODE_MESSAGE,
				''
			);
		}

		if (!cardNumber) {
			showMessage(CARD_CODE_EMPTY_MESSAGE, Icon.Error);
			return false;
		}

		cardNumber = CorrectCardNumber(cardNumber);

		var result = {
			success: false,
			message: '',
			data: ''
		};

		result = checkPrefixCard(cardNumber);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		result = checkRangeCard(cardNumber);

		if (!result.success) {
			showMessage(result.message, Icon.Error);
			return false;
		}

		if (typeof phoneNumber == 'undefined') {
			phoneNumber = showInputPhoneNumberDialog();
		}

		if (!phoneNumber) return false;

		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) {
			showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
			return false;
		}

		if (typeof confirmCode == 'undefined')
			confirmCode = showInputConfirmCodeDialog();

		if (!confirmCode) return false;

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			CardCode: cardNumber,
			PhoneMobile: phoneNumber,
			ConfirmCode: confirmCode
		});

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/api/processing/ConfirmClientPhone',
			'POST',
			stringToSend,
			'confirm_client_phone'
		);

		if (result.success) {
			showMessage('Подтверждение телефонного номера прошло успешно.');
			return cardNumber;
		} else {
			showMessage(result.message, Icon.Error);
			return false;
		}
	}
	function showInputConfirmCodeDialog() {
		var confirmCode;
		var attemptsNumber = 0;

		do {
			attemptsNumber++;
			confirmCode = frontol.actions.inputString(
				INPUT_CONFIRM_CODE_MESSAGE,
				''
			);

			if (!confirmCode) {
				showMessage(
					CONFIRM_CODE_EMPTY_MESSAGE +
						(attemptsNumber < 2
							? CR_MESSAGE + TRY_AGAIN_MESSAGE
							: ''),
					Icon.Error
				);
				continue;
			}

			confirmCode = confirmCode.trim();

			if (confirmCode.search(/^[0-9]{4,}$/) === -1) {
				showMessage(
					CONFIRM_CODE_ERROR_MESSAGE +
						(attemptsNumber < 2
							? CR_MESSAGE + TRY_AGAIN_MESSAGE
							: ''),
					Icon.Error
				);
				confirmCode = '';
				continue;
			}
			return confirmCode;
		} while (attemptsNumber < 2);

		return false;
	}
	// ф-ция показывает окно ввода номера телефона и возвращает введенный номер
	function showInputPhoneNumberDialog() {
		var phonePrefix = frontol.userValues.get('PhonePrefix');
		var phoneNumber = frontol.actions.inputString(
			INPUT_PHONE_NUMBER_MESSAGE,
			phonePrefix ? phonePrefix : ''
		);

		if (!phoneNumber) {
			showMessage(PHONE_NUMBER_EMPTY_MESSAGE, Icon.Error);
			return false;
		}

		phoneNumber = phoneNumber.trim();

		if (phoneNumber.search(/^[0-9]{10,}$/) === -1) {
			showMessage(PHONE_NUMBER_ERROR_MESSAGE, Icon.Error);
			return false;
		}
		return '+' + phoneNumber;
	}
	// регистрация в процессинге по номеру телефона
	function manualRegisterByPhone() {
		//проверим, что текущий документ существует
		var doc;

		try {
			doc = frontol.currentDocument;
		} catch (e) {}

		if (doc == null) showError(NO_OPENED_DOCUMENTS_MESSAGE);

		//проверим, что документ - продажа
		if (!isSaleDocument(doc))
			showError(
				'Ввод процессинговой карты возможен только в документе продажи!'
			);

		if (frontol.userValues.get('OnlyOneCard') == '1') {
			if (doc.userValues.get('cardBoxNumbers') != '') {
				showError(
					'В документе уже введена карта или расчитаны скидки!'
				);
			}
		}

		if (
			frontol.userValues.get('DontWorkWithStandartCards') == '1' &&
			doc.card.count > 0
		) {
			showError('В документ уже введены карты другого типа!');
		}

		//проверяем наличие остатка для оплаты
		if (GetSumForPayment() <= 0) showError('Документ уже оплачен!');

		for (
			doc.payment.index = 1;
			doc.payment.index <= doc.payment.count;
			doc.payment.index++
		) {
			if (
				!(
					doc.payment.type.code ==
						Number(
							frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
						) ||
					doc.payment.type.code ==
						Number(
							frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME)
						) ||
					doc.payment.type.code ==
						Number(
							frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME)
						) ||
					doc.payment.type.code ==
						Number(frontol.userValues.get(COUPON_PAYMENT_CODE_NAME))
				)
			) {
				showError('Введены непроцессинговые платежи!');
			}
		}

		var phoneNumber = showInputPhoneNumberDialog();

		if (!phoneNumber) cancelAct();

		frontol.userValues.remove('scannedQR');

		//проверим, что карта вводится в документ первый раз
		if (doc.userValues.get('cardBoxNumbers') != '') {
			var cardBoxNumbers = doc.userValues.get('cardBoxNumbers');
			var cardBoxNumbersArray = [];

			cardBoxNumbersArray = cardBoxNumbers.split(';');

			for (var i = 0; i < cardBoxNumbersArray.length; i++) {
				if (phoneNumber == cardBoxNumbersArray[i]) {
					showError('Карта с таким кодом уже введена!');
				}
			}
		}
		RegisterProcCard('', phoneNumber);
	}
}
//==========================================================================================================================================================================================
//ПОДКЛЮЧЕНИЕ МЕТОДОВ JSON
Libraries: {
	/* jshint ignore:start */
	function getJson2() {
		'object' != typeof JSON && (JSON = {}),
			(function () {
				'use strict';
				function f(t) {
					return t < 10 ? '0' + t : t;
				}
				function this_value() {
					return this.valueOf();
				}
				function quote(t) {
					return (
						(rx_escapable.lastIndex = 0),
						rx_escapable.test(t)
							? '"' +
							  t.replace(rx_escapable, function (t) {
									var e = meta[t];
									return 'string' == typeof e
										? e
										: '\\u' +
												(
													'0000' +
													t.charCodeAt(0).toString(16)
												).slice(-4);
							  }) +
							  '"'
							: '"' + t + '"'
					);
				}
				function str(t, e) {
					var r,
						n,
						o,
						u,
						f,
						a = gap,
						i = e[t];
					switch (
						(i &&
							'object' == typeof i &&
							'function' == typeof i.toJSON &&
							(i = i.toJSON(t)),
						'function' == typeof rep && (i = rep.call(e, t, i)),
						typeof i)
					) {
						case 'string':
							return quote(i);
						case 'number':
							return isFinite(i) ? String(i) : 'null';
						case 'boolean':
						case 'null':
							return String(i);
						case 'object':
							if (!i) return 'null';
							if (
								((gap += indent),
								(f = []),
								'[object Array]' ===
									Object.prototype.toString.apply(i))
							) {
								for (u = i.length, r = 0; r < u; r += 1)
									f[r] = str(r, i) || 'null';
								return (
									(o =
										0 === f.length
											? '[]'
											: gap
											? '[\n' +
											  gap +
											  f.join(',\n' + gap) +
											  '\n' +
											  a +
											  ']'
											: '[' + f.join(',') + ']'),
									(gap = a),
									o
								);
							}
							if (rep && 'object' == typeof rep)
								for (u = rep.length, r = 0; r < u; r += 1)
									'string' == typeof rep[r] &&
										((n = rep[r]),
										(o = str(n, i)),
										o &&
											f.push(
												quote(n) +
													(gap ? ': ' : ':') +
													o
											));
							else
								for (n in i)
									Object.prototype.hasOwnProperty.call(
										i,
										n
									) &&
										((o = str(n, i)),
										o &&
											f.push(
												quote(n) +
													(gap ? ': ' : ':') +
													o
											));
							return (
								(o =
									0 === f.length
										? '{}'
										: gap
										? '{\n' +
										  gap +
										  f.join(',\n' + gap) +
										  '\n' +
										  a +
										  '}'
										: '{' + f.join(',') + '}'),
								(gap = a),
								o
							);
					}
				}
				var rx_one = /^[\],:{}\s]*$/,
					rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
					rx_three =
						/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
					rx_four = /(?:^|:|,)(?:\s*\[)+/g,
					rx_escapable =
						/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
					rx_dangerous =
						/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
				'function' != typeof Date.prototype.toJSON &&
					((Date.prototype.toJSON = function () {
						return isFinite(this.valueOf())
							? this.getUTCFullYear() +
									'-' +
									f(this.getUTCMonth() + 1) +
									'-' +
									f(this.getUTCDate()) +
									'T' +
									f(this.getUTCHours()) +
									':' +
									f(this.getUTCMinutes()) +
									':' +
									f(this.getUTCSeconds()) +
									'Z'
							: null;
					}),
					(Boolean.prototype.toJSON = this_value),
					(Number.prototype.toJSON = this_value),
					(String.prototype.toJSON = this_value));
				var gap, indent, meta, rep;
				'function' != typeof JSON.stringify &&
					((meta = {
						'\b': '\\b',
						'\t': '\\t',
						'\n': '\\n',
						'\f': '\\f',
						'\r': '\\r',
						'"': '\\"',
						'\\': '\\\\'
					}),
					(JSON.stringify = function (t, e, r) {
						var n;
						if (((gap = ''), (indent = ''), 'number' == typeof r))
							for (n = 0; n < r; n += 1) indent += ' ';
						else 'string' == typeof r && (indent = r);
						if (
							((rep = e),
							e &&
								'function' != typeof e &&
								('object' != typeof e ||
									'number' != typeof e.length))
						)
							throw new Error('JSON.stringify');
						return str('', { '': t });
					})),
					'function' != typeof JSON.parse &&
						(JSON.parse = function (text, reviver) {
							function walk(t, e) {
								var r,
									n,
									o = t[e];
								if (o && 'object' == typeof o)
									for (r in o)
										Object.prototype.hasOwnProperty.call(
											o,
											r
										) &&
											((n = walk(o, r)),
											void 0 !== n
												? (o[r] = n)
												: delete o[r]);
								return reviver.call(t, e, o);
							}
							var j;
							if (
								((text = String(text)),
								(rx_dangerous.lastIndex = 0),
								rx_dangerous.test(text) &&
									(text = text.replace(
										rx_dangerous,
										function (t) {
											return (
												'\\u' +
												(
													'0000' +
													t.charCodeAt(0).toString(16)
												).slice(-4)
											);
										}
									)),
								rx_one.test(
									text
										.replace(rx_two, '@')
										.replace(rx_three, ']')
										.replace(rx_four, '')
								))
							)
								return (
									(j = eval('(' + text + ')')),
									'function' == typeof reviver
										? walk({ '': j }, '')
										: j
								);
							throw new SyntaxError('JSON.parse');
						});
			})();
	}
}
/* jshint ignore:end */
//==========================================================================================================================================================================================
Tests: {
	//ТЕСТ ЗАПРОСА-ОТВЕТА
	function TestQA(
		stringToSend,
		request,
		command,
		requestDateTime,
		responseDateTime
	) {
		if (!isDebugMode()) return;

		try {
			var fTest, fsoTest;
			fsoTest = new ActiveXObject('Scripting.FileSystemObject');

			createFullPath(fsoTest, RX_LOYALTY_DIRECTORY_FRONTOL_DEV);

			var dateTimeNow = getISODateTimeToString();

			fTest = fsoTest.CreateTextFile(
				RX_LOYALTY_DIRECTORY_FRONTOL_DEV +
					'\\' +
					command +
					'_' +
					dateTimeNow +
					'.log',
				true
			);

			// время отправки запроса
			if (requestDateTime) fTest.Write('[' + requestDateTime + '] - ');

			fTest.WriteLine(stringToSend);

			fTest.WriteLine('---');
			// время получения ответа
			if (responseDateTime) fTest.Write('[' + responseDateTime + '] - ');

			if (request) {
				fTest.WriteLine('status: ' + request.status);

				if (typeof request.responseText === 'string')
					fTest.Write(request.responseText);
			}

			fTest.Close();
		} catch (e) {
			showMessage(
				'Ошибка теста запроса-ответа!\n' + e.name + ': ' + e.message,
				Icon.Error
			);
		}
	}

	function TestShowDiscountDocument() {
		if (!frontol.currentDocument) return;

		var doc = frontol.currentDocument;
		var message = 'Скидки на документ:';

		for (
			doc.discountDoc.index = 1;
			doc.discountDoc.index <= doc.discountDoc.count;
			doc.discountDoc.index++
		) {
			message +=
				'\nСобытие: ' +
				doc.discountDoc.marketingEvent.code +
				' ' +
				doc.discountDoc.marketingEvent.name +
				' | Сумма: ' +
				doc.discountDoc.sum +
				' | Значение: ' +
				doc.discountDoc.value;
		}
		showMessage(message);
	}

	function TestShowDiscountPosition() {
		if (!frontol.currentDocument) return;

		var doc = frontol.currentDocument;
		var position = doc.position;

		position.index = doc.indexCurrentPosition;

		var message = 'Скидки на позицию:';

		for (
			position.discountPos.index = 1;
			position.discountPos.index <= position.discountPos.count;
			position.discountPos.index++
		) {
			message +=
				'\nСобытие: ' +
				position.discountPos.marketingEvent.code +
				' ' +
				position.discountPos.marketingEvent.name +
				' | Сумма: ' +
				position.discountPos.sum +
				' | Значение: ' +
				position.discountPos.value +
				(position.discountPos.valueType == 1 ? '%' : ' руб.');
		}

		message += '\nСкидки на документ, распределенные на позицию:';

		for (
			position.discountDoc.index = 1;
			position.discountDoc.index <= position.discountDoc.count;
			position.discountDoc.index++
		) {
			message +=
				'\nСобытие: ' +
				position.discountDoc.marketingEvent.code +
				' ' +
				position.discountDoc.marketingEvent.name +
				' | Сумма: ' +
				position.discountDoc.sum +
				' | Значение: ' +
				position.discountDoc.value;
		}
		showMessage(message);
	}

	function TestRecalcDiscounts() {
		frontol.currentDocument.recalculateAllDiscounts();

		if (frontol.userValues.get('SecondMonitor') == '1') {
			if (rxF2SM) rxF2SM.updateCheque(frontol.currentDocument);
		}
	}
}

//==========================================================================================================================================================================================
Extra: {
	//СТОРОННИЙ ФУНКЦИОНАЛ
	// CashBoxSystem
	function cashBoxSaleOperation(
		doc,
		operatorName,
		operatorCode,
		docNumber,
		barCode,
		kkmPos
	) {
		var paymentCash = 0;
		var paymentDebitCard = 0;
		var paymentCreditCard = 0;
		var paymentTara = 0;
		var sessionNumber = frontol.sessionNumber;

		// оплаты
		for (
			doc.payment.index = 1;
			doc.payment.index <= doc.payment.count;
			doc.payment.index++
		) {
			if (doc.payment.sumInPaymentCurrency >= 0) {
				switch (doc.payment.code) {
					case 2: {
						paymentDebitCard += doc.payment.sumInPaymentCurrency;
						break;
					}
					case 1000069: {
						paymentTara += doc.payment.sumInPaymentCurrency;
						break;
					}
					case 999: {
						paymentCreditCard += doc.payment.sumInPaymentCurrency;
						break;
					}
					case 1: {
						paymentCash += doc.payment.sumInPaymentCurrency;
						break;
					}
					default: {
						showMessage(
							'Неизвестный тип платежа (' +
								doc.payment.code +
								')!',
							Icon.Error
						);
						cancelAct();
						return;
					}
				}
			}
		}
		// позиции
		for (
			doc.position.index = 1;
			doc.position.index < doc.position.count;
			doc.position.index++
		) {
			var count = doc.position.quantity;
			var discount = 0;
			var markup = 0;
			var sectionCode = doc.position.ECRDepartment;
			var sectionName = sectionCode;
			var price = doc.position.price;
			var name =
				doc.position.ware.name +
				CR_MESSAGE +
				doc.position.ware.mark +
				' ' +
				doc.position.barcode;

			if (doc.position.storno === 1) continue;

			// скидки / наценки
			if (doc.position.discountEnabled === 1) {
				if (doc.position.sum > doc.position.sumWithDiscs) {
					// скидки
					discount = Math.abs(doc.position.totalPercentDiscount);
				} else {
					// наценка
					markup = Math.abs(doc.position.totalPercentDiscount);
				}
			}

			// налоги
			var taxPercent = 12;
			var taxType = 100;
			var taxationType = 101;

			for (
				doc.position.tax.index = 1;
				doc.position.tax.index <= doc.position.tax.count;
				doc.position.tax.index++
			) {
				taxPercent = doc.position.tax.taxRateValue;
			}

			// добавление позиции в чек
			if (
				!cashBoxItems.Append2(
					name,
					price,
					count,
					discount,
					markup,
					sectionCode,
					sectionName,
					taxType,
					taxationType,
					taxPercent
				)
			) {
				if (cashBoxItems.LastError.length === 0) {
					showMessage(
						"Не удалось добавить позицию '" + name + "' в чек!"
					);
				} else {
					showMessage(
						"Не удалось добавить позицию '" +
							name +
							"' в чек!" +
							CR_MESSAGE +
							cashBoxItems.LastError +
							'!'
					);
				}
				cancelAct();
				return false;
			}
		}

		// проверка uds
		var additionalTextPrint = '';

		if (doc.userValues.get('uds_current_receipt') != '') {
			for (
				doc.discountDoc.index = 1;
				doc.discountDoc.index <= doc.discountDoc.count;
				doc.discountDoc.index++
			) {
				if (
					doc.discountDoc.marketingAction.text.toLowerCase() == 'uds'
				) {
					additionalTextPrint =
						'Скидка UDS Game: ' + doc.discountDoc.sum;
				}
			}
		}

		var fp = cashBox.Sale(
			cashBoxItems,
			paymentCash,
			paymentDebitCard,
			paymentCreditCard,
			paymentTara,
			operatorName,
			operatorCode,
			docNumber,
			barCode,
			kkmPos,
			additionalTextPrint
		);

		if (fp.length === 0) {
			if (cashBox.LastError.length === 0) {
				showMessage('Ошибка выполнения операции!');
			} else {
				showMessage(
					'Ошибка выполнения операции!' +
						CR_MESSAGE +
						cashBox.LastError +
						'!'
				);
			}
			cancelAct();
			return false;
		}
		return true;
	}

	function cashBoxReturnOperation(
		doc,
		operatorName,
		operatorCode,
		docNumber,
		barCode,
		kkmPos
	) {
		var paymentCash = 0;
		var paymentDebitCard = 0;
		var paymentCreditCard = 0;
		var paymentTara = 0;
		var sessionNumber = frontol.sessionNumber;
		var i = 0;
		var j = 0;

		// оплаты
		for (
			doc.payment.index = 1;
			doc.payment.index < doc.payment.count;
			doc.payment.index++
		) {
			if (doc.payment.sumInPaymentCurrency >= 0) {
				switch (doc.payment.code) {
					case 2:
						paymentDebitCard += doc.payment.sumInPaymentCurrency;
						break;
					case 1000069:
						paymentTara += doc.payment.sumInPaymentCurrency;
						break;
					case 999:
						paymentCreditCard += doc.payment.sumInPaymentCurrency;
						break;
					case 1:
						paymentCash += doc.payment.sumInPaymentCurrency;
						break;
					default: {
						showMessage(
							'Неизвестный тип платежа (' +
								doc.payment.code +
								')!'
						);
						cancelAct();
						return;
					}
				}
			}
		}

		// позиции
		for (
			doc.position.index = 1;
			doc.position.index <= doc.position.count;
			doc.position.index++
		) {
			var count = doc.position.quantity;
			var discount = 0;
			var markup = 0;
			var sectionCode = doc.position.ECRDepartment;
			var sectionName = sectionCode;
			var price = doc.position.price;
			var name =
				doc.position.ware.name +
				CR_MESSAGE +
				doc.position.ware.mark +
				' ' +
				doc.position.barcode;

			if (doc.position.storno === 1) continue;

			// скидки / наценки
			if (doc.position.discountEnabled === 1) {
				if (doc.position.sum > doc.position.sumWithDiscs) {
					// скидки
					discount = Math.abs(doc.position.totalPercentDiscount);
				} else {
					// наценка
					markup = Math.abs(doc.position.totalPercentDiscount);
				}
			}

			// налоги
			var taxPercent = 12;
			var taxType = 100;
			var taxationType = 101;

			for (
				doc.position.tax.index = 1;
				doc.position.tax.index <= doc.position.tax.count;
				doc.position.tax.index++
			) {
				taxPercent = doc.position.tax.taxRateValue;
			}

			// добавление позиции в чек
			if (
				!cashBoxItems.Append2(
					name,
					price,
					count,
					discount,
					markup,
					sectionCode,
					sectionName,
					taxType,
					taxationType,
					taxPercent
				)
			) {
				if (cashBoxItems.LastError.length === 0) {
					showMessage(
						"Не удалось добавить позицию '" + name + "' в чек!",
						Icon.Error
					);
				} else {
					showMessage(
						"Не удалось добавить позицию '" +
							name +
							"' в чек!" +
							CR_MESSAGE +
							cashBoxItems.LastError +
							'!',
						Icon.Error
					);
				}
				cancelAct();
				return false;
			}
		}

		var fp = cashBox.SaleReturn(
			cashBoxItems,
			paymentCash,
			paymentDebitCard,
			paymentCreditCard,
			paymentTara,
			operatorName,
			operatorCode,
			docNumber,
			barCode,
			kkmPos
		);

		if (fp.length === 0) {
			if (cashBox.LastError.length === 0) {
				showMessage('Ошибка выполнения операции!', Icon.Error);
			} else {
				showMessage(
					'Ошибка выполнения операции!' +
						CR_MESSAGE +
						cashBox.LastError +
						'!',
					Icon.Error
				);
			}
			cancelAct();
			return false;
		}
		return true;
	}

	function cashBoxDepositOperation(
		sum,
		operatorName,
		operatorCode,
		docNumber,
		barCode,
		kkmPos
	) {
		if (
			!cashBox.MoneyDeposit(
				sum,
				operatorName,
				operatorCode,
				docNumber,
				barCode,
				kkmPos
			)
		) {
			if (cashBox.LastError.length === 0) {
				showMessage('Ошибка выполнения операции!');
			} else {
				showMessage(
					'Ошибка выполнения операции!' +
						CR_MESSAGE +
						cashBox.LastError +
						'!'
				);
			}
			return false;
		}
		return true;
	}

	function cashBoxWithdrawalOperation(
		sum,
		operatorName,
		operatorCode,
		docNumber,
		barCode,
		kkmPos
	) {
		if (
			!cashBox.MoneyWithdrawal(
				sum,
				operatorName,
				operatorCode,
				docNumber,
				barCode,
				kkmPos
			)
		) {
			if (cashBox.LastError.length === 0) {
				showMessage('Ошибка выполнения операции!');
			} else {
				showMessage(
					'Ошибка выполнения операции!' +
						CR_MESSAGE +
						cashBox.LastError +
						'!'
				);
			}
			return false;
		}
		return true;
	}

	//вспомогательная функция - проверяет, включено ли дополнение по имени
	function IsExtraEnabled(extraName) {
		if (frontol.userValues.get(extraName) == '1') return true;
		return false;
	}
	//==========================================================================================================================================================================================
	//TaxKyrgyzstan BEGIN
	//отложенные чеки-задания
	//запуск по флагу ExtraTaxKyrgyzstan

	function FuncAct_ExtraTaxKyrgyzstan() {
		CalculateSalesTaxKirg_ExtraTaxKyrgyzstan();
		LoadPayment_ExtraTaxKyrgyzstan();
	}

	//рассчитывает цены
	//frontol.currentDocument.userValues.get("NeedCalc") = {"1", если отнимаем процент; "0", если возвращаем изначальные цены}
	function CalculateSalesTaxKirg_ExtraTaxKyrgyzstan() {
		var doc = frontol.currentDocument;

		if (doc.userValues.get('NeedCalc') == '1') {
			for (
				doc.position.index = 1;
				doc.position.index <= doc.position.count;
				doc.position.index++
			) {
				if (doc.position.storno == 0 && doc.position.price > 0) {
					if (doc.position.ware.maxDiscount != 0) {
						doc.position.setSpecialPrice(
							doc.position.ware.price -
								(doc.position.ware.price / 1.13) * 0.01,
							1
						);
					} else {
						doc.position.setSpecialPrice(
							doc.position.ware.price -
								(doc.position.ware.price / 1.13) * 0.01,
							0
						);
					}
				}
			}
			doc.userValues.set('IsDecreasedPricesForTax', '1');
		}

		if (doc.userValues.get('NeedCalc') == '0') {
			for (
				doc.position.index = 1;
				doc.position.index <= doc.position.count;
				doc.position.index++
			) {
				if (doc.position.storno == 0 && doc.position.price > 0) {
					if (doc.position.ware.maxDiscount != 0) {
						doc.position.setSpecialPrice(
							doc.position.ware.price,
							1
						);
					} else {
						doc.position.setSpecialPrice(
							rontol.currentDocument.position.ware.price,
							0
						);
					}
				}
			}
			doc.userValues.remove('IsDecreasedPricesForTax');
		}
	}

	//контроль ввода платежа
	function ControlEnterPayment_ExtraTaxKyrgyzstan(payment) {
		if (
			payment.type.code == 1 &&
			frontol.currentDocument.userValues.get('IsDecreasedPricesForTax') ==
				'1'
		) {
			showError('Цены пересчитаны!\nВозможна только безналичная оплата!');
		}

		if (
			payment.type.code != 1 &&
			frontol.currentDocument.userValues.get('IsDecreasedPricesForTax') ==
				''
		) {
			for (
				frontol.currentDocument.payment.index = 1;
				frontol.currentDocument.payment.index <=
				frontol.currentDocument.payment.count;
				frontol.currentDocument.payment.index++
			) {
				if (frontol.currentDocument.payment.type.code == 1) {
					showError(
						'Введена оплата наличными!\nКомбинированная оплата недоступна!'
					);
				}

				if (
					frontol.currentDocument.payment.type.code ==
						Number(
							frontol.userValues.get(BONUS_PAYMENT_CODE_NAME)
						) ||
					frontol.currentDocument.payment.type.code ==
						Number(
							frontol.userValues.get(DISCOUNT_PAYMENT_CODE_NAME)
						) ||
					frontol.currentDocument.payment.type.code ==
						Number(
							frontol.userValues.get(DEPOSIT_PAYMENT_CODE_NAME)
						) ||
					frontol.currentDocument.payment.type.code ==
						Number(frontol.userValues.get(COUPON_PAYMENT_CODE_NAME))
				) {
					showError(
						'Цены не пересчитаны! Доступна только оплата наличными!'
					);
				}
			}

			SavePayment_ExtraTaxKyrgyzstan(
				payment.type.code,
				payment.sumInBaseCurrency
			);

			frontol.currentDocument.userValues.set('NeedCalc', '1');

			sendKeys(frontol.userValues.get('ExtraTaxKyrgyzstanKeyMacros'));

			cancelAct();
		}
	}

	//контроль сторно платежа
	function ControlStornoPayment_ExtraTaxKyrgyzstan() {
		if (
			frontol.currentDocument.payment.count == 0 &&
			frontol.currentDocument.userValues.get('IsDecreasedPricesForTax') ==
				'1'
		) {
			frontol.currentDocument.userValues.set('NeedCalc', '0');
			frontol.actions.wait('Пересчитываем цены...', 1);
			sendKeys(frontol.userValues.get('ExtraTaxKyrgyzstanKeyMacros'));
		}
	}

	function SavePayment_ExtraTaxKyrgyzstan(paymentCode, paymentSum) {
		var stringPayment = '' + paymentCode + '&' + paymentSum;
		frontol.currentDocument.userValues.set('PaymentTaxKirg', stringPayment);
	}

	function LoadPayment_ExtraTaxKyrgyzstan() {
		if (frontol.currentDocument.userValues.get('PaymentTaxKirg') == '') {
			return;
		}

		var stringPaymentArr = frontol.currentDocument.userValues
			.get('PaymentTaxKirg')
			.split('&');
		var paymentCode = Number(stringPaymentArr[0]);
		var paymentSum = Number(stringPaymentArr[1]);

		if (
			GetSumForPaymentFromPositions(frontol.currentDocument) < paymentSum
		) {
			paymentSum = 0;
		}

		frontol.currentDocument.addPayment(paymentCode, paymentSum);

		frontol.currentDocument.userValues.remove('PaymentTaxKirg');
	}

	//TaxKyrgyzstan END
	//==========================================================================================================================================================================================
	// выгрузка сертификатов РЮД
	function RudGiftCards() {
		this.DB =
			'DRIVER=Firebird/InterBase(r) driver;DBNAME=localhost:C:\\AtolBase\\GiftCard.gdb;UID=sysdba;PWD=masterkey';
		this.BaseID = 'P' + frontol.codeWorkplace;

		this.ExecSQL = function (Str) {
			var Conn = new ActiveXObject('ADODB.Connection');
			Conn.Provider = 'MSDASQL.1';
			Conn.Open(this.DB);
			Conn.BeginTrans;

			var qSelect = new ActiveXObject('ADODB.Command');
			qSelect.ActiveConnection = Conn;
			qSelect.CommandText = Str;

			var C = qSelect.Execute;

			Conn.CommitTrans();
			return C;
		};

		this.upload = function () {
			for (i = 1; i <= frontol.currentDocument.position.count; i++) {
				//выгружаем проданные сертификаты
				frontol.currentDocument.position.index = i;

				if (frontol.currentDocument.position.storno) continue;

				if (frontol.currentDocument.position.activatedGiftCard) {
					//_SM(frontol.currentDocument.position.activatedGiftCard.giftCard.value);

					Str =
						'INSERT INTO TRANZ (mCODE,mVID,mNAME,mDATE,mSUM,mSTAT,mBID,mACT) VALUES (';

					frontol.currentDocument.position.activatedGiftCard.giftCard.counter.index = 1;

					Str =
						Str +
						frontol.currentDocument.position.activatedGiftCard
							.giftCard.code;
					Str =
						Str +
						',' +
						frontol.currentDocument.position.activatedGiftCard
							.giftCard.type.code;
					Str =
						Str +
						",'" +
						frontol.currentDocument.position.activatedGiftCard
							.giftCard.value +
						"'";
					Str = Str + ",'TODAY'";
					Str =
						Str +
						',' +
						frontol.currentDocument.position.activatedGiftCard
							.giftCard.counter.value;
					Str =
						Str +
						',' +
						frontol.currentDocument.position.activatedGiftCard
							.giftCard.newStatus;
					Str = Str + ",'" + this.BaseID + "'";
					Str = Str + ',1';
					Str = Str + ')';
					this.ExecSQL(Str);
					//_SM(Str);
				}
			}

			for (i = 1; i <= frontol.currentDocument.payment.count; i++) {
				//выгружаем погашенные сертификаты
				frontol.currentDocument.payment.index = i;

				if (frontol.currentDocument.payment.giftCard) {
					//_SM("Оплата "+frontol.currentDocument.payment.giftCard.value);

					frontol.currentDocument.payment.giftCard.counter.index = 1;
					Str =
						'INSERT INTO TRANZ (mCODE,mVID,mNAME,mDATE,mSUM,mSTAT,mBID,mACT) VALUES (';
					Str = Str + frontol.currentDocument.payment.giftCard.code;
					Str =
						Str +
						', ' +
						frontol.currentDocument.payment.giftCard.type.code;
					Str =
						Str +
						",'" +
						frontol.currentDocument.payment.giftCard.value +
						"'";
					Str = Str + ",'TODAY'";
					Str =
						Str +
						',' +
						frontol.currentDocument.payment.giftCard.counter.value;
					Str =
						Str +
						',' +
						frontol.currentDocument.payment.giftCard.newStatus;
					Str = Str + ",'" + this.BaseID + "'";
					Str = Str + ',1';
					Str = Str + ')';
					this.ExecSQL(Str);
				}
			}
		};
	}
	//==========================================================================================================================================================================================
	// работа со списком лояльности
	function manualGetLoyaltyPrograms() {
		var rxLoyaltyPrograms = new LoyaltyPrograms();
		rxLoyaltyPrograms.get();
	}

	function LoyaltyPrograms() {
		this.userValue = 'rxLoyaltyPrograms';
		// есть ли выбор программ лояльности
		this.selectionEnabled = function () {
			var stringLoyaltyPrograms = frontol.userValues.get(this.userValue);

			if (!stringLoyaltyPrograms) return false;

			var arrayLoyaltyPrograms = stringLoyaltyPrograms.split(';');

			// если программ меньше 2 - выбора нет
			if (arrayLoyaltyPrograms.length < 2) return false;

			var loyaltyPrograms = {
				Ids: '',
				Names: ''
			};

			for (var i = 0; i < arrayLoyaltyPrograms.length; i++) {
				var stringLoyaltyProgram = arrayLoyaltyPrograms[i];
				var arrayLoyaltyProgram = stringLoyaltyProgram.split('&');

				if (arrayLoyaltyProgram.length < 2) return false;

				if (loyaltyPrograms.Ids) loyaltyPrograms.Ids += '\n';

				loyaltyPrograms.Ids += arrayLoyaltyProgram[0];

				if (loyaltyPrograms.Names) loyaltyPrograms.Names += '\n';

				loyaltyPrograms.Names += arrayLoyaltyProgram[1];
			}

			if (!loyaltyPrograms.Ids) {
				return false;
			} else {
				return loyaltyPrograms;
			}
		};
		// записать список программ лояльности в глобальную пользоввательскую переменную
		this.save = function (list) {
			if (!list) return;

			if (!('BonusPrograms' in list)) return;

			var listLoyaltyPrograms = '';
			// чистим предыдущее значение
			frontol.userValues.set(this.userValue, '');

			var bonusPrograms = list.BonusPrograms;

			for (var i = 0; i < bonusPrograms.length; i++) {
				if (
					'BonusProgramId' in bonusPrograms[i] &&
					'BonusProgramName' in bonusPrograms[i]
				) {
					if (listLoyaltyPrograms) listLoyaltyPrograms += ';';

					listLoyaltyPrograms +=
						bonusPrograms[i].BonusProgramId.toString() +
						'&' +
						bonusPrograms[i].BonusProgramName.toString();
				}
			}

			if (listLoyaltyPrograms)
				frontol.userValues.set(this.userValue, listLoyaltyPrograms);
		};
		// получить список программ лояльности
		this.get = function () {
			var result = {
				success: false,
				message: '',
				data: ''
			};

			var processingServerAddress = getServerAddress();

			if (!processingServerAddress) {
				showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
				return;
			}

			//получаем лицензию
			var license = getLicense();

			if (!license) showError(LICENSE_NOT_SET_MESSAGE);

			result = sendHttpRequest(
				processingServerAddress +
					'/BonusWebApi/api/processing/GetAllBonusProgram?License=' +
					license,
				'POST',
				'',
				'loyalty_programs'
			);

			if (result.success) {
				this.save(result.data);
			} else {
				showError(result.message);
			}
		};
	}
	// ввод QR-кода карты и его преобразование
	function manualInputCardCodeQR() {
		var cardCodeEncoded = base64_encode('123');
		var cardCodeQR = frontol.actions.inputString(
			'Отсканируйте QR-код карты из приложения',
			cardCodeEncoded
		);

		if (cardCodeQR) {
			var cardCodeDecoded = base64_decode(cardCodeQR);
			var cardCode = cardCodeDecoded.match('[0-9]{3}');

			if (cardCode) {
				var WShell = new ActiveXObject('WScript.Shell');

				WShell.SendKeys('^{F7}'); // вызов стандартного окна ввода карты клиента комбинацией Ctrl-F7
				WShell.SendKeys(cardCode[0]);
				WShell.SendKeys('{ENTER}');
			}
		}
	}
	//==========================================================================================================================================================================================
	//Categories BEGIN
	//категории и подкатегории товаров
	//запуск по флагу не требуется
	Head: {
		//дерево с категориями, подкатегориями и товарами
		var tree = {};

		var currentCategoryIndex = {
			get: function () {
				return frontol.userValues.get('currentCategoryIndex');
			},
			set: function (index) {
				frontol.userValues.set(
					'currentCategoryIndex',
					index.toString()
				);
			}
		};

		var currentSubcategoryIndex = {
			get: function () {
				return frontol.userValues.get('currentSubcategoryIndex');
			},
			set: function (index) {
				frontol.userValues.set(
					'currentSubcategoryIndex',
					index.toString()
				);
			}
		};

		var currentWareIndex = {
			get: function () {
				return frontol.userValues.get('currentWareIndex');
			},
			set: function (index) {
				frontol.userValues.set('currentWareIndex', index.toString());
			}
		};

		var maxCategoriesCount = 9;
		var maxSubcategoriesCount = 9;
		var maxWaresCount = 56;
	}

	Main: {
		function $$cancelIfDocumentNotExistOrNotEmpty() {
			var currentDocument = frontol.currentDocument;
			// если документ пуст - отменяем регистрацию
			// в остальных случаях это действие ненужно
			if (!currentDocument || currentDocument.position.count > 0)
				cancelAct();
		}

		function $$cancelIfDocumentExist() {
			if (frontol.currentDocument) cancelAct();
		}

		function loadTree() {
			var filePath = GetInputFilePath();
			var stringXml = ReadTextFromFile(filePath);

			if (stringXml) {
				tree = GetObjFromXml(stringXml);
			} else {
				tree = {};
			}

			tree = SortAndCorrectTree(tree);

			ClearCategoriesNames();

			if (tree.Data) SetCategoriesNames(tree.Data.Category);
		}

		function SortAndCorrectTree(tree) {
			if (tree.Data) {
				if (!tree.Data.Category.length)
					tree.Data.Category = [tree.Data.Category];

				for (var i = 0; i < tree.Data.Category.length; i++) {
					if (!tree.Data.Category[i].Subcategory.length)
						tree.Data.Category[i].Subcategory = [
							tree.Data.Category[i].Subcategory,
						];

					for (
						var j = 0;
						j < tree.Data.Category[i].Subcategory.length;
						j++
					) {
						if (
							tree.Data.Category[i].Subcategory[j].Product
								.length > 1
						) {
							tree.Data.Category[i].Subcategory[j].Product.sort(
								compareProducts
							);
						} else {
							tree.Data.Category[i].Subcategory[j].Product = [
								tree.Data.Category[i].Subcategory[j].Product,
							];
						}
					}
				}
			}
			return tree;
		}

		function compareCategories(categoryA, categoryB) {
			if (categoryA.attributes.Name > categoryB.attributes.Name) return 1;
			else return -1;
		}

		function compareProducts(productA, productB) {
			if (
				productA.attributes.DisplayName >
				productB.attributes.DisplayName
			)
				return 1;
			else return -1;
		}

		function sendKeysToOpenDocument() {
			if (frontol.currentDocument) {
			} else {
				// открываем документ по комбинации клавиш в раскладке клавиатуры
				var keysOpenSaleDocument = '+{F10}'; // Shift-{F10}
				var WShell = new ActiveXObject('WScript.Shell');
				WShell.SendKeys(keysOpenSaleDocument);
			}
		}

		function AddCurrentWare() {
			try {
				var doc = frontol.currentDocument;

				doc.addPosition(
					GetTypeId(),
					GetCurrentWareId(),
					null,
					1,
					null,
					true
				);

				if (frontol.userValues.get('SecondMonitor') == '1') {
					if (rxF2SM) rxF2SM.updateCheque(doc);
				}
			} catch (e) {
				showMessage(
					'Ошибка добавления позиции в документ!' +
						CR_MESSAGE +
						CONTACT_YOUR_TECHNICIAN_MESSAGE,
					Icon.Error
				);
			}
		}

		function GetCurrentWareId() {
			return tree.Data.Category[currentCategoryIndex.get()].Subcategory[
				currentSubcategoryIndex.get()
			].Product[currentWareIndex.get()].attributes.Id;
		}

		function GetTypeId() {
			if (tree.Data) return tree.Data.TypeId['#text'];
			return '';
		}
	}

	Categories: {
		function ClearCategoriesNames() {
			for (var i = 0; i < maxCategoriesCount; i++) {
				frontol.userValues.remove('c' + (i + 1).toString());
			}
		}

		function SetCategoriesNames(Categories) {
			for (var i = 0; i < Categories.length; i++) {
				if (i >= maxCategoriesCount) break;

				frontol.userValues.set(
					'c' + (i + 1).toString(),
					Categories[i].attributes.Name
				);
			}
		}

		function SetCurrentCategory(index) {
			if (!tree || !tree.Data.Category[index]) cancelAct();

			currentCategoryIndex.set(index);
			ClearSubcategoriesNames();
			SetSubcategoriesNames(
				tree.Data.Category[currentCategoryIndex.get()].Subcategory
			);
		}

		c: {
			function $c1() {
				SetCurrentCategory(0);
			}

			function $c2() {
				SetCurrentCategory(1);
			}

			function $c3() {
				SetCurrentCategory(2);
			}

			function $c4() {
				SetCurrentCategory(3);
			}

			function $c5() {
				SetCurrentCategory(4);
			}

			function $c6() {
				SetCurrentCategory(5);
			}

			function $c7() {
				SetCurrentCategory(6);
			}

			function $c8() {
				SetCurrentCategory(7);
			}

			function $c9() {
				SetCurrentCategory(8);
			}
		}
	}

	Subcategories: {
		function ClearSubcategoriesNames() {
			for (var i = 0; i < maxSubcategoriesCount; i++) {
				frontol.userValues.remove('s' + (i + 1).toString());
			}
		}

		function SetSubcategoriesNames(Subcategories) {
			for (var i = 0; i < Subcategories.length; i++) {
				if (i >= maxSubcategoriesCount) break;

				frontol.userValues.set(
					's' + (i + 1).toString(),
					Subcategories[i].attributes.Name
				);
			}
		}

		function SetCurrentSubcategory(index) {
			if (
				!tree.Data.Category[currentCategoryIndex.get()].Subcategory[
					index
				]
			)
				cancelAct();

			currentSubcategoryIndex.set(index);
			SetWaresPageNumber(1);
			ShowWares();
		}

		s: {
			function $s1() {
				SetCurrentSubcategory(0);
			}

			function $s2() {
				SetCurrentSubcategory(1);
			}

			function $s3() {
				SetCurrentSubcategory(2);
			}

			function $s4() {
				SetCurrentSubcategory(3);
			}

			function $s5() {
				SetCurrentSubcategory(4);
			}

			function $s6() {
				SetCurrentSubcategory(5);
			}

			function $s7() {
				SetCurrentSubcategory(6);
			}

			function $s8() {
				SetCurrentSubcategory(7);
			}

			function $s9() {
				SetCurrentSubcategory(8);
			}
		}
	}

	Wares: {
		function ShowWares() {
			ClearWaresNames();
			SetWaresNames(
				tree.Data.Category[currentCategoryIndex.get()].Subcategory[
					currentSubcategoryIndex.get()
				].Product
			);
		}

		function ClearWaresNames() {
			for (var i = 0; i < maxWaresCount; i++)
				frontol.userValues.remove('w' + (i + 1).toString());
		}

		function SetWaresNames(Wares) {
			var startIndex = (GetWaresPageNumber() - 1) * maxWaresCount;

			if (startIndex >= Wares.length) startIndex = 0;

			var counter = 0;

			for (var i = startIndex; i < Wares.length; i++) {
				if (counter >= maxWaresCount) break;

				frontol.userValues.set(
					'w' + (counter + 1).toString(),
					Wares[i].attributes.DisplayName
				);
				counter++;
			}
		}

		function SetCurrentWare(index) {
			index += (GetWaresPageNumber() - 1) * maxWaresCount;

			if (
				!tree.Data.Category[currentCategoryIndex.get()].Subcategory[
					currentSubcategoryIndex.get()
				].Product[index]
			)
				cancelAct();

			currentWareIndex.set(index);
			AddCurrentWare();
		}

		function $$nextWaresPage() {
			var waresCount =
				tree.Data.Category[currentCategoryIndex.get()].Subcategory[
					currentSubcategoryIndex.get()
				].Product.length;
			var currentPageNumber = GetWaresPageNumber();

			if (currentPageNumber * maxWaresCount >= waresCount) {
				currentPageNumber = 1;
			} else {
				currentPageNumber++;
			}

			SetWaresPageNumber(currentPageNumber);
			ShowWares();
		}

		function GetWaresPageNumber() {
			var pageNumber = frontol.userValues.get('WaresPageNumber');

			if (!pageNumber || pageNumber < 1) pageNumber = 1;

			return Number(pageNumber);
		}

		function SetWaresPageNumber(number) {
			frontol.userValues.set('WaresPageNumber', number.toString());
		}

		w: {
			function $w1() {
				SetCurrentWare(0);
			}

			function $w2() {
				SetCurrentWare(1);
			}

			function $w3() {
				SetCurrentWare(2);
			}

			function $w4() {
				SetCurrentWare(3);
			}

			function $w5() {
				SetCurrentWare(4);
			}

			function $w6() {
				SetCurrentWare(5);
			}

			function $w7() {
				SetCurrentWare(6);
			}

			function $w8() {
				SetCurrentWare(7);
			}

			function $w9() {
				SetCurrentWare(8);
			}

			function $w10() {
				SetCurrentWare(9);
			}

			function $w11() {
				SetCurrentWare(10);
			}

			function $w12() {
				SetCurrentWare(11);
			}

			function $w13() {
				SetCurrentWare(12);
			}

			function $w14() {
				SetCurrentWare(13);
			}

			function $w15() {
				SetCurrentWare(14);
			}

			function $w16() {
				SetCurrentWare(15);
			}

			function $w17() {
				SetCurrentWare(16);
			}

			function $w18() {
				SetCurrentWare(17);
			}

			function $w19() {
				SetCurrentWare(18);
			}

			function $w20() {
				SetCurrentWare(19);
			}

			function $w21() {
				SetCurrentWare(20);
			}

			function $w22() {
				SetCurrentWare(21);
			}

			function $w23() {
				SetCurrentWare(22);
			}

			function $w24() {
				SetCurrentWare(23);
			}

			function $w25() {
				SetCurrentWare(24);
			}

			function $w26() {
				SetCurrentWare(25);
			}

			function $w27() {
				SetCurrentWare(26);
			}

			function $w28() {
				SetCurrentWare(27);
			}

			function $w29() {
				SetCurrentWare(28);
			}

			function $w30() {
				SetCurrentWare(29);
			}

			function $w31() {
				SetCurrentWare(30);
			}

			function $w32() {
				SetCurrentWare(31);
			}

			function $w33() {
				SetCurrentWare(32);
			}

			function $w34() {
				SetCurrentWare(33);
			}

			function $w35() {
				SetCurrentWare(34);
			}

			function $w36() {
				SetCurrentWare(35);
			}

			function $w37() {
				SetCurrentWare(36);
			}

			function $w38() {
				SetCurrentWare(37);
			}

			function $w39() {
				SetCurrentWare(38);
			}

			function $w40() {
				SetCurrentWare(39);
			}

			function $w41() {
				SetCurrentWare(40);
			}

			function $w42() {
				SetCurrentWare(41);
			}

			function $w43() {
				SetCurrentWare(42);
			}

			function $w44() {
				SetCurrentWare(43);
			}

			function $w45() {
				SetCurrentWare(44);
			}

			function $w46() {
				SetCurrentWare(45);
			}

			function $w47() {
				SetCurrentWare(46);
			}

			function $w48() {
				SetCurrentWare(47);
			}

			function $w49() {
				SetCurrentWare(48);
			}

			function $w50() {
				SetCurrentWare(49);
			}

			function $w51() {
				SetCurrentWare(50);
			}

			function $w52() {
				SetCurrentWare(51);
			}

			function $w53() {
				SetCurrentWare(52);
			}

			function $w54() {
				SetCurrentWare(53);
			}

			function $w55() {
				SetCurrentWare(54);
			}

			function $w56() {
				SetCurrentWare(55);
			}
		}
	}

	FileRead: {
		function GetDirectory() {
			var wshShell = new ActiveXObject('WScript.Shell');
			var lnkPath = wshShell.ExpandEnvironmentStrings(
				'%SystemDrive%\\CategoriesDirectory.lnk'
			);
			var objShortcut = wshShell.CreateShortcut(lnkPath);
			return objShortcut.TargetPath;
		}

		function GetInputFilePath() {
			return GetDirectory() + '\\categories.xml';
		}

		function ReadTextFromFile(filePath) {
			var fso = new ActiveXObject('Scripting.FileSystemObject');

			if (!fso.FileExists(filePath)) return null;

			var result = '';

			try {
				var read = fso.OpenTextFile(filePath, 1);
				result = read.ReadAll();
			} catch (e) {
				showMessage(
					'Не удалось загрузить быстрые товары!' +
						'\n' +
						e.name +
						': ' +
						e.message,
					Icon.Error
				);
			} finally {
				try {
					read.Close();
				} catch (e) {}
			}
			return result;
		}
	}

	httpFunctions: {
		function sendHttpRequest(
			uri,
			method,
			data,
			comment,
			documentType,
			delay
		) {
			if (typeof delay == 'undefined' || typeof delay != 'boolean')
				delay = false;

			if (frontol.userValues.get('NoDelay') == '1') delay = false; // нельзя сохранять документы в "отложенных"

			if (typeof documentType == 'undefined') documentType = 0;

			var result = {
				success: false,
				message: '',
				data: ''
			};

			if (!uri) {
				result.message = 'Не указан адрес запроса';
				return result;
			}

			if (!method || (method != 'POST' && method != 'GET')) {
				result.message = 'Некорректный метод запроса';
				return result;
			}

			uri = GetCorrectServerAddress(uri);

			//создаем и обнуляем флаг
			var switchStatus = 0;

			//создаем асинхронный запрос
			var request = new ActiveXObject('Microsoft.XMLHTTP');

			request.open(method, uri, true);
			request.setRequestHeader('Content-Type', 'application/json');
			request.onreadystatechange = function () {
				//пока не будет получен ответ, исполение функции не продолжается
				if (request.readyState != 4) {
					return;
				}
				//сюда мы попали, если ответ получен
				//получаем флаг
				if (request.status == 200) {
					// HTTP 200
					switchStatus = 1;
				} else if (400 < request.status && request.status <= 599) {
					// HTTP codes
					switchStatus = 3;
				} else if (request.status == 400) {
					// HTTP 400
					switchStatus = 4;
				} else if (12000 <= request.status && request.status <= 12175) {
					// IE status codes
					switchStatus = 5;
				} else {
					// unknown
					switchStatus = 6;
				}
			};

			//отправляем запрос
			var requestDateTime = getISODateTimeToString();

			request.send(data);

			var timeoutQuery = 30;

			if (frontol.userValues.get('TimeoutQuery') != '') {
				timeoutQuery = Number(frontol.userValues.get('TimeoutQuery'));
			}

			//ставим таймаут, пока ждем ответа
			for (var i = 1; i <= timeoutQuery; i++) {
				if (request.readyState != 4) {
					frontol.actions.wait(REQUEST_IN_PROCESS_MESSAGE, 1);
				} else {
					break;
				}
			}

			//ждем еще секунду, чтобы onreadystatechange точно отработал до конца
			frontol.actions.wait(REQUEST_IN_PROCESS_MESSAGE, 1);

			var responseDateTime = getISODateTimeToString();

			//если ответ так и не был получен, убиваем запрос, получаем флаг
			if (request.readyState != 4) {
				var requestState = request.readyState;
				request.abort();
				switchStatus = 2;
				responseDateTime = 'Time out';
			}

			//qatest
			if (comment) {
				TestQA(
					uri + '\n' + data,
					request,
					comment,
					requestDateTime,
					responseDateTime
				);
			}

			result.data = switchStatus;

			if (frontol.userValues.get('NoDelay') == '1' && switchStatus > 1) {
				switchStatusReg = 4;
			}

			var SHOW_MAX_LENGTH_STRING = 128;

			//обрабатываем флаг
			switch (switchStatus) {
				//1 - получили 200 - работаем с ответом
				case 1: {
					try {
						if ('responseText' in request && request.responseText) {
							result.data = JSON.parse(request.responseText);
						}
						result.success = true;
					} catch (e) {
						result.message =
							ERROR_MESSAGE + e.name + ': ' + e.message;
					}
					return result;
				}
				//2 - не дождались ответа от сервера - выводим состояние запроса
				case 2: {
					var errorInformation =
						NO_SERVER_RESPONSE_MESSAGE +
						CONTACT_YOUR_TECHNICIAN_MESSAGE +
						HTTP_STATE_MESSAGE +
						requestState +
						CR_MESSAGE;
					if (documentType && delay) {
						frontol.currentDocument.userValues.set('Delay', 1);
						DelayDocument(data, documentType);
						errorInformation += DOCUMENT_WILL_BE_SEND_LATER_MESSAGE;
					}
					result.message = errorInformation;
					return result;
				}
				//3 - получили ошибку - выводим сообщение
				case 3: {
					if (documentType && delay) {
						frontol.currentDocument.userValues.set('Delay', 1);
						DelayDocument(data, documentType);
					}
					var errorInformation =
						SERVER_ERROR_MESSAGE +
						CONTACT_YOUR_TECHNICIAN_MESSAGE +
						OR_MESSAGE +
						CONTACT_SUPPORT_MESSAGE +
						HTTP_CODE_MESSAGE +
						request.status +
						CR_MESSAGE +
						'Адрес запроса: ' +
						uri;

					if ('statusText' in request && request.statusText != '') {
						errorInformation += CR_MESSAGE;

						if (
							request.statusText.length > SHOW_MAX_LENGTH_STRING
						) {
							errorInformation +=
								request.statusText.substring(
									0,
									SHOW_MAX_LENGTH_STRING
								) + '...';
						} else {
							errorInformation += request.statusText;
						}
					}

					errorInformation += CR_MESSAGE;

					if (
						'responseText' in request &&
						request.responseText != ''
					) {
						errorInformation +=
							DESCRIPTION_MESSAGE +
							DecryptServerError(request.responseText) +
							CR_MESSAGE;
					}

					if (documentType && delay) {
						errorInformation += DOCUMENT_WILL_BE_SEND_LATER_MESSAGE;
					}

					result.message = errorInformation;
					return result;
				}
				//4 - другие случаи получения неуспеха - откладываем запрос, выводим сообщение
				case 4: {
					if (documentType && delay) {
						frontol.currentDocument.userValues.set('Delay', 1);
						DelayDocument(data, documentType);
					}

					//формируем сообщение
					var errorInformation = ERROR_MESSAGE;

					if (
						'responseText' in request &&
						request.responseText != ''
					) {
						errorInformation +=
							DESCRIPTION_MESSAGE +
							DecryptServerError(request.responseText) +
							CR_MESSAGE;
					}

					if (documentType && delay) {
						errorInformation += DOCUMENT_WILL_BE_SEND_LATER_MESSAGE;
					}
					result.message = errorInformation;
					return result;
				}
				// 5 - сетевые ошибки на кассе
				case 5: {
					result.message =
						INTERNET_ERROR_MESSAGE +
						CONTACT_YOUR_TECHNICIAN_MESSAGE +
						HTTP_CODE_MESSAGE +
						request.status;
					return result;
				}
				case 6: {
					result.message =
						UNKNOWN_ERROR_MESSAGE +
						CONTACT_SUPPORT_MESSAGE +
						HTTP_CODE_MESSAGE +
						request.status;
					return result;
				}
				//0 - флаг ситуации не изменился, но такого быть не может
				case 0: {
					result.message =
						UNKNOWN_ERROR_MESSAGE + CONTACT_SUPPORT_MESSAGE;
					return result;
				}
			}
		}

		function sendHttpRequestSimple(url, method, data, timeout) {
			result = {
				success: false,
				message: '',
				data: ''
			};

			timeout = timeout || 30

			if (isEmptyValue(url)) {
				result.message = 'Не указан адрес запроса';
				return result;
			}

			if (isEmptyValue(method) || (method != 'POST' && method != 'GET')) {
				result.message = 'Некорректный метод запроса';
				return result;
			}

			if (typeof data != 'string') {
				data = JSON.stringify(data)
			}

			//TODO.
			showMessage('URL (before) ' + url)
			url = GetCorrectServerAddress(url);
			//TODO.
			showMessage('URL (after) ' + url)

			var request = new ActiveXObject('Microsoft.XMLHTTP');
			showMessage('Opening request to ' + url + ' method: ' + method);

			// explicitly set to async = false since some API might not return any response
			// for example FreedomBank terminal API just hungs.
			request.open(method, url, false);
			request.setRequestHeader('Content-Type', 'application/json');

			//TODO.
			showMessage('SENDING data to ' + url)
			request.send(data);

			var startTime = new Date().getTime();
			while (request.readyState != 4) {
				var currentTime = new Date().getTime();
				if (currentTime - startTime > timeout * 1000) {
					// Opps... timeout
					request.abort();
					result.message =
						'Превышено время ожидания ответа от сервера';
					return result;
				}
			}
			
			//TOOD.
			showMessage('GOT RESPONSE ' + request.responseText);

			if (request.status == 200) {
				//TODO.
				showMessage('Got result 200')
				try {
					if ('responseText' in request && request.responseText) {
						result.data = JSON.parse(request.responseText);
					}
					result.success = true;
				} catch (e) {
					result.message = e.message;
				}
			} else {
				result.message = request.responseText;
			}
			return result;
		}
	}

	SyntaxSugar: {
		function showMessage(message, icon, timeOut) {
			if (
				message !== undefined &&
				icon !== undefined &&
				timeOut !== undefined
			) {
				return frontol.actions.showMessage(message, icon, timeOut);
			} else if (message !== undefined && icon !== undefined) {
				return frontol.actions.showMessage(message, icon);
			} else if (message !== undefined) {
				return frontol.actions.showMessage(message);
			} else {
				return frontol.actions.showMessage('Пустое сообщение');
			}
		}

		function showError(message) {
			frontol.actions.showError(message);
		}

		function cancelAct() {
			frontol.actions.cancel();
		}

		function isGlobalValueSet(globalValueName) {
			var globalValue = frontol.userValues.get(globalValueName);

			if (globalValue && globalValue == '1') return true;

			return false;
		}
		//----------------------------------------------------------------------------------------------
		function vSet(ValueName, Value) {
			var dat = frontol.currentDocument.userValues.count;
			//showMessage("Параметров: " + dat);
			frontol.currentDocument.userValues.set(ValueName, Value);
		}
		//----------------------------------------------------------------------------------------------
		function vGet(ValueName) {
			var value = frontol.currentDocument.userValues.get(ValueName);
			return value;
		}
		//----------------------------------------------------------------------------------------------
		function Log(Message) {
			var LogFileName = 'c:\\Frontol_log.txt';
			var fso = new ActiveXObject('Scripting.FileSystemObject');
			var file;

			try {
				file = fso.OpenTextFile(LogFileName, 8, 0); //открыть файл
			} catch (err) {
				file = fso.CreateTextFile(LogFileName, -1, 0); //создать файл, перезаписывая существующий
			}

			file.WriteLine(Message);
			file.Close();
		}
	}

	XmlLibrary: {
		function GetObjFromXml(xmlString) {
			var dom = new ActiveXObject('Microsoft.XMLDOM');
			var isSuccess = dom.loadXML(xmlString);
			return setJsonObj(dom);
		}

		var setJsonObj = function (xml) {
			var js_obj = {};

			if (xml.nodeType == 1) {
				if (xml.attributes.length > 0) {
					js_obj.attributes = {};

					for (var j = 0; j < xml.attributes.length; j++) {
						var attribute = xml.attributes.item(j);

						js_obj['attributes'][attribute.nodeName] =
							attribute.value;
					}
				}
			} else if (xml.nodeType == 3) {
				js_obj = xml.nodeValue;
			}

			if (xml.hasChildNodes()) {
				for (var i = 0; i < xml.childNodes.length; i++) {
					var item = xml.childNodes.item(i);
					var nodeName = item.nodeName;

					if (typeof js_obj[nodeName] == 'undefined') {
						js_obj[nodeName] = setJsonObj(item);
					} else {
						if (typeof js_obj[nodeName].push == 'undefined') {
							var old = js_obj[nodeName];

							js_obj[nodeName] = [];
							js_obj[nodeName].push(old);
						}
						js_obj[nodeName].push(setJsonObj(item));
					}
				}
			}
			return js_obj;
		};
	}

	//Categories END
}

//==========================================================================================================================================================================================
Prop: {
	//ФОРМИРОВАНИЕ ХАРАКТЕРИСТИК
	//ПОЛУЧИТЬ ХАРАКТЕРИСТИКИ ПОЗИЦИИ
	/* pos - позиция*/
	function GetPositionProperties(pos) {
		var result = {};
		var PropertiesSettings = frontol.userValues.get('PropertiesSettings');

		switch (PropertiesSettings) {
			case 'SRT': {
				var sex;

				for (
					pos.ware.parent.index = 1;
					pos.ware.parent.index <= pos.ware.parent.count;
					pos.ware.parent.index++
				) {
					switch (pos.ware.parent.name.toLowerCase()) {
						case 'men': {
							sex = 'm';
							break;
						}
						case 'women': {
							sex = 'w';
							break;
						}
					}
				}
				if (sex != null) result.sex = sex;
			}
		}
		return result;
	}
}
// Работа с тарой
function RxTare() {
	var TARE_USER_VALUE_PREFIX = 'rxTare';
	var tareArray = [];

	this.clear = function clear() {
		var globalUserValuesCount = 0;
		var tareParams = '';

		do {
			globalUserValueName =
				TARE_USER_VALUE_PREFIX + globalUserValuesCount.toString();
			tareParams = frontol.userValues.get(globalUserValueName).toString();

			if (tareParams.length > 0) {
				frontol.userValues.remove(globalUserValueName);
			}

			globalUserValuesCount++;
		} while (tareParams.length > 0);
	};

	this.load = function load(tareObjArray) {
		if (typeof tareObjArray != 'object') {
			return false;
		}

		if (tareObjArray.length == 0) {
			return false;
		}

		var globalUserValuesCount = 0;
		var globalUserValueName = '';

		for (var i = 0; i < tareObjArray.length; i++) {
			var globalUserValueName =
				TARE_USER_VALUE_PREFIX + globalUserValuesCount.toString();
			var tareParamsObj = tareObjArray[i];
			var tareParamsString = '';
			if (
				'GlasswareName' in tareParamsObj &&
				'ProductCode' in tareParamsObj &&
				'BonusReward' in tareParamsObj &&
				'IsActive' in tareParamsObj
			) {
				if (
					typeof tareParamsObj.IsActive == 'boolean' &&
					tareParamsObj.IsActive == true
				) {
					tareParamsString =
						tareParamsObj.GlasswareName +
						'&' +
						tareParamsObj.ProductCode +
						'&' +
						tareParamsObj.BonusReward;
				} else {
					continue;
				}
			} else {
				continue;
			}

			if (tareParamsString.length > 0) {
				frontol.userValues.set(globalUserValueName, tareParamsString);
				globalUserValuesCount++;
			}
		}
	};

	this.read = function read() {
		var globalUserValuesCount = 0;
		var tareParams = '';

		tareArray = [];

		do {
			globalUserValueName =
				TARE_USER_VALUE_PREFIX + globalUserValuesCount.toString();
			tareParams = frontol.userValues.get(globalUserValueName).toString();

			if (tareParams.length > 0) {
				var tareParamsArray = tareParams.split('&');
				var tareParamsArrayLength = tareParamsArray.length;

				if (tareParamsArrayLength == 3) {
					var tareItemParams = {};

					tareItemParams.name = tareParamsArray[0];
					tareItemParams.code = tareParamsArray[1];
					tareItemParams.bonusReward = tareParamsArray[2];
					tareArray.push(tareItemParams);
				}
			}
			globalUserValuesCount++;
		} while (tareParams.length > 0);

		if (tareArray.length > 0) {
			return true;
		} else {
			return false;
		}
	};

	this.findByCode = function findByCode(tareCode) {
		var tareArrayLength = tareArray.length;

		if (tareArrayLength > 0) {
			for (var i = 0; i < tareArrayLength; i++) {
				var tare = {};

				tare = tareArray[i];

				if (tare.code == tareCode) {
					return tare;
				}
			}
		}
		return false;
	};

	this.returnGlassware = function returnGlassware(cardCode, addedTareArray) {
		var processingServerAddress = getServerAddress();

		if (!processingServerAddress) {
			showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		//получаем лицензию
		var license = getLicense();

		if (!license) {
			showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		//получаем токен
		var accessToken = getAccessToken();

		if (!accessToken) {
			showMessage(TOKEN_NOT_SET_MESSAGE, Icon.Error);
			return;
		}

		var result = {
			success: false,
			message: '',
			data: ''
		};

		var tDocumentDiscountDtos = [];

		tDocumentDiscountDtos[0] = {
			CardCode: cardCode
		};

		var tDocumentDetailDtos = [];
		var addedTareArrayLength = addedTareArray.length;

		for (var i = 0; i < addedTareArrayLength; i++) {
			var tare = {};

			tare = addedTareArray[i];
			tDocumentDetailDtos[i] = {
				ProductCode: tare.params.code,
				Quantity: tare.quantity
			};
		}

		//формируем строку для отправки
		var stringToSend = JSON.stringify({
			LicenseGuid: license,
			AccessTokenGuid: accessToken,
			DocumentType: 15,
			DocumentDateTime: getISODateTimeToString(':'),
			DocumentDiscountDtos: tDocumentDiscountDtos,
			DocumentDetailDtos: tDocumentDetailDtos
		});

		result = sendHttpRequest(
			processingServerAddress +
				'/BonusWebApi/api/processing/ReturnGlassware',
			'POST',
			stringToSend,
			'return_glassware'
		);

		if (result.success) {
			var textMessage = '';

			if ('SaleDiscountResponseDtos' in result.data) {
				var saleDiscountResponseDtosLength =
					result.data.SaleDiscountResponseDtos.length;

				for (var i = 0; i < saleDiscountResponseDtosLength; i++) {
					var saleDiscountResponse =
						result.data.SaleDiscountResponseDtos[i];

					if (
						'CardCode' in saleDiscountResponse &&
						'AddBonus' in saleDiscountResponse &&
						'Balance' in saleDiscountResponse
					) {
						var cardCode = saleDiscountResponse.CardCode;
						var addedBonus = saleDiscountResponse.AddBonus;
						var bonusBalance = saleDiscountResponse.Balance;
						textMessage +=
							'Карта: ' +
							cardCode.toString() +
							'\nНачислено бонусов: ' +
							addedBonus.toString() +
							'\nБаланс: ' +
							bonusBalance.toString() +
							'\n';
					} else {
						textMessage = 'Возврат тары прошел успешно!';
					}
				}
			} else {
				textMessage = 'Возврат тары прошел успешно!';
			}
			showMessage(textMessage);
			return true;
		} else {
			showMessage(result.message, Icon.Error);
			return false;
		}
	};
}

function manualInputTare() {
	var tare = new RxTare();

	if (!tare.read()) showError('Справочник тары пуст!');

	var addedTareArray = [];
	var tareCode = '';

	while (tareCode != null) {
		tareCode = frontol.actions.inputString('Введите код тары', '');

		if (tareCode != null && tareCode.length > 0) {
			var foundTare = tare.findByCode(tareCode);

			if (foundTare) {
				var addedTareItem = {};

				addedTareItem.params = {};
				addedTareItem.params = foundTare;

				var tareQuantity = 0;

				while (tareQuantity != null) {
					tareQuantity = frontol.actions.inputString(
						'Введите количество тары',
						''
					);

					if (
						tareQuantity != null &&
						!isNaN(tareQuantity) &&
						tareQuantity == parseInt(tareQuantity, 10) &&
						tareQuantity > 0
					) {
						addedTareItem.quantity = tareQuantity;
						addedTareArray.push(addedTareItem);
						tareQuantity = null;
					} else {
						if (tareQuantity == null) {
							var retryInputTareQuantity = showMessage(
								'Ввод количества тары отменен. Вы хотите повторить ввод количества тары?',
								Icon.Question + Button.YesNo
							);

							if (retryInputTareQuantity == DialogResult.Yes) {
								tareQuantity = '';
							}
						} else {
							showMessage(
								'Количество тары введено некорректно!',
								Icon.Error
							);
						}
					}
				}

				var endInputTare = showMessage(
					'Продолжить ввод тары?',
					Icon.Question + Button.YesNo
				);

				if (endInputTare == DialogResult.No) {
					tareCode = null;

					//_SM("Ввод тары закончен");

					var cardCode = '';

					while (cardCode != null) {
						cardCode = frontol.actions.inputString(
							'Введите код карты',
							''
						);

						if (cardCode != null && cardCode.length > 0) {
							var addedTareText = '';
							var totalBonusReward = 0;

							for (var i = 0; i < addedTareArray.length; i++) {
								var addedTareCode =
									addedTareArray[i].params.code;
								var addedTareName =
									addedTareArray[i].params.name;
								var addedTareQuantity =
									addedTareArray[i].quantity;
								var addedTareBonusReward =
									addedTareArray[i].params.bonusReward;
								var bonusReward =
									addedTareQuantity * addedTareBonusReward;

								totalBonusReward += bonusReward;

								addedTareText +=
									'\n' +
									(i + 1).toString() +
									'. ' +
									addedTareCode +
									', ' +
									addedTareName +
									': ' +
									addedTareQuantity.toString() +
									' шт., ' +
									bonusReward.toString() +
									' бонусов';
							}

							if (addedTareText.length > 0) {
								addedTareText =
									'Была введена тара:\n' +
									addedTareText +
									'\n';
							}

							addedTareText +=
								'\nБыла введена карта: ' + cardCode + '\n';

							var allRight = showMessage(
								addedTareText + '\nВсе данные верны?',
								Icon.Question + Button.YesNo
							);

							if (allRight == DialogResult.Yes) {
								tare.returnGlassware(cardCode, addedTareArray);
								tareCode = null;
								cardCode = null;
							} else {
								tareCode = '';
								cardCode = null;
								addedTareArray = [];
							}
						} else {
							if (cardCode == null) {
								var retryInputCard = showMessage(
									'Ввод карты отменен. Вы хотите повторить ввод номера карты?',
									Icon.Question + Button.YesNo
								);

								if (retryInputCard == DialogResult.Yes) {
									cardCode = '';
								}
							} else {
								showMessage(
									'Код карты введен некорректно!',
									Icon.Error
								);
							}
						}
					}
				}
			} else {
				showMessage(
					'Тара с кодом ' + tareCode + ' не найдена!',
					Icon.Error
				);
			}
		} else {
			if (tareCode == null) {
				var abortInputTare = showMessage(
					'Ввод тары отменен. Вы хотите прекратить ввод тары?',
					Icon.Question + Button.YesNo
				);

				if (abortInputTare == DialogResult.No) {
					tareCode = '';
				}
			} else {
				showMessage('Код тары введен некорректно!', Icon.Error);
			}
		}
	}
}

// МАРКЕТИНГОВЫЕ ПРОГРАММЫ
function RxMarketPrograms() {
	var POSITION_MARKET_PROGRAM_IDS_VALUE_NAME = 'PositionMarketProgramIds';

	var alternativeMarketPrograms = [];
	var selectedMarketPrograms = [];

	var cardNumber = '';
	var phoneNumber = '';

	this.register = function register(serverResponse, phone) {
		if ('CardCode' in serverResponse && serverResponse.CardCode) {
			cardNumber = serverResponse.CardCode;
		}

		if (typeof phone === 'string' && phone) {
			phoneNumber = phone;
		}

		if (
			'AlternativeDiscountDtos' in serverResponse &&
			serverResponse.AlternativeDiscountDtos &&
			serverResponse.AlternativeDiscountDtos.length > 0
		) {
			// получаем общий список доступных альтернативных маркетинговых программ
			getAlternativeMarketPrograms(
				serverResponse.AlternativeDiscountDtos
			);
		}

		if (alternativeMarketPrograms.length > 0) {
			showDialog(); // показываем окно с выбором альтернативных маркетинговых программ

			if (selectedMarketPrograms.length > 0) {
				//  если выбрали какие-то программы
				if (
					'RegisterDetailResponseDtos' in serverResponse &&
					serverResponse.RegisterDetailResponseDtos &&
					serverResponse.RegisterDetailResponseDtos.length > 0
				) {
					// обновляем маркетинговую программу для позиций если процент скидки выбранной альтернативной программы больше
					serverResponse.RegisterDetailResponseDtos =
						updateMarketPrograms(
							serverResponse.RegisterDetailResponseDtos
						);
				}
			}
		}
		this.savePositionsMarketPrograms(serverResponse); // записываем маркетинговые программы позиций в св-ва документа
		return serverResponse;
	};
	// обновляем JSON ответа
	// если были выбраны маркетинговые акции - применяем акцию с максимальной скидкой
	var updateMarketPrograms = function updateMarketPrograms(
		registerDetailResponseDtos
	) {
		for (var i = 0; i < registerDetailResponseDtos.length; i++) {
			var registerDetailResponseDto = registerDetailResponseDtos[i];

			if (
				'AlternativeDiscountDtos' in registerDetailResponseDto &&
				registerDetailResponseDto.AlternativeDiscountDtos &&
				registerDetailResponseDto.AlternativeDiscountDtos.length > 0
			) {
				var maxMarketProgram = {
					id: 0,
					discount: 0.0
				};

				for (
					var j = 0;
					j <
					registerDetailResponseDto.AlternativeDiscountDtos.length;
					j++
				) {
					var alternativeDiscountDto =
						registerDetailResponseDto.AlternativeDiscountDtos[j];

					if (
						'MarketProgramId' in alternativeDiscountDto &&
						alternativeDiscountDto.MarketProgramId &&
						!isNaN(
							parseInt(
								alternativeDiscountDto.MarketProgramId,
								10
							)
						) &&
						Number(alternativeDiscountDto.MarketProgramId) > 0 &&
						'Discount' in alternativeDiscountDto &&
						alternativeDiscountDto.Discount &&
						!isNaN(parseFloat(alternativeDiscountDto.Discount)) &&
						Number(alternativeDiscountDto.Discount) > 0
					) {
						// ищем максимальную скидку среди выбранных маркетинговых программ и доступных альтернативных для данной позиции
						for (
							var k = 0;
							k < selectedMarketPrograms.length;
							k++
						) {
							if (
								selectedMarketPrograms[k] ==
								alternativeDiscountDto.MarketProgramId
							) {
								if (
									alternativeDiscountDto.Discount >
									maxMarketProgram.discount
								) {
									maxMarketProgram.id =
										alternativeDiscountDto.MarketProgramId;
									maxMarketProgram.discount =
										alternativeDiscountDto.Discount;
								}
							}
						}
						// если скидка на позицию мешьше чем максимальная из выбранных альтернативных маркетинговых программ
						if (
							'Discount' in registerDetailResponseDto &&
							registerDetailResponseDto.Discount.toString() &&
							!isNaN(
								parseFloat(registerDetailResponseDto.Discount)
							)
						) {
							if (
								'MarketProgramId' in
									registerDetailResponseDto &&
								registerDetailResponseDto.MarketProgramId.toString() &&
								!isNaN(
									parseInt(
										registerDetailResponseDto.MarketProgramId,
										10
									)
								)
							) {
								if (
									registerDetailResponseDto.MarketProgramId !=
										maxMarketProgram.id &&
									registerDetailResponseDto.Discount <
										maxMarketProgram.discount
								) {
									registerDetailResponseDto.MarketProgramId =
										maxMarketProgram.id;
									registerDetailResponseDto.Discount =
										maxMarketProgram.discount;
									registerDetailResponseDtos[i] =
										registerDetailResponseDto;
								}
							}
						}
					}
				}
			}
		}

		return registerDetailResponseDtos;
	};
	// получаем массив id альтернативных маркетинговых программ
	var getAlternativeMarketPrograms = function getAlternativeMarketPrograms(
		alternativeDiscountDtos
	) {
		for (var i = 0; i < alternativeDiscountDtos.length; i++) {
			var alternativeDiscountDto = alternativeDiscountDtos[i];

			if (
				'MarketProgramId' in alternativeDiscountDto &&
				alternativeDiscountDto.MarketProgramId &&
				!isNaN(parseInt(alternativeDiscountDto.MarketProgramId, 10)) &&
				Number(alternativeDiscountDto.MarketProgramId) > 0 &&
				'MarketProgramName' in alternativeDiscountDto &&
				alternativeDiscountDto.MarketProgramName &&
				alternativeDiscountDto.MarketProgramName.length > 0 &&
				'Discount' in alternativeDiscountDto &&
				alternativeDiscountDto.Discount &&
				Number(alternativeDiscountDto.Discount) > 0
			) {
				alternativeMarketPrograms.push(alternativeDiscountDto);
			}
		}
	};
	// создаем списки параметров альтернативных маркетинговых программ для показа в окне выбора
	var getAlternativeMarketProgramParams =
		function getAlternativeMarketProgramNames() {
			var params = {
				names: '',
				ids: ''
			};

			for (var i = 0; i < alternativeMarketPrograms.length; i++) {
				if (params.names.length > 0) {
					params.names += '\n';
				}
				params.names +=
					alternativeMarketPrograms[i].MarketProgramName +
					', скидка ' +
					alternativeMarketPrograms[i].Discount +
					'%';

				if (params.ids.length > 0) {
					params.ids += '\n';
				}
				params.ids +=
					alternativeMarketPrograms[i].MarketProgramId.toString();
			}

			return params;
		};
	// удаляем альтернативную маркетинговую программу из массива если она была указана в окне выбора
	var removeAlternativeMarketProgramIndexById =
		function removeAlternativeMarketProgramIndexById(marketProgramId) {
			for (var i = 0; i < alternativeMarketPrograms.length; i++) {
				if (
					marketProgramId ==
					alternativeMarketPrograms[i].MarketProgramId
				) {
					alternativeMarketPrograms.splice(i, 1);
					return;
				}
			}
		};
	// окно диалога выбора альтернативной маркетинговой программы
	var showDialog = function showDialog() {
		var selectedMarketProgramId = null;
		var params = getAlternativeMarketProgramParams();

		do {
			selectedMarketProgramId = frontol.actions.selectString(
				SELECT_AVAILABLE_DISCOUNTS_MESSAGE,
				params.names,
				params.ids
			);

			if (Number(selectedMarketProgramId) > 0) {
				var pressedButton = showMessage(
					getMarketProgramMessage(selectedMarketProgramId),
					Icon.Question + Button.YesNo
				);

				if (pressedButton === DialogResult.Yes) {
					// если регистрация была по номеру телефона - проверяем правомерность использования через код подтверждения
					if (
						phoneNumber &&
						frontol.userValues.get('ConfirmRegisterPhoneNumber') ==
							'1'
					) {
						var smsPrice = sendConfirmCodeAndSaleSms(
							cardNumber,
							phoneNumber
						);

						if (smsPrice === false) {
							showMessage(CARD_USING_NOT_CONFIRMED, Icon.Error);
							break;
						}
					}
					removeAlternativeMarketProgramIndexById(
						selectedMarketProgramId
					);
					selectedMarketPrograms.push(selectedMarketProgramId);
					params = getAlternativeMarketProgramParams();
				} else {
					break;
				}
			}
		} while (
			selectedMarketProgramId !== null &&
			alternativeMarketPrograms.length > 0
		);
	};
	// возвращает сообщение для окна подтверждения выбора маркетинговой программы
	var getMarketProgramMessage = function getMarketProgramMessage(programId) {
		var defaultMessage = 'Использовать фишки для получения скидки?';

		for (var i = 0; i < alternativeMarketPrograms.length; i++) {
			var marketProgram = alternativeMarketPrograms[i];

			if (programId == marketProgram.MarketProgramId) {
				if (
					'ConfirmMessage' in marketProgram &&
					marketProgram.ConfirmMessage
				) {
					return marketProgram.ConfirmMessage;
				}
			}
		}

		return defaultMessage;
	};
	// возвращает массив маркетинговых программ для позиции
	this.getPositionMarketProgram = function getPositionMarketProgram(
		positionId
	) {
		var marketProgramIds = frontol.currentDocument.userValues.get(
			POSITION_MARKET_PROGRAM_IDS_VALUE_NAME
		);

		if (marketProgramIds.length > 0) {
			var marketProgramIdArray = marketProgramIds.split(';');

			for (var i = 0; i < marketProgramIdArray.length; i++) {
				var positionMarketProgramIdArray =
					marketProgramIdArray[i].split('&');

				var id = Number(positionMarketProgramIdArray[0]);

				if (id === Number(positionId)) {
					return positionMarketProgramIdArray;
				}
			}
		}

		return false;
	};
	// сериализация массива объектов в стороку
	var serializingToString = function serializingUserValue(objectsArray) {
		var resultString = '';

		for (var i = 0; i < objectsArray.length; i++) {
			var obj = objectsArray[i];

			if (
				'positionId' in obj &&
				'marketProgramId' in obj &&
				'marketProgramIsForced' in obj
			) {
				if (resultString) resultString += ';';

				resultString +=
					obj.positionId +
					'&' +
					obj.marketProgramId +
					'&' +
					(obj.marketProgramIsForced ? 1 : 0);
			}
		}
		return resultString;
	};
	// десериализация строки в массив объектов
	var deserializingFromString = function deserializingUserValue(str) {
		var stringsArray = str.split(';');
		var objectsArray = [];

		for (var i = 0; i < stringsArray.length; i++) {
			var fieldsArray = stringsArray[i].split('&');
			var obj = {};

			if (fieldsArray.length >= 3) {
				obj.positionId = Number(fieldsArray[0]);
				obj.marketProgramId = Number(fieldsArray[1]);
				obj.marketProgramIsForced =
					Number(fieldsArray[2]) === 1 ? true : false;

				objectsArray.push(obj);
			}
		}
		return objectsArray;
	};
	// добавляет новое значение в список значений в пользовательской переменной
	var saveUserValue = function saveUserValue(userValueName, newObjectsArray) {
		var doc = frontol.currentDocument;
		var savedObjectsArray = deserializingFromString(
			doc.userValues.get(userValueName)
		);

		if (savedObjectsArray.length > 0) {
			for (var i = 0; i < savedObjectsArray.length; i++) {
				var savedObject = savedObjectsArray[i];
				var foundPosition = false;

				for (var j = 0; j < newObjectsArray.length; j++) {
					var newObject = newObjectsArray[j];

					if (savedObject.positionId == newObject.positionId) {
						foundPosition = true;

						if (newObject.marketProgramId != 0) {
							savedObject.marketProgramId =
								newObject.marketProgramId;
							savedObject.marketProgramIsForced =
								newObject.marketProgramIsForced;
						}
					}
				}
				if (!foundPosition) {
					savedObjectsArray.push(newObject);
				}
			}
			doc.userValues.set(
				userValueName,
				serializingToString(savedObjectsArray)
			);
		} else {
			doc.userValues.set(
				userValueName,
				serializingToString(newObjectsArray)
			); // пишем новое значение если нет предыдущего
		}
	};
	// записывает маркетинговые программы в пользовательскую переменную в формате positionIndex&marketProgramId&marketProgramIsForced
	this.savePositionsMarketPrograms = function savePositionsMarketPrograms(
		serverResponse
	) {
		if (
			'RegisterDetailResponseDtos' in serverResponse &&
			serverResponse.RegisterDetailResponseDtos &&
			serverResponse.RegisterDetailResponseDtos.length > 0
		) {
			var registerDetailResponseDtos =
				serverResponse.RegisterDetailResponseDtos;
			var positionsMarketPrograms = [];

			for (var i = 0; i < registerDetailResponseDtos.length; i++) {
				var registerDetailResponseDto = registerDetailResponseDtos[i];
				var positionMarketProgram = {};

				if (
					'PositionId' in registerDetailResponseDto &&
					registerDetailResponseDto.PositionId &&
					registerDetailResponseDto.PositionId.toString().length >
						0 &&
					!isNaN(
						parseInt(registerDetailResponseDto.PositionId, 10)
					) &&
					Number(registerDetailResponseDto.PositionId) > 0 &&
					'MarketProgramId' in registerDetailResponseDto
				) {
					positionMarketProgram.positionId = Number(
						registerDetailResponseDto.PositionId
					);
					positionMarketProgram.marketProgramId = Number(
						registerDetailResponseDto.MarketProgramId
					);
					positionMarketProgram.marketProgramIsForced = 0;

					if (
						'MarketProgramIsForced' in registerDetailResponseDto &&
						typeof registerDetailResponseDto.MarketProgramIsForced ===
							'boolean' &&
						registerDetailResponseDto.MarketProgramIsForced
					) {
						positionMarketProgram.marketProgramIsForced = 1;
					}
					positionsMarketPrograms.push(positionMarketProgram);
				}
			}
			if (positionsMarketPrograms.length > 0)
				saveUserValue(
					POSITION_MARKET_PROGRAM_IDS_VALUE_NAME,
					positionsMarketPrograms
				);
		}
	};
}
// идентификатор товара - код
function isCodeWareId() {
	var wareIdIsCode = frontol.userValues.get('WareIdIsCode').trim();

	if (wareIdIsCode && wareIdIsCode == '1') return true;

	return false;
}

function getClientUUID() {
	return frontol.userValues.get('ClientUUID').trim();
}

function getDateToString(separator) {
	if (typeof separator == 'undefined' || typeof separator != 'string')
		separator = '';

	var dateTime = new Date();
	var dateTimeYear = dateTime.getFullYear();
	var dateTimeMonth =
		dateTime.getMonth() + 1 <= 9
			? '0' + (dateTime.getMonth() + 1).toString()
			: (dateTime.getMonth() + 1).toString();
	var dateTimeDate =
		dateTime.getDate() <= 9
			? '0' + dateTime.getDate().toString()
			: dateTime.getDate().toString();

	return dateTimeYear + separator + dateTimeMonth + separator + dateTimeDate;
}

function manualScanQRCode(qrCode) {
	//var qrCode = frontol.actions.inputString("Отсканируйте QR-код из мобильного приложения", "");

	if (!qrCode) showError('QR-код пуст!');

	var rxTools = new RxTools();

	var textDecoded = rxTools.decode(qrCode);

	if (!textDecoded || textDecoded.length < 15)
		showError('Данный QR-код не может быть расшифрован!');

	var cardCode = textDecoded.slice(0, -12);
	var dateTime = textDecoded.slice(-12);

	var dateTimeYear = dateTime.slice(0, 4);
	var dateTimeMonth = dateTime.slice(4, 6);
	var dateTimeDay = dateTime.slice(6, 8);
	var dateTimeHours = dateTime.slice(8, 10);
	var dateTimeMinutes = dateTime.slice(10);

	var qrCodeDateTime = new Date(
		dateTimeYear,
		dateTimeMonth - 1,
		dateTimeDay,
		dateTimeHours,
		dateTimeMinutes
	);
	var qrCodeTimestamp = qrCodeDateTime.getTime();

	qrCodeTimestamp = (qrCodeTimestamp - (qrCodeTimestamp % 1000)) / 1000;

	var currentDateTime = new Date();
	var currentTimestamp = currentDateTime.getTime();

	currentTimestamp = (currentTimestamp - (currentTimestamp % 1000)) / 1000;

	var leftTime = Math.abs(currentTimestamp - qrCodeTimestamp);
	var leftHours = leftTime / 3600;

	/*_SM("Номер карты " + cardCode + "\n" +
        "Дата и время " + qrCodeDateTime + "\n" +
        "Timestamp " + qrCodeTimestamp + "\n" +
        "Current date " + currentDateTime + "\n" +
        "Current timestamp " + currentTimestamp + "\n" +
        "Left hours " + leftHours
    );*/

	if (leftHours > 1) showError('Данный QR-код устарел!');

	if (cardCode) {
		return cardCode;
	} else {
		showError('Номер карты не удалось расшифровать!');
	}
}

function RxTools() {
	var bodoKey = '6550741701143892072778356';

	var bodoCodeToChar = [];

	bodoCodeToChar[22] = '0';
	bodoCodeToChar[23] = '1';
	bodoCodeToChar[19] = '2';
	bodoCodeToChar[1] = '3';
	bodoCodeToChar[10] = '4';
	bodoCodeToChar[16] = '5';
	bodoCodeToChar[21] = '6';
	bodoCodeToChar[7] = '7';
	bodoCodeToChar[6] = '8';
	bodoCodeToChar[24] = '9';

	var bodoCharToCode = {};

	bodoCharToCode['0'] = 22;
	bodoCharToCode['1'] = 23;
	bodoCharToCode['2'] = 19;
	bodoCharToCode['3'] = 1;
	bodoCharToCode['4'] = 10;
	bodoCharToCode['5'] = 16;
	bodoCharToCode['6'] = 21;
	bodoCharToCode['7'] = 7;
	bodoCharToCode['8'] = 6;
	bodoCharToCode['9'] = 24;

	this.decode = function decode(data) {
		// remove \n and \r special symbols
		data = data.replace(/\n/g, '');
		data = data.replace(/\r/g, '');

		var textEncoded = base32_decode(data);

		if (textEncoded.length > bodoKey.length) {
			return '';
		}

		//bodoEncodedKey = bodoEncode(bodoKey);
		var bodoEncodedKey = bodoKey;

		var xorChars = [];

		for (var i = 0; i < textEncoded.length; i++) {
			var charCode1 = textEncoded.charCodeAt(i);
			var charCode2 = bodoEncodedKey.charCodeAt(i);
			var charCode = charCode1 ^ charCode2;
			xorChars.push(String.fromCharCode(charCode));
		}

		//var textDecoded = bodoDecode(xorChars);
		var textDecoded = xorChars.join('');
		return textDecoded;
	};

	var bodoDecode = function (bytes) {
		var textDecoded = [];

		for (var i = 0; i < bytes.length; i++) {
			textDecoded.push(bodoCodeToChar[bytes[i]]);
		}

		return textDecoded.join('');
	};

	var bodoEncode = function (text) {
		var bytes = [];

		for (var i = 0; i < text.length; i++) {
			bytes.push(bodoCharToCode[text[i]]);
		}

		return bytes;
	};

	var base32_decode = function base32_decode(s) {
		var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
		var pad = '=';

		var len = s.length;
		var apad = a + pad;
		var v,
			x,
			r = 0,
			bits = 0,
			c,
			o = '';

		s = s.toUpperCase();

		for (i = 0; i < len; i++) {
			v = apad.indexOf(s.charAt(i));
			if (v >= 0 && v < 32) {
				x = (x << 5) | v;
				bits += 5;
				if (bits >= 8) {
					c = (x >> (bits - 8)) & 0xff;
					o = o + String.fromCharCode(c);
					bits -= 8;
				}
			}
		}
		// remaining bits are < 8
		if (bits > 0) {
			c = ((x << (8 - bits)) & 0xff) >> (8 - bits);
			// Don't append a null terminator.
			// See the comment at the top about why this sucks.
			if (c !== 0) {
				o = o + String.fromCharCode(c);
			}
		}
		return o;
	};

	var base64_decode = function (data) {
		// Decodes data encoded with MIME base64
		//
		// +   original by: Tyler Akins (http://rumkin.com)

		var b64 =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
		var o1,
			o2,
			o3,
			h1,
			h2,
			h3,
			h4,
			bits,
			i = 0,
			enc = '';

		do {
			// unpack four hexets into three octets using index points in b64
			h1 = b64.indexOf(data.charAt(i++));
			h2 = b64.indexOf(data.charAt(i++));
			h3 = b64.indexOf(data.charAt(i++));
			h4 = b64.indexOf(data.charAt(i++));

			bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;

			o1 = (bits >> 16) & 0xff;
			o2 = (bits >> 8) & 0xff;
			o3 = bits & 0xff;

			if (h3 == 64) enc += String.fromCharCode(o1);
			else if (h4 == 64) enc += String.fromCharCode(o1, o2);
			else enc += String.fromCharCode(o1, o2, o3);
		} while (i < data.length);

		return enc;
	};
}

// BEGIN SECOND MONITOR CLASS
function RxFrontolToSecondMonitor() {
	var fso = null;
	var chequeFile = 'cheque.txt';
	var registerInfo = '';

	var result = {
		data: false,
		message: ''
	};

	this.addRegisterInfo = function addRegisterInfo(result) {
		registerInfo = result;
	};

	this.deleteRegisterInfo = function deleteRegisterInfo() {
		registerInfo = '';
	};

	var clearResult = function clearResult() {
		result.data = false;
		result.message = '';
	};

	var initFso = function initFso() {
		var axObjectName = 'Scripting.FileSystemObject';

		clearResult();

		try {
			var fso = new ActiveXObject(axObjectName);
			result.data = fso;
		} catch (e) {
			result.message = 'Невозможно создать объект ' + axObjectName;
		}
		return result;
	};

	var initStream = function initStream() {
		var axObjectName = 'ADODB.Stream';

		clearResult();

		try {
			var stream = new ActiveXObject(axObjectName);
			stream.Type = 2;
			stream.Charset = 'utf-8';
			stream.Open();
			result.data = stream;
		} catch (e) {
			result.message = 'Невозможно создать объект ' + axObjectName;
		}
		return result;
	};

	this.deleteCheque = function deleteCheque() {
		clearResult();

		if (fso) {
			if (fso.FileExists(chequeFile)) {
				try {
					fso.DeleteFile(chequeFile);
					result.data = true;
				} catch (e) {
					result.message = 'Невозможно удалить файл ' + chequeFile;
				}
			} else {
				result.data = true;
			}
		}

		return result;
	};

	this.updateCheque = function updateCheque(document) {
		clearResult();

		if (fso && isSaleDocument(document)) {
			if (this.deleteCheque().data) {
				var stream = null;

				try {
					stream = initStream().data;

					if (stream) {
						result.data = true;
					}
				} catch (e) {
					result.message = 'Невозможно создать файл ' + chequeFile;
				}

				if (stream) {
					clearResult();

					//var documentText = getDocumentText(document).join("\r\n"); // CR+LF
					var documentText = getDocumentText(document);
					//documentText += "\r\n";

					try {
						stream.WriteText(documentText);
						stream.Flush();
						stream.Position = 0;
						stream.SaveToFile(chequeFile);
						result.data = true;
					} catch (e) {
						result.message =
							'Невозможно записать в файл ' + chequeFile;
					}
				}

				if (result.data) {
					clearResult();

					try {
						stream.Close();
						result.data = true;
					} catch (e) {
						result.message =
							'Невозможно закрыть файл ' + chequeFile;
					}
				}
			}
		}
		return result;
	};

	var getDocumentText = function getDocumentText(doc) {
		//получаем токен
		var token = getAccessToken();

		//флаг добавочной карты
		var isAdditionalCard = false;

		if (frontol.currentDocument.userValues.get('FirstCardNumber') != '') {
			isAdditionalCard = true;
		}

		//получаем массив позиций со стоимостью
		var tRegisterDetailDtos = [];

		var registerDetailDtos = [];
		var numberInArray = 0;
		//doc.position.count возвращает кол-во позиций с учетом сторнированных
		for (
			doc.position.index = 1;
			doc.position.index <= doc.position.count;
			doc.position.index++
		) {
			//если позиция не сторнирована
			if (doc.position.storno == 0) {
				registerDetailDtos[numberInArray] = {
					ProductCode:
						frontol.userValues.get('WareMarkPrefix') +
						(isCodeWareId()
							? doc.position.ware.code.toString()
							: doc.position.ware.mark),
					ProductName: doc.position.ware.name,
					TotalPrice: Number(doc.position.sum).round(2),
					TotalPriceDiscounted: Number(doc.position.totalSum).round(
						2
					),
					Discount: Number(doc.position.totalSumDiscount).round(2),
					PositionId: doc.position.id,
					Count: doc.position.quantity
				};
				numberInArray++;
			}
		}

		var mainParamsToSend = {
			AccessTokenGuid: token,
			CardRegisterDateTime: getISODateTimeToString(':', ' '),
			TotalPrice: Number(doc.sum).round(2),
			TotalPriceDiscounted: Number(doc.totalSum).round(2)
		};

		tRegisterDetailDtos = registerDetailDtos;

		var clientChipInfoString = doc.userValues.get('clientChipInfo');
		var clientChipInfoArray = [];

		if (clientChipInfoString.length > 6) {
			var clientChipInfoStrings = clientChipInfoString.split('&');

			if (clientChipInfoStrings.length == 4) {
				var clientChipInfo = {
					MarketProgramId: clientChipInfoStrings[0],
					MarketProgramName: clientChipInfoStrings[1],
					AddChip: clientChipInfoStrings[2],
					Balance: clientChipInfoStrings[3]
				};

				clientChipInfoArray.push(clientChipInfo);
				mainParamsToSend.ChipInfo = clientChipInfoArray;
			}
		}

		if (registerInfo) {
			if ('CardCode' in registerInfo && registerInfo.CardCode) {
				mainParamsToSend.CardCode = registerInfo.CardCode;
			}

			if (
				'ClientChipsInfos' in registerInfo &&
				registerInfo.ClientChipsInfos
			) {
				mainParamsToSend.ClientChipsInfos =
					registerInfo.ClientChipsInfos;
			}
		}

		mainParamsToSend.RegisterDetails = tRegisterDetailDtos;

		//формируем строку для отправки
		return JSON.stringify(mainParamsToSend);
	};

	fso = initFso().data;
	createFullPath(fso, RX_LOYALTY_DIRECTORY_FRONTOL + '\\sm');
	chequeFile = RX_LOYALTY_DIRECTORY_FRONTOL + '\\sm\\' + chequeFile;
}
// END SECOND MONITOR CLASS

function clearStatFiles() {
	var fso = new ActiveXObject('Scripting.FileSystemObject');
	var path = RX_LOYALTY_DIRECTORY_FRONTOL + '\\stat';

	if (fso.FolderExists(path)) {
		var folder = fso.GetFolder(path);
		var files = new Enumerator(folder.Files);
		var dateNow = new Date();

		for (; !files.atEnd(); files.moveNext()) {
			var file = files.item();
			var dateCreated = new Date(file.DateCreated);
			var passedDays = Math.round(
				(dateNow - dateCreated) / 1000 / 60 / 60 / 24
			);

			if (passedDays >= 60) {
				try {
					fso.DeleteFile(file.Path);
				} catch (e) {
					showMessage(e.message, Icon.Error);
				}
			}
		}
	}
}
// документ-приход товара
function isReceiptDocument(doc) {
	if (getClientUUID() == 'E97FC591-1DC1-472C-AA47-070A8E93954B') {
		if (doc.type.operation === 14 && doc.type.code === 27) return true;
	} else {
		if (doc.type.operation === 14) return true;
	}

	return false;
}
// документ-продажа
function isSaleDocument(doc) {
	if (doc.type.operation == 0) return true;

	return false;
}
// документ-возврат
function isReturnDocument(doc) {
	if (doc.type.operation == 1) return true;

	return false;
}
// документ-внесение
function isVnesenieDocument(doc) {
	return doc.type.operation === 4;
}

function isExcisableWare(ware) {
	if (ware.type == 1 || ware.type == 4 || ware.type == 2) return true;

	return false;
}

function useFrontolDiscountOnly() {
	if (Number(frontol.userValues.get('UseFrontolDiscountOnly')) == 1)
		return true;

	return false;
}

function isDebugMode() {
	if (isGlobalValueSet('RxLoyaltyDebugging')) return true;

	return false;
}

function getServerAddress() {
	return frontol.userValues.get('ServerAddress').trim();
}

function getLicense() {
	return frontol.userValues.get('License').trim();
}

function getAccessToken() {
	return frontol.userValues.get('AccessToken').trim();
}

function findRegisteredAccountType(doc, accType) {
	var accountTypesString = doc.userValues.get('cardBoxAccountTypes');

	if (accountTypesString) {
		var accountTypesArray = accountTypesString.split(';');

		for (var i = 0; i < accountTypesArray.length; i++) {
			var accountType = Number(accountTypesArray[i]);

			if (!isNaN(accountType) && accountType == accType) return true;
		}
	}

	return false;
}

function forbidAlco(pos) {
	var now = new Date();
	var hour = now.getHours();

	if (hour >= 21 || hour < 12) {
		var groupFlag = 0;

		for (
			pos.ware.parent.index = 1;
			pos.ware.parent.index <= pos.ware.parent.count;
			pos.ware.parent.index++
		) {
			if (pos.ware.parent.mark == 24) groupFlag = 1;
		}

		if (groupFlag == 1) {
			showMessage(
				'С 21.00 до 12.00 продажа алкогольной продукции запрещена!'
			);
			cancelAct();
		}
	}

	if (hour >= 23 || hour < 8) {
		groupFlag = 0;

		for (
			pos.ware.parent.index = 1;
			pos.ware.parent.index <= pos.ware.parent.count;
			pos.ware.parent.index++
		) {
			if (pos.ware.parent.mark == 44 || pos.ware.parent.mark == 47)
				groupFlag = 1;
		}

		if (groupFlag == 1) {
			showMessage('С 23.00 до 8.00 продажа запрещена!');
			cancelAct();
		}
	}
}

function is18YearsOld() {
	if (frontol.currentDocument.userValues.get('is18YearsOld') == '0') {
		showMessage(
			'ПОКУПАТЕЛЬ  НЕ  ПРОШЕЛ ПРОВЕРКУ, ДАННУЮ КАТЕГОРИЮ ТОВАРА НЕЛЬЗЯ ДОБАВИТЬ!',
			Icon.Exclamation
		);
		return false;
	}

	if (frontol.currentDocument.userValues.get('is18YearsOld') == '1') {
		return true;
	}

	var inputText = '';
	var inputError = false;

	var dayOfBirth = '';
	var monthOfBirth = '';
	var yearOfBirth = '';

	var dtNow = new Date();
	var currentYear = dtNow.getUTCFullYear();

	do {
		inputError = false;
		//запрос данных с помощью диалога ввода
		inputText = frontol.actions.inputString(
			'ВНИМАНИЕ!!!' +
				CR_MESSAGE +
				'ЗАПРЕТ ПРОДАЖИ АЛКОГОЛЯ И ТАБАКА ЛИЦАМ, НЕ ДОСТИГШИМ 18 ЛЕТ.' +
				CR_MESSAGE +
				'ВВЕДИТЕ ДАТУ РОЖДЕНИЯ В ФОРМАТЕ ДДММГГГГ' +
				CR_MESSAGE +
				'(ДЕНЬ МЕСЯЦ ГОД, ТОЛЬКО ЦИФРЫ, НАПРИМЕР 31072000)',
			''
		);

		//если пользователь нажал «Отмена» или ввел пустую строку,
		//выводится сообщение об ошибке
		if (
			inputText == null ||
			inputText == '' ||
			inputText.length < 8 ||
			isNaN(inputText) ||
			inputText.search(/^[0-9]{8}$/) === -1
		) {
			inputError = true;
			showMessage(
				'Вы не ввели значение или значение неправильное!\n(ДЕНЬ МЕСЯЦ ГОД)-31072000',
				Icon.Error
			);
			continue;
		}

		yearOfBirth = inputText.substring(4, 8);
		monthOfBirth = inputText.substring(2, 4) - 1;
		dayOfBirth = inputText.substring(0, 2);

		yearOfBirth = Number(yearOfBirth);
		monthOfBirth = Number(monthOfBirth);
		dayOfBirth = Number(dayOfBirth);

		if (yearOfBirth < 1870 || yearOfBirth > currentYear) {
			showMessage('Вы неправильно ввели год рождения!', Icon.Error);
			inputError = true;
			continue;
		}

		if (monthOfBirth > 11) {
			showMessage('Вы неправильно ввели месяц рождения!', Icon.Error);
			inputError = true;
			continue;
		}

		if (dayOfBirth > 31) {
			showMessage('Вы неправильно ввели число рождения!', Icon.Error);
			inputError = true;
			continue;
		}
		//повторяется запрос данных, пока не будет введенно корректное значение
	} while (inputError);

	//далее располагается код, использующий введенное значение
	var dtOfBirth = new Date(yearOfBirth, monthOfBirth, dayOfBirth, 0, 0, 0);

	var ageDifMs = dtNow.getTime() - dtOfBirth.getTime();
	var ageDate = new Date(ageDifMs);
	var years = Math.abs(ageDate.getUTCFullYear() - 1970);

	if (years < 18) {
		showMessage('ПОКУПАТЕЛЮ НЕ ИСПОЛНИЛОСЬ 18 ЛЕТ!!!', Icon.Exclamation);
		frontol.currentDocument.userValues.set('is18YearsOld', '0');
		return false;
	}

	frontol.currentDocument.userValues.set('is18YearsOld', '1');
	return true;
}

function hasPaymentOfType(qrPaymentType) {
	for (
		frontol.currentDocument.payment.index = 1;
		frontol.currentDocument.payment.index <=
		frontol.currentDocument.payment.count;
		frontol.currentDocument.payment.index++
	) {
		if (frontol.currentDocument.payment.type.code === qrPaymentType)
			return true;
	}
	return false;
}

function getPaymentOfType(doc, qrPaymentType) {
	for (
		doc.payment.index = 1;
		doc.payment.index <= doc.payment.count;
		doc.payment.index++
	) {
		if (doc.payment.type.code === qrPaymentType) return doc.payment;
	}
	return null;
}
//ПРОЦЕССИНГ END
//==========================================================================================================================================================================================
//Алиф Сармоя
//==========================================================================================================================================================================================

var FRONTOL_ADMIN_PROFILE_CODES = [1, 2]; //Коды пользовательских профилей которым разрешено активировать админку Алиф платежей. Ex: 1 - это 'Системный администратор'
var FRONTOL_DB_PATH = 'D:\\Torgovlya\\MAIN.GDB';
var JetQrPay;

function JetQrPayInit() {
	frontol.addEventListener('addPayment', 'JetQrBeforeAddPayment', true);
	frontol.addEventListener(
		'cancelDocument',
		'JetQrAfterCancelDocument',
		false
	);
}

var JET_QR = 200;
var ALIF_QR = 201;
var ALIF_SALOM = 202;
var ESKHATA_QR = 203;
var HUMO_QR = 204;
var IBT = 205;
var DC_QR = 206;

function _isCommonQRPayment(frontolPayment) {
	return (
		frontolPayment.type.code === JET_QR ||
		frontolPayment.type.code === ALIF_QR ||
		frontolPayment.type.code === ALIF_SALOM ||
		frontolPayment.type.code === ESKHATA_QR ||
		frontolPayment.type.code === HUMO_QR ||
		frontolPayment.type.code === IBT
	);
}

function JetQrBeforeAddPayment(frontolPayment) {
	if (_isCommonQRPayment(frontolPayment) === false) {
		return;
	}

	var paymentNumber = frontolPayment.number;
	var documentNumber = frontol.currentDocument.number;
	var sessionNumber = frontol.sessionNumber;
	var terminalId = frontol.codeWorkplace;
	var amount = frontolPayment.sumInBaseCurrency;
	var paymentTime = frontol.currentDocument.timeOpen;

	var frontolPaymentData =
		"{FrontolPaymentId:'" +
		paymentNumber +
		"', FrontolPaymentDocumentId:'" +
		documentNumber +
		"', FrontolPaymentSessionId:'" +
		sessionNumber +
		"', FrontolPaymentTerminalId:'" +
		terminalId +
		"', FrontolPaymentAmount:" +
		amount +
		", FrontolPaymentTime:'" +
		paymentTime +
		"'},";

	var frontolPaymentProducts = '';
	for (
		frontol.currentDocument.position.index = 1;
		frontol.currentDocument.position.index <=
		frontol.currentDocument.position.count;
		frontol.currentDocument.position.index++
	) {
		var ware = frontol.currentDocument.position.ware;
		var barcode = frontol.currentDocument.position.barcode;
		var price = frontol.currentDocument.position.price;
		var quantity = frontol.currentDocument.position.quantity;
		var totalSum = frontol.currentDocument.position.totalSum;

		var product =
			"{name:'" +
			ware +
			"', barcode: '" +
			barcode +
			"', price: " +
			price +
			', quantity: ' +
			quantity +
			', totalSum: ' +
			totalSum +
			'},';
		frontolPaymentProducts += product;
	}

	//DocumentType = 1(Продажа)
	if (frontol.currentDocument.type.code === 1) {
		if (JetQrPay == null)
			JetQrPay = new ActiveXObject(
				'AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver'
			);

		var result = null;
		if (frontolPayment.type.code === ALIF_SALOM) {
			result = JetQrPay.ProcessSalomPayment(
				frontolPaymentData,
				frontolPaymentProducts
			);
		} else {
			result = JetQrPay.ProcessQrPayment(
				frontolPaymentData,
				frontolPaymentProducts
			);
		}

		if (result.IsSuccessful) {
			var isDuplicate =
				frontol.currentDocument.userValues.get(result.InvoiceId) > 0;
			if (isDuplicate === false) {
				frontol.currentDocument.addPayment(
					result.FrontolBankCode,
					result.AmountArrived,
					null
				);
				frontol.currentDocument.userValues.set(
					result.InvoiceId,
					result.InvoiceId
				);
			} else {
				showMessage(
					'Дублирующий платеж! Этот платеж уже есть в списке.',
					Icon.Warning
				);
			}
		} else {
			showMessage('Ошибка платежа! Не произведен платеж!', Icon.Error);
		}

		JetQrPay.Dispose();
		JetQrPay = null;
	}

	cancelAct();
}

function JetQrAfterCancelDocument() {
	//В данном событии вызываем отмену платежей Алиф только для документов типа "Продажа".
	//Если не делать этот check, пользователь может создать документ типа "Возврат" и отменить его вместо того чтобы закрыть. В таком случае платежи Алиф оменятся, чего быть не должно.
	//Для документов типа "Возврат" фунцкия отмены платежей Алиф вызовится "после" закрытия документа в обратобчике AlifAfterCloseDocument
	if (frontol.currentDocument.type.code === 1) {
		CancelJetQrPaymentsOnDocument();
	}
}

function CancelJetQrPaymentsOnDocument() {
	var documentHasJetQrPayments = hasPaymentOfType(JET_QR);

	if (documentHasJetQrPayments) {
		if (JetQrPay == null)
			JetQrPay = new ActiveXObject(
				'AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver'
			);

		var documentNumber = 0;
		if (frontol.currentDocument.type.code === 1)
			//тип документа "Продажа"
			documentNumber = frontol.currentDocument.number;
		else if (frontol.currentDocument.type.code === 2)
			//тип документа "Возврат", мы должны передавать номера документа основания(тип "Продажа") для возврата, так как платежи в базе связаны с именно с тeм документом
			documentNumber = frontol.currentDocument.baseDocument.number;

		JetQr.CancelPayments(documentNumber);

		JetQr.Dispose();
		JetQr = null;
	}
}

function AlifShowAdminUI() {
	if (frontol.currentDocument == null) return;

	var isAdminUser = IsAdminUser();
	if (!isAdminUser) {
		showMessage(
			'У вас нет доступа к административному интерфейсу ПС Алиф Капитал',
			Icon.Exclamation
		)
		return;
	}

	if (JetQrPay == null)
		JetQrPay = new ActiveXObject(
			'AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver'
		);

	var result = JetQrPay.ShowAdminUI();
	if (result != null) {
		//do belongnes check
		if (result.DocumentId === frontol.currentDocument.number) {
			var qrType = MERCHANT_PRESENTED_QR;
			if (result.QrPaymentType === 1) qrType = CUSTOMER_PRESENTED_QR;

			//NOTE:при удалении платежа из frontol нет возможности выборочно подчищать данные используемые для контроля дублирующих платежей
			//Соттветсвенно когда платеж удаляется, id платежа остается в userValues и не дает заново добавить платеж с этим id
			//Как workaround смотрим если в списке нет ни одного платежа с нужным типом, то не делаем check на дубликат
			var needDuplicateCheck = hasPaymentOfType(qrType);
			if (needDuplicateCheck === false) {
				frontol.currentDocument.addPayment(
					qrType,
					result.AmountArrived,
					null
				);
			} else {
				var isDuplicate =
					frontol.currentDocument.userValues.get(result.InvoiceId) >
					0;
				if (isDuplicate === false) {
					frontol.currentDocument.addPayment(
						qrType,
						result.AmountArrived,
						null
					);
					frontol.currentDocument.userValues.set(
						result.InvoiceId,
						result.InvoiceId
					);
				} else
					showMessage(
						'Дублирующий платеж! Этот платеж уже есть в списке.',
						Icon.Exclamation
					)
			}
		} else {
			showMessage(
				'Ошибка! Нельзя добавлять платеж предназначенный для другого документа!',
				Icon.Error
			)
		}
	}

	JetQrPay.Dispose();
	JetQrPay = null;
}

function IsAdminUser() {
	var isAdmin = false;
	try {
		var queryString =
			'SELECT p.Code AS "ProfileCode",p.Name FROM "USER" u, Profile p WHERE u.profileid = p.id AND u.Code = \'' +
			frontol.currentUser.code +
			"';";
		DB =
			'DRIVER=Firebird/InterBase(r) driver; DBNAME=localhost:' +
			FRONTOL_DB_PATH +
			';UID=sysdba;PWD=masterkey;CHARSET=WIN1251;';
		var Conn = new ActiveXObject('ADODB.Connection');
		Conn.Provider = 'MSDASQL.1';
		Conn.Open(DB);
		var qSelect = new ActiveXObject('ADODB.Command');
		qSelect.ActiveConnection = Conn;
		qSelect.CommandText = queryString;
		var result = qSelect.Execute;
		if (result) {
			var userProfileCode = result.Fields.Item('ProfileCode');
			//var userProfileName = result.Fields.Item("Name");
			for (code in FRONTOL_ADMIN_PROFILE_CODES) {
				if (userProfileCode == FRONTOL_ADMIN_PROFILE_CODES[code]) {
					isAdmin = true;
					break;
				}
			}
		}
	} catch (e) {
		showMessage(
			'Query execution error: [' +
				e.number +
				'],\n' +
				e.message +
				',\nquery: ' +
				queryString,
				Icon.Error
		);
	}
	return isAdmin;
}

//START PROCCESSING - EMVCo_TJ (ALIF gateway)
//ALIF
var EMVCo_TJ = 107;

function EMVCo_JetQrPayInit() {
	frontol.addEventListener('addPayment', 'EMVCo_JetQrBeforeAddPayment', true);
	frontol.addEventListener(
		'cancelDocument',
		'EMVCo_JetQrAfterCancelDocument',
		false
	);
	frontol.addEventListener(
		'stornoPayment',
		'EMVCo_JetQrBeforeStornoPayment',
		true
	);
}

function EMVCo_JetQrBeforeAddPayment(frontolPayment) {
	if (frontolPayment.type.code === EMVCo_TJ) {
		//DocumentType = 1(Продажа)
		if (frontol.currentDocument.type.code === 1) {
			if (JetQrPay == null)
				JetQrPay = new ActiveXObject(
					'AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver'
				);

			if (frontolPayment.type.code === EMVCo_TJ) {
				var result = JetQrPay.ProcessMerchantPresentedQrPayment(
					frontolPayment.number,
					frontol.currentDocument.number,
					frontol.sessionNumber,
					frontolPayment.sumInBaseCurrency,
					frontol.codeWorkplace
				);

				if (result.IsSuccessful) {
					var isDuplicate =
						frontol.currentDocument.userValues.get(
							result.InvoiceId
						) > 0;

					if (isDuplicate === false) {
						frontol.currentDocument.addPayment(
							EMVCo_TJ,
							result.AmountArrived,
							null
						);
						frontol.currentDocument.userValues.set(
							result.InvoiceId,
							result.InvoiceId
						);
					} else {
						showMessage(
							'Дублирующий платеж! Этот платеж уже есть в списке.'
						);
					}
				}
			}

			JetQrPay.Dispose();
			JetQrPay = null;
		}
		//DocumentType = 2(Возврат)
		else if (frontol.currentDocument.type.code === 2) {
			//Temporary fix until we implement partial payment cancellation
			showMessage(
				"Возврат платежа типа 'Алиф QR и Алиф Салом' не поддерживается! Произведите возврат наличными."
			);
		}
		cancelAct();
	}
}

function EMVCo_JetQrAfterCancelDocument() {
	//В данном событии вызываем отмену платежей Алиф только для документов типа "Продажа".
	//Если не делать этот check, пользователь может создать документ типа "Возврат" и отменить его вместо того чтобы закрыть. В таком случае платежи Алиф оменятся, чего быть не должно.
	//Для документов типа "Возврат" фунцкия отмены платежей Алиф вызовится "после" закрытия документа в обратобчике AlifAfterCloseDocument
	if (frontol.currentDocument.type.code === 1) {
		EMVCo_CancelJetQrPaymentsOnDocument();
	}
}

function EMVCo_CancelJetQrPaymentsOnDocument() {
	var documentHasJetQrPayments = hasPaymentOfType(EMVCo_TJ);

	if (documentHasJetQrPayments) {
		if (JetQrPay == null)
			JetQrPay = new ActiveXObject(
				'AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver'
			);

		var documentNumber = 0;

		if (frontol.currentDocument.type.code === 1)
			//тип документа "Продажа"
			documentNumber = frontol.currentDocument.number;
		else if (frontol.currentDocument.type.code === 2)
			//тип документа "Возврат", мы должны передавать номера документа основания(тип "Продажа") для возврата, так как платежи в базе связаны с именно с тeм документом
			documentNumber = frontol.currentDocument.baseDocument.number;

		JetQrPay.CancelPayments(documentNumber);

		JetQrPay.Dispose();
		JetQrPay = null;
	}
}

function EMVCo_JetQrBeforeStornoPayment(frontolPayment) {
	if (frontolPayment.type.code === EMVCo_TJ) {
		showMessage('Нельзя сторнировать данный вид платежа!');
		cancelAct();
	}
}

//END EMVCo_TJ (Gateway ALIF)

// *******************ESKHATA_ONLINE*******************************

//--------------------EO_SETTINGS_START----------------------------
var EO_SETTINGS = {
	PATH: 'C:\\EskhataOnline\\settings.json',
	PAYMENT_TYPE_ID: 108
};

var EO_STATUSES = {
	SUCCESS: { code: 0, message: 'Успешно!' },
	ERROR_UNKNOWN: { code: 'UNKNOWN', message: 'Неизвестная ошибка!' }, // TODO
	ERROR_FILE_NOT_FOUND: {
		code: 'ERROR_FILE_NOT_FOUND',
		message: 'Ошибка! Файл не найден. Обратитесь к администратору!'
	},
	ERROR_FILE_CANNOT_BE_READ: {
		code: 'ERROR_FILE_CANNOT_BE_READ',
		message:
			'Ошибка! Не удаётся прочитить файл. Обратитесь к администратору!'
	},
	ERROR_FILE_CANNOT_BE_CLOSED: {
		code: 'ERROR_FILE_CANNOT_BE_CLOSED',
		message:
			'Ошибка! Не удаётся закрыть файл. Обратитесь к администратору!'
	},
	ERROR_INIT_PRINTER: {
		code: 'ERROR_INIT_PRINTER',
		message:
			'Ошибка при инициализации принтера. Обратитесь к администратору!'
	},
	ERROR_PAYMENT_ALREADY_EXIST: {
		code: 'ERROR_EO_PAYMENT_ALREADY_EXIST',
		message:
			'Ошибка! Платёж через Эсхата Онлайн уже существует в данном документе.'
	},
	ERROR_PAYMENT_CANNOT_BE_REMOVED: {
		code: 'ERROR_PAYMENT_CANNOT_BE_REMOVED',
		message:
			'Ошибка! Платёж через Эсхата Онлайн уже проведён по этому не может быть удалён.'
	},
	ERROR_PAYMENT_CANNOT_BE_RETURNED: {
		code: 'ERROR_PAYMENT_CANNOT_BE_RETURNED',
		message:
			"Ошибка! Возврат платежа 'Эсхата Онлайн' не поддерживается! Произведите возврат наличными."
	}
};
//--------------------EO_SETTINGS_END----------------------------

//--------------------EO_LISTENERS_START----------------------------
function EO_AfterOpenDocument() {
	//Является ли тип платежа Эсхата Онлайн?
	if (
		frontol.currentDocument.payment.type.code ==
			EO_SETTINGS.PAYMENT_TYPE_ID &&
		frontol.currentDocument.type.code === 1
	) {
		//Инициализация счётчика платежа и переменной для хранения результата проверки
		frontol.currentDocument.userValues.set('EO_PAYMENTS', 0);
		frontol.currentDocument.userValues.set('EO_TRACK_ID', 0);
		frontol.currentDocument.userValues.set(
			'EO_CHECK_PAYMENT_RESULT_PAYMENT_ID',
			0
		);
		frontol.currentDocument.userValues.set(
			'EO_CHECK_PAYMENT_RESULT_PAYMENT_NUMBER',
			0
		);
		frontol.currentDocument.userValues.set(
			'EO_CHECK_PAYMENT_RESULT_PAYMENT_DATETIME',
			0
		);
		frontol.currentDocument.userValues.set(
			'EO_CHECK_PAYMENT_RESULT_PAYMENT_AMOUNT',
			0
		);
		frontol.currentDocument.userValues.set(
			'EO_CHECK_PAYMENT_RESULT_PAYMENT_CURRENCY',
			0
		);
		frontol.currentDocument.userValues.set(
			'EO_CHECK_PAYMENT_RESULT_CLIENT_ACCOUNT',
			0
		);

		if (typeof JSON !== 'object' || typeof JSON.parse !== 'function') {
			getJson2();
		}
	}
}

function EO_BeforeAddPayment(payment) {
	//Является ли тип платежа Эсхата Онлайн?
	if (payment.type.code == EO_SETTINGS.PAYMENT_TYPE_ID) {
		//Если действие = 1(Продажа)
		if (frontol.currentDocument.type.code === 1) {
			//Проверка на несуществование платежа через Эсхата Онлайн
			if (frontol.currentDocument.userValues.get('EO_PAYMENTS') == 0) {
				// Инициализация настроек
				var settings = EO_GetSettingsFromJsonFile(EO_SETTINGS.PATH);
				//Инициализация DLL - EskhataOnlineTransport
				var transactions = new ActiveXObject(
					'EskhataOnlineTransport.Transactions'
				);
				var dateOpen = frontol.currentDocument.dateOpen.split('.');
				var dateOpenFormatted =
					'20' + dateOpen[2] + '-' + dateOpen[1] + '-' + dateOpen[0];
				//Подготовка модели запроса
				var EO_REQUEST_MODEL = {
					merchant_item_id: settings.data.merchant_item_id,
					amount: payment.sumInBaseCurrency,
					document_number: frontol.currentDocument.number,
					document_date:
						dateOpenFormatted +
						' ' +
						frontol.currentDocument.timeOpen
				};
				//Отправка данных в DLL - EskhataOnlineTransport
				var result_text = transactions.CheckPayment(
					JSON.stringify(EO_REQUEST_MODEL)
				);
				var result = JSON.parse(result_text);
				//Получение и проверка ответа из DLL - EskhataOnlineTransport
				if (result.code == EO_STATUSES.SUCCESS.code) {
					//Фиксация факта платежа в переменной
					frontol.currentDocument.userValues.set('EO_PAYMENTS', 1);
					frontol.currentDocument.userValues.set(
						'EO_TRACK_ID',
						result.meta.track_id
					);
					frontol.currentDocument.userValues.set(
						'EO_CHECK_PAYMENT_RESULT_PAYMENT_ID',
						result.data.data.data.transaction.id
					);
					frontol.currentDocument.userValues.set(
						'EO_CHECK_PAYMENT_RESULT_PAYMENT_NUMBER',
						result.data.data.data.transaction.session_number
					);
					frontol.currentDocument.userValues.set(
						'EO_CHECK_PAYMENT_RESULT_PAYMENT_DATETIME',
						result.data.data.data.transaction.created_at
					);
					frontol.currentDocument.userValues.set(
						'EO_CHECK_PAYMENT_RESULT_PAYMENT_AMOUNT',
						result.data.data.data.transaction.amount
					);
					frontol.currentDocument.userValues.set(
						'EO_CHECK_PAYMENT_RESULT_PAYMENT_CURRENCY',
						result.data.data.data.transaction.currency
					);
					frontol.currentDocument.userValues.set(
						'EO_CHECK_PAYMENT_RESULT_CLIENT_ACCOUNT',
						result.data.data.data.transaction.account_number
					);

					if (settings.data.printer.is_print_enabled)
						EO_PrintChecks();

					frontol.currentDocument.addPayment(
						EO_SETTINGS.PAYMENT_TYPE_ID,
						result.data.data.data.transaction.amount,
						null
					);
				} else {
					showError('Eskhata Online: ' + result.message); //TODO неуспешный кейс месседж
				}
			} else {
				showError(
					'Eskhata Online: ' +
						EO_STATUSES.ERROR_PAYMENT_ALREADY_EXIST.message
				);
			}
		} else {
			showError(
				'Eskhata Online: ' +
					EO_STATUSES.ERROR_PAYMENT_CANNOT_BE_RETURNED.message
			);
		}
		cancelAct();
	}
}

function EO_BeforeRemovePayment() {
	//Является ли тип платежа Эсхата Онлайн?
	if (
		frontol.currentDocument.payment.type.code == EO_SETTINGS.PAYMENT_TYPE_ID
	) {
		//Проверка на существование платежа через Эсхата Онлайн
		if (frontol.currentDocument.userValues.get('EO_PAYMENTS') > 0) {
			// Отмена удаления платежа и вывод соответствующего сообщения
			showError(
				'Eskhata Online: ' +
					EO_STATUSES.ERROR_PAYMENT_CANNOT_BE_REMOVED.message
			);
		}
	}
}

function EO_BeforeCloseDocument() {
	//Проверка на несуществование платежа через Эсхата Онлайн
	if (frontol.currentDocument.userValues.get('EO_PAYMENTS') > 0) {
		//Если действие = 1(Продажа)
		if (frontol.currentDocument.type.code === 1) {
			//Инициализация DLL - EskhataOnlineTransport
			var transactions = new ActiveXObject(
				'EskhataOnlineTransport.Transactions'
			);
			//Подготовка модели запроса
			var EO_REQUEST_MODEL = {
				track_id: frontol.currentDocument.userValues.get('EO_TRACK_ID'),
				transaction_id: frontol.currentDocument.userValues.get(
					'EO_CHECK_PAYMENT_RESULT_PAYMENT_ID'
				),
				document_number: frontol.currentDocument.number
			};
			//Отправка данных в DLL - EskhataOnlineTransport
			var result = JSON.parse(
				transactions.Confirm(JSON.stringify(EO_REQUEST_MODEL))
			);
			//Получение и проверка ответа из DLL - EskhataOnlineTransport
			if (result.code != EO_STATUSES.SUCCESS.code) {
				showError('Eskhata Online: ' + result.message);
			}
		} else {
			showError(
				'Eskhata Online: ' +
					EO_STATUSES.ERROR_PAYMENT_CANNOT_BE_RETURNED.message
			);
		}
	}
}

function EO_BeforeCancelDocument() {
	//Проверка на несуществование платежа через Эсхата Онлайн
	if (frontol.currentDocument.userValues.get('EO_PAYMENTS') > 0) {
		//Если действие = 1(Продажа)
		if (frontol.currentDocument.type.code === 1) {
			//Инициализация DLL - EskhataOnlineTransport
			var transactions = new ActiveXObject(
				'EskhataOnlineTransport.Transactions'
			);
			//Подготовка модели запроса
			var EO_REQUEST_MODEL = {
				track_id: frontol.currentDocument.userValues.get('EO_TRACK_ID'),
				transaction_id: frontol.currentDocument.userValues.get(
					'EO_CHECK_PAYMENT_RESULT_PAYMENT_ID'
				),
				document_number: frontol.currentDocument.number
			};
			//Отправка данных в DLL - EskhataOnlineTransport
			var result = JSON.parse(
				transactions.Cancel(JSON.stringify(EO_REQUEST_MODEL))
			);
			//Получение и проверка ответа из DLL - EskhataOnlineTransport
			if (result.code != EO_STATUSES.SUCCESS.code) {
				showError('Eskhata Online: ' + result.message);
			}
		} else {
			showError(
				'Eskhata Online: ' +
					EO_STATUSES.ERROR_PAYMENT_CANNOT_BE_RETURNED.message
			);
		}
	}
}
//--------------------EO_LISTENERS_END----------------------------

//--------------------EO_HELPERS_START----------------------------
function EO_GetSettingsFromJsonFile(filePath) {
	var fs = new ActiveXObject('Scripting.FileSystemObject');
	var result = { status: EO_STATUSES.ERROR_UNKNOWN, data: null };

	if (!fs.FileExists(filePath)) {
		result.status = EO_STATUSES.ERROR_FILE_NOT_FOUND;
		showError('Eskhata Online:1 ' + result.status.message);
	} else {
		try {
			var objStream = new ActiveXObject('ADODB.Stream');

			objStream.CharSet = 'utf-8';
			objStream.Type = 2;
			objStream.Open();
			objStream.LoadFromFile(filePath);

			var read = objStream.ReadText();

			//var read = fs.OpenTextFile(filePath, 1);
			result.status = EO_STATUSES.SUCCESS;
			result.data = JSON.parse(read);
		} catch (e) {
			result.status = EO_STATUSES.ERROR_FILE_CANNOT_BE_READ;
			result.data = e.message;
			showError('Eskhata Online:2 ' + result.status.message);
		} finally {
			try {
				objStream.Close();
				objStream = null;
			} catch (e) {
				result.status = EO_STATUSES.ERROR_FILE_CANNOT_BE_CLOSED;
				result.data = e.message;
				showError('Eskhata Online:3 ' + result.status.message);
			}
		}
	}
	return result;
}

function EO_GetPrinterObject() {
	var settings = EO_GetSettingsFromJsonFile(EO_SETTINGS.PATH);
	//var result = { status: EO_STATUSES.ERROR_UNKNOWN, data: null };
	var printer;

	try {
		printer = new ActiveXObject('AddIn.FPrnM8');
		printer.AddDevice();
		printer.Model = settings.data.printer.model;
		printer.PortNumber = settings.data.printer.port_number;
		printer.BaudRate = settings.data.printer.baud_rate;
		//printer.Password = settings.data.printer.password;
		printer.DeviceEnabled = 1;
		//result.status = EO_STATUSES.SUCCESS;
		//result.data = printer;
		//showMessage(printer.DeviceEnabled);
		//printer.ShowProperties();
		return printer;
	} catch (e) {
		//result.status = EO_STATUSES.ERROR_INIT_PRINTER;
		//result.data = e.message;
		showError('Eskhata Online: ' + result.status.message);
	}
	return printer;
}

function EO_PrintChecks(params) {
	var settings = EO_GetSettingsFromJsonFile(EO_SETTINGS.PATH);
	//showMessage(settings);
	var client_text = settings.data.printer.template.client_text;
	var client_text_result = '';

	for (var i = 0; i < client_text.length; i++) {
		client_text_result += EO_ReplaceData(client_text[i]) + '\r\n';
	}

	var cashier_text = settings.data.printer.template.cashier_text;
	var cashier_text_result = '';

	for (var i = 0; i < cashier_text.length; i++) {
		cashier_text_result += EO_ReplaceData(cashier_text[i]) + '\r\n';
	}

	//showMessage(client_text_result);

	EO_PrinterPrintText(client_text_result, false);
	EO_PrinterPrintText(cashier_text_result, true);
}

function EO_ReplaceData(data) {
	return data
		.replace(
			'__DATETIME__',
			frontol.currentDocument.userValues.get(
				'EO_CHECK_PAYMENT_RESULT_PAYMENT_DATETIME'
			)
		)
		.replace(
			'__CLIENT_ACCOUNT__',
			frontol.currentDocument.userValues.get(
				'EO_CHECK_PAYMENT_RESULT_CLIENT_ACCOUNT'
			)
		)
		.replace(
			'__PAYMENT_NUMBER__',
			frontol.currentDocument.userValues.get(
				'EO_CHECK_PAYMENT_RESULT_PAYMENT_NUMBER'
			)
		)
		.replace(
			'__AMOUNT__',
			frontol.currentDocument.userValues.get(
				'EO_CHECK_PAYMENT_RESULT_PAYMENT_AMOUNT'
			)
		)
		.replace(
			'__CURRENCY__',
			frontol.currentDocument.userValues.get(
				'EO_CHECK_PAYMENT_RESULT_PAYMENT_CURRENCY'
			)
		);
}

function EO_PrinterPrintText(text, is_cut) {
	try {
		var printer = EO_GetPrinterObject();

		printer.PartialCut();
		EO_StartPrinting(printer, text, is_cut);
		printer.DeviceEnabled = 0;
		printer.DeleteDevice();
	} catch (e) {
		showError('Eskhata Online: ' + e.message);
		//alert("Eskhata Online: Ошибка при инициализации принтера или печати чеков: " + e.message + ". Обратитесь к администратору!");
	}
}

function EO_StartPrinting(printer, text, is_cut) {
	var currentState;

	try {
		currentState = printer.TextWrap;
	} catch (e) {
		currentState = 1;
	}
	printer.TextWrap = 1;
	//printer.BeginDocument();
	printer.Caption = text;
	printer.PrintString();
	//printer.EndDocument();
	//showMessage(printer.Model);
	printer.TextWrap = currentState;

	if (is_cut) printer.FullCut();

	//showMessage("print success");
}
//--------------------EO_HELPERS_END----------------------------

// *******************ESKHATA_ONLINE*******************************

//Возвратная касса
//==========================================================================================================================================================================================
function $$$returnByCheck() {
	var doc = frontol.currentDocument;
	var workOption = doc.userValues.get('returnWorkOption');
	var workOption = '1';
	//sendKeys("+z");//Shift + z

	if (doc == null) showError('Сначала нужно открыть документ возврата!');

	if (!isReturnDocument(doc))
		showError('Текущий документ не является возвратом');

	if (doc.position.count > 0)
		showError('В чеке имеются позиции продолжение невозможно');

	if (workOption == '1') {
		var CASHNUMBER = frontol.actions.inputString('Номер кассы', '');
		var ZNUMBER = frontol.actions.inputString('Номер смены', '');
		var CHECKNUMBE = frontol.actions.inputString('Номер чека', '');

		if (CASHNUMBER == null || ZNUMBER == null || CHECKNUMBE == null) {
			showMessage('Введены не все данные, продолжение невозможно!');
			return;
		}

		if (CASHNUMBER == '' || ZNUMBER == '' || CHECKNUMBE == '') {
			showMessage('Введены не все данные, продолжение невозможно!');
			return;
		}
		CHECKNUMBER = CHECKNUMBE.replace(/^0+/, ''); // уберем нули
		var sqlCommandText = getSqlQueryText(CASHNUMBER, ZNUMBER, CHECKNUMBER);
	} else if (workOption == '2') {
		var BARCODE = frontol.actions.inputString(
			'Отсканируйте ШК документа продажи',
			''
		);

		if (BARCODE == '' || BARCODE == null) {
			showMessage('Введены не все данные, продолжение невозможно!');
			return;
		}

		var BarCode = BARCODE.substring(0, 11);
		var sqlCommandText = getSqlQueryTextBarCode(BARCODE);
	}

	//showMessage(sqlCommandText);
	var result = sqlRequest(sqlCommandText);

	if (!result.success) showError(result.message);

	addPositionsFromSql(doc, result.data);

	//(result.data[0].CHECKNUMBER !== undefined)

	if (workOption == '1') {
		doc.userValues.set('BaseDocumentCode', CHECKNUMBER);
	} else if (workOption == '2') {
		CHECKNUMBER = result.data[0].CHECKNUMBER.replace(/^0+/, ''); //уберем нули
		doc.userValues.set('BaseDocumentCode', CHECKNUMBER);
	}
}

function addPositionsFromSql(doc, data) {
	if (data[0] !== undefined) {
		var userValuesStr = data[0].USERVALUES;

		doc.userValues.set(
			'BaseDocumentUserValues',
			base64_encode(userValuesStr)
		);
	} else {
		showError('Некоретные данные чека продажи(Основания)');
	}

	for (var i = 0; i < data.length; i++) {
		var item = data[i];

		var productCode = item.PRODUCTCODE;
		var quantity = Number(item.KOL);
		var summ = Number(item.SUMMA);

		//для отладки
		//showMessage("Код товара "+ productCode + "\nКоличество " + quantity + "\nСумма " + summ);
		//для отладки

		//разобрать строку в массив там же лицензия
		//uservaluesArray = deserializingUserValue(userValuesStr);

		try {
			doc.addPosition(
				'Mark',
				productCode,
				null,
				quantity.round(3),
				summ,
				false
			);
		} catch (e) {
			showMessage(
				'Не удалось добавить позицию в чек ' +
					'\nКод товара ' +
					productCode +
					'\nКоличество ' +
					quantity +
					'\nСумма ' +
					summ +
					'\nОписание ошибки: ' +
					e.name +
					': ' +
					e.message
			);
		}
	}
	return;
}

function deserializingUserValue(str) {
	var stringsArray = str.split(';');
	var objectsArray = [];

	for (var i = 0; i < stringsArray.length; i++) {
		var fieldsArray = stringsArray[i].split('&');
		var obj = {};

		if (fieldsArray.length >= 3) {
			obj.positionId = Number(fieldsArray[0]);
			obj.marketProgramId = Number(fieldsArray[1]);
			obj.marketProgramIsForced =
				Number(fieldsArray[2]) === 1 ? true : false;

			objectsArray.push(obj);
		}
	}
	return objectsArray;
}

function deserializingDocumentUserValue(str) {
	var stringsArray = str.split(',');
	var objectsArray = [];

	for (var i = 0; i < stringsArray.length; i++) {
		var fieldsArray = stringsArray[i].split('=');

		if (fieldsArray.length > 1) {
			objectsArray[fieldsArray[0]] = fieldsArray[1];
		}
	}
	return objectsArray;
}

function sqlRequest(sqlCommandText) {
	var result = {
		success: false,
		message: 'Данные по чеку не найдены!',
		data: ''
	};

	//для отладки переделать в глобальные параметры
	var sqlServerName = 'POSCRYSTAL';
	var sqlServer = 'sa';
	var sqlUserPwd = 'iBMxolMuKgzl9b';
	var sqlDBName = 'Cash_Server';
	//для отладки

	var ConnectionString =
		'driver={SQL Server};' +
		'server=' +
		sqlServerName +
		';' +
		'uid=' +
		sqlServer +
		';' +
		'pwd=' +
		sqlUserPwd +
		';' +
		'database=' +
		sqlDBName +
		';';
	try {
		var connection = new ActiveXObject('ADODB.Connection');

		connection.ConnectionString = ConnectionString;
		connection.ConnectionTimeout = 30;
		connection.CommandTimeout = 600;
		connection.CursorLocation = 3;
		connection.Open();
		//showMessage("Успешное подключение!");
	} catch (e) {
		result.message =
			'Не удалось выполнить подключение к базе ' +
			sqlDBName +
			'\nОписание ошибки: ' +
			e.name +
			': ' +
			e.message;
		return result;
	}

	try {
		var recordset = new ActiveXObject('ADODB.RecordSet');
		var sqlCommand = new ActiveXObject('ADODB.Command');

		sqlCommand.ActiveConnection = connection;
		sqlCommand.CommandText = sqlCommandText;
		sqlCommand.CommandType = 1;
		recordset = sqlCommand.Execute();

		var arrayData = [];

		if (!recordset.BOF) {
			recordset.MoveFirst();

			do {
				arrayData.push({
					CHECKNUMBER: recordset.Fields('CHECKNUMBE').Value,
					USERVALUES: recordset.Fields('USERVALUES').Value,
					PRODUCTCODE: recordset.Fields('PRODUCTCODE').Value,
					KOL: recordset.Fields('KOL').Value,
					SUMMA: +recordset.Fields('SUMMA').Value
				});

				// для отладки поглядеть что пришло
				//showMessage('[USERVALUES]= '+recordset.Fields('USERVALUES').Value +
				//'\n[PRODUCTCODE]= '+recordset.Fields('PRODUCTCODE').Value +
				//'\n[KOL]= '+recordset.Fields('KOL').Value +
				//'\n[SUMMA]= '+recordset.Fields('SUMMA').Value
				//);
				//для отладки
				recordset.MoveNext();
			} while (!recordset.EOF);

			result.success = true;
			result.data = arrayData;
		}
	} catch (e) {
		connection.Close();
		recordset = null;
		sqlCommand = null;
		result.message =
			'Не удалось выполнить запрос ' +
			'\nОписание ошибки: ' +
			e.name +
			': ' +
			e.message;
		return result;
	}

	connection.Close();
	recordset = null;
	sqlCommand = null;

	return result;
}

function getSqlQueryText(CASHNUMBER, ZNUMBER, CHECKNUMBER) {
	//для отладки
	//CASHNUMBER = 6
	//ZNUMBER    = 1922
	//CHECKNUMBER = 263912
	//для отладки

	var text =
		//"SET DATEFORMAT mdy \n" +
		'SELECT ' +
		'KKMCHECKCONTENS.[CHECKNUMBE] AS CHECKNUMBE, ' +
		'KKMCHECKCONTENS.[USERVALUES] AS USERVALUES, ' +
		'KKMCHECKCONTENS.[CARDARTICU] AS PRODUCTCODE, ' +
		'SUM(CASE WHEN KKMCHECKCONTENS.[QUANTITY]>=0 THEN  KKMCHECKCONTENS.[QUANTITY] ELSE 0 END) AS KOL, ' +
		'SUM(CASE WHEN KKMCHECKCONTENS.[TOTALRUB]>=0 THEN  KKMCHECKCONTENS.[TOTALRUB] ELSE 0 END) AS SUMMA ' +
		'FROM ' +
		'KKMCHECKCONTENS AS KKMCHECKCONTENS ' +
		'WHERE ' +
		" CASHNUMBER IN ('" +
		CASHNUMBER +
		"') " +
		" AND ZNUMBER  IN ('" +
		ZNUMBER +
		"') " +
		" AND CHECKNUMBE  IN ('" +
		CHECKNUMBER +
		"') " +
		'GROUP BY \n' +
		'KKMCHECKCONTENS.[CHECKNUMBE], ' +
		'KKMCHECKCONTENS.[CARDARTICU], ' +
		'KKMCHECKCONTENS.[USERVALUES] ';
	return text;
}

function getSqlQueryTextBarCode(BarCode) {
	//для отладки
	//BarCode    = 1922
	//для отладки

	var text =
		//"SET DATEFORMAT mdy \n" +
		'SELECT ' +
		'KKMCHECKCONTENS.[CHECKNUMBE] AS CHECKNUMBE, ' +
		'KKMCHECKCONTENS.[USERVALUES] AS USERVALUES, ' +
		'KKMCHECKCONTENS.[CARDARTICU] AS PRODUCTCODE, ' +
		'SUM(CASE WHEN KKMCHECKCONTENS.[QUANTITY]>=0 THEN  KKMCHECKCONTENS.[QUANTITY] ELSE 0 END) AS KOL, ' +
		'SUM(CASE WHEN KKMCHECKCONTENS.[TOTALRUB]>=0 THEN  KKMCHECKCONTENS.[TOTALRUB] ELSE 0 END) AS SUMMA ' +
		'FROM ' +
		'KKMCHECKCONTENS AS KKMCHECKCONTENS ' +
		'WHERE ' +
		" FRONTOLDOCID in ('" +
		BarCode +
		"') " +
		//" USERVALUES like \'%DocumentBarcode=" + BarCode + "%\' " +
		'GROUP BY \n' +
		'KKMCHECKCONTENS.[CHECKNUMBE], ' +
		'KKMCHECKCONTENS.[CARDARTICU], ' +
		'KKMCHECKCONTENS.[USERVALUES] ';
	return text;
}
//Возвратная касса
//==========================================================================================================================================================================================

function createActionData(filePath) {
	//customActionForAshan
	var actionData = null;
	var read;
	var fso = new ActiveXObject('Scripting.FileSystemObject');

	if (!fso.FileExists(filePath)) {
		showMessage('Файл ' + filePath + ' не существует!', Icon.Error);
		return actionData;
	}

	try {
		read = fso.OpenTextFile(filePath, 1);

		while (!read.AtEndOfStream) {
			// lines.push(read.ReadLine());
			var str = read.ReadLine();
			var params = str.split(';');
			actionData = {};
			actionData[params[0]] = {
				sum: params[1],
				cashierMesage: params[2],
				slipMessage: params[3]
			};
		}
	} catch (e) {
		showMessage(
			'Не удалось открыть файл ' +
				filePath +
				'!' +
				'\n' +
				e.name +
				': ' +
				e.message,
			Icon.Error
		);
	} finally {
		try {
			read.Close();
		} catch (e) {}
	}
	return actionData;
}

function setCustomActionData(path) {
	//customActionForAshan

	var actionData = createActionData(path);
	if (actionData) {
		frontol.userValues.set(CUSTOM_ACTION_DATA, JSON.stringify(actionData));
	}
}

// Ввод значение параметров печати ФР
function EnterParameter(param, header) {
	// добавляем для типа String метод trim
	if (!String.prototype.trim) {
		(function () {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function () {
				return this.replace(rtrim, '');
			};
		})();
	}
	var headerString = 'Вводимый параметр: ' + header;
	var newValue = frontol.actions.inputString(
		headerString,
		frontol.userValues.get(param)
	);
	if (newValue == null) return false;
	frontol.userValues.set(param, newValue.trim());
	return true;
}

// Очистка значение параметров печати ФР
function ClearValuePrintOptions() {
	frontol.userValues.set('PrintWithoutSending', '0');
	frontol.userValues.remove('PrintWithSendingToPhone');
	frontol.userValues.remove('PrintWithSendingToMail');
}

//MANUAL КНОПКИ ПАРАМЕТРОВ ПЕЧАТИ
function ManualPrintOptionsButton() {
	//Зададим переменные
	var choosePrintWithoutSending = 'Печать чека без отправки клиенту';

	if (frontol.userValues.get('PrintWithoutSending') == '0') {
		choosePrintWithoutSending += ' (!)';
	}

	var printWithSendingToPhoneString =
		'Печать чека c отправкой на номер телефон';

	if (frontol.userValues.get('PrintWithSendingToPhone') == '') {
		printWithSendingToPhoneString += ' (!)';
	}

	var printWithSendingToMailString = 'Печать чека c отправкой на e-mail';

	if (frontol.userValues.get('PrintWithSendingToMail') == '') {
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
			if (frontol.userValues.get('PrintWithoutSending') == '0') {
				frontol.userValues.set('PrintWithoutSending', '1');
			}
			// else {
			//  frontol.userValues.set("PrintWithoutSending", "1");
			//  }
			break;
		}
		case 'printWithSendingToPhone': {
			EnterParameter('PrintWithSendingToPhone', 'номер телефон клиента');
			break;
		}
		case 'printWithSendingToMail': {
			EnterParameter('PrintWithSendingToMail', 'e-mail клиента');
			break;
		}
	}
}

function $ManualButton() {
	// if (AdminUser !== frontol.currentUser.code && HeadCashier !== frontol.currentUser.code) {
	if (!isMenuAccessAvailable()) {
		showMessage('У вас нет доступа к административному интерфейсу.', Icon.Exclamation);
		return;
	}
	var printLastDoc = 'Печать последнего фискального документа';
	var printLastDocByFDNum =
		'Печать последнего фискального документа по номеру ФД';
	if (isSysAdmin()) {
		//Зададим переменные
		var fiscalipadresString = '1. Установить ip адресс ФР от Т.Группа';

		if (frontol.userValues.get('fiscalipadres') == '') {
			fiscalipadresString += ' (Не указан)';
		}

		var isfiscalTGString = '2. Подключить ФР-TP809 от Т.Групп';
		if (frontol.userValues.get('isfiscalTG') == '1') {
			isfiscalTGString = '2. Отключить ФР-TP809 от Т.Групп';
		}

		var isWriteLogString = '3. Включить логирование запросов';
		if (frontol.userValues.get('isWriteLog') == '1') {
			isWriteLogString = '3. Отключить логирование запросов';
		}

		var SessionValString = 'Значение смены';

		if (frontol.userValues.get('IsSessionOn') == 1)
			SessionValString += ' ( Открыта )';
		else SessionValString += ' ( Закрыта )';

		var TGXString = ' X-Отчет ФР от Т.Группа';
		var TGZString = ' Z-Отчет ФР от Т.Группа';

		var comPort =
			'1.COM порт взаимодействия с ФР ' +
			(frontol.userValues.get(FISCAT_PORT)
				? frontol.userValues.get(FISCAT_PORT)
				: '(не указан)');
		var comPortEnabled =
			'2.' +
			(frontol.userValues.get(COM_PORT_ENABLED) == 1
				? 'Отключить'
				: 'Включить') +
			' ФР-TP809 по COM порту';

		var freedomBnkTerminalIpAddTitle =
			'1. Установить ip адресс для терминала FreedomBank';
		var freedomBankTerminalIpAdd = getUserParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS)

		//TODO. DELETE
		showMessage('VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS = ' + freedomBankTerminalIpAdd)


		if (isEmptyValue(freedomBankTerminalIpAdd)) {
			freedomBnkTerminalIpAddTitle += ' (Не указан)';
		}

		// Окно меню
		var st = frontol.actions.selectString(
			'Константы',

			'---------- Параметры ФР Технология Групп ----------\n' +
				fiscalipadresString + '\n'
				+
				isfiscalTGString + '\n'
				+
				isWriteLogString + '\n' 
				+
				'\n' +
				'-----Параметры по COM порт-----\n' +
				comPort + '\n'
				+
				comPortEnabled + '\n'
				+
				'\n' +
				'---------- Отчеты ФР TP809 ---------------\n' +
				TGXString + '\n'
				+
				TGZString + '\n'
				+
				printLastDoc + '\n'
				+
				printLastDocByFDNum + '\n'
				+
				'\n' +
				SessionValString + '\n'
				+
				'\n' +
				'---------- Прочее ---------------\n' +
				freedomBnkTerminalIpAddTitle,

				'\n' +
				'fiscalipadres' + '\n'
				+
				'isfiscalTG' + '\n'
				+
				'isWriteLog' + '\n'
				+
				'\n' +
				'\n' +
				'comPort' + '\n'
				+
				'comPortEnabled' + '\n'
				+
				'\n' +
				'\n' +
				'TGX' + '\n'
				+
				'TGZ' + '\n'
				+
				'printLastDoc' + '\n'
				+
				'printLastDocByFDNum' + '\n'
				+
				'\n' +
				'IsSessionOn' + '\n'
				+
				'\n' +
				'\n' +
				'freedomBankTerminalIpAdd' + '\n'
		);

		if (st == null || st == '') return;

		switch (st) {
			case 'fiscalipadres': {
				EnterParameter('fiscalipadres', ' ip:port ФР-TP809 от Т.Групп');
				break;
			}

			case 'isfiscalTG': {
				if (frontol.userValues.get('isfiscalTG') == '1') {
					frontol.userValues.set('isfiscalTG', '0');
				} else {
					frontol.userValues.set('isfiscalTG', '1');
				}
				break;
			}

			case 'printLastDoc': {
				runPrintLastDoc();
				break;
			}

			case 'printLastDocByFDNum': {
				runPrintLastDocByFDNum();
				break;
			}

			case 'comPortEnabled': {
				break;
			}
			case 'comPort': {
				break;
			}

			case 'isWriteLog': {
				if (frontol.userValues.get('isWriteLog') == '1') {
					frontol.userValues.set('isWriteLog', '0');
				} else {
					frontol.userValues.set('isWriteLog', '1');
				}
				break;
			}

			case 'IsSessionOn': {
				if (frontol.userValues.get('IsSessionOn') == '1') {
					frontol.userValues.set('IsSessionOn', '0');
				} else {
					frontol.userValues.set('IsSessionOn', '1');
				}
				break;
			}

			case 'TGX': {
				var FRadress = frontol.userValues.get('fiscalipadres');
				var options = {
					formCode: 'GET_X_REPORT',
					ffdVersion: 'VER_1',
					shouldPrintSlip: true
				};
				var stringToSend = JSONStringify(options);
				var FRadress = frontol.userValues.get('fiscalipadres');
				var result = sendtofiscal(FRadress, 'getXReport', stringToSend);
				//frontol.userValues.set("IsSessionOn", "0");

				break;
			}

			case 'TGZ': {
				var FRadress = frontol.userValues.get('fiscalipadres');
				var options = {
					formCode: 'CLOSE_SHIFT',
					ffdVersion: 'VER_1',
					shouldPrintSlip: true,
					cashier: frontol.currentUser.name,
					kktVersion: '1'
				};
				var stringToSend = JSONStringify(options);
				var FRadress = frontol.userValues.get('fiscalipadres');
				var result = sendtofiscal(FRadress, 'closeShift', stringToSend);
				frontol.userValues.set('IsSessionOn', '0');
				break;
			}
			case 'freedomBankTerminalIpAdd': {
				EnterParameter(
					VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS,
					' ip:port для терминала FreedomBank'
				);
				break;
			}
		}
	}

	//Для СтарКассир
	// if (HeadCashier == frontol.currentUser.code) {
	if (isAdminOrMainCashier()) {
		//Зададим переменные
		var fiscalipadresString = '1. Установить ip адресс ФР от Т.Группа';

		if (frontol.userValues.get('fiscalipadres') == '') {
			fiscalipadresString += ' (Не указан)';
		}

		var isfiscalTGString = '2. Подключить ФР-TP809 от Т.Групп';
		if (frontol.userValues.get('isfiscalTG') == '1') {
			isfiscalTGString = '2. Отключить ФР-TP809 от Т.Групп';
		}

		var SharqfiscalipadresString = '1. Установить ip адресс ФР от МТТ Шарк';

		if (frontol.userValues.get('Sharqfiscalipadres') == '') {
			SharqfiscalipadresString += ' (Не указан)';
		}

		var SharqTerminalIdString = '2. Установить TerminalID ФР от МТТ Шарк';

		if (frontol.userValues.get('SharqTerminalId') == '') {
			SharqTerminalIdString += ' (Не указан)';
		}

		var isfiscalSharqString = '3. Подключить ФР от МТТ Шарк';
		if (frontol.userValues.get('isfiscalSharq') == '1') {
			isfiscalSharqString = '3. Отключить ФР от МТТ Шарк';
		}

		var SessionValString = 'Значение смены';

		if (frontol.userValues.get('IsSessionOn') == 1)
			SessionValString += ' ( Открыта )';
		else SessionValString += ' ( Закрыта )';

		var SharqCloseCashierString = ' X-Отчет ФР от МТТ Шарк';
		var SharqCloseShiftString = ' Z-Отчет ФР от МТТ Шарк';
		var TGXString = ' X-Отчет ФР от Т.Группа';
		var TGZString = ' Z-Отчет ФР от Т.Группа';
		var printLastDoc = 'Печать последнего фискального документа';
		var printLastDocByFDNum =
			'Печать последнего фискального документа по номеру ФД';

		// Окно меню
		var st = frontol.actions.selectString(
			'Константы',
			'---------- Отчеты ФР TP809 ---------------\n' +
				TGXString +
				'\n' +
				TGZString +
				'\n' +
				'\n' +
				printLastDoc +
				'\n' +
				printLastDocByFDNum +
				'\n' +
				SessionValString +
				'\n',

			'\n' +
				'TGX\n' +
				'TGZ\n' +
				'\n' +
				'printLastDoc\n' +
				'printLastDocByFDNum\n' +
				'IsSessionOn\n' +
				'\n'
		);

		if (st == null || st == '') return;

		switch (st) {
			case 'printLastDoc': {
				runPrintLastDoc();
				break;
			}

			case 'printLastDocByFDNum': {
				runPrintLastDocByFDNum();
				break;
			}
			case 'fiscalipadres': {
				EnterParameter('fiscalipadres', ' ip:port ФР-TP809 от Т.Групп');
				break;
			}

			case 'isfiscalTG': {
				if (frontol.userValues.get('isfiscalTG') == '1') {
					frontol.userValues.set('isfiscalTG', '0');
				} else {
					frontol.userValues.set('isfiscalTG', '1');
				}
				break;
			}

			case 'Sharqfiscalipadres': {
				EnterParameter('Sharqfiscalipadres', ' ip:port ФР от МТТ Шарк');
				break;
			}
			case 'SharqTerminalId': {
				EnterParameter('SharqTerminalId', ' Terminalid ФР от МТТ Шарк');
				break;
			}

			case 'isfiscalSharq': {
				if (frontol.userValues.get('isfiscalSharq') == '1') {
					frontol.userValues.set('isfiscalSharq', '0');
				} else {
					frontol.userValues.set('isfiscalSharq', '1');
				}
				break;
			}

			case 'IsSessionOn': {
				if (frontol.userValues.get('IsSessionOn') == '1') {
					frontol.userValues.set('IsSessionOn', '0');
				} else {
					frontol.userValues.set('IsSessionOn', '1');
				}
				break;
			}
			case 'SharqCloseCashier': {
				getJson2();
				var FRadress = frontol.userValues.get('Sharqfiscalipadres');
				var TerminalIdsunmi = frontol.userValues.get('SharqTerminalId');

				var options = {
					operationid: 'X-отчет'
				};
				var stringToSend = JSON.stringify(options);
				var result = SendToFiscalSharq(
					FRadress,
					TerminalIdsunmi,
					'xreport',
					stringToSend
				);
				showMessage(result.message);

				break;
			}

			case 'SharqCloseShift': {
				getJson2();
				var FRadress = frontol.userValues.get('Sharqfiscalipadres');
				var TerminalIdsunmi = frontol.userValues.get('SharqTerminalId');
				var options = {
					operationid: 'Z-отчет'
				};
				var stringToSend = JSON.stringify(options);
				var result = SendToFiscalSharq(
					FRadress,
					TerminalIdsunmi,
					'zreport',
					stringToSend
				);
				showMessage(result.message);

				break;
			}
			case 'TGX': {
				var FRadress = frontol.userValues.get('fiscalipadres');
				var options = {
					formCode: 'GET_X_REPORT',
					ffdVersion: 'VER_1',
					shouldPrintSlip: true
				};
				var stringToSend = JSONStringify(options);
				var FRadress = frontol.userValues.get('fiscalipadres');
				var result = sendtofiscal(FRadress, 'getXReport', stringToSend);
				//frontol.userValues.set("IsSessionOn", "0");

				break;
			}

			case 'TGZ': {
				var FRadress = frontol.userValues.get('fiscalipadres');
				var options = {
					formCode: 'CLOSE_SHIFT',
					ffdVersion: 'VER_1',
					shouldPrintSlip: true,
					cashier: frontol.currentUser.name,
					kktVersion: '1'
				};
				var stringToSend = JSONStringify(options);
				var FRadress = frontol.userValues.get('fiscalipadres');
				var result = sendtofiscal(FRadress, 'closeShift', stringToSend);
				frontol.userValues.set('IsSessionOn', '0');
				break;
			}
		}
	}
}

function sendtofiscal(ipdevice, comand, stringToSend) {
	//подключаем методы для работы с JSON
	getJson2();
	var request;

	request = new ActiveXObject('Microsoft.XMLHTTP');
	//Начинаем запрос
	request.open('POST', 'http://' + ipdevice + '/api/' + comand);
	request.setRequestHeader('Content-Type', 'application/json');
	request.send(stringToSend);

	var timeoutQuery = 40; // Таймаут
	for (var i = 1; i <= timeoutQuery; i++) {
		if (request.readyState != 4) {
			frontol.actions.wait(REQUEST_PROCESS_OFD, 0);
		} else {
			break;
		}
	}

	// Проверка ready state
	if (request.readyState != 4) {
		frontol.actions.showMessage('Нет ответа или связи с ККМ', Icon.Error);
		cancelAct();
		return;
	}

	//TODO.
	showMessage('GOT RESPONSE FROM KKM -> ' + JSON.parse(request.responseText));


	//При успешного ответа
	if (request.status == 200) {
		if (comand == 'openShift') {
			frontol.userValues.set('IsSessionOn', '1');
		}
		if (comand == 'closeShift') {
			frontol.userValues.set('IsSessionOn', '0');
		}
		var ObjectJSON = JSON.parse(request.responseText);

		return ObjectJSON;
	}
	//============= Если есть ошибки ==================================================
	if (request.status != '200') {
		//frontol.actions.showMessage("Информация от фискального регистратора"+CR+CR+request.responseText, Icon.Error)
		var ObjectJSON = JSONParse(request.responseText);
		if (ObjectJSON.rc == 'SHIFT_MUST_BE_CLOSED') {
			frontol.userValues.set('IsSessionOn', '1');
		}
		frontol.actions.showMessage(
			'Ошибка ОФД: ' + request.status + ',Нет связи с ККМ',
			Icon.Error
		);
		cancelAct();
		return;
	}
}
// Json Объект
function JSONParse(jsonString) {
	// Убедимся, что строка не пустая
	if (!jsonString || jsonString === '') {
		frontol.actions.showMessage('Пустая строка JSON');
	}
	// Убедимся, что строка начинается и заканчивается с '{' и '}' соответственно
	if (
		jsonString.charAt(0) !== '{' ||
		jsonString.charAt(jsonString.length - 1) !== '}'
	) {
		frontol.actions.showMessage('Некорректный формат JSON');
	}
	// Удаляем начальный и конечный символ '{' и '}'
	jsonString = jsonString.slice(1, -1);
	// Разбиваем строку на массив по запятым
	var parts = jsonString.split(',');
	// Создаем объект для хранения пар ключ-значение
	var obj = {};
	// Проходим по каждой паре ключ-значение и добавляем их в объект
	for (var i = 0; i < parts.length; i++) {
		//Получаем  ключ-значение
		var keyValue = parts[i].split(':');

		//sboboev+ проверка на null
		// Новая, более точная проверка: есть ли значение после двоеточия
		if (!keyValue[1]) {
			frontol.actions.showMessage(
				'Отсутствует значение для ключа: ' + keyValue[0],
				Icon.Error
			);
			continue;
		}
		//sboboev-

		//получаем ключ
		var key = keyValue[0].replace(/"/g, '').replace(/ /g, '');
		//получаем значение
		var value = keyValue[1].replace(/"/g, '').replace(/ /g, '');
		//запихаем в объект
		obj[key] = value;
	}
	return obj;
}
// Json в строка
function JSONStringify(obj) {
	var obj2 = {
		formCode: 'OPEN_SHIFT',
		ffdVersion: 'VER_1',
		shouldPrintSlip: true,
		cashier: frontol.currentUser.name,
		kktVersion: '1'
	};
	var jsonString = '{';
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			var value = obj[key];
			if (typeof value === 'string') {
				value = '"' + value + '"';
			} else if (typeof value === 'object' && value !== null) {
				value = JSONStringify(value);
			}
			jsonString += '"' + key + '": ' + value + ', ';
		}
	}
	if (jsonString.length > 1) {
		jsonString = jsonString.slice(0, -1);
	}
	jsonString = jsonString.slice(0, -1);
	jsonString += '}';
	return jsonString;
}
// Тело запроса на Проверка Статуса ФР
function deviceStatusToSend() {
	var options = JSONStringify({
		formCode: 'DEVICE_STATUS',
		shouldPrintSlip: true
	});
	return options;
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
	if (isReturnDocument(doc)) {
		// Проверим вводили ли на основании
		if (doc.baseDocument) {
			// На основании, значит документ основания (т.е продажа)
			// должна иметь РРН
			return _getFreedomBankRRNFromDoc(doc.baseDocument)
		} else {
			// Просто возврат и в документе выбран банковский
			// вид оплаты (т.е ФридомБанк). Запросим РРН
			return _askRRNFromUser()
		}
	}
	// значит обычная продажа
	return _getFreedomBankRRNFromDoc(doc)
}

// Формируем документ типом строки для запроса
function GiveDocumentToString(doc, PrintOption) {
	getJson2();
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
			var code = '' + doc.position.ware.code + ''; // код товара
			var name = doc.position.ware.text; // Название товара
			var price = Number(doc.position.price * 100).round(0); // цена товара
			var quantity = parseFloat(doc.position.quantity.toFixed(3)); // Number(doc.position.quantity);
			var sum = Number(doc.position.sum * 100).round(0); // Сумма товара

			//Получаем массив товаров в строчном виде
			var product = JSONStringify(
				createProductForFiscal(
					code,
					name,
					price,
					quantity,
					sum,
					vatValue
				)
			);

			//присвоим запятую
			products = products + product + ',';
		}
	}

	//Корректируем приобразованного массива товаров в строку
	products = products.slice(0, -1);
	products = '[' + products + ']';
	products = '"products":' + products;
	/*
 //расчет НДС 14%-ов
	var docsum = Number(doc.totalSum * 100).round(0);
	var nds = Number(docsum / 1.14).round(0);
	var vatsvalue = Number(nds * 0.14).round(0); //vats значения

 // Получаем строчный массив vats
	var vats = JSONStringify(createVatsForFiscal(vatsvalue));
	vats = "[" + vats + "]";
 */

	var vatString = '';

	//Налог документа+
	for (doc.tax.index = 1; doc.tax.index <= doc.tax.count; doc.tax.index++) {
		var TS = doc.tax.sum;
		var TTRV = doc.tax.taxRateValue;
		TS = Number(TS * 100).round(0);
		// Получаем строчный массив vats
		var vats = JSONStringify(createVatsForFiscal(TTRV, TS));
		vatString = vatString + vats + ',';
	}

	vatString = vatString.slice(0, -1);

	vats = '[' + vatString + ']';
	//Налог документа-

	if(isSaleDocument(doc) || isReturnDocument(doc)) {
		var customMess = createCustomDataForBill(doc);
		var infoCardClient = removeNewlines(customMess);
		var extraInfo = chekInfoArea(doc);
		infoCardClient = infoCardClient + extraInfo;
	}

	// Шапка документа для отправки
	var options = {
		formCode: 'RECEIPT',
		ffdVersion: 'VER_1',
		shouldPrintSlip: true,
		operationType: 'INCOME',
		taxType: 'GENERAL',
		consumerContacts: PrintOption,
		customMessage: infoCardClient
	};

	if (isReturnDocument(doc)) {
		options.operationType = 'REVERT_INCOME'
	}
	options = JSONStringify(options)

	// добавим массив товаров в шапку
	options = options.slice(0, -1) + ',';
	options = options + products + ',';

	// Оплата документа продажи
	var cashamount = 0;
	var nocashamount = 0;
	var oddmoney = 0;
	var AmountChangeCash = 0;

	for (
		doc.payment.index = 1;
		doc.payment.index <= doc.payment.count;
		doc.payment.index++
	) {
		if (doc.payment.sumInBaseCurrency > 0) {
			if (doc.payment.type.code == 1) {
				// наличные
				cashamount = cashamount + doc.payment.sumInPaymentCurrency;
			} else {
				nocashamount = nocashamount + doc.payment.sumInPaymentCurrency;
			}
		}
	}

	oddmoney = doc.totalSum - (nocashamount + cashamount);
	if (oddmoney < 0) {
		AmountChangeCash = oddmoney * -1;
	} else {
		AmountChangeCash = 0;
	}
	cashamount = cashamount - AmountChangeCash;

	var options2 = {
			receiptSum: Number(doc.totalSum * 100).round(0),
			receiptCash: Number(cashamount * 100).round(0),
			receiptNonCash: Number(nocashamount * 100).round(0),
			cashChangeAmount: Number(AmountChangeCash * 100).round(0), //Сдача
			bankRRN: null,
			bankCard: null
		};

	if (nocashamount > 0) {
		options2.bankRRN = _getRRNForCheck(doc);
	} 

	options2 = JSONStringify(options2)
	// Добавим Налоги документа к подвалу
	options2 = options2.slice(1);
	options2 = options2.slice(0, -1) + ',';
	options = options + options2 + '"taxes":{"vats":' + vats + '}}';
	var stringToSend = options;

	if (justWriteLog()) {
		var stringToSendObject = JSON.parse(stringToSend);
		writeToFile(
			'\nТело запроса:\n' + JSON.stringify(stringToSendObject, null, 2)
		);
	}
	return stringToSend;
}

function justWriteLog() {
	if (frontol.userValues.get('isWriteLog') == '1') {
		return true;
	} else {
		return false;
	}
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
		frontol.actions.showMessage('Ошибка записи в файл: ' + e.message);
	}
}

function cancelAct() {
	frontol.actions.cancel();
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

// Массив товаров
//sboboev+
function createProductForFiscal(
	prcode,
	prname,
	prprice,
	prquantity,
	prsum,
	vat,
	vatCode
) {
	var prname = escapeSpecialChars(prname);
	var vatValue;

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
	if (
		vat === null ||
		vat === undefined ||
		vat === '' ||
		vat === '-' ||
		isNaN(vat)
	) {
		frontol.actions.showMessage(
			"Ошибка: У товара '" + prname + "' ставка НДС не указана.",
			Icon.Error
		);
		cancelAct();
		return null;
	}

	// Проверка: есть ли такая ставка в карте
	if (!(vat in vatMap)) {
		frontol.actions.showMessage(
			"Ошибка: Неверная ставка НДС у товара '" +
				prname +
				"'. Указано: " +
				vat +
				'%',
			Icon.Error
		);
		cancelAct();
		return null;
	}

	// Преобразование в формат Фронтола
	if (vat == 7) {
		vatValue = 'REDUCED1';
	} else if (vat == 5) {
		vatValue = 'REDUCED2';
	} else if (vat == 2.5) {
		vatValue = 'REDUCED3';
	} else if (vat == 14) {
		vatValue = 'STANDARD';
	} else if (vat == 0) {
		vatValue = 'ZERO_TAX';
	} else {
		vatValue = 'STANDARD'; // на всякий случай
	}

	return {
		code: null,
		name: prname,
		price: prprice,
		quantity: prquantity,
		commodity: 'GOODS',
		vatCode: vatValue,
		sum: prsum,
		marker: ''
	};
}
//sboboev-

/*
function createProductForFiscal(prcode, prname, prprice, prquantity, prsum) {

 var prname = escapeSpecialChars(prname);
	return {
		code: prcode,
		name: prname,
		price: prprice,
		quantity: prquantity,
		commodity: "GOODS",
		vatCode: "vatValue",
		sum: prsum,
		marker: ""
	};
}

// массив Vats
function createVatsForFiscal(vatSum) {
	return {
		vatCode: "vatValue",
		vatSum: vatSum
	};
}
*/

// массив Vats
function createVatsForFiscal(vatsValue, vatSum) {
	if (vatsValue == 7) {
		var vatValue = 'REDUCED1';
	} else if (vatsValue == 5) {
		var vatValue = 'REDUCED2';
	} else if (vatsValue == 2.5) {
		var vatValue = 'REDUCED3';
	} else if (vatsValue == 14) {
		var vatValue = 'STANDARD';
	} else if (vatsValue == 0) {
		var vatValue = 'ZERO_TAX';
	}
	return {
		vatCode: vatValue,
		vatSum: vatSum
	};
}

//ДопФункции
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

function IsFRfromTG() {
	if (frontol.userValues.get('isfiscalTG') === '1') {
		return true;
	} else {
		return false;
	}
}

function IsSessionOpen() {
	if (frontol.userValues.get('IsSessionOn') === '1') {
		return true;
	} else {
		return false;
	}
}
function show(message) {
	frontol.actions.showMessage(message);
}

function OpenDraw() {
	var options = JSONStringify({
		formCode: 'OPEN_DRAWER',
		onTimeout: 500,
		offTimeout: 100,
		onQuantity: 1
	});

	var stringToSend = options;
	var FRadress = frontol.userValues.get('fiscalipadres');
	var result = sendtofiscal(FRadress, 'openDrawer', stringToSend);
	if (result.rc == 'SUCCESS') {
		return result.rc;
	} else if (result.rc !== 'SUCCESS') {
		var error = getErrorOFD(result.rc);
		frontol.actions.showMessage(
			'Не исправность с ДЯ: ' + CR_MESSAGE + CR_MESSAGE + error,
			Icon.Error
		);
		//break;
		return;
	}
}

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

function toISOProto() {
	if (!Date.prototype.toISOString) {
		(function () {
			function pad(number) {
				var r = String(number);
				if (r.length === 1) {
					r = '0' + r;
				}
				return r;
			}
			Date.prototype.toISOString = function () {
				return (
					this.getFullYear() +
					'-' +
					pad(this.getMonth() + 1) +
					'-' +
					pad(this.getDate()) +
					'T' +
					pad(this.getHours()) +
					':' +
					pad(this.getMinutes()) +
					':' +
					pad(this.getSeconds()) +
					'.' +
					String((this.getMilliseconds() / 1000).toFixed(3)).slice(
						2,
						5
					) +
					'Z'
				);
			};
		})();
	}
}

function logg(a, b, c, d) {
	var IS_DEBUG = true;
	if (!IS_DEBUG) return;
	try {
		var inserts = [];
		!b
			? (b = '')
			: typeof b != 'string'
			? (b = JSON.stringify(b))
			: (b = b);
		inserts.push(b);
		!c
			? (c = '')
			: typeof c != 'string'
			? (c = JSON.stringify(c))
			: (c = c);
		inserts.push(c);
		!d
			? (d = '')
			: typeof d != 'string'
			? (d = JSON.stringify(d))
			: (d = d);
		inserts.push(d);
		var borderString =
			'\n------------------------------------------------------------------------------------------------------\n';
		var sringForInserts = a.split('{}');
		var date = new Date().toISOString();
		var stringForLog = date + ' ';
		if (sringForInserts.length == 1) {
			stringForLog = stringForLog + a + ' ' + b + ' ' + c + ' ' + d;
		} else {
			//stringForLog = sringForInserts[0];
			for (var i = 0; i < sringForInserts.length; i++) {
				stringForLog += sringForInserts[i] + ' {' + inserts[i] + ' }';
			}
		}
		stringForLog += borderString;

		var fso = new ActiveXObject('Scripting.FileSystemObject');

		var fileName = 'RxLoy_' + date.slice(0, date.indexOf('T')) + '.txt';
		//showMessage(LOG_DIR + "/" + fileName);
		createDirectory(LOG_DIR);
		var file = fso.OpenTextFile(LOG_DIR + '/' + fileName, 8, true);
		file.Write(stringForLog);
		file.Close();
	} catch (e) {
		showMessage(e.message);
	}
}

function createDirectory(path) {
	var dilimenter = '/';
	var fso = new ActiveXObject('Scripting.FileSystemObject');
	if (fso.FolderExists(path)) return;
	var pathArr = path.split(dilimenter);
	var dir = pathArr[0];
	for (var i = 1; i < pathArr.length; i++) {
		dir += dilimenter + pathArr[i];
		if (!fso.FolderExists(dir)) fso.CreateFolder(dir);
	}
}

function createCustomDataForBill(doc) {
	var message = '';
	message =
		message + frontol.currentDocument.userValues.get('CustomActionMess');
	if (message) message = message + '\n';

	message = message + printCardBalances(doc);
	message = message + doc.userValues.get(PROMO_TEXT_KEY);
	return message;
}

function printCardBalances(doc) {
	var res = '';
	var cardNumbers = doc.userValues.get('cardBoxNumbers');
	var cardBalances = doc.userValues.get('cardBoxBalances');

	if (cardNumbers) {
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

// маскировка номера карты
function hideCardNumber(cardNumber) {
	return cardNumber.replace(
		/(\d{4})(\d{5})(\d*)/,
		function (matchMedia, p1, p2, p3) {
			return p1 + p2.replace(/\d/g, '*') + p3;
		}
	);
}

function removeNewlines(str) {
	// Удаляем символы новой строки (\n) и возврата каретки (\r)
	return str.replace(/[\n\r]/g, '');
}

function chekInfoArea(doc) {
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

//Status FOR KKM
function StatusKKM() {
	var options = JSONStringify({
		formCode: 'DEVICE_STATUS',
		shouldPrintSlip: false
	});

	var stringToSend = options;
	var FRadress = frontol.userValues.get('fiscalipadres');
	var result = sendtofiscal(FRadress, 'deviceStatus', stringToSend);
	// frontol.actions.showMessage(result.data.onlineStatus);
	if (result.rc == 'SUCCESS') {
		if (result.data.onlineStatus == true) {
		} else {
			frontol.actions.showMessage('ПРОВЕРЬТЕ СОСТОЯНИЕ ККМ');
		}
		// return result.rc;
	} else if (result.rc !== 'SUCCESS') {
		var error = getErrorOFD(result.rc);
		frontol.actions.showMessage(
			'Ответ ККМ: ' + CR_MESSAGE + CR_MESSAGE + error,
			Icon.Error
		);
	}
}

Fiscat: {
	var FISCAT_PORT = 'fiscatPort';
	var COM_PORT_ENABLED = 'comPortEnabled';

	function isSysAdmin() {
		// if (!userHasProfile()) showError("Не установлен профиль текущего пользователя");
		var isAdmin;
		try {
			isAdmin = frontol.currentUser.profile.code == 1;
		} catch (e) {
			isAdmin = AdminUser === frontol.currentUser.code;
		}
		return isAdmin;
	}

	function isUser() {
		return frontol.currentUser != false;
	}

	function userHasProfile() {
		if (!isUser()) showError('Не установлен текущий пользователь');
		return isUser() && frontol.currentUser.profile;
	}

	function isAdminOrMainCashier() {
		// if (!userHasProfile()) showError("Не установлен профиль текущего пользователя");
		var res;
		try {
			res =
				frontol.currentUser.profile.code == 2 ||
				frontol.currentUser.profile.code == 3;
		} catch (e) {
			res = HeadCashier === frontol.currentUser.code;
		}
		return res;
	}

	function isMenuAccessAvailable() {
		return isSysAdmin() || isAdminOrMainCashier();
	}

	function runPrintLastDoc() {
		var dataString = JSON.stringify({
			formCode: 'PRINT_LAST_FD',
			ffdVersion: 'VER_1',
			shouldPrintSlip: true
		});

		printDocByComPort(dataString, 'getLastFD');
	}

	function runPrintLastDocByFDNum() {
		var docNumber = frontol.actions.inputString(
			'Введите номер документа',
			''
		);
		if (!docNumber) {
			frontol.actions.showMessage(
				'Номер документа не введен',
				Icon.Error
			);
			return;
		}

		if (!/^\d+$/g.test(docNumber)) {
			frontol.actions.showMessage(
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

		printDocByComPort(dataString, 'getFDByNumber');
	}

	function printDocByComPort(dataString, action) {
		var FRadress = frontol.userValues.get('fiscalipadres');
		var result = sendtofiscal(FRadress, action, dataString);

		if (result.rc !== 'SUCCESS') {
			var error = getErrorOFD(result.rc);
			frontol.actions.showMessage(
				'Ответ ОФД с ошибкой: ' + CR_MESSAGE + ' -> ' + error,
				Icon.Error
			);
			cancelAct();
			return;
		}
	}
}

//Душанбе Сити ==========================================================================================================================================================================================

//Опеределения
var adres = 'http://109.74.70.49:96/ashan';
var pan = '5058270385062681'; //Установите актуальный Qr код
var sign = 'f3c945d00836c34c78340f2504f5cc7f';

function dcinit() {
	frontol.addEventListener('addPayment', 'dcpay', true);
}

function dcpay(payment) {
	var tranid =
		frontol.currentDocument.number +
		frontol.sessionNumber +
		payment.sumInBaseCurrency +
		frontol.codeWorkplace +
		Math.floor(Math.random() * 900);
	//var summapay = Number(frontol.currentDocument.totalSum);
	var summapay = payment.sumInBaseCurrency;
	//Проверяем на тип платежа с ашана
	if (payment.type.code == DC_QR) {
		//writeLog("Выбран тип платежа Qr");
		//Если тип продажа
		if (frontol.currentDocument.type.code === 1) {
			//writeLog("Выбран тип продажа");
			var stringToSend =
				'<action>getpaystatus</action><docNumber>' +
				tranid +
				'</docNumber><pan>' +
				pan +
				'</pan><summa>' +
				summapay +
				'</summa><sign>' +
				sign +
				'</sign>';
			//writeLog("Запрос на сервер IP"+adres);
			//writeLog("Запрос на сервер Тело"+stringToSend);

			var httpClient = new ActiveXObject(
				'AsyncHttpClient.HttpClientWrapper'
			);
			var loadingScreen = new ActiveXObject(
				'CustomLoadingInterface.LoadingScreen'
			);
			var imagePath = 'D:/wait.jpg'; // Замените на актуальный путь
			loadingScreen.SetImage(imagePath); // Устанавливаем изображение
			loadingScreen.Show();

			try {
				var response = httpClient.PostSync(adres, stringToSend);
			} catch (error) {
				frontol.actions.showMessage(
					'Произошла ошибка: Сервер ДС недоступен, попробуйте позже!',
					Icon.Error
				);
				cancelAct();
				return;
				ы;
			}
			var code = ReadXml(response, 'code');
			//writeLog("Пришел запрос");
			//============= Если есть ошибки ==================================================
			// Если успех
			if (code == '200') {
				loadingScreen.Hide();
				var paymentcode;
				var crcode = ReadXml(response, 'crcode');
				if (crcode != '') {
					paymentcode = crcode;
				} else {
					paymentcode = payment.type.code;
				}
				var summafrontol = parseFloat(ReadXml(response, 'summa'));
				frontol.actions.showMessage(
					ReadXml(response, 'message') +
						ENTER +
						'Сумма: ' +
						ReadXml(response, 'summa') +
						ENTER +
						'Дата: ' +
						ReadXml(response, 'date') +
						ENTER +
						'Отправитель: ' +
						ReadXml(response, 'phone'),
					Icon.Information
				);
				frontol.currentDocument.addPayment(
					paymentcode,
					summafrontol,
					null
				);
				var dateforfile = ReadXml(response, 'frontoldate');
				cancelAct();
			} else {
				loadingScreen.Hide();
				//writeLog("Пришел ответ не успех"+response);
				frontol.actions.showMessage(
					'Информация: ' + ReadXml(response, 'message')
				);
				var dateforfile = ReadXml(response, 'frontoldate');
				cancelAct();
				return;
			}

			if (code == '') {
				loadingScreen.Hide();
				frontol.actions.showMessage(
					'Не пришел ответ от DC',
					Icon.Error
				);
				cancelAct();
				//writeLog("Нет соединения или протокол не доступен");
				return;
			}
		}
	}
}

function ReadXml(data, value) {
	var pos = data.indexOf('<' + value + '>');
	var poss = data.indexOf('<' + value + '>') + value.length;
	var pos1 = poss + 3 - 1;
	//if(pos.length<1){return "";}
	var pos2 = data.indexOf('</' + value + '>');
	var res = data.substr(pos1, pos2 - pos1);
	if (res.length == 0) return '';
	return res;
}

function cancelAct() {
	frontol.actions.cancel();
}

// FREEDOM BANK \ START ==========================================================================================================================================================================================

var FREEDOM_BANK_PAYMENT_CODE = 101;

function FreedomBankInit() {
	frontol.addEventListener('addPayment', 'FreedomBankBeforeAddPayment', true);
	frontol.addEventListener(
		'cancelDocument',
		'FreedomBankAfterCancelDocument',
		false
	);
}

function _getTerminalHttpAddress(terminalIpAddress) {
	return ['http://' + terminalIpAddress].join('/');
}

function _askRRNFromUser() {
	var RRN = frontol.actions.inputString(
		'Введите RRN для возврата на терминале Freedom Bank',
		''
	);

	return RRN;
}

function _getFreedomBankRRNFromDoc(doc) {
	var RRN = doc.userValues.get('FreedomBank_RRN');
	return RRN;
}

function isAppIsNotLaunched(err) {
	if (err.number) {
		return err.number == -2146697211
	}
	return false;
}

// ACTIONS
/*

*/
function _freedomBankSale(payment, terminalIpAdd) {
	var amount = payment.sumInBaseCurrency;
	var dataToSend = {
		task: 'purchase',
		data: {
			amount: amount.toString()
		}
	};
	var url = _getTerminalHttpAddress(terminalIpAdd);
	try {
		showMessage('Sending request to ' + url)
		showMessage('Payload ' + JSON.stringify(dataToSend))
		var result = sendHttpRequestSimple(url, 'POST', dataToSend);
	} catch (e) {
		if (isAppIsNotLaunched(e)) {
			e.message = 'Не удалось отправить запрос на терминал. Убедитесь, что терминал включен' +
			' и приложение банка запущено.'
		}
		showMessage(
			'Ошибка при отправке запроса к терминалу Freedom Bank' +
				CR +
				e.message +
				CR +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}

	var currDoc = frontol.currentDocument;
	if (result.success) {
		var responseData = result.data.data;
		// Обработка успешного ответа
		if (responseData.result == 0) {
			var RRN = responseData.tagRRN;
			currDoc.userValues.set('FreedomBank_RRN', RRN); // понадобится при возврате и других операциях
			currDoc.addPayment(payment.type.code, amount, null);
		} else {
			showMessage(
				'Ошибка при обработке платежа' +
					CR +
					CONTACT_YOUR_TECHNICIAN_MESSAGE +
					CR +
					responseData.message,
				Icon.Error
			);
		}
	} else {
		// Обработка ошибки запроса
		showMessage(
			'Не удалось выполнить запрос к терминалу Freedom Bank' +
				CR +
				result.message +
				CR +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}
}

function _freedomBankReturn(payment, terminalIpAdd) {
	var currDoc = frontol.currentDocument;
	var baseDocument = currDoc.baseDocument;

	var amount = payment.sumInBaseCurrency;

	var RRN;
	if (baseDocument) {
		// Если вводится на основании, то RRN должен быть у документа основания
		var RRN = _getFreedomBankRRNFromDoc(baseDocument);
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

	var dataToSend = {
		task: 'refund',
		data: {
			amount: amount,
			tagRRN: RRN
		}
	};
	var url = _getTerminalHttpAddress(terminalIpAdd);
	var result = sendHttpRequestSimple(url, 'POST', dataToSend);
	if (result.success) {
		var responseData = result.data.data;
		// Обработка успешного ответа
		if (responseData.result == 0) {
			currDoc.addPayment(payment.type.code, amount, null);
		} else {
			var msg = responseData.message || responseData.msg;
			showMessage(
				'Ошибка при обработке возврата' +
					CR_MESSAGE +
					CONTACT_YOUR_TECHNICIAN_MESSAGE +
					CR_MESSAGE +
					msg,
				Icon.Error
			);
		}
	} else {
		// Обработка ошибки запроса
		showMessage(
			'Ошибка при подключении к терминалу Freedom Bank' +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
	}
}

function _freedomBankCancelDoc(doc, terminalIpAdd) {
	if (!isSaleDocument(doc)) {
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
	// FreedomBankBeforeAddPayment, который добавляет обработал платеж
	// и добавил RRN в пользовательские поля документа
	var RRN = _getFreedomBankRRNFromDoc(doc);
	if (!RRN) {
		// АПИ требует RRN для отмены
		showMessage(
			'RRN не найден в документе. Отмена невозможна.' + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}

	var docPayment = getPaymentOfType(doc, FREEDOM_BANK_PAYMENT_CODE);
	if (!docPayment) {
		// Платеж Freedom Bank не найден. Такого не должно быть, т.к RRN есть
		// и платеж был найден в вызывающей функции (AfterCancelDocument)
		showMessage(
			'Платеж типа Freedom Bank не найден в документе. Отмена невозможна.' + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE,
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
	if (result.success) {
		var responseData = result.data.data;
		// Обработка успешного ответа
		if (responseData.result == 0) {
			// Успешно отменено
			return;
		} else {
			showMessage(
				'Ошибка при отмене документа' +
					CR_MESSAGE +
					CONTACT_YOUR_TECHNICIAN_MESSAGE +
					CR_MESSAGE +
					responseData.message,
				Icon.Error
			);
			cancelAct();
			return;
		}
	} else {
		// Обработка ошибки запроса
		showMessage(
			'Ошибка при подключении к терминалу Freedom Bank' +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}
}

function _freedomBankCloseSession(terminalIpAdd) {
	url = _getTerminalHttpAddress(terminalIpAdd)

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

	var terminalIpAdd = getUserParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS);
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

	if (isSaleDocument(frontol.currentDocument)) {
		// Продажа
		_freedomBankSale(payment, terminalIpAdd);
	} else if (isReturnDocument(frontol.currentDocument)) {
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

function FreedomBankAfterCancelDocument() {
	var currDoc = frontol.currentDocument;

	if (!hasPaymentOfType(FREEDOM_BANK_PAYMENT_CODE)) {
		return;
	}
	var terminalIpAdd = getUserParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS);
	if (!terminalIpAdd) {
		showMessage(
			'Не задан IP адрес терминала Freedom Bank' +
				CR_MESSAGE +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}
	_freedomBankCancelDoc(currDoc, terminalIpAdd);
}

function FreedomBankAfterSessionClose() {
	var terminalIpAdd = getUserParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS);
	if (!terminalIpAdd) {
		return;
	}
	_freedomBankCloseSession()
}


// MISC

function $TestFreedomConnection() {
	var dataToSend = {
		task: 'print',
		data: {
			actionCode: "2"
		}
	};
	var terminalIpAdd = getUserParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS);
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
				CR +
				e.message +
				CR +
				CONTACT_YOUR_TECHNICIAN_MESSAGE,
			Icon.Error
		);
		cancelAct();
		return;
	}
}

// FREEDOM BANK \ END ======================================================