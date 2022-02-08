const { rejects } = require('assert');
var fs = require('fs/promises');
const { resolve } = require('path/posix');
var readline = require('readline');



function leerEscribirFichero(fichero,persona){

    const fich = new Promise((resolve,rejects)=>{
        fs.writeFile(fichero,JSON.stringify(persona))
        .then(()=>{
            console.log("Archivo creado correctamente");
            return fs.readFile(fichero,'utf-8');
        })
        .then((data)=>{
            console.log(JSON.parse(data));
            resolve(JSON.parse(data));
        })
        .catch(err =>{
            console.log(err);
            rejects(err);
        })

    });
    
    return fich;
}

module.exports = { leerEscribirFichero }