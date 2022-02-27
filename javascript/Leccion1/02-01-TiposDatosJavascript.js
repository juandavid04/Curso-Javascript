/**
 * Ejemplos de tipo de datos en javascript
 */

//Tipo de dato String
var nombre = "Juan";
console.log(nombre,typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero, typeof numero);

//Tipo de dato object
var objeto = {
    nombre : "David",
    apellido : "Porras",
    telefono : 1234567892
}

console.log(objeto);
console.log(typeof objeto);

//Tipo de dato boolean
var bandera = true;
console.log(bandera, typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);


var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo de dato Clase
class Persona{
    constructor(nombre, apellido){
        this.nombre   = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Tipo de dato Undefined
var x;
console.log(x);
console.log(typeof x);
x = undefined;

//null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y)

var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z)
