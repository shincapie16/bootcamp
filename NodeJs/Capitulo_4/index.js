// let plantilla = `
// <html>
// <h1> Titulo</h1>
// <p>Este es un parrafo </p>
// </html>
// `;
// console.log (plantilla);

//Metodos usados
//Longitd string

let str = `Soy una cadema`;
console.log(str.length)

//Obtener partes slice() substring() substr()

let slice_str=str.slice(0,10)
console.log(slice_str)

let cadena = "Soy una cadena";

cadena.replace("Cadena","Cambio"); //reemplaza solo la primera
console.log(cadena.replace("cadena","Cambio"))

//para reemplazar todas las palaras usando /palabra/g

//Mas expresiones regulares
console.log(cadena.match(/una/g)) //veces que se encuentra la palabra

//includes vwrifica si la palabra está en la cadena