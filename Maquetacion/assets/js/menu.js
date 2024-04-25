document.addEventListener("DOMContentLoaded", (e) => {


    let boton = document.querySelector('#menu-btn');
    let aside = document.querySelector('.layout__aside');
    let icon = document.querySelector('.menu-toggle__icon');

    boton.addEventListener('click', (event) => {

        let visible = document.querySelector('.layout__aside--visible');

        if (!visible) {
            aside.classList.add('layout__aside--visible');
            icon.classList.add('menu-toggle__icon--active');
        }else {
            aside.classList.remove('layout__aside--visible');
            icon.classList.remove('menu-toggle__icon--active');
        }
    });


    // el evento resize te permite ver cuando se redimensiona la pantalla

    window.addEventListener('resize', ()=> {
        let size = parseInt(document.body.clientWidth);

        // cuando la pantalla vuelva por debajo de los 1080px el menu no sera visible
        if(size <= 1080){
            aside.classList.remove('layout__aside--visible');
            icon.classList.remove('menu-toggle__icon--active');
        }



        console.log(size);
    })

});