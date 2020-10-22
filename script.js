const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmation = document.getElementById("confirmation");
// Functions for displaying message
function showSuccess(input) {
    const parent = input.parentElement;
    parent.className = "form-control success";
}
function showError(input, msg) {
    const parent = input.parentElement;
    parent.className = "form-control error"
    parent.querySelector("small").innerHTML = msg;
}
function getFieldName(input) {
    let fieldName = input.id.charAt(0).toUpperCase() + input.id.slice(1);
    return fieldName;
}
// Functions for validation
function checkRequired(arrList) {
    arrList.forEach(input => {
        input.value = input.value.trim();
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(input.value).trim().toLowerCase())) {
        showError(input, `${getFieldName(input)} is not valid`)
    }
}
function checkLength(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min || input.value.length > max) {
        showError(input, `${getFieldName(input)} must be within ${min} and ${max} characters`);
    }
}
function checkPasswordConfirmation(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Passwords do not match`);
    }
}
// Event for form submission
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([username, email, password, confirmation]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordConfirmation(password, confirmation);
})
