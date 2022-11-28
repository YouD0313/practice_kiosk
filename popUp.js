const popUp = document.querySelector('.chooseFood__popUp');
const foodImgWrap = document.querySelectorAll('.chooseFood__img');
const coffeeImgWrap = document.querySelectorAll('.chooseCoffee__img');
const header = document.querySelector('header');
const chooseMenu = document.querySelector('.chooseMenu');
const foodSection = document.querySelector('.chooseFood');
const coffeeSection = document.querySelector('.chooseCoffee');
const xMark = document.querySelector('.xmark');
const cartIcon = document.querySelector('.cartIcon');
const money = document.querySelector('.money');
const option = document.querySelectorAll('.option');
const select = document.querySelector('#extra');
let menu_price = 0;
let ice = false;
let n = 0;

// 키오스크화면 json 가져오기
document.addEventListener('DOMContentLoaded', function () {
	$.ajax({
		url: 'json-server-exam/db.json',
		dataType: 'json',
		success: function (data) {
			foodImgWrap.forEach((img, idx) => {
				if (img.attributes[1].value == data[idx].foodIndex) {
					// food
					$('.chooseFood__img > img').eq(idx).attr('src', data[idx].imgUrl);
					$('.chooseFood__img > img').eq(idx).attr('alt', data[idx].alt);
					$('.chooseFood__text__wrap > h1').eq(idx).text(data[idx].name);
					$('.spin__wrap > span').eq(idx).text(data[idx].price);
				}
			});
		},
	});

	$.ajax({
		url: 'json-server-exam/db.json',
		dataType: 'json',
		success: function (data) {
			coffeeImgWrap.forEach((img, idx) => {
				const idx6 = idx + 6;
				if (img.attributes[1].value == data[idx6].coffeeIndex) {
					// console.log('img', img);
					// console.log('img.attributes[1].value', img.attributes[1].value);
					// console.log('data.index', data[idx6].coffeeIndex);
					// coffee
					$('.chooseCoffee__img > img').eq(idx).attr('src', data[idx6].imgUrl);
					$('.chooseCoffee__img > img').eq(idx).attr('alt', data[idx6].alt);
					$('.chooseCoffee__text__wrap > h1').eq(idx).text(data[idx6].name);
					$('.spin__wrap > span').eq(idx6).text(data[idx6].price);
				}
			});
		},
	});
});

// 팝업화면 json 가져오기
// food
foodImgWrap.forEach((img, idx) => {
	img.addEventListener('click', () => {
		// console.log('img', img);
		// console.log('img.target', img.attributes[1].value);
		// console.log('idx', idx);
		$.ajax({
			url: 'json-server-exam/db.json',
			dataType: 'json',
			success: function (data) {
				// console.log(data[idx].index);
				if (data[idx].foodIndex == idx) {
					$('.chooseFood__popUp__img > img').attr('src', data[idx].imgUrl);
					$('.chooseFood__popUp__img > img').attr('alt', data[idx].alt);
					$('.chooseFood__popUp__wrap > h1').text(data[idx].name);
					$('.price').text(data[idx].value);
					$('.popUp__spin__wrap > button').attr('value', data[idx].value);
					$('#extra').css('display', 'none');
				}
			},
		});
		if (img.attributes[1].value == idx) {
			popUpClick();
		}
	});
});

