//A
class Estudiante{
    constructor(nombre){
        this.nombre=nombre;     //B
        this.lista=["Javascript","HTML","CSS"];     //C
    }
    getDatos(){
        return {nombre:this.nombre,lista:this.lista}        //D
    }
}

const estudiante1 = new Estudiante("Santiago");

datos=estudiante1.getDatos();
console.log(datos);