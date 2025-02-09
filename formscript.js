console.log("validateForm() called");
function validateForm(){
    var username = document.getElementById("username").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("textmessage").value.trim();
    if(username===""){
        alert("Please enter your name.");
        return false;
    }
    var phonereg = /^\d{10}$/;
    if(!phonereg.test(phone)){
        alert("Please enter a valid 10 digit mobile number.");
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (textmessage === "") {
        alert("Please enter your message.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}