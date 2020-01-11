function sum(a, b) {
  return a + b;
}

function isAdult(age) {
  const error = new Error('wrong age');
  if ({}.toString.call(age) !== '[object Number]') return undefined;
  if (age > 17) return true;
  else if (age <= 0) return error;
  else return false;
}

function sortArrayUp(array = []) {
  const error = new Error('Invalid type of array\'s values');

  if ({}.toString.call(array) !== '[object Array]') return undefined;

  for (const el of array) {
    if ({}.toString.call(el) !== '[object Number]' || Number.isNaN(el)) return error;
  }
    

  return array.sort((a, b) => a - b);
}

function isPalindrome(word) {
  const error = new Error('Wrong input');

  if (Number.isNaN(word)) return error;

  if (typeof (word) === 'number') {
    return String(word) === String(word).split('').reverse().join('');
  }

  if ({}.toString.call(word) !== '[object String]') return error;

  return word === word.split('').reverse().join('');
}

function isOddNumber(number) {
  const error = new Error('Wrong input'); 

  if (Number.isNaN(number) || {}.toString.call(number) !== '[object Number]') return error;

  return number % 2 === 0 ? false : true;
}

function isEvenNumber(number) {
  const error = new Error('Wrong input');

  if (Number.isNaN(number) || {}.toString.call(number) !== '[object Number]') return error;

  return number % 2 === 0 ? true : false;
}

module.exports = {isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber};