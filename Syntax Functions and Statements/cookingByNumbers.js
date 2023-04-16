function  cookingByNumbers(startingNum,first,second,third,fourth,fifth){
    startingNum = Number(startingNum);
    let arr = [];
    arr.push(first,second,third,fourth,fifth);
    for(let action of arr){
        switch(action){
            case"chop":
                startingNum /= 2
                 console.log(startingNum)
                break;
                case"dice":
                    startingNum = Math.sqrt(startingNum)
                     console.log(startingNum)
                    break;
                    case"spice":
                        startingNum++
                         console.log(startingNum)
                        break;
                        case"bake":
                            startingNum *= 3
                             console.log(startingNum)
                            break;
                            case"fillet":
                                startingNum = startingNum*0.80
                                 console.log(startingNum.toFixed(1))
                                break;
            
        }
    }
    
    
}