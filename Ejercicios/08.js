// Pedir un número al usuario
const numero = parseInt(prompt("Introduce un número:"));

// Verificar si es divisible por 2
if (numero % 2 === 0) {
  console.log(`El ${numero} es divisible por 2.`);
} else {
  console.log(`El ${numero} no es divisible por 2.`);
}
