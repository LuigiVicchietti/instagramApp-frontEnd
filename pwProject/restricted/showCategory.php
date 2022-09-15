<?php include("header.php");
include("nav.php");
include_once("validateSentinel.php");
include("../connection.php");
?>

<section class="contentContainer">

  <div class="column1">
    <h3>Registrar categorias</h3>
    <div class="formHr"></div>
    <form id="form" class="productForm" method="post" action="saveCategory.php">
      <input type="hidden" name="categoryId" value="<?php echo @$_GET['categoryid'] ?>">
      <br>
      <input type="text" id="categoryInput" class="pcTextInput" maxlength="50" placeholder="Informe a categoria dos produtos" name="category">
      <p id="fieldErrorText">.</p>
      <div class="btnContainer"><input id="submitBtn" class="blackSubmitBtn" type="button" value="Salvar"></div>
    </form>
  </div>

  <div class="column2">
    <h3>Categorias registradas</h3>
    <div class="formHr"></div>
    <?php
    $stmt = $pdo->prepare("select c.categoryid, c.category from categorytb c");
    $stmt->execute();
    ?>
    <table>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Categoria</th>
        </tr>
      </thead>
      <tbody>
        <?php
        while ($row = $stmt->fetch(PDO::FETCH_BOTH)) {
          echo "<tr>";
          echo "<td> $row[categoryid] </td>";
          echo "<td> $row[category]</td>";
          echo "<td>";
          echo "<a class='delete' href='deleteCategory.php?categoryId=$row[categoryid]'>Excluir</a>";
          echo "</td>";
          echo "<td>";
          echo "<a class='edit' href='?categoryid=$row[0]&category=$row[1]'>Editar</a>";
          echo "</td>";
          echo "</tr>";
        }
        ?>
      </tbody>
    </table>
    <br>
    <div class="btnContainer">
    <a class="jpLink" href="jsonCategory.php"><div class="blackBtn">JSON</div></a>
    <a class="jpLink" href="pdfCategory.php"><div class="blackBtn">PDF</div></a>
    </div>
  </div>

</section>

</main>

<footer>
  <h6>Desenvolvido por leOh e yLu1Gi</h6>
</footer>

<script src="../js/script.js"></script>
<script src="../js/showCategory.js"></script>

</body>

</html>