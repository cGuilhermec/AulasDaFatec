function somar(a: number, b: number):number | string {
    if( a < b) {
        return a + b;
    } else {
        return "" + a + b;
    }
};

console.log(somar(3, 2));