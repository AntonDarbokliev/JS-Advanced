function heroicInventory(arr){
    let res = []
for(const stats of arr){
    let [name,level,items] = stats.split(" / ")
  items !== undefined ? items = items.split(", ") : items = []
   const obj = {
    name,
    level : Number(level),
    items
   } 
    res.push(obj);
}
return JSON.stringify(res)
}console.log(heroicInventory(['Isacc / 25 /',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']))