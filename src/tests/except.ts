const except = (arr: string[], ...el: string[]) => {
	const tempArr = [...arr]
	el.forEach(e => {
		const index = tempArr.indexOf(e)
		if (index === -1) return
		tempArr.splice(index, 1)
	})
	return tempArr
}

export default except
