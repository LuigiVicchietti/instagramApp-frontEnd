<?php

    include("../connection.php");

    $categoryId = $_POST["categoryId"];
    $category = $_POST["category"];  

    $stmt = $pdo->prepare("update categorytb set category='$category' where categoryId='$categoryId'");	
	$stmt ->execute();

    header("location:showCategory.php");
    
?>