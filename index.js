// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = drivers => {
    const lastTwo = drivers.slice(-2);
    return lastTwo;
}  

const selectingDrivers = (drivers) =>{
returnFirstTwoDrivers(drivers);
returnLastTwoDrivers(drivers);
}