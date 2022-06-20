// Переместите первую букву каждого слова в его конец, затем добавьте "ай" в конец слова. Оставьте знаки препинания нетронутыми.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => {
    return str.split(' ').map((str) => {
        if (!str.match(/[.,:!?]/)) return `${str.slice(1)}${str[0]}ay` 
        else return str
    }).join(' ')
}

console.log(pigIt('Hello world !'))


// Как решить без регулярки хз
// Только если в тупую создать массив знаков препинания и смотреть есть в нем он или нет