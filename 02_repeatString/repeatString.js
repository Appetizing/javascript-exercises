const repeatString = function(word, count) {
    let message = '';
    if(count >= 0) {
        for(let i = 0; i < count; i++) {
            message += word;
        }
        return message;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