//coffee
let priceVal = 0;
coffeeImgWrap.forEach((img, idx) => {
	const idx6 = idx + 6;
	img.addEventListener('click', () => {
		// console.log('img', img);
		// console.log('img.target', img.attributes[1].value);
		// console.log('idx', idx);
		$.ajax({
			url: 'json-server-exam/db.json',
			dataType: 'json',
			success: function (data) {
				if (data[idx6].coffeeIndex == idx) {
					// console.log(data);
					// console.log(data[idx6].extra.value);
					// console.log(data[idx6].extra[idx].id);
					// $('#extra').css('display', 'block');
					$('.chooseFood__popUp__img > img').attr('src', data[idx6].imgUrl);
					$('.chooseFood__popUp__img > img').attr('alt', data[idx6].alt);
					$('.chooseFood__popUp__wrap > h1').text(data[idx6].name);
					$('.popUp__spin__wrap > .price')
						.text(data[idx6].value)
						.val(data[idx6].value);
					menu_price = data[idx6].value;
					$('.popUp__spin__wrap > button').attr('value', data[idx6].value);
					if (!!data[idx6].extra) {
						$('#extra').css('display', 'block');
						// option.forEach((opt, i) => {
						// 	if (
						// 		data[idx6].coffeeIndex == idx &&
						// 		opt.attributes[1].value == i
						// 	) {
						// 		console.log(data[idx6].extra[i].extraShot);
						// 		$('.extra').text(data[idx6].extra[i].extraShot);
						// 	}
						// 	console.log('opt', opt.attributes[1].value);
						// 	console.log('i', i);
						// });
					} else if (!data[idx6].extra) {
						$('#extra').css('display', 'none');
					}
				}
				option.forEach((opt, i) => {
					if (data[idx6].coffeeIndex == idx && opt.attributes[1].value == i) {
						$('select > option')
							.eq(i + 1)
							.text(data[idx6].extra[0].extra)
							.attr('value', data[idx6].extra[0].value);
						$('select > option')
							.eq(i + 2)
							.text(data[idx6].extra[1].extra)
							.attr('value', data[idx6].extra[1].value);
						// console.log('ice', data[idx6].extra[1].extra);
						// console.log($('select > option').eq(0).text());
						// console.log($('select > option').first());
					}
					// console.log($('.price').val());
				});
				select.addEventListener('change', function (e) {
					if (e.target.selectedIndex < 2) {
						return;
					}
					if (ice) {
						console.log($('.option').eq(1).text());
						console.log(data[idx6].extra[1]);
						$('.option')
							.eq(1)
							.text(data[idx6].extra[1].extra)
							.attr('value', data[idx6].extra[1].value);
						$('#extra option:eq(0)').prop('selected', true);
						ice = false;
					} else if (!ice) {
						$('.option')
							.eq(1)
							.text(data[idx6].extra[1].reject)
							.attr('value', data[idx6].extra[1].rejectVal);
						ice = true;
						$('#extra option:eq(0)').prop('selected', true);
					}
				});
			},
		});
		if (img.attributes[1].value == idx) {
			popUpClick();
		}
	});
});

select.addEventListener('change', function () {
	// console.log(++n);
	// option.forEach((opt, i) => {
	// console.log(select.options[select.selectedIndex].attributes[1].value);
	// console.log(select.options.selectedIndex);
	// let selectedData =
	// 	select.options[select.selectedIndex].attributes[2].value;
	let selectPriceValue =
		select.options[select.selectedIndex].attributes[1].value;
	let selectedIndex = select.options.selectedIndex;
	// console.log(parseInt(selectPriceValue));
	// console.log(this.childNodes[3].attributes[2].value);

	switch (selectedIndex) {
		case 1:
			menu_price += parseInt(selectPriceValue);
			priceVal = menu_price;
			// console.log('case1', priceVal, 'menuprice', menu_price);

			break;
		case 2:
			//if (!ice) {
			//menu_price = parseInt(menu_price) + parseInt(selectPriceValue);
			//priceVal = menu_price;
			// console.log('case2', priceVal, 'menuprice', menu_price);
			//ice = true;
			//} else {
			menu_price = parseInt(menu_price) + parseInt(selectPriceValue);
			priceVal = menu_price;
			//ice = false;
			//}
			break;
	}

	//
	// if (selectedIndex == 1) {
	// 	// console.log(option[0].attributes[1].value);
	// 	selectFnc();
	// } else if (selectedIndex == 2) {
	// 	selectFnc();
	// }

	// // console.log(sumVal);

	// console.log('priceval', priceVal);
	$('.price').text(priceVal);

	//
	// $('.option').each(function () {
	// 	console.log($('.option').eq(idx));
	// 	let priceVal = parseInt($('.price').val());
	// 	priceVal += parseInt($('.option').eq(idx).val());
	// 	$('.price').text(priceVal);
	// });
	// });
});

