// Ejercicio 6
//A
let listaCompra = ["Arroz","Huevos","Lentejas","Mantequilla","Mayonesa"];
//B
listaCompra.push("Aceite de Girasol");
//C
listaCompra.pop();
//D
let listaPeliculas = [
    {Titulo: "Los Increibles",
    Director: "Brad Bird",
    Año: 2004},
    {Titulo: "Cars",
    Director: "John Lasster",
    Año: 2006},
    {Titulo: "Kung Fu Panda",
    Director: "Jennifer Yuh Nelson",
    Año: 2016}];

//E
let peliculas2010 = listaPeliculas.filter(valor=>valor.Año>2010);
// F
let directorPelicula = listaPeliculas.map(director => director.Director);
// G
let tituloPelicula = listaPeliculas.map(titulo => titulo.Titulo);
// H
let tituloDirectores = directorPelicula.concat(tituloPelicula);
// I
let factorPropagacion = [...directorPelicula,...tituloPelicula];