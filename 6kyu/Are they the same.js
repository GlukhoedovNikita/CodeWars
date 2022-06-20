// Учитывая два массива a и b, напишите функцию comp(a, b) (или compsame(a, b)), которая проверяет, имеют ли два массива "одинаковые" элементы с одинаковыми кратностями (кратность элемента - это количество раз, когда он появляется). "То же самое" здесь означает, что элементы в b являются элементами в квадрате, независимо от порядка.

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

const comp = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false
    if (arr1.length !== arr2.length) return false

    const newArray1 = arr1.sort((value1, value2) => value1 - value2)
    const newArray2 = arr2.map((value) => Math.sqrt(value)).sort((value1, value2) => value1 - value2)
    for (let i = 0; i < newArray1.length; i++) {
        if (newArray1[i] !== newArray2[i]) return false
    }
    return true
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], 
                 [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))


// Прикольное решение использовать стоку чтобы сравнить два массива
function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}