const http = require('http')

const server = http.createServer(
    (req, res) => {
        console.log(req)
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Hewwo uwu Rawr x3</h1>')
        res.write('<h3>*nuzzles* how are you senpaii</h3>')
        res.end()
    }
)

server.listen(3000)