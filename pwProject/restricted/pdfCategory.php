<?php
	require_once("../connection.php");
	
	$res ="";

		$stmt = $pdo -> prepare("select * from categorytb");       
		$stmt ->execute();

		while($row = $stmt->fetch(PDO::FETCH_BOTH)){
			$res .= $row['categoryId'] . " - ";
			$res .= $row['category'] . "<br>";				
		}	

	require_once("dompdf/autoload.inc.php");
	
	use Dompdf\Dompdf;
	
	$dompdf = new DOMPDF();

	$dompdf->load_html(
		"			
			<h1> Categorias registradas </h1>					
			$res			
		"
	);
	
	$dompdf->setPaper('A4', 'portrait');
		
	$dompdf->render();

	$dompdf->stream(
		"categorias.pdf", 
		array(
			"Attachment" => false
		)
	);
?>