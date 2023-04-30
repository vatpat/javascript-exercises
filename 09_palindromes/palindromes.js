const palindromes = function (str) {
    let forwardString = str.toLowerCase().split("").reduce((accumulator, newValue) => {
        let code = newValue.charCodeAt(0);
        return code >= 97 && code <= 122
            ? accumulator + newValue
            : accumulator;
    });
    let reverseString = forwardString.split("").reduce((accumulator, newValue) => newValue + accumulator);
    return forwardString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
