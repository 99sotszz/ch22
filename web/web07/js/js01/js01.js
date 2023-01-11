console.log("Sesion js01");

/* Son 7 datos primitivos de JavaScript
- string("Hola Mundo")
- number ( 1800.22)
    Los numeros se utilizan 64 bits paraalmacenarlo
    pero solo se usan 53 bits para representar el numero
- BigInt ( 1800n )
    Convertir dato numerico en BigInt 
    let Bigintvar = Bigint ( maxNumber);
    bigintvar + 1n ( la "n" lo convierte en bigint n) solo es para numeros enteros
- Boolean
    true y false
- Undefined ()
    un dato no se define el tipo, solo se declara
- Null
    Intencionalmente se elimina el tipo de dato
- Symbol




* Datos tipo Object:
- Object datos entre llaves
let myObject = {clave: "valor", datoBoolean: true,edad: 20};
myObject.edad me otorgara el valor de edad al igual que si hiciera
myObject["edad"]
- Array
    const myArray = [];
    otro ejemplo:  const myArray = [15, "un texto", true];

    modificar: myArray[0] = "esto es";
    myArray[2] = "muy chidoliro";

    CONCATENAR TEXTOS

    myArray.join(" ")


*Funciones


*/

let myObject = {clave: "valor", edad: 18, 5:5};
console.log( myObject.edad );
const propiedad = "edad";
console.log( myObject[propiedad] );
console.log( myObject["5"] );

//Conversiones de datos string a number:
/*
  parseInt
  parseFloat

  ejemplo:

  const numString ='1569'; da definido
  numString + 3; da 15693
  Number.parseInt(numString) + 3; da 1572 ****** este es el buen dato

  NaN === NaN da false eso significa que el nan no es igual a nada

*/

/*Conversiones de datos number a string:

(1025).toString( radix );
ejemplo:
let numero = 16 da indefinido
(numero).toString(); da "16"
(1000).toString(2);
"1111101000"
(1000).toString();
"1000"

3 + 2 = 5

typeof(3) === typeof(4.32); es true es el mismo tipo de dato

5 / 0; es infinito, un numero demasiado grand

3 / 0; NaN

3 bob = NaN

NaN es Number////////////