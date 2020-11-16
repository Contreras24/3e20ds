var c = 30;
var j = 2;
var numerosPrimos = [];

console.log("El quinto numero de la sucesion primos es: ");
for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos[4]);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}