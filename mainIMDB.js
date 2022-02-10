// "use strict";
// //exports.__esModule = true;
// let imdb_1 = require("./imdb");
// let peli = require("./movie");
// let file_system_1 = require("file-system");
// let fs = require("file-system");
// let prof = require("./professional");

class Imdb {

    //constructor
    constructor() {
        this.peliculas = [];
    }

    getDatos() {
        for (let i = 0; i < this.peliculas.length; i++) {
            console.log(this.peliculas[i]);
        }
    }
}

class Movie {

    //constructor
    constructor(title, releaseYear, nacionalidad) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacion = nacionalidad;
        this.actors = [];
        this.foto = "";
        this.director = "Un director";
        this.writer = "Un escritor";
        this.language = "Español";
        this.plataform = "Cines";
        this.isMCU = true;
        this.mainCharacterName = "El prota";
        this.producer = "El productor";
        this.distributor = "El distribuidor";
        this.genre = "Comedia";
    }

    mostrarDatos() {
        for (let datos in this) {
            //this.actors[datos].getDatos()
            console.log(this[datos]);
        }
    }

}

class Professional {

    //Definimos constructor

    constructor(name, age, genre, weight, height,
        hairColor, eyeColor, race, isRetired,
        nationality, oscarsNumber, profession, foto) {

        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.foto = foto;

    }

    // Bloque de métodos

    getDatos() {

        console.log("Datos de " + this.name);
        console.log("Nombre: " + this.name);
        console.log("Edad: " + this.age);
        console.log("Género: " + this.genre);
        console.log("Peso: " + this.weight);
        console.log("Altura: " + this.height);
        console.log("Color de pelo: " + this.hairColor);
        console.log("Color de ojos: " + this.eyeColor);
        console.log("Raza: " + this.race);
        console.log("¿Está retirado?: " + this.isRetired);
        console.log("Nacionalidad: " + this.nationality);
        console.log("Número de Oscars: " + this.oscarsNumber);
        console.log("Profesión: " + this.profession);
        console.log("Imagen: " + this.foto);


    }
}


let libreriaPeliculas = new Imdb();
//let peli = new movie_1.Movie();
let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "./images/bradpit.jpg");
let actor2 = new Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor", "./images/denzel.jpg");
let actor3 = new Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz", "./images/scarlet.jpg");
let actor4 = new Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz", "./images/angelina.jpg");
let actor5 = new Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz", "./images/shopia.jpg");
let actores = [actor1, actor2];
let actores2 = [actor3, actor4];
let actores3 = [actor5];
let actoresPpales = [actor1, actor2, actor3, actor4, actor5];
let nuevaMovie = new Movie("El titulo de mi vida", 1985, "Española");
let nuevaMovie2 = new Movie("Otro titulo 2", 2000, "Inglesa");
let nuevaMovie3 = new Movie("Otro titulo 3", 2010, "Lituana");
nuevaMovie.actors = actores;
nuevaMovie2.actors = actores2;
nuevaMovie3.actors = actores3;
nuevaMovie.foto = "./images/peli1.jpg";
nuevaMovie2.foto = "./images/peli2.jpg";
nuevaMovie3.foto = "./images/peli3.jpg";
libreriaPeliculas.peliculas = [nuevaMovie, nuevaMovie2, nuevaMovie3];


