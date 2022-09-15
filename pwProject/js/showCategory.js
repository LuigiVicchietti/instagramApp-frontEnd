let form = document.getElementById("form"),
    categoryInput = document.getElementById("categoryInput"),
    fieldErrorText = document.getElementById("fieldErrorText"),
    submitBtn = document.getElementById("submitBtn")

function validateFields() {
    let categoryValue = categoryInput.value

    if (categoryValue === "") {
        fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;" + "transition: .7s;"
        fieldErrorText.textContent = "Preencha o campo acima!"
        categoryInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
    }

    if (categoryValue !== "") {
        form.submit()
    }
}

function removeError() {
    let categoryValue = categoryInput.value

    if (categoryValue !== "") {
        fieldErrorText.style.cssText = "visibility: hidden;"
        categoryInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
    }
}

function enterSubmit() {
    if (window.event.keyCode === 13) {
        submitBtn.click()
    }
}

document.addEventListener("keypress", enterSubmit)
form.addEventListener("submit", function (e) { e.preventDefault(); return false })
categoryInput.addEventListener("input", removeError)
submitBtn.addEventListener("click", validateFields)