const connectIngredients = (arr) => {
    if (!arr) {
        return null;
    }
    const connected = arr.join(' ');
    return connected[0].toUpperCase() + connected.slice(1);
};

export { connectIngredients };
