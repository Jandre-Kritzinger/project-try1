const carSchema = require('../models/cars.js')
const mongoose = require('mongoose')

exports.getCar = async function(){
    try {
        const cars = await carSchema.find()
        return cars
    } catch (err) {
        throw err
    }
}
exports.getMakes = async function(){
    try {
        const cars = await carSchema.distinct("make")
        return cars
    } catch (err) {
        throw err
    }
}
exports.getSpecCar = async function(carId){
    try {
        const cars = await carSchema.find({"_id": carId})
        return cars
    } catch (err) {
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
        return newCar
    } catch (err){
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
        return result
    } catch (err) {
        throw err
    }
}
exports.deleteCar = async function(carId){
    try {
        const cars = await carSchema.deleteOne({"_id": carId})
        return cars
    } catch (err) {
        throw err
    }
}