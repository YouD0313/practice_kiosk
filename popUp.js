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
					$('.popUp__spin__wrap > span').text(data[idx].price);
					$('.popUp__spin__wrap > button').attr('value', data[idx].value);
				}
			},
		});
		if (img.attributes[1].value == idx) {
			popUpClick();
		}
	});
});

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
					$('.chooseFood__popUp__img > img').attr('src', data[idx6].imgUrl);
					$('.chooseFood__popUp__img > img').attr('alt', data[idx6].alt);
					$('.chooseFood__popUp__wrap > h1').text(data[idx6].name);
					$('.popUp__spin__wrap > span').text(data[idx6].price);
					$('.popUp__spin__wrap > button').attr('value', data[idx6].value);
				}
			},
		});
		if (img.attributes[1].value == idx) {
			popUpClick();
		}
	});
});

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
