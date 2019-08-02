//AJAX = Async JS And XML
// XHR/XHRU = XMLHttpRequest/Upload
// Activex Object (deprecated)

/**
 * GET - POST - PUT - PATCH - DELETE - HEADERS
 * - OPTIONS
 * La Propiedad readyState de un objeto XHR determina
 * en que estado esta el pedido
 *  0 - Inicializado el pedido
 *  1 - Configurado el pedido
 *  2 - Headers enviados y recibidos
 *  3 - 
 *  4 -
 * 
 */

let ajax = new XMLHttpRequest;

ajax.addEventListener('readystatechange', () => {
    console.log(`Nuevo Estado ${ajax.readyState}`);
});

// ajax.open(method -> string, url -> string);  
ajax.open('GET', 'info.txt');

//
ajax.send();

