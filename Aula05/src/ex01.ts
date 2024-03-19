import { Ponto } from './types/index';

const ponto: Ponto = { x:10, y:20 };

const pontoJson: string = JSON.stringify(ponto);
console.log(`Obejto: ${pontoJson}`);

