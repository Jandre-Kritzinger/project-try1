require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

app.get('/', (req, res) =>{
    res.send("Hello World")
})

const posts = [
    {
        username: 'Jandre',
        title: 'Post 1'
    },
    {
        username: 'Jo-Lize',
        title: 'Post 2'
    }
]
app.get('/posts', authenticateToken, (req, res) => {

    res.json(posts.filter(post => post.username === req.user.name))
})
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        return res.sendStatus(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}
const carsRouter = require('./Routes/carsRouter')
app.use("/", carsRouter)
app.listen(3000)