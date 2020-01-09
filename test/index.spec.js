const assert = require ('assert');
const {expect} = require ('chai');
const {isAdult,sortArrayUp,isPalindrome} = require('../index.js');

describe ('testing isAdult function', () => {

    it("fn isAdult with 18 argument should be true",() => {
        expect(isAdult(18),  ).to.be.true;
    });

    it("fn isAdult with 17 argument should be false",() => {
        expect(isAdult(17) ).to.be.false;
    });

    it("fn isAdult with no argument age should be undefined",() => {
        expect( isAdult() ).to.be.undefined;
    });

    it("fn isAdult with string argument age should be undefined",() => {
        expect(isAdult('18') ).to.be.undefined;
    });

    it("fn isAdult with array argument age should be undefined",() => {
        expect(isAdult([18]) ).to.be.undefined;
    });

    it("fn isAdult with object argument age should be undefined",() => {
        expect(isAdult({age:18}) ).to.be.undefined;
    });

    it("fn isAdult with argument below or equal 0 should be wrong age",() => {
        expect(isAdult(-12) ).to.be.equal('wrong age');
    });

});

describe ('testing sortArrayUp function', () => {
    it('fn sortArrayUp with [4,2,1,3,0] array should be [0,1,2,3,4]', () => {
        expect(  sortArrayUp([4,2,1,3,0])).to.deep.equal([0,1,2,3,4])
    });

    it('fn sortArrayUp with string array should be invalid element inside the array', () => {
        expect(  sortArrayUp(['for','two','one','three','zero'])).to.be.equal('invalid element inside the array')
    });

    it('fn sortArrayUp with NaN el in array should be invalid element inside the array', () => {
        expect(  sortArrayUp([2,3,NaN,4,5])).to.be.equal('invalid element inside the array')
    });

    it('fn sortArrayUp with Null el in array should be invalid element inside the array', () => {
        expect(  sortArrayUp([2,3,null,4,5])).to.be.equal('invalid element inside the array')
    });

    it('fn sortArrayUp with Undefined el in array should be invalid element inside the array', () => {
        expect(  sortArrayUp([2,3,undefined,4,5])).to.be.equal('invalid element inside the array')
    });

    it('fn sortArrayUp with [] array should be []', () => {
        expect(  sortArrayUp([])).to.deep.equal([])
    });

    it('fn sortArrayUp with no argument should be []', () => {
        expect(  sortArrayUp()).to.deep.equal([])
    });

    it('fn sortArrayUp with object argument array should be undefined', () => {
        expect(  sortArrayUp({ a: 1, b: 2} )).to.be.undefined;
    });

    it('fn sortArrayUp with string argument should be undefined', () => {
        expect(  sortArrayUp('4,2,1,3,0')).to.be.undefined;
    });

    it('fn sortArrayUp with number argument should be undefined', () => {
        expect(  sortArrayUp(42130)).to.be.undefined;
    });


});

describe ('testing isPalindrome function', () => {

   it('fn isPalindrome with aba should be true', () => {
      expect( isPalindrome('aba') ).to.be.true;
    });

    it('fn isPalindrome with abbaa should be false', () => {
        expect( isPalindrome('abbaa') ).to.be.false;
    });

    it('fn isPalindrome with 121 argument should be true', () => {
        expect( isPalindrome(121) ).to.be.true;
    })

    it('fn isPalindrome with 123 argument should be false', () => {
        expect( isPalindrome(123) ).to.be.false;
    });

    it('fn isPalindrome with Array argument should be error', () => {
        expect( isPalindrome(['aba']) ).to.be.equal('Wrong argument');
    });

    it('fn isPalindrome with Object argument should be error', () => {
        expect( isPalindrome({word:'aba'}) ).to.be.equal('Wrong argument');
    });

    it('fn isPalindrome with NaN argument should be error', () => {
        expect( isPalindrome(NaN) ).to.be.equal('Wrong argument');
    });

    it('fn isPalindrome with Null argument should be error', () => {
        expect( isPalindrome(null) ).to.be.equal('Wrong argument');
    });

    it('fn isPalindrome with Undefined argument should be error', () => {
        expect( isPalindrome(undefined) ).to.be.equal('Wrong argument');
    });

});