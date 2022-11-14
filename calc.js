let sum = 0;
const spin = document.querySelectorAll('.spin');
const button = document.querySelectorAll('.cartIcon');
button.addEventListener('click', function () {
	sum += parseInt(button.value) * parseInt(spin.value);
	document.getElementById('sumtext').value = sum + '원';
	spin.value = 1;
});
