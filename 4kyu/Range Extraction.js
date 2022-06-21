// Дан массив мы должны его привести в такой вид (указано ниже)

// est.assertEquals(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]),
//                            "-6,-3-1,3-5,7-11,14,15,17-20")

const solution = (array) => {
    const result = []
    let tempSum = 0
    for (let i = 0; i < array.length; i++) {
        if (i + 1 < array.length && array[i] + 1 === array[i + 1]) {
            tempSum++
        } else {
            if (tempSum > 1) {
                result.push(`${array[i - tempSum]}-${array[i]}`)
            }  else {
                if (tempSum === 1) {
                    result.push(`${array[i - tempSum]}`)
                    result.push(`${array[i]}`)
                } else result.push(`${array[i]}`)

            }
            tempSum = 0
        }
    }
    return result.join(',')
}

console.log(solution([-3,-2,-1,2,10,15,16,18,19,20]))

// Большое решение вот есть прикольное через reduce

// const solution = (list) => list.reduce((acc,curr,i) => {
//     if (i==0) return curr.toString();
//     if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
//     if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
//     return acc+","+curr;
//   });