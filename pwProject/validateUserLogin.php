<?php

    include("connection.php");

    $emailUser = $_POST['emailLogin'];
    $passwordUser = $_POST['passwordLogin'];

    $stmt = $pdo->prepare("select nameUser, emailUser, passwordUser from userstb where emailUser like '$emailUser' and passwordUser like '$passwordUser';");
    $stmt ->execute();
    $stmt = $stmt->fetchAll(\PDO::FETCH_ASSOC);

    $nameUser = $stmt[0]['nameUser'];

    if ($emailUser === @$stmt[0]['emailUser'] && $passwordUser === @$stmt[0]['passwordUser']) {
        session_start();
        $_SESSION['nameUserSession'] = $nameUser;
        $_SESSION['loginSession'] = $emailUser;
        $_SESSION['passwordSession'] = $passwordUser;
        echo "<script>
        window.location.replace('restricted/restrictedIndex.php')
        </script>";
    } else {
        echo "<script>
        window.location.replace('userLogin.php')
        </script>";
    }
    
?>