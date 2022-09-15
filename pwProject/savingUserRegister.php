<?php

    include("connection.php");

    $userId = $_POST['userId'];
    $nameUser = $_POST['nameRegister'];
    $emailUser = $_POST['emailRegister'];
    $passwordUser = $_POST['passwordRegister'];

    $stmt = $pdo->prepare("select emailUser from userstb where emailUser like '$emailUser';");
    $stmt ->execute();
    $stmt = $stmt->fetch(\PDO::FETCH_ASSOC);

    if ($emailUser === @$stmt['emailUser']) {
        echo "<script>
        window.location.replace('userRegister.php')
        </script>";
    } else {
        $stmt2 = $pdo->prepare("insert into userstb values(null, '$nameUser', '$emailUser', '$passwordUser');");
        $stmt2 ->execute();
        echo "<script>
        window.location.replace('userLogin.php')
        </script>";
    }
    
?>