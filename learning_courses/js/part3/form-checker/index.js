const inputUser = {
    pseudoValue: "",
    emailValue: "",
    passwordValue: "",
}

let { pseudoValue } = inputUser;
let { emailValue } = inputUser;
let { passwordValue } = inputUser;
let confirmValue;


const pseudoContainer = document.querySelector('.pseudo-container');
const emailContainer = document.querySelector('.email-container');
const passwordContainer = document.querySelector('.password-container');
const confirmContainer = document.querySelector('.confirm-container');


function addClassForPassword(progressBar, classForAdd) {
    const passwordSpan = document.querySelector('#password ~ span');
    progressBar.classList = "";

    if (classForAdd)
        progressBar.classList.add(classForAdd);
    if (classForAdd == "progressRed")
    {
        passwordContainer.classList.add('error');
        passwordSpan.textContent = 'minimum de 8 caracteres, une majuscule et un caractere special'
    }
    else
    {
        passwordContainer.classList.remove('error');
        passwordSpan.textContent = "";
    }
}


function checkPseudo() {
    if (pseudoValue.length && (pseudoValue.length < 3 || pseudoValue.length > 20))
        pseudoContainer.classList.add('error');
    else
        pseudoContainer.classList.remove('error');
}

function checkEmail() {
    if (!emailValue.length || emailValue.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i))
        emailContainer.classList.remove('error');
    else
        emailContainer.classList.add('error');
}

function checkPassword() {
    const progressBar = document.getElementById('progress-bar');

    if (passwordValue.length 
        && (passwordValue.length < 8
            || !passwordValue.match(/[A-Z]/)
            || !passwordValue.match(/[!-?]/)))
        addClassForPassword(progressBar, 'progressRed', passwordContainer);
    else if (passwordValue.length > 13
        && passwordValue.match(/[A-Z]/)
        && passwordValue.match(/[!-?]/))
        addClassForPassword(progressBar, 'progressGreen', passwordContainer);
    else if (passwordValue.length >= 8 && passwordValue.length <= 13
        && passwordValue.match(/[A-Z]/)
        && passwordValue.match(/[!-?]/))
        addClassForPassword(progressBar, 'progressBlue', passwordContainer);
    else
        addClassForPassword(progressBar, "", passwordContainer);
}

function checkConfirm() {
    if (confirmValue.length && confirmValue !== passwordValue)
        confirmContainer.classList.add('error');
    else
        confirmContainer.classList.remove('error');
}

function checkInputUser() {
    pseudoValue = pseudo.value,
    emailValue = email.value,
    passwordValue = password.value,
    confirmValue = document.getElementById('confirm').value

    checkPseudo();
    checkEmail();
    checkPassword();
    checkConfirm();
}

setInterval(checkInputUser, 100);



function errorInputUser() {
    if (pseudoContainer.classList.contains('error')
    || emailContainer.classList.contains('error')
    || passwordContainer.classList.contains('error')
    || confirmContainer.classList.contains('error'))
        return (false);
    return (true);
}

document.querySelector('input[type="submit"]').addEventListener("click", (e) => {
    e.preventDefault();
    if (errorInputUser() === false)
        alert("Veuillez remplir correctement les champs du formulaire");
    else
    {
        inputUser.pseudoValue = pseudoValue;
        inputUser.emailValue = emailValue;
        inputUser.passwordValue = passwordValue;
        pseudo.value = "";
        email.value = "";
        password.value = "";
        document.getElementById('confirm').value = "";
        delete inputUser.confirmValue;
        console.log(inputUser);
        alert("Inscription Validee !");
    }
})
