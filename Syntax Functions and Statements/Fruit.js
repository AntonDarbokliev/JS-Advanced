function fruit(fuit,grams,pricePerKilo){
const kilos = grams / 1000
const price = kilos * pricePerKilo
console.log(`I need $${price.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fuit}.`);
}
fruit('orange', 2500, 1.80)