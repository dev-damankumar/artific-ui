import getRandomClassId from "../utils/uuids/generateRandomClassId";
import generateRandomClassId from "../utils/uuids/generateRandomClassId";
import sizeClasses from "../utils/classes/sizeClasses";
import applyColorScheme from "../utils/colors/applyColorScheme";
import {IThemeProvider, MessageConfig, Messages, MessageType} from "./Message.types";
import {MessageAlert} from "./components";
import styles from './styles'
import createTheme from "../utils/styles/theme";

const assignClassesToAlert = (conditions: MessageConfig & { msgType: MessageType, componentSelector: string }) => {
	let alertClasses = 'ati-message-alert-destroying';
	if (conditions.mode === 'dark') alertClasses += ' ati-mode-dark';
	if (conditions.dismissible) alertClasses += ' ati-message-alert-dismissible';
	if (conditions.msgType && conditions.msgType !== 'alert') alertClasses += ` ati-message-${conditions.msgType}`;
	if (conditions.colorScheme || conditions.msgType === 'alert') alertClasses += ` ${conditions.componentSelector}-${conditions.theme}`
	if (conditions.type === 'notification') alertClasses += ' ati-message-alert-notification'
	return alertClasses
}

export const useMessage = (function () {

	function Constructor(this: Messages & MessageConfig, loadStyles: boolean, themeProvider: IThemeProvider | null | undefined) {
		if (typeof window === "undefined") return
		this.type = 'default';
		this.mode = 'light';
		this.dismissible = false;
		this.layout = 'default';
		this.position = 'top-right';
		this.variant = 'default';
		this.colorScheme = null;
		this.duration = 5;
		this.className = '';
		this.style = '';
		this.size = 'md';
		this.theme = 'primary';
		const themeId = generateRandomClassId()

		let timeHandler: any = null;
		let delay = 1
		const destroyingSeconds = 300
		const removingSeconds = 400
		const isStyleAppied = document.querySelector('[data-ati-message-alert-style]')
		if (loadStyles && !isStyleAppied) {
			document.head.insertAdjacentHTML('beforeend', styles)
		}

		function destroyMessage(this: MessageConfig, toast: HTMLElement) {
			toast.classList.add("ati-message-alert-close")
			setTimeout(function () {
				toast.classList.add("ati-message-alert-destroying")
			}, destroyingSeconds)
			setTimeout(function () {
				toast.remove()
				delay--
			}, removingSeconds)
		}

		const makeMessage = (type: MessageType, header: string, msg: string) => {
			const id = getRandomClassId();
			const componentSelector = 'ati-message-alert';
			const componentId = `${componentSelector}-${id}`;
			const variantClasses = this.variant !== 'default' ? `${componentSelector}-${this.variant}` : '';
			const layoutClasses = this.layout !== 'default' ? `${componentSelector}-${this.layout}` : '';
			const sizeClass = sizeClasses(componentSelector, this.size);
			const customCss: any = applyColorScheme(componentSelector, this.colorScheme, componentId)
			const styleCss = `<style>${customCss?.()?.props?.children}</style>`
			const classes = [
				this.className,
				componentId,
				componentSelector,
				layoutClasses,
				variantClasses,
				sizeClass
			].join(' ')

			let div = document.createElement("div")
			if (this.style) {
				div.setAttribute('style', this.style)
			}
			const alertClasses = assignClassesToAlert({
				componentSelector,
				colorScheme: this.colorScheme,
				mode: this.mode,
				dismissible: this.dismissible,
				msgType: type,
				type: this.type,
				theme: this.theme
			})
			div.className = `${classes} ${alertClasses}`
			div.innerHTML = MessageAlert(msg, header, {
				dismissible: this.dismissible,
				msgType: type,
				type: this.type
			})
			if (this.dismissible) {
				div.querySelector('.ati-message-close')!.addEventListener("click", () => {
					destroyMessage.call(this, div.querySelector('.ati-message-close')!.parentElement!);
				})
			}
			if (this.colorScheme) {
				document.head.insertAdjacentHTML("beforeend", styleCss)
			}
			return div
		}

		function setTimeForDestroy(this: MessageConfig, toast: HTMLElement) {
			destroyMessage.call(this, toast)
		}

		function render(this: MessageConfig, toast: HTMLElement) {
			const isThemeStyleExist = document.querySelector(`[data-artific-css='${themeId}']`)
			let wrapperExist = document.querySelector(`[data-ati-message-wrapper].ati-message-alert-position-${this.position}`)
			if (wrapperExist) {
				wrapperExist.className = `ati-message-alert-position-${this.position} ati-message-alert-wrapper`
				wrapperExist.insertAdjacentElement("beforeend", toast)
				if (!isThemeStyleExist) {
					if (themeProvider?.theme) {
						wrapperExist.id = themeId
						const themeStyle = createTheme(themeProvider.theme, {
							themeId,
							scope: "global"
						})
						const themeStyles = `<style data-artific-css=${themeId}>${themeStyle && themeStyle}</style>`
						wrapperExist.insertAdjacentHTML('afterbegin', themeStyles)
					}
				}
				setTimeout(() => {
					toast.classList.remove('ati-message-alert-destroying')
				}, destroyingSeconds)
			} else {
				let wrapper = document.createElement('div')
				wrapper.className = `ati-message-alert-position-${this.position} ati-message-alert-wrapper`
				wrapper.setAttribute("data-ati-message-wrapper", "")
				wrapper.append(toast)
				if (!isThemeStyleExist) {
					if (themeProvider?.theme) {
						wrapper.id = themeId
						const themeStyle = createTheme(themeProvider.theme, {
							themeId,
							scope: "global"
						})
						const themeStyles = `<style data-artific-css=${themeId}>${themeStyle && themeStyle}</style>`
						wrapper.insertAdjacentHTML('afterbegin', themeStyles)
					}
				}
				document.body.insertAdjacentElement('afterend', wrapper)
				setTimeout(() => {
					toast.classList.remove('ati-message-alert-destroying')
				}, destroyingSeconds)
			}
			timeHandler = setTimeout(setTimeForDestroy.bind(this, toast), (this.duration! * 1000) + delay * removingSeconds)
			delay++
		}

		this.success = (message: string, header: string) => {
			render.call(this, makeMessage('success', header, message))
			return this as Messages
		}

		this.error = (message: string, header: string) => {
			render.call(this, makeMessage('error', header, message))
			return this as Messages
		}

		this.warning = (message: string, header: string) => {
			render.call(this, makeMessage('warning', header, message))
			return this as Messages
		}

		this.info = (message: string, header: string) => {
			render.call(this, makeMessage('info', header, message))
			return this as Messages
		}

		this.alert = (message: string, header: string) => {
			render.call(this, makeMessage('alert', header, message))
			return this as Messages
		}

		this.config = (config: MessageConfig) => {
			this.type = config.type || 'default';
			this.mode = config.mode || 'light';
			this.dismissible = config.dismissible || false;
			this.duration = config.duration || 5;
			this.layout = config.layout || 'default';
			this.variant = config.variant || 'default';
			this.colorScheme = config.colorScheme || null;
			this.className = config.className || '';
			this.style = config.style || '';
			this.size = config.size || 'md';
			this.theme = config.theme || 'primary';
			this.position = config.position || 'top-right';
			return true
		}

		this.hold = () => {
			clearTimeout(timeHandler)
		}
	}

	return function instance(loadStyles: boolean = true, themeProvider: IThemeProvider | null | undefined = null) {
		return (new (Constructor as any)(loadStyles, themeProvider) as Messages)
	}
})()
export default useMessage
