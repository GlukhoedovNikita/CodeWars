// Учитывая последовательность слов, вам нужно найти слово с наибольшим количеством баллов.

// Каждая буква слова набирает очки в соответствии с ее положением в алфавите: a = 1, b = 2, c = 3 и т.д.

// Вам нужно вернуть слово с наивысшим баллом в виде строки.

// Если два слова имеют одинаковый результат, верните слово, которое появляется раньше всего в исходной строке.

// assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
// assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
// assert.strictEqual(high('take me to semynak'), 'semynak');   
// assert.strictEqual(high('aa b'), 'aa');
// assert.strictEqual(high('b aa'), 'b');
// assert.strictEqual(high('bb d'), 'bb');
// assert.strictEqual(high('d bb'), 'd');
// assert.strictEqual(high('aaa b'), 'aaa');


const high = (str) => {
    const sumArray = str.split(' ')
                        .map((str) => str.split('').reduce((sum, char) => sum + char.charCodeAt() - 96, 0))
    let result = [sumArray[0], 0]
    for (let i = 1; i < sumArray.length; i++) {
        if (result[0] < sumArray[i]) result = [sumArray[i], i]
    }
    return str.split(' ')[result[1]]
} 

console.log(high('what time are we climbing up the volcano'))