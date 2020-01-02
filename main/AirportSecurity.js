let parkingFullFlag;

class AirportSecurity {
    slotFull() {
        parkingFullFlag = true;
        console.log('notification to airport security :- parking lot is full.')
        return parkingFullFlag;
    }
}

module.exports = AirportSecurity;