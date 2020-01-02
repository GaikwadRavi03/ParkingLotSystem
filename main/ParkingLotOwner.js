let parkingFullFlag;

class ParkingLotOwner {
    slotFull() {
        parkingFullFlag = true;
        console.log('notification to airport security :- parking lot is full.')
        return parkingFullFlag;
    }

    slotEmpty() {
        parkingFullFlag = false;
        console.log('notification to airport security :- parking lot is available.')
        return parkingFullFlag;
    }
}

module.exports = ParkingLotOwner;