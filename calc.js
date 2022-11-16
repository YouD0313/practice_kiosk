let sum = 0;
const spin = document.querySelectorAll('.spin');
const button = document.querySelectorAll('.cartIcon');

// button.addEventListener('click', function () {
// 	sum += parseInt(button.value) * parseInt(spin.value);
// 	document.getElementById('sumtext').value = sum + '원';
// 	spin.value = 1;
// });

button.forEach((cart, idx) => {
	cart.addEventListener('click', () => {
		sum += parseInt(button[idx].value) * parseInt(spin[idx].value);
		document.getElementById('sumtext').value = sum + '원';
		console.log('button.value', button[idx].value);
		console.log('spin.value', spin[idx].value);
		spin[idx].value = 1;
		console.log('sum', sum);
		console.log('cart', cart);
		console.log('idx', idx);
		// }
	});
});
