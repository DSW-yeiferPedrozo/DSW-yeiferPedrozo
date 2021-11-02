jQuery('document').ready(function($) {

    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul'),
        menu1 = $('.submenu');

    menuBtn.click(function() {

        if(menu.hasClass('show')) {
            menu.removeClass('show'),
            menu1.addClass('show');
        }else {
            menu.addClass('show'),
            menu1.removeClass('show');
        }        

    });
});
