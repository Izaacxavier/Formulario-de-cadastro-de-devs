const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const password = document.getElementById("password")
const password_confirm = document.getElementById("password-confirm")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password_confirmValue = password_confirm.value
    const telefoneValue = telefone.value;

        if (usernameValue === "") {
            setErrorFor(username, "Campo Obrigatorio.");
        } else {
                setSuccessFor(username);
            }

            if (emailValue === "") {
                setErrorFor(email, "O email é obrigatorio.");
            } else if (!checkEmail(emailValue)){
                setErrorFor(email, "Digite um email valido.");
            } else {
                setSuccessFor(email);
            }
            if (passwordValue === ""){
                setErrorFor(password, "A senha é obrigatoria");
            } else if (passwordValue.length < 8 ){
                setErrorFor(password, "A senha tem que ter no minino 8 caracteres");

            } else {
                setSuccessFor(password)
            }
               if (password_confirmValue === ""){
                   setErrorFor(password_confirm, "confirmaçao obrigatoria")
               } else if (password_confirmValue !== passwordValue){
                   setErrorFor(password_confirm, "a senha é diferente.");
               } else{
                   setSuccessFor(password_confirm);
               }
               if (telefoneValue === "") {
                setErrorFor(telefone, "Telefone é obrigatorio.");
            } else if (telefoneValue.length < 11 ) {
                setErrorFor(telefone,"Digite ddd + numero de telefone.");
            } else{
                setSuccessFor(telefone);
            }
            
        
}
 function setErrorFor(input, message) {
     const formControl = input.parentElement;
     const small = formControl.querySelector("small");

     small.innerText = message;

     formControl.className = "formularios error";

 }
    function setSuccessFor(input){
        const formControl = input.parentElement;

        formControl.className = "formularios success";

    }
    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
      }