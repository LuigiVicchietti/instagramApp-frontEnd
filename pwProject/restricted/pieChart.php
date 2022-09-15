<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Categorias', 'Quantidade de produtos'],
            ['Tecnologia', <?php echo $row[0]; ?>],
            ['Alimentação', <?php echo $row2[0]; ?>],
            ['Vestuário', <?php echo $row3[0]; ?>],
            ['Móvel', <?php echo $row4[0]; ?>],
            ['Acessório', <?php echo $row5[0]; ?>]
        ]);

        var options = {
            title: 'Gráfico do percentual de produtos por categoria',
            backgroundColor: '#cecccc'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
</script>