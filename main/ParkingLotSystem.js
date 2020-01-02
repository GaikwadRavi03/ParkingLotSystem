var ParkingLotOwner = require('./ParkingLotOwner');
var AirportSecurity = require('./AirportSecurity');
let airportSecurity;
let parkingLotOwner;
let parkingLots = 0
let parkingLotMaxSize = 2
var array = [];

class ParkingLotSystem {

    constructor() {
        airportSecurity = new AirportSecurity();
        parkingLotOwner = new ParkingLotOwner();
    }

    park(vehicle) {
        if (vehicle == null || vehicle == undefined) {
            return false;
        }
        if (parkingLots == parkingLotMaxSize) {
            console.log('parking lot is full now.')
            parkingLotOwner.slotFull();
            airportSecurity.slotFull();
            throw new Error('lot is full.');
        }
        this.parkVehicle = vehicle;
        array.push(vehicle);
        parkingLots++;
        return true;
    }

    unPark(vehicle) {
        if (vehicle == null || vehicle == undefined) {
            return false;
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] == vehicle) {
                array.pop();
                console.log(array)
                parkingLotOwner.slotEmpty();
                parkingLots--;
                return true;

            }
        }
        throw new Error('unknown vehicle unParked.');
    }
}

module.exports = ParkingLotSystem;
