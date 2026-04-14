//////////////////////////////////////////////
//                                          //
//     Modified : 2025-06-23 14:25 2025v6   //
//                                          //
//      Version : 6                         //
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

var LOG_DIR = "D:/logs";
var IS_DUBUG = false;

//======Технология групп +
var ENTER = "\n";
var CONNECT_ERROR = "Ошибка сети " + ENTER;
var REQUEST_PROCESS = "Идет запрос ждите..." + ENTER;
var REQUEST_PROCESS_OFD = "Процесс печати чека..." + ENTER;
//================================================================
var CR_MESSAGE = "\n";
var CR = "\n";
var REQUEST_IN_PROCESS_MESSAGE = "Обработка запроса...";
var TRY_AGAIN_MESSAGE = "Попробуйте ещё раз";

var CONTACT_YOUR_TECHNICIAN_MESSAGE = "Обратитесь к администратору или к своему техническому специалисту" + CR_MESSAGE;
var SERVER_ADDRESS_NOT_SET_MESSAGE = "Не указан адрес сервера" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var UNKNOWN_ERROR_MESSAGE = "Неизвестная ошибка" + CR_MESSAGE;
var NO_SERVER_RESPONSE_MESSAGE = "Нет ответа от сервера" + CR_MESSAGE;
var INTERNET_ERROR_MESSAGE = "Ошибка сети" + CR_MESSAGE;
var SERVER_ERROR_MESSAGE = "Ошибка сервера" + CR_MESSAGE;
var ERROR_MESSAGE = "Ошибка" + CR_MESSAGE;
var DESCRIPTION_MESSAGE = "Описание: ";
var HTTP_STATE_MESSAGE = "Статус HTTP-запроса->";
var HTTP_CODE_MESSAGE = "HTTP-код->";
//Технология групп -

var PROMO_TEXT_KEY = "promoText";
var PROMO_TEXT_VALUE =
    "Поздравляем! Вы стали нашим 111-м покупателем в гипермаркете Би1. Вы стали обладателем подарка! Спасибо, что Вы с нами!";
var CUSTOM_ACTION_DATA = "customActionData"; //customActionForAshan
var CUSTOM_ACTIONS_FILE_NAME = "actions.txt"; //customActionForAshan
var SHELF_LIFE_DISCOUNTS_VALUE_NAME = "ShelfLifeDiscounts";
var SHELF_LIFE_DISCOUNTS_PATH_VALUE_NAME = "ShelfLifeDiscountsPath";
var SHELF_LIFE_DISCOUNTS_FILE = "discounts.txt";

var BONUS_PAYMENT_CODE_NAME = "BonusPaymentCode";
var COUPON_PAYMENT_CODE_NAME = "CouponPaymentCode";
var DISCOUNT_PAYMENT_CODE_NAME = "DiscountPaymentCode";
var DEPOSIT_PAYMENT_CODE_NAME = "DepositPaymentCode";

var GET_ALL_CHECKS_FROM_CASH_VALUE_NAME = "GetAllChecksFromCash";

var CR_MESSAGE = "\n";

var RX_LOYALTY_NAME = "RxLoyalty";
var CONTROL_MENU_TITLE = "Меню управления " + RX_LOYALTY_NAME;

var REQUEST_IN_PROCESS_MESSAGE = "Обработка запроса...";
var TRY_AGAIN_MESSAGE = "Попробуйте ещё раз";
var REQUEST_WILL_BE_SEND_LATER_MESSAGE = "Запрос будет отправлен позже";
var CHECK_SETTINGS_MESSAGE = "Проверьте настройки программы лояльности " + RX_LOYALTY_NAME + CR_MESSAGE;
var OR_MESSAGE = "или" + CR_MESSAGE;
var CONTACT_YOUR_TECHNICIAN_MESSAGE = "Обратитесь к администратору или к своему техническому специалисту" + CR_MESSAGE;
var CONTACT_SUPPORT_MESSAGE = "Обратитесь в службу поддержки программы лояльности " + RX_LOYALTY_NAME + CR_MESSAGE;

var LICENSE_NOT_SET_MESSAGE =
    "Не указана лицензия" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var SERVER_ADDRESS_NOT_SET_MESSAGE =
    "Не указан адрес сервера" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var TOKEN_NOT_SET_MESSAGE =
    "Не указан токен авторизации" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;

var LICENSE_NOT_FOUND_MESSAGE =
    "Лицензия не найдена" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + OR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var TOKEN_NOT_FOUND_MESSAGE =
    "Токен авторизации не найден" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + OR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;

var CARD_CODE_EMPTY_MESSAGE = "Не указан номер карты, купона или сертификата";
var CARD_PATTERN_NOT_VALID_MESSAGE =
    "Номер карты, купона или сертификата не соответствует шаблону" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_PATTERN_NOT_EXIST_MESSAGE =
    "Шаблон номера карты, купона или сертификата не найден" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_BLOCKED_MESSAGE = "Карта, купон или сертификат заблокированы" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_ALREADY_REGISTERED_MESSAGE =
    "Карта, купон или сертификат скорее всего уже были зарегистрированы на другой кассе." +
    CR_MESSAGE +
    "Одновременное использование на разных кассах не допускается" +
    CR_MESSAGE +
    CONTACT_YOUR_TECHNICIAN_MESSAGE +
    OR_MESSAGE +
    CONTACT_SUPPORT_MESSAGE;
var CARD_SYNCHRONOUS_REGISTRATION_MESSAGE =
    "Попытка одновременной регистрации карты, купона или сертификата с разных касс" +
    CR_MESSAGE +
    CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_NOT_FOUND_MESSAGE =
    "Номер карты, купона или сертификата не найден" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_EXPIRED_MESSAGE =
    "Срок действия карты, купона или сертификата истек" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_ACCUMULATION_ONLY_MESSAGE = "Бонусная карта доступна только для накопления";
var CARD_REGISTRATION_CANCELED_MESSAGE = "Ввод карты отменен";
var CARD_USING_NOT_CONFIRMED = "Правомерность использования карты не подтверждена";

var DOCUMENT_TYPE_NOT_FOUND_MESSAGE =
    "Не найден тип отправленного документа" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_TYPE_INCORRECT_MESSAGE =
    "Некорректный тип отправленного документа" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_DETAILS_EMPTY_MESSAGE =
    "Список товаров в отправленном документе пуст" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_DISCOUNTS_EMPTY_MESSAGE =
    "В отправленном документе нет скидок" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_ALREADY_RETURNED_MESSAGE =
    "По отправленному документу уже был возврат" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_EMPTY_MESSAGE = "Отправленый документ пуст" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var PARENT_DOCUMENT_NOT_FOUND_MESSAGE =
    "Для отправленного документа не найден документ-основание" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_WILL_BE_SEND_LATER_MESSAGE = "Документ будет отправлен позже";
var NO_OPENED_DOCUMENTS_MESSAGE = "Нет открытых документов";
var NO_DELAYED_DOCUMENTS_TO_SEND_MESSAGE = "Нет отложенных документов для отправки";

var UNAUTHORIZED_MESSAGE =
    "Ошибка авторизации, возможно указан неверный токен" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var LICENSE_NOT_ACTIVE_MESSAGE = "Лицензия недействительна" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var SUBJECT_NOT_FOUND_MESSAGE =
    "Не найден магазин, указанный для этой кассы" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CALCULATION_ALGORITHM_NOT_FOUND_MESSAGE =
    "Не найдены правила для расчета скидок" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var INVALID_CODE_TO_START_GENERATE =
    "Невозможно запустить генератор для отправленного кода" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var NO_CASH_PARAMS_FOR_LICENSE_MESSAGE =
    "Нет настроек для кассы с указанной лицензией" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var UNKNOWN_ERROR_MESSAGE = "Неизвестная ошибка" + CR_MESSAGE;
var NO_SERVER_RESPONSE_MESSAGE = "Нет ответа от сервера" + CR_MESSAGE;
var INTERNET_ERROR_MESSAGE = "Ошибка сети" + CR_MESSAGE;
var SERVER_ERROR_MESSAGE = "Ошибка сервера" + CR_MESSAGE;
var ERROR_MESSAGE = "Ошибка" + CR_MESSAGE;
var DESCRIPTION_MESSAGE = "Описание: ";
var INSUFFICIENT_FUNDS = "Недостаточно средств для списания";

var INPUT_CARD_CODE_MESSAGE =
    "Введите или отсканируйте номер карты, сертификата,\nкупона или QR-код из мобильного приложения";

var INPUT_PHONE_NUMBER_MESSAGE =
    "Введите номер телефона" +
    CR_MESSAGE +
    "в международном формате (только цифры)." +
    CR_MESSAGE +
    "Для России первая цифра 7";
var PHONE_NUMBER_EMPTY_MESSAGE = "Не указан номер телефона";
var PHONE_NUMBER_ERROR_MESSAGE =
    "Ошибка ввода номера телефона:\nНеобходимо указывать только цифры\nлибо номер слишком короткий!";
var PHONE_NUMBER_ALL_READY_REGISTERED_MESSAGE = "Этот телефонный номер уже зарегистрирован";

var INPUT_CONFIRM_CODE_MESSAGE = "Введите код подтверждения:";
var CONFIRM_CODE_EMPTY_MESSAGE = "Не указан код подтверждения";
var CONFIRM_CODE_ERROR_MESSAGE = "Ошибка ввода кода подтверждения:\nкод может состоять из четырех или более цифр!";
var CONFIRM_CODE_INCORRECT_MESSAGE = "Неверный код подтверждения";
var SELECT_AVAILABLE_DISCOUNTS_MESSAGE = "Выберите доступные скидки";

var HTTP_STATE_MESSAGE = "Статус HTTP-запроса->";
var HTTP_CODE_MESSAGE = "HTTP-код->";

var RX_LOYALTY_DIRECTORY = "";
var RX_LOYALTY_DIRECTORY_FRONTOL = "";
var RX_LOYALTY_DIRECTORY_FRONTOL_DEV = "";
var CUSTOM_ACTIONS_DATA_FILE_PATH = "";

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

// sboboev+
// Уведомление о закрытии смены
function checkShiftReminder() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    if (hours === 23 && minutes >= 50 && minutes <= 59) {
        frontol.actions.showMessage(
            "Закройте смену! Через 10 минут ККМ будет заблокирована!",
            Icon.Warning
        );
    }
}
// sboboev-

