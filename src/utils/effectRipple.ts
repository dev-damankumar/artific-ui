import rgbaToHsla from './colors/rgbToHSL';

function ripple(e: any, button: any, focus: any, initial: any, mouseDown: any) {
	const ms = 500
	e.stopPropagation();

	let timeHandler: any = () => {
		try {
			ripple_elmnt.style.opacity = 0;
			button.removeChild(ripple_elmnt);
			button.style = initial;
			mouseDown = false;
		} catch (er) {
			console.log("mouseDown", mouseDown)
		}
	};

	clearTimeout(timeHandler);
	button.style.overflow = 'hidden';
	const style = getComputedStyle(button);
	let backgroundColor = style['backgroundColor'] || '';

	if (backgroundColor === 'rgba(0, 0, 0, 0)' && !style['background'].includes('gradient')) {
		backgroundColor = 'rgb(255, 255, 255)';
	}
	if (backgroundColor.startsWith('rgb')) {
		backgroundColor = backgroundColor.replace(/^\w*/gm, '').replace(/[(|)]/g, '');
		var [r, g, b, a] = backgroundColor.split(',');
		var hslColor: any = rgbaToHsla(r, g, b, a ? a : '1');
	}

	let ripple_elmnt: any = document.createElement('span');
	let diameter = Math.max(parseInt(style.height), parseInt(style.width)) * 1.5;
	let radius = diameter / 2;

	ripple_elmnt.className = 'ripple';
	ripple_elmnt.style.height = ripple_elmnt.style.width = diameter + 'px';
	ripple_elmnt.style.position = 'absolute';
	ripple_elmnt.style.borderRadius = '1000px';
	ripple_elmnt.style.pointerEvents = 'none';

	ripple_elmnt.style.left = e.nativeEvent.offsetX - radius + 'px';
	ripple_elmnt.style.top = e.nativeEvent.offsetY - radius + 'px';
	if (focus) {
		ripple_elmnt.style.left = 10 - radius + 'px';
		ripple_elmnt.style.top = 5 - radius + 'px';
	}
	ripple_elmnt.style.transform = 'scale(0)';
	ripple_elmnt.style.transformOrigin = 'center';
	button.style = initial;
	ripple_elmnt.style.transition = `transform ${ms}ms ease, opacity ${ms - 100}ms ease`;
	ripple_elmnt.style.background = `hsl(${hslColor?.data?.h}deg,${hslColor?.data?.s}%,${(hslColor?.data?.l > 60) ? '80%' : '100%'},0.3)`;

	button.appendChild(ripple_elmnt);

	setTimeout(() => {
		button.style.overflow = 'hidden';
		ripple_elmnt.style.transform = 'scale(1)';
	}, 10);

	button.addEventListener('mouseup', () => {
		setTimeout(timeHandler, ms / 2)
	}, {once: true});

	button.addEventListener('blur', () => {
		setTimeout(timeHandler, 0)
	}, {once: true});
}

export default ripple;
