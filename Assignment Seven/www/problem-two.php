<?php

    $plates = $_GET['plates'];
    $towels = $_GET['towels'];
    $books = $_GET['books'];
    $directions = $_GET['directions'];
    $directions= trim($directions);
    $dirOne = strlen($directions)/2;
    $dirTwo = strlen($directions);
    $splitOne = substr($directions, 0, $dirOne );
    $char= substr($splitOne, -1);
        // split directions in half
    while($char != " "){
        $dirOne++;
        $splitOne = substr($directions, 0, $dirOne );
        $lastChar= substr($splitOne, -1);
    }
    $splitOne = substr($directions, 0, $dirOne );
    $splitTwo = substr($directions, $dirOne, $dirTwo );

?>
    <!DOCTYPE html>
    <!--
        Brandon Long
        June 21, 2016
        Internet Systems
        Assignment Seven  | Problem Three

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
    <html lang="en">
    <head>
        <title>Internet Systems Assignment Seven | Problem Two</title>
        <meta charset="UTF-8">
        <meta name="author" content="Brandon Long">
    </head>
    <body>
          <pre>
          <?php echo "Plates Towels Books<br>";
          printf("\t  %-4d   %4d    %4d", $plates, $towels, $books);
          ?>
          </pre>
        <p>
        <?php echo "$splitOne <br>";
        echo "$splitTwo";
        ?>
        </p>
    </body>
</html>