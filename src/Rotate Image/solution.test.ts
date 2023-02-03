import { describe, expect, it } from 'vitest'
import solution from './solution'

describe("Testing rotation algorithm", ()=> {
    
    it("output should be a 2D Matrix like next:  [[7, 4, 1],[8, 5, 2],[9, 6, 3]]", ()=> {
        
        expect(JSON.stringify(solution([[1, 2, 3],[4, 5, 6],[7, 8, 9]])))
        .toBe(JSON.stringify([[7, 4, 1],[8, 5, 2],[9, 6, 3]]))
    })
    
    it("Output should be [[5,3],[2,4]]", () => {
        expect(JSON.stringify(solution([[3, 4], [5, 2]])))
        .toBe(JSON.stringify([[5,3], [2,4]]))
    })

    it("Output should be an error saying is not a n*n matrix", () => {
        expect(() => solution([[3, 4], [5, 2], [5, 1], [8, 6]])).toThrow("Not n * n matrix")
        expect(() => solution([])).toThrow("Not n * n matrix")
    })
})