const changeKeys = (arr, key) => {
    arr = arr.map((a) => {
        return {
            eventKey: a[key],
            ...a,
        };
    });
    return arr;
};

export { changeKeys };
