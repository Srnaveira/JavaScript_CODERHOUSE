const carrito = [];

//OCULTA Y LIMPIA EL EL DIV CON EL CONTENIDO DEL CARRITO
const ocultarrcarrito = () => {
    $('.checkCarrito').hide()
    $('.elementosCarrito').remove();
    $('.ElementoTotales').remove();
};

//AGREGA ELEMENTOS AL CARRITO Y DESPUES LOS AGREGA AL LOCALSTORE
const agregaracarrito = (valor) => {
    const nombreLibro = $(`#title${valor}`).text();
    const precioLibro = $(`#price${valor}`).text();
    const tempCarrito = {
        Titulo: `${nombreLibro}`, 
        Precio: `${precioLibro}`,
    };
    carrito.push(tempCarrito);
    localStorage.setItem('contenido-carrito', carrito)
    console.log(carrito)    
};


//AGREGA LOS ARTICULOS AL MODAR Y EL TOTAL 
const checkarticulos = () => {
    let i = 0;
    carrito.map((articulo) => {
        $('.hijocarrito__productos').append(`
            <div class="elementosCarrito" id="elementosCarr" >
                    <p class="productos" id="productos">${articulo.Titulo}</p>
                    <p class="productosPrecio" id="productosPrecio">${articulo.Precio}</p>
                    <label><input type="checkbox" name="ItemEliminar[]" class="eliminarItem" value="${i}"></label>
            </div>
         `);
         i++;
    });
    defcheckbox()
    calculaTotalcompra()
    $('.totales').append(`
        <div class="ElementoTotales">
            <p>TOTAL</p> 
            <p>${localStorage.getItem('Total-Compra')}</p>
        </div>
    `);    
    $('.checkCarrito').show();
};
        

//CALCULA EL TOTAL DE LA COMPRA Y AL MISMO TIEMPO ALMACENA EL TOTAL EN EL LOCALSTORE
const calculaTotalcompra = () => {
  let total = 0;
  totalcompra = 0;  
  var valornumerico = [] ;
  carrito.map((articulos) => {
            for(i=0; articulos.Precio.length > i ; i++){
                   if (i != 0){
                       valornumerico = valornumerico + articulos.Precio[i];
                    }
            }
        total = parseInt(valornumerico) + total;
        valornumerico = [];
  });
  console.log(total);
  localStorage.setItem('Total-Compra', total)
};


//REVISA LAS CHECKBOX SI ESTAN TILDADAS O NO
const defcheckbox = () => {
            let arr = [];
            $('[name="ItemEliminar[]"]').click(function() { 
                arr = $('[name="ItemEliminar[]"]:checked').map(function(){
                            return this.value;
                }).get();
                sessionStorage.setItem('elementos-a-Borrar', arr);  
              });


};
 
//ELIMINA LOS ITEMS QUE SE SELECCIONAN 
function borrarItem() {
    var elmborrar = sessionStorage.getItem('elementos-a-Borrar');
    for(let i=0; elmborrar.length > i ;i++){
                if(elmborrar[i] !== ','){
                        carrito.splice(elmborrar[i], 1);
                }    
            }
    sessionStorage.removeItem('elementos-a-Borrar')   
    //OCULTA Y VUELVE A MOSTRAR PARA QUE LIMPIE LOS ELEMENTOS ELIMINADOS.
    ocultarrcarrito();
    checkarticulos();    
}




