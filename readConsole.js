var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
const lEFichero = require("./writeAndReadObject");

function leerConsola(persona,fichero,callback){

    // let persona = {
    //     "name": "",
    //     "surname": "",
    //     "age": 0
    // }

    rl.question("¿Cuál es tu nombre?",(respuesta)=>{
        persona.name = respuesta;
        rl.question("¿Cual es tu apellido?",(respuesta2)=>{
            persona.surname = respuesta2;
            rl.question("¿Cuál es tu edad?",(respuesta3)=>{
                persona.age = respuesta3;
                rl.close();
                callback(fichero,persona);
                
            });
        });  
    });
}

module.exports = { leerConsola }