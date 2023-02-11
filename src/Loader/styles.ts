const style = `<style data-ati-loader-style>
:root {
	--loader-secondary-bg: white;
	--dark: hsla(218, 36%, 18%, 1);
}

.ati-loader-loading {
	overflow: hidden
}

.ati-loader-modal {
	--dark: hsla(218, 36%, 18%, 0.8);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background: var(--dark);
	align-items: center;
	justify-content: center;
	z-index: var(--z-index-modal-backdrop);
	display: none;
}

.ati-loader-modal.ati-loader-modal-show {
	display: flex
}

.ati-loader-modal.ati-loader-modal-hide {
	display: none
}

@-webkit-keyframes load1 {
	0%, 100%, 80% {
		box-shadow: 0 0;
		height: 4em
	}
	40% {
		box-shadow: 0 -2em;
		height: 5em
	}
}

@keyframes load1 {
	0%, 100%, 80% {
		box-shadow: 0 0;
		height: 4em
	}
	40% {
		box-shadow: 0 -2em;
		height: 5em
	}
}

.ati-loader-light {
	background: #f6f8fad1 !important;
}

.ati-loader-modal.ati-loader-blur {
	backdrop-filter: blur(10px);
}

.ati-loader-modal.ati-loader-solid {
	--dark: hsla(218, 36%, 18%, 1);
	background: var(--dark);
}

.ati-loader-modal.ati-loader-solid.ati-loader-light {
	background: white !important;
}

/*Sizes*/
.ati-loader-xl {
	transform: scale(2);
}

.ati-loader-lg {
	transform: scale(1.5);
}

.ati-loader-sm {
	transform: scale(.6);
}

.ati-loader-xs {
	transform: scale(.4);
}

.ati-loader-light .ati-loader {
	--loader-secondary-bg: var(--dark)
}

.ati-loader {
	height: 50px;
	width: 50px;
}

.ati-loader:before,
.ati-loader:after {
	border-radius: 50%;
	content: "";
	display: block;
	height: 20px;
	width: 20px;
}

.ati-loader:before {
	animation: ball1 1s infinite;
	background-color: var(--loader-secondary-bg);
	box-shadow: 30px 0 0 var(--primary);
	margin-bottom: 10px;
}

.ati-loader:after {
	animation: ball2 1s infinite;
	background-color: var(--primary);
	box-shadow: 30px 0 0 var(--loader-secondary-bg);
}

@keyframes ball1 {
	0% {
		box-shadow: 30px 0 0 var(--primary);
	}
	50% {
		box-shadow: 0 0 0 var(--primary);
		margin-bottom: 0;
		transform: translate(15px, 15px);
	}
	100% {
		box-shadow: 30px 0 0 var(--primary);
		margin-bottom: 10px;
	}
}

@keyframes ball2 {
	0% {
		box-shadow: 30px 0 0 var(--loader-secondary-bg);
	}
	50% {
		box-shadow: 0 0 0 var(--loader-secondary-bg);
		margin-top: -20px;
		transform: translate(15px, 15px);
	}
	100% {
		box-shadow: 30px 0 0 var(--loader-secondary-bg);
		margin-top: 0;
	}
}
</style>`

export default style
