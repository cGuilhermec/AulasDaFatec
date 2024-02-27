class X {
    um(): void {
        console.log("Um");
    }
};

class Y extends X {
    dois(): void {
        console.log("Dois");
        this.um();
    }
};

class Z extends Y {
    tres(): void {
        console.log("Tres");
        this.tres();
    }

};

const z = new Z();
z.tres();