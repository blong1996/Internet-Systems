<?php

    $age = intval($_GET['age']);
    $name = $_GET['name'];


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
    <?php echo "<p> $name's age is $age</p>"?>
    </body>
</html>