function ticTacToe(arr){
    let dashboard = [[false, false, false],

    [false, false, false],
    
    [false, false, false]]
    let symbol = "X"
    let isWinner = false;
    for(let i = 0;i<arr.length;i++){
        let isEnded = true;
        let move = arr[i]
        let [row,colum] = move.split(" ")
        let currentMove =  dashboard[row][colum]
        if(currentMove !== false){
            console.log("This place is already taken. Please choose another!")
            continue
        }
         dashboard[row][colum] = symbol 
         let checkForDiagonal = dashboard[0][0] === symbol && dashboard[1][1] === symbol && dashboard[2][2] === symbol
         || dashboard[0][2]=== symbol && dashboard[1][1] === symbol && dashboard[2][0] === symbol
         let horizontal = false;
         let vertical = false;
         for(let i = 0;i<dashboard.length;i++){
            let arr = dashboard[i]
             if(arr.every(el=>el === symbol)){
                 horizontal = true
                 break;
                }
            if(dashboard[0][i]===symbol && dashboard[1][i]=== symbol && dashboard[2][i] == symbol){
                   vertical = true
                   break;
            }
            }
            if(checkForDiagonal|| horizontal||vertical){
                isWinner = true
                console.log(`Player ${symbol} wins!`);
                break;
            }
            symbol = symbol === "X"?"O":"X"
                for(let arr of dashboard){
                    if(arr.some(el=>el == false)){
                        isEnded = false
                        break;
                       } 
                }
                if(isEnded){
                    console.log('The game ended! Nobody wins :(');
                    break;
                }
    }
    console.log(dashboard[0].join("\t"));
    console.log(dashboard[1].join("\t"));
    console.log(dashboard[2].join("\t"));
}ticTacToe([
    "0 1",
    "0 0",
    '0 2',
    '2 0',
    '1 0',
    '1 2',
    '1 1',
    '2 1',
    '2 2',
    '0 0',])