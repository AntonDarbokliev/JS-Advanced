function math(x1,y1,x2,y2){
    calculate(x1,y1,0,0)
    calculate(x2,y2,0,0)
    calculate(x1,y1,x2,y2)
    function calculate(x1,y1,x2,y2){
    let result =  Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1,2)));
    if(Number.isInteger(result)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
    }
}
math(3, 0, 0, 4)