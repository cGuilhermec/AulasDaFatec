class Pessoa {
    idade: number;
    constructor(readonly nome: string, idade: number) {
        // essa atribuição não é incorreta, mas é desnecessária
        // this.nome = nome;
        this.idade = idade;
    }
}
const p = new Pessoa("Ana", 18);
p.idade++;
console.log(p);

const a = new Pessoa('Fa', 15);
console.log(a);