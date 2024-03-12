class Carro {
    private _marca: string;
    private _modelo: string;

    constructor( marca: string = "", modelo: string = "" ){
        this._marca = marca;
        this._modelo = modelo;
    };

    get marca():string {
        return this._marca;
    };

    get modelo(): string {
        return this._modelo;
    };

};

const carro = new Carro();
// console.log(carro);

export { Carro };