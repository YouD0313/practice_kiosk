// import data from './json-server-exam/db.js';

const popUp = document.querySelector('.chooseFood__popUp');
const foodImgWrap = document.querySelectorAll('.chooseFood__img');
const header = document.querySelector('header');
const foodSection = document.querySelector('.chooseFood');
const xMark = document.querySelector('.xmark');
const cartIcon = document.querySelector('.cartIcon');

// 키오스크화면 json 가져오기
document.addEventListener('DOMContentLoaded', function () {
	$.ajax({
		url: 'json-server-exam/db.json',
		dataType: 'json',
		success: function (data) {
			foodImgWrap.forEach((img, idx) => {
				if (img.attributes[1].value == data[idx].index) {
					$('.chooseFood__img > img').eq(idx).attr('src', data[idx].imgUrl);
					$('.chooseFood__img > img').eq(idx).attr('alt', data[idx].alt);
					$('.chooseFood__text__wrap > h1').eq(idx).text(data[idx].name);
					$('.spin__wrap > span').eq(idx).text(data[idx].price);
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
				if (data[idx].index == idx) {
					$('.chooseFood__popUp__img > img').attr('src', data[idx].imgUrl);
					$('.chooseFood__popUp__img > img').attr('alt', data[idx].alt);
					$('.chooseFood__popUp__wrap > h1').text(data[idx].name);
					$('.popUp__spin__wrap > span').text(data[idx].price);
					$('.popUp__spin__wrap > button').attr('value', data[idx].value);
				}
			},
		});
		if (img.attributes[1].value == idx) {
			popUp.classList.add('pop');
			foodSection.classList.add('noClick');
			$('body').css('overflow', 'hidden');
			header.style.opacity = '0.5';
			foodSection.style.opacity = '0.5';
		}
	});
});

function closeEvt(icon) {
	icon.addEventListener('click', () => {
		popUp.classList.remove('pop');
		foodSection.classList.remove('noClick');
		$('body').css('overflow', 'visible');
		header.style.opacity = '1';
		foodSection.style.opacity = '1';
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
