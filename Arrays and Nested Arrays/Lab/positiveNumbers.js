function negativePositiveNums(arr){
let res = []
arr.forEach(element => {
    if(element<0){
        res.unshift(element)
    }else{
        res.push(element)
    }
});
return res
}negativePositiveNums([3, -2, 0, -1])