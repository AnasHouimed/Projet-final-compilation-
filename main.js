

let btn = document.getElementById ("bouton_login")
btn.addEventListener("click", function login (e) {
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let message = document.getElementById("msg")
    console.log(message)
   if ( email == "anas@gmail.com" && password == "123") {
    message.innerHTML= "email correcte"
   } else {
    message.innerHTML= "email incorrecte"
   }
}

)


