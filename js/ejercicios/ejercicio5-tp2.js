//ingresar un dni debe ser entre 0 y 99999999 \

//calcular el resto de la división entera entre el número y el número 23 \

//el resultado 0 a 22, corresponde a una de las siguientes letras (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) \

//si el dni cargado no es un numero mostrar con un alert

//repetir todo el proceso hasta que el usuario presione cancelar



do{
    let numero = parseInt(prompt('Ingrese un numero de DNI, entre (0 y 99999999)'));
    console.log(numero);
    
    if( numero >= 0 && numero <= 99999999){
        let resultado = numero % 23;
        console.log(resultado);
        
        switch(resultado){
            case 0:
                document.write('La letra que corresponde a su DNI es la T, DNI ingresado '+numero);
                console.log('T');
                break;
            case 1:
                document.write('La letra que corresponde a su DNI es la R, DNI ingresado '+numero);
                break;
            case 2:
                document.write('La letra que corresponde a su DNI es la W, DNI ingresado '+numero);
                break;
            case 3:
                document.write('La letra que corresponde a su DNI es la A, DNI ingresado '+numero);
                break;
            case 4:
                document.write('La letra que corresponde a su DNI es la G, DNI ingresado '+numero);
                break;
            case 5:
                document.write('La letra que corresponde a su DNI es la M, DNI ingresado '+numero);
                break;
            case 6:
                document.write('La letra que corresponde a su DNI es la Y, DNI ingresado '+numero);
                break;
            case 7:
                document.write('La letra que corresponde a su DNI es la F, DNI ingresado '+numero);
                break;
            case 8:
                document.write('La letra que corresponde a su DNI es la P, DNI ingresado '+numero);
                break;
            case 9:
                document.write('La letra que corresponde a su DNI es la D, DNI ingresado '+numero);
                break;
            case 10:
                document.write('La letra que corresponde a su DNI es la X, DNI ingresado '+numero);
                break;
            case 11:
                document.write('La letra que corresponde a su DNI es la B, DNI ingresado '+numero);
                break;
            case 12:
                document.write('La letra que corresponde a su DNI es la N, DNI ingresado '+numero);
                break;
            case 13:
                document.write('La letra que corresponde a su DNI es la j, DNI ingresado '+numero);
                break;
            case 14:
                document.write('La letra que corresponde a su DNI es la Z, DNI ingresado '+numero);
                break;
            case 15:
                document.write('La letra que corresponde a su DNI es la S, DNI ingresado '+numero);
                break;
            case 16:
                document.write('La letra que corresponde a su DNI es la Q, DNI ingresado '+numero);
                break;
            case 17:
                document.write('La letra que corresponde a su DNI es la V, DNI ingresado '+numero);
                alert('La letra que corresponde a su DNI es la V, DNI ingresado '+numero);
                console.log('La letra que corresponde a su DNI es la V, DNI ingresado '+numero);
                break;
            case 18:
                document.write('La letra que corresponde a su DNI es la H, DNI ingresado '+numero);
                break;
            case 19:
                document.write('La letra que corresponde a su DNI es la L, DNI ingresado '+numero);
                break;
            case 20:
                document.write('La letra que corresponde a su DNI es la C, DNI ingresado '+numero);
                break;
            case 21:
                document.write('La letra que corresponde a su DNI es la K, DNI ingresado '+numero);
                break;
            case 22:
                document.write('La letra que corresponde a su DNI es la E, DNI ingresado '+numero);
                break;
            default:
                alert('ingresaste una opcion erronea')
        }
    }else{
        alert('Ingreso un valor erroneo');
    }    
}while(confirm('¿Desea ingresar un DNI?'))

