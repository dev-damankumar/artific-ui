import styles from "./styles"
import {ILoader, LoaderConfig} from "../types/loader";
import getRandomClassId from "../utils/generateRandonClassId";


const Loader = (styles: string, classes: string, sizeClass: string) => {
	return `<div style='${styles}' data-ati-loader-modal class="${classes} ati-loader-modal"><div class="ati-loader ${sizeClass}"></div></div>`
}

const assignClasses = (conditions: LoaderConfig) => {
	let loaderClasses = '';
	if (conditions.variant !== 'default') loaderClasses += ` ati-loader-${conditions.variant}`
	if (conditions.theme !== 'dark') loaderClasses += ` ati-loader-${conditions.theme}`

	return loaderClasses
}
export const useLoader = (function () {

	function Constructor(this: ILoader & LoaderConfig & { selector: Element | null }, loadStyles: boolean) {
		if (typeof window === "undefined") return
		this.dismissible = false;
		this.variant = 'default';
		this.className = '';
		this.style = '';
		this.size = 'md';
		this.theme = 'dark';

		function createLoader(this: ILoader & LoaderConfig & { selector: Element | null }, recreated: boolean) {
			const id = getRandomClassId();
			const componentSelector = 'ati-loader';
			const componentId = `${componentSelector}-${id}`;
			const classes = assignClasses({
				variant: this.variant,
				size: this.size,
				theme: this.theme,
			})
			const sizeClass = (this.size !== 'md') ? `ati-loader-${this.size}` : ''
			const loader = Loader(this.style || '', `${this.className} ${componentId} ${classes}`, sizeClass)
			if (loadStyles) {
				if (!document.querySelector(`[data-ati-loader-style]`)) {
					document.head.insertAdjacentHTML("beforeend", styles)
				}
			}
			const prevLoader = document.querySelector(`[data-ati-loader-modal].${componentId}`)
			if (!prevLoader) {
				document.body.insertAdjacentHTML("beforeend", loader)
			}
			if (recreated) {
				if (prevLoader) {
					prevLoader.remove()
				}
				document.body.insertAdjacentHTML("beforeend", loader)
			}

			this.selector = document.querySelector(`[data-ati-loader-modal].${componentId}`)
			return loader
		}

		const loader = createLoader.call(this, false)

		this.show = () => {
			if (this.selector) {
				if (this.dismissible) {
					if (this.selector) {
						this.selector.addEventListener('click', () => {
							this.hide()
						})
					}
				}
				document.body.classList.add("ati-loader-loading")
				this.selector.classList.remove("ati-loader-modal-hide")
				this.selector.classList.add("ati-loader-modal-show")
			} else {
				document.body.innerHTML += loader
				this.selector = document.querySelector(".loader-modal")
				if (this.dismissible) {
					if (this.selector) {
						this.selector.addEventListener('click', () => {
							this.hide()
						})
					}
				}
				this.show()
			}
		}

		this.hide = () => {
			if (this.selector) {
				document.body.classList.remove("ati-loader-loading")
				this.selector.classList.remove("ati-loader-modal-show")
				this.selector.classList.add("ati-loader-modal-hide")
			}
		}

		this.destroy = () => {
			if (this.selector) {
				document.body.classList.remove("ati-loader-loading")
				this.selector.remove()
				this.selector = null
			}
		}

		this.config = (config) => {
			this.dismissible = config.dismissible || false;
			this.variant = config.variant || 'default';
			this.className = config.className || '';
			this.style = config.style || '';
			this.size = config.size || 'md';
			this.theme = config.theme || 'dark';
			createLoader.call(this, true)
			return true
		}
	}

	return function instance(loadStyles: boolean = true) {
		return (new (Constructor as any)(loadStyles) as ILoader)
	}

})()

export default useLoader
