function ordenarTresNumeros(numberOne, numberTwo, numberTree) {
    let a = Math.max(numberOne, numberTwo, numberTree)
    let c = Math.min(numberOne, numberTwo, numberTree)
    let b = (numberOne + numberTwo + numberTree)-a-c 
    console.log(a,b,c);
    console.log(c,b,a);
    if (a==b&&a==c) {
        return console.log("todos los numeros son iguales");
    } else if (a==b||a==c||b==c) {
        return console.log("dos numeros son iguales");
    }
}

let numberOne = parseInt(prompt("numero 1"))
let numberTwo = parseInt(prompt("numero 2"))
let numberTree = parseInt(prompt("numero 3"))

ordenarTresNumeros(numberOne, numberTwo, numberTree)




