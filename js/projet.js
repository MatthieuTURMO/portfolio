$(".boutons>.row>.col").on('click', function(){
    var href = $(this).attr('href');
    window.location = href;
});