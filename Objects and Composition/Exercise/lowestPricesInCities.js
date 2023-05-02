function lowestPricesInCities(arr){
    const obj = {}
    for(const info of arr){
        let [town,product,price] = info.split(" | ")
        if(!obj.hasOwnProperty(product)){
            obj[product] = {town , price: Number.MAX_SAFE_INTEGER}
        }
        if(obj[product].price > price){
            obj[product] = {town , price:Number(price)}
        }
    }
    for(const key in obj){
        console.log(`${key} -> ${obj[key].price} (${obj[key].town})`);
    }
}lowestPricesInCities(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])