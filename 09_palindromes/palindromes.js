const palindromes = function (str) {
    let punctuation = [".", ",", "!", "?", ";", ":", "-", "\"", "\'", " "];
    punctuation.forEach(punc => str = str.split(punc).join(""));
    str = str.toLowerCase();
    for(let i = 0; i < Math.floor(str.length / 2); i++) {
        if(str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
