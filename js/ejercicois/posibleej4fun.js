// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
// la creación de la tabla debe ser realizada con una función y 
// mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaDeMultiplicar(numero){
   

    document.write(`<table> 
    <tbody>
    <tr> 
    <td>Tabla</td>
    </tr>`);
    
    
    
    for (let resultado = 1; resultado < 11; resultado++) {
        for(let i = 1; i< 11; i++){
            document.write(numero + 'X' + i + '=' + (numero*i) + '<br>')
        
        console.log()
        document.write(`
    <tr>
    <td>${resultado}</td>
    </tr>`);}
    }
    
    
    document.write(`
    </tbody>
    </table>`);
    
    return tablaDeMultiplicar
    }
    tablaDeMultiplicar (parseInt(prompt('ingrese un numero')))