/* Bucles

while(condicion logica){
    todas las lineas de codigo que quiero que repita el programa
    cambiar la condicion logica
}

*/

// let cantidad = 1;
// let opcion = 1;

// while (cantidad <= 20) {
//   document.write(
//     "<br>preparar mate y entregarlo al siguiente compañero, mate cebado n: " +
//       cantidad
//   );
//   console.log((opcion += opcion));
//   cantidad++; //cantidad= cantidad+1;  //cantidad += cantidad;
// }

/* Bucle Do-While  hacer ... mientras

do{
  todo el codigo que quiero ejecutar x cantidad de veces
  cambiar la condicion logica
}while(condicion logica)

*/

// let mate = 21;

// do{
//   document.write("<br>preparar mate y entregarlo al siguiente compañero, mate cebado n: " + mate);
//   mate++;
// }while(mate <= 20)


/* Bucle for 

for(inicializar una variable ; condicion logica ; incrementar o decrementar la variable declara al inicio){
  todo el codigo a ejecutar repetidas veces
}

*/

for(let mate = 1; mate <= 20; mate= mate+1){
  document.write("<br>preparar mate y entregarlo al siguiente compañero, mate cebado n: " + mate);
};

