/**
 * La mayoria de las manipulaciones del DOM activan un relayout :
 * 
 *  - rendering: Es lo que tarda el interprete 
 * 
 */
var msj = `
    <div id="container">
        <p>Esta seguro que quiere abandonar la pagina?</p>
        <div>
            <a href="#" id="aceptar">Aceptar</a>
            <a href="#" id="cancelar">Cancelar</a>
        </div>
    </div>
    `;
var link = document.getElementsByTagName('a')[0];
link.addEventListener('click', e => {
    e.preventDefault();
    console.log('asdf');
    var msj = `
    <div id="container">
        <p>Esta seguro que quiere abandonar la pagina?</p>
        <div>
            <a href="#" id="aceptar">Aceptar</a>
            <a href="#" id="cancelar">Cancelar</a>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', msj);

    if(e.target.id == aceptar) {
        console.log('aceptaste');
    }

    if(e.target.id == cancelar) {
        console.log('cancelaste');
    }

});