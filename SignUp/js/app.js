const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const ctogglePassword = document.querySelector('#ctogglePassword');
const cpassword = document.querySelector('#cpassword');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    if (this.classList.contains('fa-eye')) {
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } 
    else {
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});

ctogglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    cpassword.setAttribute('type', type);


    if (this.classList.contains('fa-eye')) {
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } 
    else {
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});

var pass = document.getElementById("password"), 
confirm_password = document.getElementById("cpassword");

function validatePassword(){
  if(pass.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

pass.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;