class Traveler {
    constructor (name) {
        this.name = name;
        this.qtFood = 1;
        this.isHealthy = true;
    }

    hunt() {
        this.qtFood += 2;
    }

    eat() {
        if (this.qtFood > 0) {
            this.qtFood--;
        }
        if (this.qtFood === 0) {
            this.isHealthy = false;
        }
    }
}

module.exports = Traveler;