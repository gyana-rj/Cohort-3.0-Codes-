
const express = require("express");
const app = express();


//route handlers
// req used for request
// res used for responding back what are you going to respond back with
app.get('/', function(req, res){
    res.send('<b> Hello World </b>')
    // res.json({
    //     name: "harkirat"
    // })
})

app.post('/', function(req, res){
    res.send('hello world from the post end point')
})

app.get('/asd', function(req, res){
    res.send('Hello from the asd point.')
})

app.listen(3000) // which port
