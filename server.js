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

app.post('/login', (req, res) => {
    const username = req.body.username
    const user = {name: username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log("asd")
    if (token == null) {
        return res.sendStatus(401)
    }
    console.log("123")
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        console.log("321123")
        req.user = user
        next()
    })
}

app.listen(3000)