import { gymMembershipCost } from "../gymMembershipCost.js";

describe("Gym Membership Cost Calculation", function() {
    it("should calculate the cost correctly with 1 friend", function() {
        expect(gymMembershipCost(100, 1)).toBe(95);  
    });

    it("should calculate the cost correctly with 2 friends", function() {
        expect(gymMembershipCost(100, 2)).toBe(90);  
    });

    it("should calculate the cost correctly with 3 friends", function() {
        expect(gymMembershipCost(100, 3)).toBe(85);  
    });

    it("should calculate the cost correctly with no friends", function() {
        expect(gymMembershipCost(100, 0)).toBe(100);  
    });
});