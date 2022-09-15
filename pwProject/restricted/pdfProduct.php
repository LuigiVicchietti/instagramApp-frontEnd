<?php
	require_once("../connection.php");
	
	$res ="";

		$stmt = $pdo -> prepare("select * from producttb");       
		$stmt ->execute();

		while($row = $stmt->fetch(PDO::FETCH_BOTH)){
			$res .= $row['productId'] . " - ";
			$res .= $row['product'] . " - ";
            		$res .= $row['value'] . " - ";	
           		$res .= $row['productPic'] . "<br>";					
		}	

	require_once("dompdf/autoload.inc.php");
	
	use Dompdf\Dompdf;
	
	$dompdf = new DOMPDF();

	$dompdf->load_html(
		"			
			<h1> Produtos registrados </h1>					
			$res			
		"
	);
	
	$dompdf->setPaper('A4', 'portrait');
		
	$dompdf->render();

	$dompdf->stream(
		"produtos.pdf", 
		array(
			"Attachment" => false
		)
	);
?>