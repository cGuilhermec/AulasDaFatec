import { Pilha, Ponto } from "./types";

const pilhaDeNumeros: Pilha<Ponto> = new Pilha<Ponto>();

const ponto1: Ponto = { x: 4, y: 5 };
const ponto2: Ponto = { x: 3, y: 4 };
const ponto3: Ponto = { x: 2, y: 3 };
const ponto4: Ponto = { x: 1, y: 2 };

pilhaDeNumeros.push(ponto1);
pilhaDeNumeros.push(ponto2);
pilhaDeNumeros.push(ponto3);
pilhaDeNumeros.push(ponto4);

console.log(pilhaDeNumeros);

while ( pilhaDeNumeros.pop() !== undefined ) {
    const nomeRemovido = pilhaDeNumeros.pop();
    console.log(nomeRemovido);
};