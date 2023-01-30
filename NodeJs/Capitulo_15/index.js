// localStorage.setItem('nombre','Santi')

console.log(localStorage.getItem("nombre"))
localStorage.setItem("persona",JSON.stringify({nombre:"santi",edad:21}))//lo convierte a string
console.log(JSON.parse(localStorage.getItem("persona")))
//parse lo convierte a objeto desde un string

localStorage.removeItem("nombre")
document.cookie = "nombrecookie=santicock;expires="+ new Date(2023,0,6).toUTCString()
