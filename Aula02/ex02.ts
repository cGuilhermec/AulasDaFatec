class Retangulo {
    base;
    altura;

    constructor(base: number, altura: number) {
        this.altura = altura;
        this.base = base;
    };

    area(): number {
        return this.base * this.altura;
    }

    perimetro(): number {
        return 2 * this.base + 2 * this.altura;
    }
};

const retangulo = new Retangulo( 2, 2 );

console.log(retangulo.area());
console.log(retangulo.perimetro());
