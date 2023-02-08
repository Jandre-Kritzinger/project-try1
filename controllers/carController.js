const carsRepository = require('../repositories/carsRepository')
exports.getCar = async function(req, res, next){
    const result = await carsRepository.getCar()
    res.send(result)
}
exports.postCar = async function(req, res, next){
    console.log("asd")
    const carMake = req.body.make
    const carModel = req.body.model
    const carColour = req.body.colour
    const result = await carsRepository.postCar(carMake, carModel, carColour)
    res.send(result)
}
exports.putCar = async function(req, res, next){

}
exports.deleteCar = async function(req, res, next){

}