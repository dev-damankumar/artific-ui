const style = `
<style data-ati-message-alert-style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
:root {
	--ai-bg: var(--ai-bg);
	--ai-bg-alt: #dddddd2b;
	--ai-font-size: var(--ai-font-size);
	--ai-text: hsla(222, 26%, 25%, 1);

	--ai-primary: hsla(230, 87%, 59%, 1);
	--ai-primary-color: var(--ai-primary);
	--ai-primary-text: #cfd7ff;
	--ai-primary-hover: hsla(230, 87%, 54%, 1);
	--ai-primary-color-hover: var(--ai-primary-hover);
	--ai-primary-text-hover: var(--ai-bg);
	--ai-primary-hover-box-shadow: hsla(230, 87%, 90%, 1);

	--ai-secondary: hsla(187, 100%, 42%, 1);
	--ai-secondary-color: var(--ai-secondary);
	--ai-secondary-text: hsl(187, 82%, 81%);
	--ai-secondary-hover: hsla(187, 100%, 37%, 1);
	--ai-secondary-color-hover: var(--ai-secondary-hover);
	--ai-secondary-text-hover: var(--ai-bg);
	--ai-secondary-hover-box-shadow: hsla(187, 100%, 90%, 1);

	--ai-light: hsla(0, 0%, 100%, 1);
	--ai-light-alt: hsl(0, 0%, 96%);
	--ai-light-color: var(--ai-light);
	--ai-light-text: hsl(221, 18%, 34%);
	--ai-light-hover: hsla(0, 0%, 95%, 1);
	--ai-light-color-hover: var(--ai-light-hover);
	--ai-light-text-hover: var(--ai-bg);
	--ai-light-hover-box-shadow: hsla(0, 0%, 90%, 1);

	--ai-dark: hsla(218, 36%, 18%, 1);
	--ai-dark-color: var(--ai-dark);
	--ai-dark-text: #d9d9d9;
	--ai-dark-hover: hsla(218, 36%, 13%, 1);
	--ai-dark-color-hover: var(--ai-dark-hover);
	--ai-dark-text-hover: var(--ai-bg);
	--ai-dark-hover-box-shadow: hsla(218, 36%, 90%, 1);

	
	--ati-message-alert-box-shadow: rgba(17, 17, 26, 0.10);
	--ati-message-alert-box-shadow-hover: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
	--ati-message-alert-border-radius: 5px;
	--ati-message-alert-padding: 1rem;
	--ati-message-alert-font-size: var(--ai-font-size);
	--ati-message-alert-margin: 10px;
	--ati-message-alert-border-width: 2px;
	--ati-message-alert-cursor: pointer;
	--ati-message-alert-main-color: #ededed;
	--ati-message-alert-mode-bg: var(--ai-bg);
	--ati-message-alert-background: var(--ai-bg);
	--ati-message-alert-background-color: var(--ai-bg);
	--ati-message-alert-text: var(--ai-text);
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

:root {
	--ati-message-alert-box-shadow: rgba(17, 17, 26, 0.10);
	--ati-message-alert-box-shadow-hover: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
	--ati-message-alert-border-radius: 5px;
	--ati-message-alert-padding: 1rem;
	--ati-message-alert-font-size: var(--ai-font-size);
	--ati-message-alert-margin: 10px;
	--ati-message-alert-border-width: 2px;
	--ati-message-alert-cursor: pointer;
	--ati-message-alert-main-color: #ededed;
	--ati-message-alert-mode-bg: var(--ai-bg);
	--ati-message-alert-background: var(--ai-bg);
	--ati-message-alert-background-color: var(--ai-bg);
	--ati-message-alert-text: var(--ai-text);
}

.ati-message-alert-wrapper {
	max-width: 100%;
	font-family: Nunito Sans, sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
	font-size: var(--ati-message-alert-font-size);
	font-weight: 400;
	line-height: var(--ai-line-height);
	margin: 0 0 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	z-index: var(--ai-z-index-popover);
}

.ati-message-alert-position-top-left.ati-message-alert-wrapper {
	top: var(--ati-message-alert-margin);
	left: var(--ati-message-alert-margin);
	right: unset;
	bottom: unset;
}

.ati-message-alert-position-top.ati-message-alert-wrapper {
	top: var(--ati-message-alert-margin);
	left: 50%;
	transform: translateX(-50%);
	right: unset;
	bottom: unset;
}

.ati-message-alert-position-bottom-left.ati-message-alert-wrapper {
	top: unset;
	left: var(--ati-message-alert-margin);
	right: unset;
	bottom: var(--ati-message-alert-margin);
}

.ati-message-alert-position-bottom.ati-message-alert-wrapper {
	top: unset;
	left: 50%;
	transform: translateX(-50%);
	right: unset;
	bottom: var(--ati-message-alert-margin);
}

.ati-message-alert-position-bottom-right.ati-message-alert-wrapper {
	top: unset;
	left: unset;
	right: var(--ati-message-alert-margin);
	bottom: var(--ati-message-alert-margin);
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
	right: var(--ati-message-alert-padding);
	top: var(--ati-message-alert-padding);
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
	min-width: calc(var(--ati-message-alert-font-size) * 1.8);
	width: calc(var(--ati-message-alert-font-size) * 1.8);
	height: calc(var(--ati-message-alert-font-size) * 1.8);
	margin-right: calc(var(--ati-message-alert-margin) * 1.8);
}

.ati-message-alert-outline {
	border: 2px solid;
}

.ati-message-close .ati-message-close-icon {
	width: calc(var(--ati-message-alert-font-size) + 1px);
	height: calc(var(--ati-message-alert-font-size) + 1px);
	font-size: var(--ati-message-alert-font-size);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	font-weight: 700;
}

.ati-message-alert-icon {
	width: calc(var(--ati-message-alert-font-size) + 1px);
	height: calc(var(--ati-message-alert-font-size) + 1px);
	font-size: var(--ati-message-alert-font-size);
	font-weight: bolder;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: var(--ai-bg);
	color: var(--ati-message-alert-background-color);
	margin-right: var(--ati-message-alert-margin);
}

.ati-message-alert-primary {
	--ati-message-alert-background: var(--ai-primary);
	--ati-message-alert-background-color: var(--ai-primary-color);
	--ati-message-alert-text: var(--ai-primary-text);
	--ati-message-alert-box-shadow: var(--ai-primary-hover-box-shadow)
}

.ati-message-alert-secondary {
	--ati-message-alert-background: var(--ai-secondary);
	--ati-message-alert-background-color: var(--ai-secondary-color);
	--ati-message-alert-text: var(--ai-secondary-text);
	--ati-message-alert-box-shadow: var(--ai-secondary-hover-box-shadow)
}

.ati-message-alert-light {
	--ati-message-alert-background: var(--ai-light);
	--ati-message-alert-background-color: var(--ai-light-color);
	--ati-message-alert-text: var(--ai-light-text);
	--ati-message-alert-box-shadow: var(--ai-light-hover-box-shadow)
}

.ati-message-alert-dark {
	--ati-message-alert-background: var(--ai-dark);
	--ati-message-alert-background-color: var(--ai-dark-color);
	--ati-message-alert-text: var(--ai-dark-text);
	--ati-message-alert-box-shadow: var(--ai-dark-hover-box-shadow)
}

.ati-message-success {
	--ati-message-alert-background: var(--ai-bg);
	--ati-message-alert-background-color: var(--ai-bg);
	--ati-message-alert-text: #17b978;
}

.ati-message-error {
	--ati-message-alert-background: var(--ai-bg);
	--ati-message-alert-background-color: var(--ai-bg);
	--ati-message-alert-text: #ff304f;
}


.ati-message-warning {
	--ati-message-alert-background: var(--ai-bg);
	--ati-message-alert-background-color: var(--ai-bg);
	--ati-message-alert-text: #ff8a5c;
}


.ati-message-info {
	--ati-message-alert-background: var(--ai-bg);
	--ati-message-alert-background-color: var(--ai-bg);
	--ati-message-alert-text: #0dafff;
}

.ati-message-close-icon {
	background: var(--ai-bg);
	color: var(--ati-message-alert-background-color);
}

.ati-message-success .ati-message-close-icon,
.ati-message-error .ati-message-close-icon,
.ati-message-warning .ati-message-close-icon,
.ati-message-info .ati-message-close-icon {
	background: var(--ati-message-alert-text);
	color: var(--ai-bg);
}

.ati-message-success .ati-message-message,
.ati-message-error .ati-message-message,
.ati-message-warning .ati-message-message,
.ati-message-info .ati-message-message {
	color: var(--ai-text)
}

.ati-message-header {
	margin: 0 0 5px;
	font-size: var(--ati-message-alert-font-size);
	font-weight: 700;
	color: #34363c;
	color: inherit;
	display: flex;
	align-items: center;
	line-height: var(--ai-line-height,1.5);
	padding-right: var(--ati-message-alert-padding);
	font-family: Nunito Sans, sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color emoji;
}

.ati-message-alert-wrapper {
	position: fixed;
	top: var(--ati-message-alert-margin);
	right: var(--ati-message-alert-margin);
	z-index: var(--ai-z-index-popover);
	transition: .15s all ease
}


.ati-message-alert.ati-message-alert-dismissible {
	padding-right: calc(calc(var(--ati-message-alert-font-size) + 8px) * 2);
}

.ati-message-alert {
	position: relative;
	background: var(--ati-message-alert-background);
	padding: var(--ati-message-alert-padding);
	border-radius: var(--ati-message-alert-border-radius);
	margin-bottom: calc(var(--ati-message-alert-margin) * 2);
	box-shadow: var(--ati-message-alert-box-shadow) 0 0 1rem;
	display: flex;
	align-items: center;
	animation: fromRight .5s ease;
	transition: .1s all ease;
	overflow: hidden
}

.ati-message-alert-note {
	border-left: var(--ati-message-alert-border-width) solid;
	border-right: var(--ati-message-alert-border-width) solid var(--ati-message-alert-mode-bg);
}

.ati-message-alert-rounded {
	--ati-message-alert-border-radius: 10px;
}

.ati-message-alert-pill {
	--ati-message-alert-border-radius: 50px;
}

.ati-message-alert-no-radius {
	--ati-message-alert-border-radius: 0px;
}

.ati-message-alert-extra-large {
	--ati-message-alert-padding: 24px;
	--ati-message-alert-font-size: 24px;
}

.ati-message-alert-large {
	--ati-message-alert-padding: 20px;
	--ati-message-alert-font-size: 20px;
}


.ati-message-alert-small {
	--ati-message-alert-margin: 10px;
	--ati-message-alert-padding: 12px;
	--ati-message-alert-font-size: 14px;
}

.ati-message-alert-extra-small {
	--ati-message-alert-margin: 5px;
	--ati-message-alert-padding: 8px;
	--ati-message-alert-font-size: 10px;
}

.ati-message-alert-small .ati-message-close, .ati-message-alert-extra-small .ati-message-close {
	top: var(--ati-message-alert-padding);
}

.ati-message-message {
	margin: 0;
	color: var(--ati-message-alert-text);
	font-size: var(--ati-message-alert-font-size);
	line-height: var(--ai-line-height,1.5);
	font-weight: 500;
}

.ati-message-alert img {
	width: auto;
	height: calc(var(--ati-message-alert-font-size) * 1);
	margin-right: var(--ati-message-alert-margin)
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
	background: var(--ai-dark);

}

.ati-mode-dark.ati-message-alert-note {
	border-right-color: var(--ai-dark);
}

</style>
`

export default style
