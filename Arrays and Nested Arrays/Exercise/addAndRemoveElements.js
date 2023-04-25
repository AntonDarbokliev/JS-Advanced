function manipulate(arr){
let res = []
let numToPush = 0
for(command of arr){
    numToPush++
    if(command === "add")res.push(numToPush)
   else res.pop() 
}
return res.length>0?res.join("\n"):"Empty"
}
console.log(manipulate(['remove', 'remove', 'remove']))