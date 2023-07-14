export const getAnchors = (arr, key) => {
    arr.forEach(a => a[key] = '#'+a[key])
    return arr
}