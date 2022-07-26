let cuenta = {
  titular: "alex",
  saldo: 0,
  transferir() {
    console.log("estamos en el metodo transferir");
    console.log(this);
  },
  ingresar(deposito) {
    console.log(this);
    this.saldo += deposito; //objeto.saldo = deposito + objeto.saldo
    console.log("se ingreso$" + this.saldo);
  },
  extraer(retiro) {
    if (this.saldo >= retiro) {
      this.saldo -= retiro;
      document.write(`<p>se retiro ${retiro}</p>`);
    } else {
      document.write(`<p>saldo insuficiente</p>`);
    }
  },
  informar (){
    
    document.write(
      `<p>La cuenta de ${this.titular}, posee un saldo de ${this.saldo}</p>`
    );
  },
};
cuenta.informar(cuenta);
console.log(this)

let deposito = parseFloat(prompt("ingrese el monto deseado"));
cuenta.ingresar(deposito);

let retiro = parseFloat(prompt("ingrese el monto a extraer"));
cuenta.extraer(retiro);

cuenta.informar(cuenta);
