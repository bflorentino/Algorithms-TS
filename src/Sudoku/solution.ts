export const solution = (grid: string[][]): boolean => {

    // Check repeated numbers in area given (square, line or column)
    const areRepeatedItems = (arraytToChek:string[]) =>{
        const repeated= {}
        for(const n of arraytToChek){
            if(n!== "." && repeated[n])return false
            repeated[n] = n
        }
        return true
    }

    let counterForRows:number = 0
    let counterForColumns:number = 0

    for(let i =0; i < grid.length; i++ ){
                
        const items3x3:Array<string> = []
        
        for(let j = counterForRows; j < counterForRows + 3; j++ ){
            for(let n = counterForColumns; n < counterForColumns + 3; n++){
                items3x3.push(grid[j][n])
            }
        }
        
        if(!areRepeatedItems(grid[i])) return false
        if(!areRepeatedItems(grid.map((items, m) => grid[m][i]))) return false
        if(!areRepeatedItems(items3x3)) return false
        
        if(counterForRows < 6){
            counterForRows += 3
        }
        else{
            counterForRows = 0
            counterForColumns += 3
        }
    }
    return true
}