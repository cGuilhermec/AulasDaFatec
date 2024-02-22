class Carro {
    marca: string = '';
    modelo: string = '';

    setMarca(marca: string): void {
        this.marca = marca;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    print(): void {
        console.log(`${this.marca} ${this.modelo}`);
    }
};

const carro1 = new Carro();
const carro2 = new Carro();

carro1.setMarca('GOL');
carro1.setModelo('VW');

carro2.setMarca('UNO');
carro2.setModelo('FIAT');

carro1.print();
carro2.print();