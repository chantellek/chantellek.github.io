$(document).ready(function(){
    $('#submitbutton').click(function(event){
        var total = 0 
        $('.expense').each(function(){
            total += Number($(this).val());
        });
        total = Number($('#income').val()) - total;
        total -= Number($('#cost').val())/Number ($('#months').val());
        $('#save').val(total);
    });
});

