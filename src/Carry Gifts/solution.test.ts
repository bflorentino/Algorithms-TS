import { it, expect, describe } from 'vitest'
import { solution } from './solution'

describe("testing carry gifts algorithm", () => {

    it("array strings must have elements and weight must be a valid number", () => {
        expect(() => solution([], 10)).toThrowError("Gift array must no be empty")
        expect(() => solution(["game"], 0)).toThrowError("Weight must be a positive number")
    })

    it("should return ['game bike', 'book toy']", () => {
        expect(solution(['game', 'bike', 'book', 'toy'], 10)).toStrictEqual(["game bike", "book toy"])
    })

    it("should return ['game', 'bike', 'book', 'toy'], 7", () => {
        expect(solution(['game', 'bike', 'book', 'toy'], 7)).toStrictEqual([ "game", "bike", "book toy"])
    })

    it("should return an empty array", () => {
        expect(solution(['toy', 'toy'], 2)).toStrictEqual([])
    })
})