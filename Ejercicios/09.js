// Pedir frase al usuario
const frase = prompt("Introduce una frase:");

// Inicializar una cadena para guardar las vocales
let vocales = "";

// Recorrer la frase caracter por caracter
for (let i = 0; i < frase.length; i++) {
  const caracter = frase.charAt(i).toLowerCase(); // Convertir a minúscula para uniformidad
  
  // Verificar si el caracter es una vocal
  if ("aeiou".includes(caracter)) {
    vocales += caracter;
  }
}

// Mostrar las vocales 
console.log(vocales);
