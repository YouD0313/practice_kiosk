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
		console.log('button.value', button[idx].value);
		console.log('spin.value', spin[idx].value);
		spin[idx].value = 1;
		console.log('sum', sum);
		console.log('cart', cart);
		console.log('idx', idx);
	});
});

// for문으로 변경하기
function ifelse() {
	let fee = parseInt(prompt('금액을 투입하세요.', 10000));
	console.log('fee', fee);
	if (fee) {
		if (fee < sum) {
			for (let i = 1; i < 10; i++) {
				alert(Math.abs(fee - sum) + '원 부족합니다.\n다시 금액을 투입하세요.');
				let fixFee = parseInt(prompt('다시 금액을 투입하세요.', 10000));
			}
		} else {
			alert('결제완료 되었습니다.\n거스름돈은 ' + (fee - sum) + '원 입니다.');
			sum = 0;
			sumText.value = sum + '원';
		}
	} else {
		alert('숫자로 입력하세요.');
		parseInt(prompt('다시 금액을 투입하세요.', 10000));
	}
}

const charge = document.querySelector('.charge');
charge.addEventListener('click', () => {
	if (sum == 0) {
		alert('선택한 메뉴가 없습니다.\n메뉴를 선택하세요.');
	} else {
		ifelse();
	}
});

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
