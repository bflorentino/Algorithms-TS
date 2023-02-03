import { describe, it, expect } from 'vitest'
import solution from './solution'

describe("Testing crypt solution", ()=> {
    
    it("returns an error saying any array has no length", ()=> {
        expect(() => solution([],[[]])).toThrow("Array has no length")
        expect(() => solution(["mundo", "cancion", "zona"],[])).toThrow("Array has no length")
    })
    
    it('It should return false with arrays that do not fit the conditions of [word1] + [word2] = [word3] ', ()=> {

        expect(solution(["A", "B", "C"],[["A","5"], ["B","6"], ["C","1"]])).toBe(false)
        expect(solution(["A", "A", "A"],[["A","1"]])).toBe(false)
    })

    it("It should return false with arrays that do not fit the condition of not having numbers with leading zeroes", ()=> {
        expect(solution(["AB", "B", "C"], [["A", "0"], ["B", "1"], ["C", "2"]])).toBe(false)
    })

    it('return true for ["SEND", "MORE", "MONEY"],[["O","0"], ["M","1"], ["Y","2"], ["E","5"], ["N","6"], ["D","7"], ["R","8"], ["S","9"]]', () => {
        expect(solution(["SEND", "MORE", "MONEY"],
                            [["O","0"], ["M","1"], ["Y","2"], ["E","5"], ["N","6"], ["D","7"], ["R","8"], ["S","9"]]
                        )).toBe(true)
    })
})