const getRandomClassId = () => {
    return `artific-${Math.random().toString(16).slice(2)}`
}

export default getRandomClassId
