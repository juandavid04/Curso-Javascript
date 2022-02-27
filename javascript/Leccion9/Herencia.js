class Persona{

    static contadorObjetosPersona = 0;
    
    constructor(nombre, apellido){
        Persona.contadorObjetosPersona++;
        this._nombre   = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde el metodo Estatico');
    }

    static saludar2(p){
        console.log(p.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        //return this._nombre + ' ' + this._apellido + ' ' + this._departamento;
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

let persona1 = new Persona('Juan','Porras');
console.log(persona1);

let empleado1 = new Empleado('Juan','Porras','Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

//Static
Empleado.saludar();
Persona.saludar2(empleado1);

//variables estaticas
console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);
