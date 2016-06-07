/**
 * Brandon Long
 * June 3, 2016
 * Internet Systems
 * Assignment Three  | Problem Four
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


function start()
{

    var words = prompt("Enter a string of words without any punctuation."),
        wordRec = wordCount(words);
    outRec(wordRec);
    var againDiv = document.getElementById("again");

    if (wordRec.length != 0) {

        againDiv.innerHTML = "<button onclick='start()'>Insert New Data</button>";
        // if not, state no data has been entered
    } else {

        againDiv.innerHTML = "<button onclick='start()'>Insert Data</button>";
    }

}

function wordCount(words) {

    words = words.toLowerCase();

    var  wordArray = words.split(" ");

    var wordRec = {};

    for (var x = 0; x < wordArray.length; x++ ) {
        if (wordRec[wordArray[x]]) {
            wordRec[wordArray[x]]++;
        }
         else {
            wordRec[wordArray[x]] = 1;
        }

    }
    return wordRec;
}

function outRec(wordRec) {
    var wordArray = Object.keys(wordRec).sort();

    var itemStr = "";

    for (var x = 0; x < wordArray.length; x++) {
        itemStr+= "<li>" + wordArray[x] + " " + wordRec[wordArray[x]]+"</li>"
    }



    var cntsDiv = document.getElementById("cnts");
    cntsDiv.innerHTML = itemStr;

}