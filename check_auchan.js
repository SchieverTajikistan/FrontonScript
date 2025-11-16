//#ИНФОРМАЦИЯ В ЭТОЙ И СЛЕДУЮЩЕЙ СТРОКЕ НЕОБХОДИМА ДЛЯ КОРРЕКТНОЙ РАБОТЫ МАСТЕРА#
//bar02=1¦bar03=50¦bar04=200¦dsc02=1¦dsc03=1¦dsc05=1¦dsc06=1¦dsc63=1¦dsc64=1¦scr10=1¦scr43=2¦scr21=1¦scr38=Скидки документа¦scr74=Нефискальные оплаты¦dsc55=1¦scr67=Услуги¦scr77=Начислено бонусов¦mac01==¦mac02=-¦mac03=_¦mac04=—¦
function printHeader(print) {
	print.printCenterString('     Ашан', ' ');
	print.printCenterString('     ЗАО Шивер Таджикистан', ' ');
	print.printCenterString('ш. Душанбе, куч. Дустии халкхо 47', ' ');
	print.printCenterString('Телефон: 488884000', ' ');
	print.printString('ЕИН: 0210020709');

	var RRN = frontol.currentDocument.userValues.get('FreedomBank_RRN');
	if (RRN) {
		print.printString('RRN: ' + RRN);
	}
	print.printCenterString('', ' ');
	print.printLRStringLF(
		'РМ №' + frontol.codeWorkplace,
		frontol.currentUser.name,
		' ',
	);
	print.printLRStringLF(
		frontol.currentDocument.type.name +
			' №' +
			print.addCharLeft(frontol.currentDocument.number, 0, 8),
		'Смена №' + print.addCharLeft(frontol.sessionNumber, 0, 4),
		' ',
	);
}

function printPosition(print) {
	if (frontol.currentDocument.position.storno == 1)
		print.printCenterString('СТОРНО', ' ');
	print.printString(
		frontol.currentDocument.position.number +
			'. ' +
			frontol.currentDocument.position.ware.text,
	);
	if (frontol.currentDocument.position.storno == 0) {
		print.printLRStringLF(
			'  ' +
				(frontol.currentDocument.position.fracSale
					? print.formatQuantity(
							frontol.currentDocument.position.quantity,
					  )
					: frontol.currentDocument.position.quantity) +
				'*' +
				print.formatCurrency(frontol.currentDocument.position.price),
			print.formatCurrency(frontol.currentDocument.position.sum),
			'_',
		);
		if (frontol.currentDocument.position.discountPos.totalSum != 0)
			if (frontol.currentDocument.position.discountPos.totalSum < 0)
				print.printLRStringLF(
					'  ' +
						'+' +
						print.formatPercent(
							frontol.currentDocument.position.discountPos
								.totalPercent,
						) +
						'%',
					print.formatCurrency(
						-frontol.currentDocument.position.discountPos.totalSum,
					),
					'_',
				);
			else
				print.printLRStringLF(
					'  Скидка ' + frontol.currentDocument.enterprise.name,
					print.formatCurrency(
						frontol.currentDocument.position.discountPos.totalSum,
					),
					'_',
				);
	}
}

function printFooter(print) {
	print.printLRStringLF('-', '-', '-');
	printCardBalances(print);

	for (
		frontol.currentDocument.tax.index = 1;
		frontol.currentDocument.tax.index <= frontol.currentDocument.tax.count;
		frontol.currentDocument.tax.index++
	) {
		if (frontol.currentDocument.tax.index == 1)
			print.printStringWordWrap('Включая налоги');
		if (frontol.currentDocument.tax.sum != 0)
			print.printLRString(
				'  ' + frontol.currentDocument.tax.taxRateText,
				print.formatCurrency(frontol.currentDocument.tax.sum),
				'_',
			);
		if (
			frontol.currentDocument.tax.index ==
			frontol.currentDocument.tax.count
		)
			print.printLRString(
				'  ' + 'Итог',
				print.formatCurrency(frontol.currentDocument.tax.totalSum),
				'_',
			);
	}
	print.printLRStringLF('-', '-', '-');
	if (frontol.currentDocument.userValues.get('CustomActionMess')) {
		print.printStringWordWrap(
			frontol.currentDocument.userValues.get('CustomActionMess'),
		); //AshanCustomAct
	}

	if (frontol.currentDocument.userValues.get('promoText')) {
		print.printStringWordWrap(
			frontol.currentDocument.userValues.get('promoText'),
		); //AshanCustomAct
	}
}

function printCardBalances(print) {
	var doc = frontol.currentDocument;
	var cardNumbers = doc.userValues.get('cardBoxNumbers');
	var cardBalances = doc.userValues.get('cardBoxBalances');

	if (cardNumbers) {
		var cardNumberArray = cardNumbers.split(';');
		var cardBalanceArray = cardBalances.split(';');

		if (cardNumberArray.length > 0 && cardBalanceArray.length > 0) {
			for (var i in cardNumberArray) {
				try {
					print.printLRString(
						'Бон. карта ' +
							hideCardNumber(cardNumberArray[i]) +
							', баланс:',
						Number(cardBalanceArray[i]) > 0
							? cardBalanceArray[i]
							: '.',
						'.',
					);
				} catch (e) {
					print.printStringWordWrap(
						'Ошибка печати информации о балансе карты!',
					);
				}
			}
			print.printLRStringLF('-', '-', '-');
		}
	}
}

// маскировка номера карты
function hideCardNumber(cardNumber) {
	return cardNumber.replace(
		/(\d{4})(\d{5})(\d*)/,
		function (matchMedia, p1, p2, p3) {
			return p1 + p2.replace(/\d/g, '*') + p3;
		},
	);
}
