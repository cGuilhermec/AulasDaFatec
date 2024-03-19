import { Livro } from './types/index';

class Revista extends Livro {
    private edicao: number;

    public constructor( titulo: string, ano: number, edicao: number ){
        super(titulo, ano);
        this.edicao = edicao;
    };

    print(): void {
        console.log(`${this.titulo}: O futuro da IA ${this.ano} ${this.edicao}`);
    };

};

const minhaRevista = new Revista( "Superinteressante", 2023, 448 );
const segundaRevista = new Revista( "Sala", 2050, 550 );
minhaRevista.print();
segundaRevista.print();