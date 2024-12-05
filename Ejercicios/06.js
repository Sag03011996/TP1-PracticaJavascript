let numero1 = parseFloat(prompt("Ingrese el primer numero"))
let numero2 = parseFloat(prompt("ingrese el segundo numero"))


if (numero1 > numero2) {
    document.write("El número mayor es: " + numero1);
} else if (numero2 > numero1) {
    document.write("El número mayor es: " + numero2);
} else {
    document.write("Ambos números son iguales.");
}