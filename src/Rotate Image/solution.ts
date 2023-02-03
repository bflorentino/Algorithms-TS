export default function solution(a: number[][]): number[][] {
    
    // Check if it's n * n
    const nxn = a.reduce((acc, curr) => [...acc, curr.length],[])
    const items = [...new Set(nxn)]
    if(items.length > 1 || items[0] !== a.length ) throw new Error ("Not n * n matrix")

    const matrixInverted:number[][] = []
    
    for(let i = 0; i < a.length; i++ ){
        
        const matrixResulted:Array<number> = [] 
        for(let j = a.length - 1; j >= 0; j--){
            matrixResulted.push(a[j][i])
        }
        matrixInverted.push(matrixResulted)
    }
    
    return matrixInverted
}