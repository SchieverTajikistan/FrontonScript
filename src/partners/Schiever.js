// ==============================================================
// Schiever BEGIN


function init_Schiever() {
}


// Уведомление о закрытии смены
function checkShiftReminder() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();

	if (hours === 23 && minutes >= 50 && minutes <= 59) {
		showMessage(
			'Закройте смену! Через 10 минут ККМ будет заблокирована!',
			Icon.Warning
		);
	}
}


// Button functions +
function ExchangeDocument() {
    this.fso = new ActiveXObject("Scripting.FileSystemObject");

    var _generateExportFileName = function () {
        var fileName =  [
            'doc',
            getDateToString(''),
            frontol.codeWorkplace.toString()
        ].join('_') + '.txt';


        return fileName;
    }

    var _getPOSFolderName = function (posExportTo) {
        var postFolder = 'POST' + posExportTo.toUpperCase();
        
        return postFolder;
    }

    this.getFileFullPath = function () {
        var baseFolder = getGlobalParam(VAR_GLOBAL_EXCHANGE_PATH);
        if (isEmptyValue(baseFolder)) {
            showMessage('Не укзана путь в общую папку обмена на сервере.', Icon.Error);
            return;
        }

        if (baseFolder.slice(-1) !== '\\') {
            baseFolder = baseFolder + '\\';
        }

        var pos = frontol.actions.inputString(
            "Введите номер кассы НА который хотите отправить чек ",
            ""
        );

        if (isEmptyValue(pos)) {
            showMessage('Касса не может быть пустой!', Icon.Exclamation);
            return;
        }
        var posFolder = _getPOSFolderName(pos);

        var exportFolder = baseFolder + posFolder;
        if (!this.fso.FolderExists(exportFolder)) {
            showMessage('Путь ' + exportFolder + ' не существует. ' + CR_MESSAGE + CONTACT_SUPPORT_MESSAGE);
            return;
        }

        var fileName = _generateExportFileName();
        var fullPath = [baseFolder, posFolder, fileName].join('\\');

        return fullPath;
    }

    this.exportDoc = function (doc) {
        var fullPath = this.getFileFullPath();
        if (isEmptyValue(fullPath)) {
            return;
        }

        var file = this.fso.CreateTextFile(fullPath, true);

        for (
            doc.position.index = 1;
            doc.position.index <= doc.position.count;
            doc.position.index++
        ) {
            if (doc.position.storno == 1) continue;

            var line = [
                doc.position.ware.mark,  // 1C код
                doc.position.sum,
                doc.position.quantity,
            ].join(';');
            file.writeline(line);
        }

        file.close();

        showMessage('Чек экспортирован в файл: ' + fullPath, Icon.Information);
    }

    this.importDoc = function () {
        var baseFolder = getGlobalParam(VAR_GLOBAL_EXCHANGE_PATH);
        if (isEmptyValue(baseFolder)) {
            showMessage('Не укзана путь в общую папку обмена на сервере.', Icon.Error);
            return;
        }

        if (baseFolder.slice(-1) !== '\\') {
            baseFolder = baseFolder + '\\';
        }

        // Папка текущей кассы (inbox)
        var myPosFolder = _getPOSFolderName(frontol.codeWorkplace.toString());
        var inboxPath = baseFolder + myPosFolder;

        if (!this.fso.FolderExists(inboxPath)) {
            showMessage('Папка для импорта не найдена: ' + inboxPath, Icon.Error);
            return;
        }

        var sourcePOS = frontol.actions.inputString(
            "Введите номер кассы ИЗ которой хотите получить чек",
            ""
        );

        if (isEmptyValue(sourcePOS)) {
            showMessage('Касса не может быть пустой!', Icon.Exclamation);
            return;
        }

        // Собираем файлы экспортированные указанной кассой
        // Формат имени: doc_{date}_{sourcePOS}.txt
        var suffix = '_' + sourcePOS.toUpperCase() + '.txt';
        var folder = this.fso.GetFolder(inboxPath);
        var files = new Enumerator(folder.Files);

        var titles = '';
        var values = '';

        while (!files.atEnd()) {
            var file = files.item();
            var name = file.Name;

            if (name.indexOf('doc_') === 0 && name.indexOf(suffix) !== -1) {
                if (titles !== '') {
                    titles = titles + '\n';
                    values = values + '\n';
                }
                titles = titles + name;
                values = values + file.Path;
            }
            files.moveNext();
        }

        if (titles === '') {
            showMessage('Нет файлов для импорта от кассы ' + sourcePOS, Icon.Information);
            return;
        }

        // Показываем форму выбора файла
        var selectedPath = frontol.actions.selectString(
            "Выберите файл для импорта",
            titles,
            values
        );

        if (isEmptyValue(selectedPath)) {
            return;
        }

        // Читаем и добавляем позиции в документ
        var importFile = this.fso.OpenTextFile(selectedPath, 1);
        while (!importFile.AtEndOfStream) {
            var line = importFile.ReadLine();
            var params = line.split(';');
            var code = params[0];
            var sum = parseFloat(params[1]);
            var quantity = parseFloat(params[2]);

            try {
                frontol.currentDocument.addPosition(
                    'Mark',
                    code,
                    null,
                    quantity,
                    sum,
                    false
                );
            } catch (e) {
                showMessage(
                    'Не удалось добавить позицию ' + code +
                    CR_MESSAGE + e.name + ': ' + e.message,
                    Icon.Error
                );
            }
        }
        importFile.Close();

        // Удаляем импортированный файл
        this.fso.DeleteFile(selectedPath);

        showMessage('Чек успешно импортирован и файл удалён.', Icon.Information);
    }
}

function $ExportDocument() {
	if (!isSysAdmin()) {
		showMessage('У вас нет доступа к данной функции.', Icon.Exclamation);
		return;
	}

    var exchange = new ExchangeDocument();
    exchange.exportDoc(frontol.currentDocument);
}

function $ImportDocument() {
	if (!isSysAdmin()) {
		showMessage('У вас нет доступа к данной функции.', Icon.Exclamation);
		return;
	}

    var exchange = new ExchangeDocument();
    exchange.importDoc();

}

// -


// Schiever END
// ==============================================================
