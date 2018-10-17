const assert = require('assert')
const signs = require('../api/signs')

describe("api", function(){
    describe("#getStarSign", () => {
        it("should retrieve the correct star sign - Escorpion", () => {
            assert.equal(signs.getStarSign("28-10-1994"), "Escorpião")
        })
        it("should retrieve the capricornio", () => {
            assert.equal(signs.getStarSign("20-01-1994"), "Capricórnio")
        })
        it("should retrieve the aquário", () => {
            assert.equal(signs.getStarSign("21-01-1994"), "Aquário")
        })
    })
})