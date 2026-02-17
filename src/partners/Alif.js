// ==============================================================
// Alif BEGIN

var FRONTOL_ADMIN_PROFILE_CODES = [1, 2]; //Коды пользовательских профилей которым разрешено активировать админку Алиф платежей. Ex: 1 - это 'Системный администратор'
var FRONTOL_DB_PATH = "D:\\Torgovlya\\MAIN.GDB";
var JetQrPay;

function init_JetQrPay() {
    frontol.addEventListener("addPayment", "JetQrBeforeAddPayment", true);
    frontol.addEventListener("cancelDocument", "JetQrAfterCancelDocument", false);
}


var JET_QR = 200;
var ALIF_QR = 201;
var ALIF_SALOM = 202;
var ESKHATA_QR = 203;
var HUMO_QR = 204;
var IBT = 205;

/*
    Некоторые банки объедененны в единий QR обслуживаемый
    Алиф банком. Если в документ/чек добавлен один из перечисленных
    банков, активизируется Алиф шлюз.
    
    По сути данные перечисления всех банков тут опционально.
    Т.к выбрав тот же JET QR активируется единный QR.
*/
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
	if (!_isCommonQRPayment(frontolPayment)) {
		return;
	}

    if (!Doc_IsSale(frontol.currentDocument)) {
        return;
    }

    var paymentNumber = frontolPayment.number;
    var documentNumber = frontol.currentDocument.number;
    var sessionNumber = frontol.sessionNumber;
    var terminalId = frontol.codeWorkplace;
    var amount = frontolPayment.sumInBaseCurrency;
    var paymentTime = frontol.currentDocument.timeOpen;

    //TODO: Нужно протестиить вместо вручной конвертации в строку
    // var payload = {
    //     FrontolPaymentId: paymentNumber,
    //     FrontolPaymentDocumentId: documentNumber,
    //     FrontolPaymentSessionId: sessionNumber,
    //     FrontolPaymentTerminalId: terminalId,
    //     FrontolPaymentAmount: amount,
    //     FrontolPaymentTime: paymentTime
    // }

    // var frontolPaymentData = JSON.stringify(payload)

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
    if (JetQrPay == null) JetQrPay = new ActiveXObject("AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver");

    var result = null;
    if (frontolPayment.type.code === ALIF_SALOM) {
        result = JetQrPay.ProcessSalomPayment(
            frontolPaymentData, frontolPaymentProducts
        );
    } else {
        result = JetQrPay.ProcessQrPayment(
            frontolPaymentData, frontolPaymentProducts
        );
    }

    if (result.IsSuccessful) {
        var isDuplicate = frontol.currentDocument.userValues.get(result.InvoiceId) > 0;
        if (isDuplicate === false) {
            frontol.currentDocument.addPayment(
                result.FrontolBankCode,
                result.AmountArrived,
                null
            );
            frontol.currentDocument.userValues.set(result.InvoiceId, result.InvoiceId);
        } else {
            showMessage("Дублирующий платеж! Этот платеж уже есть в списке.", Icon.Exclamation);
        }
    } else {
        showMessage("Ошибка платежа! Не произведен платеж!", Icon.Error);
    }

    JetQrPay.Dispose();
    JetQrPay = null;

    cancelAct();
}


function JetQrAfterCancelDocument() {
    //В данном событии вызываем отмену платежей Алиф только для документов типа "Продажа".
    //Если не делать этот check, пользователь может создать документ типа "Возврат" и отменить его вместо того чтобы закрыть. В таком случае платежи Алиф оменятся, чего быть не должно.
    //Для документов типа "Возврат" фунцкия отмены платежей Алиф вызовится "после" закрытия документа в обратобчике AlifAfterCloseDocument
    if (isSaleDocument(frontol.currentDocument)) {
        CancelJetQrPaymentsOnDocument();
    }
}

function CancelJetQrPaymentsOnDocument() {
    var documentHasJetQrPayments = Doc_HasPaymentType(JET_QR);

    if (documentHasJetQrPayments) {
        if (JetQrPay == null) JetQrPay = new ActiveXObject("AlifJetQr.FrontolDriver.IntegrationData.JetQrDriver");

        var documentNumber = 0;
        if (Doc_IsSale(frontol.currentDocument)) {
            //тип документа "Продажа"
            documentNumber = frontol.currentDocument.number;
        } else if (Doc_IsReturn(frontol.currentDocument)) {
            //тип документа "Возврат", мы должны передавать номера документа основания(тип "Продажа") для возврата, так как платежи в базе связаны с именно с тeм документом
            documentNumber = frontol.currentDocument.baseDocument.number;
        }

        JetQrPay.CancelPayments(documentNumber);

        JetQrPay.Dispose();
        JetQrPay = null;
    }
}

/*
function AlifShowAdminUI() {
    if (frontol.currentDocument == null) return;

    var isAdminUser = IsAdminUser();
    if (!isAdminUser) {
        showMessage("У вас нет доступа к административному интерфейсу ПС Алиф Капитал");
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
                } else showMessage("Дублирующий платеж! Этот платеж уже есть в списке.");
            }
        } else {
            showMessage("Ошибка! Нельзя добавлять платеж предназначенный для другого документа!");
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
        showMessage("Query execution error: [" + e.number + "],\n" + e.message + ",\nquery: " + queryString, Icon.Error);
    }
    return isAdmin;
}
*/

// Alif END
// ==============================================================
