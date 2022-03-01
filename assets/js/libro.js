class libro {
    constructor(titulo, autor, genero, stock, precio, descuento, imagen, resumen) {
        this.titulo = titulo.toUpperCase();
        this.autor = autor.toUpperCase();
        this.genero = genero;
        this.stock = stock;
        this.precio = parseFloat(precio);
        this.descuento = parseInt(descuento);
        this.imagen = imagen;
        this.resumen = resumen;
    }
}



// definir constructor con la forma function
//
//function libro (titulo, autor, genero, stock, precio, descuento, imagen, resenia) {
//           this.titulo = titulo.toUpperCase();
//           this.autor = autor.toUpperCase();
//           this.genero = genero;
//           this.stock = stock;
//           this.precio = parseFloat(precio);
//           this.descuento = parseInt(descuento);
//           this.imagen = imagen;
//           this.resenia = resenia;
//}
//