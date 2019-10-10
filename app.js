const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req)
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hewwo world uwu</h1>')
    res.write('<h3>senpai will anata-wa notice my reqwest? ^_^</h3>')
    res.send()
})

app.listen(3000)