import { Pilha } from './types';

// Criando uma instância da Pilha
const pilhaDeNomes: Pilha<string> = new Pilha<string>();

// Adicionando os nomes à pilha
pilhaDeNomes.push("Ana");
pilhaDeNomes.push("Pedro");
pilhaDeNomes.push("Luiz");
pilhaDeNomes.push("Maria");

// Utilizando uma estrutura de repetição while para remover os nomes e imprimir no terminal
console.log("Removendo nomes da pilha:");
while (true) {
    const nomeRemovido = pilhaDeNomes.pop();
    if (nomeRemovido !== undefined) {
        console.log(nomeRemovido);
    } else {
        break; // Encerra o loop quando a pilha estiver vazia
    }
}
