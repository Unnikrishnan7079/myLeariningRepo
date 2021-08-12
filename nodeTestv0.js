let myArray =
    [{ user: "Unni", age: 27 },
    { user: "Unni", age: 23 },
    { user: "Unnikrishnan", age: 25 },
    { user: "Unni", age: 27 }]

myArray = myArray.filter((item)=>item.age > 23)
console.log("Myarray is ", myArray)

let newArray = myArray.reduce((acc,curr)=> ({age: acc.age + curr.age}))
console.log("MyaArray is ",newArray)

var arr = [{x:1},{x:2},{x:4}];
let newArr = arr.reduce((a, b) => ({x: a.x + b.x}));
console.log("New is ",newArr)