<?php
    $age = $_GET['age'];
?>
<!--
    Brandon Long
    June 21, 2016
    Internet Systems
    Assignment Seven  | Problem One

/\\\\\\\\\\\\    /\\\              /\\\\\\\\\\\    /\\\\\     /\\\    /\\\\\\\\\\\
\/\\\////////\\\ \/\\\            /\\\\////////\\\ \/\\\\\\   \/\\\  /\\\\////////\\\
 \/\\\      \/\\\ \/\\\           \/\\\       \/\\\ \/\\\/\\\  \/\\\ \/\\\       \///
  \/\\\\\\\\\\\\/  \/\\\           \/\\\       \/\\\ \/\\\//\\\ \/\\\ \/\\\
   \/\\\///////\\\\ \/\\\           \/\\\       \/\\\ \/\\\\//\\\\/\\\ \/\\\     /\\\\\\
    \/\\\      \/\\\ \/\\\           \/\\\       \/\\\ \/\\\ \//\\\/\\\ \/\\\    \////\\\
     \/\\\      \/\\\ \/\\\           \/\\\       \/\\\ \/\\\  \//\\\\\\ \/\\\       \/\\\
      \/\\\\\\\\\\\\/  \/\\\\\\\\\\\\\ \/\/\\\\\\\\\\\/  \/\\\   \//\\\\\ \/\/\\\\\\\\\\\/
       \////////////    \/////////////    \///////////    \///     \/////    \///////////

-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Internet Systems Assignment Seven | Problem One</title>
        <meta charset="UTF-8">
        <meta name="author" content="Brandon Long">
    </head>
    <body>
        <?php echo "<p >'$age' is not an appropriate value for your age. Age must be a non-negative integer.</p>\n"; ?>
        <form action="../www/problem-one.php" method="get">
            <label for="age">Your Age: <input type="text" name="age"  id="age"/></label><br>
            <button id="buttonSubmit" type="submit">Submit</button>
        </form>
    </body>
</html>


