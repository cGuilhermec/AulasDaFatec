import { Ponto, Retangulo } from './types/index';

const infEsquerdo: Ponto = {
    x:1,
    y:2
};

const supDireito: Ponto = {
    x: 3,
    y: 4
};

const retangulo: Retangulo = {
    infEsquerdo,
    supDireito
};

const retanguloJson: string = JSON.stringify(retangulo);
console.log(retanguloJson);