function smallestNums(arr){
arr.sort((a,b)=>a-b)
return [arr[0],arr[1]].join(" ")
}
console.log(smallestNums([30, 15, 50, 5])); 