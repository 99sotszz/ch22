console.log("Sesion JS02")


/* 
Funciones declaradas / funciones definidas
(function declaration / function statement)

Una caracteristica de las funciones declaradas
 es que tiene hoisting (elevacion)


*/
console.log("El resultado de 5 * 10 es = " + multiplica(5, 10) );

function multiplica(a, b){
    return a * b;
}


/*
Funciones expresadas

Las funciones expresadas (function expression) son funciones  que son declaradas dentro de al asignacion de una variable

Estas funciones pueden ser anonimas (no tienen nombre ).
Las funciones expresadas no tienen hoisting.


*/

/**
 * suma dos valores
 * @param {number} a primer operador apr asumar
 * @param {number} b segunndo operador para umar
 * @returns  resultado de a + b;
 */
const suma = function ( a , b ) {
    const result = a + b;
    return result;  
};

console.log("La sumatoria de 4 + 6 es igual a: " + suma(4, 6));

*/

/*   
Funciones autoinvocadas

Las funciones autoinvocadas ( selft-invoking functions)
son funciones que se  ejecutan en su definicion.
pueden ser anónimas.

*/

( function saludo(){
    console.log("Hola, me estoy autoinvocando")
} )();


/*   
Funciones flecha

Una funcion flecha (arrow functions) son similares a las funciones expresadas, pero no requiere la palabra function, Ademas issolo tiene una isntruccion y es el retorno, no requiere la instruccion return y las llaves {}.
las funciones flechas no tienen hoisting

*/

const restaExpresada = function(a, b){
    return a - b;
}

const resta = (a, b) =>  a - b;
console.log("La resta de 20 - 2 es =" + resta(20, 2));
//correcto 2 parametros

const exponente = ( a , b ) => {
    const result = a **b;
    return result;
}
console.log("El numero 4 a la 3 = " + exponente(4,3));
//correcto 2 parametros

const exponenteAlCuadrado = a  => a ** 2;
console.log("El numero 4 al cuadrado = " + exponenteAlCuadrado(4) );
//correcto un parametro 

const imprimeSaludo = () => console.log("Holi crayoli");
imprimeSaludo();


/*
Funciones con parametros inicializados.


*/
function divide( a=1 , b=1){
    return a/b;
}

console.log("la division de 3 entre 1 es igual a" + divide() );

/*
Rest Parameter
El parametro rest nos permite representar una serie de valores
indefinidos en los argumentos como un array

El aprametro rest siempre debe ir al final de todos los parametros
*/

function sumatoriaIndefinida(a, b, ...restoDatos){
    let sumatoria = a +b;
    for (let i = 0; i < restoDatos.length; i++) {
        sumatoria +=  restoDatos[i]; // sunatoria = sumatoria + restoDatos[i];   
    }
    return sumatoria;
}
console.log("sumar varios numeros = " +sumatoriaIndefinida(2,3,5,10,11) );


/*
Funcion recursiva
funcion que se llama a si misma
*/

//mfactorial de 0 = 1
//facotiral de 3 = 3 * 2 * 1;
//factorial de 5 = 5*4*3*2*1;

function factoriaConCicloFor( a ){
let total = 1; 
	for (i=1; i<=a; i++) {
		total *= i; 
	}
	return total;
}

function factorialConRecursion( a ){
    if(a < 1) return 1;
    return a * factorialConRecursion( a -1 )
}


console.log("Factoria de 3 = " + factoriaConCicloFor(3) ); //6
console.log("Factoria de 5 = " + factoriaConCicloFor(5) ); //120
console.log("Factoria de 3 = " + factoriaConRecursion(3) ); //6
console.log("Factoria de 5 = " + factoriaConRecursion(5) ); //120