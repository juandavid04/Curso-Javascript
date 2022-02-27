//Hosting
console.log(miFuncion(3,4));

function miFuncion(a,b){
    console.log(a+b);
    return a + b;
}

console.log(miFuncion(4,6));

//Funciones de Tipo expresión
let x = function(a,b){
    console.log(a-b);
    return a - b;
};

let resultado = x(5,3);
console.log(resultado);

//Funciones Self Invoking (se llaman a si mismas)
(function(a,b){
    console.log('Ejecutando la función');
    console.log('Suma: ' + (a+b));
})(3,4);

//Funciones como objetos
function miFuncion2(a,b,c){
    console.log(arguments.length)
}
miFuncion2(1,2,3);
var miFuncionTexto = miFuncion2.toString()
console.log(miFuncionTexto);

//Funciones Flecha
const sumarFunTipoFlecha = (a,b) => a + b;
resultado = sumarFunTipoFlecha(5,6);
console.log(resultado);
 
//Paso por valor
let a = 10;

function cambiarValor(x){
    x = 20;
}

cambiarValor(a); //10
console.log(a);

//Paso por Referencia

const persona = {
    nombre : 'Juan',
    apellido : 'Porras'
};

function cambiarValorObjeto(p1){
    p1.nombre = 'David';
}

cambiarValorObjeto( persona );

console.log( persona );