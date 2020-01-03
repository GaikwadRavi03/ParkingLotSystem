let parkingFullFlag;

class ParkingLotOwner {
    notifySlotFull() {
        parkingFullFlag = true;
        console.log('notification to parking lot owner :- parking lot is full.')
        return parkingFullFlag;
    }

    notifySlotEmpty() {
        parkingFullFlag = false;
        console.log('notification to parking lot owner :- parking lot is available.')
        return parkingFullFlag;
    }
}

module.exports = ParkingLotOwner;