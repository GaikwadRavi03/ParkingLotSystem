var assert = require('assert');
var ParkingLotSystem = require('./ParkingLotSystem');
describe('describe Mocha Test for parking lot', function () {
    it('should return park their car to catch the flight.', function () {
        let parkingLotSystem = new ParkingLotSystem();
        let car = new Object();
        let ans = parkingLotSystem.park(car);
        assert.equal(ans, true);
    });
    it('should return Unpark their car to go home.', function () {
        let parkingLotSystem = new ParkingLotSystem();
        let car = new Object();
        parkingLotSystem.park(car);
        let ans = parkingLotSystem.unPark(car);
        assert.equal(ans, true);
    });
});