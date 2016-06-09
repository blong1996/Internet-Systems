/**
 * Brandon Long
 * June 8, 2016
 * Internet Systems
 * Assignment Four  | Problem One
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

var num2day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function start() {
    
    
    var today = new Date();
    var todayDateString = today.getFullYear()+ "-" + mon2str(today) + "-" + day2str(today);
    var userDateString;
    var day;


    while (userDateString = window.prompt("Enter a date using the format YYYY-MM-DD \n" +
        "or press cancel to exit.", todayDateString)) {


        var dateMsec = Date.parse(userDateString);

        if (isNaN(dateMsec)) {
            alert("What was entered cannot be \n" +
                "interpreted as a number.\n" +
                "It must have the format 'YYYY-MM-DD'.");
        } else {
            var date = new Date(dateMsec);
            var dayNum = date.getDay();
            day = num2day[dayNum];
            //show day for date entered
            alert(day)
        }
    }
}

function day2str(dt) {
    
    return ( dt.getDate() > 9 ? "" : "0" ) + dt.getDate();
    
}

function mon2str( dt )
{
    return ( dt.getMonth() > 8 ? "" : "0" )
        + ( dt.getMonth() + 1 );
}

