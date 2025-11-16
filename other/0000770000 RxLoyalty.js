//////////////////////////////////////////////////////
//                                                  //
//     Modified : 2019-06-07 17:26 (UTC+2)          //
//                                                  //
//       Author : RobotX, RxLoyalty                 //
//                                                  //
//     Contacts : proc@robotx.ru                    //
//                                                  //
//  Description : F5-F6, ˜˜˜˜˜˜˜˜˜˜ + Promo (v2)    //
//                                                  //
//////////////////////////////////////////////////////

/* jshint maxerr: 1000 */ // error limit 1000
/* jshint -W082 */        // function declarations should not be placed in blocks
/* jshint -W004 */        // already defined
/* jshint -W038 */        // out of scope
/* jshint -W018 */        // confusing use of '!'

var SELLING_DOCUMENT_TYPE_NAME = "˜˜˜˜˜˜˜";
var REFUND_DOCUMENT_TYPE_NAME = "˜˜˜˜˜˜˜";
var SELLING_DOCUMENT_TYPE_CODE = 1;
var REFUND_DOCUMENT_TYPE_CODE = 2;

var CR_MESSAGE = "\n";
var REQUEST_IN_PROCESS_MESSAGE = "˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜...";
var REQUEST_WILL_BE_SEND_LATER_MESSAGE = "˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜";
var CHECK_SETTINGS_MESSAGE = "˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ RxLoyalty" + CR_MESSAGE;
var OR_MESSAGE = "˜˜˜" + CR_MESSAGE;
var CONTACT_YOUR_TECHNICIAN_MESSAGE = "˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜" + CR_MESSAGE;
var CONTACT_SUPPORT_MESSAGE = "˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ RxLoyalty" + CR_MESSAGE;

var LICENSE_NOT_SET_MESSAGE = "˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var SERVER_ADDRESS_NOT_SET_MESSAGE = "˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var TOKEN_NOT_SET_MESSAGE = "˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;

var LICENSE_NOT_FOUND_MESSAGE = "˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + OR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var TOKEN_NOT_FOUND_MESSAGE = "˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜" + CR_MESSAGE + CHECK_SETTINGS_MESSAGE + OR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;

var CARD_CODE_EMPTY_MESSAGE = "˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜";
var CARD_PATTERN_NOT_VALID_MESSAGE = "˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_PATTERN_NOT_EXIST_MESSAGE = "˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_BLOCKED_MESSAGE = "˜˜˜˜˜, ˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_ALREADY_REGISTERED_MESSAGE = "˜˜˜˜˜, ˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_SYNCHRONOUS_REGISTRATION_MESSAGE = "˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_NOT_FOUND_MESSAGE = "˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_EXPIRED_MESSAGE = "˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CARD_ACCUMULATION_ONLY = "˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;

var DOCUMENT_TYPE_NOT_FOUND_MESSAGE = "˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_TYPE_INCORRECT_MESSAGE = "˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_DETAILS_EMPTY_MESSAGE = "˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_DISCOUNTS_EMPTY_MESSAGE = "˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_ALREADY_RETURNED_MESSAGE = "˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_EMPTY_MESSAGE = "˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var PARENT_DOCUMENT_NOT_FOUND_MESSAGE = "˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜-˜˜˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var DOCUMENT_WILL_BE_SEND_LATER_MESSAGE = "˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜";

var UNAUTHORIZED_MESSAGE = "˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var LICENSE_NOT_ACTIVE_MESSAGE = "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var SUBJECT_NOT_FOUND_MESSAGE = "˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜ ˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var CALCULATION_ALGORITHM_NOT_FOUND_MESSAGE = "˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var INVALID_CODE_TO_START_GENERATE = "˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var NO_CASH_PARAMS_FOR_LICENSE_MESSAGE = "˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜" + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
var UNKNOWN_ERROR_MESSAGE = "˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜" + CR_MESSAGE;
var NO_SERVER_RESPONSE_MESSAGE = "˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜" + CR_MESSAGE;
var INTERNET_ERROR_MESSAGE = "˜˜˜˜˜˜ ˜˜˜˜" + CR_MESSAGE;
var SERVER_ERROR_MESSAGE = "˜˜˜˜˜˜ ˜˜˜˜˜˜˜" + CR_MESSAGE;
var ERROR_MESSAGE = "˜˜˜˜˜˜" + CR_MESSAGE;
var DESCRIPTION_MESSAGE = "˜˜˜˜˜˜˜˜: ";
var INSUFFICIENT_FUNDS = "˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜";

var INPUT_CARD_CODE_MESSAGE = "˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜";

var HTTP_STATE_MESSAGE = "˜˜˜˜˜˜ HTTP-˜˜˜˜˜˜˜->";
var HTTP_CODE_MESSAGE = "HTTP-˜˜˜->";

var dbRx = null;
var promoRx = null;

function init()
{
    //˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜ JSON
    getJson2();

    // ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜ String ˜˜˜˜˜ trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function()
            {
                return this.replace(rtrim, "");
            };
        })();
    }

    checkRequiredCashParams();

    loadTree();

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ - ˜˜
    frontol.addEventListener("openDocument", "openDocumentBefore", true);

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ - ˜˜
    frontol.addEventListener("closeDocument", "closeDocumentBefore", true);

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ - ˜˜˜˜˜
    frontol.addEventListener("closeDocument", "closeDocumentAfter", false);

    //˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ - ˜˜˜˜˜
    frontol.addEventListener("cancelDocument", "cancelDocument", false);

    //˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜
    frontol.addEventListener("addPayment", "addPaymentBefore", true);

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜
    frontol.addEventListener("stornoPayment", "stornoPaymentBefore", true);

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜
    frontol.addEventListener("stornoPayment", "stornoPaymentAfter", false);

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜
    frontol.addEventListener("openSession", "openSessionAfter", false);

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜
    frontol.addEventListener("closeSession", "closeSessionAfter", false);

    //˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜
    frontol.addEventListener("addPosition", "addOrChangePositionBefore", true);
    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜
    frontol.addEventListener("changePosition", "addOrChangePositionBefore", true);

    //˜˜˜˜ ˜˜˜˜˜ - ˜˜
    frontol.addEventListener("addCard", "addCardBefore", true);
}

