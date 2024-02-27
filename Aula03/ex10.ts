class Texto extends String {
    primeira():string {
        return this.charAt(0);
    }

    ultima():string {
        return this.charAt(this.length-1);
    }

    minusculo(): string {
        return this.toLowerCase()
    }

}

const a: Texto = new Texto("BOA NOITE");
console.log(`Primeira: ${a.primeira()}`);
console.log(`Ultima: ${a.ultima()}`);
console.log(`Minuscula: ${a.minusculo()}`);