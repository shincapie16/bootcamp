//A
const datosPersonales={
    nombre: "Santiago",
    apellido: "Hincapie",
    edad: 21,
    altura: 172,
    esDesarrollador: true
}
//B
const miEdad = "edad";

console.log(datosPersonales[miEdad]);

//C
const datosTodos = [datosPersonales,{nombre: "Valentina",
                    apellido: "Varela",
                    edad: 20,
                    altura: 170,
                    esDesarrollador: true},{nombre: "Ana",
                    apellido: "Barrera",
                    edad: 26,
                    altura: 165,
                    esDesarrollador: false}];
//D
datosTodos.sort((a,b)=>a.edad -b.edad);