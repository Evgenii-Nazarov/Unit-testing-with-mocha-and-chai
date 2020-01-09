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

    if ({}.toString.call(array) !== '[object Array]') return undefined;

    for (const el of array) {
        if ( {}.toString.call(el) !== '[object Number]' || Number.isNaN(el) ) return 'invalid element inside the array';
    };

    return array.sort((a,b) => a-b)
}

function isPalindrome (word) {

    if ( Number.isNaN(word) ) return 'Wrong argument';

    if ( typeof(word) === 'number' ) {
        return String(word) === String(word).split('').reverse().join('')
    }

    if ({}.toString.call(word) !== '[object String]') return 'Wrong argument';

    return word === word.split('').reverse().join('')
}

module.exports = {isAdult,sortArrayUp,isPalindrome};