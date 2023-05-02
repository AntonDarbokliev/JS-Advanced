function townsToJSON(arr){
arr.shift()
let res = []
for(let info of arr){
    let [Town,Latitude,Longitude] = info.split(" | ")
    Town = Town.substring(2,)
    Longitude = Longitude.substring(0,Longitude.length - 2)
    let obj = {
        Town,
        Latitude : Number(Number(Latitude).toFixed(2)),
        Longitude : Number(Number(Longitude).toFixed(2))
    }   
res.push(obj)
}
return JSON.stringify(res)

}
 console.log(townsToJSON(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |']))