const Traveler = require("./Traveler");

class Doctor extends Traveler {
    constructor (name, qtFood, isHealthy) {
        super(name, qtFood, isHealthy);
    }

    heal (traveler) {
        traveler.isHealthy = true;
    }
}

module.exports = Doctor;