<?php

    include("../connection.php");

    $categoryId = $_GET['categoryId'];
	
    $stmt =$pdo ->prepare("delete from categorytb where categoryId='$categoryId'");
    $stmt ->execute();

    header("location:showCategory.php");
    
?>