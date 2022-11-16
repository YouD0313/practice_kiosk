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
	cart.addEventListener('click', () => {
		sum += parseInt(button[idx].value) * parseInt(spin[idx].value);
		sumText.value = sum + '원';
		console.log('button.value', button[idx].value);
		console.log('spin.value', spin[idx].value);
		spin[idx].value = 1;
		console.log('sum', sum);
		console.log('cart', cart);
		console.log('idx', idx);
		// }
	});
});

const charge = document.querySelector('.charge');
charge.addEventListener('click', () => {
	let fee = parseInt(prompt('금액을 투입하세요.', 10000));
	if (fee) {
		if (fee < sum) {
			alert(Math.abs(fee - sum) + '원 부족합니다. 다시 금액을 투입하세요.');
			parseInt(prompt('다시 금액을 투입하세요.', 10000));
		} else {
			alert('거스름돈은 ' + (fee - sum) + '원 입니다.');
		}
	} else {
		alert('숫자를 입력하세요.');
	}
});
const reject = document.querySelector('.reject');
reject.addEventListener('click', () => {
	if (confirm('정말 취소하겠습니까?')) {
		alert('취소되었습니다.');
		console.log('typeof', typeof sumText.value);
		location.reload();
	}
});
