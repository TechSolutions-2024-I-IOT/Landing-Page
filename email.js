const serviceID = "service_gf77zuj";
const templateID= "template_snfl4gt";

let isValid=true;

function sendMailProcess() {
    clearErrorMessage(); // Limpia todos los mensajes de error antes de validar
    if (!validateForm()) {
        return; // Si el formulario no es válido, detiene la función aquí
    }
    sendMail(); // Envía el formulario si todo es válido
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 2000);

}


function validateForm() {
    isValid = true; // Asegúrate de resetear isValid a true cada vez que validas

    validateNameEmptySpace();
    validateEmail();
    validateMessage();

    console.log(isValid);
    return isValid;
}


function validateProcess(){
    validateNameEmptySpace();
    validateMessage();
    validateEmail();
}

function obtainCurrentlyEmail(){
    return document.getElementById("email").value.trim();
}
function obtainCurrentlyName(){
    return document.getElementById("name").value.trim();
}
function obtainCurrentlyMessage(){
    return document.getElementById("message").value.trim();
}

function validateNameEmptySpace(){

    clearNameErrorMessage()

    if (obtainCurrentlyName()===""){
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;
    }
}

function validateEmail() {
    const email = obtainCurrentlyEmail(); // Asegúrate de obtener el email aquí
    clearEmailErrorMessage(); // Limpia el mensaje de error anterior

    if (email === "") {
        document.getElementById("emailError").textContent = "Please enter your email address.";
        isValid = false;
    } else if (!validateEmailFormat(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }
}

function validateMessage(){

    clearMessageErrorMessage()

    if(obtainCurrentlyMessage()===""){
        document.getElementById("messageError").textContent = "Please enter a message.";
        isValid = false;
    }

    return isValid;

}

function validateEmailFormat(email) {
    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alertInvalidEmailFormat();
        return false; // Indica que el formato del correo no es válido
    }

    return true; // Indica que el formato del correo es válido


}

function sendMail() {
    var params = {
        name: obtainCurrentlyName(),
        email: obtainCurrentlyEmail(),
        message: obtainCurrentlyMessage(),
    };

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully");
        })
        .catch(err => console.log(err));
}


function alertInvalidEmailFormat(){
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
}

function clearNameErrorMessage(){
    document.getElementById("nameError").textContent = "";
}


function clearEmailErrorMessage(){
    document.getElementById("emailError").textContent = "";
}

function clearMessageErrorMessage(){
    document.getElementById("messageError").textContent = "";
}


function clearErrorMessage() {
    clearNameErrorMessage()
    clearMessageErrorMessage()
    clearEmailErrorMessage()
}
