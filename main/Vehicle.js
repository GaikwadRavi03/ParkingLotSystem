
class Vehicle {
    constructor(vehicleType, vehicleColor, vehicleName, vehicleNumber, driverName, parkTime) {
        this.vehicleType = vehicleType;
        this.vehicleColor = vehicleColor;
        this.vehicleName = vehicleName;
        this.vehicleNumber = vehicleNumber;
        this.driver = driverName;
        this.time = parkTime;
    }
}

module.exports = Vehicle;