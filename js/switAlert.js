function confirmaCopiado(){
    Swal.fire({
        icon:'success',
        title:'El texto fue copiado',
        showConfirmButton: false,
        position:'bottom-end',
        toast:true,
        timer:5000,
        showCloseButton:requestAnimationFrame,
        closeButtonAriaLabel:'Cerrar alerta'
    })
}

function mensajeValidador(mensaje){
    Swal.fire({
        title: mensaje,
        allowOutsideClick:false,
        allowScapeKey:false,
        ShowConfirmButton:true,
        icon:'warning'
    });
}