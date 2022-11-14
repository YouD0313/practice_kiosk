let sum = 0;

function calc(button) {
	if (button) sum += parseInt(button.value);

	document.getElementById('sumtext').value = sum + '원';
}
