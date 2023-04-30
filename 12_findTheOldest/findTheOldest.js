const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    return people.reduce((accumulator, currentValue) => {
        let accumulatorAge = accumulator.yearOfDeath 
            ? accumulator.yearOfDeath - accumulator.yearOfBirth 
            : currentYear - accumulator.yearOfBirth;
        let currentValueAge = currentValue.yearOfDeath 
            ? currentValue.yearOfDeath - currentValue.yearOfBirth 
            : currentYear - currentValue.yearOfBirth;
        return accumulatorAge > currentValueAge ? accumulator : currentValue;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
