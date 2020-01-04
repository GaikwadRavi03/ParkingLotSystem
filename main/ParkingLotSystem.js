let ParkingLotObserver = require('./ParkingLotObserver');

let parkingLotObserver
const parkingLotMaxSize = 4

class ParkingLotSystem {

    constructor() {
        this.parkingLots = [];
        parkingLotObserver = new ParkingLotObserver();
    }

    park(vehicle) {
        if (vehicle == null) {
            throw new Error('unknown vehicle parked.');
        }
        if (this.isParkingLotFull()) {
            throw new Error('parking lot is full.');
        }
        for (let i = 0; i < this.parkingLots.length; i++) {
            if (this.parkingLots[i] == undefined) {
                this.parkingLots.fill(vehicle, i, i + 1)
                return true;
            }
        }
        this.parkingLots.push(vehicle);
        return true;
    }

    unPark(vehicle) {
        if (vehicle == null || vehicle == undefined) {
            throw new Error('null or undefined car unParked.');
        }
        for (let i = 0; i < this.parkingLots.length; i++) {
            if (this.parkingLots[i] == vehicle) {
                this.parkingLots.splice(i, 1, undefined)
                parkingLotObserver.subscribe();
                parkingLotObserver.getNotifyToOwner();
                return true;
            }
        }
        throw new Error('unknown vehicle unParked.');
    }

    isParkingLotFull() {
        if (this.parkingLots.length == parkingLotMaxSize ) {
            parkingLotObserver.subscribe()
            parkingLotObserver.getNotify();
            return true;
        }
        return false;
    }

    findEmptySlots() {
        for (let i = 0; i < this.parkingLots.length; i++) {
            if (this.parkingLots[i] == undefined) {
                return i;
            }
        }
        return false;
    }

    findMyCar(vehicle) {
        for (let i = 0; i < this.parkingLots.length; i++) {
            if (this.parkingLots[i] == vehicle) {
                return i;
            }
        }
        return false;
    }
}

module.exports = ParkingLotSystem;
