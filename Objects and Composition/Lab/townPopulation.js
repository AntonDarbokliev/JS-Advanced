function townPopulation(arr){
    let res = {}
    for(let info of arr){
        let [town,population] = info.split(" <-> ")
        if(!res.hasOwnProperty(town)){
            res[town] = 0;
        }
res[town] += Number(population);
    }
    Object.entries(res).reduce((_,value) => console.log(`${value[0]} : ${value[1]}`),0)   
}townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])