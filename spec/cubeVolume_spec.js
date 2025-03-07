import { cubeVolume } from "../cubeVolume.js";

describe ("Cube Volume Calculation", function() {
    it("should calculate the volume correctly for a side length of 2 meters", function() {
        expect(cubeVolume(2)).toBe(8);  
    });

    it("should calculate the volume correctly for a side length of 3 meters", function() {
        expect(cubeVolume(3)).toBe(27);  
    });

    it("should calculate the volume correctly for a side length of 4 meters", function() {
        expect(cubeVolume(4)).toBe(64);  
    });
});

