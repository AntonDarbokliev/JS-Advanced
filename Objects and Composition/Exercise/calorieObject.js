function calorieObj(arr){
    let res = {}
    arr.forEach((element,i) => {
        if(i % 2 === 0) res[element] = Number(arr[i + 1])
    });
    console.log(res);
}
calorieObj(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])