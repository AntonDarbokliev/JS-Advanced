function speedLimit(speed,area){
    const speedLimits = {
        "motorway": 130,
        "interstate" : 90,
        "city" : 50,
        "residential" : 20
    }
    let speedLimit = speedLimits[area]
    let severity = ""
    if(Number(speed)<=speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }else{
        let difference = (Number(speed) - speedLimit)
        if(difference <=20){
            severity = "speeding"
        }else if(difference <=40){
            severity = "excessive speeding"
        }else{
    severity = "reckless driving"
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${severity}`)
    }
    
    }