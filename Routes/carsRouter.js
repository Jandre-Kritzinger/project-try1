const express = require('express')
const router = express.Router()
const carsController = require('../controllers/carController.js')

router.get('/cars', carsController.getCar)
router.get('/cars/makes', carsController.getMakes)
router.post('/cars',carsController.postCar)
router.get('/cars/:id', carsController.getSpecCar)
router.put('/cars/:id',carsController.putCar)
router.delete('/cars/:id',carsController.deleteCar)

module.exports = router