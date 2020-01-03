var ParkingLotOwner = require('./ParkingLotOwner');
var AirportSecurity = require('./AirportSecurity');
let airportSecurity;
let parkingLotOwner;
const parkingLotMaxSize = 3

class ParkingLotSystem {

    constructor() {
        this.parkingLots = [];
        airportSecurity = new AirportSecurity();
        parkingLotOwner = new ParkingLotOwner();
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
        if (this.isParkingLotAvailable) {
            return true;
        }
    }

    isParkingLotFull() {
        if (this.parkingLots.length == parkingLotMaxSize) {
            parkingLotOwner.notifySlotFull();
            airportSecurity.notifySlotFull();
            return true;
        }
        return false;
    }

    isParkingLotAvailable() {
        for (let i = 0; i < this.parkingLots.length; i++) {
            if (this.parkingLots[i] == vehicle) {
                delete this.parkingLots[i];
                parkingLotOwner.notifySlotEmpty();
                return true;
            }
            return false;
        }
    }
}

module.exports = ParkingLotSystem;
