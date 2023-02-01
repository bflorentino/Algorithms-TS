
export const solution = (n:number):number => {

    if(n < 0) return 0

    const suma = [...Array(n).keys()]
                .reduce((acc, curr) => (curr % 3 === 0 || curr % 5 === 0) ? acc + curr : acc, 0)

    return suma
}