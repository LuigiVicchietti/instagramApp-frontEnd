<?php

    include("../connection.php");

    $productId = $_POST['productId'];
    $product = $_POST['product'];
    $categoryId = $_POST['categoryId'];
    $value = $_POST['value'];
    $productPic = $_POST['productPic'];

    if($productId > 0){
        $stmt = $pdo->prepare("update producttb set product='$product', categoryId='$categoryId', value='$value', productPic='$productPic' where productId='$productId'");	
    }
    else{
        $stmt = $pdo->prepare("insert into producttb values(null,'$product','$categoryId','$value','$productPic');");	
    }    
	$stmt ->execute();

    header("location:showProduct.php");

?>