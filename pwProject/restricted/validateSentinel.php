<?php

    session_start();

    if (($_SESSION['loginSession'] === null) || ($_SESSION['passwordSession']) === null) {
        header("location: ../index.php");
    }
    
?>