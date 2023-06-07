//Exercise 3 

const numExistsInArr = function(arr, num) {
    for ( let n of arr) {

        if ( n == num ) {
            return true
        }
    } 
    return false
 }

 console.log( numExistsInArr([1, 2, 3], 5) )
