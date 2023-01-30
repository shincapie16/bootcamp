//Arreglos
//push,meter arreglos al final. unshift al principio
//pop y shift sacar
//splice: eliminar,modificar o añadir valores
//array.splice(2,2) desde la pos 2 elimina 2
//añadir con splice (3,0,"gola") en la pos 3 meteun gola. con modificar se le pasa es (3,1,"gola")
//unir listas => .concat(lista
// ...lista => factor de propagacion lista3=[...lista1,...lista2]
//slice no modifica el arreglo original
let array = [1,2,3,4,5];

array.forEach(valor =>{
    console.log(valor)
})

let objetos=[{nombre: "jesus",edad:23},{nombre: "perro",edad:21},{nombre: "hay",edad:32},];
//to find
const {edad} =objetos.find(i=> i.nombre =="hay"); //devuelve directamente la propiedad
console.log(edad)

//.map(), filter,reduce
//map, si regresa los valores que se le pide

const val = array.map((array,i)=> (i+array))
//devuelve el contenido mas su posicion
console.log(val)

const personasmayores = objetos.filter(i=>i.edad>15);
//devuelve los que sean mayores que 15
console.log(personasmayores)

//reduce
red = val.reduce((acu,curr)=> acu+=curr);
//hace sumas
console.log(red)

// orden= objetos.sort((a,b)=>{
//     if (a.edad<b.edad){
//         return -1;
//     }
//     else if (a.edad>b.edad){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// });  //modifica el arreglo

ordenob= objetos.sort((a,b) => a.edad - b.edad)     //si es negativa signifa que a es mayor que b, si es positivo lo contrario
console.log(ordenob)

//every() comparar listas retorna un booleano
resultado= array.every(valor => valor >0);
console.log(resultado)

let array1 =[1,2,3,4];
let array2 =[1,2,3,4];

const compararArreglos = (array_1,array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor,i)=>valor === array_2[i])
    return res;
}

console.log(compararArreglos(array1,array2))

//.some() compara si un elemento delarreglo cumple la condicion

const verobj = objetos.some(valor=>valor.edad ==21);
console.log(verobj)

//from convierte una cadena en un arreglo
