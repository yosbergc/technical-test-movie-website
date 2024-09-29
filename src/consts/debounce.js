export function debounce(callback, delay) {
    let tiempo;
    return (...args) => {
        clearTimeout(tiempo)
        tiempo = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}