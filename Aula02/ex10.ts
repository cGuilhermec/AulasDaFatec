class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    };

    area(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }

    perimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

const circulo = new Circulo(5);
console.log(`Area: ${circulo.area()}`);
console.log(`Perimetro: ${circulo.perimetro()}`);