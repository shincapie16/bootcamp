//clases
class Persona{
    nombre;
    edad;
    //  # atributo privado, solo se puede acceder desde adentro de la clase #this.nombre
    // atributo protegido _this.nombre acceder dentro de la clase y sus herencias
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludo(){
        console.log("Holi")
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(newnombre){
        this.nombre=newnombre
    }
}
//herencia
class Desarrollador extends Persona{
    constructor(lenguaje) {
        super(nombre,edad)
        this.lenguaje=lenguaje

    }
    saludo(){       //sobreescribir
        super.saludo()
        console.log("hola")
    }


}
//polimorfismo
const persona1 = new Persona("Santi",21);
console.log(persona1.edad)
nombre=persona1.getNombre()
console.log(nombre)
persona1.setNombre("hola")
console.log(persona1.nombre)

// getter obbtener (de forma controlada)atributos privados y protegidos. setter cambia
