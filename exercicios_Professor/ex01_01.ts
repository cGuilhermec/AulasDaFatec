import { verificarRelacao } from './ex01';

function verificarRelacaoNumeros(n1: number, n2: number): void {
  const resultado: string = verificarRelacao(n1, n2);
  console.log(resultado);
}

// Exemplo de uso:
const numero1: number = 5;
const numero2: number = 8;
verificarRelacaoNumeros(numero1, numero2);
