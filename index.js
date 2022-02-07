const leerCon = require("./readConsole");
const lEFichero = require("./writeAndReadObject");
const FICHERO = "persona.json";

let persona = {
    "name": "",
    "surname": "", 
    "age": 0
}

leerCon.leerConsola(persona,FICHERO,(fichero2,persona2)=>{
    lEFichero.leerEscribirFichero(fichero2,persona2);
});


