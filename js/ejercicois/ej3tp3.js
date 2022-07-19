// 3- Escribir un script que simule el lanzamiento de dos dados math.ramdom.
//  Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
//  Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let sumas = [];
let pruebaDado1 = [];
let pruebaDado2 = [];
for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let suma = dado1 + dado2;
  sumas.push(suma);
  pruebaDado1.push(dado1);
  pruebaDado2.push(dado2);
}

document.write("<br> resultado de dado 1 " + pruebaDado1);
document.write("<br> resultado de dado 2 " + pruebaDado2);
document.write("<br>resultado de la suma " + sumas);

document.write(`<table> 
<tbody>
<tr> 
<td>Resultado</td>
<td>Frecuencia</td>
</tr>`);
for (let resultado = 2; resultado <= 12; resultado++) {
  for (let posicion = 0; posicion < sumas.length; posicion++) {
    if (resultado === sumas[posicion]) {
      //sumar las apariciones
    }
  }
  document.write(`
<tr>
<td>${resultado}</td>
<td>x</td>
</tr>`);
}

document.write(`
</tbody>
</table>`);
