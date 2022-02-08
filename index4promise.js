const leerCon = require("./readConsolepromise");
const lEFichero = require("./writeAndReadObjectpromise");
const FICHERO = "persona.json";

let persona = {
    "name": "",
    "surname": "", 
    "age": 0
}

// leerCon.leerConsola(persona,FICHERO,(fichero2,persona2)=>{
//     lEFichero.leerEscribirFichero(fichero2,persona2);
// });

leerCon.leerConsola(persona)
.then((data)=>{
    console.log(data);
    return lEFichero.leerEscribirFichero(FICHERO,data);
})
.then((data)=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})