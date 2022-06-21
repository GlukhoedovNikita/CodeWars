// Необходимо обойти матрицу по спирали и вернуть массив 

const snail = (Matrix) => {
    const result = []
    while (Matrix.length) {
        result.push(...Matrix.shift())
        Matrix.map(row => result.push(row.pop()))
        Matrix.reverse().map(row => row.reverse())
    }
    return result
}

console.log(snail([[1,2,3],
                   [4,5,6],
                   [7,8,9]]))

// Смотрел в инете обход по спирали матрицы вроде понял как это работает