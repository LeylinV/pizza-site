const getPrice = (price) => {
    const priceString = price.fixed? `${price.number} ₽` : `от ${price.number} ₽`
    return priceString
}
export {getPrice}