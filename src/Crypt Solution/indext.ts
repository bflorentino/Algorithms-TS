
export default function solution(crypt:string[], digits:string[][]):boolean{

    if(!crypt.length || !digits.length) throw "Array has no length"
    
    const digitsMap = digits.reduce((acc, curr) => ({...acc, [curr[0]]:curr[1] }), {})
    
    const numbers =  crypt.map(w => w.split("")
                                     .map(c => digitsMap[c]).join("") )
    
    if(numbers.find(n => n.length > 1 && n.startsWith("0"))) return false
    
    const [n1, n2, n3] = numbers.map(n => Number(n))    
    
    return n1 + n2 === n3
}

