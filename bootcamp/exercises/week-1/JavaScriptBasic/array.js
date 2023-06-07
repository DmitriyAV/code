const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1, 2)
numbers.splice(1, 1)
numbers.splice(3, 0, 1)
numbers.splice(numbers.length -4, 4)
numbers.splice(0, 0, 0)
//numbers.unshift(1)

console.log(numbers)