const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// statisko failu mape (index.html, css, js, img...)
app.use(express.static(path.join(__dirname, "express")));

// sākuma lapa
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, "express", "index.html"));
});

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
  console.debug('Server listening on port ' + port);
});