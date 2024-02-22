class Numero {
    nros: number[] = [];

    add(nro: number): void {
        this.nros.push(nro);
    };

    sum(): number {
        let s = 0;
        for(let i = 0; i < this.nros.length; i++) {
            s +=this.nros[i];
        }
        return s;
    }

    max() {
        let maior = this.nros[0];
        for(let i = 0; i < this.nros.length; i++){
            if(this.nros[i] > maior){
                maior = this.nros[i];
            }
        };
        return maior;
    };

};

const v = new Numero();

v.add(8);
v.add(2);
v.add(9);
v.add(4);
v.add(5);
console.log(`Somatorio: ${v.sum()}`);
console.log(`Maior: ${v.max()}`);
