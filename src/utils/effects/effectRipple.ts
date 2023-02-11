import Color from 'color';

function ripple(e: any, button: any, rippleEl: any, focus: any, config: any) {
	const ms = 500
	e.stopPropagation();
	let timeHandler: any = () => {
		try {
			ripple_elmnt.style.opacity = 0;
			rippleEl.removeChild(ripple_elmnt);
			config.mouseDown = false
			config.inFocus = false;
		} catch (er) {
		}
	};

	if (config.mouseDown) {
		clearTimeout(timeHandler)
	}
	const style = getComputedStyle(button);
	let backgroundColor = style['backgroundColor'] || '';

	if (backgroundColor === 'rgba(0, 0, 0, 0)' && !style['background'].includes('gradient')) {
		backgroundColor = 'rgb(255, 255, 255)';
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
	ripple_elmnt.style.transition = `transform ${ms}ms ease, opacity ${ms - 100}ms ease`;
	ripple_elmnt.style.background = `${Color(backgroundColor).hsl().darken(0.4).alpha(0.3).string()}`;
	rippleEl.appendChild(ripple_elmnt);

	setTimeout(() => {
		ripple_elmnt.style.transform = 'scale(1)';
	}, 10);

	button.addEventListener('mouseup', () => {
		setTimeout(timeHandler, ms / 2)
	});

	button.addEventListener('blur', () => {
		setTimeout(timeHandler, 0)
	});
}

export default ripple;
