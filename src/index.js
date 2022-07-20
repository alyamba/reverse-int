module.exports = function reverse(number) {
    let reverseNumber = "";
    number = Math.abs(number);
    while (number != 0) {
        reverseNumber = reverseNumber.concat(number % 10);
        number = Math.trunc(number / 10);
    }
    return reverseNumber;
};
