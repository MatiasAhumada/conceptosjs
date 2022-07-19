/* Estructura if (SI ocurre algo hago tal cosa)

if(condicion logica){
    todo el codigo que quiero realizar si la respuesta es verdadera o true o si se cumple la condicion logica
}else{
    aqui va todo el codigo que quiero hacer si no se cumple la condicion
}

*/

let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

console.log(numero1);
console.log(numero2);

if (numero1 > numero2) {
  document.write("El primer numero es el mayor: " + numero1);
} else if (numero1 === numero2) {
  document.write("Ambos numeros son iguales: " + numero1);
} else {
  document.write("El segundo numero es el mayor: " + numero2);
}
