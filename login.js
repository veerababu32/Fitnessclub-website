const matcheduser = "fitnessclub@gmail.com";
const matchedpassword = "fitness@123";
let useremail = document.getElementById('useremail');
let userpassword = document.getElementById('userpassword');
let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener("click",function(){
    validateLogin;
})

function validateLogin(){
    if((useremail.value === matcheduser) && (userpassword.value === matchedpassword)){
        console.log("correct match")
        useremail.style.borderColor = 'green';
        userpassword.style.borderColor = 'green';
        return true;
    }
    else{
        alert('Check username and password');
        useremail.style.borderColor = 'red';
        userpassword.style.borderColor = 'red';
        return false;
    }
}