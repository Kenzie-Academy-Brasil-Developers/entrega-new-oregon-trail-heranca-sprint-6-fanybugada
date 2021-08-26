const Traveler = require("./Traveler");

class Hunter extends Traveler {
    constructor (name) {
        super(name);
        this.qtFood = 2;
    }

    hunt () {
        this.qtFood += 5;
    }

    eat () {
        if (this.qtFood > 1) {
            this.qtFood -= 2;
        }

        else if (this.qtFood === 1) {
            this.qtFood -= 1;
        }

        else {
            this.isHealthy = false;
        }
    }

    giveFood (traveler, numOfFoodUnits) {
        if (this.qtFood > numOfFoodUnits) {
            traveler.qtFood += numOfFoodUnits;
            this.qtFood -= numOfFoodUnits;
        }
        else {
            return this.qtFood;
        }
    }
}

module.exports = Hunter;