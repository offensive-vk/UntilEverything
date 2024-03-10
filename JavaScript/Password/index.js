function validatePasswordStrength() {
    var password = document.getElementById('password').value;
    var progress = document.getElementById('progress');
    var strength = 0;
    var digits = 0;
    var symbols = 0;
    var upper = 0;
    var lower = 0;
    var spaces = 0;
    var alpha = 0;

    for (let i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            alpha++;
            upper++;
        } else if (charCode >= 97 && charCode <= 122) {
            alpha++;
            lower++;
        } else if (charCode >= 48 && charCode <= 57) {
            digits++;
        } else if (charCode === 32) {
            spaces++;
        } else {
            symbols++;
        }
    }

    if (password.length > 0) {
        strength += 0;
    }

    if (password.length > 5) {
        strength += 1;
    }

    if (lower > 0) {
        strength += 1;
    }

    if (upper > 0) {
        strength += 1;
    }

    if (digits >= 2) {
        strength += 1;
    }

    if (symbols > 0) {
        strength += 1;
    }

    if (password.length > 14 && symbols > 0 && digits >= 2 && upper > 0) {
        strength = 5;
    }

    switch (strength) {
        case 0:
            progress.style.width = '0%';
            progress.className = 'weak';
            document.querySelector('.strength').innerHTML = "Strength : " + progress.className;
            break;
        case 1:
            progress.style.width = '20%';
            progress.className = 'weak';
            document.querySelector('.strength').innerHTML = "Strength : " + progress.className;
            break;
        case 2:
            progress.style.width = '40%';
            progress.className = 'good';
            document.querySelector('.strength').innerHTML = "Strength : " + progress.className;
            break;
        case 3:
            progress.style.width = '60%';
            progress.className = 'very-good';
            document.querySelector('.strength').innerHTML = "Strength : " + progress.className;
            break;
        case 4:
            progress.style.width = '80%';
            progress.className = 'excellent';
            document.querySelector('.strength').innerHTML = "Strength : " + progress.className;
            break;
        case 5:
            progress.style.width = '100%';
            progress.className = 'perfect';
            document.querySelector('.strength').innerHTML = "Strength : " + progress.className;
            break;
        default:
            progress.style.width = '0%';
            progress.className = 'weak';
            document.querySelector('.strength').innerHTML = "Strength : " + progress.className;
            break;
    }

    document.getElementById("d").innerHTML = "Digits : " + digits;
    document.getElementById("s").innerHTML = "Symbols : " + symbols;
    document.getElementById("l").innerHTML = "Lowercase : " + lower;
    document.getElementById("u").innerHTML = "Uppercase : " + upper;
    document.getElementById("a").innerHTML = "Alphabets : " + alpha;
    document.getElementById("sp").innerHTML = "Spaces : " + spaces;
}