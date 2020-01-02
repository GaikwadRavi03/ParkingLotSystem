class AirportSecurity {
    notify(flag) {
        let parkingFullFlag = flag;
        if (parkingFullFlag == true) {
            console.log('notification to airport security :- parking lot is full.')
        }
    }
}

module.exports = AirportSecurity;