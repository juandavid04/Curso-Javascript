class Persona{
    
    constructor(nombre, apellido){
        this._nombre   = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan','Porras');
console.log(persona1);

let persona2 = new Persona('Carlos','Perez');
console.log(persona2);

console.log(persona2.nombre);
persona2.nombre = 'Jose';
console.log(persona2.nombre);