const carsRepository = require('../repositories/carsRepository')
exports.getCar = async function(req, res, next){
    const result = await carsRepository.getCar()
    res.send(result)
}
exports.getMakes = async function(req, res, next){
    const result = await carsRepository.getMakes()
    res.send(result)
}
exports.getSpecCar = async function(req, res, next){
    const carId = req.params.id
    const result = await carsRepository.getSpecCar(carId)
    res.send(result)
}
exports.postCar = async function(req, res, next){
    const carMake = req.body.make
    const carModel = req.body.model
    const carColour = req.body.colour
    const result = await carsRepository.postCar(carMake, carModel, carColour)
    console.log(result)
    res.send(result)

}
exports.putCar = async function(req, res, next){
    const carId = req.params.id
    const carMake = req.body.make
    const carModel = req.body.model
    const carColour = req.body.colour
    const result = await carsRepository.putCar(carId, carMake, carModel, carColour)
    res.send(result)
}
exports.deleteCar = async function(req, res, next){
    const carId = req.params.id
    const result = await carsRepository.deleteCar(carId)
    res.send(result)
}