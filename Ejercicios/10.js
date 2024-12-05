
const numero = parseInt(prompt("Introduce un número:"));


let divisores = [];

// Comprobar si se puede dividir por 2, 3, 5 y 7
if (numero % 2 === 0) {
  divisores.push("2");
}
if (numero % 3 === 0) {
  divisores.push("3");
}
if (numero % 5 === 0) {
  divisores.push("5");
}
if (numero % 7 === 0) {
  divisores.push("7");
}

// Mostrar el resultado
if (divisores.length > 0) {
  const resultado = divisores.length === 1 
    ? `El ${numero} es divisible por ${divisores[0]}.`
    : `El ${numero} es divisible por ${divisores.join(", ")}.`;
  console.log(resultado);
} else {
  console.log(`El ${numero} no es divisible por 2, 3, 5 ni 7.`);
}
