const buttons = document.querySelectorAll('#link');

buttons.forEach(btn => {
	btn.addEventListener('click', function (e) {
		let xPos = e.clientX - e.target.offsetLeft;
		let yPos = e.clientY - e.target.offsetTop;

		let ripples = document.createElement('timeouted');
		ripples.style.left = xPos + 'px';
		ripples.style.top = yPos + 'px';
		this.appendChild(ripples);

		setTimeout(() => {
			ripples.remove()
		}, 650);
	});
});


/*const tooltips = document.querySelectorAll('.tooltip');*/
const tooltipsStarter = document.querySelectorAll('.tooltip-activator')

tooltipsStarter.forEach(accessTools => {
	accessTools.addEventListener('mouseover', function (e) {
		let nearestTooltip = this.closest('div div div');

		nearestTooltip.classList.add('opened')
	})
	/*accessTools.addEventListener('mouseover', function (e) {
		this.classList.add('opened');
	})*/
})


const body = document.querySelector('.page-wrapper'), mainContainer = document.querySelector('.container-main');


body.addEventListener('copy', () => {
	let copyContainer = document.querySelector('.copy-message-container');

	body.style.background = 'white';

	setTimeout(() => {
		copyContainer.classList.remove('hidden');
		copyContainer.classList.add('visible');
	}, 250)

	setTimeout(() => {
		mainContainer.style = `opacity: .85; border-radius: 16.333rem; width: 80%; height: 75%;`;
		body.style = `background: white; filter: blur(0.2rem) brightness(120%);`
	}, 500);

	setTimeout(() => {
		copyContainer.classList.remove('visible');
		copyContainer.classList.add('hidden');
	}, 1750);

	setTimeout(() => {
		body.style = `background: black; filter: blur(0) brightness(100%);`
		mainContainer.style = `opacity: 1; border-radius: 0; width: 100%; height: 100%;`
	}, 2000);
});
