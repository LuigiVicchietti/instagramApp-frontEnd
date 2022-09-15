<?php
include_once("validateSentinel.php");
include("../connection.php"); 
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Projeto PW</title>
</head>

<?php
$stmt = $pdo->prepare("select count(productId) from producttb where categoryId = 1");
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_NUM);

$stmt2 = $pdo->prepare("select count(productId) from producttb where categoryId = 2");
$stmt2->execute();
$row2 = $stmt2->fetch(PDO::FETCH_NUM);

$stmt3 = $pdo->prepare("select count(productId) from producttb where categoryId = 3");
$stmt3->execute();
$row3 = $stmt3->fetch(PDO::FETCH_NUM);

$stmt4 = $pdo->prepare("select count(productId) from producttb where categoryId = 4");
$stmt4->execute();
$row4 = $stmt4->fetch(PDO::FETCH_NUM);

$stmt5 = $pdo->prepare("select count(productId) from producttb where categoryId = 5");
$stmt5->execute();
$row5 = $stmt5->fetch(PDO::FETCH_NUM);

include("pieChart.php");
?>

<body>

<?php
include("nav.php");
?>

<!-- <p class="welcomeText">Bem-vindo, <?php echo $_SESSION['nameUserSession']; ?>!</p> -->

<section class="contentContainer">
    <div id="piechart" style="width: 900px; height: 500px;"></div>
</section>

</main>

<footer>
    <h6>Desenvolvido por leOh e yLu1Gi</h6>
</footer>

<script src="../js/script.js"></script>

</body>

</html>