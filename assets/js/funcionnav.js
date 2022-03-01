
//BUSQUEDA DE GENERO(PRIMERO LIMPIA Y DESPUES GENERA SOLO ESOS ELEMENTOS.)
const clearAndSearch = (valor) => {
    limpiartodo()
    busquedaGenero(valor);
};

//BORRA TODO
const limpiartodo = () => {
    const docuHTML = document.querySelector(".contenedorLibros")    
    docuHTML.innerHTML = "";
}

//FUNCION DE BUSQUEDA GENERO.
const busquedaGenero = (valor) => {
        let i = 0;    
        ARTICULOS.Productos.map((books) => {
                if(valor == books.Libro.genero){
                        //Creo los contenedores y sus elementos en el contenedor Principal
                        $('.contenedorLibros').append(`
                        <div class="book-name" id="${books.Libro.genero}"> 
                                <div class="tituloH2">
                                        <h2 id="title${i}">${books.Libro.titulo}</h2>
                                </div>
                                <div class="autorSpan">
                                        <span>${books.Libro.autor}</span>
                                </div>
                                <div class="priceSpan">
                                        <span id="price${i}">$${books.Libro.precio}</span>
                                </div>
                                <div class="imagenTapa">
                                        <img src="${books.Libro.imagen}"></img>
                                </div>
                                <div class="reseniaLibro${i}" style="display:none;">
                                <p>${books.Libro.resumen}</p>
                                </div>
                                <div class="botonesAccion">
                                        <button class="bttn" id="bttn${i}">Comprar</button>
                                        <button class="bttnresenia" id="bttnresenia${i}">Reseña</button>
                                </div>
                        </div>`);
                        i++;
                }           
        });
        asignarbttnsCompra();
        asignarBttsResenia();
    
    }
    
    