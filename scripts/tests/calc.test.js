// @jest-environment jsdom

const addition = require("../calc");

describe("calculator", () => {
    describe("addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 52 for 30 + 22", () => {
            expect(addition(30, 22)).toBe(52);
        })
    });

    describe("subtraction function", () => {
        
    });

    describe("multiply function", () => {
        
    });

    describe("division function", () => {
        
    });
});