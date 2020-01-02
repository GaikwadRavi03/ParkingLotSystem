class ParkingLotOwner {
    notify(flag) {
        let parkingFullFlag = flag;
        if (parkingFullFlag == true) {
            console.log('notification to vehicle owner :- parking lot is full.')
        }
    }
}

module.exports = ParkingLotOwner;