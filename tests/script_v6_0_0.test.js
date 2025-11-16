const assert = require('assert');
const sinon = require('sinon');

describe('_freedomBankSale', function () {
    let sendHttpRequestSimple;
    let showMessage;
    let cancelAct;
    let _getTerminalHttpAddress;
    let Icon;
    let CR_MESSAGE;
    let CONTACT_YOUR_TECHNICIAN_MESSAGE;
    let frontol;
    let _freedomBankSale;

    beforeEach(function () {
        // spies / stubs
        sendHttpRequestSimple = sinon.stub();
        showMessage = sinon.spy();
        cancelAct = sinon.spy();
        _getTerminalHttpAddress = sinon.stub().callsFake(ip => 'http://' + ip);
        Icon = { Error: 'ERROR_ICON' };
        CR_MESSAGE = '\n';
        CONTACT_YOUR_TECHNICIAN_MESSAGE = ' Please contact technician.';

        // minimal frontol.currentDocument shape used by function
        frontol = {
            currentDocument: {
                userValues: {
                    set: sinon.spy(),
                },
                addPayment: sinon.spy(),
            },
        };

        // Inject globals so eval'd function can reference them
        global.sendHttpRequestSimple = sendHttpRequestSimple;
        global.showMessage = showMessage;
        global.cancelAct = cancelAct;
        global._getTerminalHttpAddress = _getTerminalHttpAddress;
        global.Icon = Icon;
        global.CR_MESSAGE = CR_MESSAGE;
        global.CONTACT_YOUR_TECHNICIAN_MESSAGE = CONTACT_YOUR_TECHNICIAN_MESSAGE;
        global.frontol = frontol;

        // define the function under test (copied from source)
        eval(`function _freedomBankSale(payment, terminalIpAdd) {
    var amount = payment.sumInBaseCurrency;
    var dataToSend = {
        task: 'purchase',
        data: {
            amount: amount,
        },
    };
    var url = _getTerminalHttpAddress(terminalIpAdd);
    try {
        var result = sendHttpRequestSimple(url, 'POST', dataToSend);
    } catch (e) {
        showMessage(
            'Ошибка при отправке запроса к терминалу Freedom Bank' +
                CR_MESSAGE +
                CONTACT_YOUR_TECHNICIAN_MESSAGE,
            Icon.Error,
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
                    CR_MESSAGE +
                    CONTACT_YOUR_TECHNICIAN_MESSAGE +
                    CR_MESSAGE +
                    responseData.message,
                Icon.Error,
            );
        }
    } else {
        // Обработка ошибки запроса
        showMessage(
            'Ошибка при подключении к терминалу Freedom Bank' +
                CR_MESSAGE +
                CONTACT_YOUR_TECHNICIAN_MESSAGE,
            Icon.Error,
        );
    }
}`);
        _freedomBankSale = global._freedomBankSale || eval('_freedomBankSale');
    });

    afterEach(function () {
        // clean globals
        delete global.sendHttpRequestSimple;
        delete global.showMessage;
        delete global.cancelAct;
        delete global._getTerminalHttpAddress;
        delete global.Icon;
        delete global.CR_MESSAGE;
        delete global.CONTACT_YOUR_TECHNICIAN_MESSAGE;
        delete global.frontol;
        delete global._freedomBankSale;
    });

    it('calls cancelAct and shows message when sendHttpRequestSimple throws', function () {
        sendHttpRequestSimple.throws(new Error('network'));
        const payment = { sumInBaseCurrency: 100, type: { code: 101 } };
        _freedomBankSale(payment, '1.2.3.4');

        assert(cancelAct.calledOnce, 'cancelAct should be called once');
        assert(showMessage.calledOnce, 'showMessage should be called once');
        const msg = showMessage.firstCall.args[0];
        const icon = showMessage.firstCall.args[1];
        assert(msg.includes('Ошибка при отправке запроса к терминалу Freedom Bank'));
        assert(icon === Icon.Error);
    });

    it('sets RRN and adds payment on success (result == 0)', function () {
        const payment = { sumInBaseCurrency: 250.5, type: { code: 777 } };
        sendHttpRequestSimple.returns({
            success: true,
            data: { data: { result: 0, tagRRN: 'RRN123' } },
        });

        _freedomBankSale(payment, '10.0.0.1');

        assert(frontol.currentDocument.userValues.set.calledOnce, 'userValues.set should be called');
        assert(frontol.currentDocument.userValues.set.calledWith('FreedomBank_RRN', 'RRN123'));
        assert(frontol.currentDocument.addPayment.calledOnce, 'addPayment should be called');
        assert(frontol.currentDocument.addPayment.calledWith(payment.type.code, payment.sumInBaseCurrency, null));
    });

    it('shows processing error when response.result != 0 and does not add payment', function () {
        const payment = { sumInBaseCurrency: 500, type: { code: 101 } };
        sendHttpRequestSimple.returns({
            success: true,
            data: { data: { result: 5, message: 'declined' } },
        });

        _freedomBankSale(payment, '10.0.0.2');

        assert(showMessage.calledOnce, 'showMessage should be called');
        const msg = showMessage.firstCall.args[0];
        assert(msg.includes('Ошибка при обработке платежа'));
        assert(msg.includes('declined'));
        assert(frontol.currentDocument.addPayment.notCalled, 'addPayment should not be called');
    });

    it('shows connection error when result.success is false', function () {
        const payment = { sumInBaseCurrency: 42, type: { code: 101 } };
        sendHttpRequestSimple.returns({ success: false });

        _freedomBankSale(payment, '10.0.0.3');

        assert(showMessage.calledOnce, 'showMessage should be called');
        const msg = showMessage.firstCall.args[0];
        assert(msg.includes('Ошибка при подключении к терминалу Freedom Bank'));
    });
});