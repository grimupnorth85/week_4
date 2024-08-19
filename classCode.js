console.log(1)
console.log(2)

setTimeout{( =>
    console.log("callback function occurred")
), 5000}

console.log(3)
console.log(4)