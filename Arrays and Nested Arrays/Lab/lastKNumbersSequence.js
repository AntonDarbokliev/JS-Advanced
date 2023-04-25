function sequence(n,k){
    let result = [1]
for(let i =0;i<n-1;i++){
    let start = i - k < 0 ? 0:i - k + 1
let sumOfPreviousNums = result.slice(start,result.length).reduce((acc,num)=> acc+num,0)
result.push(sumOfPreviousNums)
}
return result
}sequence(6, 3)