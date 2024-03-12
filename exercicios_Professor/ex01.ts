function verificarRelacaoNumeros(n1: number, n2: number): void {
    switch (true) {
      case n1 === n2:
        console.log("n1 é igual a n2");
        break;
      case n1 < n2:
        console.log("n1 é menor que n2");
        break;
      case n1 > n2:
        console.log("n1 é maior que n2");
        break;
    }
  
    if (n1 === n2) {
      console.log("n1 é igual a n2");
    } else if (n1 < n2) {
      console.log("n1 é menor que n2");
    } else {
      console.log("n1 é maior que n2");
    }
  }
  
  // Exemplo de uso:
  const numero1: number = 5;
  const numero2: number = 8;
  verificarRelacaoNumeros(numero1, numero2);

  
// comeco do ex p12

export function verificarRelacao(n1: number, n2: number): string {
    if (n1 === n2) {
      return "n1 é igual a n2";
    } else if (n1 < n2) {
      return "n1 é menor que n2";
    } else {
      return "n1 é maior que n2";
    }
  }
  