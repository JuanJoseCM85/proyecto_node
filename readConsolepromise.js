const { rejects } = require('assert');
const { resolve } = require('path/posix');
var readline = require('readline');


function pregunta(pregunta){
    const question = new Promise((resolve,rejects)=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta,(respuesta)=>{
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

function leerConsola(persona){

    const lectura = new Promise((resolve,rejects)=>{

        pregunta("¿Como te llamas?")
        .then((respuesta)=>{
            persona.name = respuesta;
            return pregunta("¿Cuál es tu apellido?") 
        })
        .then((respuesta)=>{
            persona.surname = respuesta;
            return pregunta("¿Cuál es tu edad?")
        })
        .then((respuesta)=>{
            persona.age = respuesta;
            resolve(persona);
        })
        .catch(err=>{
            rejects (err);
        })
       
    });

    return lectura;

}

module.exports = { leerConsola }