let link = document.getElementById('link');
let msj = `
    <div id="container">
        <p>Esta seguro que quiere abandonar la pagina?</p>
        <div>
            <button id="aceptar">Aceptar</button>
            <button id="cancelar">Cancelar</button>
        </div>
    </div>
    `;
let brk = false;

document.addEventListener('click', e => {
    e.preventDefault();
    if (brk && e.target.id == 'link') {
        alert('selecciona una opcion del mensaje');
    }

    if(e.target.id == 'link' && !brk) {
        brk = true;
        e.preventDefault();
        document.body.insertAdjacentHTML('afterbegin', msj);
    }

    if(e.target.id == 'aceptar') {
        brk = false;
        document.location.href = link.href;
    }
    
    if(e.target.id == 'cancelar') {
        brk = false;
        document.getElementById('container').remove()
    }

});