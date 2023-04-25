function oddPos(arr){
let res = []
arr.forEach((element,i) => {
    if(i%2!=0){
        res.push(element)
    }
});
return res.map((element)=> element *= 2).reverse().join(" ")
}
console.log(oddPos([10, 15, 20, 25]))