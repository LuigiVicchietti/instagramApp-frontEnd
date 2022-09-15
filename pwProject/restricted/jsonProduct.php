<?php

    include_once("validateSentinel.php");
    include("../connection.php");

    $stmt = $pdo->prepare("select * from producttb");	
    $stmt ->execute();

    $data = array();
    while($row = $stmt ->fetch(PDO::FETCH_ASSOC)){        
        $data[] = $row;                   					
    }	

    echo json_encode($data);
    
?>