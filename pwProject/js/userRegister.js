let form = document.getElementById("form"),
    nameInput = document.getElementById("nameInput"),
    emailInput = document.getElementById("emailInput"),
    passwordInput = document.getElementById("passwordInput"),
    confirmPasswordInput = document.getElementById("confirmPasswordInput"),
    submitBtn = document.getElementById("submitBtn"),
    backButton = document.getElementById("backButton"),
    fieldErrorText = document.getElementById("fieldErrorText"),
    previousUrl = document.referrer,
    linkSavingUserRegister = document.getElementById("linkSavingUserRegister").href

function validateFields() {
    let nameValue = nameInput.value,
        emailValue = emailInput.value,
        passwordValue = passwordInput.value,
        confirmPasswordValue = confirmPasswordInput.value,
        regex = /\S+@\S+\.\S+/,
        emailTest = regex.test(emailValue)

    if (nameValue === "" || emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
        fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;" + "transition: .7s;"
        fieldErrorText.textContent = "Preencha todos os campos!"
        nameInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
        emailInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
        passwordInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
        confirmPasswordInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"

        if (nameValue !== "") {
            nameInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
        }

        if (emailValue !== "") {
            emailInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
        }

        if (passwordValue !== "") {
            passwordInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
        }

        if (confirmPasswordValue !== "") {
            confirmPasswordInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
        }

    } else if (emailTest === false) {
        fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;" + "transition: .7s;"
        fieldErrorText.textContent = "Você digitou um endereço de e-mail inválido!"
        emailInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
    }

    if (passwordValue !== confirmPasswordValue) {
        fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;" + "transition: .7s;"
        fieldErrorText.textContent = "Senha digitada incorreta!"
        confirmPasswordInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
    }

    if (nameValue !== "" && emailValue !== "" && passwordValue !== "" && confirmPasswordValue !== "" && passwordValue === confirmPasswordValue && emailTest === true) {
        form.submit()
    }
}

function validatePassword() {
    let passwordValue = passwordInput.value,
        confirmPasswordValue = confirmPasswordInput.value

    if (passwordValue !== confirmPasswordValue) {
        fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;" + "transition: .7s;"
        fieldErrorText.textContent = "Senha digitada incorreta!"
        confirmPasswordInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
    } else {
        fieldErrorText.style.cssText = "visibility: hidden;"
        confirmPasswordInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
    }
}

function removeError() {
    let nameValue = nameInput.value,
        emailValue = emailInput.value,
        passwordValue = passwordInput.value

    if (nameValue !== "" && emailValue !== "" && passwordValue !== "") {
        fieldErrorText.style.cssText = "visibility: hidden;"
    }

    if (nameValue !== "") {
        nameInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
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

if (previousUrl === linkSavingUserRegister) {
    fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;"
    fieldErrorText.textContent = "Esse endereço de e-mail já existe!"
    setTimeout(() => { fieldErrorText.style.cssText = "visibility: hidden;" + "color: #cecccc;" + "transition: .8s;" }, 3000)
}

document.addEventListener("keypress", enterSubmit)
submitBtn.addEventListener("click", validateFields)
nameInput.addEventListener("input", removeError)
emailInput.addEventListener("input", removeError)
passwordInput.addEventListener("input", removeError)
passwordInput.addEventListener("input", validatePassword)
confirmPasswordInput.addEventListener("input", validatePassword)
backButton.addEventListener("click", () => { window.history.back() })