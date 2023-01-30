//Ejercicico 4
let nombre = "Santiago"; 
let apellido = "Hincapie";
let estudiante = nombre + " " + apellido;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let contadorCadena = estudiante.length;
let primeraLetra = estudiante.slice(0,1);
let ultimaLetra = estudiante.slice(contadorCadena-1);
let eliminarEspacios = estudiante.replace(" ","");
let pertenece = estudiante.includes(nombre);