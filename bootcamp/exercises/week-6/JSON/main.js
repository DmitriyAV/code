let recipe = require('./exercise1.json')

const addFieldInJSON = function () {
    recipe.healthy = true
    recipe.calories = 250
}

const addFieldInArrayAtJSON = function () {
    let str = "Cut potatoes into half inch thick slices"
    recipe.directions.push(str - 1)
}

addFieldInJSON()
addFieldInArrayAtJSON()

console.log(recipe.ingredients
    .filter(i => i.name === "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"


const Animal = function () {
    let animals = {}

    const addAnAnimal = function (name, weightKg, placeOfLiving, endangered, feeding, prey, flavourScore) {
        animals.name = name
        animals.weigh = weightKg
        animals.placeliving = placeOfLiving
        animals.endangered = endangered
        animals.flavourScore = flavourScore
        for (let feedingItem of feeding) {
            animals.food = feedingItem
        }
        animals.prey = prey
        animals.flavourScore = flavourScore
    }

    const animalName = function () {
        return [...animals.name]
    }

    const animalsWeighKg = function () {
        return [...animals.weigh]
    }

    const animalsPlaceOfLiving = function () {
        return [...animals.placeliving]
    }

    const endangered = function () {
        return [...animals.endangered]
    }

    const animalsFeedingGoods = function () {
        return [...animals.food]
    }

    const prey = function () {
        return [...animals.prey]
    }

    const delicious = function () {
        return [...animals.flavourScore]
    }

    const getAnimals = function () {
        return animals
    }

    return {
        addAnAnimal,
        animalName,
        animalsWeighKg,
        animalsPlaceOfLiving,
        endangered,
        animalsFeedingGoods,
        prey,
        delicious,
        getAnimals
    }

}

const species = Animal()

species.addAnAnimal("Cattle", 650, "Livestock", false, ["silage", "grass", 'leaves'],
   "predators", 5)

species.addAnAnimal("Elephant", 7000 , "grasslands", true, ["grasses", "leaves", "bark", "fruits", "roots"],
    "predators", 0)

species.addAnAnimal("Wolf", 55, "forests", false, ["meat"],
    "bears", 0)

species.addAnAnimal("Squirrel", 1, "forests", false, ["grasses", "leaves", "bark", "fruits", "roots", "nuts"],
    "predators", 3)


console.table(species.getAnimals())
