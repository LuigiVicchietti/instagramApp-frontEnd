<?php

    include("../connection.php");

    $productId = $_GET['productId'];
	
    $stmt =$pdo ->prepare("delete from producttb where productId='$productId'");
    $stmt ->execute();

    header("location:showProduct.php");
    
?>