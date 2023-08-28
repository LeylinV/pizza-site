const getAnchors = (arr, key) => {
    return arr.map((a) => {
        return {
            ...a,
            [key]: '#' + a[key],
        };
    });
};

export { getAnchors };
