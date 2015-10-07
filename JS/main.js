$(document).ready(function(){

    function closeBoxes() {
        $('.boxes .box-content').removeClass('open');
    }

    $('.box-title').click(function(evt){
        var anchorValue = $(this).attr('href');

        closeBoxes();
        $('.boxes ' + anchorValue).addClass('open');

        evt.preventDefault();
    });
});
