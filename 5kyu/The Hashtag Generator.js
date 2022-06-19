// Маркетинговая команда тратит слишком много времени на ввод хэштегов.
// Давайте поможем им с нашим генератором хэштегов!

// Вот сделка:

// Он должен начинаться с хэштега (#).
// Во всех словах первая буква должна быть заглавной.
// Если окончательный результат длиннее 140 символов, он должен вернуть false.
// Если ввод или результат представляет собой пустую строку, он должен вернуть false.

// Test.assertEquals(generateHashtag(""), false, "Expected an empty string to return false")
// Test.assertEquals(generateHashtag(" ".repeat(200)), false, "Still an empty string")
// Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
// Test.assertEquals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
// Test.assertEquals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
// Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
// Test.assertEquals(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
// Test.assertEquals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
// Test.assertEquals(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
// Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long")

const generateHashtag = (str) => {
    const result = `#${str.split(' ').filter((value) => value).map((value) => `${value[0].toUpperCase()}${value.slice(1)}`).join('')}`
    if (result.length > 140 || result.length === 1) return false
    return result
}

console.log(generateHashtag('Do We have A Hashtag'))