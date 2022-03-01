var ARTICULOS;

    //uso ajax para cargar el Json y asignar el contenido del Json a la var ARTICULOS
$.ajax({
    type: "GET",
    url: "articulos.json",
    success: function (response) {
        ARTICULOS = response;
            // METODO fetch que se puede usar en vez del metodo ajax
            //fetch("URL"), (e) =>{
            //    console.log(e)S
            //}
            //
            //    
    }
});




