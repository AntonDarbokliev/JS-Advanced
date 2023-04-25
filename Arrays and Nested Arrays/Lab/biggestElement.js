function biggestEl(matrix){
    let biggestNum = Number.MIN_SAFE_INTEGER
    for(let row of matrix){
let biggestNumFromRow = Math.max(...row)
if(biggestNumFromRow>biggestNum)biggestNum = biggestNumFromRow
    }
return biggestNum
}
console.log( biggestEl([[-1,-2,-3],

    [-5,-6,-3,-2]]))