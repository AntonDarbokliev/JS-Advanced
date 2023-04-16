function sameNums(num){
let checkForSameDigits = /^(\d)\1+$/
console.log(checkForSameDigits.test(num))
num = String(num)
// let arr = num.split("")
// let firstNum = arr[0]
// console.log(arr.every((number)=>number==firstNum));
console.log(num.split("").reduce((acc,b)=> Number(acc) + Number(b)));
}sameNums(2222222)