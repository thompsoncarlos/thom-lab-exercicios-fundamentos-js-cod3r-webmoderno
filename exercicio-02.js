/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
   Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
   Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
   ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
  triângulo).
*/
 

function ClassificaTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é Equilátero");
  } else if (lado1 === lado2 || lado2 == lado3 || lado1 === lado3) {
    console.log("O triângulo é Isósceles");
  } else {
    console.log("O triângulo é Escaleno");
  }
}

ClassificaTriangulo(3, 3, 3); // Equilátero
ClassificaTriangulo(2, 3, 2); // Isósceles
ClassificaTriangulo(1, 3, 3); // Isósceles
ClassificaTriangulo(2, 3, 4); // Escaleno
