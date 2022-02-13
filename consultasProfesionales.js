// let pro = require("./mainProfesionales");

async function getProfesional(){
    var id = document.getElementById("inputID").value;

    if (id != ""){
        //En caso de que nos pasen el ID
        let url = `http://localhost:3000/profesionales/?id=${id}`;


        let param = {
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            method:"GET"
        }

        try {
            let data = await fetch (url, param);
            let result = await data.json();
            console.log(result);
            if (result.error == true){
                //Aqui tenemos que sacar un toast
                document.getElementById("response").innerHTML = result.mensjae;
                document.getElementById("galeria").innerHTML = "";
            }else{
                let r1 = [result];
                mostrarProfesionales(r1);
            }
            
        } catch (error) {
            console.log(error);
        }
    }else{
        //En caso de que NO nos pasen el ID
        let url = `http://localhost:3000/profesionales`;
        console.log("Entraaa");

        let param = {
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            method:"GET"
        }

        try {
            let data = await fetch(url, param);
            let result = await data.json();
            
            mostrarProfesionales(result);

        } catch (error) {
            console.log(error);
        }

    }
    
}

// (name, age, genre, weight, height,
//     hairColor, eyeColor, race, isRetired,
//     nationality, oscarsNumber, profession, foto)
async function crearProfesional(){


    if(document.getElementById("inputNombre").value == "" || document.getElementById("inputNombre").value == " "){
        document.getElementById("toastMensaje").innerHTML ="Introduce un nombre válido";
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    }else{
        if (document.getElementById("inputEdad").value == ""){
            document.getElementById("toastMensaje").innerHTML ="Introduce una edad válida";
            var toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        }else{

                let p1  = new Professional( document.getElementById("inputNombre").value,
                                        document.getElementById("inputEdad").value,
                                        document.getElementById("inputGenero").value,
                                        document.getElementById("inputPeso").value,
                                        document.getElementById("inputAltura").value,
                                        document.getElementById("inputColorPelo").value,
                                        document.getElementById("inputColorOjos").value,
                                        document.getElementById("inputRaza").value,
                                        document.getElementById("inputRetirado").value,
                                        document.getElementById("inputNacionalidad").value,
                                        document.getElementById("inputNumeroOscars").value,
                                        document.getElementById("inputProfesion").value,
                                        document.getElementById("inputFoto").value);

            let url = `http://localhost:3000/profesionales`;

            let param = {
                headers: {"Content-type": "application/json; charset=UTF-8"},
                body: JSON.stringify(p1),
                method: "POST"
            }

            try {

                let data = await fetch(url, param);
                let result = await data.json();

                mostrarProfesionales(result);
                document.getElementById("toastMensaje").innerHTML ="Profesional "+ p1.name + " insertado.";
                var toast = new bootstrap.Toast(toastLiveExample)
                toast.show()

                limpiarformulario();

            
            } catch (error) {
            console.log(error);
            }
        }

    }
}


async function actualizarProfesional(){
    let p1  ={
        "id": document.getElementById("inputID").value,
        "name": document.getElementById("inputNombre").value,
        "age": document.getElementById("inputEdad").value,
        "genre": document.getElementById("inputGenero").value,
        "weight": document.getElementById("inputPeso").value,
        "height": document.getElementById("inputAltura").value,
        "hairColor": document.getElementById("inputColorPelo").value,
        "eyeColor": document.getElementById("inputColorOjos").value,
        "race": document.getElementById("inputRaza").value,
        "isRetired": document.getElementById("inputRetirado").value,
        "nationality": document.getElementById("inputNacionalidad").value,
        "oscarsNumber": document.getElementById("inputNumeroOscars").value,
        "profession":document.getElementById("inputProfesion").value,
        "foto": document.getElementById("inputFoto").value
    };

    let url = `http://localhost:3000/profesionales`;

    let param = {
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(p1),
        method: "PUT"
    }
                            
    try {
                            
        let data = await fetch(url, param);
        let result = await data.json();
                            
        mostrarProfesionales(result);

        document.getElementById("toastMensaje").innerHTML ="Profesional "+document.getElementById("inputID").value + " actualizado.";
        var toast2 = new bootstrap.Toast(toastLiveExample)
        toast2.show()
                            
                                    
    } catch (error) {
        console.log(error);
    }
    
}

async function eliminarProfesional(){

    let id = document.getElementById("inputID").value;

    console.log("Entra en eliminar: " + id);

    if (id != ""){
        //En caso de que nos pasen el ID
        let url = `http://localhost:3000/profesionales`;

        p1 = {
            "id": id
        }
        let param = {
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(p1),
            method:"DELETE"
        }

        try {

            let data = await fetch(url, param);
            let result = await data.json();
            
            mostrarProfesionales(result);
            document.getElementById("toastMensaje").innerHTML ="Profesional "+ id + " eliminado.";
            var toast3 = new bootstrap.Toast(toastLiveExample)
            toast3.show();
            limpiarformulario();
            
            
        } catch (error) {
            console.log(error);
        }
    }else{
        //Sacar un toast para indicar que deben introducir un ID PARA ELIMINAR.
    }
}