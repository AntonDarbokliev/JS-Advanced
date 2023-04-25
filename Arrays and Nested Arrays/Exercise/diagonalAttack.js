function diagonalAttack(arr){
    let firstDiagonalSum = 0 
    let secondDiagonalSum = 0
    let diagonalNumsArr = []
    let res =[]
    for(let i = 0;i<arr.length;i++){
        let numbers = arr[i].split(" ")
        firstDiagonalSum += Number(numbers[i])
        secondDiagonalSum += Number(numbers[(arr.length - 1) - i])
        diagonalNumsArr.push(numbers[i],numbers[(arr.length - 1) - i])
    }
    let nXn = (diagonalNumsArr.length) / 2
    if(nXn % 2 !== 0){
        diagonalNumsArr.splice(diagonalNumsArr.length / 2,1)
    }
    console.log(diagonalNumsArr);

    if(firstDiagonalSum === secondDiagonalSum){
for(let i = 0;i<nXn;i++){
    let firstNum = diagonalNumsArr[i]
    let secondNum = diagonalNumsArr[i + 1]
res[i] = firstNum
res[(nXn - 1) - i] = secondNum
res.fill(firstDiagonalSum,0,res.indexOf(firstNum))
res.fill(firstDiagonalSum,res.indexOf(firstNum) + 1,res.indexOf(secondNum))
res.fill(firstDiagonalSum,res.indexOf(secondNum) + 1)
console.log(res);
res = []
}
    }


}diagonalAttack(['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1'])