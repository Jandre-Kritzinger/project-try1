const express = require('express')
const jwt = require("jsonwebtoken");
const router = express.Router()
router.use(express.json())

function generateAccesstoken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10m'})
}
let refreshTokens = []
router.post('/token', (req, res) =>{
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
        if (err) return res.sendStatus(403)
        const accessToken = generateAccesstoken(({name: user.name}))
        res.json({accessToken: accessToken})
    })
})


router.post('/', (req, res) => {
    const username = req.body.username
    const user = {name: username}
    const accessToken = generateAccesstoken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({accessToken: accessToken, refreshToken: refreshToken})
})

module.exports = router