let cars = [{
    make: "BMW",
    model: "335i",
    colour: "White"
}]

exports.getCar = async function(){
    return Promise.resolve(cars[0])
}
exports.postCar = async function(carMake, carModel, carColour){
    let car = {
        make: carMake,
        model: carModel,
        colour: carColour
    }
    cars.push(car)
    console.log(cars)
    return Promise.resolve(cars[cars.length-1])
}