//==========================================================================================================================================================================================
//˜˜˜˜˜˜˜˜˜˜ BEGIN
FunctionsOfEventListeners: {

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ - ˜˜
function openDocumentBefore()
{
    if (frontol.userValues.get("IsShiftClosed") == "1")
    {
        openSessionAfter();
    }

    if (frontol.userValues.get("ForbidReturnWithPayments") != "")
    {
        forbidReturnDocWithProcPayments();
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ - ˜˜
function closeDocumentBefore()
{
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
    if (frontol.currentDocument.type.code == SELLING_DOCUMENT_TYPE_CODE && frontol.userValues.get("SumToCreateCard") != "")
    {
        requestCreateCard();
    }

    if(frontol.userValues.get("SaleBeforePrintCheck") == "1" && frontol.currentDocument.type.code == SELLING_DOCUMENT_TYPE_CODE)
    {
        //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜
        if (frontol.currentDocument.userValues.get("cardBoxDocDiscDtos") != "" || frontol.userValues.get("RxLoyaltyStatistics") == "1")
        {
            var stringToSend = getSaleDataAfterClosing(frontol.currentDocument);

            if(frontol.currentDocument.userValues.get("cardBoxDocDiscDtos") != "")
            {
                sendDocumentAfterClosing(stringToSend, 1);
            }

            if (frontol.userValues.get("RxLoyaltyStatistics") == "1")
            {
                saveDocumentAfterClosing(stringToSend, 1);
            }
        }

        //GetFooter(frontol.currentDocument);
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ - ˜˜˜˜˜
function closeDocumentAfter()
{
    var currentDocument = frontol.currentDocument;

    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜
    if(frontol.userValues.get("rxIsRUD") == "1")
    {
        var rudGiftCards = new RudGiftCards();
        rudGiftCards.upload();
    }

    var stringToSend = "";

    if(frontol.userValues.get("SaleBeforePrintCheck") != "1" && currentDocument.type.code == SELLING_DOCUMENT_TYPE_CODE)
    {
        //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜
        if (currentDocument.userValues.get("cardBoxDocDiscDtos") != "" || frontol.userValues.get("RxLoyaltyStatistics") == "1")
        {
            stringToSend = getSaleDataAfterClosing(currentDocument);

            if( currentDocument.userValues.get("cardBoxDocDiscDtos") != "" )
            {
                sendDocumentAfterClosing(stringToSend, 1);
            }

            if ( frontol.userValues.get("RxLoyaltyStatistics") == "1" )
            {
                saveDocumentAfterClosing(stringToSend, 1);
            }
        }
        //GetFooter(frontol.currentDocument);
    }
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜-˜˜˜˜˜˜˜˜˜ ˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜
    if (
        currentDocument.type.code == REFUND_DOCUMENT_TYPE_CODE &&
        currentDocument.baseDocument.number != null &&
        currentDocument.baseDocument.number != ""
    )
    {
        stringToSend = getReturnDataAfterClosing(currentDocument);

        if(currentDocument.baseDocument.userValues.get("cardBoxDocDiscDtos") != "")
        {
            sendDocumentAfterClosing(stringToSend, 2);
        }

        if ( frontol.userValues.get("RxLoyaltyStatistics") == "1" )
        {
            saveDocumentAfterClosing(stringToSend, 2);
        }
    }
    // ˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜-˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    if(
        currentDocument.type.code == SELLING_DOCUMENT_TYPE_CODE && // ˜˜˜˜˜˜˜
        getClientUUID() == "A527335D-BE7A-4D52-AAE0-DAC465A0BB5C" && // ˜˜˜˜˜˜
        frontol.userValues.get("PromoActionParticipation") == 1 && // ˜˜˜˜˜-˜˜˜˜˜˜˜˜
        frontol.userValues.get("PromoActionCounterName") != "" && // ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
        Number(frontol.userValues.get("PromoActionCounter")) > 0 && // ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
        Number(frontol.userValues.get("PromoActionMinChequeSum")) <= currentDocument.totalSum // ˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜
    )
    {
        var cheque = {
            Number: currentDocument.number,
            Date: currentDocument.dateClose,
            Time: currentDocument.timeClose,
            Sum: currentDocument.totalSum
        };

        var promoActionCounterName = frontol.userValues.get("PromoActionCounterName");
        var promoActionCounter = frontol.userValues.get("PromoActionCounter");
        var cashBoxCode = frontol.codeWorkplace.toString();

        var counter = promoRx.saveTransaction(cheque, cashBoxCode, promoActionCounterName);

        if(counter % promoActionCounter == 0)
        {
            _SM("˜˜ ˜˜˜˜˜ ˜˜˜˜˜ " + cashBoxCode + " - ˜˜˜˜˜˜˜˜˜˜, ˜˜˜˜˜ ˜˜˜˜ " + cheque.Number);
        }
    }
}

//˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
function cancelDocument()
{
    var currentDocument = null;
    //˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    try
    {
        currentDocument = frontol.currentDocument;
    }
    catch(e)
    {
    }

    if(currentDocument == null)
    {
        frontol.actions.showMessage("˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜!", Icon.Error);
        return;
    }

    if(currentDocument.type.code == SELLING_DOCUMENT_TYPE_CODE)
    {
        var cardBoxNumbers = currentDocument.userValues.get("cardBoxNumbers");

        if(cardBoxNumbers)
        {
            var processingServerAddress = frontol.userValues.get("ServerAddress");

            if (!processingServerAddress)
            {
                frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
                return;
            }

            //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
            var license = frontol.userValues.get("License");
            if (!license)
            {
                frontol.actions.showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
                return;
            }

            //˜˜˜˜˜˜˜˜ ˜˜˜˜˜
            var accessToken = frontol.userValues.get("AccessToken");
            if (!accessToken)
            {
                frontol.actions.showMessage(TOKEN_NOT_SET_MESSAGE, Icon.Error);
                return;
            }

            var cardBoxNumbersArray = cardBoxNumbers.split(";");
            for(var i = 0; i < cardBoxNumbersArray.length; i++)
            {
                var result = {
                    success: false,
                    message: "",
                    data: ""
                };

                //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
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

                if(result.success)
                {
                    frontol.actions.showMessage(
                        "˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜!\n" +
                        "˜˜˜˜˜: " + cardBoxNumbersArray[i]
                    );
                }
                else
                {
                    frontol.actions.showMessage(result.message, Icon.Error);
                }
            }
        }
    }
}

//˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜
function addPaymentBefore(payment)
{
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
    if (frontol.currentDocument.type.code == SELLING_DOCUMENT_TYPE_CODE)
    {
        CheckEnterPayment(payment, 1);
        if (IsExtraEnabled("ExtraTaxKyrgyzstan")) ControlEnterPayment_ExtraTaxKyrgyzstan(payment);
    }
    if (frontol.currentDocument.type.code == REFUND_DOCUMENT_TYPE_CODE)
    {
        CheckEnterPayment(payment, 2);
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜
function stornoPaymentBefore(payment)
{
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
    if (frontol.currentDocument.type.code == SELLING_DOCUMENT_TYPE_CODE)
    {
        CheckDeletePayment(payment, 1);
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜
function stornoPaymentAfter(payment)
{
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
    if (frontol.currentDocument.type.code == SELLING_DOCUMENT_TYPE_CODE)
    {
        if (IsExtraEnabled("ExtraTaxKyrgyzstan")) ControlStornoPayment_ExtraTaxKyrgyzstan();
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜
function openSessionAfter()
{
    frontol.userValues.set("IsShiftClosed", "0");
    getCashParams(true);

    if(getClientUUID() == "A527335D-BE7A-4D52-AAE0-DAC465A0BB5C")
    {
        var conn = {
            Driver: "Firebird/InterBase(r) driver",
            Host: "localhost",
            DbName: "d:\\dbs\\AuchanD\\main.gdb",
            User: "SYSDBA",
            Password: "masterkey",
            CharSet: "WIN1251"
        };

        dbRx = new RxDB(conn);
        var connected = dbRx.connect();

        if(!connected)
        {
            _SM("˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜-˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜!");
        }
        else
        {
            promoRx = new RxPromo(dbRx);
            var cashBoxCode = frontol.codeWorkplace.toString();

            var foundCashBox = promoRx.findCashBox(cashBoxCode);

            if(foundCashBox)
            {
                //_SM("˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜ " + cashBoxCode + " ˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜-˜˜˜˜˜!");
                frontol.userValues.set("PromoActionParticipation", "1"); // ˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜

                var promoParams = promoRx.getParams(); // ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
                var currentDate = getDateToString();
                var counterName = promoRx.COUNTER_TEMPLATE + currentDate;
                //_SM("Counter name->" + counterName);

                promoRx.deleteOldCounters(counterName); // ˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜

                var existingCounter = promoRx.checkCounter(counterName, true);

                if(!existingCounter)
                {
                    promoRx.createCounter(counterName); // ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜ ˜˜˜ ˜˜˜
                }

                if( "Counter" in promoParams && !isNaN(promoParams.Counter) )
                {
                    //_SM("Counter->" + promoParams.Counter);
                    frontol.userValues.set("PromoActionCounter", promoParams.Counter); // ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
                    frontol.userValues.set("PromoActionCounterName", counterName);
                }
                else
                {
                    return;
                }

                var promoInfoString = "˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜ " + cashBoxCode + " ˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜-˜˜˜˜˜!\n";
                promoInfoString += "˜˜˜˜˜˜ " + promoParams.Counter + "-˜ ˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜˜!";

                if( "MinChequeSum" in promoParams && !isNaN(promoParams.MinChequeSum) && promoParams.MinChequeSum > 0)
                {
                    //_SM("MinChequeSum->" + promoParams.MinChequeSum);
                    frontol.userValues.set("PromoActionMinChequeSum", promoParams.MinChequeSum); // ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜
                    promoInfoString += "˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜ - " + promoParams.MinChequeSum;
                }

                _SM(promoInfoString);
            }
        }
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜
function closeSessionAfter()
{
    frontol.userValues.set("IsShiftClosed", "1");
    SendDelayed(true);
}

//˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜
function addOrChangePositionBefore()
{
    //˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    if (frontol.currentDocument.userValues.get("FirstCardNumber") != "")
        frontol.actions.showError("˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜!");
}

//˜˜˜˜ ˜˜˜˜˜ - ˜˜
function addCardBefore()
{
    //˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    if (frontol.userValues.get("DontWorkWithStandartCards") == "1" && frontol.currentDocument.userValues.get("FirstCardNumber") != "")
        frontol.actions.showError("˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜!");
}

}
//==========================================================================================================================================================================================

MainFunctions: {
//˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
/* silent - ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ (true - ˜˜˜˜˜˜˜, false - ˜˜˜˜˜˜˜)*/
function getCashParams(silent)
{
    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("License") != "" && frontol.userValues.get("License") != null)
    {
        var license = frontol.userValues.get("License");
    }
    else
    {
        frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
    }

    var processingServerAddress = frontol.userValues.get("ServerAddress");

    if (!processingServerAddress)
    {
        frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
        return;
    }

    var result = {
        success: false,
        message: "",
        data: ""
    };

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
    var stringToSend = JSON.stringify({
                           LicenseGuid: license
                       });

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/cashparams",
        "POST",
        stringToSend,
        "cashparams"
    );

    if(result.success)
    {
        ClearGlobal(GetSettingsArray());

        for(var i = 0; i < result.data.CashParamResponseDtos.length; i++)
        {
            frontol.userValues.set(result.data.CashParamResponseDtos[i].Name, result.data.CashParamResponseDtos[i].Value);
        }

        // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
        if(frontol.userValues.get("rxIsRUD") == "1")
        {
            var rxLoyaltyPrograms = new LoyaltyPrograms();
            rxLoyaltyPrograms.get();
        }

        if (silent == false)
        {
            frontol.actions.showMessage("˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜.");
        }
    }
    else
    {
        frontol.actions.showMessage(result.message, Icon.Error);
        return;
    }
}

//˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
function ShowCashParams()
{
    var settingsArray = GetSettingsArray();

    var messageArray = [];
    for (var i = 0; i < settingsArray.length; i++)
    {
        if (frontol.userValues.get(settingsArray[i]) != "")
        {
            var k = messageArray.length;
            messageArray[k] = settingsArray[i] + ": " + frontol.userValues.get(settingsArray[i]);
        }
    }
    var message = "";
    message += messageArray.join("\n");
    frontol.actions.showMessage(message);
}

//˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜
/* doc - ˜˜˜˜˜˜˜˜
   ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜*/
function getSaleDataAfterClosing(doc)
{
    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("License") != "" && frontol.userValues.get("License") != null)
    {
        var license = frontol.userValues.get("License");
    }
    else
    {
        frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    var token = frontol.userValues.get("AccessToken");

    var tDocumentDateTime = "";
    // ˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜  ˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜, ˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜
    if(frontol.userValues.get("SaleBeforePrintCheck") == "1")
    {
        var nowDateTime = getISODateTimeToString(":");
        var nowDateTimeArray = nowDateTime.split("T");
        tDocumentDateTime = nowDateTimeArray[0] + " " + nowDateTimeArray[1];
    }
    else
    {
        //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜ YYYY-MM-DD HH24:MM:SS
        var dateList = doc.dateClose.split(".");
        tDocumentDateTime = "20" + dateList[2] + "-" + dateList[1] + "-" + dateList[0] + " " + doc.timeClose;
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
    var tDocumentDiscountDtos = [];

    if( doc.userValues.get("cardBoxDocDiscDtos") != "" )
    {
        var cardBoxDocDiscDtos = doc.userValues.get("cardBoxDocDiscDtos");
        var allCardsArray = cardBoxDocDiscDtos.split(";");
        for (var i = 0; i < allCardsArray.length; i++)
        {
            var cardArray = allCardsArray[i].split("&");
            tDocumentDiscountDtos[i] =
            {
                AccountId: Number(cardArray[0]),
                CardCode: cardArray[1],
                SumBase: Number(cardArray[2]),
                SumDiscounted: Number(cardArray[3]),
                Discount: Number(cardArray[4]),
                Percent: Number(cardArray[5])
            };
        }
    }
    else if (frontol.userValues.get("RxLoyaltyStatistics") == "1")
    {
        tDocumentDiscountDtos[0] =
        {
            //AccountId: "",
            CardCode: "",
            SumBase: doc.sum,
            SumDiscounted: doc.totalSum,
            Discount: doc.totalSumDiscount,
            Percent: doc.totalPercentDiscount
        };
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜
    var tDocumentDetailDtos = [];
    var numberInArray = 0;
    //doc.position.count ˜˜˜˜˜˜˜˜˜˜ ˜˜˜-˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜
    for (doc.position.index = 1; doc.position.index <= doc.position.count; doc.position.index++)
    {
        //˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜
        if (doc.position.storno == 0)
        {
            tDocumentDetailDtos[numberInArray] =
            {
                ProductCode: frontol.userValues.get("WareMarkPrefix") + ((frontol.userValues.get("WareIdIsCode") == "1") ? doc.position.ware.code.toString() : doc.position.ware.mark),
                Quantity: Math.round(doc.position.quantity * 1000) / 1000,
                TotalPrice: Math.round(doc.position.sum * 100) / 100,
                TotalPriceDiscounted: Math.round(doc.position.totalSum * 100) / 100
            };

            var cardBoxSpecialDetailDto = "";

            cardBoxSpecialDetailDto = getCardBoxSpecialDetailDto(doc, doc.position.index);

            if(cardBoxSpecialDetailDto)
            {
                tDocumentDetailDtos[numberInArray].SpecialPrice = Number(cardBoxSpecialDetailDto.SpecialPrice);
                tDocumentDetailDtos[numberInArray].SpecialPriceQuantity = Number(cardBoxSpecialDetailDto.SpecialPriceQuantity);
            }

            numberInArray++;
        }
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
    var dataJSON =
    {
        LicenseGuid: license,
        AccessTokenGuid: token,
        CashierName: frontol.currentUser.name,
        DocumentType: 1,
        DocumentCode: doc.number.toString(),
        DocumentFiscalCode: doc.number.toString(),
        DocumentParentCode: "",
        DocumentDateTime: tDocumentDateTime,
        SubjectCode: frontol.userValues.get("SubjectCode"),
        CashboxCode: frontol.codeWorkplace.toString(),
        TotalSum: Math.round(doc.sum * 100) / 100,
        TotalSumDiscounted: Math.round(doc.totalSum * 100) / 100,
        DocumentDiscountDtos: tDocumentDiscountDtos,
        DocumentDetailDtos: tDocumentDetailDtos
    };
    //˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜
    var dataString = JSON.stringify(dataJSON);
    //˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
    return dataString;
}
// ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
function getCardBoxSpecialDetailDto(doc, positionId)
{
    var cardBoxSpecialDetailDtos = doc.userValues.get("cardBoxSpecialDetailDtos");

    if(cardBoxSpecialDetailDtos.length > 0)
    {
        var cardBoxSpecialDetailDtosArray = cardBoxSpecialDetailDtos.split(";");

        if(cardBoxSpecialDetailDtosArray.length > 0)
        {
            for(var i = 0; i < cardBoxSpecialDetailDtosArray.length; i++)
            {
                var cardBoxSpecialDetailDto = cardBoxSpecialDetailDtosArray[i];

                var cardBoxSpecialDetailDtoArray = cardBoxSpecialDetailDto.split("&");

                if(cardBoxSpecialDetailDtoArray.length > 0)
                {
                    var dto = {};

                    try {
                        dto.PositionId = cardBoxSpecialDetailDtoArray[0];
                        dto.SpecialPrice = cardBoxSpecialDetailDtoArray[1];
                        dto.SpecialPriceQuantity = cardBoxSpecialDetailDtoArray[2];
                    } catch (e)
                    {
                        frontol.actions.showMessage("˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜!");
                    }

                    if(dto.PositionId == positionId)
                    {
                        return dto;
                    }
                }
            }
        }
    }
    return "";
}
//˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜
/* doc - ˜˜˜˜˜˜˜˜
   ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜*/
function getReturnDataAfterClosing(doc)
{
    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("License") != "" && frontol.userValues.get("License") != null)
    {
        var license = frontol.userValues.get("License");
    }
    else
    {
        frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜ YYYY-MM-DD HH24:MM:SS
    var dateList = doc.dateClose.split(".");
    var tDocumentDateTime = "20" + dateList[2] + "-" + dateList[1] + "-" + dateList[0] + " " + doc.timeClose;

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜
    var tReturnDiscountDtos = [];
    //!attn - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜

    //˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    //[0] - ˜˜˜˜˜˜
    //[1] - ˜˜˜˜˜˜˜
    //[2] - ˜˜˜˜˜˜˜
    //[3] - ˜˜˜˜˜˜
    var procPayments = [0, 0, 0, 0];
    //˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜
    for (doc.payment.index = 1; doc.payment.index <= doc.payment.count; doc.payment.index++)
    {
        if (doc.payment.type.code == frontol.userValues.get("BonusPaymentCode"))
        {
            procPayments[0] += doc.payment.sumInBaseCurrency;
        }
        if (doc.payment.type.code == frontol.userValues.get("DiscountPaymentCode"))
        {
            procPayments[1] += doc.payment.sumInBaseCurrency;
        }
        if (doc.payment.type.code == frontol.userValues.get("DepositPaymentCode"))
        {
            procPayments[2] += doc.payment.sumInBaseCurrency;
        }
        if (doc.payment.type.code == frontol.userValues.get("CouponPaymentCode"))
        {
            procPayments[3] += doc.payment.sumInBaseCurrency;
        }
    }

    var cardBoxAccountTypes = doc.baseDocument.userValues.get("cardBoxAccountTypes");
    var cardArrayAccountTypes = [];
    cardArrayAccountTypes = cardBoxAccountTypes.split(";");

    var cardBoxDocDiscDtos = doc.baseDocument.userValues.get("cardBoxDocDiscDtos");
    var cardArrayDocDiscDtos = [];
    cardArrayDocDiscDtos = cardBoxDocDiscDtos.split(";");

    //˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜
    for (var i = 0; i <= 3; i++)
    {
        //˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        for (var j = 0; j < cardArrayAccountTypes.length; j++)
        {
            //˜˜˜˜ ˜˜˜ ˜˜˜˜˜ ˜˜˜, ˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜
            if (Number(cardArrayAccountTypes[j]) == i + 1)
            {
                var k = tReturnDiscountDtos.length;
                tReturnDiscountDtos[k] = {};

                var cardArray = [];
                cardArray = cardArrayDocDiscDtos[j].split("&");

                tReturnDiscountDtos[k].AccountId = Number(cardArray[0]);
                tReturnDiscountDtos[k].CardCode = cardArray[1];
                var cardSum = Number(cardArray[4]);

                //˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜ ˜˜˜˜˜ ˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜
                if (procPayments[i] <= cardSum)
                {
                    tReturnDiscountDtos[k].ReturnDiscount = (procPayments[i] > 0) ? procPayments[i] : cardSum;
                    procPayments[i] = 0;
                    break;
                }
                //˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜ ˜˜˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
                else
                {
                    tReturnDiscountDtos[k].ReturnDiscount = cardSum;
                    procPayments[i] -= cardSum;
                }
            }
        }
    }

    //˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ (˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜, ˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜)
    //˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜
    var alreadyUsedCardsNumbers = [];
    for (var i = 0; i < tReturnDiscountDtos.length; i++)
    {
        var k = alreadyUsedCardsNumbers.length;
        alreadyUsedCardsNumbers[k] = tReturnDiscountDtos[i].CardCode;
    }
    //˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜˜ ˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    for (var i = 0; i < cardArrayDocDiscDtos.length; i++)
    {
        //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜
        var cardArray = [];
        cardArray = cardArrayDocDiscDtos[i].split("&");
        //˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜, ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
        if (IsInArray(cardArray[1], alreadyUsedCardsNumbers) == false)
        {
            var k = tReturnDiscountDtos.length;
            tReturnDiscountDtos[k] = {};

            tReturnDiscountDtos[k].AccountId = Number(cardArray[0]);
            tReturnDiscountDtos[k].CardCode = cardArray[1];
            tReturnDiscountDtos[k].ReturnDiscount = 0;
        }
    }
    //˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ tReturnDiscountDtos ˜˜˜˜˜

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    var tReturnDetailDtos = [];
    //doc.position.count ˜˜˜˜˜˜˜˜˜˜ ˜˜˜-˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜
    for (doc.position.index = 1; doc.position.index <= doc.position.count; doc.position.index++)
    {
        //˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜
        if (doc.position.storno == 0)
        {
            var n = tReturnDetailDtos.length;
            tReturnDetailDtos[n] =
            {
                ProductCode: frontol.userValues.get("WareMarkPrefix") + ((frontol.userValues.get("WareIdIsCode") == "1") ? doc.position.ware.code.toString() : doc.position.ware.mark),
                Quantity: Math.round(doc.position.quantity * 1000) / 1000,
                TotalPrice: Math.round(doc.position.totalSum * 100) / 100
            };
        }
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
    var dataJSON =
    {
        LicenseGuid: license,
        DocumentType: 2,
        DocumentCode: doc.number.toString(),
        DocumentFiscalCode: doc.number.toString(),
        DocumentParentCode: doc.baseDocument.number.toString(),
        DocumentDateTime: tDocumentDateTime,
        SubjectCode: frontol.userValues.get("SubjectCode"),
        CashboxCode: frontol.codeWorkplace.toString(),
        TotalSum: Math.round(doc.totalSum * 100) / 100,
        ReturnDiscountDtos: tReturnDiscountDtos,
        ReturnDetailDtos: tReturnDetailDtos
    };
    //˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜
    var dataString = JSON.stringify(dataJSON);
    //˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
    return dataString;
}

//˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜
// stringToSend - ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
function saveDocumentAfterClosing(stringToSend, documentType)
{
    try
    {
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var wsShell = new ActiveXObject("WScript.Shell");

        try
        {
            var path = wsShell.ExpandEnvironmentStrings("%SystemDrive%") + "\\RxLoyalty\\Frontol5\\stat";
            createFullPath(fso, path);
        }
        catch(e)
        {
            frontol.actions.showMessage("˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜!\n" + e.name + "\n" + e.message, Icon.Error);
            throw (e);
        }

        var dateTimeNow = getISODateTimeToString();

        var file = fso.CreateTextFile(path + "\\" + (documentType == 1 ? "sale" : "return") + "_" + dateTimeNow + ".log", true);
        file.WriteLine(stringToSend);

        file.Close();
    }
    catch(e)
    {
        frontol.actions.showMessage("˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜: " + e.name + "\n" + e.message, Icon.Error);
    }
}
//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜
/* stringToSend - ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
   documentType - ˜˜˜ ˜˜˜˜˜˜˜˜˜ (1 - ˜˜˜˜˜˜˜, 2 - ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜)*/
function sendDocumentAfterClosing(stringToSend, documentType)
{
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜
    if (frontol.currentDocument.userValues.get("Delay") == 1)
    {
        DelayDocument(stringToSend, documentType);
        return;
    }

    var processingServerAddress = frontol.userValues.get("ServerAddress");

    if (!processingServerAddress)
    {
        frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
        return;
    }

    var result = {
        success: false,
        message: "",
        data: ""
    };

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/" + (documentType == 1 ? "sale" : "return"),
        "POST",
        stringToSend,
        (documentType == 1 ? "sale" : "return"),
        documentType,
        true
    );

    if(result.success)
    {
        //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
        if (documentType == 1)
        {
            var printCardCodes = "";
            var printAddBonuses = "";
            var printRemoveBonuses = "";
            var printBalances = "";

            for (var i = 0; i < result.data.SaleDiscountResponseDtos.length; i++)
            {
                printCardCodes = AddPrintString(printCardCodes, result.data.SaleDiscountResponseDtos[i].CardCode);
                printAddBonuses = Math.round( AddPrintString(printAddBonuses, result.data.SaleDiscountResponseDtos[i].AddBonus) * 100) / 100;
                printRemoveBonuses = Math.round( AddPrintString(printRemoveBonuses, result.data.SaleDiscountResponseDtos[i].RemoveBonus) * 100) /100;
                printBalances = Math.round( AddPrintString(printBalances, result.data.SaleDiscountResponseDtos[i].Balance) * 100) / 100;

                if(result.data.Footer)
                {
                    saveFooter(frontol.currentDocument, result.data.SaleDiscountResponseDtos[i].CardCode, result.data.Footer);
                }
            }

            frontol.currentDocument.userValues.set("PrintCardCodes", printCardCodes);
            frontol.currentDocument.userValues.set("PrintAddBonuses", printAddBonuses);
            frontol.currentDocument.userValues.set("PrintRemoveBonuses", printRemoveBonuses);
            frontol.currentDocument.userValues.set("PrintBalances", printBalances);

            //˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
            if (frontol.userValues.get("ShowCardsMoves") == "1")
            {
                ShowCardsMoves(result.data.SaleDiscountResponseDtos);
            }
        }
    }
    else
    {
        frontol.actions.showMessage(result.message, Icon.Error);
        return;
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
/* stringToDelay - ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜
   documentType - ˜˜˜ ˜˜˜˜˜˜˜˜˜ (1 - ˜˜˜˜˜˜˜, 2 - ˜˜˜˜˜˜˜)*/
function DelayDocument(stringToDelay, documentType)
{
    try
    {
        var fDelay, fsoDelay;
        fsoDelay = new ActiveXObject("Scripting.FileSystemObject");
        var WshShell = new ActiveXObject("WScript.Shell");

        try
        {
            var pathDelayedFolder = WshShell.ExpandEnvironmentStrings("%SystemDrive%") + "\\RxLoyalty\\Frontol5\\delayed";
            createFullPath(fsoDelay, pathDelayedFolder);
        }
        catch(e)
        {
            frontol.actions.showMessage("˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜!\n" + e.name + "\n" + e.message, Icon.Error);
            throw (e);
        }


        if (documentType == 1)
        {
            fDelay = fsoDelay.OpenTextFile(pathDelayedFolder + "\\sale.log", 8, true);
        }
        else if (documentType == 2)
        {
            fDelay = fsoDelay.OpenTextFile(pathDelayedFolder + "\\return.log", 8, true);
        }
        fDelay.WriteLine(stringToDelay);
        fDelay.Close();
    }
    catch(e)
    {
        frontol.actions.showMessage("˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜: " + e.name + "\n" + e.message, Icon.Error);
    }
}

//˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜
/* saleDiscountResponseDtos - ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜*/
function ShowCardsMoves(saleDiscountResponseDtos)
{
    var cardsArray = [];
    for (var i = 0; i < saleDiscountResponseDtos.length; i++)
    {
        //˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜
        if (saleDiscountResponseDtos[i].AccountTypeId == 1 || saleDiscountResponseDtos[i].AccountTypeId == 3)
        {
            var k = cardsArray.length;
            cardsArray[k] = "";
            cardsArray[k] += "˜˜ ˜˜˜˜˜ " + saleDiscountResponseDtos[i].CardCode;
            cardsArray[k] += " ˜˜˜˜˜˜˜˜˜: " + Math.round(saleDiscountResponseDtos[i].AddBonus * 100) / 100;
            cardsArray[k] += ", ˜˜˜˜˜˜˜: " + Math.round(saleDiscountResponseDtos[i].RemoveBonus * 100) / 100;
            cardsArray[k] += ". ˜˜˜˜˜˜: " + Math.round(saleDiscountResponseDtos[i].Balance * 100) / 100;
        }
    }

    //˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜
    if (cardsArray.length == 0)
    {
        return;
    }

    var message = cardsArray.join("\n");

    if (frontol.userValues.get("ShowCardsMovesTimeout") != "")
    {
        var timeout = Number(frontol.userValues.get("ShowCardsMovesTimeout"));
        frontol.actions.showMessage(message, Icon.Information, timeout);
    }
    else
    {
        frontol.actions.showMessage(message);
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜
/* payment - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
   documentType - ˜˜˜ ˜˜˜˜˜˜˜˜˜ (1 - ˜˜˜˜˜˜˜, 2 - ˜˜˜˜˜˜˜)*/
function CheckEnterPayment(payment, documentType)
{
    var processingPaymentTypeCodes = [];

    var processingPaymentTypeNames = [
        "BonusPaymentCode",
        "DiscountPaymentCode",
        "DepositPaymentCode",
        "CouponPaymentCode"
    ];

    for(var i = 0; i < processingPaymentTypeNames.length; i++)
    {
        var processingPaymentTypeName = processingPaymentTypeNames[i];
        var processingPaymentTypeCode = Number(frontol.userValues.get(processingPaymentTypeName));
        if(processingPaymentTypeCode > 0)
            processingPaymentTypeCodes.push(processingPaymentTypeCode);
    }
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
    if (documentType == 1)
    {
        //˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        if(IsInArray(payment.type.code, processingPaymentTypeCodes))
        {
            frontol.actions.showError("˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜!");
        }
    }

    //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
    if (documentType == 2)
    {
        var currentDocument = frontol.currentDocument;
        var baseDocument = frontol.currentDocument.baseDocument;
        //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜-˜˜˜˜˜˜˜˜˜
        if(baseDocument.number == null || baseDocument.number == "")
        {
            //˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
            if(IsInArray(payment.type.code, processingPaymentTypeCodes))
            {
                frontol.actions.showError("˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜!");
            }
        }

        //˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
        if(baseDocument.number != null && baseDocument.number != "")
        {
            //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
            if( !(IsInArray(payment.type.code, processingPaymentTypeCodes)) )
            {
                //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜-˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
                var procPaymentBaseDocumentEntered = 0;
                for(baseDocument.payment.index = 1; baseDocument.payment.index <= baseDocument.payment.count; baseDocument.payment.index++)
                {
                    if(IsInArray(baseDocument.payment.type.code, processingPaymentTypeCodes))
                    {
                        procPaymentBaseDocumentEntered += baseDocument.payment.sumInBaseCurrency;
                    }
                }

                //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
                var procPaymentCurrentDocumentEntered = 0;
                for(currentDocument.payment.index = 1; currentDocument.payment.index <= currentDocument.payment.count; currentDocument.payment.index++)
                {
                    if(IsInArray(currentDocument.payment.type.code, processingPaymentTypeCodes))
                    {
                        procPaymentCurrentDocumentEntered += currentDocument.payment.sumInBaseCurrency;
                    }
                }

                if(Math.round(Number(procPaymentCurrentDocumentEntered) * 100) / 100 < Math.round(Number(procPaymentBaseDocumentEntered) * 100) / 100)
                {
                    //frontol.actions.showError("˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜!");

                    for(baseDocument.payment.index = 1; baseDocument.payment.index <= baseDocument.payment.count; baseDocument.payment.index++)
                    {
                        if(IsInArray(baseDocument.payment.type.code, processingPaymentTypeCodes))
                        {
                            currentDocument.addPayment(baseDocument.payment.type.code, 0.0, null);
                        }
                    }
                }
            }
        }
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
/* payment - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
   documentType - ˜˜˜ ˜˜˜˜˜˜˜˜˜ (1 - ˜˜˜˜˜˜˜)*/
function CheckDeletePayment(payment, documentType)
{
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
    if (documentType == 1)
    {
        //˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜˜˜˜˜˜
        if (payment.type.code == Number(frontol.userValues.get("BonusPaymentCode")) ||
            payment.type.code == Number(frontol.userValues.get("DiscountPaymentCode")) ||
            payment.type.code == Number(frontol.userValues.get("DepositPaymentCode")) ||
            payment.type.code == Number(frontol.userValues.get("CouponPaymentCode")))
        {
            if (frontol.userValues.get("StornoProcPayments") == 1)
            {
                if (frontol.actions.showMessage("˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜.\n˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜?", Button.YesNo) == DialogResult.Yes)
                {
                    DeleteAllProc(frontol.currentDocument);
                    frontol.actions.cancel();
                }
                else
                {
                    frontol.actions.cancel();
                }
            }
            else
            {
                frontol.actions.showError("˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜!");
            }
        }
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ (˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜)
/* doc - ˜˜˜˜˜˜˜˜*/
function DeleteAllProc(doc)
{
    if (IsExtraEnabled("ExtraTaxKyrgyzstan"))
    {
        var IsDecreasedPricesForTax = doc.userValues.get("IsDecreasedPricesForTax");
    }

    doc.userValues.clear();
    //˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    for (doc.payment.index = doc.payment.count; doc.payment.index >= 1; doc.payment.index--)
    {
        if (doc.payment.type.code == Number(frontol.userValues.get("BonusPaymentCode")) ||
            doc.payment.type.code == Number(frontol.userValues.get("DiscountPaymentCode")) ||
            doc.payment.type.code == Number(frontol.userValues.get("DepositPaymentCode")) ||
            doc.payment.type.code == Number(frontol.userValues.get("CouponPaymentCode")))
            {
                var tmpIndex = doc.payment.index;
                doc.stornoPayment(doc.payment.index);
                doc.payment.index = tmpIndex;
            }
    }
    doc.recalculateAllDiscounts();

    if (IsExtraEnabled("ExtraTaxKyrgyzstan"))
    {
        if (IsDecreasedPricesForTax != undefined && IsDecreasedPricesForTax != "")
        {
            doc.userValues.set("IsDecreasedPricesForTax", IsDecreasedPricesForTax);
        }
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
/* silent - ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ (true - ˜˜˜˜˜˜˜, false - ˜˜˜˜˜˜˜)*/
function SendDelayed(silent)
{
    var fDelay, fsoDelay;
    fsoDelay = new ActiveXObject("Scripting.FileSystemObject");
    var WshShell = new ActiveXObject("WScript.Shell");
    var saleFilePath = WshShell.ExpandEnvironmentStrings("%SystemDrive%") + "\\RxLoyalty\\Frontol5\\delayed\\sale.log";
    var returnFilePath = WshShell.ExpandEnvironmentStrings("%SystemDrive%") + "\\RxLoyalty\\Frontol5\\delayed\\return.log";

    //˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜
    if (fsoDelay.FileExists(saleFilePath) == false && fsoDelay.FileExists(returnFilePath) == false)
    {
        if (silent == false)
        {
            frontol.actions.showMessage("˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜!");
        }
        return;
    }

    var processingServerAddress = frontol.userValues.get("ServerAddress");

    if (!processingServerAddress)
    {
        frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
        return;
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("License") == null && frontol.userValues.get("License") == "")
    {
        frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
    var tDocumentDtos = [];
    var tReturnDtos = [];

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    if (fsoDelay.FileExists(saleFilePath) == true)
    {
        fDelay = fsoDelay.OpenTextFile(saleFilePath, 1);
        var saleFileText = fDelay.ReadAll();
        fDelay.Close();

        var lineStringSaleArray = [];
        lineStringSaleArray = saleFileText.split(/\r?\n+/);
        for (var i = 0; i < lineStringSaleArray.length; i++)
        {
            tDocumentDtos[i] = JSON.parse(lineStringSaleArray[i]);
        }
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    if (fsoDelay.FileExists(returnFilePath) == true)
    {
        fDelay = fsoDelay.OpenTextFile(returnFilePath, 1);
        var returnFileText = fDelay.ReadAll();
        fDelay.Close();

        var lineStringReturnArray = [];
        lineStringReturnArray = returnFileText.split(/\r?\n+/);
        for (var i = 0; i < lineStringReturnArray.length; i++)
        {
            tReturnDtos[i] = JSON.parse(lineStringReturnArray[i]);
        }
    }

    var result = {
        success: false,
        message: "",
        data: ""
    };

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    var stringToSend = JSON.stringify({
                           LicenseGuid: frontol.userValues.get("License"),
                           DocumentDtos: tDocumentDtos,
                           ReturnDtos: tReturnDtos
                       });

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/delay",
        "POST",
        stringToSend,
        "delay"
    );

    if(result.success)
    {
        if (fsoDelay.FileExists(saleFilePath) == true)
        {
            fsoDelay.DeleteFile(saleFilePath);
        }

        if (fsoDelay.FileExists(returnFilePath) == true)
        {
            fsoDelay.DeleteFile(returnFilePath);
        }
    }
    else
    {
        var errorDelayInformation = result.message + CR_MESSAGE + "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜";

        if (silent == true)
        {
            frontol.actions.wait(errorDelayInformation, 15);
            frontol.actions.cancel();
        }
        else
        {
            frontol.actions.showError(errorDelayInformation);
        }
    }
}

//˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
/* doc - ˜˜˜˜˜˜˜˜
   ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜*/
function GetRegisterDetailDtos(doc)
{
    var registerDetailDtos = [];
    var numberInArray = 0;
    //doc.position.count ˜˜˜˜˜˜˜˜˜˜ ˜˜˜-˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜
    for (doc.position.index = 1; doc.position.index <= doc.position.count; doc.position.index++)
    {
        //˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜
        if (doc.position.storno == 0)
        {
            registerDetailDtos[numberInArray] =
            {
                ProductCode: frontol.userValues.get("WareMarkPrefix") + ((frontol.userValues.get("WareIdIsCode") == "1") ? doc.position.ware.code.toString() : doc.position.ware.mark),
                TotalPrice: Math.round(doc.position.totalSum * 100) / 100,
                PositionId: doc.position.id,
                Properties: GetPositionProperties(doc.position),
                Quantity: doc.position.quantity
            };
            numberInArray++;
        }
    }
    return registerDetailDtos;
}

//˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
/* cardNumber - ˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜*/
function RegisterProcCard(cardNumber, bonusProgramId)
{
    var processingServerAddress = frontol.userValues.get("ServerAddress");

    if (!processingServerAddress)
    {
        frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
        return;
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("License") != "" && frontol.userValues.get("License") != null)
    {
        var license = frontol.userValues.get("License");
    }
    else
    {
        frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    var token = frontol.userValues.get("AccessToken");

    //˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    var isAdditionalCard = false;
    if (frontol.currentDocument.userValues.get("FirstCardNumber") != "")
    {
        isAdditionalCard = true;
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜
    var tRegisterDetailDtos = [];
    tRegisterDetailDtos = GetRegisterDetailDtos(frontol.currentDocument);

    var mainParamsToSend = {
        LicenseGuid: license,
        AccessTokenGuid: token,
        CardCode: cardNumber,
        CardRegisterDateTime: getISODateTimeToString(":", " "),
        IsAdditionalCard: isAdditionalCard,
        AllowFullBonusPay: false,
        RegisterDetailDtos: tRegisterDetailDtos
    };
    // ˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    if(bonusProgramId !== undefined && bonusProgramId !== null) mainParamsToSend.BonusProgramId = bonusProgramId;

    var result = {
        success: false,
        message: "",
        data: ""
    };

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
    var stringToSend = JSON.stringify(mainParamsToSend);

    //˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜
    var switchStatusReg = 0;

    //˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜
    frontol.currentDocument.userValues.set("Delay", 0);

    //˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜
    var newToken;

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/register",
        "POST",
        stringToSend,
        "register"
    );

    if(result.success)
    {
        //˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜
        if("AccessTokenGuid" in result.data && result.data.AccessTokenGuid)
        {
            newToken = result.data.AccessTokenGuid;
            try
            {
                frontol.userValues.set("AccessToken", newToken);
            }
            catch(e)
            {
                frontol.actions.showError("˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜!\n˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜!");
            }
        }
        else
        {
            frontol.actions.showError("˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜!\n˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜!");
        }

        //˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜
        var cardAccountType = result.data.AccountTypeId;

        //˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
        if ("Message" in result.data && result.data.Message)
        {
            frontol.actions.showMessage(result.data.Message);
        }

        if ("PrintFooter" in result.data && result.data.PrintFooter == true)
        {
            frontol.currentDocument.userValues.set("NeedGetFooter", "1");
        }
        else
        {
            frontol.currentDocument.userValues.remove("NeedGetFooter");
        }

        var responseRegJSON = result.data; // ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜-˜˜˜˜

        //˜˜˜˜ ˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜˜˜˜
        if (cardAccountType == 1)
        {
            HandleBonusCard();
        }

        //˜˜˜˜ ˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜˜
        if (cardAccountType == 2)
        {
            HandleDiscountCard();
        }

        //!attn ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜
        //˜˜˜˜ ˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜˜
        if (cardAccountType == 3)
        {
            frontol.actions.showMessage("˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜");
        }

        //˜˜˜˜ ˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜
        if (cardAccountType == 4)
        {
            HandleCouponCard();
        }
    }
    else
    {
        if(result.data == 4)
        {
            //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
            var errorInformation = result.message;

            errorInformation += "˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜!";

            frontol.actions.showError(errorInformation);
        }
        else
        {
            frontol.currentDocument.userValues.set("Delay", 1);
            HandleUnknownCard();

            //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
            var errorInformation = result.message + CR_MESSAGE;

            errorInformation += REQUEST_WILL_BE_SEND_LATER_MESSAGE;

            frontol.actions.showMessage(errorInformation, Icon.Error);
        }
    }

    //˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    function HandleBonusCard()
    {
        //˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜
        if (responseRegJSON.AccumulateOnly == true)
        {
            AddProcPaymentCard(cardNumber, 0, 0, responseRegJSON, frontol.userValues.get("BonusPaymentCode"));
            frontol.actions.showMessage(CARD_ACCUMULATION_ONLY);
        }
        //˜˜˜˜ ˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        else if (responseRegJSON.Balance <= 0)
        {
            AddProcPaymentCard(cardNumber, 0, 0, responseRegJSON, frontol.userValues.get("BonusPaymentCode"));
            frontol.actions.showMessage(INSUFFICIENT_FUNDS + CR_MESSAGE + CARD_ACCUMULATION_ONLY);
        }
        //˜˜˜˜ ˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜
        else
        {
            //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
            var bonusPay = 0;

            //˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
            var paymentsEntered = 0;
            for (frontol.currentDocument.payment.index = 1; frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count; frontol.currentDocument.payment.index++)
            {
                paymentsEntered += frontol.currentDocument.payment.sumInBaseCurrency;
            }

            //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜
            var residueToPay = frontol.currentDocument.totalSum - paymentsEntered;
            if (responseRegJSON.Balance < residueToPay)
            {
                residueToPay = responseRegJSON.Balance;
            }

            //˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
            var flagSuccessBonusPay = false;

            for (var i = 1; i <= 3; i++)
            {
                bonusPay = frontol.actions.inputString("˜˜˜˜˜˜˜˜ " + responseRegJSON.Balance + " ˜˜˜˜˜˜˜. ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜?", residueToPay);
                if (bonusPay == null)
                {
                    break;
                }
                bonusPay = Number(bonusPay.replace(",", "."));

                //˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜
                if (isNaN(bonusPay))
                {
                    frontol.actions.showMessage("˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜!", Icon.Error);
                    continue;
                }

                //˜˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜
                if (bonusPay < 0)
                {
                    frontol.actions.showMessage("˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜!", Icon.Error);
                    continue;
                }

                bonusPay = Math.round(bonusPay * 100) / 100;

                //˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
                if (Number(responseRegJSON.Balance) < bonusPay)
                {
                    frontol.actions.showMessage("˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜!\n" + Number(responseRegJSON.Balance) + " ˜˜˜˜˜˜, ˜˜˜ " + bonusPay, Icon.Error);
                    continue;
                }

                //˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
                if (residueToPay < bonusPay)
                {
                    bonusPay = residueToPay;
                }

                //˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜, ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
                flagSuccessBonusPay = true;
                break;
            }

            //˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜, ˜˜˜˜˜˜ 0
            if (flagSuccessBonusPay == false)
            {
                AddProcPaymentCard(cardNumber, 0, 0, responseRegJSON, frontol.userValues.get("BonusPaymentCode"));
            }
            //˜˜˜˜ ˜˜˜˜ - ˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜
            else
            {
                if (frontol.userValues.get("BonusPaymentCode") != "")
                {
                    AddProcPaymentCard(cardNumber, 0, bonusPay, responseRegJSON, frontol.userValues.get("BonusPaymentCode"));
                    return;
                }
                if (frontol.userValues.get("BonusRateCode") != "" || frontol.userValues.get("BonusRatePositionsCode") != "" )
                {
                    AddProcPaymentCard(cardNumber, 0, bonusPay, responseRegJSON, "discount");
                    return;
                }
                frontol.actions.showMessage("˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜! ˜˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜!", Icon.Error);
            }
        }
    }

    function HandleDiscountCard()
    {
        if (frontol.userValues.get("DiscountPaymentCode") == "")
        {
            if (frontol.currentDocument.userValues.get("FirstCardNumber") == "")
            {
                AddProcDiscountCard(cardNumber, 0, responseRegJSON);
            }
            else
            {
                frontol.actions.showError("˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜.\n˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜!");
            }
        }
        else
        {
            //!attn ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
            frontol.actions.showMessage("˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜");
        }
    }

   //˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    function HandleCouponCard()
    {
        //˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜
        if (responseRegJSON.AccumulateOnly == true)
        {
            frontol.actions.showMessage("˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜!", Icon.Error);
        }
        //˜˜˜˜ ˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        else if (responseRegJSON.Balance <= 0)
        {
            frontol.actions.showMessage("˜˜˜˜˜ ˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜!", Icon.Error);
        }
        //˜˜˜˜ ˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜
        else
        {
            //˜˜˜˜˜˜˜ ˜˜˜˜˜˜, ˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
            var finalCouponSum = GetUsedCouponSum(responseRegJSON.Balance);
            finalCouponSum = Math.round(finalCouponSum * 100) / 100;

            //˜˜˜˜˜˜˜ ˜˜˜˜˜
            //˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
            var paymentsEntered = 0;
            for (frontol.currentDocument.payment.index = 1; frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count; frontol.currentDocument.payment.index++)
            {
                paymentsEntered += frontol.currentDocument.payment.sumInBaseCurrency;
            }
            //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜
            var residueToPay = frontol.currentDocument.totalSum - paymentsEntered;
            if (responseRegJSON.Balance < residueToPay)
            {
                residueToPay = responseRegJSON.Balance;
            }
            var changeFromCoupon = Math.round((responseRegJSON.Balance - residueToPay) * 100) / 100;
            if (changeFromCoupon < 0)
            {
                changeFromCoupon = 0;
            }

            //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
            if (frontol.userValues.get("CouponPaymentCode") != "")
            {
                AddProcPaymentCard(cardNumber, 0, finalCouponSum, responseRegJSON, frontol.userValues.get("CouponPaymentCode"));
                frontol.currentDocument.userValues.set("ChangeFromCoupon", changeFromCoupon);
                return;
            }
            if (frontol.userValues.get("CouponRateCode") != "")
            {
                AddProcPaymentCard(cardNumber, 0, finalCouponSum, responseRegJSON, "discount");
                frontol.currentDocument.userValues.set("ChangeFromCoupon", changeFromCoupon);
                return;
            }
            frontol.actions.showMessage("˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜! ˜˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜!", Icon.Error);
        }

    }

    //˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    function HandleUnknownCard()
    {
        //˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜
        if (frontol.userValues.get("DefaultDiscountValue") == "")
        {
            AddUnknownCard(cardNumber);
        }
        //˜˜˜˜˜, ˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
        else if (frontol.userValues.get("BonusPaymentCode") == "" &&
                    frontol.userValues.get("DiscountPaymentCode") == "" &&
                    frontol.userValues.get("DepositPaymentCode") == "" &&
                    frontol.userValues.get("CouponPaymentCode") == "" &&
                    frontol.userValues.get("BonusRateCode") == "" &&
                    frontol.userValues.get("BonusRatePositionsCode") == "" &&
                    frontol.userValues.get("CouponRateCode") == "")
        {
            if (frontol.currentDocument.userValues.get("FirstCardNumber") == "")
            {
                AddProcDiscountCard(cardNumber, 1);
            }
            else
            {
                frontol.actions.showError("˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜.\n˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜!");
            }
        }
        //˜˜˜˜˜, ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜
        else if (frontol.userValues.get("DefaultDiscountCardPrefix") != "")
        {
            var checkPrefix = "";
            for (var i = 1; i <= frontol.userValues.get("DefaultDiscountCardPrefix").length; i++)
            {
                checkPrefix += cardNumber.charAt(i-1);
            }
            if (frontol.userValues.get("DefaultDiscountCardPrefix") == checkPrefix.toString())
            {
                if (frontol.currentDocument.userValues.get("FirstCardNumber") == "")
                {
                    AddProcDiscountCard(cardNumber, 1);
                }
                else
                {
                    frontol.actions.showError("˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜.\n˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜!");
                }
            }
            else
            {
                AddUnknownCard(cardNumber);
            }
        }
        //˜˜˜˜˜
        else
        {
            if (frontol.actions.showMessage("˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜?", Button.YesNo + Icon.Question) == DialogResult.Yes)
            {
                if (frontol.currentDocument.userValues.get("FirstCardNumber") == "")
                {
                    AddProcDiscountCard(cardNumber, 1);
                }
                else
                {
                    frontol.actions.showError("˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜.\n˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜!");
                }
            }
            else
            {
                AddUnknownCard(cardNumber);
            }
        }
    }

    //˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜ ˜˜˜-˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    function GetUsedCouponSum(couponSum)
    {
        var finalCouponSum = 0;
        var sumForPayment = GetSumForPayment();
        if (couponSum < sumForPayment)
        {
            finalCouponSum = couponSum;
        }
        else
        {
            finalCouponSum = sumForPayment;
        }
        return finalCouponSum;
    }
}

//˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜
/* cardNumber - ˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜
   delayFlag - ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ (0 - ˜˜˜, 1 - ˜˜˜˜˜˜˜˜˜˜)
   sum - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜
   serverResponse - ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜
   paymentType - ˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ "discount" ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜; ˜˜˜ sum = 0 ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜*/
function AddProcPaymentCard(cardNumber, delayFlag, sum, serverResponse, paymentType)
{
    //˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜
    /*  cardBox - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
        item - ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ (˜˜˜˜˜˜)*/
    function AddNewItemToCardBox(cardBox, item)
    {
        if (frontol.currentDocument.userValues.get(cardBox) != "")
        {
            frontol.currentDocument.userValues.set(cardBox, frontol.currentDocument.userValues.get(cardBox) + ";");
        }
        frontol.currentDocument.userValues.set(cardBox, frontol.currentDocument.userValues.get(cardBox) + item);
    }

    //˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜
    if (frontol.currentDocument.userValues.get("FirstCardNumber") == "")
    {
        frontol.currentDocument.userValues.set("FirstCardNumber", cardNumber);
    }

    //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜ ˜ ˜˜˜ ˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜
    if (delayFlag == 0)
    {
        //cardBoxNumbers - ˜˜˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxNumbers", cardNumber);

        //cardBoxAccountTypes - ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxAccountTypes", serverResponse.AccountTypeId);

        //cardBoxTypes - ˜˜˜˜ ˜˜˜˜
        switch(serverResponse.AccountTypeId)
        {
            case 1:
            {
                AddNewItemToCardBox("cardBoxTypes", "˜˜˜˜˜˜˜˜");
                break;
            }
            case 2:
            {
                AddNewItemToCardBox("cardBoxTypes", "˜˜˜˜˜˜˜˜˜˜");
                break;
            }
            case 3:
            {
                AddNewItemToCardBox("cardBoxTypes", "˜˜˜˜˜˜˜˜˜˜");
                break;
            }
            case 4:
            {
                AddNewItemToCardBox("cardBoxTypes", "˜˜˜˜˜");
                break;
            }
            default:
            {
                AddNewItemToCardBox("cardBoxTypes", "-");
                break;
            }
        }

        //cardBoxOwners - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜
        var owner = "";
        if (serverResponse.LastName != null)
        {
            owner += serverResponse.LastName;
        }
        if (serverResponse.FirstName != null)
        {
            if (owner != "")
            {
                owner += " ";
            }
            owner += serverResponse.FirstName;
        }
        if (serverResponse.SurName != null)
        {
            if (owner != "")
            {
                owner += " ";
            }
            owner += serverResponse.SurName;
        }
        //˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜
        if (owner == "")
        {
            owner += "-";
        }
        AddNewItemToCardBox("cardBoxOwners", owner);

        //cardBoxBalances - ˜˜˜˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxBalances", serverResponse.BonusBalance);

        //˜˜˜˜˜˜˜ SumBase ˜˜˜˜˜˜˜
        var sumBase = frontol.currentDocument.totalSum;
        for (frontol.currentDocument.payment.index = 1; frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count; frontol.currentDocument.payment.index++)
        {
            if (frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("BonusPaymentCode")) ||
                frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DiscountPaymentCode")) ||
                frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DepositPaymentCode")) ||
                frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("CouponPaymentCode")))
            {
                sumBase -= frontol.currentDocument.payment.sumInBaseCurrency;
            }
        }
        sumBase = Math.round(sumBase * 100) / 100;

        //cardBoxAvailables - ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
        //˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜, ˜˜˜˜ ˜˜˜˜
        if (serverResponse.AccumulateOnly != true)
        {
            AddNewItemToCardBox("cardBoxAvailables", serverResponse.Balance);
            if (serverResponse.AccountTypeId == 1 && (frontol.userValues.get("BonusRateCode") != "" || frontol.userValues.get("BonusRatePositionsCode") != "") )
            {
                if (frontol.userValues.get("BonusRateOnDocument") == "1")
                {
                    //""+ ˜˜˜ ˜˜˜˜, ˜˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
                    frontol.currentDocument.userValues.set("BonusDiscount", "" + (Number(frontol.currentDocument.userValues.get("BonusDiscount")) + sum));
                }
                else
                {
                    // ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜
                    if( frontol.userValues.get("BonusRatePositionsCode") != "" )
                        makeStringPositionBonusDiscount(serverResponse.BonusBalance, sum, serverResponse.RegisterDetailResponseDtos, "BonusDiscountPositions");
                    else
                        MakeStringPositionDiscount(sum, "BonusDiscount");
                }
            }
            if (serverResponse.AccountTypeId == 4 && frontol.userValues.get("CouponRateCode") != "")
            {
                if (frontol.userValues.get("CouponRateOnDocument") == "1")
                {
                    //""+ ˜˜˜ ˜˜˜˜, ˜˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
                    frontol.currentDocument.userValues.set("CouponDiscount", "" + (Number(frontol.currentDocument.userValues.get("CouponDiscount")) + sum));
                }
                else
                {
                    MakeStringPositionDiscount(sum, "CouponDiscount");
                }
            }
        }
        else
        {
            AddNewItemToCardBox("cardBoxAvailables", 0);
            AddNewItemToCardBox("cardBoxAccumulateOnly", "1");
            if (serverResponse.AccountTypeId == 1 && (frontol.userValues.get("BonusRateCode") != "" || frontol.userValues.get("BonusRatePositionsCode") != "") )
            {
                if (frontol.userValues.get("BonusRateOnDocument") == "1")
                {
                    //""+ ˜˜˜ ˜˜˜˜, ˜˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
                    frontol.currentDocument.userValues.set("BonusDiscount", "" + (Number(frontol.currentDocument.userValues.get("BonusDiscount"))));
                }
                else
                {
                    MakeStringPositionDiscount(0, "BonusDiscount");
                }
            }
            if (serverResponse.AccountTypeId == 4 && frontol.userValues.get("CouponRateCode") != "")
            {
                if (frontol.userValues.get("CouponRateOnDocument") == "1")
                {
                    //""+ ˜˜˜ ˜˜˜˜, ˜˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
                    frontol.currentDocument.userValues.set("CouponDiscount", "" + (Number(frontol.currentDocument.userValues.get("CouponDiscount"))));
                }
                else
                {
                    MakeStringPositionDiscount(0, "CouponDiscount");
                }
            }
        }

        // ˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜
        var specialPriceDiscount = 0; // ˜˜˜˜˜ ˜˜˜˜˜˜˜

        if("RegisterDetailResponseDtos" in serverResponse)
        {
            addCardBoxSpecialDetailDtos(serverResponse.RegisterDetailResponseDtos, serverResponse.AccountTypeId);

            if(frontol.currentDocument.userValues.get("DiscountPositions"))
            {
                frontol.currentDocument.recalculateAllDiscounts();
                specialPriceDiscount = GetSumDiscountRate();
            }
        }

        if ((sum > 0) &&((serverResponse.AccountTypeId == 1 && (frontol.userValues.get("BonusRateCode") != "" || frontol.userValues.get("BonusRatePositionsCode") != "") ) || (serverResponse.AccountTypeId == 4 && frontol.userValues.get("CouponRateCode") != "")))
        {
            //˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
            var discountBeforeRecalc = GetSumBonusOrCouponRate();

            frontol.currentDocument.recalculateAllDiscounts();

            //˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
            var discountAfterRecalc = GetSumBonusOrCouponRate();

            //˜˜˜˜˜˜˜ Discount
            sum = discountAfterRecalc - discountBeforeRecalc;

        }

        //cardBoxDocDiscDtos - ˜˜˜˜˜˜ DocumentDiscountDtos, ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ &
        //AccountId ˜˜˜ ˜˜˜˜˜
        //CardCode ˜˜˜ ˜˜˜˜˜
        //˜˜˜˜˜˜˜ SumDiscounted
        var sumDiscounted = sumBase - sum;

        sumDiscounted = Math.round(sumDiscounted * 100) / 100;
        //Discount ˜˜˜ ˜˜˜˜˜
        //˜˜˜˜˜˜˜ Percent
        var percent = 0;
        if (sumBase > 0)
        {
            percent =  Math.round((Number(sum + specialPriceDiscount)  * 100 / sumBase) * 100) / 100;
        }
        try
        {
            //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
            if (sum > 0 && paymentType != "discount")
            {
                try
                {
                    if (IsExtraEnabled("ExtraTaxKyrgyzstan"))
                    {
                        if (sum < GetSumForPayment() && frontol.currentDocument.userValues.get("IsDecreasedPricesForTax") == "")
                        {
                            if (frontol.actions.showMessage("˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜?", Button.YesNo + Icon.Question) == DialogResult.Yes)
                            {
                                frontol.currentDocument.userValues.set("NeedCalc", "1");
                                CalculateSalesTaxKirg_ExtraTaxKyrgyzstan();
                            }
                        }
                    }
                }
                catch(e)
                {
                    frontol.actions.showMessage("˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜!" + "\n" + e.name + "\n" + e.message, Icon.Error);
                }

                frontol.currentDocument.addPayment(Number(paymentType), sum);
            }
            AddNewItemToCardBox(
                "cardBoxDocDiscDtos",
                serverResponse.AccountId + "&" +
                cardNumber + "&" +
                sumBase + "&" +
                Number(sumDiscounted - specialPriceDiscount) + "&" +
                Number(sum + specialPriceDiscount)+ "&" +
                percent
            );
        }
        catch(e)
        {
            frontol.actions.showMessage("˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜!" + "\n" + e.name + "\n" + e.message, Icon.Error);
        }
    }
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜ ˜˜˜
    else
    {
        AddUnknownCard(cardNumber);
    }

    //˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜
    function GetSumBonusOrCouponRate()
    {
        var discount = 0;

        //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜
        if (serverResponse.AccountTypeId == 1 && frontol.userValues.get("BonusRateOnDocument") == "1" || serverResponse.AccountTypeId == 4 && frontol.userValues.get("CouponRateOnDocument") == "1")
        {
            for (frontol.currentDocument.discountDoc.index = 1; frontol.currentDocument.discountDoc.index <= frontol.currentDocument.discountDoc.count; frontol.currentDocument.discountDoc.index++)
            {
                if (serverResponse.AccountTypeId == 1 && frontol.currentDocument.discountDoc.marketingEvent.code == Number(frontol.userValues.get("BonusRateCode")) || serverResponse.AccountTypeId == 4 && frontol.currentDocument.discountDoc.marketingEvent.code == Number(frontol.userValues.get("CouponRateCode")))
                {
                    discount += frontol.currentDocument.discountDoc.sum;
                }
            }
        }
        //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜
        else
        {
            for (frontol.currentDocument.position.index = 1; frontol.currentDocument.position.index <= frontol.currentDocument.position.count; frontol.currentDocument.position.index++)
            {
                if (frontol.currentDocument.position.storno == 0)
                {
                    for (frontol.currentDocument.position.discountPos.index = 1; frontol.currentDocument.position.discountPos.index <= frontol.currentDocument.position.discountPos.count; frontol.currentDocument.position.discountPos.index++)
                    {
                        if (
                            serverResponse.AccountTypeId == 1 &&
                                ( frontol.currentDocument.position.discountPos.marketingEvent.code == Number(frontol.userValues.get("BonusRateCode")) ||
                                  frontol.currentDocument.position.discountPos.marketingEvent.code == Number(frontol.userValues.get("BonusRatePositionsCode")) ) ||
                            serverResponse.AccountTypeId == 4 && frontol.currentDocument.position.discountPos.marketingEvent.code == Number(frontol.userValues.get("CouponRateCode")))
                        {
                            discount += frontol.currentDocument.position.discountPos.sum;
                        }
                    }
                }
            }
        }

        return discount;
    }
}

//˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
/* cardNumber - ˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜
   delayFlag - ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ (0 - ˜˜˜, 1 - ˜˜˜˜˜˜˜˜˜˜)
   serverResponse - ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜*/
function AddProcDiscountCard(cardNumber, delayFlag, serverResponse)
{
    //˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜
    /*  cardBox - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
        item - ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ (˜˜˜˜˜˜)*/
    function AddNewItemToCardBox(cardBox, item)
    {
        if (frontol.currentDocument.userValues.get(cardBox) != "")
        {
            frontol.currentDocument.userValues.set(cardBox, frontol.currentDocument.userValues.get(cardBox) + ";");
        }
        frontol.currentDocument.userValues.set(cardBox, frontol.currentDocument.userValues.get(cardBox) + item);
    }

    //˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜
    if (frontol.currentDocument.userValues.get("FirstCardNumber") == "")
    {
        frontol.currentDocument.userValues.set("FirstCardNumber", cardNumber);
    }

    //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜ ˜ ˜˜˜ ˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜
    if (delayFlag == 0)
    {
        //cardBoxNumbers - ˜˜˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxNumbers", cardNumber);

        //cardBoxAccountTypes - ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxAccountTypes", serverResponse.AccountTypeId);

        //cardBoxTypes - ˜˜˜˜ ˜˜˜˜
        switch(serverResponse.AccountTypeId)
        {
            case 2:
            {
                AddNewItemToCardBox("cardBoxTypes", "˜˜˜˜˜˜˜˜˜˜");
                break;
            }
            default:
            {
                AddNewItemToCardBox("cardBoxTypes", "-");
                break;
            }
        }

        //cardBoxOwners - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜
        var owner = "";
        if (serverResponse.LastName != null)
        {
            owner += serverResponse.LastName;
        }
        if (serverResponse.FirstName != null)
        {
            if (owner != "")
            {
                owner += " ";
            }
            owner += serverResponse.FirstName;
        }
        if (serverResponse.SurName != null)
        {
            if (owner != "")
            {
                owner += " ";
            }
            owner += serverResponse.SurName;
        }
        //˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜
        if (owner == "")
        {
            owner += "-";
        }
        AddNewItemToCardBox("cardBoxOwners", owner);

        //cardBoxBalances - ˜˜˜˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxBalances", serverResponse.Balance);

        //˜˜˜˜˜˜˜ SumBase ˜˜˜˜˜˜˜, ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        var sumBase = frontol.currentDocument.totalSum;

        //cardBoxAvailables - ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
        //˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
        if (serverResponse.AccumulateOnly != true)
        {
            AddNewItemToCardBox("cardBoxAvailables", serverResponse.Balance);
            if (serverResponse.UsePercent == true)
            {
                //""+ ˜˜˜ ˜˜˜˜, ˜˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
                frontol.currentDocument.userValues.set("Discount", "" + serverResponse.Percent);
            }
            else
            {
                //""+ ˜˜˜ ˜˜˜˜, ˜˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
                frontol.currentDocument.userValues.set("Discount", "" + serverResponse.Balance);
            }
            SetStringPositionDiscountFromResponse(serverResponse.RegisterDetailResponseDtos, "DiscountPositions");
        }
        else
        {
            AddNewItemToCardBox("cardBoxAvailables", 0);
        }

        //˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        frontol.currentDocument.recalculateAllDiscounts();

        //cardBoxDocDiscDtos - ˜˜˜˜˜˜ DocumentDiscountDtos, ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ &
        //˜˜˜˜˜˜˜ Discount
        var discount = GetSumDiscountRate();

        //AccountId ˜˜˜ ˜˜˜˜˜
        //CardCode ˜˜˜ ˜˜˜˜˜
        //SumBase ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
        //˜˜˜˜˜˜˜ SumDiscounted
        var sumDiscounted = sumBase - discount;
        //˜˜˜˜˜˜˜ Percent
        var percent = 0;
        if (sumBase > 0)
        {
            percent = discount * 100 / sumBase;
        }
        //˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜
        sumBase = Math.round(sumBase * 100) / 100;
        discount = Math.round(discount * 100) / 100;
        sumDiscounted = Math.round(sumDiscounted * 100) / 100;
        percent = Math.round(percent * 100) / 100;

        //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜
        AddNewItemToCardBox(
            "cardBoxDocDiscDtos",
            serverResponse.AccountId + "&" + cardNumber + "&" + sumBase + "&" + sumDiscounted + "&" + discount + "&" + percent
        );

        //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜ ˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
        frontol.currentDocument.userValues.set("DiscountCardNumber", cardNumber);
    }
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜ ˜˜˜
    else
    {
        //cardBoxNumbers - ˜˜˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxNumbers", cardNumber);
        //cardBoxAccountTypes - ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxAccountTypes", 0);
        //cardBoxTypes - ˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxTypes", "-");
        //cardBoxOwners - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜
        AddNewItemToCardBox("cardBoxOwners", "-");
        //cardBoxBalances - ˜˜˜˜˜˜˜ ˜˜˜˜
        AddNewItemToCardBox("cardBoxBalances", 0);
        //cardBoxAvailables - ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
        AddNewItemToCardBox("cardBoxAvailables", 0);

        //˜˜˜˜˜˜˜ SumBase ˜˜˜˜˜˜˜, ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        var sumBase = frontol.currentDocument.totalSum;

        //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜
        if (frontol.userValues.get("DefaultDiscountValue") != "")
        {
            frontol.currentDocument.userValues.set("Discount", Number(frontol.userValues.get("DefaultDiscountValue").replace(",",".")));
            frontol.currentDocument.userValues.set("Discount", frontol.currentDocument.userValues.get("Discount").replace(",","."));
            frontol.currentDocument.userValues.set("Discount", Number(frontol.currentDocument.userValues.get("DiscountPositions").replace(",",".")));
            frontol.currentDocument.userValues.set("Discount", "df" + frontol.currentDocument.userValues.get("DiscountPositions").replace(",","."));
        }
        else
        {
            frontol.currentDocument.userValues.set("Discount", 0);
        }

        //˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        frontol.currentDocument.recalculateAllDiscounts();

        //cardBoxDocDiscDtos - ˜˜˜˜˜˜ DocumentDiscountDtos, ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ &
        //˜˜˜˜˜˜˜ Discount
        var discount = GetSumDiscountRate();

        //AccountId = 0
        //CardCode ˜˜˜ ˜˜˜˜˜
        //SumBase ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
        //˜˜˜˜˜˜˜ SumDiscounted
        var sumDiscounted = sumBase - discount;
        //˜˜˜˜˜˜˜ Percent
        var percent = 0;
        if (sumBase > 0)
        {
            percent = discount * 100 / sumBase;
        }
        //˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜
        sumBase = Math.round(sumBase * 100) / 100;
        discount = Math.round(discount * 100) / 100;
        sumDiscounted = Math.round(sumDiscounted * 100) / 100;
        percent = Math.round(percent * 100) / 100;

        //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜
        AddNewItemToCardBox("cardBoxDocDiscDtos", "0" + "&" + cardNumber + "&" + sumBase + "&" + sumDiscounted + "&" + discount + "&" + percent);

        //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜ ˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
        frontol.currentDocument.userValues.set("DiscountCardNumber", cardNumber);
    }
}

//˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
/* cardNumber - ˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜*/
function AddUnknownCard(cardNumber)
{
    //˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜
    /*  cardBox - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
        item - ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ (˜˜˜˜˜˜)*/
    function AddNewItemToCardBox(cardBox, item)
    {
        if (frontol.currentDocument.userValues.get(cardBox) != "")
        {
            frontol.currentDocument.userValues.set(cardBox, frontol.currentDocument.userValues.get(cardBox) + ";");
        }
        frontol.currentDocument.userValues.set(cardBox, frontol.currentDocument.userValues.get(cardBox) + item);
    }

    //˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜
    if (frontol.currentDocument.userValues.get("FirstCardNumber") == "")
    {
        frontol.currentDocument.userValues.set("FirstCardNumber", cardNumber);
    }

    //cardBoxNumbers - ˜˜˜˜˜˜ ˜˜˜˜
    AddNewItemToCardBox("cardBoxNumbers", cardNumber);
    //cardBoxAccountTypes - ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜
    AddNewItemToCardBox("cardBoxAccountTypes", 0);
    //cardBoxTypes - ˜˜˜˜ ˜˜˜˜
    AddNewItemToCardBox("cardBoxTypes", "-");
    //cardBoxOwners - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    AddNewItemToCardBox("cardBoxOwners", "-");
    //cardBoxBalances - ˜˜˜˜˜˜˜ ˜˜˜˜
    AddNewItemToCardBox("cardBoxBalances", 0);
    //cardBoxAvailables - ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    AddNewItemToCardBox("cardBoxAvailables", 0);
    //cardBoxDocDiscDtos - ˜˜˜˜˜˜ DocumentDiscountDtos, ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ &
    //!attn - ˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜, ˜˜˜˜˜˜ SumBase ˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    var sumBase = frontol.currentDocument.totalSum;
    for (frontol.currentDocument.payment.index = 1; frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count; frontol.currentDocument.payment.index++)
    {
        if (frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("BonusPaymentCode")) ||
            frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DiscountPaymentCode")) ||
            frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DepositPaymentCode")) ||
            frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("CouponPaymentCode")))
        {
            sumBase -= frontol.currentDocument.payment.sumInBaseCurrency;
        }
    }
    sumBase = Math.round(sumBase * 100) / 100;
    AddNewItemToCardBox("cardBoxDocDiscDtos", "0" + "&" + cardNumber + "&" + sumBase+ "&" + sumBase + "&" + "0" + "&" + "0");

    if (IsExtraEnabled("ExtraTaxKyrgyzstan"))
    {
        frontol.currentDocument.recalculateAllDiscounts();
    }
}
//˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
function GetSumDiscountRate()
{
    var discount = 0;
    //˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜
    for (
        frontol.currentDocument.discountDoc.index = 1;
        frontol.currentDocument.discountDoc.index <= frontol.currentDocument.discountDoc.count;
        frontol.currentDocument.discountDoc.index++
    )
    {
        if (frontol.currentDocument.discountDoc.marketingEvent.name == "RxDiscount")
        {
            discount += frontol.currentDocument.discountDoc.sum;
        }
    }

    //˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜
    for (
        frontol.currentDocument.position.index = 1;
        frontol.currentDocument.position.index <= frontol.currentDocument.position.count;
        frontol.currentDocument.position.index++
    )
    {
        if (frontol.currentDocument.position.storno == 0)
        {
            for (frontol.currentDocument.position.discountPos.index = 1;
                frontol.currentDocument.position.discountPos.index <= frontol.currentDocument.position.discountPos.count;
                frontol.currentDocument.position.discountPos.index++
            )
            {
                if (
                    frontol.currentDocument.position.discountPos.marketingEvent.name == "RxPositions" ||
                    frontol.currentDocument.position.discountPos.marketingEvent.name == "RxDiscount"
                )
                {
                    discount += frontol.currentDocument.position.discountPos.sum;
                }
            }
        }
    }

    return discount;
}
//˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜
function GetCardInfo()
{
    var processingServerAddress = frontol.userValues.get("ServerAddress");

    if (!processingServerAddress)
    {
        frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
        return;
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("License") != "" && frontol.userValues.get("License") != null)
    {
        var license = frontol.userValues.get("License");
    }
    else
    {
        frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜
    var cardNumber = frontol.actions.inputString(INPUT_CARD_CODE_MESSAGE, "");

    if (!cardNumber)
    {
        frontol.actions.showError(CARD_CODE_EMPTY_MESSAGE);
    }

    cardNumber = CorrectCardNumber(cardNumber);

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
    var stringToSend = JSON.stringify({
                           LicenseGuid: license,
                           CardCode: cardNumber
                       });

    var result = {
        success: false,
        message: "",
        data: ""
    };

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/info",
        "POST",
        stringToSend,
        "info"
    );

    if(result.success)
    {
        var messageArray = [];

        //˜˜˜˜˜˜˜˜
        var owner = "";
        if ("FirstName" in result.data && result.data.FirstName)
        {
            owner += result.data.FirstName + " ";
        }
        if ("SurName" in result.data && result.data.SurName)
        {
            owner += result.data.SurName + " ";
        }
        if ("LastName" in result.data && result.data.LastName)
        {
            owner += result.data.LastName;
        }

        if (owner)
        {
            var k = messageArray.length;
            messageArray[k] = owner;
        }

        //˜˜˜ ˜˜˜˜˜
        var cardType = "";
        if("AccountType" in result.data)
        {
            switch(result.data.AccountType)
            {
                case 1:
                {
                    cardType += "˜˜˜˜˜˜˜˜";
                    break;
                }
                case 2:
                {
                    cardType += "˜˜˜˜˜˜˜˜˜˜";
                    break;
                }
                case 3:
                {
                    cardType += "˜˜˜˜˜˜˜˜˜˜";
                    break;
                }
                case 4:
                {
                    cardType += "˜˜˜˜˜";
                    break;
                }
                default:
                {
                    cardType += "˜˜˜˜˜˜˜˜˜˜˜˜";
                    break;
                }
            }
        }

        if (cardType)
        {
            var k = messageArray.length;
            messageArray[k] = "˜˜˜ ˜˜˜˜˜: " + cardType;
        }

        //˜˜˜˜ ˜˜˜ ˜˜˜˜˜ - ˜˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜
        if ("AccountType" in result.data && (result.data.AccountType == 1 || result.data.AccountType == 3 || result.data.AccountType == 4))
        {
            //˜˜˜˜˜˜
            var balance = "Balance" in result.data ? result.data.Balance : 0;
            var k = messageArray.length;
            messageArray[k] = "˜˜˜˜˜˜: " + balance;

            //˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜
            if ("AccumulateOnly" in result.data && result.data.AccumulateOnly == true)
            {
                var k = messageArray.length;
                messageArray[k] = "˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜";
            }
        }

        //˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜
        if ("Blocked" in result.data && result.data.Blocked == true)
        {
            var k = messageArray.length;
            messageArray[k] = "˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜!";
        }

        //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
        var message = messageArray.join("\n");

        //˜˜˜˜˜
        if (frontol.userValues.get("ShowCardInfo") == "1")
        {
            frontol.actions.showMessage(message);
        }
    }
    else
    {
        frontol.actions.showMessage(result.message, Icon.Error);
        return;
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
function GetSettingsArray()
{
    return [
    //˜˜˜ ˜˜˜˜˜˜˜˜
    "SubjectCode",
    //˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜
    "TimeoutQuery",
    //˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    "BonusPaymentCode",
    // ˜˜˜˜ ˜˜˜˜˜˜
    "BonusScale",
    //˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    "DiscountPaymentCode",
    //˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    "DepositPaymentCode",
    //˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    "CouponPaymentCode",
    //˜˜˜˜˜˜˜ ˜˜˜˜
    "CardPrefix",
    //˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    "CardRangeStart",
    //˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    "CardRangeEnd",
    //˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜
    "ShowCardsMoves",
    //˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜
    "ShowCardsMovesTimeout",
    //˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜
    "PrintCardsMoves",
    //˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜,
    "PrintCouponCardsMoves",
    //˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜
    "ShowCardInfo",
    //˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜
    "PrintCardInfo",
    //˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    "WareMarkPrefix",
    //˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜ - ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜ 20180608
    "DiscountRateCode",
    //˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜
    "BonusRateCode",
    //˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜
    "BonusRatePositionsCode",
    //˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜
    "BonusRateOnDocument",
    //˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜
    "CouponRateCode",
    //˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜
    "CouponRateOnDocument",
    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜
    "DefaultDiscountValue",
    //˜˜˜˜˜˜˜ ˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜
    "DefaultDiscountCardPrefix",
    //˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ (˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜˜)
    "ForbidReturnWithPayments",
    //˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    "StornoProcPayments",
    //˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    "SumToCreateCard",
    //˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    "NameWareGroupToCreateCard",
    //˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ - ˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    "WareIdIsCode",
    //˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜
    "OnlyOneCard",
    //˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜
    "PropertiesSettings",
    //˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    "NoDelay",
    // ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ (˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜)
    "NotRoundDiscount",
    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ (regex)
    "RemoveCardNumberRegex",
    //˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    "DontWorkWithStandartCards",
    // ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜˜˜
    "SaleBeforePrintCheck",
    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜
    "RxLoyaltyStatistics",
    // ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜
    "rxIsRUD",
    // UID ˜˜˜˜˜˜˜
    "ClientUUID",
    // ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜
    "SpecialDiscountCardPrefix",
    //
    //˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    //˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜
    "ExtraTaxKyrgyzstan",
    //˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜: ˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ \ ˜˜˜˜˜˜ (˜˜˜˜˜) + ˜˜˜˜˜ FuncAct_ExtraTaxKyrgyzstan
    "ExtraTaxKyrgyzstanKeyMacros"
    ];
}

//˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜
function requestCreateCard()
{
    var sumTotal = 0;
    var sumDiscounted = 0;
    if (frontol.userValues.get("NameWareGroupToCreateCard") == "")
    {
        sumTotal = frontol.currentDocument.sum;
        sumDiscounted = frontol.currentDocument.totalSum;
    }
    else
    {
        for (frontol.currentDocument.position.index = 1; frontol.currentDocument.position.index <= frontol.currentDocument.position.count; frontol.currentDocument.position.index++)
        {
            //˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜
            if (frontol.currentDocument.position.storno == 0)
            {
                var wareInGroupFlag = false;

                for (frontol.currentDocument.position.ware.parent.index = 1; frontol.currentDocument.position.ware.parent.index <= frontol.currentDocument.position.ware.parent.count; frontol.currentDocument.position.ware.parent.index++)
                {
                    if (frontol.currentDocument.position.ware.parent.name == frontol.userValues.get("NameWareGroupToCreateCard"))
                    {
                        wareInGroupFlag = true;
                        break;
                    }
                }

                if (wareInGroupFlag == true)
                {
                    sumTotal += frontol.currentDocument.position.totalSum;
                    sumDiscounted += frontol.currentDocument.position.sumWithDiscs;
                }
            }
        }
    }

    if (sumTotal < Number(frontol.userValues.get("SumToCreateCard")))
    {
        return;
    }

    var processingServerAddress = frontol.userValues.get("ServerAddress");

    if (!processingServerAddress)
    {
        frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
        return;
    }
    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("License") != "" && frontol.userValues.get("License") != null)
    {
        var license = frontol.userValues.get("License");
    }
    else
    {
        frontol.actions.showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜
    var token = frontol.userValues.get("AccessToken");

    var dateTimeNow = getISODateTimeToString(":");

    var result = {
        success: false,
        message: "",
        data: ""
    };

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
    var stringToSend = JSON.stringify({
                           LicenseGuid: license,
                           AccessTokenGuid: token,
                           DateTimeNow: dateTimeNow,
                           SumTotal: Math.round(sumTotal * 100) / 100,
                           SumDiscounted: Math.round(sumDiscounted * 100) / 100
                       });

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/GetCoupons",
        "POST",
        stringToSend,
        "coupon_get"
    );

    if(result.success)
    {
        try
        {
            for (var i = 0; i < result.data.length; i++)
            {
                if (i != 0)
                {
                    frontol.currentDocument.userValues.set("PrintNewCardHeaders", frontol.currentDocument.userValues.get("PrintNewCardHeaders") + "&&");
                    frontol.currentDocument.userValues.set("PrintNewCardCodes", frontol.currentDocument.userValues.get("PrintNewCardCodes") + "&&");
                    frontol.currentDocument.userValues.set("PrintNewCardFooters", frontol.currentDocument.userValues.get("PrintNewCardFooters") + "&&");
                }
                frontol.currentDocument.userValues.set("PrintNewCardHeaders", frontol.currentDocument.userValues.get("PrintNewCardHeaders") + result.data[i].Header);
                frontol.currentDocument.userValues.set("PrintNewCardCodes", frontol.currentDocument.userValues.get("PrintNewCardCodes") + result.data[i].CardCode);
                frontol.currentDocument.userValues.set("PrintNewCardFooters", frontol.currentDocument.userValues.get("PrintNewCardFooters") + result.data[i].Footer);
            }

        }
        catch(e)
        {
            frontol.actions.showMessage("˜˜˜˜˜˜ "+ e.name + ":" + e.message, Icon.Error);
        }
    }
    else
    {
        frontol.actions.showMessage(result.message, Icon.Error);
    }
}

//˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
/* responseText - ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜
˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜, ˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜, ˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜
*/
function DecryptServerError(responseText)
{
    if (responseText == null || responseText == undefined || responseText == "")
    {
        return "";
    }

    try
    {
        var errorObj = JSON.parse(responseText);

        switch (errorObj.Message)
        {
            case "CardCodeEmpty":
            {
                return CARD_CODE_EMPTY_MESSAGE + CR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE;
            }
            case "CardPatternNotValid":
            {
                return CARD_PATTERN_NOT_VALID_MESSAGE;
            }
            case "CardPatternsNotExist":
            {
                return CARD_PATTERN_NOT_EXIST_MESSAGE;
            }
            case "CardBlocked":
            {
                return CARD_BLOCKED_MESSAGE ;
            }
            case "CardAlreadyRegistered":
            {
                return CARD_ALREADY_REGISTERED_MESSAGE;
            }
            case "CardSynchronousRegistration":
            {
                return CARD_SYNCHRONOUS_REGISTRATION_MESSAGE;
            }
            case "DocumentEmpty":
            {
                return DOCUMENT_EMPTY_MESSAGE;
            }
            case "CardNotFound":
            {
                return CARD_NOT_FOUND_MESSAGE;
            }
            case "Unauthorized":
            {
                return UNAUTHORIZED_MESSAGE;
            }
            case "AccessTokenNotFound":
            {
                return TOKEN_NOT_FOUND_MESSAGE;
            }
            case "LicenseTokenNotFound":
            {
                return LICENSE_NOT_FOUND_MESSAGE;
            }
            case "LicenseIsNotActive":
            {
                return LICENSE_NOT_ACTIVE_MESSAGE;
            }
            case "SubjectNotFound":
            {
                return SUBJECT_NOT_FOUND_MESSAGE;
            }
            case "DocumentTypeNotFound":
            {
                return DOCUMENT_TYPE_NOT_FOUND_MESSAGE;
            }
            case "DocumentTypeIncorrect":
            {
                return DOCUMENT_TYPE_INCORRECT_MESSAGE;
            }
            case "DocumentDetailsIsEmpty":
            {
                return DOCUMENT_DETAILS_EMPTY_MESSAGE;
            }
            case "DocumentDiscountsIsEmpty":
            {
                return DOCUMENT_DISCOUNTS_EMPTY_MESSAGE;
            }
            case "ParentDocumentNotFound":
            {
                return PARENT_DOCUMENT_NOT_FOUND_MESSAGE;
            }
            case "DocumentAlreadyReturned":
            {
                return DOCUMENT_ALREADY_RETURNED_MESSAGE;
            }
            case "CalculationAlgorithmNotFound":
            {
                return CALCULATION_ALGORITHM_NOT_FOUND_MESSAGE;
            }
            case "InvalidCodeToStartGenerate":
            {
                return INVALID_CODE_TO_START_GENERATE;
            }
            case "NoCashParamsForLicense":
            {
                return NO_CASH_PARAMS_FOR_LICENSE_MESSAGE;
            }
            case "CardExpired":
            {
                return CARD_EXPIRED_MESSAGE;
            }
            default:
            {
                return responseText;
            }
        }
    }
    catch(e)
    {
        return responseText;
    }
}

//˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
function forbidReturnDocWithProcPayments()
{
    //˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜ ˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜-˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    if (frontol.currentDocument.type.code == REFUND_DOCUMENT_TYPE_CODE && frontol.currentDocument.baseDocument.number != null && frontol.currentDocument.baseDocument.number != "")
    {
        var forbiddenPaymentsString = frontol.userValues.get("ForbidReturnWithPayments");
        var forbiddenPaymentsArray = forbiddenPaymentsString.split(",");

        for (frontol.currentDocument.baseDocument.payment.index = 1; frontol.currentDocument.baseDocument.payment.index <= frontol.currentDocument.baseDocument.payment.count; frontol.currentDocument.baseDocument.payment.index++)
        {
            for (var j = 0; j <= forbiddenPaymentsArray.length; j++)
            {
                if (frontol.currentDocument.baseDocument.payment.type.code == Number(forbiddenPaymentsArray[j]))
                {
                    frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ " + frontol.currentDocument.baseDocument.payment.type.text + " ˜˜˜˜˜˜˜˜˜!");
                }
            }
        }
    }
}

function GetCorrectServerAddress(serverAddress)
{
    while (serverAddress.slice(-1) == "/")
    {
        serverAddress = serverAddress.slice(0, -1);
    }

    var arr = serverAddress.split("://");
    if (arr.length == 1)
        serverAddress = "http://" + serverAddress;

    return serverAddress;
}

//˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
/* settingsArray - ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜*/
function ClearGlobal(settingsArray)
{
    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    for (i = 0; i < settingsArray.length; i++)
    {
        frontol.userValues.remove(settingsArray[i]);
    }
}

//˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
/* param - ˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
   header - ˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜
   ˜˜˜˜˜˜˜˜˜˜ true ˜˜˜ ˜˜˜˜˜˜, false ˜˜˜  ˜˜˜˜˜˜ ˜˜˜˜˜*/
function EnterGlobalParameter(param, header)
{
    var headerString = "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜: " + header;

    var newValue = frontol.actions.inputString(headerString, frontol.userValues.get(param));
    if (newValue == null)
        return false;

    frontol.userValues.set(param, newValue);
        return true;
}

//˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜
/* sum - ˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜
   userValue - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜*/
function MakeStringPositionDiscount(sum, userValue)
{
    var discountSum = sum;
    var arrResiduePos = [];

    for (frontol.currentDocument.position.index = 1; frontol.currentDocument.position.index <= frontol.currentDocument.position.count; frontol.currentDocument.position.index++)
    {
        if (frontol.currentDocument.position.storno == 0)
        {
            var obj = {};
            obj.PosID = frontol.currentDocument.position.id;
            residueToDiscPosition = frontol.currentDocument.position.totalSum;
            obj.Disc = (residueToDiscPosition < discountSum) ? residueToDiscPosition : discountSum;
            discountSum -= obj.Disc;
            obj.Disc += GetSumRatePositionFromUserValue(frontol.currentDocument.position, userValue);
            arrResiduePos.push(obj);
        }
    }

    var stringBonusDiscount = "";
    for (var i = 0; i < arrResiduePos.length; i++)
    {
        stringBonusDiscount += "" + arrResiduePos[i].PosID + "&" + Math.round(arrResiduePos[i].Disc * 100) / 100;
        if (i != arrResiduePos.length-1)
        {
            stringBonusDiscount += ";";
        }
    }

    frontol.currentDocument.userValues.set(userValue, stringBonusDiscount);
}

//˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
/* registerDetailResponseDtos - ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
   userValue - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜*/
function SetStringPositionDiscountFromResponse(registerDetailResponseDtos, userValue)
{
    var stringBonusDiscount = "";
    for (var i = 0; i < registerDetailResponseDtos.length; i++)
    {
        stringBonusDiscount += "" + registerDetailResponseDtos[i].PositionId + "&";

        if(frontol.userValues.get("NotRoundDiscount") == "1")
            stringBonusDiscount += registerDetailResponseDtos[i].Discount;
        else
            stringBonusDiscount += Math.round(registerDetailResponseDtos[i].Discount * 100) / 100;

        if (i != registerDetailResponseDtos.length-1)
        {
            stringBonusDiscount += ";";
        }
    }

    frontol.currentDocument.userValues.set(userValue, stringBonusDiscount);
}
//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
function addCardBoxSpecialDetailDto(registerDetailResponseDtos, accountTypeId)
{
    for (var i = 0; i < registerDetailResponseDtos.length; i++)
    {
        var registerDetailResponseDto = registerDetailResponseDtos[i];

        if(
            ("UsePercent" in registerDetailResponseDto) &&
            registerDetailResponseDto.UsePercent.toString() &&
            registerDetailResponseDto.UsePercent.toString().length > 0 &&
            registerDetailResponseDto.UsePercent == true &&

            ("SpecialPrice" in registerDetailResponseDto) &&
            registerDetailResponseDto.SpecialPrice.toString() &&
            registerDetailResponseDto.SpecialPrice.toString().length > 0 &&
            isNaN(registerDetailResponseDto.SpecialPrice) == false &&
            Number(registerDetailResponseDto.SpecialPrice) > 0 &&

            ("SpecialPriceQuantity" in registerDetailResponseDto) &&
            registerDetailResponseDto.SpecialPriceQuantity.toString() &&
            registerDetailResponseDto.SpecialPriceQuantity.toString().length > 0 &&
            isNaN(registerDetailResponseDto.SpecialPriceQuantity) == false &&
            Number(registerDetailResponseDto.SpecialPriceQuantity) > 0
        )
        {   // ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
            var cardBoxSpecialDetailDtos = frontol.currentDocument.userValues.get("cardBoxSpecialDetailDtos");

            if(cardBoxSpecialDetailDtos.length > 0)
            {
                cardBoxSpecialDetailDtos += ";";
            }

            cardBoxSpecialDetailDtos +=
                registerDetailResponseDto.PositionId + "&" +
                registerDetailResponseDto.SpecialPrice.toString() + "&" +
                registerDetailResponseDto.SpecialPriceQuantity.toString();

            frontol.currentDocument.userValues.set("cardBoxSpecialDetailDtos", cardBoxSpecialDetailDtos);

            // ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜
            if(accountTypeId == 1)
            {
                var stringDiscountPositions = frontol.currentDocument.userValues.get("DiscountPositions");

                if(stringDiscountPositions.length > 0)
                {
                    stringDiscountPositions += ";";
                }

                stringDiscountPositions += "" + registerDetailResponseDto.PositionId + "&" + registerDetailResponseDto.Discount.toString();

                frontol.currentDocument.userValues.set("DiscountPositions", stringDiscountPositions);
            }
        }
    }
}
//˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
/*  balance - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
    sum - ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    registerDetailResponseDtos - ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    userValue - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜*/
function makeStringPositionBonusDiscount(balance, sum, registerDetailResponseDtos, userValue)
{
    if(
        !(balance > 0) ||
        !(sum > 0) ||
        registerDetailResponseDtos == "undefined" ||
        !registerDetailResponseDtos ||
        !(registerDetailResponseDtos.length > 0) ||
        userValue == ""
    )
    {
        return;
    }

    var stringBonusDiscount = "";

    try
    {
        var allPositionsDiscount = 0;

        for (var i = 0; i < registerDetailResponseDtos.length; i++)
        {
            allPositionsDiscount += registerDetailResponseDtos[i].Discount;
        }

        for (var i = 0; i < registerDetailResponseDtos.length; i++)
        {
            stringBonusDiscount +=
                "" + registerDetailResponseDtos[i].PositionId + "&" +
                Math.round(registerDetailResponseDtos[i].Discount * 100 * sum / allPositionsDiscount ) / 100;

            if (i != registerDetailResponseDtos.length-1)
            {
                stringBonusDiscount += ";";
            }
        }
    }
    catch(e)
    {
        frontol.actions.showMessage("Error of setting " + userValue + " value");
        return;
    }

    if(stringBonusDiscount != "")
    {
        frontol.currentDocument.userValues.set(userValue, stringBonusDiscount);
    }
}
//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
function addCardBoxSpecialDetailDtos(registerDetailResponseDtos, accountTypeId)
{
    for (var i = 0; i < registerDetailResponseDtos.length; i++)
    {
        var registerDetailResponseDto = registerDetailResponseDtos[i];

        if(
            ("UsePercent" in registerDetailResponseDto) &&
            registerDetailResponseDto.UsePercent.toString() &&
            registerDetailResponseDto.UsePercent.toString().length > 0 &&
            registerDetailResponseDto.UsePercent == true &&

            ("SpecialPrice" in registerDetailResponseDto) &&
            registerDetailResponseDto.SpecialPrice.toString() &&
            registerDetailResponseDto.SpecialPrice.toString().length > 0 &&
            isNaN(registerDetailResponseDto.SpecialPrice) == false &&
            Number(registerDetailResponseDto.SpecialPrice) > 0 &&

            ("SpecialPriceQuantity" in registerDetailResponseDto) &&
            registerDetailResponseDto.SpecialPriceQuantity.toString() &&
            registerDetailResponseDto.SpecialPriceQuantity.toString().length > 0 &&
            isNaN(registerDetailResponseDto.SpecialPriceQuantity) == false &&
            Number(registerDetailResponseDto.SpecialPriceQuantity) > 0
        )
        {   // ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
            var cardBoxSpecialDetailDtos = frontol.currentDocument.userValues.get("cardBoxSpecialDetailDtos");

            if(cardBoxSpecialDetailDtos.length > 0)
            {
                cardBoxSpecialDetailDtos += ";";
            }

            cardBoxSpecialDetailDtos +=
                registerDetailResponseDto.PositionId + "&" +
                registerDetailResponseDto.SpecialPrice.toString() + "&" +
                registerDetailResponseDto.SpecialPriceQuantity.toString();

            frontol.currentDocument.userValues.set("cardBoxSpecialDetailDtos", cardBoxSpecialDetailDtos);

            // ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜
            if(accountTypeId == 1)
            {
                var stringDiscountPositions = frontol.currentDocument.userValues.get("DiscountPositions");

                if(stringDiscountPositions.length > 0)
                {
                    stringDiscountPositions += ";";
                }

                stringDiscountPositions += "" + registerDetailResponseDto.PositionId + "&" + registerDetailResponseDto.Discount.toString();

                frontol.currentDocument.userValues.set("DiscountPositions", stringDiscountPositions);
            }
        }
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
/* pos - ˜˜˜˜˜˜˜
   userValue - ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜*/
function GetSumRatePositionFromUserValue(pos, userValue)
{
    if (frontol.currentDocument.userValues.get(userValue) == "")
    {
        return 0;
    }

    var arrStringPosIdAndDisc = frontol.currentDocument.userValues.get(userValue).split(";");
    var arrObjPosIdAndDisc = [];
    for (var i = 0; i < arrStringPosIdAndDisc.length; i++)
    {
        var obj = {};
        var arr = arrStringPosIdAndDisc[i].split("&");
        obj.PosID = Number(arr[0]);
        obj.Disc = Number(arr[1]);
        arrObjPosIdAndDisc.push(obj);
    }

    for (var i = 0; i < arrObjPosIdAndDisc.length; i++)
    {
        if (pos.id == arrObjPosIdAndDisc[i].PosID)
        {
            return arrObjPosIdAndDisc[i].Disc;
        }
    }

    return 0;
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
function checkRequiredCashParams()
{
    if (frontol.userValues.get("License") == "")
        EnterGlobalParameter("License", "˜˜˜˜˜˜˜˜");

    if (frontol.userValues.get("ServerAddress") == "")
        EnterGlobalParameter("ServerAddress", "˜˜˜˜˜ ˜˜˜˜˜˜˜");
}

//˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜
/* cardNumber - ˜˜˜˜˜ ˜˜˜˜˜*/
function CorrectCardNumber(cardNumber)
{
    //trim
    cardNumber = cardNumber.replace(/^\s+|\s+$/gm,"");

    if (frontol.userValues.get("RemoveCardNumberRegex") != "")
    {
        var removeRegex = new RegExp(frontol.userValues.get("RemoveCardNumberRegex"), "g");
        cardNumber = cardNumber.replace(removeRegex, "");
    }

    return cardNumber;
}
// ˜˜˜˜˜˜˜˜ ˜˜˜˜˜
// doc - ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
// cardCode - ˜˜˜˜˜ ˜˜˜˜˜
// footerData - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
function saveFooter(doc, cardCode, footerData)
{
    var fsoFooter = new ActiveXObject("Scripting.FileSystemObject");
    var WshShell = new ActiveXObject("WScript.Shell");

    try
    {
        var pathFooterFolder = WshShell.ExpandEnvironmentStrings("%SystemDrive%") + "\\RxLoyalty\\Frontol5\\img\\footer";
        createFullPath(fsoFooter, pathFooterFolder);

        var pathFooterFile = pathFooterFolder + "\\" + cardCode + ".bmp";

        if (fsoFooter.FileExists(pathFooterFile) == true)
            fsoFooter.DeleteFile(pathFooterFile);

        var stream = new ActiveXObject("ADODB.Stream");
        stream.Type = 2;
        stream.Charset = "ISO-8859-1";
        stream.Open();
        stream.WriteText(base64_decode(footerData));
        stream.Flush();
        stream.Position = 0;
        stream.SaveToFile(pathFooterFile);
        stream.Close();

        doc.userValues.set("FooterImgName", cardCode + ".bmp");
    }
    catch(e)
    {
        frontol.actions.showMessage("˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜!\n" + e.name + "\n" + e.message, Icon.Error);
    }
    doc.userValues.remove("NeedGetFooter");
}
//˜˜˜˜˜˜˜˜ ˜˜˜˜˜
/* doc - ˜˜˜˜˜˜˜˜*/
function GetFooter(doc)
{
    if (doc.userValues.get("NeedGetFooter") != "1")
    {
        return;
    }

    var processingServerAddress = frontol.userValues.get("ServerAddress");

    if (!processingServerAddress)
    {
        frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
        return;
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("License") != "" && frontol.userValues.get("License") != null)
    {
        var license = frontol.userValues.get("License");
    }
    else
    {
        frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
    }

    var result = {
        success: false,
        message: "",
        data: ""
    };

    var cardCode = doc.userValues.get("FirstCardNumber");

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
    var stringToSend = JSON.stringify({
                           LicenseGUID: license,
                           CardCode: cardCode
                       });

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/GetFooter",
        "POST",
        stringToSend,
        "footer_get"
    );

    if(result.success)
    {
        var fsoFooter = new ActiveXObject("Scripting.FileSystemObject");
        var WshShell = new ActiveXObject("WScript.Shell");

        try
        {
            var pathFooterFolder = WshShell.ExpandEnvironmentStrings("%SystemDrive%") + "\\RxLoyalty\\Frontol5\\img\\footer";
            createFullPath(fsoFooter, pathFooterFolder);

            var pathFooterFile = pathFooterFolder + "\\_" + cardCode + ".bmp";

            if (fsoFooter.FileExists(pathFooterFile) == true)
                fsoFooter.DeleteFile(pathFooterFile);

            var stream = new ActiveXObject("ADODB.Stream");
            stream.Open();
            stream.Type = 1;
            stream.Write(result.data.ResponseBody);
            stream.Position = 0;
            stream.SaveToFile(pathFooterFile);
            stream.Close();

            doc.userValues.set("FooterImgName", cardCode + ".bmp");
        }
        catch(e)
        {
            //frontol.actions.showMessage("˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜!\n" + e.name + "\n" + e.message, Icon.Error);
        }
    }
    else
    {
        frontol.actions.showMessage(result.message, Icon.Error);
        return;
    }

    doc.userValues.remove("NeedGetFooter");
}

//˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜
function checkPrefixCard( cardNumber )
{
    var result = {
        success: true,
        message: ""
    };

    if (frontol.userValues.get("CardPrefix") != "")
    {
        var checkPrefix = "";
        for (var i = 1; i <= frontol.userValues.get("CardPrefix").length; i++)
        {
            checkPrefix += cardNumber.charAt(i-1);
        }

        if (frontol.userValues.get("CardPrefix") != checkPrefix.toString())
        {
            //frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!");
            result.success = false;
            result.message = "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!";
            return result;
        }
    }
    return result;
}

//˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜
function checkRangeCard( cardNumber )
{
    var result = {
        success: true,
        message: ""
    };

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("CardRangeStart") != "")
    {
        //!attn
        //˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜
        if (cardNumber < frontol.userValues.get("CardRangeStart"))
        {
            //frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!");
            result.success = false;
            result.message = "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!";
            return result;
        }
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("CardRangeEnd") != "")
    {
        //!attn
        //˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜
        if (frontol.userValues.get("CardRangeEnd") < cardNumber)
        {
            //frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!");
            result.success = false;
            result.message = "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!";
            return result;
        }
    }
    return result;
}

}
//==========================================================================================================================================================================================

HelpFunctions: {
// ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜
function createFullPath( fso, path )
{
    if(!fso || !path)
        return false;

    var dirs = path.split("\\");

    var driveName = dirs[0];

    if( driveName.length > 2 ) return false;

    driveName = driveName.substr(0, 1);
    if( !fso.DriveExists(driveName) ) return false;

    driveName += ":";

    var fullPath = driveName;

    for (var i = 1; i < dirs.length; i++)
    {
        fullPath += "\\" + dirs[i];

        if( !fso.FolderExists(fullPath) )
        {
            fso.CreateFolder(fullPath);
        }
        if( !fso.FolderExists(fullPath) ) return false;
    }
    return true;
}

// string to binary
function base64_encode( data )
{
    // Encodes data with MIME base64
    //
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Bayron Guevara

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i=0, enc='';

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1<<16 | o2<<8 | o3;

        h1 = bits>>18 & 0x3f;
        h2 = bits>>12 & 0x3f;
        h3 = bits>>6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    switch( data.length % 3 ){
        case 1:
            enc = enc.slice(0, -2) + '==';
        break;
        case 2:
            enc = enc.slice(0, -1) + '=';
        break;
    }

    return enc;
}

function base64_decode( data )
{
    // Decodes data encoded with MIME base64
    //
    // +   original by: Tyler Akins (http://rumkin.com)

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i=0, enc="";

    do {  // unpack four hexets into three octets using index points in b64
        h1 = b64.indexOf(data.charAt(i++));
        h2 = b64.indexOf(data.charAt(i++));
        h3 = b64.indexOf(data.charAt(i++));
        h4 = b64.indexOf(data.charAt(i++));

        bits = h1<<18 | h2<<12 | h3<<6 | h4;

        o1 = bits>>16 & 0xff;
        o2 = bits>>8 & 0xff;
        o3 = bits & 0xff;

        if (h3 == 64)
            enc += String.fromCharCode(o1);
        else if (h4 == 64)
            enc += String.fromCharCode(o1, o2);
        else
            enc += String.fromCharCode(o1, o2, o3);
    } while (i < data.length);

    return enc;
}

// get ISO DateTime to string
function getISODateTimeToString(timeSeparator, dateTimeSeparator)
{
    if(!timeSeparator)
    {
        timeSeparator = "-";
    }

    if(!dateTimeSeparator)
    {
        dateTimeSeparator = "T";
    }

    var dateTime = new Date();
    var dateTimeYear = dateTime.getFullYear();
    var dateTimeMonth = (dateTime.getMonth()+1 <= 9) ? "0" + (dateTime.getMonth()+1).toString() : (dateTime.getMonth()+1).toString();
    var dateTimeDate = (dateTime.getDate() <= 9) ? "0" + dateTime.getDate().toString() : dateTime.getDate().toString();
    var dateTimeHours = (dateTime.getHours() <= 9) ? "0" + dateTime.getHours().toString() : dateTime.getHours().toString();
    var dateTimeMinutes = (dateTime.getMinutes() <= 9) ? "0" + dateTime.getMinutes().toString() : dateTime.getMinutes().toString();
    var dateTimeSeconds = (dateTime.getSeconds() <= 9) ? "0" + dateTime.getSeconds().toString() : dateTime.getSeconds().toString();
    return (
        dateTimeYear + "-" + dateTimeMonth + "-" + dateTimeDate +
        dateTimeSeparator +
        dateTimeHours + timeSeparator + dateTimeMinutes + timeSeparator + dateTimeSeconds
    );
}
//˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
function GetSumForPayment()
{
    var p = 0;
    if (frontol.currentDocument.payment.count > 0)
    {
        for (frontol.currentDocument.payment.index = 1; frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count; frontol.currentDocument.payment.index++)
        {
            p += frontol.currentDocument.payment.sumInBaseCurrency;
        }
    }
    return frontol.currentDocument.totalSum - p;
}

//˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜
function GetSumForPaymentFromPositions()
{

    var sumDocument = 0;
    for (frontol.currentDocument.position.index = 1; frontol.currentDocument.position.index <= frontol.currentDocument.position.count; frontol.currentDocument.position.index++)
    {
        if (frontol.currentDocument.position.storno == 0)
        {
            sumDocument += frontol.currentDocument.position.quantity * frontol.currentDocument.position.priceWithDiscs;
        }
    }

    var p = 0;
    if (frontol.currentDocument.payment.count > 0)
    {
        for (frontol.currentDocument.payment.index = 1; frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count; frontol.currentDocument.payment.index++)
        {
            p += frontol.currentDocument.payment.sumInBaseCurrency;
        }
    }

    return sumDocument - p;
}

//˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
function IsInArray(value, array)
{
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == value) return true;
    }
    return false;
}

//˜˜˜˜ ˜˜˜˜˜˜˜ [˜˜˜˜˜˜: SendKey("{F10}");]
function SendKey(key)
{
    var WShell = new ActiveXObject("WScript.Shell");
    WShell.SendKeys(key);
}

//˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜
function AddPrintString(st, addedValue)
{
    if (st != "")
        st += "&&";
    st += addedValue;
    return st;
}

}
//==========================================================================================================================================================================================

Rates: {
function ProcessingRatePositions(pos)
{
    if (frontol.currentDocument.userValues.get("DiscountPositions") == "")
        return 0;

    if (frontol.currentDocument.userValues.get("DiscountPositions").substr(0, 2) == "df")
        return(Number(frontol.currentDocument.userValues.get("DiscountPositions").substr(2)));

    var arrStringPosIdAndDisc = frontol.currentDocument.userValues.get("DiscountPositions").split(";");
    var arrObjPosIdAndDisc = [];
    for (var i = 0; i < arrStringPosIdAndDisc.length; i++)
    {
        var obj = {};
        var arr = arrStringPosIdAndDisc[i].split("&");
        obj.PosID = Number(arr[0]);
        obj.Disc = Number(arr[1]);
        arrObjPosIdAndDisc.push(obj);
    }

    for (var i = 0; i < arrObjPosIdAndDisc.length; i++)
    {
        if (pos.id == arrObjPosIdAndDisc[i].PosID)
        {
            return arrObjPosIdAndDisc[i].Disc;
        }
    }

    return;
}

function ProcessingDiscountRate()
{
   if (isNaN(frontol.currentDocument.userValues.get("Discount")))
   {
       return;
   }
   else
   {
       return Number(frontol.currentDocument.userValues.get("Discount"));
   }
}

function ProcessingBonusDiscRate(pos)
{
    if (frontol.currentDocument.userValues.get("BonusDiscount") == "")
    {
        return;
    }

    //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("BonusRateOnDocument") == "1")
    {
        return Number(frontol.currentDocument.userValues.get("BonusDiscount"));
    }

    var arrStringPosIdAndDisc = frontol.currentDocument.userValues.get("BonusDiscount").split(";");
    var arrObjPosIdAndDisc = [];
    for (var i = 0; i < arrStringPosIdAndDisc.length; i++)
    {
        var obj = {};
        var arr = arrStringPosIdAndDisc[i].split("&");
        obj.PosID = Number(arr[0]);
        obj.Disc = Number(arr[1]);
        arrObjPosIdAndDisc.push(obj);
    }

    for (var i = 0; i < arrObjPosIdAndDisc.length; i++)
    {
        if (pos.id == arrObjPosIdAndDisc[i].PosID)
        {
            return arrObjPosIdAndDisc[i].Disc;
        }
    }

    return;
}

function ProcessingBonusRatePosition(pos)
{
    if (frontol.currentDocument.userValues.get("BonusDiscountPositions") == "")
    {
        return 0;
    }

    var arrStringPosIdAndDisc = frontol.currentDocument.userValues.get("BonusDiscountPositions").split(";");
    var arrObjPosIdAndDisc = [];
    for (var i = 0; i < arrStringPosIdAndDisc.length; i++)
    {
        var obj = {};
        var arr = arrStringPosIdAndDisc[i].split("&");
        obj.PosID = Number(arr[0]);
        obj.Disc = Number(arr[1]);
        arrObjPosIdAndDisc.push(obj);
    }

    for (var i = 0; i < arrObjPosIdAndDisc.length; i++)
    {
        if (pos.id == arrObjPosIdAndDisc[i].PosID)
        {
            return arrObjPosIdAndDisc[i].Disc;
        }
    }

    return;
}

function ProcessingCouponDiscRate(pos)
{
    if (frontol.currentDocument.userValues.get("CouponDiscount") == "")
    {
        return;
    }

    //˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("CouponRateOnDocument") == "1")
    {
        return Number(frontol.currentDocument.userValues.get("CouponDiscount"));
    }

    var arrStringPosIdAndDisc = frontol.currentDocument.userValues.get("CouponDiscount").split(";");
    var arrObjPosIdAndDisc = [];
    for (var i = 0; i < arrStringPosIdAndDisc.length; i++)
    {
        var obj = {};
        var arr = arrStringPosIdAndDisc[i].split("&");
        obj.PosID = Number(arr[0]);
        obj.Disc = Number(arr[1]);
        arrObjPosIdAndDisc.push(obj);
    }

    for (var i = 0; i < arrObjPosIdAndDisc.length; i++)
    {
        if (pos.id == arrObjPosIdAndDisc[i].PosID)
        {
            return arrObjPosIdAndDisc[i].Disc;
        }
    }

    return;
}

function ProcessingPositionPrice(position)
{
    if (!frontol.currentDocument.userValues.get("PositionPrices"))
    {
        return;
    }

    var positionPrices = frontol.currentDocument.userValues.get("PositionPrices").split(";");

    for(var i = 0; i < positionPrices.length; i++)
    {
        var positionPrice = positionPrices[i].split("&");

        if(positionPrice.length == 2)
        {
            var positionPriceObject = {};

            positionPriceObject.PosID = Number(positionPrice[0]);
            positionPriceObject.Price = Number(positionPrice[1]);

            if(position.id == positionPriceObject.PosID)
            {
                return (position.totalSum - positionPriceObject.Price);
            }
        }
    }
}

}
//==========================================================================================================================================================================================

ManualFunctions: {
//MANUAL ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
function ManualSendDelayed()
{
    SendDelayed(false);
}
//=========================================================================================================================================================================
function manualCardMultiRegister()
{
    var rxLoyaltyV2 = new RxLoyaltyV2();

    rxLoyaltyV2.manualCardMultiRegister();
}

function manualSendCardMultiRegister()
{
    var rxLoyaltyV2 = new RxLoyaltyV2();

    rxLoyaltyV2.manualSendCardMultiRegister();
}

function RxLoyaltyV2()
{
    var NEW_LINE_MESSAGE = "\n";
    var CARDS_WERE_NOT_USED_MESSAGE = "˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜";
    var NO_OPENED_DOCUMENTS_MESSAGE = "˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜";
    var DOCUMENT_HAS_NO_POSITION_MESSAGE = "˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜";
    var OPERATION_AVAILABLE_IN_SALE_DOCUMENT_ONLY_MESSAGE = "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜-˜˜˜˜˜˜˜";
    var NO_CARDS_TO_SEND_MESSAGE = "˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜ ˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜";

    var currentDocument = frontol.currentDocument;

    getJson2();

    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    var addDocumentValue = function(valueName, value, checkUnique)
    {
        valueName = valueName.toString().trim();
        value = value.toString().trim();

        if(typeof checkUnique == "undefined")
        {
            checkUnique = false;
        }

        var documentValue = currentDocument.userValues.get(valueName);

        if(documentValue)
        {
            documentValue += ";";
        }

        var documentValueArray = documentValue.split(";");

        if(checkUnique)
        {
            for(var i = 0; i < documentValueArray.length; i++)
            {
                if(documentValueArray[i].trim() == value)
                {
                    frontol.actions.showError("˜˜˜˜˜˜˜˜ " + value + " ˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜!");
                }
            }
        }

        documentValue += "" + value;
        currentDocument.userValues.set(valueName, documentValue);
    };
    // ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    var deleteDocumentValue = function(valueName, value)
    {
        valueName = valueName.toString().trim();
        value = value.toString().trim();

        var documentValue = currentDocument.userValues.get(valueName);

        if(documentValue)
        {
            var documentValueArray = documentValue.split(";");
            var oldLength = documentValueArray.length;

            for(var i = 0; i < documentValueArray.length; i++)
            {
                if(documentValueArray[i].trim() == value)
                {
                    documentValueArray.splice(i, 1);
                }
            }

            if(oldLength != documentValueArray.length)
            {
                currentDocument.userValues.set(valueName, documentValueArray.join(";"));
            }
        }
    };

    this.manualCardMultiRegister = function()
    {
        if(!currentDocument)
        {
            frontol.actions.showError(NO_OPENED_DOCUMENTS_MESSAGE);
        }

        if(currentDocument.type.code != 1)
        {
            frontol.actions.showError(OPERATION_AVAILABLE_IN_SALE_DOCUMENT_ONLY_MESSAGE);
        }

        if(currentDocument.position.count <= 0)
        {
            frontol.actions.showError(DOCUMENT_HAS_NO_POSITION_MESSAGE);
        }

        var cardNumber = frontol.actions.inputString(INPUT_CARD_CODE_MESSAGE, "");

        if(!cardNumber)
        {
            frontol.actions.showError(CARD_CODE_EMPTY_MESSAGE);
        }

        addDocumentValue("cardBoxNumbers", cardNumber, true);
    };

    var getDocumentValueAsArray = function(valueName)
    {
        var documentValue = currentDocument.userValues.get(valueName);

        if(!documentValue)
        {
            return [];
        }

        var documentValueArray = documentValue.split(";");

        return documentValueArray;
    };

    this.manualSendCardMultiRegister = function()
    {
        if(!currentDocument)
        {
            frontol.actions.showError(NO_OPENED_DOCUMENTS_MESSAGE);
        }

        var cardBoxNumberArray = getDocumentValueAsArray("cardBoxNumbers");

        if(!cardBoxNumberArray.length)
        {
            frontol.actions.showError(NO_CARDS_TO_SEND_MESSAGE);
        }

        if(!currentDocument)
        {
            frontol.actions.showError(NO_OPENED_DOCUMENTS_MESSAGE);
        }

        if(currentDocument.type.code != 1)
        {
            frontol.actions.showError(OPERATION_AVAILABLE_IN_SALE_DOCUMENT_ONLY_MESSAGE);
        }

        var processingServerAddress = frontol.userValues.get("ServerAddress");

        if (!processingServerAddress)
        {
            frontol.actions.showError(SERVER_ADDRESS_NOT_SET_MESSAGE);
        }

        //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
        var license = frontol.userValues.get("License");

        if (!license)
        {
            frontol.actions.showMessage(LICENSE_NOT_SET_MESSAGE, Icon.Error);
            return;
        }

        //˜˜˜˜˜˜˜˜ ˜˜˜˜˜
        var accessToken = frontol.userValues.get("AccessToken");

        if (!accessToken)
        {
            frontol.actions.showMessage(TOKEN_NOT_SET_MESSAGE, Icon.Error);
            return;
        }

        var result = {
            success: false,
            message: "",
            data: ""
        };

        var registerDetailDtos = GetRegisterDetailDtos(currentDocument);

        var stringToSend = JSON.stringify({
            LicenseGuid: license,
            AccessTokenGuid: accessToken,
            CardCodes: cardBoxNumberArray,
            RegisterDetailDtos: registerDetailDtos
        });

        result = sendHttpRequest(
            processingServerAddress + "/BonusWebApi/api/processing/multiregister",
            "POST",
            stringToSend,
            "multi_register"
        );

        if(result.success)
        {
            // ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
            if("UnusedCards" in result.data && result.data.UnusedCards)
            {
                // ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜, ˜˜˜˜˜ ˜˜ ˜˜˜ ˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
                for(var i = 0; i < result.data.UnusedCards.length; i++)
                {
                    var unusedCard = result.data.UnusedCards[i];

                    deleteDocumentValue("cardBoxNumbers", unusedCard);
                }

                frontol.actions.showMessage(
                    CARDS_WERE_NOT_USED_MESSAGE + ":" + NEW_LINE_MESSAGE +
                    result.data.UnusedCards
                );
            }
            // ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
            if("UsedCards" in result.data && result.data.UsedCards)
            {
                var usedCards = result.data.UsedCards;

                for(var i = 0; i < usedCards.length; i++)
                {
                    var usedCard = usedCards[i];

                    if("AccountId" in usedCard && usedCard.AccountId.toString())
                    {
                        addDocumentValue("cardBoxAccountIds", usedCard.AccountId);
                    }

                    if("AccountType" in usedCard && usedCard.AccountType.toString())
                    {
                        addDocumentValue("cardBoxAccountTypes", usedCard.AccountType);
                    }

                    if("Balance" in usedCard && usedCard.Balance.toString())
                    {
                        addDocumentValue("cardBoxBalances", usedCard.Balance.toString());
                    }

                    if("registerDetails" in usedCard && usedCard.registerDetails)
                    {
                        for(var i = 0; i < usedCard.registerDetails.length; i++)
                        {
                            var registerDetails = usedCard.registerDetails[i];

                            if(
                                "PositionId" in registerDetails && registerDetails.PositionId.toString() &&
                                "Discount" in registerDetails && registerDetails.Discount.toString() &&
                                "UsePercent" in registerDetails && registerDetails.UsePercent &&
                                "SpecialPrice" in registerDetails && registerDetails.SpecialPrice.toString() &&
                                "SpecialPriceQuantity" in registerDetails && registerDetails.SpecialPriceQuantity.toString() &&
                                "EndPrice" in registerDetails && registerDetails.EndPrice.toString()
                            )
                            {
                                var registerDetailsArray = [];

                                registerDetailsArray.push(registerDetails.PositionId.toString());
                                registerDetailsArray.push(registerDetails.Discount.toString());
                                registerDetailsArray.push(registerDetails.UsePercent);
                                registerDetailsArray.push(registerDetails.SpecialPrice.toString());
                                registerDetailsArray.push(registerDetails.SpecialPriceQuantity.toString());
                                registerDetailsArray.push(registerDetails.EndPrice.toString());

                                addDocumentValue(currentDocument, "cardBoxRegisterDetails", registerDetailsArray.join("&"));
                            }
                        }
                    }
                }
            }

            if("RegisterDetailResponseDtos" in result.data && result.data.RegisterDetailResponseDtos)
            {
                var registerDetailResponseDtos = result.data.RegisterDetailResponseDtos;

                for(var i = 0; i < registerDetailResponseDtos.length; i++)
                {
                    var position = registerDetailResponseDtos[i];

                    if("PositionId" in position && position.PositionId.toString() && "EndPrice" in position && position.EndPrice.toString())
                    {
                        addDocumentValue("PositionPrices", position.PositionId + "&" + position.EndPrice);
                    }
                }

                currentDocument.recalculateAllDiscounts();
            }
        }
        else
        {
            frontol.actions.showMessage(result.message, Icon.Error);
            return;
        }
    };
}
//=========================================================================================================================================================================
//MANUAL ˜˜˜˜ ˜˜˜˜˜
function ManualEnterProcPaymentCard()
{
    //˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    var doc;
    try
    {
        doc = frontol.currentDocument;
    }
    catch(e)
    {
    }

    if (doc == null)
    {
        frontol.actions.showError("˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜!");
    }

    //˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
    if (frontol.currentDocument.type.code != SELLING_DOCUMENT_TYPE_CODE)
    {
        frontol.actions.showError("˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜!");
    }

    if (frontol.userValues.get("OnlyOneCard") == "1")
    {
        if (frontol.currentDocument.userValues.get("cardBoxNumbers") != "")
        {
            frontol.actions.showError("˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜!");
        }
    }

    if (frontol.userValues.get("DontWorkWithStandartCards") == "1" && frontol.currentDocument.card.count > 0)
    {
        frontol.actions.showError("˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜!");
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜
    if (GetSumForPayment() <= 0)
    {
        frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜!");
    }

    for (frontol.currentDocument.payment.index = 1; frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count; frontol.currentDocument.payment.index++)
    {
        if (!(frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("BonusPaymentCode")) ||
        frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DiscountPaymentCode")) ||
        frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DepositPaymentCode")) ||
        frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("CouponPaymentCode"))))
        {
            frontol.actions.showError("˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜!");
        }
    }

    var cardNumber;

    cardNumber = frontol.actions.inputString(INPUT_CARD_CODE_MESSAGE, "");

    if (!cardNumber)
    {
        frontol.actions.showError(CARD_CODE_EMPTY_MESSAGE);
    }

    cardNumber = cardNumber.trim();

    cardNumber = CorrectCardNumber(cardNumber);

    //˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜
    if (frontol.currentDocument.userValues.get("cardBoxNumbers") != "")
    {
        var cardBoxNumbers = frontol.currentDocument.userValues.get("cardBoxNumbers");
        var cardBoxNumbersArray = [];
        cardBoxNumbersArray = cardBoxNumbers.split(";");
        for (var i = 0; i < cardBoxNumbersArray.length; i++)
        {
            if (cardNumber == cardBoxNumbersArray[i])
            {
                frontol.actions.showError("˜˜˜˜˜ ˜ ˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜!");
            }
        }
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜
    if (frontol.userValues.get("CardPrefix") != "")
    {
        var checkPrefix = "";
        for (var i = 1; i <= frontol.userValues.get("CardPrefix").length; i++)
        {
            checkPrefix += cardNumber.charAt(i-1);
        }

        if (frontol.userValues.get("CardPrefix") != checkPrefix.toString())
        {
            frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!");
        }
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("CardRangeStart") != "")
    {
        //!attn
        //˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜
        if (cardNumber < frontol.userValues.get("CardRangeStart"))
        {
            frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!");
        }
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
    if (frontol.userValues.get("CardRangeEnd") != "")
    {
        //!attn
        //˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜
        if (frontol.userValues.get("CardRangeEnd") < cardNumber)
        {
            frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!");
        }
    }

    // ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜
    var specialDiscountCardPrefix = frontol.userValues.get("SpecialDiscountCardPrefix");
    var patternSpecialDiscountCardPrefix = "^" + specialDiscountCardPrefix + "[0-9]+$";

    // ˜˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜
    if(cardNumber.search(patternSpecialDiscountCardPrefix) === -1)
    {
        // ˜˜˜˜ ˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
        var loyaltyPrograms = new LoyaltyPrograms();

        var listLoyaltyPrograms = loyaltyPrograms.selectionEnabled();

        var loyaltyProgram = null;

        if(listLoyaltyPrograms)
        {
            loyaltyProgram = frontol.actions.selectString(
                "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜",
                listLoyaltyPrograms.Names,
                listLoyaltyPrograms.Ids
            );

            if(!loyaltyProgram) frontol.actions.showError("˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜!");
        }
    }

    RegisterProcCard(cardNumber, loyaltyProgram);
}

var cardNumber="";

function Card0()
{
    cardNumber = "0";
    ManualCalculateDiscounts();
}

function Card1()
{
    cardNumber = "1";
    ManualCalculateDiscounts();
}

//MANUAL ˜˜˜˜˜˜ ˜˜˜˜˜˜
function ManualCalculateDiscounts()
{
    //˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    var doc;
    try
    {
        doc = frontol.currentDocument;
    }
    catch(e)
    {
    }

    if (doc == null)
    {
        frontol.actions.showError("˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜!");
    }

    //˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜
    if (frontol.currentDocument.type.code != SELLING_DOCUMENT_TYPE_CODE)
    {
        frontol.actions.showError("˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜!");
    }

    if (frontol.currentDocument.userValues.get("cardBoxNumbers") != "")
    {
        frontol.actions.showError("˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜!");
    }

    if (frontol.userValues.get("DontWorkWithStandartCards") == "1" && frontol.currentDocument.card.count > 0)
    {
        frontol.actions.showError("˜ ˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜!");
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜
    if (GetSumForPayment() <= 0)
    {
        frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜!");
    }

    for (frontol.currentDocument.payment.index = 1; frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count; frontol.currentDocument.payment.index++)
    {
        if (!(frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("BonusPaymentCode")) ||
        frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DiscountPaymentCode")) ||
        frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DepositPaymentCode")) ||
        frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("CouponPaymentCode"))))
        {
            frontol.actions.showError("˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜!");
        }
    }

    //var cardNumber = "0";

    //˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜
    if (frontol.currentDocument.userValues.get("cardBoxNumbers") != "")
    {
        var cardBoxNumbers = frontol.currentDocument.userValues.get("cardBoxNumbers");
        var cardBoxNumbersArray = [];
        cardBoxNumbersArray = cardBoxNumbers.split(";");
        for (var i = 0; i < cardBoxNumbersArray.length; i++)
        {
            if (cardNumber == cardBoxNumbersArray[i])
            {
                frontol.actions.showError("˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜!");
            }
        }
    }

    RegisterProcCard(cardNumber);
}

//MANUAL ˜˜˜˜˜˜ ˜˜˜˜ ˜ ˜˜˜˜˜˜
function ManualDeleteAllProc()
{
    //˜˜˜˜˜˜˜˜, ˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    var doc;
    try
    {
        doc = frontol.currentDocument;
    }
    catch(e)
    {
    }

    if (doc == null)
    {
        frontol.actions.showError("˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜!");
    }
    cancelDocument();
    DeleteAllProc(doc);
}

//MANUAL ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
function ManualGetGlobal()
{
    getCashParams(false);
}

//MANUAL ˜˜˜˜˜ ˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜
function ManualShowGlobal()
{
    ShowCashParams();
}

//MANUAL ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜
function ManualGetCardInfo()
{
    GetCardInfo();
}

//MANUAL ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
function ManualControlButton()
{
    var licenseString = "˜˜˜˜˜˜˜˜";
    if (frontol.userValues.get("License") == "")
        licenseString += " (!)";

    var serverAddressString = "˜˜˜˜˜ ˜˜˜˜˜˜˜";
    if (frontol.userValues.get("ServerAddress") == "")
        serverAddressString += " (!)";

    var statusRxLoyaltyDebugging = "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜";
    if (frontol.userValues.get("RxLoyaltyDebugging") == "1")
        statusRxLoyaltyDebugging = "˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜";

    var st = frontol.actions.selectString("˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜:",
        licenseString + "\n" +
        serverAddressString + "\n" +
        "˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜\n" +
        "˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜\n" +
        "˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜\n" +
        "˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜\n" +
        statusRxLoyaltyDebugging,

        "license\n" +
        "serverAddress\n" +
        "showcashparams\n" +
        "getcashparams\n" +
        "senddelay\n" +
        "accessToken\n" +
        "setRxLoyaltyDebugging"
    );

    if (st == null || st =="")
    {
        return;
    }

    switch(st)
    {
        case "license":
        {
            EnterGlobalParameter("License", "˜˜˜˜˜˜˜˜");
            break;
        }
        case "serverAddress":
        {
            EnterGlobalParameter("ServerAddress", "˜˜˜˜˜ ˜˜˜˜˜˜˜");
            break;
        }
        case "showcashparams":
        {
            ManualShowGlobal();
            break;
        }
        case "getcashparams":
        {
            ManualGetGlobal();
            break;
        }
        case "senddelay":
        {
            ManualSendDelayed();
            break;
        }
        case "accessToken":
        {
            EnterGlobalParameter("AccessToken", "˜˜˜˜˜ (˜˜˜ ˜˜˜˜˜˜˜)");
            break;
        }
        case "setRxLoyaltyDebugging":
        {
            if(frontol.userValues.get("RxLoyaltyDebugging") == "1")
            {
                frontol.userValues.set("RxLoyaltyDebugging", "0");
            }
            else
            {
                frontol.userValues.set("RxLoyaltyDebugging", "1");
            }
            break;
        }
        default:
        {
            return;
        }
    }
}
// MANUAL ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
function manualCouponActivation()
{
    var couponNumber = frontol.actions.inputString(INPUT_CARD_CODE_MESSAGE, "");

    if (!couponNumber)
    {
        frontol.actions.showError(CARD_CODE_EMPTY_MESSAGE);
    }

    var result = {
        success: false,
        message: "",
        data: ""
    };

    if( couponNumber.search(/^[0-9]*$/) === -1 )
    {
        frontol.actions.showError("˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜:\n˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!");
    }

    var processingServerAddress = frontol.userValues.get("ServerAddress");

    if (!processingServerAddress)
    {
        frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
        return;
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    var license = frontol.userValues.get("License");

    if (!license)
    {
        frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
    var stringToSend = JSON.stringify({
        LicenseGuid: license,
        CardCode: couponNumber
    });

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/activateCoupon",
        "POST",
        stringToSend,
        "coupon_activation"
    );

    if(result.success)
    {
        frontol.actions.showMessage(
            "˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜!\n" +
            "˜˜˜˜˜˜: " + result.data.CardStatus + "\n" +
            "˜˜˜˜˜˜: " + result.data.Balance
        );
    }
    else
    {
        frontol.actions.showError(result.message);
    }
}
// MANUAL ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
function manualPhoneNumberVerification()
{
    var cardNumber = frontol.actions.inputString(INPUT_CARD_CODE_MESSAGE, "");

    if (!cardNumber)
    {
        frontol.actions.showError(CARD_CODE_EMPTY_MESSAGE);
    }

    cardNumber = CorrectCardNumber(cardNumber);

    var result = {
        success: false,
        message: "",
        data: ""
    };

    result = checkPrefixCard(cardNumber);

    if( !result.success )
    {
        frontol.actions.showError(result.message);
    }

    result = checkRangeCard(cardNumber);

    if( !result.success )
    {
        frontol.actions.showError(result.message);
    }

    var phoneNumber = frontol.actions.inputString("˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜\n(˜˜˜˜˜˜ ˜˜˜˜˜):", "");
    if (!phoneNumber)
    {
        frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜!");
    }

    if( phoneNumber.search(/^[0-9]{10,}$/) === -1 )
    {
        frontol.actions.showError("˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜:\n˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜\n˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜!");
    }

    var processingServerAddress = frontol.userValues.get("ServerAddress");

    if (!processingServerAddress)
    {
        frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
        return;
    }

    //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    var license = frontol.userValues.get("License");

    if (!license)
    {
        frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
    }

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
    var stringToSend = JSON.stringify({
        LicenseGuid: license,
        CardCode: cardNumber,
        PhoneMobile: "+" + phoneNumber
    });

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/SendConfirmCodeToClient",
        "POST",
        stringToSend,
        "confirmation_get"
    );

    if(!result.success)
    {
        frontol.actions.showError(result.message);
    }

    var confirmCode = frontol.actions.inputString("˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜:", "");

    if (!confirmCode)
    {
        frontol.actions.showError("˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜!");
    }

    if( confirmCode.search(/^[0-9]{4}$/) === -1 )
        frontol.actions.showError("˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜:\n˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜!");

    //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜
    var stringToSend = JSON.stringify({
        LicenseGuid: license,
        CardCode: cardNumber,
        PhoneMobile: "+" + phoneNumber,
        ConfirmCode: confirmCode
    });

    result = sendHttpRequest(
        processingServerAddress + "/BonusWebApi/api/processing/ConfirmClientPhone",
        "POST",
        stringToSend,
        "confirmation_send"
    );

    if(result.success)
    {
        frontol.actions.showMessage("˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜.");
    }
    else
    {
        frontol.actions.showError(result.message);
    }
}

}

//==========================================================================================================================================================================================
//˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ JSON
Libraries: {
/* jshint ignore:start */
function getJson2()
{
    "object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();}
}
/* jshint ignore:end */
//==========================================================================================================================================================================================
Tests: {
//˜˜˜˜ ˜˜˜˜˜˜˜-˜˜˜˜˜˜
function TestQA(stringToSend, request, command, requestDateTime, responseDateTime)
{
    if(frontol.userValues.get("RxLoyaltyDebugging") != "1")
    {
       return;
    }

    try
    {
        var fTest, fsoTest;
        fsoTest = new ActiveXObject("Scripting.FileSystemObject");
        var WshShell = new ActiveXObject("WScript.Shell");

        var pathDevFolder = WshShell.ExpandEnvironmentStrings("%SystemDrive%") + "\\RxLoyalty\\Frontol5\\dev";
        createFullPath(fsoTest, pathDevFolder);

        var dateTimeNow = getISODateTimeToString();

        fTest = fsoTest.CreateTextFile(pathDevFolder + "\\" + command + "_" + dateTimeNow + ".log", true);

        // ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
        if(requestDateTime)
            fTest.Write("[" + requestDateTime + "] - ");

        fTest.WriteLine(stringToSend);

        fTest.WriteLine("---");
        // ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        if(responseDateTime)
            fTest.Write("[" + responseDateTime + "] - ");

        fTest.WriteLine("status: " + request.status);

        if(typeof(request.responseText) === "string")
                fTest.Write(request.responseText);

        fTest.Close();
    }
    catch (e)
    {
        frontol.actions.showMessage("˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜-˜˜˜˜˜˜!\n" + e.name + ": " + e.message, Icon.Error);
    }
}

function TestShowDiscountDocument()
{
    if( !frontol.currentDocument )
    {
        return;
    }

    var doc = frontol.currentDocument;
    var message = "˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜:";

    for (doc.discountDoc.index = 1; doc.discountDoc.index <= doc.discountDoc.count; doc.discountDoc.index++)
    {
        message += "\n˜˜˜˜˜˜˜: " + doc.discountDoc.marketingEvent.code + " " + doc.discountDoc.marketingEvent.name + " | ˜˜˜˜˜: " + doc.discountDoc.sum + " | ˜˜˜˜˜˜˜˜: " + doc.discountDoc.value;
    }

    frontol.actions.showMessage(message);
}

function TestShowDiscountPosition()
{
    if( !frontol.currentDocument )
    {
        return;
    }

    var doc = frontol.currentDocument;
    var position = doc.position;
    position.index = doc.indexCurrentPosition;
    var message = "˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜:";

    for (position.discountPos.index = 1; position.discountPos.index <= position.discountPos.count; position.discountPos.index++)
    {
        message +=
            "\n˜˜˜˜˜˜˜: " +
            position.discountPos.marketingEvent.code +
            " " + position.discountPos.marketingEvent.name +
            " | ˜˜˜˜˜: " + position.discountPos.sum +
            " | ˜˜˜˜˜˜˜˜: " + position.discountPos.value + (position.discountPos.valueType == 1 ? "%" : " ˜˜˜.");
    }

    message += "\n˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜:";

    for (position.discountDoc.index = 1; position.discountDoc.index <= position.discountDoc.count; position.discountDoc.index++)
    {
        message +=
            "\n˜˜˜˜˜˜˜: " + position.discountDoc.marketingEvent.code +
            " " + position.discountDoc.marketingEvent.name +
            " | ˜˜˜˜˜: " + position.discountDoc.sum +
            " | ˜˜˜˜˜˜˜˜: " + position.discountDoc.value;
    }

    frontol.actions.showMessage(message);
}

function TestRecalcDiscounts()
{
    frontol.currentDocument.recalculateAllDiscounts();
}

function $(string)
{
    frontol.actions.showMessage(string);
}

}

//==========================================================================================================================================================================================
Extra: {
//˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
//˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜
function IsExtraEnabled(extraName)
{
    if (frontol.userValues.get(extraName) == "1")
        return true;
    return false;
}
//==========================================================================================================================================================================================
//TaxKyrgyzstan BEGIN
//˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜-˜˜˜˜˜˜˜
//˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜ ExtraTaxKyrgyzstan

function FuncAct_ExtraTaxKyrgyzstan()
{
    CalculateSalesTaxKirg_ExtraTaxKyrgyzstan();
    LoadPayment_ExtraTaxKyrgyzstan();
}

//˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜
//frontol.currentDocument.userValues.get("NeedCalc") = {"1", ˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜; "0", ˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜}
function CalculateSalesTaxKirg_ExtraTaxKyrgyzstan()
{
    if (frontol.currentDocument.userValues.get("NeedCalc") == "1")
    {
        for (frontol.currentDocument.position.index = 1; frontol.currentDocument.position.index <= frontol.currentDocument.position.count; frontol.currentDocument.position.index++)
        {
            if (frontol.currentDocument.position.storno == 0 && frontol.currentDocument.position.price > 0)
            {
                if (frontol.currentDocument.position.ware.maxDiscount != 0)
                {
                    frontol.currentDocument.position.setSpecialPrice(frontol.currentDocument.position.ware.price - (frontol.currentDocument.position.ware.price / 1.13 * 0.01), 1);
                }
                else
                {
                    frontol.currentDocument.position.setSpecialPrice(frontol.currentDocument.position.ware.price - (frontol.currentDocument.position.ware.price / 1.13 * 0.01), 0);
                }
            }
        }
        frontol.currentDocument.userValues.set("IsDecreasedPricesForTax", "1");
    }

    if (frontol.currentDocument.userValues.get("NeedCalc") == "0")
    {
        for (frontol.currentDocument.position.index = 1; frontol.currentDocument.position.index <= frontol.currentDocument.position.count; frontol.currentDocument.position.index++)
        {
            if (frontol.currentDocument.position.storno == 0 && frontol.currentDocument.position.price > 0)
            {
                if (frontol.currentDocument.position.ware.maxDiscount != 0)
                {
                    frontol.currentDocument.position.setSpecialPrice(frontol.currentDocument.position.ware.price, 1);
                }
                else
                {
                    frontol.currentDocument.position.setSpecialPrice(rontol.currentDocument.position.ware.price, 0);
                }
            }
        }
        frontol.currentDocument.userValues.remove("IsDecreasedPricesForTax");
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜
function ControlEnterPayment_ExtraTaxKyrgyzstan(payment)
{
    if (payment.type.code == 1 && frontol.currentDocument.userValues.get("IsDecreasedPricesForTax") == "1")
    {
        frontol.actions.showError("˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜!\n˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜!");
    }

    if (payment.type.code != 1 && frontol.currentDocument.userValues.get("IsDecreasedPricesForTax") == "")
    {
        for (frontol.currentDocument.payment.index = 1; frontol.currentDocument.payment.index <= frontol.currentDocument.payment.count; frontol.currentDocument.payment.index++)
        {
            if (frontol.currentDocument.payment.type.code == 1)
            {
                frontol.actions.showError("˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜!\n˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜!");
            }

            if (frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("BonusPaymentCode")) ||
                frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DiscountPaymentCode")) ||
                frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("DepositPaymentCode")) ||
                frontol.currentDocument.payment.type.code == Number(frontol.userValues.get("CouponPaymentCode")))
            {
                frontol.actions.showError("˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜! ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜!");
            }
        }

        SavePayment_ExtraTaxKyrgyzstan(payment.type.code, payment.sumInBaseCurrency);

        frontol.currentDocument.userValues.set("NeedCalc", "1");

        SendKey(frontol.userValues.get("ExtraTaxKyrgyzstanKeyMacros"));

        frontol.actions.cancel();
    }
}

//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜
function ControlStornoPayment_ExtraTaxKyrgyzstan()
{
    if (frontol.currentDocument.payment.count == 0 && frontol.currentDocument.userValues.get("IsDecreasedPricesForTax") == "1")
    {
        frontol.currentDocument.userValues.set("NeedCalc", "0");
        frontol.actions.wait("˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜...", 1);
        SendKey(frontol.userValues.get("ExtraTaxKyrgyzstanKeyMacros"));
    }
}

function SavePayment_ExtraTaxKyrgyzstan(paymentCode, paymentSum)
{
    var stringPayment = "" + paymentCode + "&" + paymentSum;
    frontol.currentDocument.userValues.set("PaymentTaxKirg", stringPayment);
}

function LoadPayment_ExtraTaxKyrgyzstan()
{
    if (frontol.currentDocument.userValues.get("PaymentTaxKirg") == "")
    {
        return;
    }

    var stringPaymentArr = frontol.currentDocument.userValues.get("PaymentTaxKirg").split("&");
    var paymentCode = Number(stringPaymentArr[0]);
    var paymentSum = Number(stringPaymentArr[1]);

    if (GetSumForPaymentFromPositions(frontol.currentDocument) < paymentSum)
    {
        paymentSum = 0;
    }

    frontol.currentDocument.addPayment(paymentCode, paymentSum);

    frontol.currentDocument.userValues.remove("PaymentTaxKirg");
}

//TaxKyrgyzstan END
//==========================================================================================================================================================================================
// ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜
function RudGiftCards()
{
    this.DB = "DRIVER=Firebird/InterBase(r) driver;DBNAME=localhost:C:\\AtolBase\\GiftCard.gdb;UID=sysdba;PWD=masterkey";
    this.BaseID = "P" + frontol.codeWorkplace;

    this.ExecSQL = function(Str)
        {
            var Conn = new ActiveXObject("ADODB.Connection");
            Conn.Provider = "MSDASQL.1";
            Conn.Open(this.DB);
            Conn.BeginTrans;

            var qSelect = new ActiveXObject("ADODB.Command");
            qSelect.ActiveConnection = Conn;
            qSelect.CommandText = Str;

            var C = qSelect.Execute;

            Conn.CommitTrans();
            return C;
        };

    this.upload = function()
        {
            for(i=1; i<= frontol.currentDocument.position.count; i++)  //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜
            {
                frontol.currentDocument.position.index = i;

                if(frontol.currentDocument.position.storno) continue;

                if(frontol.currentDocument.position.activatedGiftCard)
                {
                    //frontol.actions.showMessage(frontol.currentDocument.position.activatedGiftCard.giftCard.value);

                    Str = "INSERT INTO TRANZ (mCODE,mVID,mNAME,mDATE,mSUM,mSTAT,mBID,mACT) VALUES (";

                    frontol.currentDocument.position.activatedGiftCard.giftCard.counter.index = 1;

                    Str = Str + frontol.currentDocument.position.activatedGiftCard.giftCard.code;
                    Str = Str + ","  + frontol.currentDocument.position.activatedGiftCard.giftCard.type.code;
                    Str = Str + ",'" + frontol.currentDocument.position.activatedGiftCard.giftCard.value + "'";
                    Str = Str + ",'TODAY'";
                    Str = Str + "," + frontol.currentDocument.position.activatedGiftCard.giftCard.counter.value;
                    Str = Str + "," + frontol.currentDocument.position.activatedGiftCard.giftCard.newStatus;
                    Str = Str + ",'" + this.BaseID+"'";
                    Str = Str + ",1";
                    Str = Str + ")";
                    this.ExecSQL(Str);
                    //frontol.actions.showMessage(Str);
                }
            }

            for(i=1; i <= frontol.currentDocument.payment.count; i++)   //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜
            {
                frontol.currentDocument.payment.index = i;

                if(frontol.currentDocument.payment.giftCard)
                {
                    //frontol.actions.showMessage("˜˜˜˜˜˜ "+frontol.currentDocument.payment.giftCard.value);

                    frontol.currentDocument.payment.giftCard.counter.index = 1;
                    Str = "INSERT INTO TRANZ (mCODE,mVID,mNAME,mDATE,mSUM,mSTAT,mBID,mACT) VALUES (";
                    Str = Str + frontol.currentDocument.payment.giftCard.code;
                    Str = Str + ", " + frontol.currentDocument.payment.giftCard.type.code;
                    Str = Str + ",'" + frontol.currentDocument.payment.giftCard.value + "'";
                    Str = Str + ",'TODAY'";
                    Str = Str + "," + frontol.currentDocument.payment.giftCard.counter.value;
                    Str = Str + "," + frontol.currentDocument.payment.giftCard.newStatus;
                    Str = Str + ",'" + this.BaseID+"'";
                    Str = Str + ",1";
                    Str = Str + ")";
                    this.ExecSQL(Str);
                    //frontol.actions.showMessage(Str);
                }
            }
        };
}
//==========================================================================================================================================================================================
// ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
function manualGetLoyaltyPrograms()
{
    var rxLoyaltyPrograms = new LoyaltyPrograms();
    rxLoyaltyPrograms.get();
}

function LoyaltyPrograms()
{
    this.userValue = "rxLoyaltyPrograms";
    // ˜˜˜˜ ˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    this.selectionEnabled = function()
        {
            var stringLoyaltyPrograms = frontol.userValues.get(this.userValue);

            if(!stringLoyaltyPrograms) return false;

            var arrayLoyaltyPrograms = stringLoyaltyPrograms.split(";");

            // ˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ 2 - ˜˜˜˜˜˜ ˜˜˜
            if(arrayLoyaltyPrograms.length < 2) return false;

            var loyaltyPrograms = {
                "Ids": "",
                "Names": ""
            };

            for(var i = 0; i < arrayLoyaltyPrograms.length; i++)
            {
                var stringLoyaltyProgram = arrayLoyaltyPrograms[i];

                var arrayLoyaltyProgram = stringLoyaltyProgram.split("&");

                if(arrayLoyaltyProgram.length < 2) return false;

                if(loyaltyPrograms.Ids)
                {
                    loyaltyPrograms.Ids += "\n";
                }

                loyaltyPrograms.Ids += arrayLoyaltyProgram[0];

                if(loyaltyPrograms.Names)
                {
                    loyaltyPrograms.Names += "\n";
                }

                loyaltyPrograms.Names += arrayLoyaltyProgram[1];
            }

            if(!loyaltyPrograms.Ids)
            {
                return false;
            }
            else
            {
                return loyaltyPrograms;
            }
        };
    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    this.save = function(list)
        {
            if(!list) return;

            if(!("BonusPrograms" in list)) return;

            var listLoyaltyPrograms = "";
            // ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
            frontol.userValues.set(this.userValue, "");

            var bonusPrograms = list.BonusPrograms;

            for(var i = 0; i < bonusPrograms.length; i++)
            {
                if("BonusProgramId" in bonusPrograms[i] && "BonusProgramName" in bonusPrograms[i])
                {
                    if(listLoyaltyPrograms)
                    {
                        listLoyaltyPrograms += ";";
                    }

                    listLoyaltyPrograms += bonusPrograms[i].BonusProgramId.toString() + "&" + bonusPrograms[i].BonusProgramName.toString();
                }
            }

            if(listLoyaltyPrograms)
            {
                frontol.userValues.set(this.userValue, listLoyaltyPrograms);
            }
        };
    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    this.get = function()
        {
            var result = {
                success: false,
                message: "",
                data: ""
            };

            var processingServerAddress = frontol.userValues.get("ServerAddress");

            if (!processingServerAddress)
            {
                frontol.actions.showMessage(SERVER_ADDRESS_NOT_SET_MESSAGE, Icon.Error);
                return;
            }

            //˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
            var license = frontol.userValues.get("License");

            if (!license)
            {
                frontol.actions.showError(LICENSE_NOT_SET_MESSAGE);
            }

            result = sendHttpRequest(
                processingServerAddress + "/BonusWebApi/api/processing/GetAllBonusProgram?License=" + license,
                "POST",
                "",
                "loyalty_programs"
            );

            if(result.success)
            {
                this.save(result.data);
            }
            else
            {
                frontol.actions.showError(result.message);
            }
        };
}
// ˜˜˜˜ QR-˜˜˜˜ ˜˜˜˜˜ ˜ ˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜
function manualInputCardCodeQR()
{
    var cardCodeEncoded = base64_encode("123");
    var cardCodeQR = frontol.actions.inputString("˜˜˜˜˜˜˜˜˜˜˜˜ QR-˜˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜", cardCodeEncoded);

    if(cardCodeQR)
    {
        var cardCodeDecoded = base64_decode(cardCodeQR);
        var cardCode = cardCodeDecoded.match("[0-9]{3}");

        if(cardCode)
        {
            var WShell = new ActiveXObject("WScript.Shell");

            WShell.SendKeys ("^{F7}"); // ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ Ctrl-F7
            WShell.SendKeys (cardCode[0]);
            WShell.SendKeys ("{ENTER}");
        }
    }
}
//==========================================================================================================================================================================================
//Categories BEGIN
//˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
//˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜
Head: {
//˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜
var tree = {};

var currentCategoryIndex = {
    get: function() {
        return frontol.userValues.get("currentCategoryIndex");
    },
    set: function(index) {
        frontol.userValues.set("currentCategoryIndex", index.toString());
    }
};

var currentSubcategoryIndex = {
    get: function() {
        return frontol.userValues.get("currentSubcategoryIndex");
    },
    set: function(index) {
        frontol.userValues.set("currentSubcategoryIndex", index.toString());
    }
};

var currentWareIndex = {
    get: function() {
        return frontol.userValues.get("currentWareIndex");
    },
    set: function(index) {
        frontol.userValues.set("currentWareIndex", index.toString());
    }
};

var maxCategoriesCount = 9;
var maxSubcategoriesCount = 9;
var maxWaresCount = 56;

}

Main: {

function $$cancelIfDocumentNotExistOrNotEmpty()
{
   var currentDocument = frontol.currentDocument;
   if( !currentDocument || currentDocument.position.count > 0 )
       // ˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜ - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜
       // ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
       _Cancel();
}

function $$cancelIfDocumentExist()
{
    if (frontol.currentDocument)
       _Cancel();
}

function loadTree()
{
    var filePath = GetInputFilePath();
    var stringXml = ReadTextFromFile(filePath);
    if (stringXml)
        tree = GetObjFromXml(stringXml);
    else
        tree = {};

    tree = SortAndCorrectTree(tree);

    ClearCategoriesNames();
    if(tree.Data)
        SetCategoriesNames(tree.Data.Category);
}

function SortAndCorrectTree(tree)
{
    if (tree.Data)
    {
        if (!tree.Data.Category.length)
            tree.Data.Category = [tree.Data.Category];
        for (var i = 0; i < tree.Data.Category.length; i++)
        {
            if (!tree.Data.Category[i].Subcategory.length)
                 tree.Data.Category[i].Subcategory = [tree.Data.Category[i].Subcategory];
            for (var j = 0; j < tree.Data.Category[i].Subcategory.length; j++)
            {
                if (tree.Data.Category[i].Subcategory[j].Product.length > 1)
                    tree.Data.Category[i].Subcategory[j].Product.sort(compareProducts);
                else
                    tree.Data.Category[i].Subcategory[j].Product = [tree.Data.Category[i].Subcategory[j].Product];
            }
        }
    }
    return tree;
}

function compareCategories(categoryA, categoryB) {
    if (categoryA.attributes.Name > categoryB.attributes.Name)
        return 1;
    else
        return -1;
}

function compareProducts(productA, productB) {
    if (productA.attributes.DisplayName > productB.attributes.DisplayName)
        return 1;
    else
        return -1;
}

function sendKeysToOpenDocument()
{
    if( frontol.currentDocument ){}
    else {
        // ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
        var keysOpenSaleDocument = "+{F10}"; // Shift-{F10}
        var WShell = new ActiveXObject("WScript.Shell");
        WShell.SendKeys( keysOpenSaleDocument );
    }
}

function AddCurrentWare()
{
    frontol.currentDocument.addPosition(GetTypeId(), GetCurrentWareId(), null, 1, null, true);
}

function GetCurrentWareId()
{
    return tree.Data.Category[currentCategoryIndex.get()].Subcategory[currentSubcategoryIndex.get()].Product[currentWareIndex.get()].attributes.Id;
}

function GetTypeId()
{
    if (tree.Data)
        return tree.Data.TypeId['#text'];
    return "";
}

}

Categories: {

function ClearCategoriesNames()
{
    for (var i = 0; i < maxCategoriesCount; i++)
        frontol.userValues.remove("c" + (i+1).toString());
}

function SetCategoriesNames(Categories)
{
    for (var i = 0; i < Categories.length; i++)
    {
        if (i >= maxCategoriesCount)
            break;
        frontol.userValues.set("c" + (i+1).toString(), Categories[i].attributes.Name);
    }
}

function SetCurrentCategory(index)
{
    if (!tree || !tree.Data.Category[index])
        _Cancel();
    currentCategoryIndex.set(index);
    ClearSubcategoriesNames();
    SetSubcategoriesNames(tree.Data.Category[currentCategoryIndex.get()].Subcategory);
}

c:{
function $c1()
{
    SetCurrentCategory(0);
}

function $c2()
{
    SetCurrentCategory(1);
}

function $c3()
{
    SetCurrentCategory(2);
}

function $c4()
{
    SetCurrentCategory(3);
}

function $c5()
{
    SetCurrentCategory(4);
}

function $c6()
{
    SetCurrentCategory(5);
}

function $c7()
{
    SetCurrentCategory(6);
}

function $c8()
{
    SetCurrentCategory(7);
}

function $c9()
{
    SetCurrentCategory(8);
}

}

}

Subcategories: {

function ClearSubcategoriesNames()
{
    for (var i = 0; i < maxSubcategoriesCount; i++)
        frontol.userValues.remove("s" + (i+1).toString());
}

function SetSubcategoriesNames(Subcategories)
{
    for (var i = 0; i < Subcategories.length; i++)
    {
        if (i >= maxSubcategoriesCount)
            break;
        frontol.userValues.set("s" + (i+1).toString(), Subcategories[i].attributes.Name);
    }
}

function SetCurrentSubcategory(index)
{
    if (!tree.Data.Category[currentCategoryIndex.get()].Subcategory[index])
        _Cancel();
    currentSubcategoryIndex.set(index);
    SetWaresPageNumber(1);
    ShowWares();
}

s:{
function $s1()
{
    SetCurrentSubcategory(0);
}

function $s2()
{
    SetCurrentSubcategory(1);
}

function $s3()
{
    SetCurrentSubcategory(2);
}

function $s4()
{
    SetCurrentSubcategory(3);
}

function $s5()
{
    SetCurrentSubcategory(4);
}

function $s6()
{
    SetCurrentSubcategory(5);
}

function $s7()
{
    SetCurrentSubcategory(6);
}

function $s8()
{
    SetCurrentSubcategory(7);
}

function $s9()
{
    SetCurrentSubcategory(8);
}

}

}

Wares: {

function ShowWares()
{
    ClearWaresNames();
    SetWaresNames(tree.Data.Category[currentCategoryIndex.get()].Subcategory[currentSubcategoryIndex.get()].Product);
}

function ClearWaresNames()
{
    for (var i = 0; i < maxWaresCount; i++)
        frontol.userValues.remove("w" + (i+1).toString());
}

function SetWaresNames(Wares)
{
    var startIndex = (GetWaresPageNumber()-1) * maxWaresCount;
    if (startIndex >= Wares.length)
        startIndex = 0;

    var counter = 0;
    for (var i = startIndex; i < Wares.length; i++)
    {
        if (counter >= maxWaresCount)
            break;
        frontol.userValues.set("w" + (counter+1).toString(), Wares[i].attributes.DisplayName);
        counter++;
    }
}

function SetCurrentWare(index)
{
    index += (GetWaresPageNumber() - 1) * maxWaresCount;
    if (!tree.Data.Category[currentCategoryIndex.get()].Subcategory[currentSubcategoryIndex.get()].Product[index])
        _Cancel();
    currentWareIndex.set(index);
    AddCurrentWare();
}

function $$nextWaresPage()
{
    var waresCount = tree.Data.Category[currentCategoryIndex.get()].Subcategory[currentSubcategoryIndex.get()].Product.length;
    var currentPageNumber = GetWaresPageNumber();
    if (currentPageNumber * maxWaresCount >= waresCount)
        currentPageNumber = 1;
    else
        currentPageNumber++;
    SetWaresPageNumber(currentPageNumber);
    ShowWares();
}

function GetWaresPageNumber()
{
    var pageNumber = frontol.userValues.get("WaresPageNumber");
    if (!pageNumber || pageNumber < 1)
        pageNumber = 1;
    return Number(pageNumber);
}

function SetWaresPageNumber(number)
{
    frontol.userValues.set("WaresPageNumber", number.toString());
}

w: {
function $w1()
{
    SetCurrentWare(0);
}

function $w2()
{
    SetCurrentWare(1);
}

function $w3()
{
    SetCurrentWare(2);
}

function $w4()
{
    SetCurrentWare(3);
}

function $w5()
{
    SetCurrentWare(4);
}

function $w6()
{
    SetCurrentWare(5);
}

function $w7()
{
    SetCurrentWare(6);
}

function $w8()
{
    SetCurrentWare(7);
}

function $w9()
{
    SetCurrentWare(8);
}

function $w10()
{
    SetCurrentWare(9);
}

function $w11()
{
    SetCurrentWare(10);
}

function $w12()
{
    SetCurrentWare(11);
}

function $w13()
{
    SetCurrentWare(12);
}

function $w14()
{
    SetCurrentWare(13);
}

function $w15()
{
    SetCurrentWare(14);
}

function $w16()
{
    SetCurrentWare(15);
}

function $w17()
{
    SetCurrentWare(16);
}

function $w18()
{
    SetCurrentWare(17);
}

function $w19()
{
    SetCurrentWare(18);
}

function $w20()
{
    SetCurrentWare(19);
}

function $w21()
{
    SetCurrentWare(20);
}

function $w22()
{
    SetCurrentWare(21);
}

function $w23()
{
    SetCurrentWare(22);
}

function $w24()
{
    SetCurrentWare(23);
}

function $w25()
{
    SetCurrentWare(24);
}

function $w26()
{
    SetCurrentWare(25);
}

function $w27()
{
    SetCurrentWare(26);
}

function $w28()
{
    SetCurrentWare(27);
}

function $w29()
{
    SetCurrentWare(28);
}

function $w30()
{
    SetCurrentWare(29);
}

function $w31()
{
    SetCurrentWare(30);
}

function $w32()
{
    SetCurrentWare(31);
}

function $w33()
{
    SetCurrentWare(32);
}

function $w34()
{
    SetCurrentWare(33);
}

function $w35()
{
    SetCurrentWare(34);
}

function $w36()
{
    SetCurrentWare(35);
}

function $w37()
{
    SetCurrentWare(36);
}

function $w38()
{
    SetCurrentWare(37);
}

function $w39()
{
    SetCurrentWare(38);
}

function $w40()
{
    SetCurrentWare(39);
}

function $w41()
{
    SetCurrentWare(40);
}

function $w42()
{
    SetCurrentWare(41);
}

function $w43()
{
    SetCurrentWare(42);
}

function $w44()
{
    SetCurrentWare(43);
}

function $w45()
{
    SetCurrentWare(44);
}

function $w46()
{
    SetCurrentWare(45);
}

function $w47()
{
    SetCurrentWare(46);
}

function $w48()
{
    SetCurrentWare(47);
}

function $w49()
{
    SetCurrentWare(48);
}

function $w50()
{
    SetCurrentWare(49);
}

function $w51()
{
    SetCurrentWare(50);
}

function $w52()
{
    SetCurrentWare(51);
}

function $w53()
{
    SetCurrentWare(52);
}

function $w54()
{
    SetCurrentWare(53);
}

function $w55()
{
    SetCurrentWare(54);
}

function $w56()
{
    SetCurrentWare(55);
}

}

}

FileRead: {

function GetDirectory()
{
    var wshShell = new ActiveXObject("WScript.Shell");
    var lnkPath = wshShell.ExpandEnvironmentStrings("%SystemDrive%\\CategoriesDirectory.lnk");
    var objShortcut = wshShell.CreateShortcut(lnkPath);
    return objShortcut.TargetPath;
}

function GetInputFilePath()
{
    return GetDirectory() + "\\categories.xml";
}

function ReadTextFromFile(filePath)
{
    var fso = new ActiveXObject("Scripting.FileSystemObject");

    if (!fso.FileExists(filePath))
        return null;

    var result = "";

    try
    {
        var read = fso.OpenTextFile(filePath, 1);
        result = read.ReadAll();
    }
    catch(e)
    {
        _SM("˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜!" + "\n" + e.name + ": " + e.message, Icon.Error);
    }
    finally
    {
        try { read.Close(); } catch(e) {}
    }

    return result;
}

}

httpFunctions:
{
    function sendHttpRequest(uri, method, data, comment, documentType, delay)
    {
        if(typeof delay == "undefined" || typeof delay != "boolean")
        {
            delay = false;
        }

        if(frontol.userValues.get("NoDelay") == "1")
        {
            delay = false; // ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜ "˜˜˜˜˜˜˜˜˜˜"
        }

        if(typeof documentType == "undefined")
        {
            documentType = 0;
        }

        var result = {
            success: false,
            message: "",
            data: ""
        };

        if(!uri)
        {
            result.message = "˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜";
            return result;
        }

        if( !method || (method != "POST" && method != "GET") )
        {
            result.message = "˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜";
            return result;
        }

        uri = GetCorrectServerAddress(uri);

        //˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜
        var switchStatus = 0;

        //˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        var request = new ActiveXObject("Microsoft.XMLHTTP");

        request.open(method, uri, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function()
        {
            //˜˜˜˜ ˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜, ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜
            if (request.readyState != 4)
            {
                return;
            }
            //˜˜˜˜ ˜˜ ˜˜˜˜˜˜, ˜˜˜˜ ˜˜˜˜˜ ˜˜˜˜˜˜˜
            //˜˜˜˜˜˜˜˜ ˜˜˜˜
            if (request.status == 200) // HTTP 200
            {
                switchStatus = 1;
            }
            else if (400 < request.status && request.status <= 599) // HTTP codes
            {
                switchStatus = 3;
            }
            else if(request.status == 400) // HTTP 400
            {
                switchStatus = 4;
            }
            else if(12000 <= request.status && request.status <= 12175) // IE status codes
            {
                switchStatus = 5;
            }
            else // unknown
            {
                switchStatus = 6;
            }
        };

        //˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
        var requestDateTime = getISODateTimeToString();
        request.send(data);

        var timeoutQuery = 30;
        if (frontol.userValues.get("TimeoutQuery") != "")
            timeoutQuery = Number(frontol.userValues.get("TimeoutQuery"));

        //˜˜˜˜˜˜ ˜˜˜˜˜˜˜, ˜˜˜˜ ˜˜˜˜ ˜˜˜˜˜˜
        for (var i = 1; i <= timeoutQuery; i++)
        {
            if (request.readyState != 4)
            {
                frontol.actions.wait(REQUEST_IN_PROCESS_MESSAGE, 1);
            }
            else
            {
                break;
            }
        }

        //˜˜˜˜ ˜˜˜ ˜˜˜˜˜˜˜, ˜˜˜˜˜ onreadystatechange ˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜
        frontol.actions.wait(REQUEST_IN_PROCESS_MESSAGE, 1);

        var responseDateTime = getISODateTimeToString();

        //˜˜˜˜ ˜˜˜˜˜ ˜˜˜ ˜ ˜˜ ˜˜˜ ˜˜˜˜˜˜˜, ˜˜˜˜˜˜˜ ˜˜˜˜˜˜, ˜˜˜˜˜˜˜˜ ˜˜˜˜
        if (request.readyState != 4)
        {
            var requestState = request.readyState;
            request.abort();
            switchStatus = 2;
            responseDateTime = "Time out";
        }

        //qatest
        if(comment)
        {
            TestQA(data, request, comment, requestDateTime, responseDateTime);
        }

        result.data = switchStatus;

        if (frontol.userValues.get("NoDelay") == "1" && switchStatus > 1)
        {
            switchStatusReg = 4;
        }

        //˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜
        switch (switchStatus)
        {
            //1 - ˜˜˜˜˜˜˜˜ 200 - ˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜
            case 1:
            {
                try
                {
                    if("responseText" in request && request.responseText)
                    {
                        result.data = JSON.parse(request.responseText);
                    }
                    result.success = true;
                }
                catch(e)
                {
                    result.message = ERROR_MESSAGE + e.name + ": " + e.message;
                }
                return result;
            }
            //2 - ˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
            case 2:
            {
                var errorInformation =
                    NO_SERVER_RESPONSE_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE + HTTP_STATE_MESSAGE + requestState + CR_MESSAGE;
                if(documentType && delay)
                {
                    frontol.currentDocument.userValues.set("Delay", 1);
                    DelayDocument(data, documentType);
                    errorInformation += DOCUMENT_WILL_BE_SEND_LATER_MESSAGE;
                }
                result.message = errorInformation;
                return result;
            }
            //3 - ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ - ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
            case 3:
            {
                if(documentType && delay)
                {
                    frontol.currentDocument.userValues.set("Delay", 1);
                    DelayDocument(data, documentType);
                }
                var errorInformation =
                    SERVER_ERROR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE + OR_MESSAGE + CONTACT_SUPPORT_MESSAGE + HTTP_CODE_MESSAGE + request.status + CR_MESSAGE;

                if ("statusText" in request && request.statusText != "")
                {
                    errorInformation += ": " + request.statusText;
                }
                if ("responseText" in request && request.responseText != "")
                {
                    errorInformation += DESCRIPTION_MESSAGE + DecryptServerError(request.responseText) + CR_MESSAGE;
                }

                if(documentType && delay)
                {
                    errorInformation += DOCUMENT_WILL_BE_SEND_LATER_MESSAGE;
                }

                result.message = errorInformation;
                return result;
            }
            //4 - ˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ - ˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜, ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
            case 4:
            {
                if(documentType && delay)
                {
                    frontol.currentDocument.userValues.set("Delay", 1);
                    DelayDocument(data, documentType);
                }

                //˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜
                var errorInformation = ERROR_MESSAGE;

                if ("responseText" in request && request.responseText != "")
                {
                    errorInformation += DESCRIPTION_MESSAGE + DecryptServerError(request.responseText) + CR_MESSAGE;
                }

                if(documentType && delay)
                {
                    errorInformation += DOCUMENT_WILL_BE_SEND_LATER_MESSAGE;
                }
                result.message = errorInformation;
                return result;
            }
            // 5 - ˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜
            case 5:
            {
                result.message = INTERNET_ERROR_MESSAGE + CONTACT_YOUR_TECHNICIAN_MESSAGE + HTTP_CODE_MESSAGE + request.status;
                return result;
            }
            case 6:
            {
                result.message = UNKNOWN_ERROR_MESSAGE + CONTACT_SUPPORT_MESSAGE + HTTP_CODE_MESSAGE + request.status;
                return result;
            }
            //0 - ˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜˜˜˜, ˜˜ ˜˜˜˜˜˜ ˜˜˜˜ ˜˜ ˜˜˜˜˜
            case 0:
            {
                result.message = UNKNOWN_ERROR_MESSAGE + CONTACT_SUPPORT_MESSAGE;
                return result;
            }
        }
    }
}

SyntaxSugar: {

function _SM(message)
{
    frontol.actions.showMessage(message);
}

function _SE(message)
{
    frontol.actions.showError(message);
}

function _Cancel()
{
    frontol.actions.cancel();
}

}

XmlLibrary:
{
function GetObjFromXml(xmlString)
{
    var dom = new ActiveXObject("Microsoft.XMLDOM");
    var isSuccess = dom.loadXML(xmlString);
    return setJsonObj(dom);
}

var setJsonObj = function(xml) {
    var js_obj = {};
    if (xml.nodeType == 1) {
      if (xml.attributes.length > 0) {
        js_obj.attributes = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          js_obj["attributes"][attribute.nodeName] = attribute.value;
        }
      }
    } else if (xml.nodeType == 3) {
      js_obj = xml.nodeValue;
    }
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof(js_obj[nodeName]) == "undefined") {
          js_obj[nodeName] = setJsonObj(item);
        } else {
          if (typeof(js_obj[nodeName].push) == "undefined") {
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
//˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜
//˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
/* pos - ˜˜˜˜˜˜˜*/
function GetPositionProperties(pos)
{
    var result = {};
    var PropertiesSettings = frontol.userValues.get("PropertiesSettings");
    switch (PropertiesSettings)
    {
        case "SRT":
        {
            var sex;
            for (pos.ware.parent.index = 1; pos.ware.parent.index <= pos.ware.parent.count; pos.ware.parent.index++)
            {
                switch (pos.ware.parent.name.toLowerCase())
                {
                    case "men":
                    {
                        sex = "m";
                        break;
                    }
                    case "women":
                    {
                        sex = "w";
                        break;
                    }
                }
            }
            if (sex != null)
                result.sex = sex;
        }
    }

    return result;
}
}
// Promo action for Auchan D
function RxPromo(db)
{
    //var db = database;

    this.COUNTER_TEMPLATE = "PROMO_COUNTER_";

    // ˜˜˜˜˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜ ˜ ˜˜˜˜˜˜˜˜˜˜
    this.findCashBox = function foundCashBox(cashBoxCode)
    {
        var result = db.query("select * from promo_cashboxes where code=" + cashBoxCode);

        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    this.getParams = function getParams()
    {
        var params = {
            Counter: 0,
            MinChequeSum: 0.0
        };

        var result = db.query("select * from promo_params");

        if(result)
        {
            for (var i = 0; i < result.length; i++)
            {
                var record = [];
                var fields = result[i].split("&");

                for (var j = 0; j < fields.length; j++)
                {
                    var field = fields[j].split(":");

                    record[field[0]] = field[1];
                }

                if("PARAM_NAME" in record && "PARAM_VALUE" in record)
                {
                    switch(record.PARAM_NAME)
                    {
                        case "counter":
                            params.Counter = record.PARAM_VALUE;
                            break;
                        case "min_cheque_sum":
                            params.MinChequeSum = record.PARAM_VALUE;
                            break;
                    }
                }
            }

            return params;
        }
        else
        {
            return false;
        }
    };
    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    this.getCounterNextValue = function getCounterNextValue(counterName)
    {
        var result = db.query("select next value for " + counterName + " from rdb$database");

        if(result)
        {
            for (var i = 0; i < result.length; i++)
            {
                var record = [];

                var fields = result[i].split("&");

                for (var j = 0; j < fields.length; j++)
                {
                    var field = fields[j].split(":");

                    record[field[0]] = field[1];
                }

                if("GEN_ID" in record)
                {
                    return record.GEN_ID;
                }
            }
        }
        else
        {
            return false;
        }
    };
    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    this.getCounterValue = function getCounterValue(counterName)
    {
        var result = db.query("select gen_id(" + counterName + ", 0) from rdb$database");

        if(result)
        {
            for (var i = 0; i < result.length; i++)
            {
                var record = [];

                var fields = result[i].split("&");

                for (var j = 0; j < fields.length; j++)
                {
                    var field = fields[j].split(":");

                    record[field[0]] = field[1];
                }

                if("GEN_ID" in record)
                {
                    return record.GEN_ID;
                }
            }
        }
        else
        {
            return false;
        }
    };
    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜
    this.saveTransaction = function saveTransaction(cheque, cashBoxCode, counterName)
    {
        var result = db.query(
            "insert into promo_transactions values (" +
            "'" + cheque.Date + "', " +
            "'" + cheque.Time + "', " +
            cheque.Number + ", " +
            cheque.Sum + ", " +
            cashBoxCode + ", " +
            "next value for " + counterName + ") returning counter"
        );

        if(result)
        {
            for (var i = 0; i < result.length; i++)
            {
                var record = [];

                var fields = result[i].split("&");

                for (var j = 0; j < fields.length; j++)
                {
                    var field = fields[j].split(":");

                    record[field[0]] = field[1];
                }

                if("COUNTER" in record)
                {
                    return record.COUNTER;
                }
            }
        }
        else
        {
            return false;
        }
    };
    // ˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜
    this.createCounter = function createCounter(counterName)
    {
        var result = db.query("create generator " + counterName);

        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    // ˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    this.checkCounter = function checkCounter(counterName)
    {
        var result = db.query("select gen_id(" + counterName + ", 0) from rdb$database", true);

        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    // ˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜
    this.deleteOldCounters = function deleteOldCounters(counterName)
    {
        counterName = counterName.toUpperCase();

        var queryString =
            "select rdb$generator_name from rdb$generators where rdb$generator_name like '" + this.COUNTER_TEMPLATE + "%' and rdb$generator_name != '" + counterName + "'";

        var generators = db.query(queryString);

        if(generators)
        {
            for (var i = 0; i < generators.length; i++)
            {
                var record = [];

                var fields = generators[i].split("&");

                for (var j = 0; j < fields.length; j++)
                {
                    var field = fields[j].split(":");

                    record[field[0]] = field[1];
                }

                if("RDB$GENERATOR_NAME" in record)
                {
                    var result = this.deleteCounter(record.RDB$GENERATOR_NAME);

                    if(!result)
                    {
                        return false;
                    }
                }
            }

            return true;
        }
        else
        {
            return false;
        }
    };

    this.deleteCounter = function deleteCounter(counterName)
    {
        var result = db.query("drop generator " + counterName);

        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
}

function RxDB(connectionObject)
{
    var connection = null;
    var connectionString = "";
    var isConnected = false;
    // ˜˜˜˜˜˜˜˜˜˜ ˜ ˜˜˜˜˜ ˜˜˜˜˜˜
    this.connect = function connect()
    {
        connection = new ActiveXObject("ADODB.Connection");

        connectionString =
            "driver=" + connectionObject.Driver + ";" +
            "dbname=" + connectionObject.Host + ":" + connectionObject.DbName + ";" +
            "uid=" + connectionObject.User + ";" +
            "pwd=" + connectionObject.Password + ";" +
            "charset=" + connectionObject.CharSet + ";" +
            "auto_commit=true;auto_commit_level=0x1000;"
        ;

        connection.ConnectionString = connectionString;

        try
        {
            connection.Open(connection.ConnectionString);
            isConnected = true;
        }
        catch(e)
        {
            _SM(
                "Database connection error: [" + e.number + "], " + e.message + "\n" +
                "Connection string: " + connectionString
            );
            isConnected = false;
        }

        return isConnected;
    };
    // ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ ˜˜˜˜˜ select
    this.execute = function execute(queryString, silent)
    {
        if(!isConnected)
        {
            return false;
        }

        if(typeof silent == "undefined" || typeof silent != "boolean")
        {
            silent = false;
        }

        try
        {
            connection.Execute(queryString);

            var errCount = connection.Errors.Count;

            if(errCount !== 0) //write the errors
            {
                for(var i = 0; i < errCount; i++)
                {

                    var err = connection.Errors.Item(i);

                    if(!silent)
                    {
                        _SM(err);
                    }
                }
                // clean out any existing errors
                connection.Errors.Clear;

                return false;
            }

            return true;
        }
        catch(e)
        {
            if(!silent)
            {
                _SM("Execution error of query '" + queryString + "': [" + e.number + "], " + e.message);
            }

            return false;
        }
    };
    //----------------------------------------------------------------------------------------------------------
    // ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜
    this.query = function query(queryString, silent)
    {
        var recordSet = null;
        var result = [];

        if(!isConnected)
        {
            return false;
        }

        if(typeof silent == "undefined" || typeof silent != "boolean")
        {
            silent = false;
        }

        try
        {
            recordSet = new ActiveXObject("ADODB.Recordset");
            recordSet.Open(queryString, connection); // 3 - adOpenStatic
        }
        catch(e)
        {
            if(!silent)
            {
                _SM("Execution error of query '" + queryString + "': [" + e.number + "], " + e.message);
            }

            return false;
        }

        var errCount = connection.Errors.Count;

        if(errCount !== 0) //write the errors
        {
            for(var i = 0; i < errCount; i++)
            {

                var err = connection.Errors.Item(i);

                if(!silent)
                {
                    _SM(err);
                }
            }
            // clean out any existing errors
            connection.Errors.Clear;

            return false;
        }
        // ˜˜˜˜˜˜ ˜˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜˜, ˜˜ ˜˜˜˜˜˜ ˜˜ ˜˜˜˜˜˜
        if(recordSet.State == 0)
        {
            return true;
        }

        if(recordSet.EOF && recordSet.BOF)
        {
            return false;
        }

        try
        {
            while(!recordSet.EOF)
            {
                var fieldString = "";

                for (var i = 0; i < recordSet.Fields.Count; i++)
                {
                    var fieldName = recordSet.Fields.Item(i).Name.toString();
                    var fieldValue = recordSet.Fields.Item(i).Value.toString();

                    i > 0 ? (fieldString += "&" + fieldName + ":" + fieldValue) : (fieldString += fieldName + ":" + fieldValue);
                }

                result.push(fieldString);

                recordSet.MoveNext();
            }

            return result;
        }
        catch(e)
        {
            if(!silent)
            {
                _SM("Getting query '" + queryString + "' result error : [" + e.number + "], " + e.message);
            }
            return false;
        }
    };
    //----------------------------------------------------------------------------------------------------------
    // ˜˜˜˜˜˜˜˜˜ ˜˜˜˜˜˜ select
    this.select = function select(queryString, silent)
    {
        var recordSet = null;
        var result = [];

        if(typeof silent == "undefined" || typeof silent != "boolean")
        {
            silent = false;
        }

        if(!isConnected)
        {
            return false;
        }

        try
        {
            recordSet = new ActiveXObject("ADODB.Recordset");

            recordSet.Open(queryString, connection);
        }
        catch(e)
        {
            if(!silent)
            {
                _SM("Execution error of query '" + queryString + "': [" + e.number + "], " + e.message);
            }

            return false;
        }

        if(recordSet.EOF && recordSet.BOF)
        {
            return false;
        }

        try
        {
            recordSet.MoveFirst();

            while(!recordSet.EOF)
            {
                var fieldString = "";

                for (var i = 0; i < recordSet.Fields.Count; i++)
                {
                    var fieldName = recordSet.Fields.Item(i).Name;
                    var fieldValue = recordSet.Fields.Item(i).Value;

                    i > 0 ? (fieldString += "&" + fieldName + ":" + fieldValue) : (fieldString += fieldName + ":" + fieldValue);
                }

                result.push(fieldString);

                recordSet.MoveNext();
            }

            return result;
        }
        catch(e)
        {
            if(!silent)
            {
                _SM("Getting query '" + queryString + "' result error : [" + e.number + "], " + e.message);
            }
            return false;
        }
    };
}

function getClientUUID()
{
    return frontol.userValues.get("ClientUUID");
}

function getDateToString(separator)
{
    if(typeof separator == "undefined" || typeof separator != "string")
    {
        separator = "";
    }

    var dateTime = new Date();
    var dateTimeYear = dateTime.getFullYear();
    var dateTimeMonth = (dateTime.getMonth()+1 <= 9) ? "0" + (dateTime.getMonth()+1).toString() : (dateTime.getMonth()+1).toString();
    var dateTimeDate = (dateTime.getDate() <= 9) ? "0" + dateTime.getDate().toString() : dateTime.getDate().toString();

    return (dateTimeYear + separator + dateTimeMonth + separator + dateTimeDate);
}

//˜˜˜˜˜˜˜˜˜˜ END
//==========================================================================================================================================================================================
