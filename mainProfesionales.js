class Professional {

    //Definimos constructor

    constructor(name, age, genre, weight, height,
        hairColor, eyeColor, race, isRetired,
        nationality, oscarsNumber, profession, foto) {

        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.foto = foto;

    }

    // Bloque de métodos

    getDatos() {

        console.log("Datos de " + this.name);
        console.log("Nombre: " + this.name);
        console.log("Edad: " + this.age);
        console.log("Género: " + this.genre);
        console.log("Peso: " + this.weight);
        console.log("Altura: " + this.height);
        console.log("Color de pelo: " + this.hairColor);
        console.log("Color de ojos: " + this.eyeColor);
        console.log("Raza: " + this.race);
        console.log("¿Está retirado?: " + this.isRetired);
        console.log("Nacionalidad: " + this.nationality);
        console.log("Número de Oscars: " + this.oscarsNumber);
        console.log("Profesión: " + this.profession);
        console.log("Imagen: " + this.foto);


    }
}

// let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor", "./images/bradpit.jpg");
// let actor2 = new Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor", "./images/denzel.jpg");
// let actor3 = new Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz", "./images/scarlet.jpg");
// let actor4 = new Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz", "./images/angelina.jpg");
// let actor5 = new Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz", "./images/shopia.jpg");
// let actoresPpales = [actor1, actor2, actor3, actor4, actor5];



function mostrarProfesionales(actoresPpales) {
    let contenido = "";
    
    document.getElementById("galeria").innerHTML = "";
    console.log("Longitud: "+ actoresPpales.length);
    for (let i = 0; i < actoresPpales.length; i++) {
        console.log("Entra Mostrar Profesionales");
        // contenido += "<div id=card" + (i + 1) + "  class='col-4 mt-5 d-flex flex-row justify-content-center align-items-center'>\
        //  <div class='card d-flex flex-column align-items-center' style='width: 18rem;'>\
        //      <img src='"+ actoresPpales[i].foto + "' class='card-img-top' alt='...'></img>\
        //      <div class='card-body d-flex flex-column justify-content-center'> \
        //        <h5 id='articulo"+ (i + 1) + "'class='card-title'> Nombre: " + actoresPpales[i].name + "</h5> \
        //        <p class='card-text'>Nacionalidad: "+ actoresPpales[i].nationality + "</p> \
        //        <p class='card-text'>Numero de Oscar: "+ actoresPpales[i].oscarsNumber + "</p> \
        //        <p class='card-text'>Profesion: "+ actoresPpales[i].profession + "</p> \
        //        <p class='card-text'>Peso: "+ actoresPpales[i].weight + "</p> \
        //        <p class='card-text'>Altura: "+ actoresPpales[i].height + "</p> \
        //        <p class='card-text'>Color ojos: "+ actoresPpales[i].eyeColor + "</p> \
        //        <p class='card-text'>Nacionalidad: "+ actoresPpales[i].nationality + "</p> \
        //        </div>\
        //      </div>\
        //  </div>"; 

        contenido += "<div class='accordion' id='accordionPanelsStayOpenExample'>\
                        <div class='accordion-item'>\
                        <h2 class='accordion-header' id='panelsStayOpen-heading"+i+"'>\
                            <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapse"+i+"' aria-expanded='true' aria-controls='panelsStayOpen-collapse"+i+"'>\
                            "+ actoresPpales[i].name +"\
                            </button>\
                        </h2>\
                        <div id='panelsStayOpen-collapse"+i+"' class='accordion-collapse collapse' aria-labelledby='panelsStayOpen-heading"+i+"'>\
                            <div class='accordion-body'>\
                            <strong>Nacionalidad: "+ actoresPpales[i].nationality +" </stron>\
                            <ul>\
                                <li>Edad "+ actoresPpales[i].age +"</li>\
                                <li>Peso "+ actoresPpales[i].weight +"</li>\
                                <li>Altura "+ actoresPpales[i].height +"</li>\
                                <li>¿Esta Jubilado? "+ actoresPpales[i].isRetired +"</li>\
                                <li>Oscars Conseguidos: " + actoresPpales[i].oscarsNumber + " </li>\
                            </ul>\
                            </div>\
                        </div>\
                        </div>\
                    </div>";
        }

        document.getElementById("galeria").innerHTML = contenido;

        

    

}
function limpiarformulario(){
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputEdad").value= "";
    document.getElementById("inputGenero").value= "";
    document.getElementById("inputPeso").value= "";
    document.getElementById("inputAltura").value= "";
    document.getElementById("inputColorPelo").value= "";
    document.getElementById("inputColorOjos").value= "";
    document.getElementById("inputRaza").value= "";
    document.getElementById("inputRetirado").value= "";
    document.getElementById("inputNacionalidad").value= "";
    document.getElementById("inputNumeroOscars").value= "";
    document.getElementById("inputProfesion").value= "";
    document.getElementById("inputFoto").value= "";
    document.getElementById("inputID").value= "";
}

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

//exports.modules = {Professional}