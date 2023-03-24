// Spread Operator

arr = [1  , 2  , 4 , 10 ,7]

function avg(a , b , c , d) {
    return a+b+c+d/2
}

// console.log(avg(...arr))

// Spread Operator in a new array

arr1 = [ 7 , 9 , ...arr , 110 , 17]
// console.log(arr1)

// Spread Operator in a object

 let obj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
}

let a  = { ...obj , age : 20 , address : { ...obj.address, city: 'USA' }};
// console.log(a)

let a1 = obj.address.city;
// console.log(a1)

// Destructuring the obj

let obj2 = {
    name1: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
}

let { name1 ,  age , address} = obj2;
// console.log(name1, age, address)

// Destructuring the array

const myArray = [1, 2, 3, 4, 5];
const [...rest] = myArray;
console.log([...rest]); // [3, 4, 5]
