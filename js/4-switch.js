let estacion = prompt(
  "Ingrese la su estacion del año preferida: 1-verano, 2-otoño, 3-primavera, 4-invierno"
);

// if(estacion == 1){
//     document.write('Helado');
// }else if(estacion == 2){
//     document.write('Locro');
// }else if(estacion == 4){
//     document.write('chocolate');
// }else if(estacion == 3){
//     document.write('Cerveza');
// }else{
//     document.write('Ingresaste una opcion erronea');
// }

/*
switch(opcion){
    case 1:
        todas las lineas de codigo en caso q el usuario seleccionó 1
        ..
        ..
        break;
     case 2:
        todas las lineas de codigo en caso q el usuario seleccionó 2
        ..
        ..
        break;
    case 3:
        todas las lineas de codigo en caso q el usuario seleccionó 3
        ..
        ..
        break;
    default:
        todas las lineas que quiero ejecutar en caso que el usuario selecciono una opcion diferente
   
}
*/

switch (estacion) {
  case '2':
    document.write("Locro");
    break;
  case 1:
  case "1":
  case "verano":
    document.write("Helado");
    break;
  case '3':
    document.write("Cerveza");
    break;
  case '4':
    document.write("chocolate");
    break;
  default:
    document.write("Ingresaste una opcion erronea");
}
