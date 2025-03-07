import { calculateTotalValue } from "../calculateTotalValue.js";

describe("Coin Value Calculation", function() {
    it("should calculate the total correctly for a mix of coins", function() {
        expect(calculateTotalValue(2, 3, 4, 1, 2)).toBeCloseTo(6.5, 2); 
    });

    it("should return 0 if no coins are provided", function() {
        expect(calculateTotalValue(0, 0, 0, 0, 0)).toBe(0);
    });

    it("should calculate the total correctly when only nickels are provided", function() {
        expect(calculateTotalValue(5, 0, 0, 0, 0)).toBe(0.25);
    });
});