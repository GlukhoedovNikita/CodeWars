// Существует массив с некоторыми числами. Все числа равны, за исключением одного. Попробуй найти его!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

const findUniq = (arr) => {
    const map = new Map()
    for (value of arr) {
        !map.has(value) ? map.set(value, 1) : map.set(value, map.get(value) + 1)
    }
    for ([key, value] of map.entries()) if (value === 1) return key
}

console.log(findUniq([ 1, 0, 0 ]))