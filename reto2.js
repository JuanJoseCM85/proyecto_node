var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface(process.stdin,process.stdout);

let persona = {
    "name": "",
    "surname": "",
    "age": 0
}




rl.question("¿Cuál es tu nombre?",(respuesta)=>{
    //console.log(`Hola, ${respuesta}!`);
    persona.name = respuesta;
    rl.question("¿Cual es tu apellido?",(respuesta2)=>{
        persona.surname = respuesta2;
        rl.question("¿Cuál es tu edad?",(respuesta3)=>{
            persona.age = respuesta3; 
            
            // Escribimos y leemos el fichero
            fs.writeFile("persona.json",JSON.stringify(persona),(err)=>{
                if(err){
                    console.log(err);
                    return;
                }
                // USANDO READFILE
                // fs.readFile("persona.json",(err,data)=>{
                //     if(err){
                //         console.log(err);
                //         return;
                //     }
                //     leido = data.toString();
                //     console.log(leido);
                //     process.exit();
                    
                // });

                //USANDO READLINE
                let lector = readline.createInterface({
                    input: fs.createReadStream("persona.json")
                });

                lector.on("line", linea =>{
                    console.log("Linea nueva: ", linea);
                    process.exit();
                });
            });


            // Fin de lectura y escritura
        });
    });  
});








