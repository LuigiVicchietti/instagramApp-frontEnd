let form = document.getElementById("form"),
    emailInput = document.getElementById("emailInput"),
    passwordInput = document.getElementById("passwordInput"),
    submitBtn = document.getElementById("submitBtn"),
    backButton = document.getElementById("backButton"),
    fieldErrorText = document.getElementById("fieldErrorText"),
    previousUrl = document.referrer,
    linkValidateUserLogin = document.getElementById("linkValidateUserLogin").href

function validateFields() {
    let emailValue = emailInput.value,
        passwordValue = passwordInput.value,
        regex = /\S+@\S+\.\S+/,
        emailTest = regex.test(emailValue)

    if (emailValue === "" || passwordValue === "") {
        fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;" + "transition: .7s;"
        fieldErrorText.textContent = "Preencha todos os campos!"
        emailInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
        passwordInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"

        if (emailValue !== "") {
            emailInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
        }

        if (passwordValue !== "") {
            passwordInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
        }

    } else if (emailTest === false) {
        fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;" + "transition: .7s;"
        fieldErrorText.textContent = "Você digitou um endereço de e-mail inválido!"
        emailInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
    }

    if (emailValue !== "" && passwordValue !== "" && emailTest === true) {
        form.submit()
    }
}

function removeError() {
    let emailValue = emailInput.value,
        passwordValue = passwordInput.value

    if (emailValue !== "" && passwordValue !== "") {
        fieldErrorText.style.cssText = "visibility: hidden;"
    }

    if (emailValue !== "") {
        emailInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
    }

    if (passwordValue !== "") {
        passwordInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
    }
}

function enterSubmit() {
    if (window.event.keyCode === 13) {
        submitBtn.click()
    }
}

if (previousUrl === linkValidateUserLogin) {
    fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;"
    fieldErrorText.textContent = "Endereço de e-mail ou senha incorretos!"
    setTimeout(() => { fieldErrorText.style.cssText = "visibility: hidden;" + "color: #cecccc;" + "transition: .8s;" }, 3000)
}

document.addEventListener("keypress", enterSubmit)
submitBtn.addEventListener("click", validateFields)
emailInput.addEventListener("input", removeError)
passwordInput.addEventListener("input", removeError)
backButton.addEventListener("click", () => { window.history.back() })