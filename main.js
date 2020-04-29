// 'esercitazione di oggi prevede di aggiungere il codice js necessario per visualizzare l'hamburger menu su mobile, a partire da html e css già pronti.
// Trovate il codice da cui partire a questo link:
$('.header-right > a').click(
    function(){
        $('.hamburger-menu').show();
    }
);

$('.close').click(
    function(){
        $('.hamburger-menu').hide();
    }
);

// $('.header-right > a').click(
//     function(){
//         $('.hamburger-menu').addClass('active');
//     }
// );
//
// $('.close').click(
//     function(){
//         $('.hamburger-menu').removeClass('active');
//     }
// );

// $('.header-right > a').click(
//     function(){
//         $('.hamburger-menu').toggle();
//     }
// );
//
// $('.close').click(
//     function(){
//         $('.hamburger-menu').toggle();
//     }
// );
