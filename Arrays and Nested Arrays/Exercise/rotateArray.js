function rotate(arr,num){
for(let i = 0;i<num;i++) arr.unshift(arr.pop())
return arr.join(" ")
}rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15)