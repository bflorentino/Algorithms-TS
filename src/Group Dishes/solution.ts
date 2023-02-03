function solution(dishes: string[][]): string[][] {
    
    const difIngredients = new Set(dishes.reduce((acc, curr) => {
        const [dish, ...ing] = curr
        return[...acc, ...ing] 
    },[]))
    
    const ingWithDishes = new Map<string, string[]>()
    
    for(const ing of [...difIngredients]){
        ingWithDishes.set(ing, [])
        
        for(const dishElements of dishes){
            
            const [d, ...ingredients] = dishElements 
            
            if(ingredients.find(a => a === ing)){
                ingWithDishes.set(ing, [...ingWithDishes.get(ing) as string[], dishElements[0]] )
            }
        }
      ingWithDishes.set(ing, [ing, ...ingWithDishes.get(ing)!.sort() ]) 
    }
    
    const finalArray = Array.from(ingWithDishes.values())
                        .filter(arr => arr.length > 2)
                        .sort( (a, b) => Number((a[0] > b[0])) - Number((a[0] < b[0])))
    
  return finalArray
}