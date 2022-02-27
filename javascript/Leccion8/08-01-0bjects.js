let x = 10;
console.log(x.length);

let persona = {
    nombre   : 'Juan',
    apellido : 'Porras',
    email    : 'juan@gmail.com',
    edad     : 22,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona.nombre);
console.log(persona.edad);  
console.log(persona.nombreCompleto());
console.log(persona);

let persona2 = new Object();
persona2.nombre = 'David';
persona2.direccion = 'Cra 123';
persona2.tel = '1234567894';

console.log(persona2.tel);
console.log(persona2);

//Acceder a los atributos
console.log(persona2.apellido);
console.log(persona2['nombre']);

for( i in persona2){
    console.log(i);
    console.log(persona2[i]);
}

//Agragar una propiedad
persona.tel = '134567897';
console.log(persona2);

delete persona2.tel
console.log(persona2);


//Formas de imprimir un objeto:

//En un navegador va a imprimir simplemente Object

//Concatenar cada valor de cada propiedad
//for in
//Object.values
let personaArray = Object.values(persona);
console.log(personaArray);
//JSON.stingify
let personaString = JSON.stringify(persona);
console.log(personaString);


//Metodos get y set en objetos
let persona3 = {
    nombre  : 'Juan',
    apellido: 'Porras',
    tel     : '1345677809',
    idioma  : 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona3.nombreCompleto);
console.log(persona3.lang);
persona3.lang = 'en';
console.log(persona3.lang);
console.log(persona3.idioma);


//Constructors
//Función constructor de tipo Persona
function Persona(nombre = 'J', apellido, email){
    this.nombre   = nombre;
    this.apellido = apellido;
    this.email    = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    };
}

let padre = new Persona('Juan','Porras','juan@gmail.com');
console.log(padre);
console.log(padre.nombreCompleto())

//Uso de Call
let persona4 = {
    nombre   : 'Carlos',
    apellido : 'Vargas',
    nombreCompleto : function(titulo,tel){
        return titulo + ':' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona5 = {
    nombre   : 'Jose',
    apellido : 'Jimenez'
}

console.log(persona4.nombreCompleto());
console.log(persona4.nombreCompleto('Ingeniero','1234567890'));

console.log(persona4.nombreCompleto.call(persona5,'Licenciado','0987654321'));

//Uso de Apply
let arreglo = ['Geologo','3749474947']
console.log(persona4.nombreCompleto.apply(persona5,arreglo));
