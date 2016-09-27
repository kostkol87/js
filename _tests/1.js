"use strict";

function add(a, b) {
    return a + b;
};

describe("Jasmine", function () {

    it("makes testing JavaScript awesome!", function () {
        console.log("HELOOOOO");
        expect(true).toBe(true);
    });
    it("addiction equal", function () {
        console.log("ADD TEST");
        expect(add(20, 15)).toBe(35)
    });
    it("addiction not equal", function () {
        console.log("ADD TEST");
        expect(add(10, 2)).not.toBe(10)
    });
});