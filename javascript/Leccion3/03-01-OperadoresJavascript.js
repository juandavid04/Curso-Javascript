let a = 3, b = 2;
let z = a + b;
console.log('Resultado de la suma: ' + z);

z = a - b;
console.log('Resultado de la resta: ' + z);

z = a * b;
console.log('Resultado de la multiplicación: ' + z);

z = a / b;
console.log('Resultado de la división: ' + z);

z = a % b;
console.log('Resultado de la operación modulo: ' + z);

z = a ** b;
console.log('Resultado de la potenciación: ' + z);

//Incremento
//Pre-incremento (l operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-decremento
z = --a;
console.log(a);
console.log(z);

//Post-decremento
z = b--;
console.log(b);
console.log(z);

//Operadores de comparación
a = 3;
b = 2;
let c = "3";

let d = a == c; //revisar el valor sin importar el tipo
console.log(d);

d = a === c;    //revisa los valores pero tambien los tipos
console.log(d);

d = a != c;     //Operador distinto
console.log(d);

d = a !== c;    //revisa los valores pero tambien los tipos
console.log(d);

//Ejercicio par o impar
let num = 10;
if(num % 2 == 0){
    console.log("Es un número par");
}
else{
    console.log("Es un número impar");
}