const express = require("express");
const cors  = require ("cors");
const app = express();

let imdb1 = require("./mainIMDB");

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let actor1 = new imdb1.modules.Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "./images/bradpit.jpg");
let actor2 = new imdb1.modules.Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor", "./images/denzel.jpg");
let actor3 = new imdb1.modules.Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz", "./images/scarlet.jpg");
let actor4 = new imdb1.modules.Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz", "./images/angelina.jpg");
let actor5 = new imdb1.modules.Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz", "./images/shopia.jpg");
let actor6 = new imdb1.modules.Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz", "./images/scarlet.jpg");

let actores = [actor1,actor2,actor3,actor4,actor5,actor6];


app.get("/", function(request,response){
    let respuesta = {error: true, codigo:200, mensaje:"Punto de inicio"};
    response.send(respuesta);
});

app.get("/profesionales", function(request,response){
    
    let respuesta;
    let id = request.query.id;
    if (id != null){
        if(actores != null && id < actores.length)
        respuesta = actores[id];
    else if( actores == null)
            respuesta = {error: true, codigo:200, mensaje:"No existen los profesionales"};
        else    
            respuesta = {error: true, codigo:200, mensjae:"El profesional buscado no existe"}
    }else if (actores != null){
            respuesta = actores;
        }else
            respuesta = {error: true, codigo:200, mensaje:"No existen los profesionales"};
    
    
    response.send(respuesta);
});

app.post("/profesionales",function(request,response){

    let respuesta;
    console.log(request.body);
    
    actorNuevo = new imdb1.modules.Professional(request.body.nombre, request.body.edad, request.body.sexo, 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "./images/bradpit.jpg");
    actores.push(actorNuevo);

    respuesta = {error:false, codigo:200,mensaje:"Usuario creado", resultado: actores};
    
    response.send(respuesta);
});

app.put("/profesionales", function(request,response){
    let respuesta;
    console.log(request.body);

    let id = request.body.id;

    if (id < actores.length && actores[id] != null){
        actores[id].name = request.body.nombre;
        actores[id].age = request.body.edad;
        actores[id].genre = request.body.sexo;
        respuesta = {error:false, codigo:200, mensaje:"Usuario modificado correctamente",resultado: actores[id]};
    }else{
        respuesta = {error:true, codigo:200, mensaje:"Usuario no existe", resultado: null};
    }

    response.send(respuesta);
});

app.delete("/profesionales", function(request,response){
    let respuesta;
    let id = request.body.id;

    if (id < actores.length && actores[id] != null){
        actores.splice(id,1);
        respuesta = {error:false, codigo:200, mensaje:"Usuario eliminado correctamente",resultado: actores};
    }else{
        respuesta = {error:true, codigo:200, mensaje:"Usuario no existe", resultado: null};
    }

    response.send(respuesta);
});

app.listen(3000);