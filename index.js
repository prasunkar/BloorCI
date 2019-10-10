$(document).scroll( () => {
    if ($(document).scrollTop() >= 150) {
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

var prevScrollPos = window.pageYOffset;
var window = $(window);

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navBar = document.getElementById("navbar");
    if (prevScrollPos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-65px";
    }
    prevScrollPos = currentScrollPos;
};

// Submit email through form
function sendEmail() {
    var emailSubject = document.getElementById("email-subject").value;
    var emailBody = document.getElementById("email-body").value;
    var emailButton = document.getElementById("email-button");

    emailButton.href = `mailto:Bloor@tdsb.on.ca?subject=${emailSubject}&body=${emailBody}`;
}