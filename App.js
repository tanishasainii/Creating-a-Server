const http = require('http')
const fs = require('fs')
const port = 8000

//creating the server with node

const server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/html'})
  fs.readFile('index.html', function(error, data){
    if(error){
      res.writeHead(404)
      res.write('Error : file not found')
    }
    else{
      res.write(data)
    }
    res.end()
  })

})

//listening the server

server.listen(port, function(error){
  if(error){
    console.log("Something went wrong", error)
  }
  else{
    console.log("Your server is listening on port", port)
}
})