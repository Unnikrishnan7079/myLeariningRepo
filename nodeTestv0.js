let myArray =
    [{ user: "Unni", age: 27 },
    { user: "Unni", age: 23 },
    { user: "Unnikrishnan", age: 25 },
    { user: "Unni", age: 27 }]

myArray = myArray.filter((item)=>item.age > 23)
console.log("Myarray is ", myArray)