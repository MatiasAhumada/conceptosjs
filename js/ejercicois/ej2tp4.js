let cuenta = {
  titular: "alex",
  saldo: 0,
  ingresar: (objeto, deposito) => {
    objeto.saldo += deposito; //objeto.saldo = deposito + objeto.saldo
    console.log(objeto.saldo);
  },
  extraer: (objeto, retiro) => {
    if (objeto.saldo >= retiro) {
      objeto.saldo -= retiro;
      document.write(`<p>se retiro ${retiro}</p>`);
    } else {
      document.write(`<p>saldo insuficiente</p>`);
    }
  },
  informar: (objeto) => {
    console.log(objeto);
    document.write(
      `<p>La cuenta de ${objeto.titular}, posee un saldo de ${objeto.saldo}</p>`
    );
  },
};
cuenta.informar(cuenta);

let deposito = parseFloat(prompt("ingrese el monto deseado"));
cuenta.ingresar(cuenta, deposito);

let retiro = parseFloat(prompt("ingrese el monto a extraer"));
cuenta.extraer(cuenta, retiro);
cuenta.informar(cuenta);
