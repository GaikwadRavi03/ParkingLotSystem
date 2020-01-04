let assert = require(`assert`);
let ParkingLotSystem = require(`../main/ParkingLotSystem`);

describe(`describe Mocha Test for parking lot`, () => {
    let parkingLotSystem;

    beforeEach(() => {
        parkingLotSystem = new ParkingLotSystem();
    })
    it(`should return true when park their car to catch the flight.`, () => {
        let car = new Object();
        let ans = parkingLotSystem.park(car);
        assert.equal(ans, true);
    });
    it(`should return false when no vehicle park.`, () => {
        try {
            parkingLotSystem.park();
        } catch (err) {
            assert.equal(err.message, `unknown vehicle parked.`);
        }
    });
    it(`should return true when UnPark their car to go home.`, () => {
        let car = new Object();
        let car1 = new Object();
        parkingLotSystem.park(car);
        parkingLotSystem.park(car1);
        let ans = parkingLotSystem.unPark(car)
        assert.equal(ans, true);
    });
    it(`should return true when UnPark particular car to go home.`, () => {
        let car = new Object(`0`);
        let car1 = new Object(`1`);
        let car2 = new Object(`2`);
        parkingLotSystem.park(car);
        parkingLotSystem.park(car1);
        parkingLotSystem.park(car2);
        let ans = parkingLotSystem.unPark(car2)
        assert.equal(ans, true);
    });
    it(`should return throw an exception when UnPark unknown vehicle.`, () => {
        try {
            let car = new Object();
            let car1 = new Object();
            parkingLotSystem.park(car);
            parkingLotSystem.park(car1);
            parkingLotSystem.unPark(new Object());
        } catch (error) {
            assert.equal(error.message, `unknown vehicle unParked.`);
        }
    });
    it(`should return throw an exception when null vehicle unPark.`, () => {
        try {
            let car = new Object();
            let car1 = new Object();
            parkingLotSystem.park(car);
            parkingLotSystem.park(car1);
            parkingLotSystem.unPark();
        } catch (error) {
            assert.equal(error.message, 'null or undefined car unParked.');
        }
    });
    it(`should return false when try to unPark unParked car.`, () => {
        try {
            let car10 = new Object();
            let car = [new Object(), new Object(), new Object()];
            car.map(car => {
                parkingLotSystem.park(car);
            })
            parkingLotSystem.unPark(car10);
        } catch (error) {
            assert.equal(error.message, 'unknown vehicle unParked.');
        }
    });
    it(`should return false when parking lot is full.`, () => {
        try {
            let car = [new Object(), new Object(), new Object(), new Object()];
            car.map(car => {
                parkingLotSystem.park(car);
            })
        } catch (error) {
            assert.equal(error.message, 'parking lot is full.');
        }
    });
    it(`should return false when parking lot is full and notify to parking lot owner.`, () => {
        try {
            let car = [new Object(), new Object(), new Object(), new Object()];
            car.map(car => {
                parkingLotSystem.park(car);
            })
        } catch (error) {
            assert.equal(error.message, 'parking lot is full.');
        }
    });
    it(`should return exception when parking lot is full and notify to airport security.`, () => {
        try {
            let car = [new Object(), new Object(), new Object(), new Object()];
            car.map(car => {
                parkingLotSystem.park(car);
            })
        } catch (error) {
            assert.equal(error.message, 'parking lot is full.');
        }
    });
    it(`should return exception when parking lot is full and again is available then notify to parking lot owner.`, () => {
        let car = [new Object(), new Object(), new Object()];
        car.map(car => {
            parkingLotSystem.park(car);
        })
        let ans = parkingLotSystem.unPark(car[2]);
        assert.equal(ans, true)
    });
    // --------------uc6----------------
    it(`should return true when park the car at particular position.`, () => {
        let car = [new Object(), new Object(), new Object()];
        car.map(car => {
            parkingLotSystem.park(car);
        })
        parkingLotSystem.unPark(car[1]);
        let emptySlots = parkingLotSystem.findEmptySlots();
        assert.equal(emptySlots, true)
    });
});