class Carro {

    private static _contator: number = 0;
    private _marca: string = "";
    private _modelo: string = "";

    public constructor( marca: string, modelo: string ) {
        this._marca = marca;
        this._modelo = modelo;

        Carro._contator ++;
    };

    public static getContator(): number {
        return this._contator;
    }
};

const a = new Carro("VW", "GOL");
const b = new Carro("FIAT", "UNO");
const c = new Carro("GM", "CORSA");

console.log(Carro.getContator());