// function selectFnc(priceVal, selectPriceValue) {
// 	if (priceVal == 4300) {
// 		priceVal += parseInt(selectPriceValue);
// 	} else {
// 		priceVal = 0;
// 		priceVal += parseInt($('.price').val()) + parseInt(selectPriceValue);
// 		console.log(priceVal);
// 	}
// }

// option
// option.forEach((opt, idx) => {
// 	const idx6 = idx + 6;
// 	opt.addEventListener('click', () => {
// 		// console.log('img', img);
// 		// console.log('img.target', img.attributes[1].value);
// 		// console.log('idx', idx);
// 		$.ajax({
// 			url: 'json-server-exam/db.json',
// 			dataType: 'json',
// 			success: function (data) {
// 				if (data[idx6].coffeeIndex == idx && opt.attributes[1].value === 0) {
// 					console.log(data[idx6].extra[i].extraShot);
// 					$('.extra').text(data[idx6].extra[i].extraShot);
// 				}
// 				console.log('opt', opt.attributes[1].value);
// 				console.log('i', idx);
// 			},
// 		});
// 		if (img.attributes[1].value == idx) {
// 			popUpClick();
// 		}
// 	});
// });

function popUpClick() {
	popUp.classList.add('pop');
	chooseMenu.classList.add('noClick');
	foodSection.classList.add('noClick');
	coffeeSection.classList.add('noClick');
	money.classList.add('noClick');
	$('*').css('overflow', 'hidden');
	header.style.opacity = '0.5';
	coffeeSection.style.opacity = '0.5';
	foodSection.style.opacity = '0.5';
	chooseMenu.style.opacity = '.5';
}

function closeEvt(icon) {
	icon.addEventListener('click', () => {
		popUp.classList.remove('pop');
		chooseMenu.classList.remove('noClick');
		foodSection.classList.remove('noClick');
		coffeeSection.classList.remove('noClick');
		money.classList.remove('noClick');
		$('*').css('overflow', 'visible');
		header.style.opacity = '1';
		coffeeSection.style.opacity = '1';
		foodSection.style.opacity = '1';
		chooseMenu.style.opacity = '1';
		$('#extra option:eq(0)').prop('selected', true);
		//priceVal = 0;
		//priceVal += parseInt($('.price').val());
	});
}

closeEvt(xMark);
closeEvt(cartIcon);

// xMark.addEventListener('click', () => {
// 	popUp.classList.remove('pop');
// 	header.style.opacity = '1';
// 	foodSection.style.opacity = '1';
// });

// json
// let data = JSON.parse(JSON.stringify(TestFile));
// console.log(data);

/**
 *
 */
/**
 * calc.js
 */

let sum = 0;
const spin = document.querySelectorAll('.spin');
const button = document.querySelectorAll('.cartIcon');
const sumText = document.querySelector('#sumtext');

// button.addEventListener('click', function () {
// 	sum += parseInt(button.value) * parseInt(spin.value);
// 	document.getElementById('sumtext').value = sum + '원';
// 	spin.value = 1;
// });

button.forEach((cart, idx) => {
	cart.addEventListener('click', function () {
		// const selectDisplay = $('#extra').css('display', 'block');
		// sum +=
		// 	parseInt(this.value) * parseInt(this.parentElement.childNodes[3].value);
		// console.log('button.value', button[idx].value);
		// console.log('spin.value', spin[idx].value);
		spin[idx].value = 1;
		if ($('#extra').css('display', 'block')) {
			console.log($('.price').text());
			sum += parseInt($('.price').text());
			sumText.value = sum + '원';
		} else {
			sum += parseInt(button[idx].value) * parseInt(spin[idx].value);
			sumText.value = sum + '원';
		}
		// console.log('sum', sum);
		// console.log('cart', cart);
		// console.log('idx', idx);
	});
});

