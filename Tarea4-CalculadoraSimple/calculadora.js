//Solucion a error prompt is not defined
const prompt = require("prompt-sync")();


//variables
var n1, n2, n3, resultado;
n1 = parseInt(prompt("Introduce el primer numero: "));
n2 = parseInt(prompt("Introduce el segundo numero: "));
n3 = prompt("Introduce el signo de la operacion deseada: ")

switch(n3){
    case "+":
        if( (typeof(n1) == 'number') && (typeof(n2) == 'number') ) {
            resultado = n1 + n2;
            }
        
        else{
            console.log("solo numeros, anda a estudiar pa");
            }
    break;
    
    case "-":
        if( (typeof(n1) == 'number') && (typeof(n2) == 'number') ) {
            resultado = n1 - n2;
            }
        
        else{
                console.log("solo numeros, anda a estudiar pa");
            }
    break;

    case '*':
        if( (typeof(n1) == 'number') && (typeof(n2) == 'number') ) {
            resultado = n1 * n2;
            }
        
        else{
                console.log("solo numeros, anda a estudiar pa");
            }
    break;

    case "/":
        if( (typeof(n1) == 'number') && (typeof(n2) == 'number') && n2 > 0) {
            resultado = n1 / n2;
            }
        
        else{
            console.log("No se puede dividir por 0...")
        }
    }

console.log(resultado)