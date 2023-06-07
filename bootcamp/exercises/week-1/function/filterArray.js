//Exercise 2

const isEven = function ( num ) {

    return !(num % 2)
  
}


const arrNum = [1, 2, 3, 4, 5]

const filter = function ( arr ) {
    for ( let num of arr ) {
            if ( !isEven(num) ) {
                printNum(num)
            }
    }
}

const printNum = function(num) {
    console.log( num )
}

filter(arrNum)