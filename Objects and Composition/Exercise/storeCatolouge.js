function storeCatalouge(arr){
let res = {}
for(let info of arr){
    let[product,price] = info.split(" : ")
    if(!res.hasOwnProperty(product[0]))res[product[0]] = []
      res[product[0]].push({product,price : Number(price)})
}

const sortedKeys = Object.keys(res).sort((a,b)=> a.localeCompare(b))

for(const key of sortedKeys){
  res[key].sort((a,b) => a.product.localeCompare(b.product));
  console.log(key);
  for(let i = 0;i<res[key].length;i++){
    let currentProduct = res[key][i]
    console.log(`  ${currentProduct.product}: ${currentProduct.price}`);
  }
}
}

storeCatalouge(['Banana : 2','Rubic\'s Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10'])