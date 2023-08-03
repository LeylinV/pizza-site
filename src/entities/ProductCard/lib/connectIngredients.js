const connectIngredients = (arr) => {
    if (!arr){return null}
    const connected = arr.join(' ')
    const connectedWithCapital = connected[0].toUpperCase() + connected.slice(1);
    return connectedWithCapital
}

export {connectIngredients};