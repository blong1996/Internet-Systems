<!--
    Brandon Long
    June 26, 2016
    Internet Systems
    Assignment Eight  | Problem One

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
    $glasses = $_GET['glasses'];
    echo "<body>";
    echo "<h4>Your Order</h4>";
        // print totals for each beverage
    foreach ( $glasses as $key => $value ){

        if ($key == 'milk'){
            $totM =1.25 * $value;
            $totM = number_format($totM,2);
            echo "<p> $key: $$totM ($value glasses)<br></p>";
            $cost = array($totM);
        }
        if ($key == 'tea'){
            $totT =1.40 * $value;
            $totT = number_format($totT,2);
            echo "<p> $key: $$totT ($value glasses)<br></p>";

            array_push( $cost, $totT);
        }
        if ($key == 'juice'){
            $totJ =1.75 * $value;
            $totJ = number_format($totJ,2);
            echo "<p> $key: $$totJ ($value glasses)<br></p>";

            array_push( $cost, $totJ);
        }
    }
    $tot = array_sum($cost);
    $tot = number_format($tot,2);
    echo "<p> Total: $$tot</p>";
    echo "</body> ";
?>


