// models/calc.js
class Calculate {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    sum () {
        return this.a + this.b;
    }
}

module.exports = Calculate;
