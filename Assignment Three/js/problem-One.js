/**
 * Brandon Long
 * June 3, 2016
 * Internet Systems
 * Assignment Three  | Problem One
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


function go() {

    var table="<table border='1'>"; // table to contain names and scores
    const minScore = 0, maxScore = 10;  // min and max scores
    var name, score; // user's name and score variables
    var students = 0, total = 0, average = 0; // total score and students, average variables

    while (name = window.prompt("Enter a student's name \n" +
        "or press cancel to exit and view table.", "")) {

        // allow user to enter score for name entered, repeat if input is invalid
        score = window.prompt("Enter " + name + "'s score \n(value must be between 0 and 10)", 0);

        if (!(isNaN(score) || score < minScore || score > maxScore)) {
        } else {

            do {
                score = window.prompt(" Please follow directions... \n" +
                    "Enter " + name + "'s score \n" +
                    "(value must be between 0 and 10)", 0);
            }
            while (isNaN(score) || score < minScore || score > maxScore)
        }

        // add table row with input data only if a number was entered
        if (score != null) {
            table += "<tr><td>" + name + "</td> <td>" + score + "</td></tr>";
            students++;
            total += eval(score);
        }

    }

    // calculate average
    average = total/students;
    average = average.toFixed(2);


    // closing table tag
    table += "</table>";

    // add data to their respective divs
    var scoresDiv = document.getElementById("scores");
    var totalsDiv = document.getElementById("totals");
    var avgDiv = document.getElementById("avg");
    var againDiv = document.getElementById("again");

    // if data is entered display table and other info
    if (students != 0) {
        scoresDiv.innerHTML = table;
        totalsDiv.innerHTML = students + " students received a total score of "+ total;
        avgDiv.innerHTML = "The average score is "+ average;
        againDiv.innerHTML = "<button onclick='go()'>Insert New Data</button>";
        // if not, state no data has been entered
    } else {
        scoresDiv.innerHTML = "";
        avgDiv.innerHTML = "";
        totalsDiv.innerHTML = "No data entered";
        againDiv.innerHTML = "<button onclick='go()'>Insert Data</button>";
    }



}

