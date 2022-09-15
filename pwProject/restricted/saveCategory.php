<?php

    include("../connection.php");

    $categoryId = $_POST["categoryId"];
    $category = $_POST["category"];

    if($categoryId > 0){
        $stmt = $pdo->prepare("update categorytb set category='$category' where categoryId='$categoryId'");
    }
    else{
        $stmt = $pdo ->prepare("insert into categorytb values(null,'$category')");
    }    
	$stmt ->execute();

    header("location:showCategory.php");

?>