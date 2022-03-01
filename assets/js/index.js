/* creo el Nuevo Objeto que va a contener los libros*/

//let nuevaLibreria = new libreria();
//let libro1 = new libro("El nombre del Viento", "Patrick Rothfuss", "Fantasia", 100, 5249.00, 10, 'https://www.popularlibros.com/imagenes.webp/9788401/978840133720.webp', "He robado princesas a reyes agónicos. Incendié la ciudad de Trebon. He pasado la noche con Felurian y he despertado vivo y cuerdo. Me expulsaron de la Universidad a una edad a la que a la mayoría todavía no los dejan entrar. He recorrido de noche caminos de los que otros no se atreven a hablar ni siquiera de día. He hablado con dioses, he amado a mujeres y he escrito canciones que hacen llorar a los bardos. Me llamo Kvothe. Quizá hayas oído hablar de mí");
//let libro2 = new libro("El temor de un hombre sabio", "Patrick Rothfuss", "Fantasia", 100, 6457.00, 0, 'https://www.popularlibros.com/imagenes.webp/9788401/978840133963.webp', "Todo hombre sabio teme tres cosas: la tormenta en el mar, la noche sin luna y la ira de un hombre amable.<br> <br> El hombre había desaparecido. El mito no. Músico, mendigo, ladrón, estudiante, mago, trotamundos, héroe y asesino, Kvothe había borrado su rastro. Y ni siquiera ahora que le han encontrado, ni siquiera ni siquiera ahora que le han encontrado, ni siquiera ahora que las tinieblas invaden los rincones del mundo, está dispuesto a regresar. Pero su historia prosigue, la aventura continúa, y Kvothe seguirá contándola para revelar la verdad tras la leyenda.");
//let libro3 = new libro("Elantris", "Brandon Sanderson", "Fantasia", 40, 7157.00, 0, 'https://www.popularlibros.com/imagenes.webp/9788466/978846665884.webp' , "Bienvenidos a la ciudad de Elantris, la poderosa y bella capital de Arelon llamada la «ciudad de los dioses». Antaño famosa sede de inmortales, lugar repleto de poderosa magia, Elantris ha caído en desgracia. Ahora solo acoge a los nuevos «muertos en vida», postrados en una insufrible «no-vida» tras una misteriosa y terrible transformación. Un matrimonio de Estado destinado a unir los reinos de Arelon y Teod se frustra, ya que el novio, Raoden, el príncipe de Arelon, sufre inesperadamente la Transformación y se convierte en un «muerto en vida» obligado a refugiarse en Elantris. Su reciente esposa, la princesa Sarene de Teod, creyéndolo muerto, se ve obligada a incorporarse a la vida de Arelon y su nueva capital, Kae. Mientras, el embajador y alto sacerdote de otro reino vecino, Fjordell, usará su habilidad política para intentar dominar Arelod y Teod con el propósito de somerterlos a su emperador y su dios.");
//let libro4 = new libro("El aliento de los dioses", "Brandon Sanderson", "Fantasia", 40, 7366.00, 0 , "https://www.popularlibros.com/imagenes.webp/9788466/978846665887.webp");
//let libro5 = new libro("El camino de los reyes", "Brandon Sanderson", "Fantasia", 40, 4999.00, 0, 'https://www.popularlibros.com/imagenes.webp/9788466/978846665766.webp');
//let libro6 = new libro("El Heroe de las eras, Nacidos de la Bruma 1", "Brandon Sanderson", "Fantasia", 40, 5600.00, 0, 'https://www.popularlibros.com/imagenes.webp/9788418/978841803729.webp');
//let libro7 = new libro("El marciano", "Andy Weir", "Ciencia-Ficcion", 20, 3800.00, 0, 'https://www.popularlibros.com/imagenes.webp/9788413/978841314378.webp');
//let libro8 = new libro("FUNDACION.", "Issac Asimov", "Ciencia-Ficcion", 30, 4600.00, 0, 'https://www.popularlibros.com/images/portadas/325989-9788497599245.jpg');
//let libro9 = new libro("FUNDACION E IMPERIO", "Issac Asimov", "Ciencia-Ficcion", 20, 4500.00, 0, 'https://www.popularlibros.com/imagenes.webp/9788497/978849759501.webp');
//let libro10 = new libro("SEGUNDA FUNDACION", "Issac Asimov", "Ciencia-Ficcion", 40, 5600.00, 0, 'https://www.popularlibros.com/imagenes.webp/9788497/978849759676.webp');
//
//
//nuevaLibreria.agregarLibro(libro1);
//nuevaLibreria.agregarLibro(libro2);
//nuevaLibreria.agregarLibro(libro3);
//nuevaLibreria.agregarLibro(libro4);
//nuevaLibreria.agregarLibro(libro5);
//nuevaLibreria.agregarLibro(libro6);
//nuevaLibreria.agregarLibro(libro7);
//nuevaLibreria.agregarLibro(libro8);
//nuevaLibreria.agregarLibro(libro9);
//nuevaLibreria.agregarLibro(libro10);

//


$(document).ready(() => {
    //reviso que carge la pagina
    console.log("Pagina 100% Cargada")    

        //Creo un array que va a contener lo que compramos.


        const creaNav = () => {
            $('body').prepend(`
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                  <a class="navbar-brand" href="./index.html"><h3>EL BAUL</h3></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          GENEROS
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" onclick=clearAndSearch('Acción'); href="#">ACCION</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" onclick=clearAndSearch('Fantasia'); href="#">FANTASIA</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" onclick=clearAndSearch('Historico'); href="#">HISTORICO</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" onclick=clearAndSearch('Terror'); href="#">TERROR</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" onclick=clearAndSearch('Ciencia-Ficcion'); href="#">CIENCIA FICCION</a></li>
                        </ul>
                      </li>
                    </ul>
                    <button class="btn btn-primary" id="testeobbttn" onclick=checkarticulos(); ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> Canasta</button>
                  </div>
                </div>
              </nav>`);
        }



        //Inizializo el contenido de los productos.
        const cargaLibreria = () => {
            //Genero una variable llamada i para usarla com las CLASS y IDS 
            let i = 0;  
            /* Reccoro el array*/
            ARTICULOS.Productos.map((books) => {
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
            })
            prepararTienda();
            asignarbttnsCompra();
            asignarBttsResenia();
        }
      
        //Prepara un div escondido donde se vaa mostrarel contenido del carrito
        const prepararTienda = () => {
            $('body').append(`
            <div class="checkCarrito" style="display:none">
                <div class="hijocarrito">
                    <div class="hijocarrito__titulo">
                        <h2>Articulos</h2>
                        <div class="leyendas">
                            <h5>Titulo</h5>
                            <h5 class="unicaDiferente">Precio</h5>
                            <h5>Eliminar</h5>
                        </div>
                     </div>
                    <div class="hijocarrito__productos">     
                    </div>
                    <div class="totales">
                    </div>
                    <div class="hijocarrito__bttn">
                        <button class="bttnsalr" onclick=ocultarrcarrito(); id="bttn-salir">Seguir Comprando</button>
                        <button class="bttnEliminar" onclick=borrarItem(); id="bttn-borrar">Eliminar Items</button>
                    </div>
                </div>
            </div>
            `);
     }
   
    creaNav();
    cargaLibreria();   

  
});

