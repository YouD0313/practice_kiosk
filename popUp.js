const popUp = document.querySelector('.chooseFood__popUp');
const foodImgWrap = document.querySelectorAll('.chooseFood__img');
const header = document.querySelector('header');
const foodSection = document.querySelector('.chooseFood');
const xMark = document.querySelector('.xmark');

foodImgWrap.forEach((img, idx) => {
	img.addEventListener('click', () => {
		console.log('img', img);
		console.log('img.target', img.attributes[1].value);
		console.log('idx', idx);
		if (img.attributes[1].value == idx) {
			popUp.classList.add('pop');
			header.style.opacity = '0.5';
			foodSection.style.opacity = '0.5';
		}
	});
});

xMark.addEventListener('click', () => {
	popUp.classList.remove('pop');
	header.style.opacity = '1';
	foodSection.style.opacity = '1';
});

// json
let data = JSON.parse(JSON.stringify(TestFile));
