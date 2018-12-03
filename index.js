
//On click listener for working out disposableIncome
$(document).ready(function(){
    $('#submitbutton').click(function(event){
        var total = 0 
        $('.expense').each(function(){
            total += Number($(this).val());
        });
        total = Number($('#income').val()) - total;
        total -= Number($('#cost').val())/Number ($('#months').val());
        var totalString = "£ " + total.toString();
        $('.modal-body #disposableIncome').val(totalString);
        $('.modal-body #disposableIncome').css("width", getElementWidthFromString(totalString));
    });
});

//On click listener for #buy
$(document).ready(function(){
    $('#submitbutton').click(function(event){
        var buy = $('#buy').val();
        $('.modal-body #buy').val(buy);
        $('.modal-body #buy').css("width", getElementWidthFromString(buy));
    });
});

//On click listener for #cost
$(document).ready(function(){
    $('#submitbutton').click(function(event){
        var cost = "£" + $('#cost').val();
        $('.modal-body #cost').val(cost); 
        $('.modal-body #cost').css("width", getElementWidthFromString(cost));

    });
});

//On click listener for #months
$(document).ready(function(){
    $('#submitbutton').click(function(event){
        var months = $('#months').val();
        $('.modal-body #months').val(months);
        $('.modal-body #months').css("width", getElementWidthFromString(months)); 

    });
});

function getElementWidthFromString(str){
    return (str.length * 8) + 5;
}

function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}