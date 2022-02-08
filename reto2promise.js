var fs = require('fs/promises');
var readline = require('readline');
//var rl = readline.createInterface(process.stdin,process.stdout);

let persona = {
    "name": "Juan",
    "surname": "Lopez",
    "age": 33
}


fs.writeFile("persona3.json",JSON.stringify(persona))
.then(()=>{
    console.log("Archivo creado correctamente");
    return fs.readFile("persona3.json");
})
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.log(err);
})

