function neighbors(matrix){
let neighbourCount = 0
let previousRow = []
for(let row of matrix){
for(let i = 0;i<row.length;i++){

if(previousRow[i]===row[i]){
    neighbourCount++
}
    if(row[i]=== row[i+1]){
        neighbourCount++
    }
}
previousRow = row.slice()
}
return neighbourCount
}
console.log( neighbors([[2, 2, 5, 7, 4],
                        [4 , 2, 5, 3, 4],
                        [2 , 5, 5, 4,2]]));