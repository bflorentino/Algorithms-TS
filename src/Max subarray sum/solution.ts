
// O(n) solution
export const solution = (numbers:number[]) => {
    
    if(!numbers.length) return 0

    let maxSum = numbers[0]
    let accSum = 0

    for(let i = 0; i < numbers.length; i++){

        if(numbers[i] > maxSum) {
            maxSum = numbers[i]
        } 

        if(accSum + numbers[i] <= accSum ) {
            accSum = 0
            continue
        }

        accSum += numbers[i]
        maxSum = Math.max(accSum, maxSum)
    }
    return maxSum
}