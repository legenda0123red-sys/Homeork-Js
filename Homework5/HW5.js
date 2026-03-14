let cars = ['BMW', 'Mersedes', 'Opel', 'Mazda', "FIAT", 'Ferrari', 'Reno'];
let newCars = []
for (let i =0; i < cars.length; i++) {
    if (cars[i] === cars[i].toUpperCase()){
        newCars.push(cars[i])
    }
}
console.log(newCars);