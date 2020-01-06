let ParkingLotObserver = require('./ParkingLotObserver');

let parkingLotObserver
const parkingLotMaxSize = 9

class ParkingLotSystem {

    constructor() {
        this.largestEmptySlot = []
        this.parkingLots = 0;
        this.counter = 0;
        this.lots(3, [3, 3, 3]);
        parkingLotObserver = new ParkingLotObserver();
    }

    park(vehicle) {
        let lotNumber;
        if (vehicle == null) {
            throw new Error('unknown vehicle parked.');
        }
        if (this.isParkingLotFull()) {
            throw new Error('parking lot is full.');
        }
        if (vehicle.valueOf() == "Handicap") {
            lotNumber = this.findLotNumberToParkForHandicap();
        } else if (vehicle.valueOf() == "LargeCar") {
            lotNumber = this.findLotNumberToParkToLargeCar();
        } else {
            lotNumber = this.findLotNumberToPark();
        }
        for (let i = 0; i < this.parkingLots[lotNumber].length; i++) {
            if (this.parkingLots[lotNumber][i] == undefined) {
                this.parkingLots[lotNumber][i] = vehicle
                this.counter++
                return true;
            }
        }
    }

    unPark(vehicle) {
        if (vehicle == null || vehicle == undefined) {
            throw new Error('null or undefined car unParked.');
        }
        for (let i = 0; i < this.parkingLots.length; i++) {
            for (let j = 0; j < this.parkingLots.length; j++) {
                if (this.parkingLots[i][j] == vehicle) {
                    this.parkingLots[i][j] = undefined
                    parkingLotObserver.subscribe();
                    parkingLotObserver.getNotifyToOwner();
                    this.counter--
                    return true;
                }
            }
        }
        throw new Error('unknown vehicle unParked.');
    }

    isParkingLotFull() {
        if (this.counter == parkingLotMaxSize) {
            parkingLotObserver.subscribe()
            parkingLotObserver.getNotify();
            return true;
        }
        return false;
    }

    findEmptySlots() {
        for (let i = 0; i < this.parkingLots.length; i++) {
            for (let j = 0; j < this.parkingLots.length; j++) {
                if (this.parkingLots[i][j] == undefined) {
                    let emptySpace = {lot: i, slot: j}
                    return emptySpace;
                }
            }
        }
        return false
    }

    findMyCar(vehicle) {
        for (let i = 0; i < this.parkingLots.length; i++) {
            for (let j = 0; j < this.parkingLots.length; j++) {
                if (this.parkingLots[i][j] == vehicle) {
                    let emptySpace = {lot: i, slot: j}
                    return emptySpace;
                }
            }
        }
        return false
    }

    lots(numOdLot, capacity) {
        this.parkingLots = [];
        for (let i = 0; i < numOdLot; i++) {
            this.parkingLots[i] = new Array();
            for (let j = 0; j < capacity[i]; j++) {
                this.parkingLots[i][j] = undefined;
            }
        }
    }

    findLotNumberToPark() {
        for (let j = 0; j < this.parkingLots.length; j++) {
            for (let i = 0; i < this.parkingLots[j].length; i++) {
                if (this.parkingLots[i][j] == undefined) {
                    return [i];
                }
            }
        }
    }

    findLotNumberToParkForHandicap() {
        for (let i = 0; i < this.parkingLots.length; i++) {
            for (let j = 0; j < i; j++) {
                if (this.parkingLots[j][i] == undefined) {
                    return j;
                }
            }
        }
    }

    findLotNumberToParkToLargeCar() {
        for (let i = 0; i < this.parkingLots.length; i++) {
            let count = 0
            for (let j = 0; j < this.parkingLots.length; j++) {
                if (this.parkingLots[i][j] == undefined) {
                    count++;
                }
            }
            this.largestEmptySlot[i] = count - 1;
        }
        return Math.max(...this.largestEmptySlot);
    }
}

module.exports = ParkingLotSystem;
