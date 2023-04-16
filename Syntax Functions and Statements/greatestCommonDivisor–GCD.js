function divider(num1,num2){
let greatestDivider;
for(let i = 1;i<10;i++){
    if(num1 % i === 0 && num2%i === 0){
        greatestDivider = i
    }
}
console.log(greatestDivider);
}divider(15, 5)