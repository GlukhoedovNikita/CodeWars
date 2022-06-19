// Пит любит печь торты. У него есть рецепты и ингредиенты. К сожалению, он не силен в математике. Поможешь ему узнать, сколько тортов он сможет испечь, учитывая его рецепты?

// Напишите функциюcakes(), которая принимает рецепт (объект) и доступные ингредиенты (тоже объект) и возвращает максимальное количество тортов, которые Пит может испечь (целое число). Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара — это просто 1 или 200). Ингредиенты, отсутствующие в объектах, можно считать равными 0.

// let recipe = {flour: 500, sugar: 200, eggs: 1};
// let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// assert.equal(cakes(recipe, available), 2);

// recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// available = {sugar: 500, flour: 2000, milk: 2000};
// assert.equal(cakes(recipe, available), 0);

const cakes = (recipe, available) => {
    const recipeMap = new Map(Object.entries(recipe))
    const availableMap = new Map(Object.entries(available))
    
    let result = 0

    for (key of recipeMap.keys()) {
        if (!availableMap.has(key)) return 0
    }

    while (true) {
        for (key of recipeMap.keys()) {
            if (availableMap.get(key) - recipeMap.get(key) < 0) return result
            availableMap.set(key, availableMap.get(key) - recipeMap.get(key))
        }
        result++
    }
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))