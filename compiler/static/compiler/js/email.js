$(document).ready(function(){
    $(".email-address-action-buttons button").click(function(){
        var id = $(this).parent().attr('id');
        $("input.email-radio-input#email_radio_" + id).prop("checked",true);

    });

});