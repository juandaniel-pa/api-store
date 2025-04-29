const myName = 'Juan';
const myAge = 27;
const suma = (a: number, b: number) => {
    return a + b;
}
suma(1, 2);
//las clases son atributos tambien
class Persona { 
   //si no asigno el public por defecto es public
   //con el constructor puedo crear una instancia de la clase persona
    constructor(private name: string, private age: number) {}

    getSummary() {
        return `My name is ${this.name} and I'm ${this.age} years old`;
    }
}

const nicolas = new Persona('Nicolas', 12); //instancia de la clase persona donde me pide el nombre y el age
nicolas.getSummary(); //llamo al metodo getSummary de la clase persona