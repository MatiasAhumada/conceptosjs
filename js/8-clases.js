// usuario, nombre, mail, fechaNacimiento, password, estado

class Usuario {
  // primer metodo que se ejecuta en una clase
  constructor(userName, nombre, mail, fechaNacimiento, password) {
    this.nombreUsuario = userName;
    this.nombre = nombre;
    this.mail = mail;
    this.fechaNacimiento = fechaNacimiento;
    this.password = password;
    this.estado = true; // parametro por defecto
  }
  // agregarla todos los metodos que considero necesario
  cambiarPassword() {}

  mostrarDatos() {
    document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Email: ${this.mail}</li>
    <li>Fecha de Nacimiento: ${this.fechaNacimiento}</li>
    <li>Nombre de usuario: ${this.nombreUsuario}</li>
    </ul>`);
  }

  //propiedades conmutadas
  set modificarPassword(nuevoPass) {
    this.password = nuevoPass;
  }
}

//crear un usuario, instanciar
let jose = new Usuario(
  "joseGM",
  "jose luis gm",
  "jodeluis@gmail.com",
  "07/1989",
  "A%3438dfd"
);
let lucia = new Usuario(
  "luciaS",
  "Lucia soraire",
  "lociaS@gmail.com",
  "07/1989",
  "Bji%3438dfd"
);

console.log(jose);

jose.mostrarDatos();

lucia.mostrarDatos();

jose.modificarPassword = "12345678";
console.log(jose);
