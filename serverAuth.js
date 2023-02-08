require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const loginRouter = require('./Routes/loginRouter')
const bodyParser = require('body-parser')
app.use("/login", loginRouter)
app.use(express.json())
app.use(bodyParser.json())

let refreshTokens = []
app.get('/', (req, res) =>{
    res.send("Hello World")
})
app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})
app.listen(4000)