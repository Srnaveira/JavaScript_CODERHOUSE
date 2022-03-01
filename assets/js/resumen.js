//OCULTA RESEÑA
const ocultarresenia = () => {
    $('.resenia').hide()
    $('.resenia').remove()
} ;     

//ARMA EL MODAL DE RESEÑA
const modalresenia = (valor) => {
    const contTitulo = $(`#title${valor}`).text();
    const contResenia = $(`.reseniaLibro${valor}`).text();
    $('body').append(`
        <div class="resenia">
            <div class="hijoResenia">
                <div class="hijoResenia__titulo">
                    <h2>${contTitulo}</h2>
                </div>
                <div class="hijoResenia__texto">
                    <p>${contResenia}</p>
                </div>
                <div class="hijoResenia__bttn">
                    <button class="bttnsalr" onclick=ocultarresenia(); id="bttn-salir">Salir</button>              
                </div>
            </div>
        </div>
        `);
    };