function introducirPeli(){
        let titulo = document.getElementById("inputTitulo").value;
        let ano = parseInt(document.getElementById("inputAno").value);
        let nacionalidad = document.getElementById("inputNacionalidad").value; 
        let director = document.getElementById("inputDirector").value;
        let escritor = document.getElementById("inputEscritor").value;
        let lengua = document.getElementById("inputLenguaje").value;
        let plataforma = document.getElementById("inputPlataforma").value;
        let protago = document.getElementById("inputProtagonista").value;
        let productor = document.getElementById("inputProductor").value;
        let distribuidor = document.getElementById("inputDistribuidor").value;
        let genero = document.getElementById("inputGenero").value;
        let urlFoto = document.getElementById("inputUrl").value;
        
        if(titulo !="" && titulo !=" "){
            let peliNueva = new Movie(titulo,ano,nacionalidad);
            peliNueva.director = director;
            peliNueva.writer = escritor;
            peliNueva.language = lengua;
            peliNueva.plataform = plataforma;
            peliNueva.mainCharacterName = protago;
            peliNueva.producer = productor;
            peliNueva.distributor = distribuidor;
            peliNueva.genre = genero;
            peliNueva.foto =  urlFoto;

            libreriaPeliculas.peliculas.push(peliNueva);

            document.getElementById("inputTitulo").value="";
            document.getElementById("inputAno").value="";
            document.getElementById("inputNacionalidad").value=""; 
            document.getElementById("inputDirector").value="";
            document.getElementById("inputEscritor").value="";
            document.getElementById("inputLenguaje").value="";
            document.getElementById("inputPlataforma").value="";
            document.getElementById("inputProtagonista").value="";
            document.getElementById("inputProductor").value="";
            document.getElementById("inputDistribuidor").value="";
            document.getElementById("inputGenero").value="";
            document.getElementById("inputUrl").value="";

        mostrarPeliculas();
        }else{
            alert("Por favor introduzca la información necesaria para añadir la película.");
        }
        

}

function mostrarPeliculas() {
    let contenido = "";
    document.getElementById("galeria").innerHTML = "";
    for (let i = 0; i < libreriaPeliculas.peliculas.length; i++) {

        contenido += "<div id=card" + (i + 1) + "  class='col-4 mt-5 d-flex flex-row justify-content-center align-items-center'>\
         <div class='card' style='width: 18rem;'>\
             <img src='"+ libreriaPeliculas.peliculas[i].foto + "' class='card-img-top' alt='...'></img>\
             <div class='card-body d-flex flex-column justify-content-center'> \
               <h5 id='articulo"+ (i + 1) + "'class='card-title'> Titulo: " + libreriaPeliculas.peliculas[i].title + "</h5> \
               <p class='card-text'> Año: "+ libreriaPeliculas.peliculas[i].releaseYear + "</p> \
               <p class='card-text'> Nacionalidad: "+ libreriaPeliculas.peliculas[i].nacion + "</p> \
               <p class='card-text'> Director: "+ libreriaPeliculas.peliculas[i].director + "</p> \
               <p class='card-text'> Escritor: "+ libreriaPeliculas.peliculas[i].writer + "</p> \
               <p class='card-text'> Lenguaje: "+ libreriaPeliculas.peliculas[i].language + "</p> \
               <p class='card-text'> Genero: "+ libreriaPeliculas.peliculas[i].genre + "</p> \
             </div>\
             </div>\
         </div>";

        document.getElementById("galeria").innerHTML = contenido;
    }

}


function mostrarActores() {
    let contenido = "";
    document.getElementById("galeria").innerHTML = "";
    for (let i = 0; i < actoresPpales.length; i++) {
        contenido += "<div id=card" + (i + 1) + "  class='col-4 mt-5 d-flex flex-row justify-content-center align-items-center'>\
         <div class='card' style='width: 18rem;'>\
             <img src='"+ actoresPpales[i].foto + "' class='card-img-top' alt='...'></img>\
             <div class='card-body d-flex flex-column justify-content-center'> \
               <h5 id='articulo"+ (i + 1) + "'class='card-title'> Nombre: " + actoresPpales[i].name + "</h5> \
               <p class='card-text'>Nacionalidad: "+ actoresPpales[i].nationality + "</p> \
               <p class='card-text'>Numero de Oscar: "+ actoresPpales[i].oscarsNumber + "</p> \
               <p class='card-text'>Profesion: "+ actoresPpales[i].profession + "</p> \
               <p class='card-text'>Peso: "+ actoresPpales[i].weight + "</p> \
               <p class='card-text'>Altura: "+ actoresPpales[i].height + "</p> \
               <p class='card-text'>Color ojos: "+ actoresPpales[i].eyeColor + "</p> \
               <p class='card-text'>Nacionalidad: "+ actoresPpales[i].nationality + "</p> \
               </div>\
             </div>\
         </div>"; 

        document.getElementById("galeria").innerHTML = contenido;

    }

}


exports.modules = {Imdb, Movie, Professional}