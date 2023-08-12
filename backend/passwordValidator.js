function checkPasswordValidation(value) {
    const hasWhitespace = /\s/;
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasDigit = /\d/;
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    if (hasWhitespace.test(value)) {
        return "Password must not contain Whitespaces.";
    }

    if (!hasUppercase.test(value)) {
        return "Password must have at least one Uppercase character.";
    }

    if (!hasLowercase.test(value)) {
        return "Password must have at least one Lowercase character.";
    }

    if (!hasDigit.test(value)) {
        return "Password must have at least one Digit.";
    }

    if (!hasSpecialChar.test(value)) {
        return "Password must have at least one Special character.";
    }

    return 'All is fine';
}


module.exports = checkPasswordValidation; 
