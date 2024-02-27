$('ul li ul').hide();

$('.menuLink').click(function () {
    let thisMenu = $(this).next('ul');
    $('ul li ul').not(thisMenu).hide();
    thisMenu.toggle();
});