/**
 * Brandon Long
 * June 8, 2016
 * Internet Systems
 * Assignment Four  | Problem Two
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

    var weatherInput;
    var temp = /TEMP/i;
    var wind = /WIND/i;
    var pressure = /PRESS/i;
    var direction = /N|north|S|south|E|east|W|west/;
    var north = /N|north/;
    var south = /S|south/;
    var east = /E|east/;
    var west = /W|west/;

        // read in weather details
    while (weatherInput = window.prompt("Enter a statement about the temperature, \n" +
            "wind, or atmospheric pressure.")) {

            // search for the the string TEMP, PRESS, or WIND
        var regular = /(TEMP|PRESS|WIND)(\D*(\d+)\D*)/i;
            // if string does not match specified pattern
        if (!(weatherInput.match(regular))) {
            window.alert("Ill-formed String. Try it again");
        }
        var subStrOne = RegExp.$1;
        var subStrTwo = RegExp.$2;
        var subStrThree = RegExp.$3;

            // if substring is temp
        if (subStrOne.match(temp)) {
            window.alert("The temperature is " + subStrThree + " F.");
            // if substring is pressure
        } else if (subStrOne.match(pressure)) {
            window.alert("The pressure is " + subStrThree + " inHg.");
            // if substring is wind
        } else if(subStrOne.match(wind)) {

            if (subStrTwo.match(direction)) {
                    // if substring is north
                if (subStrTwo.match(north)) {
                    window.alert("The wind is " + subStrThree +
                        " mph from the north.");
                }
                    // if substring is south
                else if (subStrTwo.match(south)) {
                    window.alert("The wind is " + subStrThree +
                        " mph from the south.");
                }
                    // if substring is east
                else if (subStrTwo.match(east)) {
                    window.alert("The wind is " + subStrThree +
                        " mph from the east.");
                }
                    // if substring is west
                else if(subStrTwo.match(west)) {
                    window.alert("The wind is " + subStrThree +
                        " mph from the west.");
                }
            }else {
                
                window.alert("No direction found for wind of "+
                    subStrThree +" mph.");
            }
        }
    }
}



