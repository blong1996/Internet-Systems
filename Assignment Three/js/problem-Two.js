/**
 * Brandon Long
 * June 3, 2016
 * Internet Systems
 * Assignment Three  | Problem Two
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


function addArrays(a1, a2) {

    if ( !(a1 instanceof Array) || !(a2 instanceof Array))

        throw "Arguments are not both arrays";

    else if (a1.length != a2.length)

        throw "Arrays are not both the same length.";

    else  {

        for (var x = 0; x < a1.length; x++)  {
            if (a1[x].length != a2[0].length)
                throw "Arrays have different numbers of rows";
        }

        for ( x = 0; x < a1.length; x++)  {
            if (a2[x].length != a1[0].length)
                throw "Arrays have different numbers of rows";
        }
        
        var a = new Array(a1.length);
        for (x = 0; x < a1.length; x++)  {
            a[x] =new Array(a2.length); 
            
            for (var y = 0; y < a1[x].length; y++) {
                a[x][y] = a1[x][y] + a2[x][y];
            }
        }

        return a;

    }
}

function start()
{
    var ar1 = [[1,2], [3,4]],
        ar11 = [[1,2], [3,4], [5,6]],
        ar12 = [[1,2,3], [3,4]],

        ar2 = [[6,7], [8,9]],
        ar21 = [[6,7], [8,9], [19,11]],
        ar22 = [[6,7], [8,9,10]],

        ar;

    try {
        alert( addArrays(ar1, ar2).toSource() ); // works
    }
    catch (e) {
        alert( e );
    }

    try {
        alert( addArrays(ar1, 3).toSource() ); // not an array
    }
    catch (e) {
        alert( e );
    }
    try {
        alert( addArrays(11, ar2).toSource() ); // not an array
    }
    catch (e) {
        alert( e );
    }

    try {
        alert( addArrays(ar1, ar21).toSource() ); // different lengths
    }
    catch (e) {
        alert( e );
    }
    try {
        alert( addArrays(ar11, ar2).toSource() ); // different lengths
    }
    catch (e) {
        alert( e );
    }

    try {
        alert( addArrays(ar1, ar22).toSource() ); // different row lengths
    }
    catch (e) {
        alert( e );
    }
    try {
        alert( addArrays(ar12, ar2).toSource() ); // different row lengths
    }
    catch (e) {
        alert( e );
    }
}