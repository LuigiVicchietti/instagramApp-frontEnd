let form = document.getElementById("form"),
    productInput = document.getElementById("productInput"),
    categorySelect = document.getElementById("categorySelect"),
    productValueInput = document.getElementById("productValueInput"),
    productPicInput = document.getElementById("productPicInput"),
    fieldErrorText = document.getElementById("fieldErrorText"),
    submitBtn = document.getElementById("submitBtn")

function validateFields() {
    let productName = productInput.value,
        categorySelectValue = categorySelect.value,
        productValue = productValueInput.value,
        productPicValue = productPicInput.value

    if (productName === "" || categorySelectValue === 0 || productValue === "" || productPicValue === "") {
        fieldErrorText.style.cssText = "visibility: visible;" + "color: #e03333;" + "transition: .7s;"
        fieldErrorText.textContent = "Preencha todos os campos!"
        productInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
        categorySelect.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
        productValueInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"
        productPicInput.style.cssText = "background-color: #f49c9c;" + "transition: .7s;"

        if (productName !== "") {
            productInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
        }

        if (categorySelectValue > 0) {
            categorySelect.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
        }

        if (productValue !== "") {
            productValueInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
        }

        if (productPicValue !== "") {
            productPicInput.style.cssText = "background-color: #cecccc;" + "transition: .7s;"
        }
    }

    if (productName !== "" && categorySelectValue > 0 && productValue !== "" && productPicValue !== "") {
        form.submit()
    }
}

function removeError() {
    let productName = productInput.value,
        categorySelectValue = categorySelect.value,
        productValue = productValueInput.value,
        productPicValue = productPicInput.value

    if (productName !== "" && categorySelectValue > 0 && productValue !== "" && productPicValue !== "") {
        fieldErrorText.style.cssText = "visibility: hidden;"
    }

    if (productName !== "") {
        productInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
    }

    if (categorySelectValue > 0) {
        categorySelect.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
    }

    if (productValue !== "") {
        productValueInput.style.cssText = "background-color: #ffffff;" + "transition: .7s;"
    }

    if (productPicValue !== "") {
        productPicInput.style.cssText = "background-color: #cecccc;" + "transition: .7s;"
    }
}

function enterSubmit() {
    if (window.event.keyCode === 13) {
        submitBtn.click()
    }
}

document.addEventListener("keypress", enterSubmit)
form.addEventListener("submit", function (e) { e.preventDefault(); return false })
productPicInput.addEventListener("keypress", function (e) { e.preventDefault(); return false })
productInput.addEventListener("input", removeError)
categorySelect.addEventListener("input", removeError)
productValueInput.addEventListener("input", removeError)
productPicInput.addEventListener("input", removeError)
submitBtn.addEventListener("click", validateFields)