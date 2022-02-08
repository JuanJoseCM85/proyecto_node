var fs = require('fs/promises');
var readline = require('readline');
//var rl = readline.createInterface(process.stdin,process.stdout);

let persona = {
    "name": "",
    "surname": "",
    "age": 0
}

function pregunta(pregunta){
    const question= new Promise((resolve,reject)=> {
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
    return fs.writeFile("persona2.json",JSON.stringify(persona));
})
.then(()=>{
    console.log("Archivo creado correctamente.");
    return fs.readFile("persona2.json");
})
.then((data)=>{
    console.log(data.toString());
})
.catch(err => {
    console.log(err);
})    