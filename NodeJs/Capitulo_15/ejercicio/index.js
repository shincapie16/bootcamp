const nombre = "Santiago";
const apellido = "Hincapie";
const objeto ={
    nombre: nombre,
    apellido: apellido
}
sessionStorage.setItem("datos",JSON.stringify(objeto))
// localStorage.setItem("datoslocal",(objeto))
localStorage.setItem("datoslocales",JSON.stringify(objeto))
document.cookie = `datoscookie=${JSON.stringify(objeto)};expires=`+new Date(2023,1,5,11,55).toUTCString()