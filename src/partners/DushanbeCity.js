// ==============================================================
// DushanbeCity  BEGIN


var DC_URL = 'http://109.74.70.49:96/ashan';
var DC_PAN = '5058270385062681'; //Установите актуальный Qr код
var DC_SIGN = 'f3c945d00836c34c78340f2504f5cc7f';
var DC_QR = 206;

function init_DC() {
	frontol.addEventListener('addPayment', 'DC_AddPaymentBefore', true);
}

function _DC_generateTrainId(payment) {
	return frontol.currentDocument.number +
           frontol.sessionNumber +
           payment.sumInBaseCurrency +
           frontol.codeWorkplace +
           Math.floor(Math.random() * 900);
}

function DC_AddPaymentBefore(payment) {
	var tranid = _DC_generateTrainId(payment);
	//var summapay = Number(frontol.currentDocument.totalSum);
	var summapay = payment.sumInBaseCurrency;
	//Проверяем на тип платежа с ашана
	if (payment.type.code == DC_QR) {
		//writeLog("Выбран тип платежа Qr");
		//Если тип продажа
		if (Doc_IsSale(frontol.currentDocument)) {
			//writeLog("Выбран тип продажа");
			var stringToSend =
				'<action>getpaystatus</action><docNumber>' +
				tranid +
				'</docNumber><pan>' +
				DC_PAN +
				'</pan><summa>' +
				summapay +
				'</summa><sign>' +
				DC_SIGN +
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
				var response = httpClient.PostSync(DC_URL, stringToSend);
			} catch (error) {
				frontol.actions.showMessage(
					'Произошла ошибка: Сервер ДС недоступен, попробуйте позже!',
					Icon.Error
				);
				cancelAct();
				return;
			}
			var code = ReadXml(response, 'code');
			//writeLog("Пришел запрос");
			//============= Если есть ошибки ==================================================
			if (isEmptyValue(code)) {
				loadingScreen.Hide();
				showMessage(
					'Не пришел ответ от DC',
					Icon.Error
				);
				cancelAct();
				//writeLog("Нет соединения или протокол не доступен");
				return;
			}

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
				showMessage(
					ReadXml(response, 'message') +
						CR_MESSAGE +
						'Сумма: ' +
						ReadXml(response, 'summa') +
						CR_MESSAGE +
						'Дата: ' +
						ReadXml(response, 'date') +
						CR_MESSAGE +
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
				showMessage(
					'Информация: ' + ReadXml(response, 'message')
				);

				var dateforfile = ReadXml(response, 'frontoldate');
				cancelAct();
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

// DushanbeCity END
// ==============================================================


