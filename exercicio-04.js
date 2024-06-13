/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function doDivision(value1, value2) {
  console.log(`Division: ${value1} / ${value2}`)
  console.log("Quocient: ", value1 / value2);
  console.log("Remainder: ", value1 % value2);
}

doDivision(12, 2) // Quocient: 6, Remainder: 0
doDivision(35, 2) // Quocient: 17.5, Remainder: 1