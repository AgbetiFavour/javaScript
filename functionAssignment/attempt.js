function number(forty,four,goat) {
    if (goat == "sum") {
        return (forty + four);
    } else if (goat == "multiply") {
        return (forty * four)
    } else if (goat == "divide") {
        return (forty / four)
    } else {
        return (forty - four)
    } 
}

console.log(number(100,10,"sum"));
console.log(number(100,10,"multiply"));
console.log(number(100,10,"divide"));
console.log(number(100,10,"subtract"));
