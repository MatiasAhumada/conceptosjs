// objetos con notacion literal

let motorola = {
  //propiedades -> clave: valor
  modelo: "G31",
  SO: "Android",
  resistencia: false,
  pantalla: 9,
  // color: ['celeste', 'negro', 'plateado'],
  // conectividad: {
  //     bluetooth: true,
  //     red: '4G'
  // }

  // metodos son similares a funciones

  navegar: () => document.write("<p>Se abrio el navegador...</p>"),
  apagar: () => document.write("<p>el dispositivo se apago...</p>"),
}
//mostrar un objeto
console.log(motorola)

//document.write(motorona) asi no se usa

document.write(`<p>Modelo del celular: ${motorola.modelo}</p>`)
document.write(`<p>SO del celular: ${motorola['SO']}</p>`)

//modifucar una propiedad de un objeto

motorola.pantalla = 10;

document.write(`<p>pantalla modificada: ${motorola.pantalla}</p>`)

//borrar una propedad del objeto
delete motorola.resistencia;

console.log(motorola);

// agg una nueva prop a un ogj existente
motorola.precio = 90000;
document.write(`<p>pantalla modificada: $${motorola.precio}</p>`)
console.log(motorola);

//usar un metodo de un obj
motorola.navegar();