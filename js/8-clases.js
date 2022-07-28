// usuario, nombre, mail, fechaNacimiento, password, estado

//mentores:antiguedad, cursosDictados o comisionesACargo = []
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

  //propiedades conmutadas setters y getters
  set modificarPassword(nuevoPass) {
    this.password = nuevoPass;
  }

  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  get mostrarNombre() {
    return this.nombre;
  }
}
// ALUMNOS, CALIFICACIONES, MATRICULA, CURSO FULLSTACK, ESTADOCURSO: APROBADO, EN CURSO.
class Alumno extends Usuario {
  constructor(
    matricula,
    curso,
    userName,
    nombre,
    mail,
    fechaNacimiento,
    password
  ) {
    // invocar el metodo constructor de la clase superior
    super(userName, nombre, mail, fechaNacimiento, password);
    // agregar propiedades
    this.matricula = matricula;
    this.curso = curso;
    this.estadoCursado = "En Curso";
    this.calificaciones = [];
  }
  // metodos
  recibirCalificacion(nota) {
    this.calificaciones.push(nota);
  }
  obtenerPromedio() {
    let cantidadNotas = this.calificaciones.length;
    let sumatoriaNotas = 0;
    for (let i = 0; i < this.calificaciones.length; i++) {
      sumatoriaNotas += this.calificaciones[i]; // sumatoriaNotas = this.calificaciones[i]+sumatoriaNotas;
    }
    let promedio = sumatoriaNotas / cantidadNotas;
    document.write(
      `<p>El alumno ${this.nombre} tiene el promedio ${promedio}</p>`
    );
  }
  mostrarDatosAlumnos() {
    document.write(`<ul>
    <li>Matricula: ${this.matricula}</li>
    <li>Curso: ${this.curso}</li>
    <li>estado de cursado: ${this.estadoCursado}</li>
    </ul>`);
  }

  mostrarDatos(){
    document.write('<h3>Datos personales</h3>')
    document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Email: ${this.mail}</li>
    <li>Fecha de Nacimiento: ${this.fechaNacimiento}</li>
    <li>Nombre de usuario: ${this.nombreUsuario}</li>
    </ul>`);
document.write('<h3>Datos Academicos</h3>')
    document.write(`<ul>
    <li>Matricula: ${this.matricula}</li>
    <li>Curso: ${this.curso}</li>
    <li>estado de cursado: ${this.estadoCursado}</li>
    </ul>`);
  }
  // get y set
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

// usamos los get y set
document.write(`<p>El objeto jose tiene de nombre: ${jose.mostrarNombre}</p>`);

jose.modificarNombre = "Jose Luis Gomez Marigliano";

document.write(`<p>El objeto jose tiene de nombre: ${jose.mostrarNombre}</p>`);

// crear un obj alumno
let nicolas = new Alumno(
  123,
  "flullstack",
  "nicoGM",
  "Nico GM",
  "rodnicgm@gmail.com",
  "07/12/1991",
  "123sdlkgsodg"
);



let notaBoostrap = parseInt(prompt("ingrese la nota correspondiente"));
let notaGit = parseInt(prompt("ingrese la nota correspondiente"));

nicolas.recibirCalificacion(notaBoostrap);
nicolas.recibirCalificacion(notaGit);
nicolas.obtenerPromedio();
nicolas.mostrarDatosAlumnos();

nicolas.mostrarDatos();
