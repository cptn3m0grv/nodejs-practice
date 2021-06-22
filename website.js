const http = require("http");
const fs = require("fs")

const port = process.env.PORT || 4582;

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html')
    if(request.url === "/"){
        response.statusCode = 200;
        response.end('<h1>Gaurav Goyal</h1>')
    }else if(request.url === "/about"){
        response.statusCode = 200;
        response.end('<script>alert("About page does not exit");</script>')
    }else if(request.url === "/hidden"){
        response.statusCode = 500;
        const data = fs.readFileSync('./page.html');
        response.end(data.toString());
    }else{
        response.statusCode = 404;
        const data = fs.readFileSync('./alert.html')
        response.end(data.toString())
    }
})

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});