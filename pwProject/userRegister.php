<?php include("header.php"); ?>

<section class="generalContainer">
    <div class="userBg"><img src="assets/bg.jpg" alt=""></div>
    <div class="registerUserForm">
        <h1 class="title">Cadastrar conta</h1>
        <div class="hrRegister"></div>
        <p class="text1">Preencha os campos abaixo para cadastrar uma nova conta. (Você será redirecionado automaticamente para a área de login caso seu cadastro seja realizado com sucesso!)</p>
        <form id="form" class="form" action="savingUserRegister.php" method="post">
            <input type="hidden" name="userId">
            <input name="nameRegister" id="nameInput" class="textInput" type="text" placeholder="Nome*" maxlength="80">
            <input name="emailRegister" id="emailInput" class="textInput" type="email" placeholder="Endereço de e-mail*" maxlength="256">
            <div class="passwordContainer">
                <input name="passwordRegister" id="passwordInput" class="passwordTextInput" type="password" placeholder="Senha*" maxlength="128">
                <input id="confirmPasswordInput" class="passwordTextInput" type="password" placeholder="Confirmar senha*">
            </div>
            <p id="fieldErrorText">.</p>
            <div class="btnContainer"><input id="submitBtn" class="submitRegisterBtn" type="button" value="Cadastrar"></div>
        </form>
        <p class="text2">Já possui uma conta? Então faça <a href="userLogin.php">login</a></p>
        <div id="backButton"></div>
    </div>
</section>
<a id="linkSavingUserRegister" href="savingUserRegister.php"></a>
</main>

<script src="js/userRegister.js"></script>
</body>

</html>