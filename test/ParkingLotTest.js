let assert = require(`assert`);
let ParkingLotSystem = require(`../main/ParkingLotSystem`);
let Vehicle = require(`../main/Vehicle`);
let driverType = require('../main/TypesOfVehicle')

describe(`describe Mocha Test for parking lot`, () => {
    it(`should return true when park their car to catch the flight.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = new Vehicle();
        let ans = parkingLotSystem.park(car, driverType.type.NORMAL);
        assert.equal(ans, true);
    });
    it(`should return false when no Vehicle() park.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        try {
            parkingLotSystem.park();
        } catch (err) {
            assert.equal(err.message, `unknown vehicle parked.`);
        }
    });
    it(`should return true when UnPark their car to go home.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = new Vehicle();
        parkingLotSystem.park(car, driverType.type.NORMAL);
        let ans = parkingLotSystem.unPark(car)
        assert.equal(ans, true);
    });
    it(`should return true when UnPark particular car to go home.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = new Vehicle();
        let car1 = new Vehicle();
        let car2 = new Vehicle();
        parkingLotSystem.park(car, driverType.type.NORMAL);
        parkingLotSystem.park(car1, driverType.type.NORMAL);
        parkingLotSystem.park(car2, driverType.type.NORMAL,);
        let ans = parkingLotSystem.unPark(car1)
        assert.equal(ans, true);
    });
    it(`should return throw an exception when UnPark unknown Vehicle().`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        try {
            let car = new Vehicle();
            let car1 = new Vehicle();
            let car2 = new Vehicle();
            parkingLotSystem.park(car, driverType.type.NORMAL);
            parkingLotSystem.park(car1, driverType.type.NORMAL);
            parkingLotSystem.unPark(car2, driverType.type.NORMAL);
        } catch (error) {
            assert.equal(error.message, `unknown vehicle unParked.`);
        }
    });
    it(`should return throw an exception when null vehicle unPark.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        try {
            let car = new Vehicle();
            let car1 = new Vehicle();
            parkingLotSystem.park(car, driverType.type.NORMAL);
            parkingLotSystem.park(car1, driverType.type.NORMAL);
            parkingLotSystem.unPark();
        } catch (error) {
            assert.equal(error.message, 'null or undefined car unParked.');
        }
    });
    it(`should return false when try to unPark unParked car.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        try {
            let car10 = new Vehicle();
            let car = [new Vehicle(), new Vehicle(), new Vehicle()];
            car.map(car => {
                parkingLotSystem.park(car, driverType.type.NORMAL);
            })
            parkingLotSystem.unPark(car10);
        } catch (error) {
            assert.equal(error.message, 'unknown vehicle unParked.');
        }
    });
    it(`should return exception when parking lot is full.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        try {
            let car = [new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle()]
            car.map(car => {
                parkingLotSystem.park(car, driverType.type.NORMAL);
            });
        } catch (error) {
            assert.equal(error.message, 'parking lot is full.');
        }
    });
    it(`should return false when parking lot is full and notify to parking lot owner.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        try {
            let car = [new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle()]
            car.map(car => {
                parkingLotSystem.park(car, driverType.type.NORMAL);
            });
        } catch (error) {
            assert.equal(error.message, 'parking lot is full.');
        }
    });
    it(`should return exception when parking lot is full and notify to airport security.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        try {
            let car = [new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle()]
            car.map(car => {
                parkingLotSystem.park(car, driverType.type.NORMAL);
            });
        } catch (error) {
            assert.equal(error.message, 'parking lot is full.');
        }
    });
    it(`should return exception when parking lot is full and again is available then notify to parking lot owner.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle(0), new Vehicle(1), new Vehicle(2), new Vehicle(3), new Vehicle(4), new Vehicle(5), new Vehicle(6), new Vehicle(7), new Vehicle(8)];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let ans = parkingLotSystem.unPark(car[2]);
        assert.equal(ans, true)
    });
    // // --------------uc6----------------
    it(`should return true when park the car at particular position.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle()];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        parkingLotSystem.unPark(car[2]);
        let emptySlots = parkingLotSystem.findEmptySlots();
        assert.equal(emptySlots.lot, 2)
        assert.equal(emptySlots.slot, 0)
    });
    it(`should return false when empty slot is not found.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle()];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let emptySlots = parkingLotSystem.findEmptySlots();
        assert.equal(emptySlots, false)
    });
    it(`should return true when space is available then park.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle()];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        parkingLotSystem.unPark(car[5]);
        let emptySlots = parkingLotSystem.findEmptySlots();
        let ans = parkingLotSystem.park(car[emptySlots.lot], driverType.type.NORMAL);
        assert.equal(ans, true)
    });
    //---------------uc7----------------
    it(`should return true when driver want to find car for go to home. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle(), new Vehicle(), new Object(2)];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let findSlots = parkingLotSystem.findMyCar(car[1]);
        assert.equal(findSlots.lot, 1)
        assert.equal(findSlots.slot, 0)
    });
    it(`should return false when driver doesn't found the car. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle(), new Vehicle(), new Object(2)];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let findSlots = parkingLotSystem.findMyCar(car);
        assert.equal(findSlots, false)
    });
    //------------------uc8--------------------
    it(`should return true when driver parked car then charges to be apply. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle(), new Date()];
        let result = parkingLotSystem.park(car, driverType.type.NORMAL);
        assert.equal(result, true)
    });
    it(`should return true when driver parked car then charges to be apply. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        try {
            let car = [new Vehicle(), new Date()];
            let car1 = [new Vehicle(), new Date()];
            parkingLotSystem.park(car, driverType.type.NORMAL)
            parkingLotSystem.park()
        } catch (e) {
            assert.equal(e.message, 'unknown vehicle parked.')
        }
    });
    // ------------------uc9--------------------
    it(`should return true when car is park evenly distribution. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [[new Vehicle(), new Date()], [new Vehicle(), new Date()], [new Object(2), new Date()], [new Object(3), new Date()], [new Object(4), new Date()], [new Object(5), new Date()], [new Object(6), new Date()], [new Object(6), new Date()]];
        let result = false;
        car.map(car => {
            result = parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        assert.equal(result, true)
    });
    //-----------uc10----------------
    it(`should return true when driver is handicap then his car parks in nearest free space. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car1 = new Vehicle();
        let car = [[new Vehicle(), new Date()], [new Vehicle(), new Date()], [new Object(2), new Date()], [new Object(3), new Date()]]
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.HANDICAP);
        })
        let result = parkingLotSystem.park(car1, driverType.type.HANDICAP);
        assert.equal(result, true)
    });
    it(`should return true when more drivers are handicap then his car parks in nearest free space. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car1 = new Vehicle();
        let car2 = new Vehicle();
        let car = [[new Vehicle(), new Date()], [new Vehicle(), new Date()]]
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        parkingLotSystem.park(car1, driverType.type.HANDICAP);
        let result = parkingLotSystem.park(car2, driverType.type.HANDICAP);
        assert.equal(result, true)
    });
    // -----------uc11----------------
    it(`should return true when largest car comes then it will park in highest no of free space. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car1 = new Vehicle('LargeCar');
        let car = [[new Vehicle(), new Date()], [new Vehicle(), new Date()], [new Vehicle(), new Date()], [new Vehicle(), new Date()]]
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let result = parkingLotSystem.park(car1, driverType.type.NORMAL);
        assert.equal(result, true)
    });
});