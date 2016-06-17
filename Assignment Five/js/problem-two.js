/**
 * Brandon Long
 * June 16, 2016
 * Internet Systems
 * Assignment Five  | Problem Two
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

function start() {

    document.forms[0].bt.addEventListener( 'click', showIt, false );

}

function showIt(e) {

    var fname = document.forms[0].first;
    var lname = document.forms[0].last;
    var year = document.forms[0].year;
    var gpa = document.forms[0].gpa;

    var divNode = document.createElement("div");

    var text ="<h3>"+fname.value+" "+lname.value+"</h3>"+
        "<ul>" +
        "<li>Year: "+year.value+"</li>" +
        "<li>GPA: "+gpa.value+"</li>" +
        "</ul>";

    divNode.innerHTML = text;
    document.body.appendChild(divNode);
    
}