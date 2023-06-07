let calculator = {
    add : function(x, y) { return x + y},
    subtract : function( x, y ) { return x - y}
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//Exercise 5


const increaseByNameLength = function(name, money) { return money = money * name.toString().length }
const makeRegal = function(name) { return name = "His Royal Highness, " + name }

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength( name, money )
    name = makeRegal(name)

    console.log(`${name} has ${money}  gold coins`)
}

turnToKing("martin luther", 100) 
// should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
