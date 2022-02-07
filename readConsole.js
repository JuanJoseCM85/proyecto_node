var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
const lEFichero = require("./writeAndReadObject");

function leerConsola( persona, FICHERO){
    rl.question("¿Cuál es tu nombre?",(respuesta)=>{
        //console.log(`Hola, ${respuesta}!`);
        persona.name = respuesta;
        rl.question("¿Cual es tu apellido?",(respuesta2)=>{
            persona.surname = respuesta2;
            rl.question("¿Cuál es tu edad?",(respuesta3)=>{
                persona.age = respuesta3;
                lEFichero.leerEscribirFichero(FICHERO,persona);
                
            });
        });  
    });
}

module.exports = { leerConsola }