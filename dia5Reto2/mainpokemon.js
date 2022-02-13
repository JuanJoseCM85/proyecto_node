

async function getPokemon(){
    
    let id = document.getElementById("inputID").value;
    let nombre = document.getElementById("inputNombre").value;
    let url ="";

    if( id != ""){
       url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    }else{
        if ( nombre != ""){
            url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
        }else{

        }
    }
    
    if (url != ""){
        let param = {
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            method: "GET"
        }
    
        try {
            let data = await fetch(url,param);
            let result = await data.json();
           
    
            document.getElementById("muestraNombre").innerHTML = result.name;
            document.getElementById("muestraID").innerHTML = result.id;
            document.getElementById("muestraExpBase").innerHTML = result.base_experience;
            document.getElementById("muestraAltura").innerHTML = result.height;
            document.getElementById("muestraPeso").innerHTML = result.weight;
            document.getElementById("imagenPokemon").src = result.sprites.front_default;
            document.getElementById("imagenPokemon2").src = result.sprites.back_default;


            console.log(result);

            let hability= "<table class='table'>\
            <thead>\
              <tr>\
                <th scope='col'>Habilidad</th>\
                <th scope='col'>Nombre</th>\
                <th scope='col'>Url</th>\
              </tr>\
            </thead>\
            <tbody>";

            for (let i = 0; i< result.abilities.length; i++){
                
                hability += "<tr>\
                    <td id='muestraHabilidad'>" + (i+1) + "</td>\
                    <td id='muestraNombreHabilidad'>"+ result.abilities[i].ability.name +"</td>\
                    <td id='muestraUrlHabilidad'>"+ result.abilities[i].ability.url +"</td>\
                  </tr>";
               
            }

            hability +=  "</tbody>\
                    </table>";
            
            document.getElementById("habilidades").innerHTML = hability;

        } catch (error) {
            console.log(error);
        }
    }else{
        
        var toast = new bootstrap.Toast(toastLiveExample);
        document.getElementById("toastMensaje").innerHTML = "Por favor introduce un id o Nombre";
        toast.show()
    }
    
}


var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}