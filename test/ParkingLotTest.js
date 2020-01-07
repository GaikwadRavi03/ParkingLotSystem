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
    // -----------uc12----------------
    it(`should return true when police dept get white cars to investigate. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle('Normal', 'Red'),
            new Vehicle('Normal', 'Blue'),
            new Vehicle('Normal', 'White'),
            new Vehicle('Normal', 'Yellow'),
            new Vehicle('Normal', 'White'),
            new Vehicle('Normal', 'Blue'),
            new Vehicle('Normal', 'White'),
            new Vehicle('Normal', 'Yellow'),
            new Vehicle('Normal', 'Yellow')];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let whiteCar = parkingLotSystem.findCarsWithColor('White');
        assert.equal(whiteCar[0].lot, 2)
        assert.equal(whiteCar[0].slot, 0)
        assert.equal(whiteCar[1].lot, 1)
        assert.equal(whiteCar[1].slot, 1)
        assert.equal(whiteCar[2].lot, 0)
        assert.equal(whiteCar[2].slot, 2)
    });
    it(`should return false when police dept dosen't get white cars. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle('Normal', 'Red'), new Vehicle('Normal', 'Yellow'), new Vehicle('Normal', 'Black'), new Vehicle('Normal', 'Blue'), new Vehicle('Normal', 'Red'), new Vehicle('Normal', 'Yellow'), new Vehicle('Normal', 'Black'), new Vehicle('Normal', 'Blue'), new Vehicle('Normal', 'Blue')];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let whiteCar = parkingLotSystem.findCarsWithColor('White');
        assert.equal(whiteCar, '')
    });
    // -----------uc13----------------
    it(`should return true when police dept get Blue cars with toyota company to investigate. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', 'Ram'),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', 'Sham'),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', 'Salim'),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', 'Mangesh'),
            new Vehicle('Normal', 'Red', 'BWM', '1115', 'Suraj'),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', 'Akshay'),
            new Vehicle('Normal', 'Black', 'BWM', '1117', 'LaxMan'),
            new Vehicle('Normal', 'Blue', 'Toyota', '1118', 'Ravi'),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', 'Kumud')];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let blueCar = parkingLotSystem.findCarsWithColorAndCarName('Blue', 'Toyota');
        assert.equal(blueCar[0].vehicleNumber, '1118')
        assert.equal(blueCar[0].vehicleDriverName, 'Ravi')
    });
    it(`should return false when police dept dosen't get Blue cars with toyota company to investigate. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', 'Ram'),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', 'Sham'),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', 'Salim'),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', 'Mangesh'),
            new Vehicle('Normal', 'Red', 'BWM', '1115', 'Suraj'),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', 'Akshay'),
            new Vehicle('Normal', 'Black', 'BWM', '1117', 'LaxMan'),
            new Vehicle('Normal', 'Blue', 'Honda', '1118', 'Ravi'),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', 'Kumud')];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let whiteCar = parkingLotSystem.findCarsWithColorAndCarName('Blue', 'Toyota');
        assert.equal(whiteCar, '')
    });
    // -----------uc14----------------
    it(`should return array of drivers names when police dept get Blue cars with toyota company to investigate. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', 'Ram'),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', 'Sham'),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', 'Salim'),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', 'Mangesh'),
            new Vehicle('Normal', 'Red', 'BMW', '1115', 'Suraj'),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', 'Akshay'),
            new Vehicle('Normal', 'Black', 'BMW', '1117', 'LaxMan'),
            new Vehicle('Normal', 'Blue', 'Toyota', '1118', 'Ravi'),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', 'Kumud')];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let vehiclePosition = parkingLotSystem.findCarsWithCarCompanyName('BMW');
        assert.equal(vehiclePosition[0], 'Suraj')
        assert.equal(vehiclePosition[1], 'LaxMan')
    });
    it(`should return fasle when police dept dosen't get Blue cars with toyota company to investigate. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', 'Ram'),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', 'Sham'),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', 'Salim'),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', 'Mangesh'),
            new Vehicle('Normal', 'Red', 'Lamborgini', '1115', 'Suraj'),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', 'Akshay'),
            new Vehicle('Normal', 'Black', 'Bugati', '1117', 'LaxMan'),
            new Vehicle('Normal', 'Blue', 'Toyota', '1118', 'Ravi'),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', 'Kumud')];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let vehiclePosition = parkingLotSystem.findCarsWithCarCompanyName('BMW');
        assert.equal(vehiclePosition, '')
    });
    // -----------uc15----------------
    it(`should return true when police dept get cars with park last 30 min so that investigate a bomb threat. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', 'Ram', '2:00'),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', 'Sham', '2:15'),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', 'Salim', '2:45'),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', 'Mangesh', '2:59'),
            new Vehicle('Normal', 'Red', 'BMW', '1115', 'Suraj', '3:00'),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', 'Akshay', '3:15'),
            new Vehicle('Normal', 'Black', 'BMW', '1117', 'LaxMan', '3:20'),
            new Vehicle('Normal', 'Blue', 'Toyota', '1118', 'Ravi', '3:25'),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', 'Kumud', '3:29')];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let vehiclePosition = parkingLotSystem.findParkedCarsWithLast30Min();
        assert.equal(vehiclePosition[0], 'Suraj')
        assert.equal(vehiclePosition[1], 'Akshay')
        assert.equal(vehiclePosition[2], 'LaxMan')
        assert.equal(vehiclePosition[3], 'Ravi')
        assert.equal(vehiclePosition[4], 'Kumud')
    });
    it(`should return false when no car park in last 30 min. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3]);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', 'Ram', '2:00'),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', 'Sham', '2:15'),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', 'Salim', '2:45'),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', 'Mangesh', '2:59'),
            new Vehicle('Normal', 'Red', 'BMW', '1115', 'Suraj', '3:31'),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', 'Akshay', '3:35'),
            new Vehicle('Normal', 'Black', 'BMW', '1117', 'LaxMan', '3:45'),
            new Vehicle('Normal', 'Blue', 'Toyota', '1118', 'Ravi', '3:59'),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', 'Kumud', '4:10')];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let vehiclePosition = parkingLotSystem.findParkedCarsWithLast30Min();
        assert.equal(vehiclePosition, '')
    });
});