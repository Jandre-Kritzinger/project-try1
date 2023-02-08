const express = require('express')
const router = express.Router()
const carsController = require('../controllers/carController.js')

router.get('/cars', carsController.getCar)
router.post('/cars',carsController.postCar)
router.put('/cars',(req, res)=> {res.send("put")})
router.delete('/cars',(req, res)=> {res.send("delete")})

module.exports = router