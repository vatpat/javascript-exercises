const fibonacci = function(num) {
    if(typeof num == "string") {
        num = Number(num);
    }
    if(num < 0) {
        return "OOPS";
    }
    if(num == 1 | num == 2) {
        return 1;
    } else {
        let current = 2;
        let previous = 1;
        for(let i = 3; i < num; i++) {
            let temp = current;
            current += previous;
            previous = temp;
        }
        return current;
    }
};

// Do not edit below this line
module.exports = fibonacci;
