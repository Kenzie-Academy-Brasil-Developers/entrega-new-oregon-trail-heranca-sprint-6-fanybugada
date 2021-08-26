class Wagon {
    constructor (capacity) {
        this.wagonCapacity = capacity;
        this.passengerList = [];
    }

    getAvailableSeatCount () {
        let occupied = this.passengerList.length;
        let availableSeat = this.wagonCapacity - occupied;
        return availableSeat;
    }

    join (newTraveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengerList.push(newTraveler);
        } 
        return this.passengerList;
    }

    shouldQuarantine () {
            for (let seat = 0; seat < this.passengerList.length; seat++) {
                if (this.passengerList[seat].isHealthy = true) {
                    return false;
                }
            }
        return true;
    }

    totalFood () {
        let travelersFood = 0; //recebe soma do total de food
            for (let count = 0; count < this.passengerList.length; count++) {
                travelersFood += this.passengerList[count].qtFood; 
            }
        return travelersFood;
    }
}

module.exports = Wagon;