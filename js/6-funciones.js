//funcion sin parametros
function saludar(){
    //todo el codigo que quiero que tenga esta funcion
    document.write('<p>Hola mundo</p>')
};

//funcion con parametro
function saludoNuevo(nombre, apellido){
    document.write(`<p>Hola mi nombre es ${nombre}, mi apellido es ${apellido}</p>`)
}


//funciones que retornan un valor
// function convertirDolaresAPesos(dolares){
//     let precioFinal = dolares * 301;
//     return precioFinal;
// }

// let convertirDolaresAPesos = (dolares) =>{
//     let precioFinal = dolares * 301;
//     return precioFinal;
// }

let convertirDolaresAPesos = dolares => dolares * 301;


//invocar o llamar a un funcion
saludar();

let nombre = prompt('Ingrese un nombre');
let apellido = prompt('Ingrese un apellido');

saludoNuevo(nombre, apellido);

let play = convertirDolaresAPesos(800);
console.log(play);

document.write(`<p>AMD Ryzen 9 $${convertirDolaresAPesos(550)} sin impuestos.</p>`)







