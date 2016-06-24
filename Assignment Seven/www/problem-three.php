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
<?php
    $birthdate = $_GET['date'];
        // YYYY/MM/DD
    $regex = "/^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/";
    if (preg_match($regex, $birthdate)) {
        $date = explode('/',$birthdate);

        echo "
            <!DOCTYPE html>
            <html lang=\"en\">
                <head>
                    <title>Internet Systems Assignment Seven | Problem Three</title>
                    <meta charset=\"UTF-8\">
                    <meta name=\"author\" content=\"Brandon Long\">
                </head>
                <body>
                    <div>
                        <h3>When you were born</h3>
                        <p>Year: $date[0]</p>
                        <p>Month: $date[1]</p>
                        <p>Day: $date[2]</p>
                    </div>
                </body>
            </html>
        ";
    } else {
        $err = "$birthdate is ill-formed. Please re-enter your birth date.";
        echo " 
        <!DOCTYPE html>
            <html lang=\"en\">
                <body onload='alert(\"".$err."\");'> 
                    <form action=\"problem-three.php\" method=\"get\">
                        <h3>When you were born</h3>
                        <p></p>
                        <label for=\"date\">Enter your birth date (Format- YYYY/MM/DD): <br>
                            <input type=\"text\" name=\"date\" id=\"date\" value=\"1900/01/01\"/></label><br>
                        <button id=\"buttonSubmit\" type=\"submit\">OK</button>
                        <button id=\"buttonReset\" type=\"reset\">Cancel</button>
                    </form>
                </body>
            </html>";


    }

