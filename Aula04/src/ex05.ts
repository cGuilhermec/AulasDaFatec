import { Carro } from './ex04';

const arrayDeCarros: Carro[] = [];

const carro1 = new Carro("VW", "GOL");
const carro2 = new Carro("FIAT", "UNO");
const carro3 = new Carro("GM", "CORSA");

arrayDeCarros.push(carro1, carro2, carro3);

console.log(arrayDeCarros);