//Exrecise 1

// const person = {
//   hungry: true,

//   feed: function () {
//     if (this.hungry) {
//         alert('"Im no longer hungry!"')
//         this.hungry = false;

//     }
//   }
// }

// person.feed() //should alert "I'm no longer hungry"

//Exrecise 2

// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };

//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };

//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);


//Excercise 3

// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };

//   const airplane = {
//     fuel : 0,
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };

//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());

//Exercise 4


const tipJar = {
    coinCount: 20,
    tip: function () {
        this.coinCount += 1;
    },
    stealCoins: function (num) {
        this.coinCount -= num;
    }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//Exercise 5

const revealSecret = function () {
    return this.secret;
};

const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
};

const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
};

const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

//Exercise 6


const coffeeShop = {
    money: 1000,
    beans: 40,
    priceOfBeans: 10,

    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
        americano: {beanRequirement: 5, price: 5},
        doubleShot: {beanRequirement: 15, price: 5},
        frenchPress: {beanRequirement: 12, price: 5}
    },

    checkOnZero: function (num) {
        let sum = coffeeShop.beans - num
        if (sum <= 0) {
            alert('Sorry, we’re all out of beans!')
        } else return false;
    },

    buyBeans: function (numBeans) {
        let price = numBeans * this.priceOfBeans
        if (price < this.money) {
            console.log(`${this.money} isn't enough for bought!`)

        } else {
            this.beans += numBeans
            this.money -= price
            console.log(`We bought ${numBeans} quality of beans!`)
        }
    },

    makeDrink: function (drinkType) {

        if (!(drinkType in this.drinkRequirements)) {
            alert("Sorry, we don’t make ")

        } else {
            this.beans -= this.drinkRequirements[drinkType]
            console.log(`There is your order: ${drinkType}`)
        }
    },

    buyDrink: function (drinkType) {
        if (!this.checkOnZero(this.drinkRequirements[drinkType])) {
            this.makeDrink(drinkType)
        } else {
            this.buyBeans(this.drinkRequirements[drinkType.beans] * 2)
        }
    },

    order: function (money, drinkType) {
        let order = this.drinkRequirements[drinkType.price]
        if (money < order) {
            console.log("There is not enough money!")
        } else if (money > order) {
            let cheange = money - order
            let buying = order - money
            this.money += buying
            console.log(`There is your change: ${cheange}`)
            this.buyDrink(drinkType)
        }
    }
}


coffeeShop.order(10, "latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"