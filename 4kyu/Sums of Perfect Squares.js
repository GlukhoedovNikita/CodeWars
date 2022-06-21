// Нужно найти минимальное количество корней чисел из которых из суммы которых получится данное число

const sumOfSquares = (number) => {
    let result = 0
    while (number > 0) {
        number -= Math.floor(Math.sqrt(number)) ** 2
        result ++
    }
    return result
}

console.log(sumOfSquares(19))

// Обьективно хз как это решать смысл в том что для 18 например можно сделать 18 = 9 + 9 а не 18 = 16 + 1 + 1