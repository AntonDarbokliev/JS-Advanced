function diagonalSums(matrix){
let firstDiagonalArr = []
let secondDiagonalArr = []
let firstDIndex = 0
let secondDIndex = matrix[0].length - 1

for(let row of matrix){
   firstDiagonalArr.push(row[firstDIndex])
   firstDIndex++
   secondDiagonalArr.push(row[secondDIndex])
   secondDIndex--
}
return [firstDiagonalArr.reduce((acc,num)=> acc + num,0),secondDiagonalArr.reduce((acc,num)=>acc+num,0)].join(" ")
}
 console.log(diagonalSums([[20, 40],[10, 60]]))