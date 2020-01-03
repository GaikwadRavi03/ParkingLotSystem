var ParkingLotOwner = require('./ParkingLotOwner');
var AirportSecurity = require('./AirportSecurity');
let airportSecurity;
let parkingLotOwner;

class ParkingLotSystem {

    constructor() {
        this.parkingLots = [];
        this.parkingLotMaxSize = 3
        airportSecurity = new AirportSecurity();
        parkingLotOwner = new ParkingLotOwner();
    }

    park(vehicle) {
        if (vehicle == null || vehicle == undefined) {
            throw new Error('unknown vehicle parked.');
        }
        if (this.parkingLots.length == this.parkingLotMaxSize) {
            console.log('parking lot is full now.')
            parkingLotOwner.slotFull();
            airportSecurity.slotFull();
            return true;
        }
        this.parkingLots.push(vehicle);
        return true;
    }

    unPark(vehicle) {
        if (vehicle == null || vehicle == undefined) {
            return false;
        }
        for (let i = 0; i < this.parkingLots.length; i++) {
            if (this.parkingLots[i] == vehicle) {
                this.parkingLots.pop();
                parkingLotOwner.slotEmpty();
                return true;
            }
        }
        throw new Error('unknown vehicle unParked.');
    }
}

module.exports = ParkingLotSystem;
