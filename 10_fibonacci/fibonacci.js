const fibonacci = function(num) {
    if(num < 0) {
        return "OOPS";
    } else if(num == 1 || num == 2) {
        return 1;
    }

    let first = 1;
    let second = 1;
    for(let i = 3; i <= num; i++) {
        let temp = second;
        second = second + first;
        first = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
