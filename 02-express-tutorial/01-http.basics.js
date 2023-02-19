const http = require('http')
const server = http.createServer((req, res) => {
     console.log('Started using erver on port 5000')
   // res.end("Home page")
     const url = req.url
    // // home page
     if (url === '/') {
     res.writeHead(200, { 'content-type': 'text/html' })
     res.write('<h1>home page</h1> <a href ="https://www.youtube.com/watch?v=Oe421EPjeBE&t=13246s">youtube</a>')
     res.end()
     
    }
    // about page
    else if (url === '/about') {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write('<h1>about page</h1>')
      res.end()
    }
    // 404
    else {
      res.writeHead(404, { 'content-type': 'text/html' })
      res.write('<h1>page not found</h1>')
      res.end()
    }
  })
  
  server.listen(5000)
  