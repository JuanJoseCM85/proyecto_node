const http = require('http');

const server = http.createServer(function(request,response){
    console.log("Peticion recibida del cliente");
    console.log("URL: "+ request.url);
    console.log("Método: " + request.method);
    console.log("Cabecera Content-type:" + request.headers['content-type']);
    console.log("Cabecera Content-length:" + request.headers['content-length']);
    console.log("User-agent: "+ request.headers['user-agent']);
    console.log("Response status code " + response.statusCode);
    response.writeHead(200,{'Content-type': 'text/plain'});

    let web = request.url;
    if(  web == "/bye"){
        let mensaje = {
            "statusCode": 200,
            "message": {"ok": true,"message":"Adios!"}
        }
        response.write(JSON.stringify(mensaje));
        console.log(mensaje);
    }else{
        let mensaje = {
            "statusCode": 200,
            "message": {"ok": true,"message":"Recibido!"}
        }
        response.write(JSON.stringify(mensaje));
        console.log(mensaje);
    }

    response.end();



    
});

server.listen(3000);