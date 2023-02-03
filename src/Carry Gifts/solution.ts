

export const solution = (gifts:string[], weight:number) => {

    if(gifts.length === 0) throw new Error("Gift array must no be empty")
    if(weight <= 0) throw new Error("Weight must be a positive number")

    const bags:string[] = []
    let accBag = ""

    for(const gift of gifts){
        
        if((gift.length > weight || `${accBag}${gift}`.replace(/\s/g, '').length > weight) && accBag !== "" ){
            bags.push(accBag)
            accBag = ""
        }

        if(gift.length <= weight){
            accBag = accBag === "" ? gift : `${accBag} ${gift}`
        }
    }
     
  if(accBag)
    bags.push(accBag)

    return bags
}