let sum = 0;
const spin = document.querySelectorAll('.spin');
const button = document.querySelectorAll('.cartIcon');

// button.addEventListener('click', function () {
// 	sum += parseInt(button.value) * parseInt(spin.value);
// 	document.getElementById('sumtext').value = sum + '원';
// 	spin.value = 1;
// });

button.forEach((cart, i) => {
	cart.addEventListener('click', (event) => {
		const target = event.target;
		const link = target.dataset.index;
		console.log('target', target);
		console.log('link', link);
		button.forEach(() => {
			// if (cart == i) {
			sum += parseInt(button[i].value) * parseInt(spin[i].value);
			document.getElementById('sumtext').value = sum + '원';
			spin[i].value = 1;
			console.log('sum', sum);
			console.log('cart', cart);
			console.log('i', i);
			// }
		});
	});
});
