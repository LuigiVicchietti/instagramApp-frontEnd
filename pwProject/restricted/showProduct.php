<?php include("header.php");
include("nav.php");
include_once("validateSentinel.php");
include("../connection.php");
?>

<section class="contentContainer">

  <div class="column1">
    <h3>Registrar produtos</h3>
    <div class="formHr"></div>
    <form id="form" class="productForm" method="post" action="saveProduct.php">
      <input type="hidden" name="productId" value="<?php echo @$_GET['productid'] ?>">
      <br>
      <input type="text" id="productInput" class="pcTextInput" maxlength="50" placeholder="Informe o nome do produto" name="product">
      <?php
      $stmtCat = $pdo->prepare("select * from categorytb");
      $stmtCat->execute();
      ?>
      <?php
      $category = @$_GET['category'];
      ?>
      <select id="categorySelect" name="categoryId">
        <option value="0">Selecione a categoria</option>
        <?php
        while ($rowCat = $stmtCat->fetch(PDO::FETCH_BOTH)) {
          if ($category == $rowCat[1]) {
            $sel = "selected";
          } else {
            $sel = "";
          }
          echo "<option value='$rowCat[0]' $sel> $rowCat[1] </option>";
        }
        ?>
      </select>
      <input type="number" id="productValueInput" class="pcTextInput" placeholder="Informe o valor do produto" name="value">
      <br>
      <label>Envie a imagem do produto:</label>
      <input type="file" id="productPicInput" class="pcTextInput" maxlength="100" name="productPic">
      <p id="fieldErrorText">.</p>
      <div class="btnContainer"><input id="submitBtn" class="blackSubmitBtn" type="button" value="Salvar"></div>
    </form>
  </div>

  <div class="column2">
    <h3>Produtos registrados</h3>
    <div class="formHr"></div>
    <?php
    $stmt = $pdo->prepare("select p.productid,p.product,c.category,p.value,p.productpic from producttb p
        inner join categorytb c
        on p.categoryid = c.categoryid");
    $stmt->execute();
    ?>
    <table>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Produto</th>
          <th scope="col">Categoria</th>
          <th scope="col">Valor</th>
          <th scope="col">Imagem</th>
        </tr>
      </thead>
      <tbody>
        <?php
        while ($row = $stmt->fetch(PDO::FETCH_BOTH)) {
          echo "<tr>";
          echo "<td> $row[productid] </td>";
          echo "<td> $row[product]</td>";
          echo "<td> $row[category]</td>";
          echo "<td> $row[value] </td>";
          echo "<td> $row[productpic] </td>";
          echo "<td>";
          echo "<a class='delete' href='deleteProduct.php?productId=$row[productid]'>Excluir</a>";
          echo "<td>";
          echo "<a class='edit' href='?productid=$row[0]&product=$row[1]&category=$row[2]&value=$row[3]'>Editar</a>";
          echo "</td>";
          echo "</td>";
          echo "</tr>";
        }
        ?>
      </tbody>
    </table>
    <br>
    <div class="btnContainer">
    <a class="jpLink" href="jsonProduct.php"><div class="blackBtn">JSON</div></a>
    <a class="jpLink" href="pdfProduct.php"><div class="blackBtn">PDF</div></a>
    </div>
  </div>

</section>

</main>

<footer>
  <h6>Desenvolvido por leOh e yLu1Gi</h6>
</footer>

<script src="../js/script.js"></script>
<script src="../js/showProduct.js"></script>

</body>

</html>