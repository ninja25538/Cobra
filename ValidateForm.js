function validatePass() {
    var password = document.getElementByClassName("input_password");
    var validate = password.value.length >= 8;
    if(!valid) {
        setErrorMessage(password, "Password must be at least 8 characters");
    }
    return validate;
}
password.addEventListener("focus", validatePass, false);
