const menuClick = document.querySelectorAll('.menuClick');
const section = document.querySelectorAll('.section');

menuClick.forEach((btn, idx) => {
	// console.log('btn', btn);
	// console.log('idx ---------', idx);
	btn.addEventListener('click', function () {
		// console.log('-------------------------');
		menuClick.forEach((inner) => {
			inner.classList.remove('active');
			// console.log('inner', inner);
			// console.log('idx2 ---------', idx);
		});
		// console.log('btn.classList.length', btn.classList.length);
		// console.log('idx3 ---------', idx);
		menuClick[idx].classList.add('active');
		if (btn.classList.length == 2) {
			// console.log('idx4 ---------', idx);
			section.forEach((s, i) => {
				// console.log('idx5 ---------', idx);
				// console.log('s', s);
				// console.log('i', i);
				if (idx != i) {
					s.style.display = 'none';
				} else {
					s.style.display = 'block';
				}
			});
		}
		// console.log('------------------------------------');
	});
});
