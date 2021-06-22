const http = require("http");

const port = process.env.PORT || 4582;

const server = http.createServer((request, response) => {
    console.log(request.url)
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Gaurav Goyal</h1>')
})

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});