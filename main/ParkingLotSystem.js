let ParkingLotObserver = require('./ParkingLotObserver');

let parkingLotObserver
const parkingLotMaxSize = 3

class ParkingLotSystem {

    constructor() {
        this.parkingLots = [];
        parkingLotObserver = new ParkingLotObserver();
    }

    park(vehicle) {
        if (vehicle == null || vehicle == undefined) {
            throw new Error('unknown vehicle parked.');
        }
        if (this.isParkingLotFull()) {
            return false;
        }
        this.parkingLots.push(vehicle);
        return true;
    }

    unPark(vehicle) {
        if (vehicle == null || vehicle == undefined) {
            throw new Error('unknown vehicle unParked.');
        }
        for (let i = 0; i < this.parkingLots.length; i++) {
            if (this.parkingLots[i] == vehicle) {
                delete this.parkingLots[i];
                parkingLotObserver.subscribe();
                parkingLotObserver.getNotifyToOwner();
                return true;
            }
        }
        return false;
    }

    isParkingLotFull() {
        if (this.parkingLots.length == parkingLotMaxSize) {
            parkingLotObserver.subscribe()
            parkingLotObserver.getNotify();
            return true;
        }
        return false;
    }
}

module.exports = ParkingLotSystem;
