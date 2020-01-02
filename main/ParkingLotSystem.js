var ParkingLotOwner = require('./ParkingLotOwner');
let parkingLots = 0
let parkingLotMaxSize = 3

class ParkingLotSystem {

    park(vehicle) {
        let parkingLotOwner = new ParkingLotOwner();
        if (vehicle == null || vehicle == undefined) {
            return false;
        }
        if (parkingLots <= parkingLotMaxSize) {
            this.parkVehicle = vehicle;
            parkingLots++
            return true;
        }
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
