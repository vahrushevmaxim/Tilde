document.addEventListener('DOMContentLoaded', function () {
	const wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true
	})
	wow.init();

	////////////////////////////////////////////////////////////////////
	let body = document.querySelector('.mobileapp');
	body.addEventListener('mousemove', parlx);

	function parlx(e) {

		let item = document.querySelectorAll('.mobileapp__right-inner');
		item.forEach(element => {

			let speed = element.getAttribute('data-speed');

			element.style.transform = `translateX(${e.clientX * speed / 100}px)`;
		});
	};

	////////////////////////////////////////////////////////////////////
	const parallax = document.querySelector('.information');

	if (parallax) {
		const cross = document.querySelector('.items-bg');

		//Коэффициенты//

		const forCross = 20;

		//Скорость анимации//

		const speed = 1;

		//Переменные//

		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		function setMouse() {

			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			cross.style.cssText = `transform: translate(${positionX / forCross}%, ${positionY / forCross}%);`;

			requestAnimationFrame(setMouse);
		};

		setMouse();

		parallax.addEventListener('mousemove', function (e) {
			const width = parallax.offsetWidth;
			const height = parallax.offsetHeight;

			//Середина 0//

			const coordX = e.pageX - width / 2;
			const coordY = e.pageY - height / 2;

			coordXprocent = coordX / width * 100;
			coordYprocent = coordY / height * 100;
		});
	};
});

