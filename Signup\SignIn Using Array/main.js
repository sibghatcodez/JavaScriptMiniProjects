const signupGmail = document.getElementById('signupGmail');
const signupBtn = document.getElementById('signupBtn');
const signupPass = document.getElementById('signupPass');
const signupcnfrmPass = document.getElementById('signupConfirmPass');

const signinGmail = document.getElementById('signinGmail');
const signinBtn = document.getElementById('signinBtn');
const signinPass = document.getElementById('signinPass');

const resetEmail = document.getElementById('resetEmail');
const oldPass = document.getElementById('oldPass');
const newPass = document.getElementById('newPass');
const resetBtn = document.getElementById('resetBtn');
const passReset = document.querySelector('.pass-reset');

const signInSuccess = document.querySelector('.signInSuccess');
const signInError = document.querySelector('.signInError');

const signUpSuccess = document.querySelector('.signUpSuccess');
const signUpError = document.querySelector('.signUpError');

const passResetSuccess = document.querySelector('.passResetSuccess');
const passResetError = document.querySelector('.passResetError');

const gmails = [];
let user = {};


function registerAcc() {
    if (gmails.includes(signupGmail.value)) {
        signupGmail.style.border = '1px solid red';
        signUpError.textContent = "The email you entered is already registered.";
        setTimeout(() => {
            signUpError.textContent = "";
        }, 5000);
        setTimeout(() => {
            signupGmail.style.border = '1px solid #acacac';
        }, 1000);
    } else if (signupPass.value !== signupcnfrmPass.value) {
        signupcnfrmPass.style.border = '1px solid red';
        signUpError.textContent = "The passwords you entered doesn't match.";
        setTimeout(() => {
            signUpError.textContent = "";
        }, 5000);
        setTimeout(() => {
            signupcnfrmPass.style.border = '1px solid #acacac';
        }, 1000);
    } else {
        const userName = signupGmail.value.split('@')[0];
        user[signupGmail.value] = {
            userName: userName,
            Gmail: signupGmail.value,
            Password: signupPass.value
        };
        gmails.push(signupGmail.value);
        console.log("Account registered! Gmail:[" + signupGmail.value + "] Password:[" + signupPass.value + "]");
        signupGmail.value = "";
        signupPass.value = "";
        signupcnfrmPass.value = "";
        signUpSuccess.textContent = "Your account has been successfully registered!";
        setTimeout(() => {
            signUpSuccess.textContent = "";
        }, 5000);
    }
}


function loginAcc() {
    const userEmail = signinGmail.value;
    const userPassword = signinPass.value;
    
    if (!gmails.includes(userEmail)) {
        signinGmail.style.border = '1px solid red';
        signInError.textContent = "The email you entered is not registered.";
        setTimeout(() => {
            signInError.textContent = "";
        }, 5000);
        setTimeout(() => {
            signinGmail.style.border = '1px solid #acacac';
        }, 1000);
    } else if (userPassword !== user[userEmail].Password) {
            signinPass.style.border = '1px solid red';
            signInError.textContent = "Invalid password.";
            setTimeout(() => {
                signInError.textContent = "";
            }, 5000);
            setTimeout(() => {
                signinPass.style.border = '1px solid #acacac';
            }, 1000);
        } else {
            console.log("Account logged in! Gmail: [" + userEmail + "] Password: [" + userPassword + "]");
            signinGmail.value = "";
            signinPass.value = "";
            signInSuccess.textContent = "Account successfully logged in!";
            setTimeout(() => {
                signInSuccess.textContent = "";
            }, 5000);
        }
}



function updatePassword() {
     if (!gmails.includes(resetEmail.value)) {
        resetEmail.style.border = '1px solid green';
        passResetError.textContent = "The email you entered is invalid";
        setTimeout(() => {
            passResetError.textContent = "";
        }, 5000);
        setTimeout(() => {
            resetEmail.style.border = '1px solid #acacac';
        }, 1000);
    } else if (gmails.includes(resetEmail.value) && oldPass.value !== user[resetEmail.value].Password) {
        oldPass.style.border = '1px solid red';
        passResetError.textContent = "The password you entered is invalid!";
        setTimeout(() => {
            passResetError.textContent = "";
        }, 5000);
        setTimeout(() => {
            oldPass.style.border = '1px solid #acacac';
        }, 1000);
    } else if (newPass.value === "") {
        passResetError.textContent = "Please enter a new password!";
        setTimeout(() => {
            passResetError.textContent = "";
        }, 5000);
    } else {
        user[resetEmail.value].Password = newPass.value;
        console.log("Password updated! Old Password: " + oldPass.value + " | New Password: " + user[resetEmail.value].Password);
        passResetSuccess.textContent = "Your password has been successfully updated!";
        setTimeout(() => {
            passResetSuccess.textContent = "";
        }, 5000);
    }
}


signupBtn.addEventListener('click', registerAcc);
signinBtn.addEventListener('click', loginAcc);
resetBtn.addEventListener('click', updatePassword);