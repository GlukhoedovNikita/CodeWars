// Нужно найти самый максимальный проход вниз по пирамидке

const longestSlideDown = (pyramid) => {
    for (let i = 1; i < pyramid.length; i ++) {
        for (let j = 0; j < pyramid[i].length; j ++) {
            if (j === 0) pyramid[i][j] += pyramid[i - 1][j]
            if (j !== 0 && j + 1 !== pyramid[i].length) pyramid[i][j] += Math.max(pyramid[i - 1][j], pyramid[i - 1][j - 1])
            if (j + 1 === pyramid[i].length) pyramid[i][j] += pyramid[i - 1][j - 1] 
        }
    }
    return Math.max(...pyramid[pyramid.length - 1])
}

console.log(longestSlideDown([[3],
                             [7, 4],
                            [2, 4, 6],
                           [8, 5, 9, 3]]))


// Решение тупа в 2 стоки reduceRigth - перебирает массив с конца
// function longestSlideDown (pyramid) {
//   return pyramid.reduceRight((last,current)=>current.map(
//     (v,i)=>v+Math.max(last[i],last[i+1])
//   ))[0];
// }