// for문으로 변경하기
function ifelse() {
	let fee = prompt('금액을 투입하세요.', 10000);
	console.log('type', typeof fee);
	if (fee != NaN || fee != null || typeof fee != 'string') {
		if (fee < sum) {
			console.log('outsidefor', fee);
			for (let i = 1; ; i++) {
				console.log('insidefor', fee);
				if (isNaN(fee)) {
					alert('숫자로 입력하세요.');
					fee = prompt('다시 금액을 투입하세요.', 10000);
				} else if (fee == null) {
					return;
				} else if (fee > sum) {
					alert(
						'결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.'
					);
					sum = 0;
					sumText.value = sum + '원';
					return;
				} else {
					console.log('insideforNelse', fee);
					console.log('feetype', typeof fee);
					alert(
						Math.abs(fee - sum) + '원 부족합니다.\n다시 금액을 투입하세요.'
					);
					fee = prompt('다시 금액을 투입하세요.', 10000);
				}
			}
		} else if (isNaN(fee)) {
			for (let i = 1; ; i++) {
				console.log('insidefor', fee);
				if (isNaN(fee)) {
					alert('숫자로 입력하세요.');
					fee = prompt('다시 금액을 투입하세요.', 10000);
				} else if (fee == null) {
					return;
				} else if (fee > sum) {
					alert(
						'결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.'
					);
					sum = 0;
					sumText.value = sum + '원';
					return;
				} else {
					console.log('insideforNelse', fee);
					console.log('feetype', typeof fee);
					alert(
						Math.abs(fee - sum) + '원 부족합니다.\n다시 금액을 투입하세요.'
					);
					fee = prompt('다시 금액을 투입하세요.', 10000);
				}
			}
		} else if (fee == null) {
			return;
		} else {
			alert('결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.');
			sum = 0;
			sumText.value = sum + '원';
		}
	} else if (fee == null) {
		return;
	} else if (isNaN(fee)) {
		for (let i = 1; ; i++) {
			console.log('insidefor', fee);
			if (isNaN(fee)) {
				alert('숫자로 입력하세요.');
				fee = prompt('다시 금액을 투입하세요.', 10000);
			} else if (fee == null) {
				return;
			} else if (fee > sum) {
				alert('결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.');
				sum = 0;
				sumText.value = sum + '원';
			} else {
				console.log('insideforNelse', fee);
				console.log('feetype', typeof fee);
				alert(Math.abs(fee - sum) + '원 부족합니다.\n다시 금액을 투입하세요.');
				fee = prompt('다시 금액을 투입하세요.', 10000);
			}
		}
	} else {
		alert('결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.');
		sum = 0;
		sumText.value = sum + '원';
	}
	return fee;
}

const charge = document.querySelector('.charge');
charge.addEventListener('click', () => {
	if (sum == 0) {
		alert('선택한 메뉴가 없습니다.\n메뉴를 선택하세요.');
	} else {
		ifelse();
	}
});

// function paymentLoop() {
// 	return new Promise((resolve, reject) => {
// 		for (let i = 0; ; i++) {
// 			if (resolve < sum) {
// 				alert(Math.abs(fee - sum) + '원 부족합니다.\n다시 금액을 투입하세요.');
// 				fee = prompt('다시 금액을 투입하세요.', 10000);
// 			} else if (resolve == NaN) {
// 				alert('숫자로 입력하세요.');
// 				fee = prompt('다시 금액을 투입하세요.', 10000);
// 			} else if (resolve == null) {
// 				return;
// 			} else if (resolve > sum) {
// 				alert('결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.');
// 				sum = 0;
// 				sumText.value = sum + '원';
// 				return;
// 			} else {
// 				reject(new Error('Error'));
// 				return;
// 			}
// 		}
// 	});
// }

const reject = document.querySelector('.reject');
reject.addEventListener('click', () => {
	if (sum == 0) {
		alert('선택한 메뉴가 없습니다.\n메뉴를 선택하세요.');
	} else {
		if (confirm('정말 취소하겠습니까?')) {
			alert('취소되었습니다.');
			// console.log('typeof', typeof sum);
			sum = 0;
			sumText.value = sum + '원';
		}
	}
});
