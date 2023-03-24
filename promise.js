// let fs = require("fs")

// fs.readFile('file.txt' , "utf-8" , (err , obj) => {
//     console.log(obj)
// })

let fs = require("fs/promises")
let a = fs.readFile('file.txt' , "utf-8");

a.then((data) => {
console.log(data)
})