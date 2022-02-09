const express = require('express');
const app = express();


app.get('/', function(req, res){
    console.log("Petición recibida por el cliente");
    console.log("Url: " + req.url);
    console.log("Metodo : " + req.method);
    console.log("User-agent: " + req.headers['user-agent']);

    let mensaje = {
        "statusCode": 200,
        "message": {"ok": true,"message":"Recibido!"}
    }

        res.send(JSON.stringify(mensaje));

});

app.get('/bye', function(req, res){
    console.log("Petición recibida por el cliente");
    console.log("Url: " + req.url);
    console.log("Metodo : " + req.method);
    console.log("User-agent: " + req.headers['user-agent']);

    let mensaje = {
        "statusCode": 200,
        "message": {"ok": true,"message":"Adios!"}
    }

        res.send(JSON.stringify(mensaje));

});

app.post('/', function(req,res){
    console.log("Petición recibida por el cliente");
    console.log("Url: " + req.url);
    console.log("Metodo : " + req.method);
    console.log("User-agent: " + req.headers['user-agent']);

    let mensaje = {
        "statusCode": 200,
        "message": {"ok": true,"message":"Adios!"}
    }

        res.send(JSON.stringify(mensaje));
});
app.put('/', function(req,res){
    console.log("Petición recibida por el cliente3ee");
    console.log("Url: " + req.url);
    console.log("Metodo : " + req.method);
    console.log("User-agent: " + req.headers['user-agent']);

    let mensaje = {
        "statusCode": 200,
        "message": {"ok": true,"message":"Adios!"}
    }

        res.send(JSON.stringify(mensaje));
});

app.listen(7000);