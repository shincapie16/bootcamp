const array = [1,2,3,4,5];
const miSet = new Set(array); //Valores unicos
console.log(miSet)
//.add() agregar valores, .delete() eliminar un valor, .clear() elimina todo;
//.has() si un elemento se incluye. size es el lentgh
//[...miSet] = crear un array a partir de un set 
const obj = {
    nombre: "Santi",
    edad: 21,
    esDesarrollador: true,
    pelicula_favorita: "Los Increibles"
}

console.log(obj.edad);

//Para duplicar objetos se debe hacer con factor de propagacion
const obj3 = {...obj}
obj3.edad=23;
console.log(obj.edad);
console.log(obj3.edad);

//getTime() pasar las fechas a milisegundos para luego compararlas