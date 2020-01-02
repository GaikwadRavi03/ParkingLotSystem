var assert = require('assert');
var ParkingLotSystem = require('./ParkingLotSystem');
describe('describe Mocha Test for parking lot', function () {
    it('should return park their car to catch the flight.', function () {
        let parkingLotSystem = new ParkingLotSystem();
        let car = new Object();
        let ans = parkingLotSystem.park(car);
        assert.equal(ans, true);
    });
});