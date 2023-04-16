function timeToWalk(totalSteps,distancePerStep,speed){
const totalDistance = totalSteps * distancePerStep
let rest = (totalDistance / 500) * 60;
const metersPerSecond = speed / 3.6;
const totalTimeInSeconds = totalDistance /  metersPerSecond + rest;
let hours = totalTimeInSeconds / 3600
let minutes = totalTimeInSeconds / 60
let seconds = totalTimeInSeconds % 60 
console.log();
}
timeToWalk(4000, 0.60, 5)