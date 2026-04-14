//////////////////////////////////////////////
//                                          //
//     Modified : 2026-02-17 14:25 2025v7   //
//                                          //
//      Version : 8.0                       //
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

// ==============================================================
// Общие Сообщения BEGIN
// ==============================================================

var CR_MESSAGE = '\n';
var OR_MESSAGE = 'или' + CR_MESSAGE;

var CONTACT_YOUR_TECHNICIAN_MESSAGE =
	'Обратитесь к администратору или к своему техническому специалисту' +
	CR_MESSAGE;
var REQUEST_IN_PROCESS_MESSAGE = 'Обработка запроса...';
var TRY_AGAIN_MESSAGE = 'Попробуйте ещё раз';
var CONTACT_YOUR_TECHNICIAN_MESSAGE =
	'Обратитесь к администратору или к своему техническому специалисту' +
	CR_MESSAGE;
var UNKNOWN_ERROR_MESSAGE = 'Неизвестная ошибка' + CR_MESSAGE;
var NO_SERVER_RESPONSE_MESSAGE = 'Нет ответа от сервера' + CR_MESSAGE;
var INTERNET_ERROR_MESSAGE = 'Ошибка сети' + CR_MESSAGE;
var SERVER_ERROR_MESSAGE = 'Ошибка сервера' + CR_MESSAGE;
var ERROR_MESSAGE = 'Ошибка' + CR_MESSAGE;

var DESCRIPTION_MESSAGE_MESSAGE = 'Описание: ';
var HTTP_STATE_MESSAGE = 'Статус HTTP-запроса->';
var HTTP_CODE_MESSAGE = 'HTTP-код->';


var PROMO_TEXT_KEY = 'promoText';
var PROMO_TEXT_VALUE =
	'Поздравляем! Вы стали нашим 111-м покупателем в гипермаркете Би1. Вы стали обладателем подарка! Спасибо, что Вы с нами!';



// Общие Сообщения END
// ==============================================================

// ==============================================================
// Общие Переменные BEGIN

var FTP_REGEXP_VAR = /^ftp:\/\/(.+):(.+)@([^\/]+)\/(.+)$/;
var LOG_DIR_VAR = 'D:/logs';

var PROMO_TEXT_KEY = "promoText";
var VAR_BANK_RRN_KEY = 'BANK_RRN';

var VAR_GLOBAL_EXCHANGE_PATH = 'GLOBAL_EXCHANGE_PATH';

// SHARED PARTNER VARS +
// Это переменные который используется партнером, но так же и в основном файле
// Это нужно для того, чтобы мы могли воссоеденить файлы и без файла партнера

// --- TG + 
var VAR_FISCAL_IP_ADDRESS = 'fiscalipadres';
var VAR_IS_TG_FISCAL = 'isfiscalTG';
var VAR_MUST_LOG = 'isWriteLog';  // используется ФР
var VAR_SESSION_STATUS_KASSA = 'SESSION_STATUS_KASSA';
var VAR_SESSION_STATUS_FR = 'SESSION_STATUS_FR';
var FISCAT_PORT = 'fiscatPort';
var COM_PORT_ENABLED = 'comPortEnabled';
// --- TG -

// --- FreedomBank + 
var VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS = 'FreedomBankTerminalIpAddress';
// --- FreedomBank -


// SHARED PARTNER VARS -

// Общие Переменные END
// ==============================================================


// ==============================================================
// Вспомогательные функции BEGIN

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
	/* jshint ignore:end */
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
}

function addMisingProtoFunctions_String() {
	if (!String.prototype.trim) {
		(function () {
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function () {
				return this.replace(rtrim, '');
			};
		})();
	}
}

function addMisingProtoFunctions_Number() {
	// добавляем для типа Number метод round
	if (!Number.prototype.round) {
		(function () {
			Number.prototype.round = function (decimalNumber) {
				var multiplier = Math.pow(10, decimalNumber);
				return Math.round(this.valueOf() * multiplier) / multiplier;
			};
		})();
	}
}


