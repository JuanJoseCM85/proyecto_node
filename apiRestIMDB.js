const express = require("express");
const cors  = require ("cors");
const app = express();

let imdb1 = require("./mainIMDB");

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "./images/bradpit.jpg");
let actor1 = new imdb1.modules.Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "./images/bradpit.jpg");

app.get("/", function(request,response){
    let respuesta = {error: true, codigo:200, mensaje:"Punto de inicio"};
    response.send(respuesta);
});

app.get("/profesional", function(request,response){
    
    let respuesta;
    if(actor1 != null)
        respuesta = actor1;
    else
        respuesta = {error: true, codigo:200, mensaje:"No existe un profesinoal"};
    
    response.send(respuesta);
});

app.post("/profesional",function(request,response){

    let respuesta;
    console.log(request.body);
    if (actor1 == null){
        actor1 = new imdb1.modules.Professional(request.body.nombre, request.body.edad, request.body.sexo, 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "./images/bradpit.jpg");
        respuesta = {error:false, codigo:200,mensaje:"Usuario creado", resultado: actor1};
    }else{
        respuesta = {error: true, codigo:200, mensaje:"Usuario ya existe",resultado: null};
    }
    response.send(respuesta);
});

app.put("/profesional", function(request,response){
    let respuesta;
    console.log(request.body);

    if (actor1 != null){
        actor1.name = request.body.nombre;
        actor1.age = request.body.edad;
        actor1.genre = request.body.sexo;
        respuesta = {error:false, codigo:200, mensaje:"Usuario modificado correctamente",resultado: actor1};
        
    }else{
        respuesta = {error:true, codigo:200, mensaje:"Usuario no existe", resultado: actor1};
    }

    response.send(respuesta);
});

app.delete("/profesional", function(request,response){
    let respuesta;
    if(actor1 != null){
        actor1 = null;
        respuesta = {error: false, codigo:200, mensaje:"Usuario borrado correctamente", resultado: actor1};
    }else{
        respuesta = {error: true, codigo:200, mensaje:"El usuario no existe",resultado: actor1};
    }

    response.send(respuesta);
});

app.listen(3000);