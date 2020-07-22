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

$('.header-right>a').click(function(){
    $('.hamburger-menu').addClass('active');
});

$('.close').click(function(){
    $('.hamburger-menu').removeClass('active');
});
