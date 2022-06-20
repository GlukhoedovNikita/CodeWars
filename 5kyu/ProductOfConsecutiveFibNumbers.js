// Числа Фибоначчи - это числа в следующей целочисленной последовательности (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// такие как

// F(n) = F(n-1) + F(n-2) при F(0) = 0 и F(1) = 1.

// Учитывая число, скажем, prod (для продукта), мы ищем два числа Фибоначчи F (n) и F(n+1), проверяя

// F(n) * F(n+1) = произв.

// Ваша функция productFib принимает целое число (prod) и возвращает массив:

// [F(n), F(n+1), true] или {F(n), F(n+1), 1} или (F(n), F(n+1), True)
// в зависимости от языка, если F(n) * F(n+1) = prod.

// Если вы не найдете два последовательных F(n), проверяющих F(n) * F(n+1) = prod, вы вернетесь

// [F(n), F(n+1), false] или {F(n), F(n+1), 0} или (F(n), F(n+1), False)
// F(n) является наименьшим, таким как F(n) * F(n+1) > prod.

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

const generationFib = (a, b, number) => {
    if (number === a * b) return [b, a, true]
    if (number < a * b) return [b, a, false]
    return generationFib(a + b, a, number)
}

const productFib = (number) => {
    return generationFib(0, 1, number)
}

console.log(productFib(800))