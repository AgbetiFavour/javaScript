# Explain HOF with example

HOF mean high order function, It's can be define as a function that can accept and/ or return another function. 

    function multiplyNumber(factor){
    return product => product * factor
    }

    const doMaths = multiplyNumber(4);

    doMaths(4);
<!-- the function return 16 as argument -->

# Explain the map and reduce methods with example

*  The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array. 

        const numbers = [1, 2, 3, 4];
        const doubled = numbers.map(item => item * 2);
        console.log(doubled);
    <!-- The function return [2, 4, 6, 8] as the argument  -->

*  The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

        const numbers = [1, 2, 3, 4];
        const sum = numbers.reduce(function (result, item) {
        return result + item;
        }, 0);
        console.log(sum);
    <!-- The function return 10 as the argument -->