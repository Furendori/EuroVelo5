$(document).ready(function(){

    $('.slurp').click(function(){
        ( jQuery(this).find('.statut').html() == '+' )? jQuery(this).find('.statut').html('-') : jQuery(this).find('.statut').html('Agrandir');
        $(this).parent().children('.bloc').first().toggle('slow');
    })
});