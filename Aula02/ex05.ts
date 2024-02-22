class Questao{
     enunciado: string;
    private valor: number;
    
    constructor( enunciado: string, valor: number ){
        this.enunciado = enunciado;
        this.valor = valor;
    };

    print(): void {
        console.log(this.enunciado, this.valor);
    }
};

const questao1 = new Questao( 'O que e um array?', 0.5 );
questao1.print();