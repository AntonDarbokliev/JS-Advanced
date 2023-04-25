function print(arr,step){
    return arr.filter((_,index)=>index % step === 0)
}