//const assert = require ('assert');
const {expect} = require('chai');
const {isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber} = require('../index.js');

describe('testing isAdult function', () => {

  it('with 18 argument should be true', () => {
    expect(isAdult(18),).to.be.true;
  });

  it('with 17 argument should be false', () => {
    expect(isAdult(17)).to.be.false;
  });

  it('with no argument age should be undefined', () => {
    expect(isAdult()).to.be.undefined;
  });

  it('with string argument age should be undefined', () => {
    expect(isAdult('18')).to.be.undefined;
  });

  it('with array argument age should be undefined', () => {
    expect(isAdult([18])).to.be.undefined;
  });

  it('with object argument age should be undefined', () => {
    expect(isAdult({age: 18})).to.be.undefined;
  });

  it('with argument below or equal 0 should be wrong age', () => {
    expect(isAdult(-12)).to.be.an('error');
  });

});

describe('testing sortArrayUp function', () => {
  it('with [4,2,1,3,0] array should be [0,1,2,3,4]', () => {
    expect(sortArrayUp([4, 2, 1, 3, 0])).to.deep.equal([0, 1, 2, 3, 4]);
  });

  it('with string array should be invalid element inside the array', () => {
    expect(sortArrayUp(['for', 'two', 'one', 'three', 'zero'])).to.be.an('error');
  });

  it('with NaN el in array should be invalid element inside the array', () => {
    expect(sortArrayUp([2, 3, NaN, 4, 5])).to.be.an('error');
  });

  it('with Null el in array should be invalid element inside the array', () => {
    expect(sortArrayUp([2, 3, null, 4, 5])).to.be.an('error');
  });

  it('with Undefined el in array should be invalid element inside the array', () => {
    expect(sortArrayUp([2, 3, undefined, 4, 5])).to.be.an('error');
  });

  it('with [] array should be []', () => {
    expect(sortArrayUp([])).to.deep.equal([]);
  });

  it('with no argument should be []', () => {
    expect(sortArrayUp()).to.deep.equal([]);
  });

  it('with object argument array should be undefined', () => {
    expect(sortArrayUp({a: 1, b: 2})).to.be.undefined;
  });

  it('with string argument should be undefined', () => {
    expect(sortArrayUp('4,2,1,3,0')).to.be.undefined;
  });

  it('with number argument should be undefined', () => {
    expect(sortArrayUp(42130)).to.be.undefined;
  });


});

describe('testing isPalindrome function', () => {

  it('with aba should be true', () => {
    expect(isPalindrome('aba')).to.be.true;
  });

  it('with abbaa should be false', () => {
    expect(isPalindrome('abbaa')).to.be.false;
  });

  it('with 121 argument should be true', () => {
    expect(isPalindrome(121)).to.be.true;
  });

  it('with 123 argument should be Wrong argument', () => {
    expect(isPalindrome(123)).to.be.false;
  });

  it('with Array argument should be Wrong argument', () => {
    expect(isPalindrome(['aba'])).to.be.an('error');
  });

  it('with Object argument should be Wrong argument', () => {
    expect(isPalindrome({word: 'aba'})).to.be.an('error');
  });

  it('with NaN argument should be Wrong argument', () => {
    expect(isPalindrome(NaN)).to.be.an('error');
  });

  it('with Null argument should be Wrong argument', () => {
    expect(isPalindrome(null)).to.be.an('error');
  });

  it('with Undefined argument should be Wrong argument', () => {
    expect(isPalindrome(undefined)).to.be.an('error');
  });

});

describe('testing isOddNumber function', () => {
  it('with 2 argument should be false', () => {
    expect(isOddNumber(2)).to.be.false;
  });

  it('with 1 argument should be true', () => {
    expect(isOddNumber(1)).to.be.true;
  });

  it('with no argument should be error', () => {
    expect(isOddNumber()).to.be.an('error');
  });

  it('with NaN argument should be error', () => {
    expect(isOddNumber(NaN)).to.be.an('error');
  });

  it('with Null argument should be error', () => {
    expect(isOddNumber(null)).to.be.an('error');
  });

  it('with Undefined argument should be error', () => {
    expect(isOddNumber(undefined)).to.be.an('error');
  });

  it('with string argument should be error', () => {
    expect(isOddNumber('2')).to.be.an('error');
  });

  it('with Array argument should be error', () => {
    expect(isOddNumber([1])).to.be.an('error');
  });

  it('with Obj argument should be error', () => {
    expect(isOddNumber({1: 1})).to.be.an('error');
  });
});

describe('testing isEvenNumber function', () => {
  it('with 1 argument should be false', () => {
    expect(isEvenNumber(1)).to.be.false;
  });

  it('with 2 argument should be true', () => {
    expect(isEvenNumber(2)).to.be.true;
  });

  it('with no argument should be error', () => {
    expect(isEvenNumber()).to.be.an('error');
  });

  it('with NaN argument should be error', () => {
    expect(isEvenNumber(NaN)).to.be.an('error');
  });

  it('with Null argument should be error', () => {
    expect(isEvenNumber(null)).to.be.an('error');
  });

  it('with Undefined argument should be error', () => {
    expect(isEvenNumber(undefined)).to.be.an('error');
  });

  it('with string argument should be error', () => {
    expect(isEvenNumber('2')).to.be.an('error');
  });

  it('with Array argument should be error', () => {
    expect(isEvenNumber([1])).to.be.an('error');
  });

  it('with Obj argument should be error', () => {
    expect(isEvenNumber({1: 1})).to.be.an('error');
  });
});