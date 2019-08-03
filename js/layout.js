let links = [...document.getElementsByClassName('links')];

links.forEach(link => {
    link.addEventListener('click',e => {
        e.preventDefault();
        const xhr = new XMLHttpRequest;
        xhr.open('GET', e.target.href);
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                let respHtml = xhr.response;
                let main = document.getElementsByTagName('main')[0];
                main.firstElementChild.remove();
                main.insertAdjacentHTML('afterbegin', respHtml);
            }
        });
    });
});

