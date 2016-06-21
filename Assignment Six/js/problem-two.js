/**
 * Brandon Long
 * June 20, 2016
 * Internet Systems
 * Assignment Six  | Problem Two
 *
 * /\\\\\\\\\\\\    /\\\              /\\\\\\\\\\\    /\\\\\     /\\\    /\\\\\\\\\\\
 *  \/\\\////////\\\ \/\\\            /\\\\////////\\\ \/\\\\\\   \/\\\  /\\\\////////\\\
 *   \/\\\      \/\\\ \/\\\           \/\\\       \/\\\ \/\\\/\\\  \/\\\ \/\\\       \///
 *    \/\\\\\\\\\\\\/  \/\\\           \/\\\       \/\\\ \/\\\//\\\ \/\\\ \/\\\
 *     \/\\\///////\\\\ \/\\\           \/\\\       \/\\\ \/\\\\//\\\\/\\\ \/\\\     /\\\\\\
 *      \/\\\      \/\\\ \/\\\           \/\\\       \/\\\ \/\\\ \//\\\/\\\ \/\\\    \////\\\
 *       \/\\\      \/\\\ \/\\\           \/\\\       \/\\\ \/\\\  \//\\\\\\ \/\\\       \/\\\
 *        \/\\\\\\\\\\\\/  \/\\\\\\\\\\\\\ \/\/\\\\\\\\\\\/  \/\\\   \//\\\\\ \/\/\\\\\\\\\\\/
 *         \////////////    \/////////////    \///////////    \///     \/////    \///////////
 */


$(document).ready(function(){
        // confidence slider
    $("#slider").slider({min: 0, max: 100,
        slide: function(event, ui) {
            var $confidence =  $("#slider").slider('value')+"%";
            $("#results").text("Your confidence level is "+ $confidence);
            $("#results2").text("Your confidence level is "+ $confidence);
        }
    });

        // invoke tabs
    $("#tabs").tabs(); 
    
        // calendar
    $("#datepicker").datepicker({
        onSelect: function($dateText, inst) {
            $("#result").text("Your next birthday is " + $dateText)}
    });

        // open name dialog
    $( "#bt" ).click(function() {
        $("#dialog" ).dialog( "open" );
    });
    
        // name dialog
    $("#dialog").dialog({
        autoOpen: false,
        buttons: {"Ok": function() { $(this).dialog("close"); } },
        width: 350,
        beforeClose: function(event, ui) {
            var $name = $("#fname").val() +" "+$("#lname").val();
            $("#name").text("Your name is " + $name);
        }
    });
});



