const carSchema = require('../models/cars.js')
const mongoose = require('mongoose')
const logger = require("../config/logger")
exports.getCar = async function(){
    try {
        const cars = await carSchema.find()
        logger.log('info', cars)
        return cars
    } catch (err) {
        logger.error('Could not get cars')
        throw err
    }
}
exports.getMakes = async function(){
    try {
        const makes = await carSchema.distinct("make")
        logger.log('info', makes)
        return makes
    } catch (err) {
        logger.error('Could not get makes')
        throw err
    }
}
exports.getSpecCar = async function(carId){
    try {
        const cars = await carSchema.find({"_id": carId})
        logger.log('info', cars)
        return cars
    } catch (err) {
        console.log("123456789876543")
        logger.error('Could not find car')
        throw err
    }
}
exports.postCar = async function(carMake, carModel, carColour){
    const car = new carSchema ({
        make: carMake,
        model: carModel,
        colour: carColour
    })
    console.log(car)
    try{
        const newCar = await car.save()
        logger.log('info', logger.log('info', newCar))
        return newCar
    } catch (err){
        logger.error( 'Could not add new car')
        throw err
    }
}
exports.putCar = async function(carId, carMake, carModel, carColour){
    try {
        const filter = {"_id": carId}
        const updateDoc = {
            $set: {
                make: carMake,
                model: carModel,
                colour: carColour
            }
        }
        const result = await carSchema.updateOne(filter, updateDoc)
        logger.log('info', result)
        return result
    } catch (err) {
        logger.error('Could not update car')
        throw err

    }
}
exports.deleteCar = async function(carId){
    try {
        const cars = await carSchema.deleteOne({"_id": carId})
        logger.log('info', cars)
        return cars
    } catch (err) {
        logger.error('Could not delete car')
        throw err
    }
}