function getGlobalParam(paramName, defaultValue) {
	var paramValue = frontol.userValues.get(paramName);

	if (!isEmptyValue(paramValue)) {
		return paramValue;
	}

	return defaultValue;
}

function setGlobalParam(param, value) {
	value = value.trim();

	frontol.userValues.set(param, value);
}

function EnterParameter(param, header, setParam) {
	var headerString = 'Вводимый параметр: ' + header;
	var newValue = frontol.actions.inputString(
		headerString,
		getGlobalParam(param)
	);
	if (newValue == null) return;

	newValue = newValue.trim()
	if (setParam && setParam === true) {
		setGlobalParam(param, newValue);
	}
	
	
	return newValue;
}


function isEmptyValue(value) {
    return value === '' || value === null || value === undefined;
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

function base64Encode(data) {
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

function base64Decode(data) {
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

function _askRRNFromUser() {
	var RRN = frontol.actions.inputString(
		'Введите RRN для возврата на терминале Freedom Bank',
		''
	);

	return RRN;
}

function isSysAdmin() {
	// В фронтол 5 отсутствует атрибут .profile у currentUser-а.
	// Поэтому нельзя проверить является ли пользователь Администратором или нет.
	// Все Админ пользователи должны иметь префикс Админ/админ

	var subs = frontol.currentUser.name.substr(0, 5);
	return subs.toLowerCase() === 'админ';
}

function isServiceUser() {
	return frontol.currentUser.code === 3;  // спец. пользователь для снятий отчетов и тд
}

function isValidNetworkFolderPath(path) {
	if (isEmptyValue(path)) {
		return false;
	}

	var regex = /^\\\\[a-zA-Z0-9._-]+(\\[a-zA-Z0-9._\s-]+)*\\?$/

	return path.match(regex);
}

// Document +

function Doc_IsReceipt(doc) {
	return doc.type.operation === 14
}

// документ-продажа
function Doc_IsSale(doc) {
	return doc.type.operation == 0
}

// документ-возврат 
function Doc_IsReturn(doc) {
	return doc.type.operation == 1
}

// документ-внесение
function Doc_IsVnesenie(doc) {
	return doc.type.operation === 4;
}

// Проверяет если в документе платеж с кодом
function Doc_HasPaymentType(paymentTypeCode) {
	for (
		frontol.currentDocument.payment.index = 1;
		frontol.currentDocument.payment.index <=
		frontol.currentDocument.payment.count;
		frontol.currentDocument.payment.index++
	) {
		if (frontol.currentDocument.payment.type.code === paymentTypeCode)
			return true;
	}
	return false;
}

function Doc_GetPaymentType(doc, paymentType) {
	for (
		doc.payment.index = 1;
		doc.payment.index <= doc.payment.count;
		doc.payment.index++
	) {
		if (doc.payment.type.code === paymentType) return doc.payment;
	}
	return null;
}

function Doc_GetBankRRN(doc) {
	var RRN = doc.userValues.get(VAR_BANK_RRN_KEY);

	return RRN;
}

// Комбинированных банковских оплат у Ашана нет;
// Так что можем менять значение общего РРН.
function Doc_SetBankRRN(doc, RRN) {
	doc.userValues.set(VAR_BANK_RRN_KEY, RRN);
}

// -
// Http +

function _waitResponse(request, timeOut) {
	var count = timeOut;
	while (request.readyState != 4) {
		if (count <= 0) {
			// Opps... timeout
			request.abort();
			return;
		}
		count --;
		frontol.actions.wait('Ждем еще ' + count, 1)
	}

	return request;
}


function sendHttpRequestSimple(url, method, data, timeout) {
	var result = {
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

	url = GetCorrectServerAddress(url);

	var request = new ActiveXObject('Microsoft.XMLHTTP');

	request.open(method, url, true);
	request.setRequestHeader('Content-Type', 'application/json');

	request.send(data);

	var response = _waitResponse(request, timeout);
	if (!response) {
		result.message = 'Превышено время ожидания ответа от сервера';
		return result;
	}

	if (response.status == 200) {
		try {
			if ('responseText' in response && response.responseText) {
				result.data = JSON.parse(response.responseText);
			}
			result.success = true;
		} catch (e) {
			result.message = e.message;
		}
	} else {
		result.message = response.responseText;
	}
	return result;
}

// -
function createDirectory(path) {
    var dilimenter = "/";
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    if (fso.FolderExists(path)) return;
    var pathArr = path.split(dilimenter);
    var dir = pathArr[0];
    for (var i = 1; i < pathArr.length; i++) {
        dir += dilimenter + pathArr[i];
        if (!fso.FolderExists(dir)) fso.CreateFolder(dir);
    }
}

function showMessage(message, icon, timeOut) {
	if (message !== undefined && icon !== undefined && timeOut !== undefined) {
		return frontol.actions.showMessage(message, icon, timeOut);
	} else if (message !== undefined && icon !== undefined) {
		return frontol.actions.showMessage(message, icon);
	} else if (message !== undefined) {
		return frontol.actions.showMessage(message);
	} else {
		return frontol.actions.showMessage("Пустое сообщение");
	}
}

function showError(message) {
	frontol.actions.showError(message);
}

function cancelAct() {
	frontol.actions.cancel();
}

/* Меняет значения индикции статусов сессий/смен
Мы держим статусы 2-ух оборудований:
	1. ККМ/ФР (фискальный регистратор)
	2. Касса (Фронтол)

Статусы бывают:
	0 - неактивная/закрытая смена
	1 - активная/открытая смена

Держим 2 статуса, т.к мы тригерим закрытие смены на ФР
после того как закроется смена на кассе (см. afterCloseSession), и это
может привести к тому, что смена успешно закроется на самой кассе, а при закрытии
в ФР выдаст нам ошибку. И в данном случае мы имеем 2 разных статуса:
	Касса - смена закрыта   ||   ФР - смена открыта
При повторном закрытии фронтол будет "ругаится", что смена уже закрыта.
Для таких случаев будем держать оба статуса, чтобы в случае сбоя просто закрыть кассу напряму
в ФР.

- Почему мы закрываем смену на кассе, а затем в ФР, почему не наоборот ?
Ответ: Одна из причин, что если мы сможем закрыть смену в ФР по разным причинам, то
закрыть смену на кассе тоже не получится. Это приведет к тому, что данные не выгрузятся
в РАРУС пока ИТ не исправит ошибку. 
*/
function IsSessionOpen_KASSA() {
	return getGlobalParam(VAR_SESSION_STATUS_KASSA) == '1';
}

function SetSessionOpen_KASSA() {
	setGlobalParam(VAR_SESSION_STATUS_KASSA, '1');
}

function SetSessionClose_KASSA() {
	setGlobalParam(VAR_SESSION_STATUS_KASSA, '0');
}

function IsSessionOpen_FR() {
	return getGlobalParam(VAR_SESSION_STATUS_FR) == '1';
}

function SetSessionOpen_FR() {
	setGlobalParam(VAR_SESSION_STATUS_FR, '1');
}

function SetSessionClose_FR() {
	setGlobalParam(VAR_SESSION_STATUS_FR, '0');
}

function isMenuAccessAvailable() {
	return isSysAdmin() || isServiceUser();
}

// Buttons functions +
function $ManualButton() {
	if (!isMenuAccessAvailable()) {
		showMessage('У вас нет доступа к административному интерфейсу.', Icon.Exclamation);
		return;
	}
	var printLastDoc = 'Печать последнего фискального документа';
	var printLastDocByFDNum =
		'Печать последнего фискального документа по номеру ФД';

	if (isSysAdmin()) {
		// TG +
		//Зададим переменные
		var fiscalipadresString = '1. Установить ip адресс ФР от Т.Группа';

        var fiscalIpAddress = getGlobalParam(VAR_FISCAL_IP_ADDRESS);
		if (isEmptyValue(fiscalIpAddress)) {
			fiscalipadresString += ' (Не указан)';
		}

		var isfiscalTGString = '2. Подключить ФР-TP809 от Т.Групп';
		if (getGlobalParam(VAR_IS_TG_FISCAL) == '1') {
			isfiscalTGString = '2. Отключить ФР-TP809 от Т.Групп';
		}

		var isWriteLogString = '3. Включить логирование запросов';
		if (getGlobalParam(VAR_MUST_LOG) == '1') {
			isWriteLogString = '3. Отключить логирование запросов';
		}

		var SessionValString = 'Значение смены в ФР';
		if (IsSessionOpen_FR())
			SessionValString += ' ( Открыта )';
		else SessionValString += ' ( Закрыта )';

		var SetFRSessionStatusString = 'Установить статус смены ФР (только во фронтол)'

		var TGXString = ' X-Отчет ФР от Т.Группа';
		var TGZString = ' Z-Отчет ФР от Т.Группа';

		var COM_PortValString = '1.COM порт взаимодействия с ФР '
        var frPort = getGlobalParam(FISCAT_PORT);
        if (isEmptyValue(frPort)) {
            COM_PortValString += '(не указан)';
        } else {
            COM_PortValString += frPort;
        }

		var comPortEnabled =
			'2.' +
			(getGlobalParam(COM_PORT_ENABLED) == 1
				? 'Отключить'
				: 'Включить') +
			' ФР-TP809 по COM порту';
		
		// -

		// FreedomBank +
		var freedomBnkTerminalIpAddTitle =
			'1. Установить ip адресс для терминала FreedomBank';
		var freedomBankTerminalIpAdd = getGlobalParam(VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS)
		if (isEmptyValue(freedomBankTerminalIpAdd)) {
			freedomBnkTerminalIpAddTitle += ' (Не указан)';
		} else {
			freedomBnkTerminalIpAddTitle += freedomBankTerminalIpAdd;
		}
		// -

		// Schiever +
		var exchangeFolderPathTitle = '2. Установить путь глобального обмена';
		var exchangeFolderPath = getGlobalParam(VAR_GLOBAL_EXCHANGE_PATH);
		if (isEmptyValue(exchangeFolderPath)) {
			exchangeFolderPathTitle += ' (Не указан)';
		}
		// -

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
				COM_PortValString + '\n'
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
				SetFRSessionStatusString + '\n'
				+
				'\n' +
				'---------- Прочее ---------------\n' +
				exchangeFolderPathTitle + '\n'
				+
				freedomBnkTerminalIpAddTitle + '\n'
				+
				SessionValString + '\n',
				/*
				-- Ввод данных
				каждый "\n" - новая строка в меню
				каждый параметр после "\n" - значение для выбора в меню
				каждый заголовок должен соответствовать параметру с таким же отступом
				Например:
					'Просто текст' + '\n'
					'Заголовок 1' + '\n',
				-- Далее идут параметры для выбора в меню
				 + '\n' +
				'param1' + '\n'
				
				Здесь чтобы при нажатии на 'Заголовок 1' открылся ввод параметра 'Заголовок 1'
				Нужно соблюдать отступы и порядок. В этом примере нужно сначала отступить на строку вниз '\n',
				а потом уже писать 'param1' + '\n'
				Иначе при нажатии на 'Заголовок 1' ничего не произойдет
				Если хотим чтобы при нажатии на "Просто текст" так же открылся ввод параметра "Просто текст"
				Нужно написать так:

				'Просто текст' + '\n'
				'Заголовок 1' + '\n',
				-- Далее идут параметры для выбора в меню
				'paramText' + '\n' +
				'param1' + '\n'
				*/
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
				'FRnewStatus' + '\n' +
				'\n' +
				'\n' +
				'globalExchangeFolder' + '\n' +
				'freedomBankTerminalIpAdd' + '\n'
		);

		if (st == null || st == '') return;

		switch (st) {
			case 'fiscalipadres': {
				EnterParameter(VAR_FISCAL_IP_ADDRESS, ' ip:port ФР-TP809 от Т.Групп', true);
				break;
			}

			case 'isfiscalTG': {
				var newVal = getGlobalParam(VAR_IS_TG_FISCAL) == '1' ? '0' : '1';
				setGlobalParam(VAR_IS_TG_FISCAL, newVal);
				break;
			}

			case 'printLastDoc': {
				FR_printLastDoc();
				break;
			}

			case 'printLastDocByFDNum': {
				FR_printLastDocByFDNum();
				break;
			}

			case 'comPortEnabled': {
				break;
			}

			case 'comPort': {
				break;
			}

			case 'isWriteLog': {
				var newVal = getGlobalParam(VAR_MUST_LOG) == '1' ? 0 : 1;
				setGlobalParam(VAR_MUST_LOG, newVal);
				break;
			}

			case 'TGX': {
				PrintXReportFR();
				break;
			}

			case 'TGZ': {
				PrintZReportFR();
				break;
			}

			case 'FRnewStatus': {
				var prevStatus = IsSessionOpen_FR() ? '1' : '0';
				SetFRSessionStatusString = SetFRSessionStatusString + CR_MESSAGE + '0 - Закрыта; 1 - Открыта';
				var newStatus = EnterParameter(VAR_SESSION_STATUS_FR, SetFRSessionStatusString, false);
				switch (newStatus) {
					case '0': {
						SetSessionClose_FR();
						break;
					}
					case '1': {
						SetSessionOpen_FR();
						break;
					}
					default: {
						showMessage('Неверное значение. Введите 0 либо 1', Icon.Exclamation);
						break;
					}
				}
				break;
			}

			case 'globalExchangeFolder': {
				var folderPath = EnterParameter(VAR_GLOBAL_EXCHANGE_PATH, exchangeFolderPathTitle, false);
				var isValidPath = isValidNetworkFolderPath(folderPath);
				if (isEmptyValue(folderPath) || !isValidPath) {
					showMessage('Пустой или неверный путь.')
					cancelAct();
					return;
				}
				setGlobalParam(VAR_GLOBAL_EXCHANGE_PATH, folderPath);
				break;
			}

			case 'freedomBankTerminalIpAdd': {
				EnterParameter(
					VAR_FREEDOM_BANK_TERMINAL_IP_ADDRESS,
					' ip:port для терминала FreedomBank',
					true
				);
				break;
			}
		}
	}

	//Для СтарКассир
	if (isServiceUser()) {
		//Зададим переменные
		var SessionValString = 'Значение смены';
		if (IsSessionOpen_FR())
			SessionValString += ' ( Открыта )';
		else SessionValString += ' ( Закрыта )';

		var TGXString = ' X-Отчет ФР от Т.Группа';
		var TGZString = ' Z-Отчет ФР от Т.Группа';
		var printLastDoc = 'Печать последнего фискального документа';
		var printLastDocByFDNum =
			'Печать последнего фискального документа по номеру ФД';

		var SetFRSessionStatusString = 'Установить статус смены ФР (только во фронтол)';

		// Окно меню
		var st = frontol.actions.selectString(
			'Константы',
			'---------- Отчеты ФР TP809 ---------------\n' +
				TGXString +
				'\n' +
				TGZString +
				'\n' +
				SetFRSessionStatusString +
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
				'FRnewStatus\n' +
				'\n' +
				'printLastDoc\n' +
				'printLastDocByFDNum\n' +
				'\n' +
				'\n'
		);

		if (st == null || st == '') return;

		switch (st) {
			case 'printLastDoc': {
				FR_printLastDoc();
				break;
			}

			case 'printLastDocByFDNum': {
				FR_printLastDocByFDNum();
				break;
			}

			case 'TGX': {
				PrintXReportFR();
				break;
			}

			case 'TGZ': {
				PrintZReportFR();
				break;
			}

			case 'FRnewStatus': {
				SetFRSessionStatusString = SetFRSessionStatusString + CR_MESSAGE + '0 - Закрыта; 1 - Открыта';
				var newStatus = EnterParameter(VAR_SESSION_STATUS_FR, SetFRSessionStatusString, false);
				switch (newStatus) {
					case '0': {
						SetSessionClose_FR();
						break;
					}
					case '1': {
						SetSessionOpen_FR();
						break;
					}
					default: {
						showMessage('Неверное значение. Введите 0 либо 1', Icon.Exclamation);
						break;
					}
				}
				break;
			}
		}
	}
}
// -

// ==============================================================
// Вспомогательные функции END
// ==============================================================

var POS_SETTING_PATH = 'D://POS_SETTINGS.json'
var POS_SETTINGS;

function getPosSettings() {
    var fs = new ActiveXObject("Scripting.FileSystemObject");

    var settings;
    if (!fs.FileExists(POS_SETTING_PATH)) {
        showError('Не найден файл параметры кассы. Срочно обратитесь к ИТ отделу!', Icon.Error);
        return settings;
    };
    
    try {
        var objStream = new ActiveXObject("ADODB.Stream");

        objStream.CharSet = "utf-8";
        objStream.Type = 2;
        objStream.Open();
        objStream.LoadFromFile(POS_SETTING_PATH);

        var posSettingRaw = objStream.ReadText();
        settings = JSON.parse(posSettingRaw);
    } catch (e) {
        showMessage('Не удалось прочитать файл с параметрами кассы. ' + 
            CR_MESSAGE + e.message +
            CR_MESSAGE + CONTACT_SUPPORT_MESSAGE,
            Icon.Error
        )
    } finally {
        try {
            objStream.Close();
            objStream = null;
        } catch (e) {
            showMessage("Не удалось закрыть файл с параметрами кассы. " + e.message, Icon.Exclamation);
        }
    }

    return settings;
}

function getPartnerSettings(partner) {
    var posSettings = POS_SETTINGS;

    if (isEmptyValue(posSettings)) {
        posSettings = getPosSettings();
    }

    var partnerSetting = posSettings['partners'][partner];

    return partnerSetting;
}

function init() {
    // libraries
    getJson2();
    toISOProto();

	// Данный файл хранит важный настройки кассы
	POS_SETTINGS = getPosSettings(); 
	if (isEmptyValue(POS_SETTINGS)) {

		showMessage('Параметры кассы не могут быть пустыми. ' + 
			CR_MESSAGE + CONTACT_SUPPORT_MESSAGE,
			Icon.Error
		)
		cancelAct();
		return;
	}

    addMisingProtoFunctions_Number();
    addMisingProtoFunctions_String();

    // init partners
    init_RxLoyalty();
	init_JetQrPay(); // Alif
	init_FreedomBank();
	init_DC();  // Dushanbe City
	init_TG();  // Tekhonologiya grup
	init_Schiever();

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
}


FunctionsOfEventListeners: {
    //ИЗМЕНЕНИЕ РЕЖИМА ДО
    function changeModeBefore() {
        // showMessage("changeMode event");
    }

    //ОТКРЫТИЕ ДОКУМЕНТА - ДО
    function beforeOpenDocument() {
        var doc = frontol.currentDocument;

		// RX loyalty +
        if (getClientUUID() == "E97FC591-1DC1-472C-AA47-070A8E93954B" && isReceiptDocument(doc)) {
            inputReceiptDocumentInformation(doc);
        }

        if (!IsSessionOpen_KASSA()) {
            afterOpenSession();
        }

		var forbidReturnWithRXpayments = getGlobalParam("ForbidReturnWithPayments")
        if (!isEmptyValue(forbidReturnWithRXpayments)) {
            forbidReturnDocWithProcPayments();
        }
    }

    //ОТКРЫТИЕ ДОКУМЕНТА - ПОСЛЕ
    function afterOpenDocument() {
        var doc = frontol.currentDocument;

		// RX loyalty +
        // прихода товара
        if (isReceiptDocument(doc)) {
            if (doc.counteragent.code == 0) {
                sendKeys("^+5"); // Ctrl-Shift-5
            }
        }
        // second monitor
        if (getGlobalParam("SecondMonitor") == "1") {
            if (rxF2SM === null) {
                rxF2SM = new RxFrontolToSecondMonitor();
            } else {
                if (isSaleDocument(doc)) {
                    rxF2SM.deleteRegisterInfo();
                    rxF2SM.deleteCheque();
                }
            }
        }
		
		// -

        // //Параметры
        // vSet("FilePath", "\\\\10.101.42.107\\Rarus\\BitrixOrders\\");
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

		// RX loyalty +
        //если документ - продажа
        if (isSaleDocument(doc) && getGlobalParam("SumToCreateCard") != "") {
            requestCreateCard();
        }

        if (getGlobalParam("SaleBeforePrintCheck") == "1" && isSaleDocument(doc)) {
            //если документ - продажа и введена хотя бы одна карта
            if (
                doc.userValues.get("cardBoxDocDiscDtos") != "" ||
                getGlobalParam(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == "1"
            ) {
                var stringToSend = getSaleDataAfterClosing(doc);

                if (doc.userValues.get("cardBoxDocDiscDtos") != "") {
                    sendDocumentAfterClosing(stringToSend, 1);
                }

                if (getGlobalParam(GET_ALL_CHECKS_FROM_CASH_VALUE_NAME) == "1") {
                    saveDocumentAfterClosing(stringToSend, 1);
                }
            }
            //GetFooter(doc);
        }
		
        if (isSaleDocument(doc)) {
            //customActionForAshan
            var customActionData = getGlobalParam(CUSTOM_ACTION_DATA);
            if (customActionData) {
                customActionData = JSON.parse(customActionData);
                for (doc.position.index = 1; doc.position.index <= doc.position.count; doc.position.index++) {
                    if (doc.position.ware.mark in customActionData) {
                        var actionData = customActionData[doc.position.ware.mark];
                        var isAvailable = actionData.sum <= doc.sumWithDiscs;
                        if (isAvailable) {
                            showMessage(actionData.cashierMesage, Icon.Exclamation);
                            doc.userValues.set("CustomActionMess", actionData.slipMessage);
                        }
                    }
                }
            }
        }
        /////////////////////////////////////////////////////////////////PROMO_DUBUG///////////////////////////////////////////////////////////////
        if (isPromoKassa()) {
            var dbRx = new RxDB();
            var connected = dbRx.connect();

            if (!connected) {
                showMessage("Соединение с базой настроек промо-акции не установлено!", Icon.Warning);
            } else {
                var promoRx = new RxPromo(dbRx);

                promoRx.init(true);

                if (getGlobalParam("promoCounters") != "") {
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
		// -

		//РАРУС. Выгрузка документа для Битрикс. Давно не нужно...
		/*
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
		*/
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
    }

    //УДАЛЕНИЕ ПЛАТЕЖА - ДО
    function stornoPaymentBefore(payment) {
        //если документ - продажа
        if (isSaleDocument(frontol.currentDocument)) {
            CheckDeletePayment(payment, 1);
        }
    }

    //УДАЛЕНИЕ ПЛАТЕЖА - ПОСЛЕ
    function stornoPaymentAfter(payment) {
        //если документ - продажа
        if (isSaleDocument(frontol.currentDocument)) {
            if (IsExtraEnabled("ExtraTaxKyrgyzstan")) ControlStornoPayment_ExtraTaxKyrgyzstan();
        }
    }

    //ОТКРЫТИЕ СМЕНЫ - ПОСЛЕ
	// По сути данный ивент никогда не происходит.
	// Кассиры в Шивере не открывают сессию вручную
	// ФР от ТГ стоит на эмуляторе и не тригерит открытие смены на кассе.
	// Данный ивент тригерится только если вручную открыть смену
    function afterOpenSession() {
		SetSessionOpen_KASSA();
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
		SetSessionClose_KASSA();

        SendDelayed(true);
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
            //cancelAct(); // отменим ввод этой карты
	}
}