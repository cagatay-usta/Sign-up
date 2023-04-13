const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

const passwordMatch = document.querySelector("#password_match");
const match_error = document.getElementById("match_error");

const passwordLength = document.getElementById("password-length");
const uppercase = document.getElementById("uppercase");
const number = document.getElementById("number");

function checkPasswordMatch() {
    if (password.value === confirmPassword.value) {
        passwordMatch.classList.add("passed");
        match_error.textContent = "";
    } else {
        passwordMatch.classList.remove("passed");
        match_error.textContent = "do not";
    };
}

function checkUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        // checks if lowercase and uppercase is the same to eliminate numbers and punctuation
        if (char != char.toLowerCase() && char == char.toUpperCase()) { 
            return true;
        };
    };
    return false;
}

function checkNumber(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (isNaN(char) == false) {
            return true;
        };
    };
    return false;
}

function checkValidPassword() {
 
    if (password.value.length > 7) {
        passwordLength.classList.add("passed");

    } else {
        passwordLength.classList.remove("passed");
    }

    if (checkUpperCase(password.value)) {
        uppercase.classList.add("passed");
    } else {
        uppercase.classList.remove("passed");
    }

    if (checkNumber(password.value)) {
        number.classList.add("passed");
    } else {
        number.classList.remove("passed");
    }
}

password.addEventListener("input", () => {
    checkValidPassword();
    checkPasswordMatch();
});
confirmPassword.addEventListener("input", checkPasswordMatch);
