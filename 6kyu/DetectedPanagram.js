// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу. Например, предложение «Быстрая коричневая лиса перепрыгивает через ленивую собаку» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

// Учитывая строку, определите, является ли она панграммой. Возвращает True, если это так, False, если нет. Не обращайте внимания на цифры и знаки препинания.

// var string = "The quick brown fox jumps over the lazy dog."
// assert.strictEqual(isPangram(string), true)

// var string = "This is not a pangram."
// assert.strictEqual(isPangram(string), false)

const isPangram = (string) => {
    const strLower = string.toLowerCase()
    const aplhabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (const char of aplhabetArray) {
        if (strLower.indexOf(char) === -1) {
            return false
        }
    }
    return true
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))