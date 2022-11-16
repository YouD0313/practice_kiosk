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
	if (sumText.value == '0원') {
		alert('선택한 메뉴가 없습니다.\n메뉴를 선택하세요.');
	} else {
		let fee = parseInt(prompt('금액을 투입하세요.', 10000));
		if (fee) {
			if (fee < sum) {
				alert(Math.abs(fee - sum) + '원 부족합니다.\n다시 금액을 투입하세요.');
				let fixFee = parseInt(prompt('다시 금액을 투입하세요.', 10000));
				if (fixFee < sum) {
					alert(Math.abs((fixFee - sum) + '원 부족합니다.\n재결제하세요.');
				} else {
					alert(
						'결제완료 되었습니다.\n거스름돈은 ' + (fixFee - sum) + '원 입니다.'
					);
					location.reload();
				}
			} else {
				alert('결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.');
				location.reload();
			}
		} else {
			alert('숫자로 입력하세요.');
			parseInt(prompt('다시 금액을 투입하세요.', 10000));
		}
	}
});
const reject = document.querySelector('.reject');
reject.addEventListener('click', () => {
	if (sumText.value == '0원') {
		alert('선택한 메뉴가 없습니다.\n메뉴를 선택하세요.');
	} else {
		if (confirm('정말 취소하겠습니까?')) {
			alert('취소되었습니다.');
			console.log('typeof', typeof sumText.value);
			location.reload();
		}
	}
});
