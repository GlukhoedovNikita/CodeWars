// Дана матрица в которой написаны интервалы нужно просто вернуть их сумму

const sumIntervals = (intervals) => {
    const set = new Set()
    intervals.map(row => [...Array(row[1] - row[0])].map((value, index) => set.add(row[0] + index)))
    return set.size
}

console.log(sumIntervals([[1, 4],[7, 10],[3, 5]]))

// Не прошел по времени хз..