
//asigna acciones a los botones de compra.
const asignarbttnsCompra = () => {
    const mibttnes = $(".bttn")
    for(let i = 0 ; i < mibttnes.length; i++){
                $(`#bttn${i}`).click(function (e) { 
                    e.preventDefault();
                    $(`#bttn${i}`).css("background-color" , "blue")          
                    agregaracarrito(i)
                })
                $(`#bttn${i}`).mousedown(function () { 
                    $(`#bttn${i}`).css("background-color" , "red")          
                });
    }          
};

//asigna acciones a los botones de resumen.
const asignarBttsResenia = () => {
    const mibttnes = $(".bttnresenia")
    for(let i = 0 ; i < mibttnes.length; i++){
                $(`#bttnresenia${i}`).click(function (e) { 
                    e.preventDefault();
                    $(`#bttnresenia${i}`).css("background-color" , "blue")
                    modalresenia(i);   
                    $('.resenia').show();
                })
                $(`#bttnresenia${i}`).mousedown(function () { 
                    $(`#bttnresenia${i}`).css("background-color" , "red")          
                });      
    }                

}



