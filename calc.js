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
		// sum +=
		// 	parseInt(this.value) * parseInt(this.parentElement.childNodes[3].value);
		sum += parseInt(button[idx].value) * parseInt(spin[idx].value);
		sumText.value = sum + '원';
		// console.log('button.value', button[idx].value);
		// console.log('spin.value', spin[idx].value);
		spin[idx].value = 1;
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
