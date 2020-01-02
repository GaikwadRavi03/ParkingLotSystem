
class ParkingLotSystem {

    park(vehicle) {
        this.parkVehicle = vehicle;
        return true;
    }

    unPark(vehicle) {
        if (this.parkVehicle == vehicle) {
            return true;
        }
        throw new Error('unknown vehicle unparked.');
    }
}
module.exports = ParkingLotSystem;
