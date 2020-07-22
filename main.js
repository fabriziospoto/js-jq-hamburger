var respMenu = false;

$('i').click(function() {
    if (respMenu == true) {
        $('.hamburger-menu').show();
        respMenu = false;
    } else {
        $('.hamburger-menu').hide();
        respMenu = true;
    }
});
