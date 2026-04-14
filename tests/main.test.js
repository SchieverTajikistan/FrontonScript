// Функция скопирована из src/main.js т.к. JScript не поддерживает module.exports
function getCorrectServerAddress(serverAddress) {
	while (serverAddress.slice(-1) == '/') {
		serverAddress = serverAddress.slice(0, -1);
	}

	var arr = serverAddress.split('://');

	if (arr.length == 1) serverAddress = 'http://' + serverAddress;

	return serverAddress;
}

describe('getCorrectServerAddress', () => {

	test('возвращает адрес без изменений если он корректный', () => {
		expect(getCorrectServerAddress('http://10.10.10.10/api/print'))
			.toBe('http://10.10.10.10/api/print');
	});

	test('удаляет один завершающий слэш', () => {
		expect(getCorrectServerAddress('http://10.10.10.10/api/print/'))
			.toBe('http://10.10.10.10/api/print');
	});

	test('удаляет несколько завершающих слэшей', () => {
		expect(getCorrectServerAddress('http://10.10.10.10///'))
			.toBe('http://10.10.10.10');
	});

	test('добавляет http:// если протокол отсутствует', () => {
		expect(getCorrectServerAddress('10.10.10.10/api/print'))
			.toBe('http://10.10.10.10/api/print');
	});

	test('не добавляет http:// если протокол https', () => {
		expect(getCorrectServerAddress('https://10.10.10.10/api/print'))
			.toBe('https://10.10.10.10/api/print');
	});

	test('добавляет http:// и удаляет слэш одновременно', () => {
		expect(getCorrectServerAddress('10.10.10.10/api/'))
			.toBe('http://10.10.10.10/api');
	});

	test('работает с простым IP без пути', () => {
		expect(getCorrectServerAddress('192.168.1.1'))
			.toBe('http://192.168.1.1');
	});
});

// Функция скопирована из src/main.js
function isValidNetworkFolderPath(path) {
	var regex = /^\\\\[a-zA-Z0-9._-]+(\\[a-zA-Z0-9._\s-]+)*\\?$/

	return path.match(regex);
}

describe('isValidNetworkFolderPath', () => {

	test('валидный UNC путь с IP адресом', () => {
		expect(isValidNetworkFolderPath('\\\\10.10.10.10')).toBeTruthy();
	});

	test('валидный UNC путь с IP и папкой', () => {
		expect(isValidNetworkFolderPath('\\\\10.10.10.10\\share')).toBeTruthy();
	});

	test('валидный UNC путь с вложенными папками', () => {
		expect(isValidNetworkFolderPath('\\\\192.168.1.1\\folder\\subfolder')).toBeTruthy();
	});

	test('валидный UNC путь с именем сервера', () => {
		expect(isValidNetworkFolderPath('\\\\my-server.domain.com\\share')).toBeTruthy();
	});

	test('валидный UNC путь с завершающим слэшем', () => {
		expect(isValidNetworkFolderPath('\\\\server\\share\\')).toBeTruthy();
	});

	test('валидный UNC путь с пробелами в имени папки', () => {
		expect(isValidNetworkFolderPath('\\\\server\\my folder')).toBeTruthy();
	});

	test('невалидный - один обратный слэш', () => {
		expect(isValidNetworkFolderPath('\\server\\share')).toBeFalsy();
	});

	test('невалидный - пустая строка', () => {
		expect(isValidNetworkFolderPath('')).toBeFalsy();
	});

	test('невалидный - только два слэша без имени сервера', () => {
		expect(isValidNetworkFolderPath('\\\\')).toBeFalsy();
	});

	test('невалидный - путь с диском', () => {
		expect(isValidNetworkFolderPath('C:\\folder')).toBeFalsy();
	});

	test('невалидный - прямые слэши', () => {
		expect(isValidNetworkFolderPath('//server/share')).toBeFalsy();
	});
});
