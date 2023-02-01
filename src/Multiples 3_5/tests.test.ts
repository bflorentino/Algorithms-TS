import { it, expect, describe } from "vitest";
import { solution } from "./index";

describe("Testing multiples of 3 or 5", () => {

    it("should return 0 if passed a negative number", () => {
        expect(solution(-1)).toBe(0)
    })

    it("should return 23 if passed number 10", () => {
        expect(solution(10)).toBe(23)
    })

    it("should return 14 if passed 6", () => {
        expect(solution(6)).toBe(8)
    })

    it("should return 45 if passed 15", () => {
        expect(solution(15)).toBe(45)
    })

    it("should return 0 if passed 0", () => {
        expect(solution(0)).toBe(0)
    })
})