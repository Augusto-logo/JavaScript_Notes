const factorial = (number) => {
    
    if (number == 1) { //BASE CASE
        return 1
    }
    
    return number * factorial(number - 1) //recursive case
}

const resultado = factorial(5)
console.log(resultado)
