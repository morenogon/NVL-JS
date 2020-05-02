crearLista();

function crearLista(){
    debugger
    var peliculas = '{ "peliculas" : [' +
    '{ "nombre":"El señor de los anillos" , "genero":"Acción" },' +
    '{ "nombre":"Regreso al Futuro" , "genero":"Acción" },' +
    '{ "nombre":"La Virgen de agosto" , "genero":"Drama" },' +
    '{ "nombre":"La hija de un ladrón" , "genero":"Drama" },' +
    '{ "nombre":"A quien hierro mata" , "genero":"Drama" },' +
    '{ "nombre":"Frozen" , "genero":"Animación" },' +
    '{ "nombre":"Parásitos" , "genero":"Suspense" },' +
    '{ "nombre":"Los vengadores" , "genero":"Acción" },' +
    '{ "nombre":"Los increibles 2" , "genero":"Animación" } ]}';    

    var json = JSON.parse(peliculas);

    var div_element = document.createElement("div");
    var list_element = document.createElement("ul");
    div_element.appendChild(list_element);

    for(var i = 0; i < json["peliculas"].length - 1; i++){
        var listItem_element = document.createElement('li');
        var nombre = json["peliculas"][i].nombre;
        var genero = json["peliculas"][i].genero;

        listItem_element.textContent = nombre;

        switch(genero){
            case "Acción":
                listItem_element.textContent += String.fromCodePoint(0x1F4A3);
                break;
            case "Drama":
                listItem_element.textContent += String.fromCodePoint(0x1F62D);
                break;
            case "Suspense":
                listItem_element.textContent += String.fromCodePoint(0x1F632);
                break;
            case "Animación":
                listItem_element.textContent += String.fromCodePoint(0x1F680);
                break;
        }

        list_element.appendChild(listItem_element);
    }      

    //document.getElementsByTagName('body')[0].appendChild(div_element);
    document.firstElementChild.lastElementChild.appendChild(div_element);
}
