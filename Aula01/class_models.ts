/* Examples of class definition and inheritance, including
opperations implementations - i.e. methods 
*/

class Animal {
    age: number;

    constructor() {
        this.age = 0; // Inicializa a propriedade 'age'
    }

    grow() {
        this.age += 1;
    }
}

class Dog extends Animal {
    breed: string;

    constructor() {
        super(); // Chama o construtor da classe pai
        this.breed = ''; // Inicializa a propriedade 'breed'
    }

    bark(): string {
        return "au au au";
    }
}

export {
    Animal,
    Dog
}
