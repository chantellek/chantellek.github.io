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

function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}