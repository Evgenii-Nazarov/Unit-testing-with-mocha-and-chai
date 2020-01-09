const assert = require ('assert');
const {expect} = require ('chai');
const {isAdult} = require('../index.js');

describe ('testing isAdult function', () => {

    it("fn isAdult with 18 age should be true",() => {
        expect(isAdult(18),  ).to.be.true;
    });

    it("fn isAdult with 17 age should be false",() => {
        expect(isAdult(17) ).to.be.false;
    });

    it("fn isAdult with no data age should be undefined",() => {
        expect( isAdult() ).to.be.undefined;
    });

    it("fn isAdult with string data age should be undefined",() => {
        expect(isAdult('18') ).to.be.undefined;
    });

    it("fn isAdult with array data age should be undefined",() => {
        expect(isAdult([18]) ).to.be.undefined;
    });

    it("fn isAdult with object data age should be undefined",() => {
        expect(isAdult({age:18}) ).to.be.undefined;
    });

    it("fn isAdult with data below or equal 0 should be wrong age",() => {
        expect(isAdult(-12) ).to.be.equal('wrong age');
    });

});

