function sum(a, b) {
    return a + b;
}

function isAdult (age) {
    if ( {}.toString.call(age) !== '[object Number]'  ) return undefined;
    if (age > 17) return true;
    else if (age <= 0) return 'wrong age';
    else return false;
}

function sortArrayUp (array= []) {
    for (const el of array) {
        if ( {}.toString.call(el) !== '[object Number]' || !Number.isNaN(el) ) return 'invalid element inside the array';
    };

    if ({}.toString.call(array) !== '[object Array]') return undefined;
    else return array.sort((a,b) => a-b)
}



module.exports = {isAdult,sortArrayUp};