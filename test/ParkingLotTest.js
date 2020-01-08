let assert = require(`assert`);
let ParkingLotSystem = require(`../main/ParkingLotSystem`);
let Vehicle = require(`../main/Vehicle`);
let driverType = require('../main/TypesOfVehicle')
let Driver = require('../main/Driver');
let Time = require('../main/Time');

let carParkTime =  (minutes) => {
    return new Date(new Date().getTime() - minutes * 60000);
}

describe(`describe Mocha Test for parking lot`, () => {
    it(`should return true when park their car to catch the flight.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = new Vehicle();
        let ans = parkingLotSystem.park(car, driverType.type.NORMAL);
        assert.equal(ans, true);
    });
    it(`should return false when no Vehicle() park.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        try {
            parkingLotSystem.park();
        } catch (err) {
            assert.equal(err.message, `unknown vehicle parked.`);
        }
    });
    it(`should return true when UnPark their car to go home.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = new Vehicle();
        parkingLotSystem.park(car, driverType.type.NORMAL);
        let ans = parkingLotSystem.unPark(car)
        assert.equal(ans, true);
    });
    it(`should return true when UnPark particular car to go home.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle(0), new Vehicle(1), new Vehicle(2), new Vehicle(3), new Vehicle(4), new Vehicle(5), new Vehicle(6), new Vehicle(7), new Vehicle(8)];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let ans = parkingLotSystem.unPark(car[2]);
        assert.equal(ans, true)
    });
    // // --------------uc6----------------
    it(`should return true when park the car at particular position.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle(), new Vehicle()];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let emptySlots = parkingLotSystem.findEmptySlots();
        assert.equal(emptySlots, false)
    });
    it(`should return true when space is available then park.`, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle(), new Vehicle(), new Object(2)];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let findSlots = parkingLotSystem.findMyCar(car[1]);
        assert.equal(findSlots.lot, 1)
        assert.equal(findSlots.slot, 0)
    });
    it(`should return false when driver doesn't found the car. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle(), new Vehicle(), new Object(2)];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let findSlots = parkingLotSystem.findMyCar(car);
        assert.equal(findSlots, false)
    });
    //------------------uc8--------------------
    it(`should return true when driver parked car then charges to be apply. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle(), new Date()];
        let result = parkingLotSystem.park(car, driverType.type.NORMAL);
        assert.equal(result, true)
    });
    it(`should return true when driver parked car then charges to be apply. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [[new Vehicle(), new Date()], [new Vehicle(), new Date()], [new Object(2), new Date()], [new Object(3), new Date()], [new Object(4), new Date()], [new Object(5), new Date()], [new Object(6), new Date()], [new Object(6), new Date()]];
        let result = false;
        car.map(car => {
            result = parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        assert.equal(result, true)
    });
    //-----------uc10----------------
    it(`should return true when driver is handicap then his car parks in nearest free space. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car1 = new Vehicle();
        let car = [[new Vehicle(), new Date()], [new Vehicle(), new Date()], [new Object(2), new Date()], [new Object(3), new Date()]]
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.HANDICAP);
        })
        let result = parkingLotSystem.park(car1, driverType.type.HANDICAP);
        assert.equal(result, true)
    });
    it(`should return true when more drivers are handicap then his car parks in nearest free space. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle('Normal', 'Red'), new Vehicle('Normal', 'Yellow'), new Vehicle('Normal', 'Black'), new Vehicle('Normal', 'Blue'), new Vehicle('Normal', 'Red'), new Vehicle('Normal', 'Yellow'), new Vehicle('Normal', 'Black'), new Vehicle('Normal', 'Blue'), new Vehicle('Normal', 'Blue')];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let whiteCar = parkingLotSystem.findCarsWithColor('White');
        assert.equal(whiteCar, '')
    });
    // -----------uc13----------------
    it(`should return true when police dept get Blue cars with toyota company to investigate. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', new Driver('Ram')),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', new Driver('Sham')),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', new Driver('Salim')),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', new Driver('Mangesh')),
            new Vehicle('Normal', 'Red', 'BWM', '1115', new Driver('Suraj')),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', new Driver('Akshay')),
            new Vehicle('Normal', 'Black', 'BWM', '1117', new Driver('LaxMan')),
            new Vehicle('Normal', 'Blue', 'Toyota', '1118', new Driver('Ravi')),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', new Driver('Kumud'))];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let blueCar = parkingLotSystem.findCarsWithColorAndCarName('Blue', 'Toyota');
        assert.equal(blueCar[0].vehicleNumber, '1118')
        assert.equal(blueCar[0].driver.driverName, 'Ravi')
    });
    it(`should return false when police dept dosen't get Blue cars with toyota company to investigate. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
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
    it(`should return array of drivers names which haves BMW cars. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', new Driver('Prince')),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', new Driver('Nakka')),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', new Driver('Salim')),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', new Driver('Mangesh')),
            new Vehicle('Normal', 'Red', 'BMW', '1115', new Driver('Suraj')),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', new Driver('Akshay')),
            new Vehicle('Normal', 'Black', 'BMW', '1117', new Driver('LaxMan')),
            new Vehicle('Normal', 'Blue', 'Toyota', '1118', new Driver('Ravi')),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', new Driver('Kumud'))];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let vehiclePosition = parkingLotSystem.findCarsWithCarCompanyName('BMW');
        console.log(vehiclePosition)
        assert.equal(vehiclePosition[0].driver.driverName, 'Suraj')
        assert.equal(vehiclePosition[1].driver.driverName, 'LaxMan')
    });
    it(`should return false when drivers don't haves BMW cars. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', new Driver('Prince')),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', new Driver('Nakka')),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', new Driver('Salim')),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', new Driver('Mangesh')),
            new Vehicle('Normal', 'Red', 'Lamborgini', '1115', new Driver('Suraj')),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', new Driver('Akshay')),
            new Vehicle('Normal', 'Black', 'Fortuner', '1117', new Driver('LaxMan')),
            new Vehicle('Normal', 'Blue', 'Farari', '1118', new Driver('Ravi')),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', new Driver('Kumud'))];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let vehiclePosition = parkingLotSystem.findCarsWithCarCompanyName('BMW');
        assert.equal(vehiclePosition, '')
    });
    // -----------uc15----------------
    it(`should return true when police dept get cars with park last 30 min so that investigate a bomb threat. `, () => {
        let parkingLotSystem = new ParkingLotSystem(3, [3, 3, 3], 9);
        let car = [new Vehicle('Normal', 'Red', 'TATA', '1111', new Driver('Prince'), new Time(carParkTime(55).toString())),
            new Vehicle('Normal', 'Yellow', 'Maruti', '1112', new Driver('Nakka'), new Time(carParkTime(45).toString())),
            new Vehicle('Normal', 'Black', 'Toyota', '1113', new Driver('Salim'), new Time(carParkTime(40).toString())),
            new Vehicle('Normal', 'Blue', 'TATA', '1114', new Driver('Mangesh'), new Time(carParkTime(35).toString())),
            new Vehicle('Normal', 'Red', 'BMW', '1115', new Driver('Suraj'), new Time(carParkTime(30).toString())),
            new Vehicle('Normal', 'Yellow', 'Audi', '1116', new Driver('Akshay'), new Time(carParkTime(25).toString())),
            new Vehicle('Normal', 'Black', 'BMW', '1117', new Driver('LaxMan'), new Time(carParkTime(20).toString())),
            new Vehicle('Normal', 'Blue', 'Toyota', '1118', new Driver('Ravi'), new Time(carParkTime(15).toString())),
            new Vehicle('Normal', 'Blue', 'Audi', '1119', new Driver('Kumud'), new Time(carParkTime(10).toString()))];
        car.map(car => {
            parkingLotSystem.park(car, driverType.type.NORMAL);
        })
        let vehiclePosition = parkingLotSystem.findParkedCarsWithLast30Min();
        console.log(vehiclePosition)
        assert.equal(vehiclePosition[0].driver.driverName, 'Prince')
        assert.equal(vehiclePosition[1].driver.driverName, 'Nakka')
        assert.equal(vehiclePosition[2].driver.driverName, 'Salim')
        assert.equal(vehiclePosition[3].driver.driverName, 'Mangesh')
        assert.equal(vehiclePosition[4].driver.driverName, 'Suraj')
    });
    // -----------uc16----------------
    it(`should return true when police dept get cars with park last 30 min so that investigate a bomb threat. `, () => {
        let parkingLotSystem = new ParkingLotSystem(4, [4, 4, 4, 4], 16);
        let car1 = new Vehicle('Normal', 'Red', 'TATA', '1111', new Driver('Prince'), new Time(carParkTime(55).toString()));
        let car2 = new Vehicle('Normal', 'Yellow', 'Maruti', '1112', new Driver('Nakka'), new Time(carParkTime(45).toString()));
        let car3 = new Vehicle('Normal', 'Black', 'Toyota', '1113', new Driver('Salim'), new Time(carParkTime(40).toString()));
        let car4 = new Vehicle('Normal', 'Blue', 'TATA', '1114', new Driver('Mangesh'), new Time(carParkTime(35).toString()));
        let car5 = new Vehicle('LargeCar', 'Red', 'BMW', '1115', new Driver('Suraj'), new Time(carParkTime(25).toString()));
        let car6 = new Vehicle('Normal', 'Yellow', 'Audi', '1116', new Driver('Akshay'), new Time(carParkTime(20).toString()));
        let car7 = new Vehicle('Normal', 'Black', 'BMW', '1117', new Driver('LaxMan'), new Time(carParkTime(15).toString()));
        let car8 = new Vehicle('Normal', 'Blue', 'Toyota', '1118', new Driver('Ravi'), new Time(carParkTime(10).toString()));
        let car9 = new Vehicle('Normal', 'Red', 'TATA', '1111', new Driver('Prince J'), new Time(carParkTime(55).toString()));
        let car10 = new Vehicle('LargeCar', 'Yellow', 'Maruti', '1112', new Driver('Nakka S'), new Time(carParkTime(45).toString()));
        let car11 = new Vehicle('Normal', 'Black', 'Toyota', '1113', new Driver('Salim F'), new Time(carParkTime(40).toString()));
        let car12 = new Vehicle('Normal', 'Blue', 'TATA', '1114', new Driver('Mangesh V'), new Time(carParkTime(35).toString()));
        let car13 = new Vehicle('Normal', 'Red', 'BMW', '1115', new Driver('Suraj N'), new Time(carParkTime(25).toString()));
        let car14 = new Vehicle('Normal', 'Yellow', 'Audi', '1116', new Driver('Akshay B'), new Time(carParkTime(20).toString()));
        let car15 = new Vehicle('Normal', 'Black', 'BMW', '1117', new Driver('LaxMan C'), new Time(carParkTime(15).toString()));
        let car16 = new Vehicle('LargeCar', 'Blue', 'Toyota', '1118', new Driver('Ravi G'), new Time(carParkTime(10).toString()));
        parkingLotSystem.park(car1, driverType.type.HANDICAP);
        parkingLotSystem.park(car2, driverType.type.NORMAL);
        parkingLotSystem.park(car3, driverType.type.NORMAL);
        parkingLotSystem.park(car4, driverType.type.NORMAL);
        parkingLotSystem.park(car5, driverType.type.HANDICAP);
        parkingLotSystem.park(car6, driverType.type.NORMAL);
        parkingLotSystem.park(car7, driverType.type.NORMAL);
        parkingLotSystem.park(car8, driverType.type.NORMAL);
        parkingLotSystem.park(car9, driverType.type.NORMAL);
        parkingLotSystem.park(car10, driverType.type.NORMAL);
        parkingLotSystem.park(car11, driverType.type.NORMAL);
        parkingLotSystem.park(car12, driverType.type.NORMAL);
        parkingLotSystem.park(car13, driverType.type.NORMAL);
        parkingLotSystem.park(car14, driverType.type.NORMAL);
        parkingLotSystem.park(car15, driverType.type.NORMAL);
        parkingLotSystem.park(car16, driverType.type.NORMAL);
        let vehiclePosition = parkingLotSystem.findParkedCarsWithLast30Min();
        assert.equal(vehiclePosition[0].driver.driverName, 'Prince')
    });
});