function init() {
    var wScriptShell = new ActiveXObject("WScript.Shell");

    RX_LOYALTY_DIRECTORY = wScriptShell.ExpandEnvironmentStrings("%SystemDrive%") + "\\RxLoyalty";
    RX_LOYALTY_DIRECTORY_FRONTOL = RX_LOYALTY_DIRECTORY + "\\Frontol5";
    RX_LOYALTY_DIRECTORY_FRONTOL_DEV = RX_LOYALTY_DIRECTORY_FRONTOL + "\\dev";
    CUSTOM_ACTIONS_DATA_FILE_PATH = RX_LOYALTY_DIRECTORY_FRONTOL + "\\" + CUSTOM_ACTIONS_FILE_NAME;

    //подключаем методы для работы с JSON
    getJson2();
    toISOProto();

    // добавляем для типа String метод trim
    if (!String.prototype.trim) {
        (function () {
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function () {
                return this.replace(rtrim, "");
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
    frontol.addEventListener("openDocument", "beforeOpenDocument", true);

    //ОТКРЫТИЕ ДОКУМЕНТА - ПОСЛЕ
    frontol.addEventListener("openDocument", "afterOpenDocument", false);

    //ЗАКРЫТИЕ ДОКУМЕНТА - ДО
    frontol.addEventListener("closeDocument", "beforeCloseDocument", true);

    //ЗАКРЫТИЕ ДОКУМЕНТА - ПОСЛЕ
    frontol.addEventListener("closeDocument", "afterCloseDocument", false);

    //ОТМЕНА ДОКУМЕНТА - ДО
    frontol.addEventListener("cancelDocument", "beforeCancelDocument", true);

    //ОТМЕНА ДОКУМЕНТА - ПОСЛЕ
    frontol.addEventListener("cancelDocument", "afterCancelDocument", false);

    //ВВОД ПЛАТЕЖА - ДО
    frontol.addEventListener("addPayment", "addPaymentBefore", true);

    //ИЗМЕНЕНИЕ РЕЖИМА ДО
    //frontol.addEventListener("changeMode", "changeModeBefore", true);

    //УДАЛЕНИЕ ПЛАТЕЖА - ДО
    frontol.addEventListener("stornoPayment", "stornoPaymentBefore", true);

    //УДАЛЕНИЕ ПЛАТЕЖА - ПОСЛЕ
    frontol.addEventListener("stornoPayment", "stornoPaymentAfter", false);

    //ОТКРЫТИЕ СМЕНЫ - ПОСЛЕ
    frontol.addEventListener("openSession", "afterOpenSession", false);

    //ЗАКРЫТИЕ СМЕНЫ - ДО
    frontol.addEventListener("closeSession", "beforeCloseSession", true);

    //ЗАКРЫТИЕ СМЕНЫ - ПОСЛЕ
    frontol.addEventListener("closeSession", "afterCloseSession", false);

    //ДОБАВЛЕНИЕ ПОЗИЦИИ - ДО
    frontol.addEventListener("addPosition", "beforeAddPosition", true);

    //ДОБАВЛЕНИЕ ПОЗИЦИИ - ПОСЛЕ
    frontol.addEventListener("addPosition", "afterAddPosition", false);

    //ИЗМЕНЕНИЕ ПОЗИЦИИ - ДО
    frontol.addEventListener("changePosition", "beforeChangePosition", true);

    //ИЗМЕНЕНИЕ ПОЗИЦИИ - ПОСЛЕ
    frontol.addEventListener("changePosition", "afterChangePosition", false);

    //ДОБАВЛЕНИЕ РУЧНОЙ СКИДКИ - ПОСЛЕ
    frontol.addEventListener("addManualDiscount", "addManualDiscountAfter", false);

    //ВВОД КАРТЫ - ДО
    frontol.addEventListener("addCard", "addCardBefore", true);

    // Promo action
    if (
        (getClientUUID() == "A527335D-BE7A-4D52-AAE0-DAC465A0BB5C" ||
            getClientUUID() == "72AF8681-AA9D-4FDB-B41F-D9E6C4025C92") &&
        frontol.userValues.get("promoParticipation") == "1"
    ) {
        var dbRx = new RxDB();
        logg("db started");
        var connected = dbRx.connect();

        if (!connected) {
            showMessage("Соединение с базой настроек промо-акции не установлено!", Icon.Warning);
        } else {
            logg("db connected");
            var promoRx = new RxPromo(dbRx);

            promoRx.init(false);
        }
    }

    // CashBox init
    if (getClientUUID() === "29A1BC43-C747-4B97-ACD7-6F74CFC88BA1") {
        /*try {
            cashBox = new ActiveXObject("CashBox");
            cashBoxItems = new ActiveXObject("TicketItems");
        }
        catch(e) {
            showMessage(
                "Ошибка инициализации компоненты для работы с CashBoxSystem!" + CR_MESSAGE + e.message + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE,
                Icon.Error
            );
        } */
    }

    if (getClientUUID() == "4C70C190-EAD8-43A8-87DE-212899357830") JetQrPayInit();

    // RX Card number form
    try {
        rxEnterCard = new ActiveXObject("RobotX.EnterCard");
    } catch (e) {
        if (isDebugMode() && getClientUUID() == "A7DAA9DB-5664-DF4C-ACE0-CE39CFD695C6") {
            showMessage(
                "Ошибка инициализации компоненты RobotX.EnterCard!" +
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

    // sboboev+
    frontol.addEventListener("addPosition", "checkShiftReminder", false);
    // sboboev-
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

        if (getClientUUID() == "E97FC591-1DC1-472C-AA47-070A8E93954B" && isReceiptDocument(doc)) {
            inputReceiptDocumentInformation(doc);
        }

        if (frontol.userValues.get("IsShiftClosed") == "1") {
            afterOpenSession();
        }

        if (frontol.userValues.get("ForbidReturnWithPayments") != "") {
            forbidReturnDocWithProcPayments();
        }
        // CashBox
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
            }*/
        }
        //Технология Групп +
		if (IsFRfromTG()) {
			if (IsSessionOpen()) {
				// Смена уже открыта — ничего не делаем
			} else {
				var options = {
					formCode: "OPEN_SHIFT",
					ffdVersion: "VER_1",
					shouldPrintSlip: true,
					cashier: frontol.currentUser.name,
					kktVersion: "1"
				};

				var stringToSend = JSONStringify(options);
				var FRadress = frontol.userValues.get("fiscalipadres");
				var result = sendtofiscal(FRadress, "openShift", stringToSend);

				if (result.rc !== "SUCCESS") {
					var error = getErrorOFD(result.rc);
					frontol.userValues.set("IsSessionOn", "0");
					frontol.actions.showMessage("Ответ ОФД с ошибкой: " + CR_MESSAGE + " -> " + error, Icon.Error);
					cancelAct();
					return;
				}

				frontol.userValues.set("IsSessionOn", "1");
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
                sendKeys("^+5"); // Ctrl-Shift-5
            }
        }
        // second monitor
        if (frontol.userValues.get("SecondMonitor") == "1") {
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
        vSet("FilePath", "\\\\10.101.42.107\\Rarus\\BitrixOrders\\");
        EO_AfterOpenDocument();
    }

    //ЗАКРЫТИЕ ДОКУМЕНТА - ДО
    function beforeCloseDocument() {
        var doc = frontol.currentDocument;
        // CashBox
        if (getClientUUID() === "29A1BC43-C747-4B97-ACD7-6F74CFC88BA1") {
            /*if (!cashBox) {
                showMessage(
                    "Компонента для работы с CashBoxSystem не была проинициализирована!" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE,
                    Icon.Error
                );
                cancelAct();
            }
            var sum = doc.sumWithDiscs;
            var operatorName = frontol.currentUser.name;
            var operatorCode = frontol.currentUser.code;
            var barCode = doc.barcode;
            var kkmPos = frontol.codeWorkplace;
            var docNumber = doc.number;

            switch (doc.type.operation) {
                case 0: { // продажа
                    if (!cashBoxSaleOperation(doc, operatorName, operatorCode, docNumber, barCode, kkmPos)) {
                        cancelAct();
                    }
                    break;
                }
                case 1: { // возврат
                    if (!cashBoxReturnOperation(doc, operatorName, operatorCode, docNumber, barCode, kkmPos)) {
                        cancelAct();
                    }
                    break;
                }
                case 4: { // внесение
                    doc.userValues.set("5", "1");

                    if (!cashBoxDepositOperation(sum, operatorName, operatorCode, docNumber, barCode, kkmPos)) {
                        cancelAct();
                    }
                    break;
                }
                case 5: { // выплата
                    doc.userValues.set("6", "1");

                    if (!cashBoxWithdrawalOperation(sum, operatorName, operatorCode, docNumber, barCode, kkmPos)) {
                        cancelAct();
                    }
                    break;
                }
            }*/
        }
        //если документ - продажа
        if (isSaleDocument(doc) && frontol.userValues.get("SumToCreateCard") != "") {
            requestCreateCard();
        }

        if (frontol.userValues.get("SaleBeforePrintCheck") == "1" && isSaleDocument(doc)) {
            //если документ - продажа и введена хотя бы одна карта
            if (
                doc.userValues.get("cardBoxDocDiscDtos") != "" ||
                frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == "1"
            ) {
                var stringToSend = getSaleDataAfterClosing(doc);

                if (doc.userValues.get("cardBoxDocDiscDtos") != "") {
                    sendDocumentAfterClosing(stringToSend, 1);
                }

                if (frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == "1") {
                    saveDocumentAfterClosing(stringToSend, 1);
                }
            }
            //GetFooter(doc);
        }

        if (isSaleDocument(doc) && doc.payment.type.code == 104) {
            FilePath = vGet("FilePath");
            FileName = vGet("CurrentFile"); // + ".txt"

            date = new Date();

            strMonth = "0" + date.getMonth();
            strMonth = strMonth.substr(strMonth.length - 2, 2);

            strDate = "0" + date.getDate();
            strDate = strDate.substr(strDate.length - 2, 2);

            strHours = "0" + date.getHours();
            strHours = strHours.substr(strHours.length - 2, 2);

            strMinutes = "0" + date.getMinutes();
            strMinutes = strMinutes.substr(strMinutes.length - 2, 2);

            addFileName =
                "_" +
                frontol.codeWorkplace +
                "_" +
                frontol.sessionNumber +
                "_" +
                doc.number +
                "_" +
                date.getFullYear() +
                "." +
                strMonth +
                "." +
                strDate +
                "_" +
                strHours +
                "." +
                strMinutes;
            fso = new ActiveXObject("Scripting.FileSystemObject");
            file = fso.GetFile(FilePath + FileName + ".txt");
            file.Move(FilePath + FileName + addFileName + ".txt");
        }

        EO_BeforeCloseDocument();

        if (isSaleDocument(doc)) {
            //customActionForAshan
            var customActionData = frontol.userValues.get(CUSTOM_ACTION_DATA);
            if (customActionData) {
                customActionData = JSON.parse(customActionData);
                for (doc.position.index = 1; doc.position.index <= doc.position.count; doc.position.index++) {
                    if (doc.position.ware.mark in customActionData) {
                        var actionData = customActionData[doc.position.ware.mark];
                        var isAvailable = actionData.sum <= doc.sumWithDiscs;
                        if (isAvailable) {
                            frontol.actions.showMessage(actionData.cashierMesage, Icon.Exclamation);
                            doc.userValues.set("CustomActionMess", actionData.slipMessage);
                        }
                    }
                }
            }
        }
        /////////////////////////////////////////////////////////////////PROMO_DUBUG///////////////////////////////////////////////////////////////
        if (
            isSaleDocument(doc) && // продажа
            (getClientUUID() == "A527335D-BE7A-4D52-AAE0-DAC465A0BB5C" ||
                getClientUUID() == "72AF8681-AA9D-4FDB-B41F-D9E6C4025C92") && // клиент
            frontol.userValues.get("promoParticipation") == "1" && // касса-участник
            Number(frontol.userValues.get("promoShopCode")) > 0 &&
            !doc.userValues.get("isPromoAdded") //debug
        ) {
            var dbRx = new RxDB();
            var connected = dbRx.connect();

            if (!connected) {
                showMessage("Соединение с базой настроек промо-акции не установлено!", Icon.Warning);
            } else {
                var promoRx = new RxPromo(dbRx);

                promoRx.init(true);

                if (frontol.userValues.get("promoCounters") != "") {
                    // непустая переменная счётчиков промоакции
                    var arrChequeDate = doc.dateOpen.split(".");
                    //showMessage(doc.dateOpen)
                    var srtChequeDate = "20" + arrChequeDate[2] + "-" + arrChequeDate[1] + "-" + arrChequeDate[0];
                    var strChequeSum = doc.totalSum.toString();

                    strChequeSum = strChequeSum.replace(",", ".");

                    var cheque = {
                        Number: doc.number,
                        Date: srtChequeDate,
                        Time: doc.timeOpen,
                        Sum: strChequeSum
                    };

                    var promoCounters = promoRx.getCounters();

                    if (promoCounters) {
                        for (var i = 0; i < promoCounters.length; i++) {
                            var promoCounter = promoCounters[i];

                            if (promoCounter.minChequeSum <= doc.totalSum) {
                                // сумма чека хватает для участия в промоакции
                                var cashBoxCode = frontol.codeWorkplace.toString();
                                var shopCode = frontol.userValues.get("promoShopCode");
                                var counter = promoRx.saveTransaction(cheque, shopCode, cashBoxCode, promoCounter);

                                if (counter === false || isNaN(counter)) {
                                    showMessage(
                                        "Невозможно записать данные о чеке в базу данных промоакции!",
                                        Icon.Warning
                                    );
                                }
                                // else if (!isNaN(counter) && counter % promoCounter.value == 0) {
                                //     showMessage("На вашей кассе " + cashBoxCode + " - победитель, номер чека " + cheque.Number);
                                //     doc.userValues.set(PROMO_TEXT_KEY, PROMO_TEXT_VALUE)
                                // }
                                else if (!isNaN(counter)) {
                                    //debug
                                    doc.userValues.set("isPromoAdded", "1");
                                    if (counter % promoCounter.value == 0) {
                                        showMessage(
                                            "На вашей кассе " +
                                                cashBoxCode +
                                                " - победитель, номер чека " +
                                                cheque.Number
                                        );
                                        doc.userValues.set(PROMO_TEXT_KEY, PROMO_TEXT_VALUE);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Технология групп +
        getJson2();
        StatusKKM();
        var doc = frontol.currentDocument;
        //show(doc.type.operation)
        if (doc.type.operation == 4) {
            var FRadress = frontol.userValues.get("fiscalipadres");
            var options = {
                formCode: "ADD_CASH",
                shouldPrintSlip: true,
                addAmount: Number(doc.totalSum * 100)
            };
            var stringToSend = JSONStringify(options);
            var result = sendtofiscal(FRadress, "addCash", stringToSend);
            if (result.rc !== "SUCCESS") {
                var error = getErrorOFD(result.rc);
                frontol.actions.showMessage("Ответ ОФД с ошибкой: " + CR_MESSAGE + " -> " + error, Icon.Error);
                //break;
                cancelAct();
                return;
            }
            OpenDraw();
        }

        if (doc.type.operation == 5) {
            var FRadress = frontol.userValues.get("fiscalipadres");
            var options = {
                formCode: "REMOVE_CASH",
                shouldPrintSlip: true,
                removeAmount: Number(doc.totalSum * 100)
            };
            var stringToSend = JSONStringify(options);
            var result = sendtofiscal(FRadress, "removeCash", stringToSend);
            if (result.rc !== "SUCCESS") {
                var error = getErrorOFD(result.rc);
                frontol.actions.showMessage("Ответ ОФД с ошибкой: " + CR_MESSAGE + " -> " + error, Icon.Error);
                //break;
                cancelAct();
                return;
            }
            OpenDraw();
        }

        //
        if (doc.type.operation == "0" || doc.type.operation == "1") {
            //Окно печати
            ManualPrintOptionsButton();

            if (IsFRfromTG()) {
                if (IsSessionOpen()) {
                    // Значение параметры вариантов печати чека
                    var PrintWithoutSending = frontol.userValues.get("PrintWithoutSending");
                    var PrintWithSendingToPhone = frontol.userValues.get("PrintWithSendingToPhone");
                    var PrintWithSendingToMail = frontol.userValues.get("PrintWithSendingToMail");
                    var PrintOption = "";

                    // Обработка значение параметров печати
                    if (PrintWithoutSending == "1") {
                        PrintOption = null;
                    } else if (PrintWithSendingToPhone !== "") {
                        PrintOption = PrintWithSendingToPhone;
                    } else if (PrintWithSendingToMail !== "") {
                        PrintOption = PrintWithSendingToMail;
                    }

                    var stringToSend = GiveDocumentToString(doc, PrintOption);
                    //show(stringToSend);
                    var FRadress = frontol.userValues.get("fiscalipadres");
                    var result = sendtofiscal(FRadress, "formReceipt", stringToSend);
                    if (result.rc !== "SUCCESS") {
                        var error = getErrorOFD(result.rc);
                        frontol.actions.showMessage("Ответ ОФД с ошибкой: " + CR_MESSAGE + " -> " + error, Icon.Error);
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
        // CashBox
        if (getClientUUID() === "29A1BC43-C747-4B97-ACD7-6F74CFC88BA1") {
            /*if (!cashBox) {
                showMessage(
                    "Компонента для работы с CashBoxSystem не была проинициализирована!" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE,
                    Icon.Error
                );
                cancelAct();
            }
            var sum = doc.sumWithDiscs;
            var operatorName = frontol.currentUser.name;
            var operatorCode = frontol.currentUser.code;
            var barCode = doc.barcode;
            var kkmPos = frontol.codeWorkplace;
            var docNumber = doc.number;

            switch (doc.type.code) {
                case 6: {
                    if (doc.userValues.get("6") !== "1") {
                        if (!cashBoxWithdrawalOperation(sum, operatorName, operatorCode, docNumber, barCode, kkmPos)) {
                            cancelAct();
                        }
                    }
                    break;
                }
                case 5: {
                    if (doc.userValues.get("5") !== "1") {
                        if (!cashBoxDepositOperation(sum, operatorName, operatorCode, docNumber, barCode, kkmPos)) {
                            cancelAct();
                        }
                    }
                    break;
                }
            }
            doc.userValues.remove("6");
            doc.userValues.remove("5");*/
        }

        if (frontol.userValues.get("SecondMonitor") == "1" && rxF2SM !== null && isSaleDocument(doc)) {
            rxF2SM.deleteCheque();
        }

        // выгрузка сертификатов для РЮД
        if (getClientUUID() === "75F55178-1B5C-4001-B852-1B61746896D2") {
            var rudGiftCards = new RudGiftCards();
            rudGiftCards.upload();
        }

        var sumToCreateCoupon = Number(frontol.userValues.get("SumToCreateCoupon"));
        var stringToSend = "";
        // автокупоны
        if (
            isSaleDocument(doc) && // продажа
            !isNaN(sumToCreateCoupon) &&
            sumToCreateCoupon > 0 && // число, ненулевое значение
            doc.totalSum > sumToCreateCoupon && // сумма документа больше минимально необходимой суммы
            !doc.userValues.get("cardBoxNumbers") // не было введено никаких карт
        ) {
            stringToSend = getSaleDataAfterClosing(doc);
            sendDocumentAfterClosing(stringToSend, 1);
        }

        if (frontol.userValues.get("SaleBeforePrintCheck") != "1" && isSaleDocument(doc)) {
            //если документ - продажа и введена хотя бы одна карта
            if (
                doc.userValues.get("cardBoxNumbers") != "" ||
                frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == "1"
            ) {
                stringToSend = getSaleDataAfterClosing(doc);

                if (doc.userValues.get("cardBoxNumbers") != "") {
                    sendDocumentAfterClosing(stringToSend, 1);
                }

                if (frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == "1") {
                    saveDocumentAfterClosing(stringToSend, 1);
                }
            }
            //GetFooter(doc);
        }
        //если документ - возврат
        if (isReturnDocument(doc)) {
            // существует документ-основание и в документе основании введена одна карта
            if (doc.baseDocument.number != null && doc.baseDocument.number != "") {
                stringToSend = getReturnDataAfterClosing(doc);

                if (doc.baseDocument.userValues.get("cardBoxDocDiscDtos") != "") {
                    sendDocumentAfterClosing(stringToSend, 2);
                }
            }
            // если документ возврата не на основании
            else if (getClientUUID() === "29A1BC43-C747-4B97-ACD7-6F74CFC88BA1") {
                var baseDocUserValuesString = doc.userValues.get("BaseDocumentUserValues");

                if (baseDocUserValuesString) {
                    baseDocUserValuesString = base64_decode(baseDocUserValuesString);

                    var baseDocumentUserValues = deserializingDocumentUserValue(baseDocUserValuesString);

                    stringToSend = getReturnDataAfterClosing(doc, false, baseDocumentUserValues);

                    if (
                        baseDocumentUserValues.cardBoxDocDiscDtos !== undefined &&
                        baseDocumentUserValues.cardBoxDocDiscDtos
                    ) {
                        sendDocumentAfterClosing(stringToSend, 2);
                    }
                }
            }
            // сбор всех чеков
            if (frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == "1") {
                saveDocumentAfterClosing(stringToSend, 2);
            }
        }
        // для продаж и касс-участников промоакции
        ///////////////////////////////////////////////////////////////////////PROMO_DUBUG/////////////////////////////////////////////////////////////
        /***if (
            isSaleDocument(doc) && // продажа
            (getClientUUID() == "A527335D-BE7A-4D52-AAE0-DAC465A0BB5C" || getClientUUID() == "72AF8681-AA9D-4FDB-B41F-D9E6C4025C92") && // клиент
            frontol.userValues.get("promoParticipation") == "1" && // касса-участник
            Number(frontol.userValues.get("promoShopCode")) > 0
        ) {
            var dbRx = new RxDB();
            var connected = dbRx.connect();

            if (!connected) {
                showMessage("Соединение с базой настроек промо-акции не установлено!", Icon.Warning);
            }
            else {
                var promoRx = new RxPromo(dbRx);

                promoRx.init(true);

                if (frontol.userValues.get("promoCounters") != "") { // непустая переменная счётчиков промоакции
                    var arrChequeDate = doc.dateClose.split(".");
                    var srtChequeDate = "20" + arrChequeDate[2] + "-" + arrChequeDate[1] + "-" + arrChequeDate[0];
                    var strChequeSum = doc.totalSum.toString();

                    strChequeSum = strChequeSum.replace(",", ".");

                    var cheque = {
                        Number: doc.number,
                        Date: srtChequeDate,
                        Time: doc.timeClose,
                        Sum: strChequeSum
                    };

                    var promoCounters = promoRx.getCounters();

                    if (promoCounters) {
                        for (var i = 0; i < promoCounters.length; i++) {
                            var promoCounter = promoCounters[i];

                            if (promoCounter.minChequeSum <= doc.totalSum) { // сумма чека хватает для участия в промоакции
                                var cashBoxCode = frontol.codeWorkplace.toString();
                                var shopCode = frontol.userValues.get("promoShopCode");
                                var counter = promoRx.saveTransaction(cheque, shopCode, cashBoxCode, promoCounter);

                                if (counter === false || isNaN(counter)) {
                                    showMessage("Невозможно записать данные о чеке в базу данных промоакции!", Icon.Warning);
                                }
                                else if (!isNaN(counter) && counter % promoCounter.value == 0) {
                                    showMessage("На вашей кассе " + cashBoxCode + " - победитель, номер чека " + cheque.Number);
                                    doc.userValues.set(PROMO_TEXT_KEY, PROMO_TEXT_VALUE)
                                }
                            }
                        }
                    }
                }
            }
        }***/
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }

    // ОТМЕНА РЕГМСТРАЦИИ КАРТЫ
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
            showMessage(OPERATION_AVAILABLE_IN_SALE_DOCUMENT_ONLY_MESSAGE, Icon.Error);
            return;
        }

        if (frontol.userValues.get("SecondMonitor") == "1" && rxF2SM !== null) {
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
            message: "",
            data: ""
        };

        //формируем строку для отправки
        var stringToSend = JSON.stringify({
            LicenseGuid: license,
            AccessTokenGuid: accessToken,
            CardCode: cardNumber
        });

        result = sendHttpRequest(
            processingServerAddress + "/BonusWebApi/api/processing/cancel",
            "POST",
            stringToSend,
            "register_cancel"
        );

        if (result.success) {
            if (getClientUUID() == "4C70C190-EAD8-43A8-87DE-212899357830") cardNumber = hideCardNumber(cardNumber);

            showMessage("Регистрация в процессинге успешно отменена!" + CR_MESSAGE + "Номер: " + cardNumber);
        } else {
            showMessage(result.message, Icon.Error);
        }
    }
    // ОТМЕНА ДОКУМЕНТА - ДО
    function beforeCancelDocument() {
        var doc = frontol.currentDocument;
        // прихода товара
        if (getClientUUID() == "E97FC591-1DC1-472C-AA47-070A8E93954B" && isReceiptDocument(doc)) {
            doc.userValues.remove("receiptNumber");
            doc.userValues.remove("receiptDate");
        }
    }
    // ОТМЕНА ДОКУМЕНТА - ПОСЛЕ
    function afterCancelDocument(cancelOnlyCard) {
        if (typeof cancelOnlyCard == "undefined") {
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

        if (frontol.userValues.get("SecondMonitor") == "1" && rxF2SM !== null && isSaleDocument(currentDocument)) {
            rxF2SM.deleteRegisterInfo();

            if (!cancelOnlyCard) {
                rxF2SM.deleteCheque();
            }
        }

        if (isSaleDocument(currentDocument)) {
            var cardBoxNumbers = currentDocument.userValues.get("cardBoxNumbers");

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

                var cardBoxNumbersArray = cardBoxNumbers.split(";");

                for (var i = 0; i < cardBoxNumbersArray.length; i++) {
                    var result = {
                        success: false,
                        message: "",
                        data: ""
                    };

                    //формируем строку для отправки
                    var stringToSend = JSON.stringify({
                        LicenseGuid: license,
                        AccessTokenGuid: accessToken,
                        CardCode: cardBoxNumbersArray[i]
                    });

                    result = sendHttpRequest(
                        processingServerAddress + "/BonusWebApi/api/processing/cancel",
                        "POST",
                        stringToSend,
                        "register_cancel"
                    );

                    if (result.success) {
                        var cardNumber = cardBoxNumbersArray[i];

                        if (getClientUUID() == "4C70C190-EAD8-43A8-87DE-212899357830")
                            cardNumber = hideCardNumber(cardNumber);

                        showMessage("Регистрация в процессинге успешно отменена!\n" + "Номер: " + cardNumber);
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
            if (IsExtraEnabled("ExtraTaxKyrgyzstan")) ControlEnterPayment_ExtraTaxKyrgyzstan(payment);
        }

        if (isReturnDocument(doc)) {
            CheckEnterPayment(payment, 2);
        }

        //Если Тип оплаты Хумо QR Code
        if (getClientUUID() == "4C70C190-EAD8-43A8-87DE-212899357830" && payment.type.code == 5) {
            HumoQRPaymentOrder(false);
        }
        //Если Тип оплаты Хумо QR Code
        if (payment.type.code == 105) HumoQRPaymentOrder(false);

        if (payment.type.code === 106) CBTPreparePayment();

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
            if (IsExtraEnabled("ExtraTaxKyrgyzstan")) ControlStornoPayment_ExtraTaxKyrgyzstan();
        }
    }

    //ОТКРЫТИЕ СМЕНЫ - ПОСЛЕ
    function afterOpenSession() {
        frontol.userValues.set("IsShiftClosed", "0");
        getCashParams(true);

        if (isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) {
            copyShelfLifeDiscountsFile();
        }

        if (frontol.userValues.get(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == "1") {
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
                show("Смена открыта в ККМ");
            } else {
                var options = {
                    formCode: "OPEN_SHIFT",
                    ffdVersion: "VER_1",
                    shouldPrintSlip: true,
                    cashier: frontol.currentUser.name,
                    kktVersion: "1"
                };

                var stringToSend = JSONStringify(options);
                var FRadress = frontol.userValues.get("fiscalipadres");
                var result = sendtofiscal(FRadress, "openShift", stringToSend);
                frontol.userValues.set("IsSessionOn", "1");
                if (result.rc !== "SUCCESS") {
                    var error = getErrorOFD(result.rc);
                    frontol.actions.showMessage("Ответ ОФД с ошибкой: " + CR_MESSAGE + " -> " + error, Icon.Error);
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
        frontol.userValues.set("IsShiftClosed", "1");
        SendDelayed(true);
        //Технология групп +
        getJson2();

        if (IsFRfromTG()) {
            if (IsSessionOpen()) {
                var options = {
                    formCode: "CLOSE_SHIFT",
                    ffdVersion: "VER_1",
                    shouldPrintSlip: true,
                    cashier: frontol.currentUser.name,
                    kktVersion: "1"
                };
                var stringToSend = JSONStringify(options);
                var FRadress = frontol.userValues.get("fiscalipadres");
                var result = sendtofiscal(FRadress, "closeShift", stringToSend);
                frontol.userValues.set("IsSessionOn", "0");
                if (result.rc !== "SUCCESS") {
                    var error = getErrorOFD(result.rc);
                    frontol.actions.showMessage("Ответ ОФД с ошибкой: " + CR_MESSAGE + " -> " + error, Icon.Error);
                    cancelAct();
                    return;
                }
                frontol.userValues.set("IsSessionOn", "0");
                OpenDraw();
            }
        }
        // Технология групп -
    }

    //ДОБАВЛЕНИЕ ПОЗИЦИИ - ДО
    function beforeAddPosition(pos) {
        var doc = frontol.currentDocument;

        if (getClientUUID() == "A7DAA9DB-5664-DF4C-ACE0-CE39CFD695C6" && isExcisableWare(pos.ware)) {
            if (!is18YearsOld()) {
                cancelAct();
            }
        }

        if (getClientUUID() == "E97FC591-1DC1-472C-AA47-070A8E93954B") {
            // прихода товара
            if (isReceiptDocument(doc)) {
                if (doc.counteragent.code == 0) showError("Необходимо указать контрагента!");
            }
        }

        //if (getClientUUID() === "29A1BC43-C747-4B97-ACD7-6F74CFC88BA1") forbidAlco(pos);

        //если в документе есть процессинговая карта
        if (doc.userValues.get("FirstCardNumber") != "") {
            showError("Введены процессинговые карты!");
        }

        if (isSaleDocument(doc) && isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) {
            // продажа
            if (shelfLifeDiscounts == null) {
                shelfLifeDiscounts = new RxShelfLifeDiscounts(doc);
            }

            shelfLifeDiscounts.clearLastAddedWare();

            shelfLifeDiscounts.saveLastAddedWare(pos, true);

            if ((pos.ware.type == 1 && pos.ware.hasAlcoStamp == 1) || pos.ware.type > 0) {
                // выходим если это маркированная продукция или алкоголь с акцизной маркой
                return;
            }

            var posId = shelfLifeDiscounts.getWareWithoutDiscountPostionId(pos.ware.code);

            if (posId > -1) {
                shelfLifeDiscounts.addWareToPosition(pos.ware.code, pos.quantity, posId);
                cancelAct();
            }
        }
    }
    // ИЗМЕНЕНИЕ ПОЗИЦИИ - ДО
    function beforeChangePosition(pos) {
        var doc = frontol.currentDocument;

        if (getClientUUID() == "A7DAA9DB-5664-DF4C-ACE0-CE39CFD695C6" && isExcisableWare(pos.ware)) {
            if (!is18YearsOld()) {
                cancelAct();
            }
        }

        //if (getClientUUID() === "29A1BC43-C747-4B97-ACD7-6F74CFC88BA1") forbidAlco(pos);

        //если в документе есть процессинговая карта
        if (doc.userValues.get("FirstCardNumber") != "") {
            showError("Введены процессинговые карты!");
        }

        if (isSaleDocument(doc) && isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) {
            // продажа
            if (shelfLifeDiscounts == null) {
                shelfLifeDiscounts = new RxShelfLifeDiscounts(doc);
            }

            var shelfLifeDiscount = shelfLifeDiscounts.getDiscount(pos.ware.code, pos.id);
            var textMessage = "";

            if (shelfLifeDiscount > 0) {
                textMessage = "На позицию установлена цена с учётом скидки по сроку годности,";
            }

            textMessage += "\nредактирование запрещено!";

            if (pos.storno === 0 && shelfLifeDiscount > 0) {
                showMessage(textMessage);
                cancelAct();
            }
        }
    }

    //ДОБАВЛЕНИЕ ПОЗИЦИИ - ПОСЛЕ
    function afterAddPosition(pos) {
        var doc = frontol.currentDocument;

        if (frontol.userValues.get("SecondMonitor") == "1") {
            if (rxF2SM) rxF2SM.updateCheque(doc);
        }

        if (isSaleDocument(doc) && isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) {
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

        if (frontol.userValues.get("SecondMonitor") == "1") {
            if (rxF2SM) rxF2SM.updateCheque(doc);
        }

        if (isSaleDocument(doc) && isGlobalValueSet(SHELF_LIFE_DISCOUNTS_VALUE_NAME)) {
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

        if (frontol.userValues.get("SecondMonitor") == "1") {
            if (rxF2SM) rxF2SM.updateCheque(doc);
        }
    }

    //ВВОД КАРТЫ - ДО
    function addCardBefore() {
        //если в документе есть процессинговая карта
        if (
            frontol.userValues.get("DontWorkWithStandartCards") == "1" &&
            frontol.currentDocument.userValues.get("FirstCardNumber") != ""
        ) {
            showError("Введены карты другого типа!");
        }

        var InputCard = Card.value;

        if (InputCard.substring(0, 4) == "3F32") {
            // это заказ покупателя
            if (frontol.currentDocument.quantityPositions > 0) {
                showError("Нельзя ввести заказ покупателя в чек с товарами");
            }

            var FilePath = vGet("FilePath");
            var FileName = FilePath + InputCard + ".txt";

            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var file;

            try {
                var file = fso.OpenTextFile(FileName, 1, 0);
            } catch (err) {
                showError("Файл " + FileName + " с заказом не найден");
            }

            var FirstLine = 1;
            var OrderPayment = 0;
            var Sum = 0;
            // заполним чек позициями
            while (!file.AtEndOfStream) {
                var line = file.ReadLine();

                if (FirstLine == 1) {
                    line = line.slice(3); // в первой строки первые 2 символа "битые"

                    if (line == "payment") OrderPayment = 1;
                }

                if (FirstLine == 0) {
                    var pos1 = line.indexOf(";");
                    var Mark = line.slice(0, pos1);
                    var line2 = line.slice(pos1 + 1);

                    var pos1 = line2.indexOf(";");
                    var Quant = +line2.slice(0, pos1);
                    var line2 = line2.slice(pos1 + 1);

                    var pos1 = line2.indexOf(";");
                    //var Price = +line2.slice(0,pos1);
                    var SumPos = +line2.slice(0, pos1);

                    //SM(Mark+"/"+Quant+"/"+Price);
                    frontol.currentDocument.addPosition("Mark", Mark, 0, Quant, SumPos, true);

                    //var Sum = Sum + (Quant * Price);
                    var Sum = Sum + SumPos;
                }

                FirstLine = 0;
            }

            // введем вид оплаты, если заказ оплачен
            if (OrderPayment == 1) frontol.currentDocument.addPayment(104, Sum);

            file.Close();
            vSet("CurrentFile", InputCard);

            //cancelAct(); // отменим ввод этой карты
        }
    }
}
//==========================================================================================================================================================================================
// МАРКЕТИНГОВЫЕ ПРОГРАММЫ




//ПРОЦЕССИНГ END
//==========================================================================================================================================================================================
//Алиф Сармоя
//==========================================================================================================================================================================================

var FRONTOL_ADMIN_PROFILE_CODES = [1, 2]; //Коды пользовательских профилей которым разрешено активировать админку Алиф платежей. Ex: 1 - это 'Системный администратор'
var FRONTOL_DB_PATH = "D:\\Torgovlya\\MAIN.GDB";
var JetQrPay;

function JetQrPayInit() {
    frontol.addEventListener("addPayment", "JetQrBeforeAddPayment", true);
    frontol.addEventListener("cancelDocument", "JetQrAfterCancelDocument", false);
}

function show(message) {
    frontol.actions.showMessage(message);
}

var JET_QR = 200;
var ALIF_QR = 201;
var ALIF_SALOM = 202;
var ESKHATA_QR = 203;
var HUMO_QR = 204;
var IBT = 205;
var DC_QR = 206;

function JetQrBeforeAddPayment(frontolPayment) {
    if (
        frontolPayment.type.code === JET_QR ||
        frontolPayment.type.code === ALIF_QR ||
        frontolPayment.type.code === ALIF_SALOM ||
        frontolPayment.type.code === ESKHATA_QR ||
        frontolPayment.type.code === HUMO_QR ||
        frontolPayment.type.code === IBT
    ) {
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

        var frontolPaymentProducts = "";
        for (
            frontol.currentDocument.position.index = 1;
            frontol.currentDocument.position.index <= frontol.currentDocument.position.count;
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
                ", quantity: " +
                quantity +
                ", totalSum: " +
                totalSum +
                "},";
            frontolPaymentProducts += product;
        }

        //DocumentType = 1(Продажа)
        if (frontol.currentDocument.type.code === 1) {
            if (JetQrPay == null) JetQrPay = new ActiveXObject("AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver");

            var result = null;
            if (frontolPayment.type.code === ALIF_SALOM) {
                result = JetQrPay.ProcessSalomPayment(frontolPaymentData, frontolPaymentProducts);
            } else {
                result = JetQrPay.ProcessQrPayment(frontolPaymentData, frontolPaymentProducts);
            }

            if (result.IsSuccessful) {
                var isDuplicate = frontol.currentDocument.userValues.get(result.InvoiceId) > 0;
                if (isDuplicate === false) {
                    frontol.currentDocument.addPayment(result.FrontolBankCode, result.AmountArrived, null);
                    frontol.currentDocument.userValues.set(result.InvoiceId, result.InvoiceId);
                } else {
                    show("Дублирующий платеж! Этот платеж уже есть в списке.");
                }
            } else {
                show("Ошибка платежа! Не произведен платеж!");
            }

            JetQrPay.Dispose();
            JetQrPay = null;
        }

        frontol.actions.cancel();
    }
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
    var documentHasJetQrPayments = false;
    for (
        frontol.currentDocument.payment.index = 1;
        frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count;
        frontol.currentDocument.payment.index++
    ) {
        if (frontol.currentDocument.payment.type.code === JET_QR) {
            documentHasJetQrPayments = true;
            break;
        }
    }

    if (documentHasJetQrPayments) {
        if (JetQrPay == null) JetQrPay = new ActiveXObject("AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver");

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
        show("У вас нет доступа к административному интерфейсу ПС Алиф Капитал");
        return;
    }

    if (JetQrPay == null) JetQrPay = new ActiveXObject("AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver");

    var result = JetQrPay.ShowAdminUI();
    if (result != null) {
        //do belongnes check
        if (result.DocumentId === frontol.currentDocument.number) {
            var qrType = MERCHANT_PRESENTED_QR;
            if (result.QrPaymentType === 1) qrType = CUSTOMER_PRESENTED_QR;

            //NOTE:при удалении платежа из frontol нет возможности выборочно подчищать данные используемые для контроля дублирующих платежей
            //Соттветсвенно когда платеж удаляется, id платежа остается в userValues и не дает заново добавить платеж с этим id
            //Как workaround смотрим если в списке нет ни одного платежа с нужным типом, то не делаем check на дубликат
            var needDuplicateCheck = hasAnyQrPaymentOfType(qrType);
            if (needDuplicateCheck === false) {
                frontol.currentDocument.addPayment(qrType, result.AmountArrived, null);
            } else {
                var isDuplicate = frontol.currentDocument.userValues.get(result.InvoiceId) > 0;
                if (isDuplicate === false) {
                    frontol.currentDocument.addPayment(qrType, result.AmountArrived, null);
                    frontol.currentDocument.userValues.set(result.InvoiceId, result.InvoiceId);
                } else show("Дублирующий платеж! Этот платеж уже есть в списке.");
            }
        } else {
            show("Ошибка! Нельзя добавлять платеж предназначенный для другого документа!");
        }
    }

    JetQrPay.Dispose();
    JetQrPay = null;
}

function hasAnyQrPaymentOfType(qrPaymentType) {
    for (
        frontol.currentDocument.payment.index = 1;
        frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count;
        frontol.currentDocument.payment.index++
    ) {
        if (frontol.currentDocument.payment.type.code === qrPaymentType) return true;
    }
    return false;
}

function IsAdminUser() {
    var isAdmin = false;
    try {
        var queryString =
            'SELECT p.Code AS "ProfileCode",p.Name FROM "USER" u, Profile p WHERE u.profileid = p.id AND u.Code = \'' +
            frontol.currentUser.code +
            "';";
        DB =
            "DRIVER=Firebird/InterBase(r) driver; DBNAME=localhost:" +
            FRONTOL_DB_PATH +
            ";UID=sysdba;PWD=masterkey;CHARSET=WIN1251;";
        var Conn = new ActiveXObject("ADODB.Connection");
        Conn.Provider = "MSDASQL.1";
        Conn.Open(DB);
        var qSelect = new ActiveXObject("ADODB.Command");
        qSelect.ActiveConnection = Conn;
        qSelect.CommandText = queryString;
        var result = qSelect.Execute;
        if (result) {
            var userProfileCode = result.Fields.Item("ProfileCode");
            //var userProfileName = result.Fields.Item("Name");
            for (code in FRONTOL_ADMIN_PROFILE_CODES) {
                if (userProfileCode == FRONTOL_ADMIN_PROFILE_CODES[code]) {
                    isAdmin = true;
                    break;
                }
            }
        }
    } catch (e) {
        show("Query execution error: [" + e.number + "],\n" + e.message + ",\nquery: " + queryString);
    }
    return isAdmin;
}

//==========================================================================================================================
//МДО Хумо
//==========================================================================================================================
//БИБЛИОТЕКА СЕРВИСОВ ДЛЯ QR ОПЛАТЫ С ПЦ МДО ХУМО
//HUMO QR Payment
HumoLibraries: {
    // функция для отправки http запроса (платежное поручение) на ПЦ МДО Хумо
    /* silent - режим выполнения (true - фоновый, false - обычный)*/
    function HumoQRPaymentOrder(silent) {
        //Инициализацируем параметры для отправки запросов в ПЦ МДО ХУМО
        var actvx = new ActiveXObject("Humo.Run");
        doc = frontol.currentDocument;
        //создаем и обнуляем флаг для отправки документа
        var pos = doc.position;
        var totalSum = doc.sum;

        if (doc.sum - doc.totalSum != 0) {
            totalSum = frontol.currentDocument.totalSum;
        }

        for (doc.payment.index = 1; doc.payment.index <= doc.payment.count; doc.payment.index++) {
            if (doc.payment.type.code == Number(frontol.userValues.get(BONUS_PAYMENT_CODE_NAME))) {
                totalSum -= doc.payment.sumInBaseCurrency;
            }
        }
        totalSum = Number(totalSum).round(2);
        showMessage(totalSum);

        var posJSONArr = new Array();

        if (pos.count > 0 && totalSum > 0) {
            for (pos.index = 1; pos.index <= pos.count; pos.index++) {
                posJSONArr.push({
                    Index: pos.index,
                    WareName: pos.ware.name,
                    Price: pos.price,
                    Quantity: pos.quantity,
                    TotalSum: pos.totalSum
                });
            }

            WaresJson = {
                WorkPlace: "РМ №" + frontol.codeWorkplace,
                DocumentID: doc.number,
                ListOfWares: posJSONArr
            };

            dataJSON = JSON.stringify({
                TotalSum: totalSum,
                Wares: WaresJson
            });

            var state = actvx.ShowForm(dataJSON);

            if (state != "PAID") cancelAct();

            actvx = null;
        }
    }
}
//PROCCESSING MDO HUMO END
//==========================================================================================================================================================================================
/**
 * PROCESSING - MB "Favri"
 * OJSC «Commerce Bank of Tajikistan»
 * @version module 1.0
 * @url https://staticqrmodule.cbt.tj/
 */
CBTPayment: {
    /* jshint ignore:start */
    var Sha1Crypt =
        Sha1Crypt ||
        (function (g, l) {
            var e = {},
                d = (e.lib = {}),
                m = function () {},
                k = (d.Base = {
                    extend: function (a) {
                        m.prototype = this;
                        var c = new m();
                        a && c.mixIn(a);
                        c.hasOwnProperty("init") ||
                            (c.init = function () {
                                c.$super.init.apply(this, arguments);
                            });
                        c.init.prototype = c;
                        c.$super = this;
                        return c;
                    },
                    create: function () {
                        var a = this.extend();
                        a.init.apply(a, arguments);
                        return a;
                    },
                    init: function () {},
                    mixIn: function (a) {
                        for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                        a.hasOwnProperty("toString") && (this.toString = a.toString);
                    },
                    clone: function () {
                        return this.init.prototype.extend(this);
                    }
                }),
                p = (d.WordArray = k.extend({
                    init: function (a, c) {
                        a = this.words = a || [];
                        this.sigBytes = c != l ? c : 4 * a.length;
                    },
                    toString: function (a) {
                        return (a || n).stringify(this);
                    },
                    concat: function (a) {
                        var c = this.words,
                            q = a.words,
                            f = this.sigBytes;
                        a = a.sigBytes;
                        this.clamp();
                        if (f % 4)
                            for (var b = 0; b < a; b++)
                                c[(f + b) >>> 2] |=
                                    ((q[b >>> 2] >>> (24 - 8 * (b % 4))) & 255) << (24 - 8 * ((f + b) % 4));
                        else if (65535 < q.length) for (b = 0; b < a; b += 4) c[(f + b) >>> 2] = q[b >>> 2];
                        else c.push.apply(c, q);
                        this.sigBytes += a;
                        return this;
                    },
                    clamp: function () {
                        var a = this.words,
                            c = this.sigBytes;
                        a[c >>> 2] &= 4294967295 << (32 - 8 * (c % 4));
                        a.length = g.ceil(c / 4);
                    },
                    clone: function () {
                        var a = k.clone.call(this);
                        a.words = this.words.slice(0);
                        return a;
                    },
                    random: function (a) {
                        for (var c = [], b = 0; b < a; b += 4) c.push((4294967296 * g.random()) | 0);
                        return new p.init(c, a);
                    }
                })),
                b = (e.enc = {}),
                n = (b.Hex = {
                    stringify: function (a) {
                        var c = a.words;
                        a = a.sigBytes;
                        for (var b = [], f = 0; f < a; f++) {
                            var d = (c[f >>> 2] >>> (24 - 8 * (f % 4))) & 255;
                            b.push((d >>> 4).toString(16));
                            b.push((d & 15).toString(16));
                        }
                        return b.join("");
                    },
                    parse: function (a) {
                        for (var c = a.length, b = [], f = 0; f < c; f += 2)
                            b[f >>> 3] |= parseInt(a.substr(f, 2), 16) << (24 - 4 * (f % 8));
                        return new p.init(b, c / 2);
                    }
                }),
                j = (b.Latin1 = {
                    stringify: function (a) {
                        var c = a.words;
                        a = a.sigBytes;
                        for (var b = [], f = 0; f < a; f++)
                            b.push(String.fromCharCode((c[f >>> 2] >>> (24 - 8 * (f % 4))) & 255));
                        return b.join("");
                    },
                    parse: function (a) {
                        for (var c = a.length, b = [], f = 0; f < c; f++)
                            b[f >>> 2] |= (a.charCodeAt(f) & 255) << (24 - 8 * (f % 4));
                        return new p.init(b, c);
                    }
                }),
                h = (b.Utf8 = {
                    stringify: function (a) {
                        try {
                            return decodeURIComponent(escape(j.stringify(a)));
                        } catch (c) {
                            throw Error("Malformed UTF-8 data");
                        }
                    },
                    parse: function (a) {
                        return j.parse(unescape(encodeURIComponent(a)));
                    }
                }),
                r = (d.BufferedBlockAlgorithm = k.extend({
                    reset: function () {
                        this._data = new p.init();
                        this._nDataBytes = 0;
                    },
                    _append: function (a) {
                        "string" == typeof a && (a = h.parse(a));
                        this._data.concat(a);
                        this._nDataBytes += a.sigBytes;
                    },
                    _process: function (a) {
                        var c = this._data,
                            b = c.words,
                            f = c.sigBytes,
                            d = this.blockSize,
                            e = f / (4 * d),
                            e = a ? g.ceil(e) : g.max((e | 0) - this._minBufferSize, 0);
                        a = e * d;
                        f = g.min(4 * a, f);
                        if (a) {
                            for (var k = 0; k < a; k += d) this._doProcessBlock(b, k);
                            k = b.splice(0, a);
                            c.sigBytes -= f;
                        }
                        return new p.init(k, f);
                    },
                    clone: function () {
                        var a = k.clone.call(this);
                        a._data = this._data.clone();
                        return a;
                    },
                    _minBufferSize: 0
                }));
            d.Hasher = r.extend({
                cfg: k.extend(),
                init: function (a) {
                    this.cfg = this.cfg.extend(a);
                    this.reset();
                },
                reset: function () {
                    r.reset.call(this);
                    this._doReset();
                },
                update: function (a) {
                    this._append(a);
                    this._process();
                    return this;
                },
                finalize: function (a) {
                    a && this._append(a);
                    return this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function (a) {
                    return function (b, d) {
                        return new a.init(d).finalize(b);
                    };
                },
                _createHmacHelper: function (a) {
                    return function (b, d) {
                        return new s.HMAC.init(a, d).finalize(b);
                    };
                }
            });
            var s = (e.algo = {});
            return e;
        })(Math);
    (function () {
        var g = Sha1Crypt,
            l = g.lib,
            e = l.WordArray,
            d = l.Hasher,
            m = [],
            l = (g.algo.SHA1 = d.extend({
                _doReset: function () {
                    this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                },
                _doProcessBlock: function (d, e) {
                    for (
                        var b = this._hash.words, n = b[0], j = b[1], h = b[2], g = b[3], l = b[4], a = 0;
                        80 > a;
                        a++
                    ) {
                        if (16 > a) m[a] = d[e + a] | 0;
                        else {
                            var c = m[a - 3] ^ m[a - 8] ^ m[a - 14] ^ m[a - 16];
                            m[a] = (c << 1) | (c >>> 31);
                        }
                        c = ((n << 5) | (n >>> 27)) + l + m[a];
                        c =
                            20 > a
                                ? c + (((j & h) | (~j & g)) + 1518500249)
                                : 40 > a
                                ? c + ((j ^ h ^ g) + 1859775393)
                                : 60 > a
                                ? c + (((j & h) | (j & g) | (h & g)) - 1894007588)
                                : c + ((j ^ h ^ g) - 899497514);
                        l = g;
                        g = h;
                        h = (j << 30) | (j >>> 2);
                        j = n;
                        n = c;
                    }
                    b[0] = (b[0] + n) | 0;
                    b[1] = (b[1] + j) | 0;
                    b[2] = (b[2] + h) | 0;
                    b[3] = (b[3] + g) | 0;
                    b[4] = (b[4] + l) | 0;
                },
                _doFinalize: function () {
                    var d = this._data,
                        e = d.words,
                        b = 8 * this._nDataBytes,
                        g = 8 * d.sigBytes;
                    e[g >>> 5] |= 128 << (24 - (g % 32));
                    e[(((g + 64) >>> 9) << 4) + 14] = Math.floor(b / 4294967296);
                    e[(((g + 64) >>> 9) << 4) + 15] = b;
                    d.sigBytes = 4 * e.length;
                    this._process();
                    return this._hash;
                },
                clone: function () {
                    var e = d.clone.call(this);
                    e._hash = this._hash.clone();
                    return e;
                }
            }));
        g.SHA1 = d._createHelper(l);
        g.HmacSHA1 = d._createHmacHelper(l);
    })();
    (function () {
        var g = Sha1Crypt,
            l = g.enc.Utf8;
        g.algo.HMAC = g.lib.Base.extend({
            init: function (e, d) {
                e = this._hasher = new e.init();
                "string" == typeof d && (d = l.parse(d));
                var g = e.blockSize,
                    k = 4 * g;
                d.sigBytes > k && (d = e.finalize(d));
                d.clamp();
                for (
                    var p = (this._oKey = d.clone()), b = (this._iKey = d.clone()), n = p.words, j = b.words, h = 0;
                    h < g;
                    h++
                )
                    (n[h] ^= 1549556828), (j[h] ^= 909522486);
                p.sigBytes = b.sigBytes = k;
                this.reset();
            },
            reset: function () {
                var e = this._hasher;
                e.reset();
                e.update(this._iKey);
            },
            update: function (e) {
                this._hasher.update(e);
                return this;
            },
            finalize: function (e) {
                var d = this._hasher;
                e = d.finalize(e);
                d.reset();
                return d.finalize(this._oKey.clone().concat(e));
            }
        });
    })();
    /* jshint ignore:end */
    /**
     * Возвращает конфигурации терминала
     */
    function CBTGetConfig() {
        var fileLocation = "C:\\CBTPayment\\config.json";

        try {
            var fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
            var fileCursor = fileSystemObject.OpenTextFile(fileLocation, 1);
            var fileContent = fileCursor.ReadAll();

            var configuration = JSON.parse(fileContent);

            if (configuration === false || configuration === null) {
                showError(
                    "Не удалось открыть файл конфигурации для Мобильного Банкинга «Фаври». Обратитесь к администратору!"
                );
                return false;
            }

            // Настройки терминала
            if (configuration.apiUrl == null || configuration.apiUrl === "") {
                showError(
                    "МБ «Фаври»: Параметр {apiUrl} в файле конфигурации не найден. Для решения проблемы, пожалуйста, обратитесь к администратору."
                );
                return false;
            }
            if (configuration.terminalId == null || configuration.terminalId === "") {
                showError(
                    "МБ «Фаври»: Параметр {terminalId} в файле конфигурации не найден. Для решения проблемы, пожалуйста, обратитесь к администратору."
                );
                return false;
            }
            if (configuration.terminalProviderId == null || configuration.terminalProviderId === "") {
                showError(
                    "МБ «Фаври»: Параметр {terminalProviderId} в файле конфигурации не найден. Для решения проблемы, пожалуйста, обратитесь к администратору."
                );
                return false;
            }
            if (
                configuration.terminalSecretKey == null ||
                configuration.terminalSecretKey === "" ||
                configuration.terminalSecretKey === "undefined"
            ) {
                showError(
                    "МБ «Фаври»: Параметр {terminalSecretKey} в файле конфигурации не найден. Для решения проблемы, пожалуйста, обратитесь к администратору."
                );
                return false;
            }

            // Настройки принтера
            if (configuration.printerPort == null || configuration.printerPort === "") {
                showError(
                    "МБ «Фаври»: Параметр {printerPort} в файле конфигурации не найден. Обратитесь к администратору!"
                );
                return false;
            }
            if (configuration.printerBaudRate == null || configuration.printerBaudRate === "") {
                showError(
                    "МБ «Фаври»: Параметр {printerBaudRate} в файле конфигурации не найден. Обратитесь к администратору!"
                );
                return false;
            }
            if (configuration.printerModel == null || configuration.printerModel === "") {
                showError(
                    "МБ «Фаври»: Параметр {printerModel} в файле конфигурации не найден. Обратитесь к администратору!"
                );
                return false;
            }
            if (configuration.printerPassword == null || configuration.printerPassword === "") {
                showError(
                    "МБ «Фаври»: Параметр {printerPassword} в файле конфигурации не найден. Обратитесь к администратору!"
                );
                return false;
            }

            fileCursor.close();
            return configuration;
        } catch (e) {
            if (e.message === "") {
                fileCursor.close();
                throw e;
            } else {
                switch (e.number) {
                    case -2146828218:
                        showError("МБ «Фаври»: Ошибка прав доступа. Обратитесь к администратору!");
                        break;
                    case -2146828235:
                        showError("МБ «Фаври»: Файл конфигурации не найден. Обратитесь к администратору!");
                        break;
                    default:
                        showError(
                            "МБ «Фаври»: Неизвестная ошибка связанная с файлом конфигураций: " +
                                e.number +
                                "\n" +
                                e.message +
                                ". Обратитесь к администратору!"
                        );
                }
            }
        } finally {
            try {
                fileCursor.Close();
            } catch (e) {}
        }
        return false;
    }

    /**
     * Создаёт ордер, отправляя запрос на модуль – метод "prepare"
     */
    function CBTPreparePayment() {
        if (typeof JSON !== "object" || typeof JSON.parse !== "function") {
            CBTWriteToLog("FB1", "ERROR", "CBTPreparePayment");
            getJson2();
        }

        // получаем данные
        CBTWriteToLog("FB2. Getting position", "ERROR", "CBTPreparePayment");
        var position = frontol.currentDocument.position;
        CBTWriteToLog("FB3. Getting total sum", "ERROR", "CBTPreparePayment");
        var totalSum = frontol.currentDocument.sum;

        if (frontol.currentDocument.sum - frontol.currentDocument.totalSum != 0) {
            CBTWriteToLog("FB4. Calculating total sum and rounding", "ERROR", "CBTPreparePayment");
            totalSum = frontol.currentDocument.totalSum;
            //totalSum = totalSum.toFixed(4);
            totalSum = Math.round(totalSum * 100) / 100;
        }

        // переменная для печати чека
        var positionData = [];

        // переменные для данных запроса (детализированная оплата)
        var detailedOrder = false;
        var paymentItems = [];

        if (position.count > 0 && totalSum > 0) {
            CBTWriteToLog("FB5. Position count or total sum exists", "ERROR", "CBTPreparePayment");
            detailedOrder = true;
            for (position.index = 1; position.index <= position.count; position.index++) {
                CBTWriteToLog("FB6. Pushing to position and payment list", "ERROR", "CBTPreparePayment");
                positionData.push({
                    Index: position.index,
                    WareName: position.ware.name,
                    Price: position.price,
                    Quantity: position.quantity,
                    TotalSum: position.totalSum
                });

                paymentItems.push({
                    productId: position.id,
                    productTitle: position.ware.name,
                    productQuantity: position.quantity,
                    productPrice: position.totalSum,
                    productUnit: position.ware.fracSale == 1 ? "item" : "kilogram"
                });
            }
        } else {
            CBTWriteToLog("DV1. Goods are not selected or sum is equals to 0", "ERROR", "CBTPreparePayment");
            showError("Ошибка! Товары не выбраны или сумма товаров равна нулю.");
        }

        CBTWriteToLog("FB7. Getting config", "ERROR", "CBTPreparePayment");
        var config = CBTGetConfig();

        if (config === false) {
            CBTWriteToLog("FB8. No config", "ERROR", "CBTPreparePayment");
            showError("Ошибка при получении данных из конфигурационного файла. Обратитесь к администратору!");
            return;
        }

        CBTWriteToLog("FB9. Getting timestamp", "ERROR", "CBTPreparePayment");
        var timestamp = CBTGetUnixTimestamp();

        CBTWriteToLog("FB10. Building JSON", "ERROR", "CBTPreparePayment");
        // Создание данных для запроса
        var jsonData = {};

        jsonData.terminalId = config.terminalId;
        jsonData.providerId = config.terminalProviderId;
        jsonData.totalAmount = totalSum;
        jsonData.detailedOrder = detailedOrder;
        jsonData.orderDetails = [paymentItems];
        jsonData.timestamp = timestamp;

        CBTWriteToLog("FB11. Building checksum", "ERROR", "CBTPreparePayment");
        var checksumData = "__st_" + config.terminalProviderId + config.terminalId + timestamp;
        var checksumHex = Sha1Crypt.HmacSHA1(checksumData, config.terminalSecretKey);

        jsonData.checksum = Sha1Crypt.enc.Hex.stringify(checksumHex);
        jsonData.checksumData = checksumData; // for debug

        CBTWriteToLog("FB12. Building XHR", "ERROR", "CBTPreparePayment");
        var xhrResponse = null;
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");

        // подготовка запроса
        CBTWriteToLog("FB13. Building checksum", "ERROR", "CBTPreparePayment");
        xhr.open("POST", config.apiUrl + "prepare");
        xhr.setRequestHeader("Content-Type", "application/json");

        CBTWriteToLog(
            "AV1. Payment create request JSON data: " + JSON.stringify(jsonData),
            "DEBUG",
            "CBTPreparePayment"
        );

        // отправляем запрос
        xhr.send(JSON.stringify(jsonData));

        var requestTimeout = 30;

        for (var time = 1; time <= requestTimeout; time++) {
            if (xhr.readyState !== 4) {
                CBTWriteToLog("FB14. Processing request", "ERROR", "CBTPreparePayment");
                frontol.actions.wait("ОБРАБОТКА ЗАПРОСА...", 1);
            } else {
                break;
            }
        }

        CBTWriteToLog("FB15. Processing request", "ERROR", "CBTPreparePayment");
        frontol.actions.wait("ОБРАБОТКА ЗАПРОСА...", 1);

        switch (xhr.readyState) {
            case 4:
                CBTWriteToLog("FB16. Ready state 4", "ERROR", "CBTPreparePayment");
                xhrResponse = xhr.responseText;
                xhr.abort();
                break;
            case 2:
                CBTWriteToLog("FB17. Ready state 2", "ERROR", "CBTPreparePayment");
                break;
            default:
                CBTWriteToLog("FB18. Ready state: def " + xhr.readyState, "ERROR", "CBTPreparePayment");
                break;
        }

        if (xhrResponse !== null) {
            // если ответ получен
            CBTWriteToLog(
                "AV1. Payment create request JSON data (xhrResponse): " + xhrResponse,
                "DEBUG",
                "CBTPreparePayment"
            );

            var responseJsonObject = null;
            var orderId = null;

            try {
                CBTWriteToLog("FB19. Parsing response", "ERROR", "CBTPreparePayment");
                responseJsonObject = JSON.parse(xhrResponse);
            } catch (e) {
                if (e.name === "SyntaxError") {
                    CBTWriteToLog("PV1. JSON Syntax Error: " + e.message, "ERROR", "CBTPreparePayment");
                    showError("Ошибка при отправке запроса. Для решении проблемы обратитесь к администратору!");
                } else {
                    CBTWriteToLog("PV2. Broken JSON: " + e.message, "ERROR", "CBTPreparePayment");
                    showError("Что-то пошло не так. Для решении проблемы обратитесь к администратору!");
                }
                CBTWriteToLog("FB20. Cancelling", "ERROR", "CBTPreparePayment");
                cancelAct();
            }

            if (
                responseJsonObject === undefined ||
                responseJsonObject.statusCode !== 200 ||
                responseJsonObject.data === null ||
                responseJsonObject.data.checksum === "" ||
                responseJsonObject.data.checksum === null ||
                responseJsonObject.data.checksum === undefined
            ) {
                CBTWriteToLog("NV1. Checksum is missing", "ERROR", "CBTPreparePayment");
                showError(
                    "Отсутствуют данные или чек-сумма в ответе. Для решении проблемы обратитесь к администратору!"
                );
                cancelAct();
            } else {
                var externalLId = "";

                if (
                    responseJsonObject.data.externalId !== undefined &&
                    responseJsonObject.data.externalId !== null &&
                    responseJsonObject.data.externalId !== ""
                ) {
                    externalLId = responseJsonObject.data.externalId;
                    CBTWriteToLog("FB21. External ID: " + externalLId, "ERROR", "CBTPreparePayment");
                }

                var incomingChecksumData =
                    "__OC_TT_" +
                    responseJsonObject.data.status +
                    responseJsonObject.data.orderId +
                    responseJsonObject.data.timestamp +
                    externalLId;
                var incomingChecksumHex = Sha1Crypt.HmacSHA1(incomingChecksumData, config.terminalSecretKey);
                var incomingChecksum = Sha1Crypt.enc.Hex.stringify(incomingChecksumHex);

                if (incomingChecksum !== responseJsonObject.data.checksum) {
                    CBTWriteToLog("FB22. Wrong checksum", "ERROR", "CBTPreparePayment");
                    showMessage(
                        "Ошибка подписи, подпись не совпадает! Для решении проблемы обратитесь к администратору!"
                    );
                    cancelAct();
                }
                if (responseJsonObject.data.status === "Ready") {
                    if (
                        responseJsonObject.data.orderId !== "undefined" &&
                        responseJsonObject.data.orderId !== null &&
                        responseJsonObject.data.orderId !== ""
                    ) {
                        CBTWriteToLog("FB23. Waiting for user status change", "ERROR", "CBTPreparePayment");
                        orderId = responseJsonObject.data.orderId;
                        CBTWriteToLog("FB24. Order ID:" + orderId, "ERROR", "CBTPreparePayment");
                        frontol.actions.wait("Обработка запроса", 1);
                        CBTRetrievePaymentStatus(orderId);
                    } else {
                        CBTWriteToLog("QV2. No order ID returned", "ERROR", "CBTPreparePayment");
                        showError(
                            "Отсутствует идентификатор заказа! Для решении проблемы обратитесь к администратору!"
                        );
                        cancelAct();
                    }
                } else {
                    CBTWriteToLog("QV1. Status is not equals to Ready", "ERROR", "CBTPreparePayment");
                    showMessage("Что-то пошло не так. Для решении проблемы обратитесь к администратору!");
                    cancelAct();
                }
            }
        } else {
            CBTWriteToLog("AV1. Request error, no response", "ERROR", "CBTPreparePayment");
            showError(
                "Ошибка при отправке запроса, результат не был получен. Для решении проблемы обратитесь к администратору!"
            );
            cancelAct();
        }
    }

    /**
     * Запрашивает у сервера статус ордера
     * @param {string} externalId - ID выданный Банком
     */
    function CBTRetrievePaymentStatus(externalId) {
        if (externalId === "" || externalId === "undefined") {
            externalId = null;
            CBTWriteToLog("FB3.1. No external id", "ERROR", "CBTPreparePayment");
        }

        CBTWriteToLog("FB3.2. Retrieving config", "ERROR", "CBTPreparePayment");
        var config = CBTGetConfig();

        if (config === false) {
            CBTWriteToLog("FB3.3. No config or fail loading", "ERROR", "CBTPreparePayment");
            showError(
                "Ошибка при получении данных из конфигурационного файла. Для решении проблемы обратитесь к администратору!"
            );
            return;
        }

        CBTWriteToLog("FB3.4. Building checksum", "ERROR", "CBTPreparePayment");

        var checksumOutgoingTimestamp = CBTGetUnixTimestamp();
        var checksumData = "__ps_" + config.terminalId + config.terminalProviderId + checksumOutgoingTimestamp;
        var checksumHex = Sha1Crypt.HmacSHA1(checksumData, config.terminalSecretKey);
        var checksum = Sha1Crypt.enc.Hex.stringify(checksumHex);

        CBTWriteToLog("FB3.5. Checksum built", "ERROR", "CBTPreparePayment");

        var processUrl =
            config.apiUrl +
            "payment/status?orderId=" +
            externalId +
            "&terminalId=" +
            config.terminalId +
            "&providerId=" +
            config.terminalProviderId +
            "&timestamp=" +
            checksumOutgoingTimestamp +
            "&checksum=" +
            checksum;
        CBTWriteToLog("SV1. Process url: " + processUrl, "INFO", "CBTRetrievePaymentStatus");

        // время, после которого у кассира будет уточнено, необходимо ли подождать ещё
        // (оплатил ли клиент счёт) или отменить заказ
        var timeout = 30;

        // время в секундах, через которое будет пере-отправляться запрос
        var resendTime = 5;

        // определяем количество отправляемых запросов
        var iterationCount = timeout / resendTime - 1;

        var paymentStatus = null;

        do {
            CBTWriteToLog("FB3.6. Sending request block", "ERROR", "CBTPreparePayment");
            var requestCount = 0;
            var await = DialogResult.Retry;

            do {
                CBTWriteToLog("FB3.7. Sending request", "ERROR", "CBTPreparePayment");
                // отправляю запрос
                var xhrResponse = null;
                var xhr = new ActiveXObject("Microsoft.XMLHTTP");

                xhr.open("GET", processUrl);
                xhr.send();
                CBTWriteToLog("FB3.8. Request sent", "ERROR", "CBTPreparePayment");

                var requestTimeout = 10;
                var exitLoop = false;

                for (var time = 1; time <= requestTimeout; time++) {
                    CBTWriteToLog("FB3.9. Waiting... " + time, "ERROR", "CBTPreparePayment");
                    if (xhr.readyState !== 4 && xhrResponse === null && exitLoop === false) {
                        CBTWriteToLog("FB3.10. Request state is 4", "ERROR", "CBTPreparePayment");
                        CBTWriteToLog(
                            "FB3.11. Waiting via frontol on " + resendTime + " seconds",
                            "ERROR",
                            "CBTPreparePayment"
                        );
                        frontol.actions.wait(
                            "Попросите клиента отсканировать QR при помощи приложения\n" +
                                "Мобильного Банкинга «Фаври» и оплатить счёт.\n" +
                                "Ожидание статуса платежа...\n",
                            resendTime
                        );
                    } else {
                        CBTWriteToLog("FB3.12. Request finished", "ERROR", "CBTPreparePayment");
                        xhrResponse = xhr.responseText;
                        CBTWriteToLog("FB3.13. Exitting loop.", "ERROR", "CBTPreparePayment");
                        exitLoop = true;
                        break;
                    }
                }
                requestCount++;
                CBTWriteToLog("FB3.14. Request count implemented", "ERROR", "CBTPreparePayment");

                if (xhrResponse !== null) {
                    //paymentStatus = 'not null, raw: ' + xhrResponse;

                    var responseJsonObject = null;

                    CBTWriteToLog("QV1. XHR Response: " + xhrResponse, "INFO", "CBTRetrievePaymentStatus");

                    try {
                        CBTWriteToLog("FB3.15. Parsing response", "ERROR", "CBTPreparePayment");
                        responseJsonObject = JSON.parse(xhrResponse);
                        CBTWriteToLog("FB3.16. Response is parsed", "ERROR", "CBTPreparePayment");
                    } catch (e) {
                        CBTWriteToLog("QV1. JSON Error: " + e.message, "ERROR", "CBTRetrievePaymentStatus");
                        if (e.name === "SyntaxError") {
                            CBTWriteToLog("EV1. Syntax error exception: ".e, "INFO", "CBTRetrievePaymentStatus");
                            showError("Ошибка при получении ответа. Для решении проблемы обратитесь к администратору!");
                        } else {
                            CBTWriteToLog("EV2. Exception: ".e, "INFO", "CBTRetrievePaymentStatus");
                            showError("Что-то пошло не так. Для решении проблемы обратитесь к администратору!");
                        }
                        cancelAct();
                    }
                    if (
                        responseJsonObject !== null &&
                        responseJsonObject !== "" &&
                        responseJsonObject !== undefined &&
                        responseJsonObject.data !== null &&
                        responseJsonObject.data !== undefined &&
                        responseJsonObject.data.checksum != null &&
                        responseJsonObject.data.status !== null &&
                        responseJsonObject.data.status !== ""
                    ) {
                        var payer = "";

                        CBTWriteToLog("FB3.17. Identifying payer", "ERROR", "CBTPreparePayment");
                        if (responseJsonObject.data.payer != null && responseJsonObject.data.payer !== "") {
                            CBTWriteToLog("FB3.18. Payer identified", "ERROR", "CBTPreparePayment");
                            payer = responseJsonObject.data.payer;
                        }

                        CBTWriteToLog(
                            "FB3.19. Preparing to check checksum. Regenerating",
                            "ERROR",
                            "CBTPreparePayment"
                        );
                        var incomingChecksumData =
                            "__sq_" + responseJsonObject.data.status + payer + responseJsonObject.data.timestamp;
                        var incomingChecksumHex = Sha1Crypt.HmacSHA1(incomingChecksumData, config.terminalSecretKey);
                        var incomingChecksum = Sha1Crypt.enc.Hex.stringify(incomingChecksumHex);

                        if (responseJsonObject.data.checksum !== incomingChecksum) {
                            CBTWriteToLog("FB3.20. Checksum mismatch", "ERROR", "CBTPreparePayment");
                            showError(
                                "Контрольная сумма не совпадает. Для решении проблемы обратитесь к администратору!"
                            );
                            cancelAct();
                        }
                        CBTWriteToLog(
                            "RV1. Payment status: " + responseJsonObject.data.status,
                            "DEBUG",
                            "CBTRetrievePaymentStatus"
                        );

                        switch (responseJsonObject.data.status) {
                            case "cancelled":
                            case "cancelled_by_issuer":
                            case "rejected":
                            case "failed":
                            case "expired":
                                CBTWriteToLog("FB3.21. Transaction status is Failed", "ERROR", "CBTPreparePayment");
                                paymentStatus = "failed";
                                break;
                            case "accepted":
                                CBTWriteToLog("FB3.22. Transaction status is OK", "ERROR", "CBTPreparePayment");
                                paymentStatus = "accepted";
                                if (
                                    responseJsonObject.data.payer !== null &&
                                    responseJsonObject.data.payer !== undefined &&
                                    responseJsonObject.data.payer !== ""
                                ) {
                                    CBTWriteToLog("FB3.23. Client identifier exists", "ERROR", "CBTPreparePayment");
                                    frontol.currentDocument.userValues.set(
                                        "CBTPaymentClientIdentifier",
                                        responseJsonObject.data.payer
                                    );
                                } else {
                                    CBTWriteToLog(
                                        "FB3.24. Client identifier does not exists, using placeholder",
                                        "ERROR",
                                        "CBTPreparePayment"
                                    );
                                    frontol.currentDocument.userValues.set(
                                        "CBTPaymentClientIdentifier",
                                        "Клиент ОАО «Коммерцбанка Таджикистана»"
                                    );
                                }
                                break;
                            case "not created":
                            case "pending":
                            default:
                                CBTWriteToLog(
                                    "FB3.25. Pending transaction or is not created",
                                    "ERROR",
                                    "CBTPreparePayment"
                                );
                                paymentStatus = null;
                                break;
                        }
                    } else {
                        CBTWriteToLog("FB3.26. Pending transaction or is not created", "ERROR", "CBTPreparePayment");
                        paymentStatus = null;
                    }

                    if (paymentStatus != null) break;
                } else {
                    CBTWriteToLog("FB3.27", "ERROR", "CBTPreparePayment");
                    frontol.actions.wait(
                        "Попросите клиента отсканировать QR при помощи приложения\n" +
                            "Мобильного Банкинга «Фаври» и оплатить счёт.\n" +
                            "Ожидание статуса платежа...\n",
                        1
                    );
                }
            } while (requestCount < iterationCount);

            if (paymentStatus === null) {
                CBTWriteToLog("FB3.28. Transaction is pending. Wait more?", "ERROR", "CBTPreparePayment");
                // если статус ещё не получен
                await = frontol.actions.showMessage(
                    "Клиент ещё не оплатил счёт\n" +
                        "Подождать или отменить счёт?\n" +
                        "Выберите «Да», чтобы подождать ещё.\n" +
                        "Выберите «Нет», чтобы отменить заказ.",
                    Button.YesNo
                );
                if (await === DialogResult.No) {
                    CBTWriteToLog("FB3.29. Cancelling", "ERROR", "CBTPreparePayment");
                    CBTCancelPayment(externalId);
                    break;
                }
            } else {
                if (paymentStatus === "failed") {
                    CBTWriteToLog("FB3.30. Error. Transaction is failed", "ERROR", "CBTPreparePayment");
                    showMessage("Произошла ошибка при оплате заказа или заказ был отменен!");
                    cancelAct();
                } else if (paymentStatus === "accepted") {
                    CBTWriteToLog("FB3.31. Transaction is accepted", "ERROR", "CBTPreparePayment");
                    //showMessage('Клиент оплатил заказ через Мобильный Банкинг «Фаври»!');
                    CBTPrintReceipts(externalId);
                    //frontol.actions.wait('Клиент оплатил заказ через Мобильный Банкинг «Фаври»!\nНачинается печать чеков', 4);
                } else {
                    CBTWriteToLog("FB3.32. Unknown status: " + paymentStatus, "ERROR", "CBTPreparePayment");
                    showMessage(
                        "Неизвестная ошибка. Статус платежа: " + paymentStatus + ". Обратитесь к администратору!"
                    );
                    cancelAct();
                }
                break;
            }
        } while (await === DialogResult.Yes);
    }

    /**
     * Отменяет ордер, отправляя запрос на модуль - метод "cancel"
     * @param {string} externalId - ID выданный Банком
     */
    function CBTCancelPayment(externalId) {
        CBTWriteToLog("FB4.1. Cancelling payment", "ERROR", "CBTPreparePayment");
        if (typeof JSON !== "object" || typeof JSON.parse !== "function") {
            getJson2();
        }
        var config = CBTGetConfig();

        var xhr = new ActiveXObject("Microsoft.XMLHTTP");

        xhr.open("POST", config.apiUrl + "cancel");
        xhr.setRequestHeader("Content-Type", "application/json");

        var jsonData = {};

        jsonData.terminalId = config.terminalId;
        jsonData.providerId = config.terminalProviderId;
        jsonData.orderId = externalId;

        var checksumOutgoingTimestamp = CBTGetUnixTimestamp();

        jsonData.timestamp = checksumOutgoingTimestamp;

        var checksumData = "__st_" + config.providerId + config.terminalId + externalId + checksumOutgoingTimestamp;
        var outgoingChecksumHex = Sha1Crypt.HmacSHA1(checksumData, config.terminalSecretKey);

        jsonData.checksum = Sha1Crypt.enc.Hex.stringify(outgoingChecksumHex);

        xhr.send(JSON.stringify(jsonData));

        var requestTimeout = 30;

        for (var time = 1; time <= requestTimeout; time++) {
            if (xhr.readyState !== 4) {
                frontol.actions.wait("ОБРАБОТКА ЗАПРОСА...", 1);
            } else {
                break;
            }
        }

        CBTWriteToLog("Cancelling payment with external id: " + externalId, "DEBUG", "CBTCancelPayment");
        showMessage("Заказ с идентификатором " + externalId + " отменён!");
        cancelAct();
    }

    /**
     * Создание чеков
     * @param orderId - Идентификатор ордера
     * @returns {Array} - Массив с ключами receipt_client и receipt_cashier
     * @constructor
     */
    function CBTBuildReceipts(orderId) {
        CBTWriteToLog("FB5.1. Building receipt", "ERROR", "CBTPreparePayment");
        var totalSum = frontol.currentDocument.sum;

        if (frontol.currentDocument.sum - frontol.currentDocument.totalSum != 0) {
            CBTWriteToLog("FB5.2. Calculating total sum", "ERROR", "CBTPreparePayment");
            totalSum = frontol.currentDocument.totalSum;
            //totalSum = totalSum.toFixed(2);
            totalSum = Math.round(totalSum * 100) / 100;
        }

        var receipts = [];

        CBTWriteToLog("FB5.3. Building receipt", "ERROR", "CBTPreparePayment");

        var receipt_client = "";
        receipt_client += "        БЛАГОДАРИМ ВАС ЗА ОПЛАТУ!       \r\n";
        receipt_client += "Детали оплаты:\r\n";
        receipt_client +=
            "Дата и время: " + frontol.currentDocument.dateOpen + " " + frontol.currentDocument.timeOpen + "\r\n";
        receipt_client +=
            "Плательщик: " + frontol.currentDocument.userValues.get("CBTPaymentClientIdentifier") + "\r\n";
        receipt_client += "Идентификатор платежа: " + orderId + "\r\n";
        receipt_client += "Номер документа: " + frontol.currentDocument.number + "\r\n";
        receipt_client += "........................................\r\n";
        receipt_client += "Сумма: TJS " + totalSum + "\r\n";
        receipt_client += "........................................\r\n";
        receipt_client += "ОАО «Коммерцбанк Таджикистана»\r\n";
        receipt_client += "Адрес: г. Душанбе, ул. Бохтар 37/1\r\n";
        receipt_client += "Телефон: +992 (44) 630 8888\r\n";
        receipt_client += "Сайт: cbt.tj\r\n";
        receipt_client += "............. ДЛЯ КЛИЕНТА ..............\r\n";

        var receipt_cashier = "";
        receipt_cashier += "        Оплата через МБ «Фаври»         \r\n";
        receipt_cashier += "Детали оплаты:\r\n";
        receipt_cashier +=
            "Дата и время: " + frontol.currentDocument.dateOpen + " " + frontol.currentDocument.timeOpen + "\r\n";
        receipt_cashier +=
            "Плательщик: " + frontol.currentDocument.userValues.get("CBTPaymentClientIdentifier") + "\r\n";
        receipt_cashier += "Идентификатор платежа: " + orderId + "\r\n";
        receipt_cashier += "Номер документа: " + frontol.currentDocument.number + "\r\n";
        receipt_cashier += "........................................\r\n";
        receipt_cashier += "Сумма: TJS " + totalSum + "\r\n";
        receipt_cashier += "........................................\r\n";
        receipt_cashier += "ОАО «Коммерцбанк Таджикистана»\r\n";
        receipt_cashier += "Тел.: +992 (44) 630 8888\r\n";
        receipt_cashier += "..............ДЛЯ КАССИРА...............\r\n";

        receipts["receipt_client"] = receipt_client;
        receipts["receipt_cashier"] = receipt_cashier;

        CBTWriteToLog("FB5.2. Receipts are built", "ERROR", "CBTPreparePayment");

        return receipts;
    }

    /**
     * Начинает печать чеков по очеради
     * @param {string} orderId - ID выданный Банком
     * @constructor
     */
    function CBTPrintReceipts(orderId) {
        CBTWriteToLog("FB6.1. Printing receipts", "ERROR", "CBTPreparePayment");
        var receipts = CBTBuildReceipts(orderId);

        CBTPrinterPrintText(receipts["receipt_cashier"]);
        CBTPrinterPrintText(receipts["receipt_client"]);
        //frontol.actions.wait("Начинается печать чека для клиента", 3);

        //frontol.actions.wait("Начинается печать чека для кассира", 3);
    }

    /**
     * Начинает печать чеков по очеради
     * @param {string} orderId - ID выданный Банком
     * @constructor
     */
    function CBTPrinterPrintText(text) {
        try {
            CBTWriteToLog("FB7.1. Initializing printer", "ERROR", "CBTPreparePayment");
            var ecr = CBTInitializeElectronicCashRegister();

            ecr.PartialCut();
            CBTStartECRPrinting(ecr, text);
            ecr.DeviceEnabled = 0;
            ecr.DeleteDevice();
            CBTWriteToLog("FB7.2. Printing", "ERROR", "CBTPreparePayment");
        } catch (e) {
            CBTWriteToLog("FB7.3. Errror initializing printer", "ERROR", "CBTPreparePayment");
            showError(
                "Ошибка при инициализации принтера или печати чеков: " + e.message + ". Обратитесь к администратору!"
            );
        }
    }

    /**
     * Запрос на печать
     * @param ecr
     * @param textToPrint
     * @constructor
     */
    function CBTStartECRPrinting(ecr, textToPrint) {
        var currentState;

        try {
            currentState = ecr.TextWrap;
        } catch (e) {
            currentState = 1;
        }

        ecr.TextWrap = 1;

        var textArray = textToPrint.split(/\r?\n+/);

        for (var i = 0; i < textArray.length; i++) {
            ecr.Caption = textArray[i];
            ecr.PrintString();
        }

        ecr.TextWrap = currentState;
        ecr.FullCut();
    }

    /**
     * Инициализация принтера
     * Параметры ECR хранятся в конфигурационном файле
     */
    function CBTInitializeElectronicCashRegister() {
        var params = CBTGetConfig();

        try {
            var electronicCashRegister = new ActiveXObject("AddIn.FPrnM8");

            electronicCashRegister.AddDevice();
            electronicCashRegister.Model = params.printerModel;
            electronicCashRegister.PortNumber = params.printerPort;
            electronicCashRegister.BaudRate = params.printerBaudRate;
            electronicCashRegister.Password = params.printerPassword;

            electronicCashRegister.DeviceEnabled = 1;

            return electronicCashRegister;
        } catch (e) {
            showError("Ошибка при инициализации принтера: " + "\n" + e.message + ". Обратитесь к администратору!");
        }
    }

    /**
     * Инициализация принтера
     * Параметры ECR хранятся в конфигурационном файле
     */
    function CBTInitializeElectronicCashRegister() {
        var params = CBTGetConfig();

        try {
            var electronicCashRegister = new ActiveXObject("AddIn.FPrnM8");

            electronicCashRegister.AddDevice();
            electronicCashRegister.Model = params.printerModel;
            electronicCashRegister.PortNumber = params.printerPort;
            electronicCashRegister.BaudRate = params.printerBaudRate;
            electronicCashRegister.Password = params.printerPassword;

            electronicCashRegister.DeviceEnabled = 1;

            return electronicCashRegister;
        } catch (e) {
            showError("Ошибка при инициализации принтера: " + "\n" + e.message + ". Обратитесь к администратору!");
        }
    }

    /**
     * Запись в лог
     * @param {string} text - Текст
     * @param {string} level - Уровень лога
     * @param {string} issuer
     * @constructor
     */
    function CBTWriteToLog(text, level, issuer) {
        if (level === "" || level === undefined || level === null) {
            level = "INFO";
        }
        if (issuer === "" || issuer === undefined || issuer === null) {
            issuer = "MAIN";
        }

        var date = new Date();
        var logFileLocation =
            "C:\\CBTPayment\\logs\\auchan_" +
            date.getFullYear() +
            "_" +
            (date.getMonth() + 1) +
            "_" +
            date.getDate() +
            ".log";

        try {
            var fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");

            // проверяет, если файл отсутствует, то создаёт новый
            if (fileSystemObject.FileExists(logFileLocation) === false) {
                fileSystemObject.CreateTextFile(logFileLocation, false);
            }

            var fileCursor = fileSystemObject.OpenTextFile(logFileLocation, 8, true); // append
            var logItem =
                "[" +
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate() +
                " " +
                date.getHours() +
                ":" +
                date.getMinutes() +
                ":" +
                date.getSeconds() +
                "] " +
                issuer +
                "." +
                level +
                ": " +
                text;
            fileCursor.WriteLine(logItem);
            fileCursor.Close();
        } catch (e) {
            showMessage(
                "Ошибка при записи в лог, file: " +
                    logFileLocation +
                    " ошибка: " +
                    e.message +
                    ". Обратитесь к администратору!",
                Icon.Error
            );
        }
    }

    /**
     * Возвращает Unix timestamp, совместимость <= IE8
     * @returns {number}
     * @constructor
     */
    function CBTGetUnixTimestamp() {
        if (!Date.now) {
            Date.now = function () {
                return new Date().getTime();
            };
        }
        return Math.floor(Date.now() / 1000);
    }
}
// END PROCESSING - MB "Favri"

//START PROCCESSING - EMVCo_TJ (ALIF gateway)
//ALIF

//START PROCCESSING - EMVCo_TJ (ALIF gateway)
//ALIF
var EMVCo_TJ = 107;

function EMVCo_JetQrPayInit() {
    frontol.addEventListener("addPayment", "EMVCo_JetQrBeforeAddPayment", true);
    frontol.addEventListener("cancelDocument", "EMVCo_JetQrAfterCancelDocument", false);
    frontol.addEventListener("stornoPayment", "EMVCo_JetQrBeforeStornoPayment", true);
}

function EMVCo_JetQrBeforeAddPayment(frontolPayment) {
    if (frontolPayment.type.code === EMVCo_TJ) {
        //DocumentType = 1(Продажа)
        if (frontol.currentDocument.type.code === 1) {
            if (JetQrPay == null) JetQrPay = new ActiveXObject("AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver");

            if (frontolPayment.type.code === EMVCo_TJ) {
                var result = JetQrPay.ProcessMerchantPresentedQrPayment(
                    frontolPayment.number,
                    frontol.currentDocument.number,
                    frontol.sessionNumber,
                    frontolPayment.sumInBaseCurrency,
                    frontol.codeWorkplace
                );

                if (result.IsSuccessful) {
                    var isDuplicate = frontol.currentDocument.userValues.get(result.InvoiceId) > 0;

                    if (isDuplicate === false) {
                        frontol.currentDocument.addPayment(EMVCo_TJ, result.AmountArrived, null);
                        frontol.currentDocument.userValues.set(result.InvoiceId, result.InvoiceId);
                    } else {
                        showMessage("Дублирующий платеж! Этот платеж уже есть в списке.");
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
    var documentHasJetQrPayments = false;

    for (
        frontol.currentDocument.payment.index = 1;
        frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count;
        frontol.currentDocument.payment.index++
    ) {
        if (frontol.currentDocument.payment.type.code === EMVCo_TJ) {
            documentHasJetQrPayments = true;
            break;
        }
    }

    if (documentHasJetQrPayments) {
        if (JetQrPay == null) JetQrPay = new ActiveXObject("AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver");

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
        showMessage("Нельзя сторнировать данный вид платежа!");
        cancelAct();
    }
}

//END EMVCo_TJ (Gateway ALIF)

// *******************ESKHATA_ONLINE*******************************

//--------------------EO_SETTINGS_START----------------------------
var EO_SETTINGS = {
    PATH: "C:\\EskhataOnline\\settings.json",
    PAYMENT_TYPE_ID: 108
};

var EO_STATUSES = {
    SUCCESS: { code: 0, message: "Успешно!" },
    ERROR_UNKNOWN: { code: "UNKNOWN", message: "Неизвестная ошибка!" }, // TODO
    ERROR_FILE_NOT_FOUND: {
        code: "ERROR_FILE_NOT_FOUND",
        message: "Ошибка! Файл не найден. Обратитесь к администратору!"
    },
    ERROR_FILE_CANNOT_BE_READ: {
        code: "ERROR_FILE_CANNOT_BE_READ",
        message: "Ошибка! Не удаётся прочитить файл. Обратитесь к администратору!"
    },
    ERROR_FILE_CANNOT_BE_CLOSED: {
        code: "ERROR_FILE_CANNOT_BE_CLOSED",
        message: "Ошибка! Не удаётся закрыть файл. Обратитесь к администратору!"
    },
    ERROR_INIT_PRINTER: {
        code: "ERROR_INIT_PRINTER",
        message: "Ошибка при инициализации принтера. Обратитесь к администратору!"
    },
    ERROR_PAYMENT_ALREADY_EXIST: {
        code: "ERROR_EO_PAYMENT_ALREADY_EXIST",
        message: "Ошибка! Платёж через Эсхата Онлайн уже существует в данном документе."
    },
    ERROR_PAYMENT_CANNOT_BE_REMOVED: {
        code: "ERROR_PAYMENT_CANNOT_BE_REMOVED",
        message: "Ошибка! Платёж через Эсхата Онлайн уже проведён по этому не может быть удалён."
    },
    ERROR_PAYMENT_CANNOT_BE_RETURNED: {
        code: "ERROR_PAYMENT_CANNOT_BE_RETURNED",
        message: "Ошибка! Возврат платежа 'Эсхата Онлайн' не поддерживается! Произведите возврат наличными."
    }
};
//--------------------EO_SETTINGS_END----------------------------

//--------------------EO_LISTENERS_START----------------------------
function EO_AfterOpenDocument() {
    //Является ли тип платежа Эсхата Онлайн?
    if (
        frontol.currentDocument.payment.type.code == EO_SETTINGS.PAYMENT_TYPE_ID &&
        frontol.currentDocument.type.code === 1
    ) {
        //Инициализация счётчика платежа и переменной для хранения результата проверки
        frontol.currentDocument.userValues.set("EO_PAYMENTS", 0);
        frontol.currentDocument.userValues.set("EO_TRACK_ID", 0);
        frontol.currentDocument.userValues.set("EO_CHECK_PAYMENT_RESULT_PAYMENT_ID", 0);
        frontol.currentDocument.userValues.set("EO_CHECK_PAYMENT_RESULT_PAYMENT_NUMBER", 0);
        frontol.currentDocument.userValues.set("EO_CHECK_PAYMENT_RESULT_PAYMENT_DATETIME", 0);
        frontol.currentDocument.userValues.set("EO_CHECK_PAYMENT_RESULT_PAYMENT_AMOUNT", 0);
        frontol.currentDocument.userValues.set("EO_CHECK_PAYMENT_RESULT_PAYMENT_CURRENCY", 0);
        frontol.currentDocument.userValues.set("EO_CHECK_PAYMENT_RESULT_CLIENT_ACCOUNT", 0);

        if (typeof JSON !== "object" || typeof JSON.parse !== "function") {
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
            if (frontol.currentDocument.userValues.get("EO_PAYMENTS") == 0) {
                // Инициализация настроек
                var settings = EO_GetSettingsFromJsonFile(EO_SETTINGS.PATH);
                //Инициализация DLL - EskhataOnlineTransport
                var transactions = new ActiveXObject("EskhataOnlineTransport.Transactions");
                var dateOpen = frontol.currentDocument.dateOpen.split(".");
                var dateOpenFormatted = "20" + dateOpen[2] + "-" + dateOpen[1] + "-" + dateOpen[0];
                //Подготовка модели запроса
                var EO_REQUEST_MODEL = {
                    merchant_item_id: settings.data.merchant_item_id,
                    amount: payment.sumInBaseCurrency,
                    document_number: frontol.currentDocument.number,
                    document_date: dateOpenFormatted + " " + frontol.currentDocument.timeOpen
                };
                //Отправка данных в DLL - EskhataOnlineTransport
                var result_text = transactions.CheckPayment(JSON.stringify(EO_REQUEST_MODEL));
                var result = JSON.parse(result_text);
                //Получение и проверка ответа из DLL - EskhataOnlineTransport
                if (result.code == EO_STATUSES.SUCCESS.code) {
                    //Фиксация факта платежа в переменной
                    frontol.currentDocument.userValues.set("EO_PAYMENTS", 1);
                    frontol.currentDocument.userValues.set("EO_TRACK_ID", result.meta.track_id);
                    frontol.currentDocument.userValues.set(
                        "EO_CHECK_PAYMENT_RESULT_PAYMENT_ID",
                        result.data.data.data.transaction.id
                    );
                    frontol.currentDocument.userValues.set(
                        "EO_CHECK_PAYMENT_RESULT_PAYMENT_NUMBER",
                        result.data.data.data.transaction.session_number
                    );
                    frontol.currentDocument.userValues.set(
                        "EO_CHECK_PAYMENT_RESULT_PAYMENT_DATETIME",
                        result.data.data.data.transaction.created_at
                    );
                    frontol.currentDocument.userValues.set(
                        "EO_CHECK_PAYMENT_RESULT_PAYMENT_AMOUNT",
                        result.data.data.data.transaction.amount
                    );
                    frontol.currentDocument.userValues.set(
                        "EO_CHECK_PAYMENT_RESULT_PAYMENT_CURRENCY",
                        result.data.data.data.transaction.currency
                    );
                    frontol.currentDocument.userValues.set(
                        "EO_CHECK_PAYMENT_RESULT_CLIENT_ACCOUNT",
                        result.data.data.data.transaction.account_number
                    );

                    if (settings.data.printer.is_print_enabled) EO_PrintChecks();

                    frontol.currentDocument.addPayment(
                        EO_SETTINGS.PAYMENT_TYPE_ID,
                        result.data.data.data.transaction.amount,
                        null
                    );
                } else {
                    showError("Eskhata Online: " + result.message); //TODO неуспешный кейс месседж
                }
            } else {
                showError("Eskhata Online: " + EO_STATUSES.ERROR_PAYMENT_ALREADY_EXIST.message);
            }
        } else {
            showError("Eskhata Online: " + EO_STATUSES.ERROR_PAYMENT_CANNOT_BE_RETURNED.message);
        }
        cancelAct();
    }
}

function EO_BeforeRemovePayment() {
    //Является ли тип платежа Эсхата Онлайн?
    if (frontol.currentDocument.payment.type.code == EO_SETTINGS.PAYMENT_TYPE_ID) {
        //Проверка на существование платежа через Эсхата Онлайн
        if (frontol.currentDocument.userValues.get("EO_PAYMENTS") > 0) {
            // Отмена удаления платежа и вывод соответствующего сообщения
            showError("Eskhata Online: " + EO_STATUSES.ERROR_PAYMENT_CANNOT_BE_REMOVED.message);
        }
    }
}

function EO_BeforeCloseDocument() {
    //Проверка на несуществование платежа через Эсхата Онлайн
    if (frontol.currentDocument.userValues.get("EO_PAYMENTS") > 0) {
        //Если действие = 1(Продажа)
        if (frontol.currentDocument.type.code === 1) {
            //Инициализация DLL - EskhataOnlineTransport
            var transactions = new ActiveXObject("EskhataOnlineTransport.Transactions");
            //Подготовка модели запроса
            var EO_REQUEST_MODEL = {
                track_id: frontol.currentDocument.userValues.get("EO_TRACK_ID"),
                transaction_id: frontol.currentDocument.userValues.get("EO_CHECK_PAYMENT_RESULT_PAYMENT_ID"),
                document_number: frontol.currentDocument.number
            };
            //Отправка данных в DLL - EskhataOnlineTransport
            var result = JSON.parse(transactions.Confirm(JSON.stringify(EO_REQUEST_MODEL)));
            //Получение и проверка ответа из DLL - EskhataOnlineTransport
            if (result.code != EO_STATUSES.SUCCESS.code) {
                showError("Eskhata Online: " + result.message);
            }
        } else {
            showError("Eskhata Online: " + EO_STATUSES.ERROR_PAYMENT_CANNOT_BE_RETURNED.message);
        }
    }
}

function EO_BeforeCancelDocument() {
    //Проверка на несуществование платежа через Эсхата Онлайн
    if (frontol.currentDocument.userValues.get("EO_PAYMENTS") > 0) {
        //Если действие = 1(Продажа)
        if (frontol.currentDocument.type.code === 1) {
            //Инициализация DLL - EskhataOnlineTransport
            var transactions = new ActiveXObject("EskhataOnlineTransport.Transactions");
            //Подготовка модели запроса
            var EO_REQUEST_MODEL = {
                track_id: frontol.currentDocument.userValues.get("EO_TRACK_ID"),
                transaction_id: frontol.currentDocument.userValues.get("EO_CHECK_PAYMENT_RESULT_PAYMENT_ID"),
                document_number: frontol.currentDocument.number
            };
            //Отправка данных в DLL - EskhataOnlineTransport
            var result = JSON.parse(transactions.Cancel(JSON.stringify(EO_REQUEST_MODEL)));
            //Получение и проверка ответа из DLL - EskhataOnlineTransport
            if (result.code != EO_STATUSES.SUCCESS.code) {
                showError("Eskhata Online: " + result.message);
            }
        } else {
            showError("Eskhata Online: " + EO_STATUSES.ERROR_PAYMENT_CANNOT_BE_RETURNED.message);
        }
    }
}
//--------------------EO_LISTENERS_END----------------------------

//--------------------EO_HELPERS_START----------------------------
function EO_GetSettingsFromJsonFile(filePath) {
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var result = { status: EO_STATUSES.ERROR_UNKNOWN, data: null };

    if (!fs.FileExists(filePath)) {
        result.status = EO_STATUSES.ERROR_FILE_NOT_FOUND;
        showError("Eskhata Online:1 " + result.status.message);
    } else {
        try {
            var objStream = new ActiveXObject("ADODB.Stream");

            objStream.CharSet = "utf-8";
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
            showError("Eskhata Online:2 " + result.status.message);
        } finally {
            try {
                objStream.Close();
                objStream = null;
            } catch (e) {
                result.status = EO_STATUSES.ERROR_FILE_CANNOT_BE_CLOSED;
                result.data = e.message;
                showError("Eskhata Online:3 " + result.status.message);
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
        printer = new ActiveXObject("AddIn.FPrnM8");
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
        showError("Eskhata Online: " + result.status.message);
    }
    return printer;
}

function EO_PrintChecks(params) {
    var settings = EO_GetSettingsFromJsonFile(EO_SETTINGS.PATH);
    //showMessage(settings);
    var client_text = settings.data.printer.template.client_text;
    var client_text_result = "";

    for (var i = 0; i < client_text.length; i++) {
        client_text_result += EO_ReplaceData(client_text[i]) + "\r\n";
    }

    var cashier_text = settings.data.printer.template.cashier_text;
    var cashier_text_result = "";

    for (var i = 0; i < cashier_text.length; i++) {
        cashier_text_result += EO_ReplaceData(cashier_text[i]) + "\r\n";
    }

    //showMessage(client_text_result);

    EO_PrinterPrintText(client_text_result, false);
    EO_PrinterPrintText(cashier_text_result, true);
}

function EO_ReplaceData(data) {
    return data
        .replace("__DATETIME__", frontol.currentDocument.userValues.get("EO_CHECK_PAYMENT_RESULT_PAYMENT_DATETIME"))
        .replace("__CLIENT_ACCOUNT__", frontol.currentDocument.userValues.get("EO_CHECK_PAYMENT_RESULT_CLIENT_ACCOUNT"))
        .replace("__PAYMENT_NUMBER__", frontol.currentDocument.userValues.get("EO_CHECK_PAYMENT_RESULT_PAYMENT_NUMBER"))
        .replace("__AMOUNT__", frontol.currentDocument.userValues.get("EO_CHECK_PAYMENT_RESULT_PAYMENT_AMOUNT"))
        .replace("__CURRENCY__", frontol.currentDocument.userValues.get("EO_CHECK_PAYMENT_RESULT_PAYMENT_CURRENCY"));
}

function EO_PrinterPrintText(text, is_cut) {
    try {
        var printer = EO_GetPrinterObject();

        printer.PartialCut();
        EO_StartPrinting(printer, text, is_cut);
        printer.DeviceEnabled = 0;
        printer.DeleteDevice();
    } catch (e) {
        showError("Eskhata Online: " + e.message);
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
    var workOption = doc.userValues.get("returnWorkOption");
    var workOption = "1";
    //sendKeys("+z");//Shift + z

    if (doc == null) showError("Сначала нужно открыть документ возврата!");

    if (!isReturnDocument(doc)) showError("Текущий документ не является возвратом");

    if (doc.position.count > 0) showError("В чеке имеются позиции продолжение невозможно");

    if (workOption == "1") {
        var CASHNUMBER = frontol.actions.inputString("Номер кассы", "");
        var ZNUMBER = frontol.actions.inputString("Номер смены", "");
        var CHECKNUMBE = frontol.actions.inputString("Номер чека", "");

        if (CASHNUMBER == null || ZNUMBER == null || CHECKNUMBE == null) {
            showMessage("Введены не все данные, продолжение невозможно!");
            return;
        }

        if (CASHNUMBER == "" || ZNUMBER == "" || CHECKNUMBE == "") {
            showMessage("Введены не все данные, продолжение невозможно!");
            return;
        }
        CHECKNUMBER = CHECKNUMBE.replace(/^0+/, ""); // уберем нули
        var sqlCommandText = getSqlQueryText(CASHNUMBER, ZNUMBER, CHECKNUMBER);
    } else if (workOption == "2") {
        var BARCODE = frontol.actions.inputString("Отсканируйте ШК документа продажи", "");

        if (BARCODE == "" || BARCODE == null) {
            showMessage("Введены не все данные, продолжение невозможно!");
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

    if (workOption == "1") {
        doc.userValues.set("BaseDocumentCode", CHECKNUMBER);
    } else if (workOption == "2") {
        CHECKNUMBER = result.data[0].CHECKNUMBER.replace(/^0+/, ""); //уберем нули
        doc.userValues.set("BaseDocumentCode", CHECKNUMBER);
    }
}

function addPositionsFromSql(doc, data) {
    if (data[0] !== undefined) {
        var userValuesStr = data[0].USERVALUES;

        doc.userValues.set("BaseDocumentUserValues", base64_encode(userValuesStr));
    } else {
        showError("Некоретные данные чека продажи(Основания)");
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
            doc.addPosition("Mark", productCode, null, quantity.round(3), summ, false);
        } catch (e) {
            showMessage(
                "Не удалось добавить позицию в чек " +
                    "\nКод товара " +
                    productCode +
                    "\nКоличество " +
                    quantity +
                    "\nСумма " +
                    summ +
                    "\nОписание ошибки: " +
                    e.name +
                    ": " +
                    e.message
            );
        }
    }
    return;
}

function deserializingUserValue(str) {
    var stringsArray = str.split(";");
    var objectsArray = [];

    for (var i = 0; i < stringsArray.length; i++) {
        var fieldsArray = stringsArray[i].split("&");
        var obj = {};

        if (fieldsArray.length >= 3) {
            obj.positionId = Number(fieldsArray[0]);
            obj.marketProgramId = Number(fieldsArray[1]);
            obj.marketProgramIsForced = Number(fieldsArray[2]) === 1 ? true : false;

            objectsArray.push(obj);
        }
    }
    return objectsArray;
}

function deserializingDocumentUserValue(str) {
    var stringsArray = str.split(",");
    var objectsArray = [];

    for (var i = 0; i < stringsArray.length; i++) {
        var fieldsArray = stringsArray[i].split("=");

        if (fieldsArray.length > 1) {
            objectsArray[fieldsArray[0]] = fieldsArray[1];
        }
    }
    return objectsArray;
}

function sqlRequest(sqlCommandText) {
    var result = {
        success: false,
        message: "Данные по чеку не найдены!",
        data: ""
    };

    //для отладки переделать в глобальные параметры
    var sqlServerName = "POSCRYSTAL";
    var sqlServer = "sa";
    var sqlUserPwd = "iBMxolMuKgzl9b";
    var sqlDBName = "Cash_Server";
    //для отладки

    var ConnectionString =
        "driver={SQL Server};" +
        "server=" +
        sqlServerName +
        ";" +
        "uid=" +
        sqlServer +
        ";" +
        "pwd=" +
        sqlUserPwd +
        ";" +
        "database=" +
        sqlDBName +
        ";";
    try {
        var connection = new ActiveXObject("ADODB.Connection");

        connection.ConnectionString = ConnectionString;
        connection.ConnectionTimeout = 30;
        connection.CommandTimeout = 600;
        connection.CursorLocation = 3;
        connection.Open();
        //showMessage("Успешное подключение!");
    } catch (e) {
        result.message =
            "Не удалось выполнить подключение к базе " + sqlDBName + "\nОписание ошибки: " + e.name + ": " + e.message;
        return result;
    }

    try {
        var recordset = new ActiveXObject("ADODB.RecordSet");
        var sqlCommand = new ActiveXObject("ADODB.Command");

        sqlCommand.ActiveConnection = connection;
        sqlCommand.CommandText = sqlCommandText;
        sqlCommand.CommandType = 1;
        recordset = sqlCommand.Execute();

        var arrayData = [];

        if (!recordset.BOF) {
            recordset.MoveFirst();

            do {
                arrayData.push({
                    CHECKNUMBER: recordset.Fields("CHECKNUMBE").Value,
                    USERVALUES: recordset.Fields("USERVALUES").Value,
                    PRODUCTCODE: recordset.Fields("PRODUCTCODE").Value,
                    KOL: recordset.Fields("KOL").Value,
                    SUMMA: +recordset.Fields("SUMMA").Value
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
        result.message = "Не удалось выполнить запрос " + "\nОписание ошибки: " + e.name + ": " + e.message;
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
        "SELECT " +
        "KKMCHECKCONTENS.[CHECKNUMBE] AS CHECKNUMBE, " +
        "KKMCHECKCONTENS.[USERVALUES] AS USERVALUES, " +
        "KKMCHECKCONTENS.[CARDARTICU] AS PRODUCTCODE, " +
        "SUM(CASE WHEN KKMCHECKCONTENS.[QUANTITY]>=0 THEN  KKMCHECKCONTENS.[QUANTITY] ELSE 0 END) AS KOL, " +
        "SUM(CASE WHEN KKMCHECKCONTENS.[TOTALRUB]>=0 THEN  KKMCHECKCONTENS.[TOTALRUB] ELSE 0 END) AS SUMMA " +
        "FROM " +
        "KKMCHECKCONTENS AS KKMCHECKCONTENS " +
        "WHERE " +
        " CASHNUMBER IN ('" +
        CASHNUMBER +
        "') " +
        " AND ZNUMBER  IN ('" +
        ZNUMBER +
        "') " +
        " AND CHECKNUMBE  IN ('" +
        CHECKNUMBER +
        "') " +
        "GROUP BY \n" +
        "KKMCHECKCONTENS.[CHECKNUMBE], " +
        "KKMCHECKCONTENS.[CARDARTICU], " +
        "KKMCHECKCONTENS.[USERVALUES] ";
    return text;
}

function getSqlQueryTextBarCode(BarCode) {
    //для отладки
    //BarCode    = 1922
    //для отладки

    var text =
        //"SET DATEFORMAT mdy \n" +
        "SELECT " +
        "KKMCHECKCONTENS.[CHECKNUMBE] AS CHECKNUMBE, " +
        "KKMCHECKCONTENS.[USERVALUES] AS USERVALUES, " +
        "KKMCHECKCONTENS.[CARDARTICU] AS PRODUCTCODE, " +
        "SUM(CASE WHEN KKMCHECKCONTENS.[QUANTITY]>=0 THEN  KKMCHECKCONTENS.[QUANTITY] ELSE 0 END) AS KOL, " +
        "SUM(CASE WHEN KKMCHECKCONTENS.[TOTALRUB]>=0 THEN  KKMCHECKCONTENS.[TOTALRUB] ELSE 0 END) AS SUMMA " +
        "FROM " +
        "KKMCHECKCONTENS AS KKMCHECKCONTENS " +
        "WHERE " +
        " FRONTOLDOCID in ('" +
        BarCode +
        "') " +
        //" USERVALUES like \'%DocumentBarcode=" + BarCode + "%\' " +
        "GROUP BY \n" +
        "KKMCHECKCONTENS.[CHECKNUMBE], " +
        "KKMCHECKCONTENS.[CARDARTICU], " +
        "KKMCHECKCONTENS.[USERVALUES] ";
    return text;
}
//Возвратная касса
//==========================================================================================================================================================================================

function createActionData(filePath) {
    //customActionForAshan
    var actionData = null;
    var read;
    var fso = new ActiveXObject("Scripting.FileSystemObject");

    if (!fso.FileExists(filePath)) {
        showMessage("Файл " + filePath + " не существует!", Icon.Error);
        return actionData;
    }

    try {
        read = fso.OpenTextFile(filePath, 1);

        while (!read.AtEndOfStream) {
            // lines.push(read.ReadLine());
            var str = read.ReadLine();
            var params = str.split(";");
            actionData = {};
            actionData[params[0]] = {
                sum: params[1],
                cashierMesage: params[2],
                slipMessage: params[3]
            };
        }
    } catch (e) {
        showMessage("Не удалось открыть файл " + filePath + "!" + "\n" + e.name + ": " + e.message, Icon.Error);
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
                return this.replace(rtrim, "");
            };
        })();
    }
    var headerString = "Вводимый параметр: " + header;
    var newValue = frontol.actions.inputString(headerString, frontol.userValues.get(param));
    if (newValue == null) return false;
    frontol.userValues.set(param, newValue.trim());
    return true;
}

// Очистка значение параметров печати ФР
function ClearValuePrintOptions() {
    frontol.userValues.set("PrintWithoutSending", "0");
    frontol.userValues.remove("PrintWithSendingToPhone");
    frontol.userValues.remove("PrintWithSendingToMail");
}

//MANUAL КНОПКИ ПАРАМЕТРОВ ПЕЧАТИ
function ManualPrintOptionsButton() {
    //Зададим переменные
    var choosePrintWithoutSending = "Печать чека без отправки клиенту";

    if (frontol.userValues.get("PrintWithoutSending") == "0") {
        choosePrintWithoutSending += " (!)";
    }

    var printWithSendingToPhoneString = "Печать чека c отправкой на номер телефон";

    if (frontol.userValues.get("PrintWithSendingToPhone") == "") {
        printWithSendingToPhoneString += " (!)";
    }

    var printWithSendingToMailString = "Печать чека c отправкой на e-mail";

    if (frontol.userValues.get("PrintWithSendingToMail") == "") {
        printWithSendingToMailString += " (!)";
    }

    // Окно меню
    var st = frontol.actions.selectString(
        "Варианты печати чека",
        choosePrintWithoutSending + "\n" + printWithSendingToPhoneString + "\n" + printWithSendingToMailString,

        "choosePrintWithoutSending\n" + "printWithSendingToPhone\n" + "printWithSendingToMail\n"
    );

    if (st == null || st == "") return;

    switch (st) {
        case "choosePrintWithoutSending": {
            if (frontol.userValues.get("PrintWithoutSending") == "0") {
                frontol.userValues.set("PrintWithoutSending", "1");
            }
            // else {
            //  frontol.userValues.set("PrintWithoutSending", "1");
            //  }
            break;
        }
        case "printWithSendingToPhone": {
            EnterParameter("PrintWithSendingToPhone", "номер телефон клиента");
            break;
        }
        case "printWithSendingToMail": {
            EnterParameter("PrintWithSendingToMail", "e-mail клиента");
            break;
        }
    }
}

function $ManualButton() {

    // if (AdminUser !== frontol.currentUser.code && HeadCashier !== frontol.currentUser.code) {
    if (!isMenuAccessAvailable()) {
        show("У вас нет доступа к административному интерфейсу.");
        return;
    }
    var printLastDoc = "Печать последнего фискального документа";
    var printLastDocByFDNum = "Печать последнего фискального документа по номеру ФД";
    if (isSysAdmin()) {
        //Зададим переменные
        var fiscalipadresString = "1. Установить ip адресс ФР от Т.Группа";

        if (frontol.userValues.get("fiscalipadres") == "") {
            fiscalipadresString += " (Не указан)";
        }

        var isfiscalTGString = "2. Подключить ФР-TP809 от Т.Групп";
        if (frontol.userValues.get("isfiscalTG") == "1") {
            isfiscalTGString = "2. Отключить ФР-TP809 от Т.Групп";
        }

        var isWriteLogString = "3. Включить логирование запросов";
        if (frontol.userValues.get("isWriteLog") == "1") {
            isWriteLogString = "3. Отключить логирование запросов";
        }

        var SessionValString = "Значение смены";

        if (frontol.userValues.get("IsSessionOn") == 1) SessionValString += " ( Открыта )";
        else SessionValString += " ( Закрыта )";

        var TGXString = " X-Отчет ФР от Т.Группа";
        var TGZString = " Z-Отчет ФР от Т.Группа";

        var comPort = "1.COM порт взаимодействия с ФР " + (frontol.userValues.get(FISCAT_PORT) ? frontol.userValues.get(FISCAT_PORT) : "(не указан)");
        var comPortEnabled = "2." + (frontol.userValues.get(COM_PORT_ENABLED) == 1 ? "Отключить" : "Включить") + " ФР-TP809 по COM порту";


        // Окно меню
        var st = frontol.actions.selectString(
            "Константы",
            "---------- Параметры ФР Технология Групп ----------\n" +
                fiscalipadresString +
                "\n" +
                isfiscalTGString +
                "\n" +
                isWriteLogString +
                "\n" +
                "\n" +
                "-----Параметры по COM порт-----\n"+
                comPort +
                "\n" +
                comPortEnabled +
                "\n" +
                "\n" +
                "---------- Отчеты ФР TP809 ---------------\n" +
                TGXString +
                "\n" +
                TGZString +
                "\n" +
                printLastDoc +
                "\n" +
                printLastDocByFDNum +
                "\n" +
                "\n" +
                SessionValString +
                "\n",

                "\n" +
                "fiscalipadres\n" +
                "isfiscalTG\n" +
                "isWriteLog\n" +
                "\n" +
                "\n" +
                "comPort\n" +
                "comPortEnabled\n"+
                "\n" +
                "\n" +
                "TGX\n" +
                "TGZ\n" +
                "printLastDoc\n"+
                "printLastDocByFDNum\n"+
                "\n" +
                "IsSessionOn\n" +
                "\n"
        );

        if (st == null || st == "") return;

        switch (st) {
            case "fiscalipadres": {
                EnterParameter("fiscalipadres", " ip:port ФР-TP809 от Т.Групп");
                break;
            }

            case "isfiscalTG": {
                if (frontol.userValues.get("isfiscalTG") == "1") {
                    frontol.userValues.set("isfiscalTG", "0");
                } else {
                    frontol.userValues.set("isfiscalTG", "1");
                }
                break;
            }

            case "printLastDoc": {
                runPrintLastDoc();
                break;
            }

            case "printLastDocByFDNum": {
                runPrintLastDocByFDNum();
                break;
            }

            case "comPortEnabled": {
                break;
            }
            case "comPort": {
                break;
            }

            case "isWriteLog": {
                if (frontol.userValues.get("isWriteLog") == "1") {
                    frontol.userValues.set("isWriteLog", "0");
                } else {
                    frontol.userValues.set("isWriteLog", "1");
                }
                break;
            }

            case "IsSessionOn": {
                if (frontol.userValues.get("IsSessionOn") == "1") {
                    frontol.userValues.set("IsSessionOn", "0");
                } else {
                    frontol.userValues.set("IsSessionOn", "1");
                }
                break;
            }

            case "TGX": {
                var FRadress = frontol.userValues.get("fiscalipadres");
                var options = {
                    formCode: "GET_X_REPORT",
                    ffdVersion: "VER_1",
                    shouldPrintSlip: true
                };
                var stringToSend = JSONStringify(options);
                var FRadress = frontol.userValues.get("fiscalipadres");
                var result = sendtofiscal(FRadress, "getXReport", stringToSend);
                //frontol.userValues.set("IsSessionOn", "0");

                break;
            }

            case "TGZ": {
                var FRadress = frontol.userValues.get("fiscalipadres");
                var options = {
                    formCode: "CLOSE_SHIFT",
                    ffdVersion: "VER_1",
                    shouldPrintSlip: true,
                    cashier: frontol.currentUser.name,
                    kktVersion: "1"
                };
                var stringToSend = JSONStringify(options);
                var FRadress = frontol.userValues.get("fiscalipadres");
                var result = sendtofiscal(FRadress, "closeShift", stringToSend);
                frontol.userValues.set("IsSessionOn", "0");
                break;
            }
        }
    }
    //Для СтарКассир

    // if (HeadCashier == frontol.currentUser.code) {
    if (isAdminOrMainCashier()) {
        //Зададим переменные
        var fiscalipadresString = "1. Установить ip адресс ФР от Т.Группа";

        if (frontol.userValues.get("fiscalipadres") == "") {
            fiscalipadresString += " (Не указан)";
        }

        var isfiscalTGString = "2. Подключить ФР-TP809 от Т.Групп";
        if (frontol.userValues.get("isfiscalTG") == "1") {
            isfiscalTGString = "2. Отключить ФР-TP809 от Т.Групп";
        }

        var SharqfiscalipadresString = "1. Установить ip адресс ФР от МТТ Шарк";

        if (frontol.userValues.get("Sharqfiscalipadres") == "") {
            SharqfiscalipadresString += " (Не указан)";
        }

        var SharqTerminalIdString = "2. Установить TerminalID ФР от МТТ Шарк";

        if (frontol.userValues.get("SharqTerminalId") == "") {
            SharqTerminalIdString += " (Не указан)";
        }

        var isfiscalSharqString = "3. Подключить ФР от МТТ Шарк";
        if (frontol.userValues.get("isfiscalSharq") == "1") {
            isfiscalSharqString = "3. Отключить ФР от МТТ Шарк";
        }

        var SessionValString = "Значение смены";

        if (frontol.userValues.get("IsSessionOn") == 1) SessionValString += " ( Открыта )";
        else SessionValString += " ( Закрыта )";

        var SharqCloseCashierString = " X-Отчет ФР от МТТ Шарк";
        var SharqCloseShiftString = " Z-Отчет ФР от МТТ Шарк";
        var TGXString = " X-Отчет ФР от Т.Группа";
        var TGZString = " Z-Отчет ФР от Т.Группа";
        var printLastDoc = "Печать последнего фискального документа";
        var printLastDocByFDNum = "Печать последнего фискального документа по номеру ФД";

        // Окно меню
        var st = frontol.actions.selectString(
            "Константы",
            "---------- Отчеты ФР TP809 ---------------\n" +
                TGXString +
                "\n" +
                TGZString +
                "\n" +
                "\n" +
                printLastDoc +
                "\n" +
                printLastDocByFDNum +
                "\n" +
                SessionValString +
                "\n",

            "\n" + "TGX\n" + "TGZ\n"+ "\n" + "printLastDoc\n" +
                "printLastDocByFDNum\n" + "IsSessionOn\n" + "\n"
        );

        if (st == null || st == "") return;

        switch (st) {
             case "printLastDoc": {
                runPrintLastDoc();
                break;
            }

            case "printLastDocByFDNum": {
                runPrintLastDocByFDNum();
                break;
            }
            case "fiscalipadres": {
                EnterParameter("fiscalipadres", " ip:port ФР-TP809 от Т.Групп");
                break;
            }

            case "isfiscalTG": {
                if (frontol.userValues.get("isfiscalTG") == "1") {
                    frontol.userValues.set("isfiscalTG", "0");
                } else {
                    frontol.userValues.set("isfiscalTG", "1");
                }
                break;
            }

            case "Sharqfiscalipadres": {
                EnterParameter("Sharqfiscalipadres", " ip:port ФР от МТТ Шарк");
                break;
            }
            case "SharqTerminalId": {
                EnterParameter("SharqTerminalId", " Terminalid ФР от МТТ Шарк");
                break;
            }

            case "isfiscalSharq": {
                if (frontol.userValues.get("isfiscalSharq") == "1") {
                    frontol.userValues.set("isfiscalSharq", "0");
                } else {
                    frontol.userValues.set("isfiscalSharq", "1");
                }
                break;
            }

            case "IsSessionOn": {
                if (frontol.userValues.get("IsSessionOn") == "1") {
                    frontol.userValues.set("IsSessionOn", "0");
                } else {
                    frontol.userValues.set("IsSessionOn", "1");
                }
                break;
            }
            case "SharqCloseCashier": {
                getJson2();
                var FRadress = frontol.userValues.get("Sharqfiscalipadres");
                var TerminalIdsunmi = frontol.userValues.get("SharqTerminalId");

                var options = {
                    operationid: "X-отчет"
                };
                var stringToSend = JSON.stringify(options);
                var result = SendToFiscalSharq(FRadress, TerminalIdsunmi, "xreport", stringToSend);
                show(result.message);

                break;
            }

            case "SharqCloseShift": {
                getJson2();
                var FRadress = frontol.userValues.get("Sharqfiscalipadres");
                var TerminalIdsunmi = frontol.userValues.get("SharqTerminalId");
                var options = {
                    operationid: "Z-отчет"
                };
                var stringToSend = JSON.stringify(options);
                var result = SendToFiscalSharq(FRadress, TerminalIdsunmi, "zreport", stringToSend);
                show(result.message);

                break;
            }
            case "TGX": {
                var FRadress = frontol.userValues.get("fiscalipadres");
                var options = {
                    formCode: "GET_X_REPORT",
                    ffdVersion: "VER_1",
                    shouldPrintSlip: true
                };
                var stringToSend = JSONStringify(options);
                var FRadress = frontol.userValues.get("fiscalipadres");
                var result = sendtofiscal(FRadress, "getXReport", stringToSend);
                //frontol.userValues.set("IsSessionOn", "0");

                break;
            }

            case "TGZ": {
                var FRadress = frontol.userValues.get("fiscalipadres");
                var options = {
                    formCode: "CLOSE_SHIFT",
                    ffdVersion: "VER_1",
                    shouldPrintSlip: true,
                    cashier: frontol.currentUser.name,
                    kktVersion: "1"
                };
                var stringToSend = JSONStringify(options);
                var FRadress = frontol.userValues.get("fiscalipadres");
                var result = sendtofiscal(FRadress, "closeShift", stringToSend);
                frontol.userValues.set("IsSessionOn", "0");
                break;
            }
        }
    }
}

function sendtofiscal(ipdevice, comand, stringToSend) {
    //подключаем методы для работы с JSON
    getJson2();
    var request;


   request = new ActiveXObject("Microsoft.XMLHTTP");
        //Начинаем запрос
    request.open("POST", "http://" + ipdevice + "/api/" + comand);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(stringToSend);
    var timeoutQuery = 40; // Таймаут
    for (var i = 1; i <= timeoutQuery; i++) {
        if (request.readyState != 4) {
            frontol.actions.wait(REQUEST_PROCESS_OFD, 0);
        } else {
            break;
        }
    }

        //show(stringToSend)

        // Проверка ready state
    if (request.readyState != 4) {
        frontol.actions.showMessage("Нет ответа или связи с ККМ", Icon.Error);
        cancelAct();
        return;
    }

    //При успешного ответа
    if (request.status == 200) {
        if (comand == "openShift") {
            frontol.userValues.set("IsSessionOn", "1");
        }
        if (comand == "closeShift") {
            frontol.userValues.set("IsSessionOn", "0");
        }
        //show(request.responseText) //Надоубрать
        var ObjectJSON = JSON.parse(request.responseText);

        return ObjectJSON;
    }
    //============= Если есть ошибки ==================================================
    if (request.status != "200") {
        //frontol.actions.showMessage("Информация от фискального регистратора"+CR+CR+request.responseText, Icon.Error)
        var ObjectJSON = JSONParse(request.responseText);
        if (ObjectJSON.rc == "SHIFT_MUST_BE_CLOSED") {
            frontol.userValues.set("IsSessionOn", "1");
        }
        frontol.actions.showMessage("Ошибка ОФД: " + request.status + ",Нет связи с ККМ", Icon.Error);
        cancelAct();
        return;
    }
}
// Json Объект
function JSONParse(jsonString) {
    // Убедимся, что строка не пустая
    if (!jsonString || jsonString === "") {
        frontol.actions.showMessage("Пустая строка JSON");
    }
    // Убедимся, что строка начинается и заканчивается с '{' и '}' соответственно
    if (jsonString.charAt(0) !== "{" || jsonString.charAt(jsonString.length - 1) !== "}") {
        frontol.actions.showMessage("Некорректный формат JSON");
    }
    // Удаляем начальный и конечный символ '{' и '}'
    jsonString = jsonString.slice(1, -1);
    // Разбиваем строку на массив по запятым
    var parts = jsonString.split(",");
    // Создаем объект для хранения пар ключ-значение
    var obj = {};
    // Проходим по каждой паре ключ-значение и добавляем их в объект
    for (var i = 0; i < parts.length; i++) {
        //Получаем  ключ-значение
        var keyValue = parts[i].split(":");



	//sboboev+ проверка на null
	// Новая, более точная проверка: есть ли значение после двоеточия
    if (!keyValue[1]) {
        frontol.actions.showMessage("Отсутствует значение для ключа: " + keyValue[0], Icon.Error);
        continue;
    }
	//sboboev-



		//show("keyValue "+keyValue)
        //получаем ключ
        var key = keyValue[0].replace(/"/g, "").replace(/ /g, "");
        //show("key "+key)
        //получаем значение
        var value = keyValue[1].replace(/"/g, "").replace(/ /g, "");
        //show("value "+value)
        //запихаем в объект
        obj[key] = value;
    }
    return obj;
}
// Json в строка
function JSONStringify(obj) {
    var obj2 = {
        formCode: "OPEN_SHIFT",
        ffdVersion: "VER_1",
        shouldPrintSlip: true,
        cashier: frontol.currentUser.name,
        kktVersion: "1"
    };
    var jsonString = "{";
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var value = obj[key];
            if (typeof value === "string") {
                value = '"' + value + '"';
            } else if (typeof value === "object" && value !== null) {
                value = JSONStringify(value);
            }
            jsonString += '"' + key + '": ' + value + ", ";
        }
    }
    if (jsonString.length > 1) {
        jsonString = jsonString.slice(0, -1);
    }
    jsonString = jsonString.slice(0, -1);
    jsonString += "}";
    return jsonString;
}
// Тело запроса на Проверка Статуса ФР
function deviceStatusToSend() {
    var options = JSONStringify({
        formCode: "DEVICE_STATUS",
        shouldPrintSlip: true
    });
    return options;
}

// Формируем документ типом строки для запроса
function GiveDocumentToString(doc, PrintOption) {
    getJson2();
    var products = "";
    for (doc.position.index = 1; doc.position.index <= doc.position.count; doc.position.index++) {
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
            var code = "" + doc.position.ware.code + ""; // код товара
            var name = doc.position.ware.text; // Название товара
            var price = Number(doc.position.price * 100).round(0); // цена товара
            var quantity = parseFloat(doc.position.quantity.toFixed(3)); // Number(doc.position.quantity);
            var sum = Number(doc.position.sum * 100).round(0); // Сумма товара

            //Получаем массив товаров в строчном виде
            var product = JSONStringify(createProductForFiscal(code, name, price, quantity, sum, vatValue));

            //присвоим запятую
            products = products + product + ",";
        }
    }

    //Корректируем приобразованного массива товаров в строку
    products = products.slice(0, -1);
    products = "[" + products + "]";
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

    var vatString = "";

    //Налог документа+
    for (doc.tax.index = 1; doc.tax.index <= doc.tax.count; doc.tax.index++) {
        var TS = doc.tax.sum;
        var TTRV = doc.tax.taxRateValue;
        TS = Number(TS * 100).round(0);
        // Получаем строчный массив vats
        var vats = JSONStringify(createVatsForFiscal(TTRV, TS));
        vatString = vatString + vats + ",";
    }

    vatString = vatString.slice(0, -1);

    vats = "[" + vatString + "]";
    //Налог документа-

if (doc.type.operation == 0) {
    // Если документ = Продажа
    var customMess = createCustomDataForBill(doc);
    var infoCardClient = removeNewlines(customMess);
    var extraInfo = chekInfoArea(doc);
    infoCardClient = infoCardClient + extraInfo;

    // Шапка документа для отправки
    var options = JSONStringify({
        formCode: "RECEIPT",
        ffdVersion: "VER_1",
        shouldPrintSlip: true,
        operationType: "INCOME",
        taxType: "GENERAL",
        consumerContacts: PrintOption,
        customMessage: infoCardClient
    });
}
//sboboev+
if (doc.type.operation == 1) {
    // Если документ = Возврат
    var customMess = createCustomDataForBill(doc);
    var infoCardClient = removeNewlines(customMess);
    var extraInfo = chekInfoArea(doc);
    infoCardClient = infoCardClient + extraInfo;

    // Шапка документа для отправки, перед оформлением возврата на кассе необходимо сначала внести сумму, которую планируется вернуть.
    var options = JSONStringify({
        formCode: "RECEIPT",
        ffdVersion: "VER_1",
        shouldPrintSlip: true,
        operationType: "REVERT_INCOME",
        taxType: "GENERAL",
        consumerContacts: PrintOption,
        customMessage: infoCardClient
    });
}
//sboboev-
    // добавим массив товаров в шапку
    options = options.slice(0, -1) + ",";
    options = options + products + ",";

    // Оплата документа продажи
    var cashamount = 0;
    var nocashamount = 0;
    var oddmoney = 0;
    var AmountChangeCash = 0;

    for (doc.payment.index = 1; doc.payment.index <= doc.payment.count; doc.payment.index++) {
        if (doc.payment.sumInBaseCurrency > 0) {
            // show(doc.payment.type.code)
            if (doc.payment.type.code == 1) {
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
    //show(AmountChangeCash);
    cashamount = cashamount - AmountChangeCash;

    if (nocashamount > 0) {
        var options2 = JSONStringify({
            receiptSum: Number(doc.totalSum * 100).round(0),
            receiptCash: Number(cashamount * 100).round(0),
            receiptNonCash: Number(nocashamount * 100).round(0),
            cashChangeAmount: Number(AmountChangeCash * 100).round(0), //Сдача
            bankRRN: "000000000000",
            bankCard: null
        });
    } else {
        var options2 = JSONStringify({
            receiptSum: Number(doc.totalSum * 100).round(0),
            receiptCash: Number(cashamount * 100).round(0),
            receiptNonCash: Number(nocashamount * 100).round(0),
            cashChangeAmount: Number(AmountChangeCash * 100).round(0), //Сдача
            bankRRN: null,
            bankCard: null
        });
    }

    // Добавим Налоги документа к подвалу
    options2 = options2.slice(1);
    options2 = options2.slice(0, -1) + ",";
    options = options + options2 + '"taxes":{"vats":' + vats + "}}";
    var stringToSend = options;

    if (justWriteLog()) {
        var stringToSendObject = JSON.parse(stringToSend);
        writeToFile("\nТело запроса:\n" + JSON.stringify(stringToSendObject, null, 2));
    }
    return stringToSend;
}

function justWriteLog() {
    if (frontol.userValues.get("isWriteLog") == "1") {
        return true;
    } else {
        return false;
    }
}

function writeToFile(content) {
    var filePath = "D:\\Log_Fis.txt";
    try {
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var file = fso.OpenTextFile(filePath, 8, true); // true для перезаписи файла, если он существует
        file.WriteLine(content);
        file.Close();
        //frontol.actions.showMessage("Запись завершена успешно.");
    } catch (e) {
        frontol.actions.showMessage("Ошибка записи в файл: " + e.message);
    }
}

function cancelAct() {
    frontol.actions.cancel();
}

// Ошибки Фискат
function getErrorOFD(errorCode) {
    switch (errorCode) {
        case "CORE_IS_BLOCKED":
            return "Фискальный модуль заблокирован";
        case "CORE_IS_NOT_ACTIVATED":
            return "Фискальный модуль не активирован";
        case "DATETIME_ERROR":
            return "Ошибка при работе с датой и временем: проверьте настройки";
        case "FISCAL_MODULE_EXPIRED":
            return "Срок действия фискального модуля вышел";
        case "FISCAL_MODULE_ERROR":
            return "Ошибка в работе фискального модуля";
        case "INVALID_DOC":
            return "Некорректный документ";
        case "INVALID_CONSUMER_CONTACT":
            return "Ошибка в поле с контактами.";
        case "KEYS_ERROR":
            return "Ошибка ключей";
        case "SHIFT_MUST_BE_CLOSED":
            return "Смена должна быть закрыта";
        case "SHIFT_MUST_BE_OPENED":
            return "Смена должна быть открыта";
        case "UNKNOWN_ERROR":
            return "Неизвестная ошибка";
        case "FD_NOT_FOUND":
            return "Фискальный документ не найден";
        case "INVALID_BANK_RRN":
            return "Отсутствует или некорректный РРН";
        case "INVALID_COSTOM_MESSAGE":
            return "Ошибка в произвольном сообщении для печати";
        case "SHIFT_TOO_LONG":
            return "Смена превысила 24 часа. Необходимо закрыт смену и заново открыть!";
        default:
            return "Неизвестный код ошибки";
    }
}

// Массив товаров
//sboboev+
function createProductForFiscal(prcode, prname, prprice, prquantity, prsum, vat, vatCode) {
    var prname = escapeSpecialChars(prname);
    var vatValue;

    // Карта соответствия ставок и кодов
    var vatMap = {
        "0": 1,
        "2.5": 3,
        "5": 6,
        "7": 8,
        "14": 15,
        "15": 16,
        "18": 19
    };

    // Проверка: ставка не указана
    if (vat === null || vat === undefined || vat === "" || vat === "-" || isNaN(vat)) {
        frontol.actions.showMessage("Ошибка: У товара '" + prname + "' ставка НДС не указана.", Icon.Error);
        cancelAct();
        return null;
    }

     // Проверка: есть ли такая ставка в карте
    if (!(vat in vatMap)) {
        frontol.actions.showMessage("Ошибка: Неверная ставка НДС у товара '" + prname + "'. Указано: " + vat + "%", Icon.Error);
        cancelAct();
        return null;
    }


    // Преобразование в формат Фронтола
    if (vat == 7) {
        vatValue = "REDUCED1";
    } else if (vat == 5) {
        vatValue = "REDUCED2";
    } else if (vat == 2.5) {
        vatValue = "REDUCED3";
    } else if (vat == 14) {
        vatValue = "STANDARD";
    } else if (vat == 0) {
        vatValue = "ZERO_TAX";
    } else {
        vatValue = "STANDARD"; // на всякий случай
    }

    return {
        code: null,
        name: prname,
        price: prprice,
        quantity: prquantity,
        commodity: "GOODS",
        vatCode: vatValue,
        sum: prsum,
        marker: ""
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
        var vatValue = "REDUCED1";
    } else if (vatsValue == 5) {
        var vatValue = "REDUCED2";
    } else if (vatsValue == 2.5) {
        var vatValue = "REDUCED3";
    } else if (vatsValue == 14) {
        var vatValue = "STANDARD";
    } else if (vatsValue == 0) {
        var vatValue = "ZERO_TAX";
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
    if (yy < 10) yy = "0" + yy;
    // Формат месяца MM
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    // Формат дня dd
    var dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    // Формат часа hh
    var hh = date.getHours();
    if (hh < 10) hh = "0" + hh;
    // Формат минуты mm
    var min = date.getMinutes();
    if (min < 10) min = "0" + min;
    // Формат секунды ss
    var sek = date.toLocaleTimeString();
    sek = sek.slice(sek.length - 5);
    sek = sek.substring(0, 2);
    var result = String(yy) + mm + dd + hh + min + sek;
    return result;
}

function IsFRfromTG() {
    if (frontol.userValues.get("isfiscalTG") === "1") {
        return true;
    } else {
        return false;
    }
}

function IsSessionOpen() {
    if (frontol.userValues.get("IsSessionOn") === "1") {
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
        formCode: "OPEN_DRAWER",
        onTimeout: 500,
        offTimeout: 100,
        onQuantity: 1
    });

    var stringToSend = options;
    var FRadress = frontol.userValues.get("fiscalipadres");
    var result = sendtofiscal(FRadress, "openDrawer", stringToSend);
    // show(result)
    if (result.rc == "SUCCESS") {
        return result.rc;
    } else if (result.rc !== "SUCCESS") {
        var error = getErrorOFD(result.rc);
        frontol.actions.showMessage("Не исправность с ДЯ: " + CR_MESSAGE + CR_MESSAGE + error, Icon.Error);
        //break;
        return;
    }
}

function escapeSpecialChars(str) {
    // Создаем объект, который содержит специальные символы и их экранированные версии
    var specialChars = {
        "\\": "\\\\",
        '"': '\\"',
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\b": "\\b",
        "\f": "\\f"
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
                    r = "0" + r;
                }
                return r;
            }
            Date.prototype.toISOString = function () {
                return (
                    this.getFullYear() +
                    "-" +
                    pad(this.getMonth() + 1) +
                    "-" +
                    pad(this.getDate()) +
                    "T" +
                    pad(this.getHours()) +
                    ":" +
                    pad(this.getMinutes()) +
                    ":" +
                    pad(this.getSeconds()) +
                    "." +
                    String((this.getMilliseconds() / 1000).toFixed(3)).slice(2, 5) +
                    "Z"
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
        !b ? (b = "") : typeof b != "string" ? (b = JSON.stringify(b)) : (b = b);
        inserts.push(b);
        !c ? (c = "") : typeof c != "string" ? (c = JSON.stringify(c)) : (c = c);
        inserts.push(c);
        !d ? (d = "") : typeof d != "string" ? (d = JSON.stringify(d)) : (d = d);
        inserts.push(d);
        var borderString =
            "\n------------------------------------------------------------------------------------------------------\n";
        var sringForInserts = a.split("{}");
        var date = new Date().toISOString();
        var stringForLog = date + " ";
        if (sringForInserts.length == 1) {
            stringForLog = stringForLog + a + " " + b + " " + c + " " + d;
        } else {
            //stringForLog = sringForInserts[0];
            for (var i = 0; i < sringForInserts.length; i++) {
                stringForLog += sringForInserts[i] + " {" + inserts[i] + " }";
            }
        }
        stringForLog += borderString;

        var fso = new ActiveXObject("Scripting.FileSystemObject");

        var fileName = "RxLoy_" + date.slice(0, date.indexOf("T")) + ".txt";
        //showMessage(LOG_DIR + "/" + fileName);
        createDirectory(LOG_DIR);
        var file = fso.OpenTextFile(LOG_DIR + "/" + fileName, 8, true);
        file.Write(stringForLog);
        file.Close();
    } catch (e) {
        showMessage(e.message);
    }
}



function createCustomDataForBill(doc) {
    var message = "";
    message = message + frontol.currentDocument.userValues.get("CustomActionMess");
    if (message) message = message + "\n";

    message = message + printCardBalances(doc);
    message = message + doc.userValues.get(PROMO_TEXT_KEY);
    return message;
}

function printCardBalances(doc) {
    var res = "";
    var cardNumbers = doc.userValues.get("cardBoxNumbers");
    var cardBalances = doc.userValues.get("cardBoxBalances");

    if (cardNumbers) {
        var cardNumberArray = cardNumbers.split(";");
        var cardBalanceArray = cardBalances.split(";");

        if (cardNumberArray.length > 0 && cardBalanceArray.length > 0) {
            for (var i in cardNumberArray) {
                res =
                    res +
                    "Бон. карта " +
                    hideCardNumber(cardNumberArray[i]) +
                    ", баланс: " +
                    (cardBalanceArray[i] || "0") +
                    "\n";
            }
        }
    }
    return res;
}

// маскировка номера карты
function hideCardNumber(cardNumber) {
    return cardNumber.replace(/(\d{4})(\d{5})(\d*)/, function (matchMedia, p1, p2, p3) {
        return p1 + p2.replace(/\d/g, "*") + p3;
    });
}

function removeNewlines(str) {
    // Удаляем символы новой строки (\n) и возврата каретки (\r)
    return str.replace(/[\n\r]/g, "");
}

function chekInfoArea(doc) {
    var infoAreaString = "";
    infoAreaString = infoAreaString + "\\nСмена № ----------------> " + frontol.sessionNumber;
    infoAreaString = infoAreaString + "\\n" + doc.type.name + "№ ---------------> " + doc.number;
    infoAreaString = infoAreaString + "\\nКасса № ----------------> " + frontol.codeWorkplace;
    infoAreaString = infoAreaString + "\\nКассир № ---------------> " + frontol.currentUser.name;
    return infoAreaString;
}

//Status FOR KKM
function StatusKKM() {
    var options = JSONStringify({
        formCode: "DEVICE_STATUS",
        shouldPrintSlip: false
    });

    var stringToSend = options;
    var FRadress = frontol.userValues.get("fiscalipadres");
    var result = sendtofiscal(FRadress, "deviceStatus", stringToSend);
    // frontol.actions.showMessage(result.data.onlineStatus);
    // show(result)
    if (result.rc == "SUCCESS") {
        if (result.data.onlineStatus == true) {
        } else {
            frontol.actions.showMessage("ПРОВЕРЬТЕ СОСТОЯНИЕ ККМ");
        }
        // return result.rc;
    } else if (result.rc !== "SUCCESS") {
        var error = getErrorOFD(result.rc);
        frontol.actions.showMessage("Ответ ККМ: " + CR_MESSAGE + CR_MESSAGE + error, Icon.Error);
    }
}

Fiscat: {
    var FISCAT_PORT = "fiscatPort";
    var COM_PORT_ENABLED = "comPortEnabled";

    function isSysAdmin() {
        // if (!userHasProfile()) showError("Не установлен профиль текущего пользователя");
        var isAdmin;
        try {
            isAdmin = frontol.currentUser.profile.code == 1;
        } catch(e) {
            isAdmin = AdminUser === frontol.currentUser.code;
        }
        return isAdmin;
    }

    function isUser() {
        return frontol.currentUser != false;
    }

    function userHasProfile() {
        if (!isUser()) showError("Не установлен текущий пользователь");
        return isUser() && frontol.currentUser.profile;
    }

    function isAdminOrMainCashier() {
        // if (!userHasProfile()) showError("Не установлен профиль текущего пользователя");
        var res;
        try {
            res = frontol.currentUser.profile.code == 2 ||
            frontol.currentUser.profile.code == 3;
        } catch(e) {
            res = HeadCashier === frontol.currentUser.code;
        }
        return res;
    }

    function isMenuAccessAvailable() {
        return isSysAdmin() || isAdminOrMainCashier();
    }

    function runPrintLastDoc() {
        var dataString = JSON.stringify({
            formCode: "PRINT_LAST_FD",
            ffdVersion: "VER_1",
            shouldPrintSlip: true}
        );

        printDocByComPort(dataString, "getLastFD");
    }

    function runPrintLastDocByFDNum() {
        var docNumber = frontol.actions.inputString("Введите номер документа", "");
        if (!docNumber) {
            frontol.actions.showMessage("Номер документа не введен", Icon.Error);
            return;
        }

        if (!/^\d+$/g.test(docNumber)) {
            frontol.actions.showMessage("Номер документа должен состоять из цифр", Icon.Error);
            return;
        }

        var dataString = JSON.stringify({
            formCode: "PRINT_FD_BY_NUMBER",
            ffdVersion: "VER_1",
            shouldPrintSlip: true,
            fdNumber: +docNumber
        });

        printDocByComPort(dataString, "getFDByNumber");
    }


    function printDocByComPort(dataString, action) {
        var FRadress = frontol.userValues.get("fiscalipadres");
        var result = sendtofiscal(FRadress, action, dataString);

        if (result.rc !== "SUCCESS") {
            var error = getErrorOFD(result.rc);
            frontol.actions.showMessage("Ответ ОФД с ошибкой: " + CR_MESSAGE + " -> " + error, Icon.Error);
            cancelAct();
            return;
        }
    }
}

//Душанбе Сити ==========================================================================================================================================================================================


//Опеределения
var adres = "http://109.74.70.49:96/ashan";
var pan = "5058270385062681"; //Установите актуальный Qr код
var sign = "f3c945d00836c34c78340f2504f5cc7f";


function dcinit(){
    frontol.addEventListener("addPayment", "dcpay",true);
}

function dcpay(payment){
        var tranid = (frontol.currentDocument.number+frontol.sessionNumber+payment.sumInBaseCurrency+frontol.codeWorkplace)+Math.floor(Math.random() * 900);
        //var summapay = Number(frontol.currentDocument.totalSum);
        var summapay = payment.sumInBaseCurrency;
        //Проверяем на тип платежа с ашана
        if ( payment.type.code == DC_QR ) {
		       //writeLog("Выбран тип платежа Qr");
           //Если тип продажа
            if (frontol.currentDocument.type.code === 1){
			    //writeLog("Выбран тип продажа");
				var stringToSend = "<action>getpaystatus</action><docNumber>"+tranid+"</docNumber><pan>"+pan+"</pan><summa>"+summapay+"</summa><sign>"+sign+"</sign>";
			    //writeLog("Запрос на сервер IP"+adres);
			    //writeLog("Запрос на сервер Тело"+stringToSend);

				var httpClient = new ActiveXObject("AsyncHttpClient.HttpClientWrapper");
				var loadingScreen = new ActiveXObject("CustomLoadingInterface.LoadingScreen");
				var imagePath = "D:/wait.jpg"; // Замените на актуальный путь
				loadingScreen.SetImage(imagePath); // Устанавливаем изображение
				loadingScreen.Show();

				try {
					var response = httpClient.PostSync(adres, stringToSend);
				}catch (error) {
					frontol.actions.showMessage("Произошла ошибка: Сервер ДС недоступен, попробуйте позже!" , Icon.Error);
					cancelAct();
					return;ы
				}
				var code = ReadXml(response,"code")
				//writeLog("Пришел запрос");
				//============= Если есть ошибки ==================================================
				// Если успех
				if(code=='200'){
					loadingScreen.Hide();
					var paymentcode;
					var crcode = ReadXml(response,"crcode");
					if(crcode!=""){paymentcode = crcode}
					else {paymentcode = payment.type.code}
					var summafrontol = parseFloat(ReadXml(response,"summa"));
					frontol.actions.showMessage(ReadXml(response,"message")+ENTER+"Сумма: "+ReadXml(response,"summa")+ENTER+"Дата: "+ReadXml(response,"date")+ENTER+"Отправитель: "+ReadXml(response,"phone"),Icon.Information);
					frontol.currentDocument.addPayment(paymentcode,summafrontol, null);
					var dateforfile =  ReadXml(response,"frontoldate");
					cancelAct();
				}
				else{
					loadingScreen.Hide();
					//writeLog("Пришел ответ не успех"+response);
					frontol.actions.showMessage("Информация: "+ReadXml(response,"message"));
					var dateforfile =  ReadXml(response,"frontoldate");
					cancelAct();
					return;
				}

				if(code=='') {
			        loadingScreen.Hide();
					frontol.actions.showMessage("Не пришел ответ от DC",Icon.Error);
					cancelAct();
					//writeLog("Нет соединения или протокол не доступен");
					return;
				}
            }
        }
}


function ReadXml(data,value){
    var pos = data.indexOf("<"+value+">");
    var poss= data.indexOf("<"+value+">")+((value.length));
    var pos1 = (poss+3)-1;
    //if(pos.length<1){return "";}
    var pos2=data.indexOf("</"+value+">");
    var res = data.substr(pos1,pos2-pos1);
    if(res.length==0) return "";
    return res;
}

function cancelAct() {
	frontol.actions.cancel();
}



