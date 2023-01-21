interface CSSClasses {
	[x: string]: any,
}

const getClassNames = (from: CSSClasses, ...classes: (string | boolean)[]) => {
	let array = [...classes]
	let classNames = ''
	array.forEach(v => {
		if (v && typeof v === 'string') {
			let item = v?.trim()
			let innerClasses = item.split(/\s/g)
			if (innerClasses.length > 1) {
				innerClasses.forEach(innerClass => {
					let innerItem = innerClass?.trim()
					if (from[innerItem]) {
						classNames += `${from[innerItem]} `
					}
				})
			}
			if (from[item]) {
				classNames += `${from[item]} `
			}
		}
	})
	return classNames
}

export default getClassNames
