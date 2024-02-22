class filme {
    titulo;
    duracao;

    constructor(titulo: string, duracao: number) {
        this.titulo = titulo;
        this.duracao = duracao;
    }

    print(): void {
        console.log(`O filme ${this.titulo} possui ${this.duracao} min.`)
    }
};

const filme01 = new filme( 'De volta para o futuro', 60 );
const filme02 = new filme( 'Matrix', 200 );

filme01.print();
filme02.print();
