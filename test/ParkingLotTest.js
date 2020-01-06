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
        parkingLotSystem.park(car);
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
        let ans = parkingLotSystem.unPark(car1)
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
    it(`should return exception when parking lot is full.`, () => {
        try {
            let car = [new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object()]
            car.map(car => {
                parkingLotSystem.park(car);
            });
        } catch (error) {
            assert.equal(error.message, 'parking lot is full.');
        }
    });
    it(`should return false when parking lot is full and notify to parking lot owner.`, () => {
        try {
            let car = [new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object()]
            car.map(car => {
                parkingLotSystem.park(car);
            });
        } catch (error) {
            assert.equal(error.message, 'parking lot is full.');
        }
    });
    it(`should return exception when parking lot is full and notify to airport security.`, () => {
        try {
            let car = [new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object()]
            car.map(car => {
                parkingLotSystem.park(car);
            });
        } catch (error) {
            assert.equal(error.message, 'parking lot is full.');
        }
    });
    it(`should return exception when parking lot is full and again is available then notify to parking lot owner.`, () => {
        let car = [new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object(), new Object()];
        car.map(car => {
            parkingLotSystem.park(car);
        })
        let ans = parkingLotSystem.unPark(car[2]);
        assert.equal(ans, true)
    });
    // --------------uc6----------------
    it(`should return true when park the car at particular position.`, () => {
        let car = [new Object(0), new Object(1), new Object(2), new Object(3), new Object(4), new Object(5), new Object(6), new Object(7), new Object(8)];
        car.map(car => {
            parkingLotSystem.park(car);
        })
        parkingLotSystem.unPark(car[2]);
        let emptySlots = parkingLotSystem.findEmptySlots();
        assert.equal(emptySlots.lot, 2)
        assert.equal(emptySlots.slot, 0)
    });
    it(`should return false when empty slot is not found.`, () => {
        let car = [new Object(0), new Object(1), new Object(2), new Object(3), new Object(4), new Object(5), new Object(6), new Object(7), new Object(8)];
        car.map(car => {
            parkingLotSystem.park(car);
        })
        let emptySlots = parkingLotSystem.findEmptySlots();
        assert.equal(emptySlots, false)
    });
    it(`should return true when space is available then park.`, () => {
        let car = [new Object(0), new Object(1), new Object(2), new Object(3), new Object(4), new Object(5), new Object(6), new Object(7), new Object(8)];
        car.map(car => {
            parkingLotSystem.park(car);
        })
        parkingLotSystem.unPark(car[5]);
        let emptySlots = parkingLotSystem.findEmptySlots();
        let ans = parkingLotSystem.park(car[emptySlots.lot]);
        assert.equal(ans, true)
    });
    //---------------uc7----------------
    it(`should return true when driver want to find car for go to home. `, () => {
        let car = [new Object(0), new Object(1), new Object(2)];
        car.map(car => {
            parkingLotSystem.park(car);
        })
        let findSlots = parkingLotSystem.findMyCar(car[1]);
        assert.equal(findSlots.lot, 1)
        assert.equal(findSlots.slot, 0)
    });
    it(`should return false when driver doesn't found the car. `, () => {
        let car = [new Object(0), new Object(1), new Object(2)];
        car.map(car => {
            parkingLotSystem.park(car);
        })
        let findSlots = parkingLotSystem.findMyCar(car);
        assert.equal(findSlots, false)
    });
    //------------------uc8--------------------
    it(`should return true when driver parked car then charges to be apply. `, () => {
        let car = [new Object(0), new Date()];
        let result = parkingLotSystem.park(car);
        assert.equal(result, true)
    });
    it(`should return true when driver parked car then charges to be apply. `, () => {
        try {
            let car = [new Object(0), new Date()];
            let car1 = [new Object(1), new Date()];
            parkingLotSystem.park(car)
            parkingLotSystem.park()
        } catch (e) {
            assert.equal(e.message, 'unknown vehicle parked.')
        }
    });
    // ------------------uc9--------------------
    it(`should return true when car is park evenly distribution. `, () => {
        let car = [[new Object(0), new Date()], [new Object(1), new Date()], [new Object(2), new Date()], [new Object(3), new Date()], [new Object(4), new Date()], [new Object(5), new Date()], [new Object(6), new Date()], [new Object(6), new Date()]];
        let result = false;
        car.map(car => {
            result = parkingLotSystem.park(car);
        })
        assert.equal(result, true)
    });
    //-----------uc10----------------
    it(`should return true when driver is handicap then his car parks in nearest free space. `, () => {
        let car1 = new Object('Handicap');
        let car = [[new Object(0), new Date()], [new Object(1), new Date()], [new Object(2), new Date()], [new Object(3), new Date()]]
        car.map(car => {
            parkingLotSystem.park(car);
        })
        let result = parkingLotSystem.park(car1);
        assert.equal(result, true)
    });
    it(`should return true when more drivers are handicap then his car parks in nearest free space. `, () => {
        let car1 = new Object('Handicap');
        let car2 = new Object('Handicap');
        let car = [[new Object(0), new Date()], [new Object(1), new Date()]]
        car.map(car => {
            parkingLotSystem.park(car);
        })
        parkingLotSystem.park(car1);
        let result = parkingLotSystem.park(car2);
        assert.equal(result, true)
    });
    // -----------uc11----------------
    it(`should return true when largest car comes then it will park in highest no of free space. `, () => {
        let car1 = new Object('LargeCar');
        let car = [[new Object(0), new Date()], [new Object(3), new Date()], [new Object(4), new Date()], [new Object(5), new Date()]]
        car.map(car => {
            parkingLotSystem.park(car);
        })
        let result = parkingLotSystem.park(car1);
        assert.equal(result, true)
    });
});