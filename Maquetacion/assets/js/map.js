// para evitar el parpadeo de carga, agregamos direcamente el elemento una vez que se carga la seccion contact

document.addEventListener("DOMContentLoaded", (e)=> {
    setTimeout(()=> {
        document.querySelector("#load-iframe-map").innerHTML = `<iframe class="contact__iframe" frameborder="0" scrolling="0" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.461579268061!2d12.178275276844872!3d45.661633320243105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477936eff3908037%3A0x7815a9b99f8430e!2sVia%20Sbozzo%2C%202%2C%2031055%20Quinto%20di%20Treviso%20TV!5e0!3m2!1ses-419!2sit!4v1713619389829!5m2!1ses-419!2sit"></iframe>`;
    }, 500);
});

