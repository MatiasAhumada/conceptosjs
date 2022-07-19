//crear un arreglo vacio
let listaSupermercado = [];

//crear un arreglo con datos
let series = ["peaky blinders", 7, "stranger things", 4, "the boys", 3, "loky"];

let mostrarSeries = (titulo) => {
  document.write("<h3>"+titulo+"</h3>" );
  document.write(`<ul>`);
  for (let indice = 0; indice < series.length; indice++) {
    document.write(`<li>${series[indice]}</li>`);
  }
  document.write(`</ul>`);
};

//mostrar un arreglo
document.write(series);
//mostrar un elemento del arreglo
document.write("<br>" + series[0]);

//mostrar un arreglo dentro de una lista
//series.length devuelve la cantidad de elementos en el arreglo
mostrarSeries('Arreglo original');

//agregar un elemento nuevo al arreglo al final
series.push("Rick and Morty");
mostrarSeries('Agregamos un nuevo elemento al final del arreglo');

//agregar un elemento en una posicion particular del arreglo
series.splice(2, 0, "The witcher"); // (posicion del elemento, cantidad de elementos a borrar, item que vamos agregar)
mostrarSeries('Agregamos un nuevo elemento en una posicion particular');

//eliminar elementos
series.splice(4, 1); //(posicion del elemento, cantidad de elementos a borrar)
mostrarSeries('Eliminar un elemento de una posicion particular');

//eliminar varios elementos
// series.splice(2); borrar todos los elementos desde la posicion 2

//modificar elementos en un arreglo
series[1] = "Suits";
mostrarSeries('Modificar un elemento de una posicion particular');
