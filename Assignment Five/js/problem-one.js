/**
 * Brandon Long
 * June 16, 2016
 * Internet Systems
 * Assignment Five  | Problem One
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

function start()  {
    document.getElementById('tr_no').click();
    document.getElementById('sm_no').click();
    document.forms[0].dayexp.addEventListener( 'blur', checkCurrency, false );
    document.forms[0].tr_yes.addEventListener( 'click', fixTravel, false );
    document.forms[0].tr_no.addEventListener( 'click', fixTravel, false );
    document.forms[0].sm_yes.addEventListener( 'click', fixMeeting, false );
    document.forms[0].sm_no.addEventListener( 'click', fixMeeting, false );
    document.forms[0].iden.addEventListener( 'blur', checkIDall, false );
}

function checkCurrency(e) {
    // check if input is valid and has a $ sign
    var val = e.target.value;
    var regEx = /\$\d+\.\d{2}$|\d+\.\d{2}$/;

    if (!regEx.test(val)) {
        window.alert(val + " is not a valid input");
        e.target.value = "";
    }
    else {
        if(val[0] != "$") {
            e.target.value = "$"+ e.target.value;
        }
    }
}

function fixTravel(e) {
    // if yes, show travel box, else, hide it
    if(e.target.value == "yes") {
        document.getElementById("trbox").setAttribute("style", "display:block");
        document.forms[0].trexp.addEventListener( 'blur', checkCurrency, false );
    } else {
        document.getElementById("trbox").setAttribute("style", "display:none");
    }
}

function fixMeeting(e) {
    // if yes, show meeting box, else hide it
    if(e.target.value == "yes") {
        document.getElementById("smbox").setAttribute("style", "display:block");
        document.forms[0].smfees.addEventListener( 'blur', checkCurrency, false );
    } else {
        document.getElementById("smbox").setAttribute("style", "display:none");
    }
}

function checkIDall(e) {
    // check if ID is valid based on regular expression
    var regExp = /^[A-Z]\d{3}$/;
    var val = e.target.value;
    var ID = document.getElementById("iden");

    if (!regExp.test(val)) {
        window.alert("Wrong ID format.");
        e.target.value = "";
        return false;
    }

}