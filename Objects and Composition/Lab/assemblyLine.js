function createAssemblyLine() {
  let obj = {
    hasClima(car) {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = function () {
        if(car.temp < car.tempSettings){
            car.temp += 1
        }else if(car.temp > car.tempSettings){
            car.temp -= 1
        }
      }
    },
    hasAudio(car){
        car.currentTrack = {name:null,artist:null}
        car.nowPlaying = function (){
            if(car.currentTrack.name !== null && car.currentTrack.artist !== null){
                console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
            }
        }
    },
    hasParktronic(car){
       car.checkDistance = function(distance){ if(distance < 0.1){
            console.log("Beep! Beep! Beep!");
        }else if(distance < 0.25){
            console.log("Beep! Beep!");
        }else if (distance < 0.5){
            console.log("Beep!");
        }
    }
    }
    
  };
  return obj
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",

  model: "Avensis",
};

assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2);
