function carFactory(obj){
    const res = {} 
    const engines = {
        "Small engine": { power: 90, volume: 1800 },
'Normal engine': { power: 120, volume: 2400 },
'Monster engine': { power: 200, volume: 3500}
    }

    const carriage =  {
        Hatchback: { type: 'hatchback', color: obj.color },
        Coupe: { type: 'coupe', color: obj.color }
    }
res.model = obj.model
if(obj.power <= 90)res.engine = engines["Small engine"]
else if(obj.power <=120) res.engine = engines["Normal engine"]
else res.engine = engines["Monster engine"]

obj.carriage === "hatchback" ? res.carriage = carriage.Hatchback:res.carriage = carriage.Coupe

let wheelsArr = [obj.wheelsize,obj.wheelsize,obj.wheelsize,obj.wheelsize]
if(wheelsArr[0] % 2 === 0) wheelsArr = wheelsArr.map((el)=> el-= 1 )

res.wheels = wheelsArr

return res
}
console.table(carFactory({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 }))