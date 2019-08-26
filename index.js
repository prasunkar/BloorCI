$(document).scroll( () => {
    if ($(document).scrollTop() >= 50) {
        $('.navbar').addClass('headerfloat');
        $('.logo').addClass('logofloat');
        $('.nav-a').addClass('nav-afloat');
        $('.nav-button').addClass('nav-buttonfloat');
    }
    else {
        $('.navbar').removeClass('headerfloat');
        $('.logo').removeClass('logofloat');
        $('.nav-a').removeClass('nav-afloat');
        $('.nav-button').removeClass('nav-buttonfloat');
    }
});