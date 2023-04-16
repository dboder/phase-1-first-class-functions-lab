// Code your solution in this file!
function createFareMultiplier(num){
    return function (fare) {
        return fare * num;
    }
}

function selectDifferentDrivers(list, funct){
    return funct(list);
}

const arr =['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers  =  (arr) => [arr[0],arr[1]]; 

const returnLastTwoDrivers = (arr) => [arr[arr.length-2], arr[arr.length-1]];; 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


// console.log(selectingDrivers[0]);
// console.log(selectingDrivers[1]);
// console.log(returnLastTwoDrivers(["blah1", "blah2","blah3","blah4","blah5",]));