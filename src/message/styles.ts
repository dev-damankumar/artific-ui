const style = `
<style data-ati-message-alert-style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

:root {
	--text-color-alpha: 1;
	--text-color-hue: 222;
	--text-color-saturation: 26%;
	--text-color-lightness: 25%;
	--text-color: hsla(var(--text-color-hue, 222), var(--text-color-saturation, 26%), var(--text-color-lightness, 25%), var(--text-color-alpha, 1));

	--link-color-alpha: 1;
	--link-color-hue: 231;
	--link-color-saturation: 86%;
	--link-color-lightness: 59%;
	--link-color: hsla(var(--link-color-hue, 231), var(--link-color-saturation, 86%), var(--link-color-lightness, 59%), var(--link-color-alpha, 1));

	--primary-alpha: 1;
	--primary-hue: 230;
	--primary-saturation: 87%;
	--primary-lightness: 59%;
	--primary: hsla(var(--primary-hue, 230), var(--primary-saturation, 87%), var(--primary-lightness, 59%), var(--primary-alpha, 1));
	--primary-color: var(--primary);

	--secondary-alpha: 1;
	--secondary-hue: 187;
	--secondary-saturation: 100%;
	--secondary-lightness: 42%;
	--secondary: hsla(var(--secondary-hue, 187), var(--secondary-saturation, 100%), var(--secondary-lightness, 42%), var(--secondary-alpha, 1));
	--secondary-color: var(--secondary);

	--light-alpha: 1;
	--light-hue: 0;
	--light-saturation: 0%;
	--light-lightness: 100%;
	--light: hsla(var(--light-hue, 0), var(--light-saturation, 0%), var(--light-lightness, 100%), var(--light-alpha, 1));
	--light-color: var(--light);

	--dark-alpha: 1;
	--dark-hue: 218;
	--dark-saturation: 36%;
	--dark-lightness: 18%;
	--dark: hsla(var(--dark-hue, 218), var(--dark-saturation, 36%), var(--dark-lightness, 18%), var(--dark-alpha, 1));
	--dark-color: var(--dark);
	
	
	--message-box-shadow: rgba(17, 17, 26, 0.10) 0 0 16px;
	--message-box-shadow-hover: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
	--message-border-radius: 5px;
	--message-border-width: 4px;
	--message-padding: 16px;
	--message-font-size: 16px;
	--message-margin: 10px;
	--message-outline-width: 2px;
	--message-cursor: pointer;
	--message-main-color: #ededed;
	--message-mode-bg: white;
}

@font-face {
	font-family: 'Segoe UI Web (West European)';
	src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff') format('woff');
	font-weight: 100;
	font-style: normal;
}

@font-face {
	font-family: 'Segoe UI';
	src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff') format('woff');
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: 'Segoe UI';
	src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff') format('woff');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Segoe UI';
	src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff') format('woff');
	font-weight: 600;
	font-style: normal;
}



@keyframes fromRight {
	0% {
		transform: translateX(110vh)
	}
	100% {
		transform: translateX(0)
	}
}

@keyframes fromLeft {
	0% {
		transform: translateX(-110vh)
	}
	100% {
		transform: translateX(0)
	}
}

@keyframes fromTop {
	0% {
		transform: translateY(-110vh)
	}
	100% {
		transform: translateX(0)
	}
}

@keyframes fromBottom {
	0% {
		transform: translateY(100vh)
	}
	100% {
		transform: translateX(0)
	}
}
.ati-message-alert-wrapper ,.ati-message-alert-wrapper *, .ati-message-alert-wrapper ::after, .ati-message-alert-wrapper ::before {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	-moz-transition: all .5s ease;
	-webkit-transition: all .5s ease;
	-o-transition: all .5s ease;
	transition: all .5s ease;
	outline: 0;
	font-family: 'Nunito Sans', sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.ati-message-alert-wrapper {
	max-width: 100%;
	font-family: Nunito Sans, sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
	font-size: var(--message-font-size);
	font-weight: 400;
	line-height: 1.5;
	margin: 0 0 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}

.ati-message-alert-position-top-left.ati-message-alert-wrapper {
	top: var(--message-margin);
	left: var(--message-margin);
	right: unset;
	bottom: unset;
}

.ati-message-alert-position-top.ati-message-alert-wrapper {
	top: var(--message-margin);
	left: 50%;
	transform: translateX(-50%);
	right: unset;
	bottom: unset;
}

.ati-message-alert-position-bottom-left.ati-message-alert-wrapper {
	top: unset;
	left: var(--message-margin);
	right: unset;
	bottom: var(--message-margin);
}

.ati-message-alert-position-bottom.ati-message-alert-wrapper {
	top: unset;
	left: 50%;
	transform: translateX(-50%);
	right: unset;
	bottom: var(--message-margin);
}

.ati-message-alert-position-bottom-right.ati-message-alert-wrapper {
	top: unset;
	left: unset;
	right: var(--message-margin);
	bottom: var(--message-margin);
}

/*Animation*/
.ati-message-alert.ati-message-alert-close {
	transform: translateX(100vh)
}

.ati-message-alert.ati-message-alert-destroying {
	transform: translateX(110vh);
	height: 0;
	margin: 0;
	padding: 0
}

.ati-message-alert-position-top-left.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-close {
	transform: translateX(-100vh)
}

.ati-message-alert-position-top-left.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-destroying {
	transform: translateX(-110vh)
}

.ati-message-alert-position-top-left.ati-message-alert-wrapper .ati-message-alert {
	animation: fromLeft .5s ease;
}

.ati-message-alert-position-top.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-close {
	transform: translateY(-100vh)
}

.ati-message-alert-position-top.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-destroying {
	transform: translateY(-110vh)
}

.ati-message-alert-position-top.ati-message-alert-wrapper .ati-message-alert {
	animation: fromTop .5s ease;
}


.ati-message-alert-position-bottom-left.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-close {
	transform: translateX(-100vh)
}

.ati-message-alert-position-bottom-left.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-destroying {
	transform: translateX(-110vh)
}

.ati-message-alert-position-bottom-left.ati-message-alert-wrapper .ati-message-alert {
	animation: fromLeft .5s ease;
}

.ati-message-alert-position-bottom-right.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-close {
	transform: translateX(100vh)
}

.ati-message-alert-position-bottom-right.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-destroying {
	transform: translateX(110vh)
}

.ati-message-alert-position-bottom-right.ati-message-alert-wrapper .ati-message-alert {
	animation: fromRight .5s ease;
}


.ati-message-alert-position-bottom.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-close {
	transform: translateY(100vh)
}

.ati-message-alert-position-bottom.ati-message-alert-wrapper .ati-message-alert.ati-message-alert-destroying {
	transform: translateY(110vh)
}

.ati-message-alert-position-bottom.ati-message-alert-wrapper .ati-message-alert {
	animation: fromBottom .5s ease;
}

/*Close*/


.ati-message-close {
	border: none;
	background: no-repeat;
	position: absolute;
	right: var(--message-padding);
	top: var(--message-padding);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
}

.ati-message-alert.ati-message-alert-notification {
	align-items: flex-start;
}

.ati-message-alert-notification.ati-message-alert img, .ati-message-alert-notification .ati-message-alert-icon {
	min-width: calc(var(--message-font-size) * 1.8);
	width: calc(var(--message-font-size) * 1.8);
	height: calc(var(--message-font-size) * 1.8);
	margin-right: calc(var(--message-margin) * 1.8);
}

.ati-message-alert-outline {
	border: 2px solid;
}

.ati-message-close .ati-message-close-icon {
	width: calc(var(--message-font-size) + 1px);
	height: calc(var(--message-font-size) + 1px);
	font-size: var(--message-font-size);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	font-weight: 700;
}

.ati-message-alert-icon {
	width: calc(var(--message-font-size) + 1px);
	height: calc(var(--message-font-size) + 1px);
	font-size: var(--message-font-size);
	font-weight: bolder;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: white;
	margin-right: var(--message-margin);
}

.ati-message-alert-primary .ati-message-message,
.ati-message-alert-secondary .ati-message-message,
.ati-message-alert-dark .ati-message-message {
	color: white !important;
}

.ati-message-alert-light .ati-message-message {
	color: var(--text-color) !important;
}

.ati-message-alert-primary {
	background: var(--primary) !important;
	color: white !important;
}

.ati-message-alert-secondary {
	background: var(--secondary) !important;
	color: white !important;
}

.ati-message-alert-dark {
	background: var(--dark) !important;
	color: white !important;
}

.ati-message-alert-light {
	background: var(--light) !important;
	color: var(--text-color) !important;
}

.ati-message-alert-primary .ati-message-alert-icon, .ati-message-alert-primary .ati-message-close-icon {
	background: white !important;
	color: var(--primary-color) !important;
}

.ati-message-alert-secondary .ati-message-alert-icon, .ati-message-alert-secondary .ati-message-close-icon {
	background: white !important;
	color: var(--secondary-color) !important;
}

.ati-message-alert-dark .ati-message-alert-icon, .ati-message-alert-dark .ati-message-close-icon {
	background: white !important;
	color: var(--dark-color) !important;
}

.ati-message-alert-light .ati-message-alert-icon, .ati-message-alert-light .ati-message-close-icon {
	color: var(--text-color) !important;
	background: whitesmoke !important;
}


.ati-message-header {
	margin: 0 0 5px;
	font-size: var(--message-font-size);
	font-weight: 700;
	color: #34363c;
	color: inherit;
	display: flex;
	align-items: center;
	line-height: 1.35;
	padding-right: var(--message-padding);
	font-family: Nunito Sans, sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color emoji;
}

.ati-message-alert-wrapper {
	position: fixed;
	top: var(--message-margin);
	right: var(--message-margin);
	transition: .15s all ease
}


.ati-message-alert.ati-message-alert-dismissible {
	padding-right: calc(calc(var(--message-font-size) + 8px) * 2);
}

.ati-message-alert {
	position: relative;
	background: white;
	padding: var(--message-padding);
	border-radius: var(--message-border-radius);
	margin-bottom: calc(var(--message-margin) * 2);
	box-shadow: var(--message-box-shadow);
	display: flex;
	align-items: center;
	animation: fromRight .5s ease;
	transition: .1s all ease;
	overflow: hidden
}

.ati-message-alert-note {
	border-left: var(--message-border-width) solid;
	border-right: var(--message-border-width) solid var(--message-mode-bg);
}

.ati-message-alert-rounded {
	--message-border-radius: 10px;
}

.ati-message-alert-pill {
	--message-border-radius: 50px;
}

.ati-message-alert-no-radius {
	--message-border-radius: 0px;
}

.ati-message-alert-extra-large {
	--message-padding: 24px;
	--message-font-size: 24px;
}

.ati-message-alert-large {
	--message-padding: 20px;
	--message-font-size: 20px;
}


.ati-message-alert-small {
	--message-margin: 10px;
	--message-padding: 12px;
	--message-font-size: 14px;
}

.ati-message-alert-extra-small {
	--message-margin: 5px;
	--message-padding: 8px;
	--message-font-size: 10px;
}

.ati-message-alert-small .ati-message-close, .ati-message-alert-extra-small .ati-message-close {
	top: var(--message-padding);
}

.ati-message-message {
	margin: 0;
	color: #303a52;
	font-size: var(--message-font-size);
	line-height: 1.35;
	font-weight: 500;
}

.ati-message-alert img {
	width: auto;
	height: calc(var(--message-font-size) * 1);
	margin-right: var(--message-margin)
}

.ati-message-success {
	color: #17b978
}

.ati-message-success .ati-message-close .ati-message-close-icon {
	background: #17b978;
	color: white;
}

.ati-message-error {
	color: #ff304f
}

.ati-message-error .ati-message-close .ati-message-close-icon {
	background: #ff304f;
	color: white;
}

.ati-message-warning {
	color: #ff8a5c;
}

.ati-message-warning .ati-message-close .ati-message-close-icon {
	background: #ff8a5c;
	color: white;
}

.ati-message-info {
	color: #0dafff
}

.ati-message-info .ati-message-close .ati-message-close-icon {
	background: #0dafff;
	color: white;
}

@media screen and (max-width: 380px) {
	.ati-message-alert {
		min-width: 80%;
		max-width: 100%;
	}

	.ati-message-alert-wrapper {
		width: 100%;
	}

}

.ati-message-alert.ati-mode-dark {
	background: var(--dark);

}

.ati-mode-dark.ati-message-alert-note {
	border-right-color: var(--dark);
}

.ati-message-alert.ati-mode-dark .ati-message-message {
	color: #fff;
}

</style>
`

export default style
