var ParkingLotOwner = require('./ParkingLotOwner');
var AirportSecurity = require('./AirportSecurity');
let parkingLots = 0
let parkingLotMaxSize = 3

class ParkingLotSystem {

    park(vehicle) {
        let airportSecurity = new AirportSecurity();
        let parkingLotOwner = new ParkingLotOwner();
        if (vehicle == null || vehicle == undefined) {
            return false;
        }
        if (parkingLots <= parkingLotMaxSize) {
            this.parkVehicle = vehicle;
            parkingLots++
            return true;
        }
        airportSecurity.notify(true);
        parkingLotOwner.notify(true);
        throw new Error('lot is full.');
    }

    unPark(vehicle) {
        if (this.parkVehicle == vehicle) {
            return true;
        }
        throw new Error('unknown vehicle unParked.');
    }
}

module.exports = ParkingLotSystem;
