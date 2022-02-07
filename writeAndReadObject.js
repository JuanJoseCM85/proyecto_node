var fs = require('fs');
var readline = require('readline');



function leerEscribirFichero(fichero,persona){

     // Escribimos y leemos el fichero
     fs.writeFile(fichero,JSON.stringify(persona),(err)=>{
        if(err){
            console.log(err);
            return;
        }
        //USANDO READFILE
        // fs.readFile("persona.json",(err,data)=>{
        //     if(err){
        //         console.log(err);
        //         return;
        //     }
        //     leido = data.toString();
        //     console.log("holalaaaaa");
        //     console.log(leido);
        //     process.exit();
            
        // });

        //USANDO READLINE
        let lector = readline.createInterface({
            input: fs.createReadStream(fichero)
        });

        lector.on("line", linea =>{
            console.log("Linea nueva: ", linea);
            process.exit();
        });
    });

}

module.exports = { leerEscribirFichero }