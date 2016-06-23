<?php
/**
 * Brandon Long
 * June 21, 2016
 * Internet Systems
 * Assignment Seven  | Problem One
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

    $age = intval($_GET['age']);
        //  input validation
    if ($age < 0 || !is_numeric($age))
        header("Location: /errors/problem-one-error.php?age=$age");

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Internet Systems Assignment Seven | Problem One</title>
        <meta charset="UTF-8">
        <meta name="author" content="Brandon Long">
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
        <script type="text/javascript" src="js/problem-one.js"></script>
    </head>
    <body>

    <form action="problem-one-a.php" method="get">
        <input type="hidden" name="age" value="<?php echo $age; ?>" />
        <label for="name">Your Name: <input type="text" name="name" id="name"/></label><br>
        <button id="buttonSubmit" type="submit">Submit</button>
    </form>

    </body>
</html>
