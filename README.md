# NodeJS
### Works on asynchronous non-blocking I/O model.
### Does not block any request and multiple requests are managed simultaneouly using single thread.

## NPM (Node Package Manager)
### Works like pip for python, it facilates us to install packages.

## Installing packages
``` npm install <package name> ```
### Example
``` npm install express ```
### OR
``` npm i express ```

### Do not share node_modules, due to its heavy weighted
### instead use 
``` npm i ```
### when working on someone else's code

### Install packaging globally (on the entire operating system/server)
``` npm i -g <package_name> ```
### Example 
``` npm i -g nodemon ```

### Dev dependencies, use only during Dev
``` npm i --save-dev nodemon ```

## Uninstalling package
``` npm uninstall express ```
### OR 
``` npm uninstall nodemon```

## Package.json vs package_lock.json
### package.json contains the packages to be installed in that project
### but there are times when packages require some other internal packages with specific version, so package_lock.json contains the entire dependecy tree

## Importing
###  1. Common JS modules -> importing second.js to index.js
###  2. ECMAScript modules -> make changes in package.json


## Module Wrapper Function
``` function(exports, require, module, __filename, __dirname){
    //NodeJS wraps the function to export here
}  
console.log(exports, require, module, __filename, __dirname)
```

## Some Cool packages

### OS module -> osModule.js ( built in)
``` const os = require('os');```
### Path module -> pathModule.js (built in)
```  const path = require("path"); ```
### File System module -> fileSystemModule.js
``` const fs = require("fs"); ```
### URL Module -> urlModule.js
``` import url from 'url'; ```
### Http Module -> httpModule.js
``` const http = require("http"); ```

## EVENTS
```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('event', ()=>{
    console.log("Event occured.....")
})
myEmitter.emit('event')
```

## EXPRESS JS
### used to create simple server, simpler than nodejs

## Deploying
### Go To Digital Ocean/AWS/LiNode....
### Buy a Droplet
### Give it a hostname
### ssh into the machine from your server

## STEPS:

### 1. Installing nodejs
``` 
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version && npm --version
```

### 2. Create a simple nodejs file
```
mkdir nodeAPP
cd nodeAPP
npm init -y
npm i express
sudo vim server.js

const express = require("express");
const fs = require("fs")
const app = express();
const port = 4582;

app.get('/', (request, response) =>{
    response.send('<h1>Hello</h1>');
});

app.listen(port, ()=>{
    console.log(`Server running on: ${port}`)
});

node server.js 

```
#### Using pm2 as a process Manager
#### Let us install and use pm2 as a process manager
```
sudo npm i pm2 -g
pm2 start app.js
ufw allow <port>
```

### 3. Configuring Nginx as reverse proxy
```
sudo apt install nginx -y
sudo vim /etc/nginx/sites-available/nodeApp
```
The content of file will be
```
server{
    server_name <IP_ADDRESS_OF_SITE>
        location / {
            proxy_pass http://localhost:<port>;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
}
```
Final Command
```
sudo ln -s /etc/nginx/sites-available/nodeApp /etc/nginx/sites-enabled
sudo service nginx restart
```

### visit SERVER's IP on browser