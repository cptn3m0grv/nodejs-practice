const express = require("express");
const fs = require("fs")
const app = express();
const port = 4582;

app.get('/', (request, response) =>{
    response.send('<h1>Hello</h1>');
});

app.listen(port, ()=>{
    console.log(`Server running on: ${port}`)
})
