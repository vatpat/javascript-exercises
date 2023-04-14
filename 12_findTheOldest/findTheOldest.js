const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let oldestBirth = oldest.yearOfBirth == undefined ? 2023 : oldest.yearOfBirth;
        let oldestDeath = oldest.yearOfDeath == undefined ? 2023 : oldest.yearOfDeath;
        let currentBirth = current.yearOfBirth == undefined ? 2023 : current.yearOfBirth;
        let currentDeath = current.yearOfDeath == undefined ? 2023 : current.yearOfDeath;
        return (currentDeath - currentBirth) > (oldestDeath - oldestBirth) ? current : oldest; 
    });
};

// Do not edit below this line
module.exports = findTheOldest;
