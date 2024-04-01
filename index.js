// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = drivers => {
    const lastTwo = drivers.slice(-2);
    return lastTwo;
}  

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = x => {
    return function (fare){
        return fare*x;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler =  createFareMultiplier(3);
const tripledFare = fareTripler();
const selectDifferentDrivers =(drivers ,returnDrivers) => {
    return returnDrivers(drivers);
}