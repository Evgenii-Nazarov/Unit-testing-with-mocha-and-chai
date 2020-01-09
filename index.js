function sum(a, b) {
    return a + b;
}

function isAdult (age) {
    if ( {}.toString.call(age) !== '[object Number]'  ) return undefined;
    if (age > 17) return true;
    else if (age <= 0) return 'wrong age';
    else return false;
}

module.exports = {isAdult};