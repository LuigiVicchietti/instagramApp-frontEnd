<?php

    include("../connection.php");

    $productId = $_POST['productId'];
    $product = $_POST['product'];
    $categoryId = $_POST['categoryId'];
    $value = $_POST['value'];    

    $stmt = $pdo->prepare("update producttb set product='$product', categoryId='$categoryId', value='$value' where productId='$productId'");	
	$stmt ->execute();

    header("location:showProduct.php");
    
?>