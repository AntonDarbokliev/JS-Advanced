function extract(arr){
let res = []
let biggestNum = arr[0]
arr.reduce((_,value)=> {
    if(value>=biggestNum){
        biggestNum = value
        res.push(value)
    }
},0);
return res
}extract([20, 3, 2, 15,6, 1])