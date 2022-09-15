<?php include("header.php"); ?>

<section class="generalContainer">
    <div class="userBg"><img src="assets/bg.jpg" alt=""></div>
    <div class="loginUserForm">
        <h1 class="title">Logar conta</h1>
        <div class="hrLogin"></div>
        <p class="text1">Preencha os campos abaixo para logar em sua conta.</p>
        <form id="form" class="form" action="validateUserLogin.php" method="post">
            <input name="emailLogin" id="emailInput" class="textInput" type="email" placeholder="Endereço de e-mail*" maxlength="256">
            <input name="passwordLogin" id="passwordInput" class="textInput" type="password" placeholder="Senha*" maxlength="128">
            <p id="fieldErrorText">.</p>
            <div class="btnContainer"><input id="submitBtn" class="submitLoginBtn" type="button" value="Logar"></div>
        </form>
        <p class="text2">Ainda não possui uma conta? <a href="userRegister.php">Cadastre-se</a></p>
        <p class="text3"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Esqueceu a senha?</a></p>
        <div id="backButton"></div>
    </div>
</section>
<a id="linkValidateUserLogin" href="validateUserLogin.php"></a>
</main>

<script src="js/userLogin.js"></script>
</body>

</html>