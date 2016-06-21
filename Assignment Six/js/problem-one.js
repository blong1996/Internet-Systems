/**
 * Brandon Long
 * June 20, 2016
 * Internet Systems
 * Assignment Six  | Problem One
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




$(document).ready(function() {

   $('#bt').on('click', function() {

       var chkboxes = $('input[type=checkbox]');
       var radios = $('input[type=radio]');
            // add italics and "Checked" to checked checkboxes
       $(chkboxes).each(function(){
           if ( $(this).is(':checked') ){
               $(this).parent().find('label').addClass('highlight');
               $(this).parent().find('label').append(' <strong>Checked</strong>');

           }else{
               $(this).parent().find('label').removeClass('highlight');
           }
       });
            // hide unchecked radios
       $(radios).each(function () {
           if (!$(this).is(':checked')) {
               $(this).parent().addClass('hidden');
           }

       })
   })
    

});