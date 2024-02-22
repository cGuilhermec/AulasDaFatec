import Point from './ex07';

class Rectangle {
    inferiorEsquerdo: Point;
    superiorDireito: Point;

    constructor(ie: Point, sd: Point){
        this.inferiorEsquerdo = ie;
        this.superiorDireito = sd;
    };

    area():number {
        const id = new Point(this.superiorDireito.x, this.inferiorEsquerdo.y);
        const base = this.inferiorEsquerdo.distancia(id);
        const altura = this.superiorDireito.distancia(id);
        return base * altura;
    }
}

const sd = new Point(3, 5);
const ie = new Point(1, 2);
const r = new Rectangle(ie, sd);
console.log(`Area: ${r.area()}`);