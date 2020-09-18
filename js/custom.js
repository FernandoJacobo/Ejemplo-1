let config = {
    reset:  true,
    mobile: true
}

window.scrollReveal = ScrollReveal (config);

// Animación del Menú Principal
scrollReveal.reveal( '.navbar', {
        duration: 2000,
        origin: 'bottom'
    }
);

scrollReveal.reveal( '.animation-left', {
        duration: 2000,
        origin: 'left',
        distance: '300px'
    }
);

scrollReveal.reveal( '.animation-title', {
        duration: 2000,
        origin: 'bottom'
    }
);

scrollReveal.reveal( '.animation', {
    duration: 2000,
    origin: 'bottom'
}
);

scrollReveal.reveal( '.animation-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
}
);

$(function() {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('navbar-scroll');
        } else {
            $('.navbar').removeClass('navbar-scroll');
        }
    })
});

let scroll = new SmoothScroll('.scroll-link');
