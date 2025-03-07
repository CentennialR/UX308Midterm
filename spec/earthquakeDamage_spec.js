import { earthquakeDamage } from "../earthquakeDamage.js";

describe("Earthquake Damage Calculation", function() {
    it("should classify damage correctly for an intensity 4.5", function() {
        expect(earthquakeDamage(4.5)).toBe("Little or no damage");
    });

    it("should classify damage correctly for an intensity 5.2", function() {
        expect(earthquakeDamage(5.2)).toBe("Some damage");
    });

    it("should classify damage correctly for an intensity 6.0", function() {
        expect(earthquakeDamage(6.0)).toBe("Serious damage! Walls may crack or fall!");
    });

    it("should classify damage correctly for an intensity 7.0", function() {
        expect(earthquakeDamage(7.0)).toBe("Disaster! Buildings may collapse!");
    });

    it("should classify damage correctly for an intensity 8.0", function() {
        expect(earthquakeDamage(8.0)).toBe("Catastrophe! Most buildings are destroyed!");
    });
});