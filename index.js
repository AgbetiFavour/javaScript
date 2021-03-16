function digit(ten,two,yellow) {
    if (yellow == "multiply"){
     return (ten * two);
     
     } else if (yellow == "divide") {

         return (ten / two);

     } else if (yellow == "sum") {

         return (ten + two);
     }


    
}
console.log(digit(100, 50,"multiply"));
console.log(digit(100, 50,"divide"));
console.log(digit(100, 50,"sum"));


