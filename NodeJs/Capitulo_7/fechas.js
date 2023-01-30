//A
const fechaHoy = new Date();
//B
const fechaNacimiento =new Date(2001,5,16);
//C
const compararFechas = fechaHoy > fechaNacimiento;
// D
const diaNacimiento = fechaNacimiento.getDate();
// E
const mesNacimiento = fechaNacimiento.getMonth() + 1;
// F
const anioNacimiento = fechaNacimiento.getFullYear();
