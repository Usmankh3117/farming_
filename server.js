const http = require('http');
const express = require('express');
const path = require('path');const app = express();



app.use(express.json());
app.use(express.static("express"));// default URL for website
app.use(express.static(path.join(__dirname, 'farming')));
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/farming/landing-page.html'));
});
  
const server = http.createServer(app);

const port = 5000;
server.listen(port);console.debug('Server listening on port ' + port);