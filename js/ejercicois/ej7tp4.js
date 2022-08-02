// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a
// otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas,
// indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar
// por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamanio = 10) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  agregarContacto(contactoNuevo) {
    // verificar si el contacto existe
    if (this.existeContacto(contactoNuevo.nombre)) {
      console.log("el contacto ya existe, no lo agrego");
    } else {
      // verificar si el metodo agendaLena retorna false
      if (this.agendaLlena() === false) {
        this.contactos.push(contactoNuevo);
      } else {
      }
    }
    console.log(this.contactos);
  }
  existeContacto(nombre) {
    // es xq el contacto existe
    const contactoExistente = this.contactos.find((itemcontacto) => {
      return nombre === itemcontacto.nombre;
    });
    if (contactoExistente) {
      console.log("el contacto existe");
      return true;
    } else {
      console.log("el contacto no existe");
      return false;
    }
  }
  agendaLlena() {
    if (this.contactos.length === this.tamanio) {
      console.log("la agenta esta llena");
      return true;
    } else {
      console.log("hay espacio disponible");
      return false;
    }
  }
  eliminarContacto(nombre) {
    let contactosFiltrados = this.contactos.filter((itemcontacto) => {
      return itemcontacto.nombre != nombre;
    });
    this.contactos = contactosFiltrados;
    console.log("elementos eliminados");
    console.log(this.contactos);
  }
}

// crear la agenda
let agendaTelefonica = new Agenda();
console.log(agendaTelefonica);

// menu de opcion
do {
  let opcion = parseInt(
    prompt(`Seleccione una opcion:
1- agregar un contacto.
2- consultar si el contacto existe.
3- listar los contactos.
4- buscar un contactp.
5- eliminar un contacto.
6- consultar si la agenda esta llena.
7- consultar si la agenda tiene huecos libre.
8- cambiar elñ tamaño de la agenda .`)
  );

  switch (opcion) {
    case 1:
      // 1 agregar un contacto,
      //   pedir el nombre y telefono
      let nombre = prompt("ingrese un nombre").toLowerCase();
      let telefono = prompt("ingrese un telefono");
      // crear el contacto
      let nuevoContacto = new Contacto(nombre, telefono);

      // invocar a agregarContacto
      agendaTelefonica.agregarContacto(nuevoContacto);
      break;
    case 2:
      // 2
      let nombreBuscado = prompt("ingrese un nombre").toLowerCase();
      agendaTelefonica.existeContacto(nombreBuscado);

      break;
    case 3:
      // 3 listar los contactos.
      break;
    case 4:
      // 4 buscar un contactp.
      break;
    case 5:
      // 5 eliminar un contacto
      let nombreBorrar = prompt("ingrese un nombre").toLowerCase();
      agendaTelefonica.existeContacto(nombreBorrar);
      break;
    case 6:
      // 6 consultar si la agenda esta llena.
      break;
    case 7:
      // 7 consultar si la agenda tiene huecos libre.
      break;
    case 8:
      // 8 cambiar elñ tamaño de la agenda
      break;
    default:
      alert("Ingreso una opcion incorrecta");
  }
} while (confirm("quiere agregar otro numero?"));
