// Подсчитайте количество дубликатов
// Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр, не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры.

// Пример
// "abcde" -> 0 # символы не повторяются более одного раза
// "aabbcde" -> 2 # "а" и "б"
// "aabBcde" -> 2 # 'a' встречается дважды и 'b' дважды (`b` и `B`)
// "неделимость" -> 1 # 'i' встречается шесть раз
// «Неделимость» -> 2 # 'i' встречается семь раз, а 's' встречается дважды
// «aA11» -> 2 # «а» и «1»
// «ABBA» -> 2 # «A» и «B» встречаются дважды


// Test.assertEquals(duplicateCount(""), 0);
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")


const duplicateCount = (text) => {
    const countMap = new Map()
    let result = 0
    for (char of text.toLowerCase()) {
        if (countMap.get(char)) {
            countMap.set(char, countMap.get(char) + 1)
            countMap.get(char) === 2 && result ++
        }
        else countMap.set(char, 1) 
    }

    return result
}

console.log(duplicateCount('abbaaacdeeeee'))