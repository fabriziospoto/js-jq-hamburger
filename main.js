// var respMenu = false;
//
// $('i').click(function() {
//     if (respMenu == true) {
//         $('.hamburger-menu').show();
//         respMenu = false;
//     } else {
//         $('.hamburger-menu').hide();
//         respMenu = true;
//     }
// });

$('a:first-of-type').click(function(){
    $('.hamburger-menu').addClass('active');
});

$('a.close').click(function(){
    $('.hamburger-menu').removeClass('active');
});
