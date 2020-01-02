var assert = require('assert');
var ParkingLotSystem = require('./ParkingLotSystem');
describe('describe Mocha Test for parking lot', function () {
    it('should return true when park their car to catch the flight.', function () {
        let parkingLotSystem = new ParkingLotSystem();
        let car = new Object();
        let ans = parkingLotSystem.park(car);
        assert.equal(ans, true);
    });
    it('should return true when Unpark their car to go home.', function () {
        let parkingLotSystem = new ParkingLotSystem();
        let car = new Object();
        parkingLotSystem.park(car);
        let ans = parkingLotSystem.unPark(car);
        assert.equal(ans, true);
    });
    it('should return throw an exception when Unpark unknown vehicle.', function () {
        try {
            let parkingLotSystem = new ParkingLotSystem();
            let car = new Object();
            let car1 = new Object();
            parkingLotSystem.park(car);
            parkingLotSystem.park(car1);
            let ans = parkingLotSystem.unPark(new Object());
        } catch (error) {
            assert.equal(error.message, 'unknown vehicle unparked.');
        }
    });
});