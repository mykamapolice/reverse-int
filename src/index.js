module.exports = function reverse (n) {
    n = n + '';
    var revstr = n.split('').reverse().join('');
    var Number = parseInt(revstr, 10);
    return Number;
};