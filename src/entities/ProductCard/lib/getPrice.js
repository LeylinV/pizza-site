const getPrice = (price) => {
    return price.fixed ? `${price.number} ₽` : `от ${price.number} ₽`;
};
export { getPrice };
