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
        if(actores != null && id < actores.length){
           
            respuesta = {error: false, codigo:200, mensaje:"No existen los profesionales", resultado: actores[id]};
        }else if( actores == null){
            respuesta = {error: true, codigo:200, mensaje:"No existen los profesionales"};
        }else{
            respuesta = {error: true, codigo:200, mensjae:"El profesional buscado no existe"};
        }    
            
    }else if (actores != null){
           
            respuesta = {error: false, codigo:200, mensaje:"No existen los profesionales", resultado: actores};
        }else{
            respuesta = {error: true, codigo:200, mensaje:"No existen los profesionales"};
        }
            
    
    
    response.send(respuesta);
});

app.post("/profesionales",function(request,response){

    let respuesta;

    if (request.body != null){
        actorNuevo = new imdb1.modules.Professional(request.body.name, 
            request.body.age, 
            request.body.genre, 
            request.body.weight, 
            request.body.height,
            request.body.hairColor,
            request.body.eyeColor,
            request.body.race,
            request.body.isRetired,
            request.body.nationality,
            request.body.oscarsNumber,
            request.body.profession,
            request.body.foto);
        actores.push(actorNuevo);

        respuesta = {error:false, codigo:200,mensaje:"Usuario creado correctamente", resultado: actores};
    }else{
        respuesta = {error:true, codigo:200,mensaje:"Error al crear el usuario", resultado: actores};
    }
    
    

    
    response.send(respuesta);
});

app.put("/profesionales", function(request,response){
    let respuesta;

    let id = request.body.id;

    if (id < actores.length && actores[id] != null){
        actores[id].name = request.body.name;
        actores[id].age = request.body.age;
        actores[id].genre = request.body.genre;
        actores[id].weight = request.body.weight;
        actores[id].height = request.body.height;
        actores[id].hairColor = request.body.hairColor;
        actores[id].eyeColor = request.body.eyeColor;
        actores[id].race = request.body.race;
        actores[id].isRetired = request.body.isRetired;
        actores[id].nationality = request.body.nationality;
        actores[id].oscarsNumber = request.body.oscarsNumber;
        actores[id].profession = request.body.profession;
        actores[id].foto = request.body.foto;

        respuesta = {error:false, codigo:200, mensaje:"Usuario Modificado", resultado: actores};
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
        respuesta = {error:false, codigo:200, mensaje:"Usuario no existe", resultado: actores};
    }else{
        respuesta = {error:true, codigo:200, mensaje:"Usuario no existe", resultado: null};
    }

    response.send(respuesta);
});

app.listen(3000);