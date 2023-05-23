

//Checks if the field is empty or not
let isEmpty = () => {
    var flag = true;        
    var ob1 = document.getElementById("label-1");
    var ob2 = document.getElementById("label-2");
    var ob3 = document.getElementById("label-3");
    var ob4 = document.getElementById("label-4");
    var ob5 = document.getElementById("res");

    var name = document.getElementById("name").value;
    if (name.length == 0) {
        ob1.innerHTML = "The Field is Empty !!";
        flag = false;
    } else {
        ob1.innerHTML = " ";
    }
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        ob2.innerHTML = "The Field is Empty !! ";
        flag = false;
    } else {
        ob2.innerHTML = " ";
    }
    var number = document.getElementById("number").value;
    if (number.length == 0) {
        ob3.innerHTML = "The Field is Empty !! ";
        flag = false;
    } else {
        ob3.innerHTML = " ";
    } 
    var password = document.getElementById("password").value;
    if (password.length == 0) {
        ob4.innerHTML = "The Field is Empty !! ";
        flag = false;
    } else {
        ob4.innerHTML = " ";
    }   

    var dob = document.getElementById("dob").value;
    if (dob.length == 0) {
        ob5.innerHTML = "The Field is Empty !! ";
        flag = false;
    } else {
        ob5.innerHTML = " ";
    } 
    return flag;
}

// Email section
let validateEmail = () => {
    var flag = true;
    var email = document.getElementById("email").value;
    var label = document.getElementById("label-2");
    var x = email.indexOf("@");
    var y = email.lastIndexOf(".");
    var len = email.length;
    if(len == 0){
        label.innerText = "Field is Empty !";
        flag = false;
    }
    else{
        if(x >- 1 && x >= 1 && (y-1-x) >= 1 && (len-1-y) >= 2)
        {
            label.innerHTML=" ";
            flag = false;
        }
        else
        {
            label.innerHTML=" Invalid Email!!";  
            flag = false;
        }
    }    
    return flag;
}

// Number section

// Number section
let validateNumber = () => {
    var flag = true;
    var number = document.getElementById("number").value;
    var label = document.getElementById("label-3");
    if (number.length === 0) {
        label.innerHTML = "Field is Empty!";
        flag = false;
    } else {
        label.innerHTML = "";
        if (number.length !== 10) {
            label.innerHTML = "Phone Number Must Be of 10 digits!";
            flag = false;
        } else {
            label.innerHTML = "";
            var numericValue = parseInt(number); // Convert input to numeric value
            if (numericValue >= 6000000000 && numericValue <= 9999999999) {
                label.innerHTML = "";
            } else {
                label.innerHTML = "Phone Number is Invalid!";
                flag = false;
            }
        }
    }
    return flag;
}



// Password section
let validatePassword = () => {     
    var flag = true;
    var password = document.getElementById("password").value;
    var label = document.getElementById("label-4");
    if(password.length < 8)
    {
        label.innerHTML = "Password must contain Minimum 8 characters";
        flag = false;
    }
    else{
        var upper=0;
        var lower=0;
        var digit=0;
        var symbol=0;
        for(let i = 0; i<password.length; i++)
        {
            var code=password.charCodeAt(i);
            if(code >= 65 && code <= 90)
                upper++;
            else if(code >= 97 && code <= 122)
                lower++;
            else if(code >= 48 && code <= 57)
                digit++;
            else
                symbol++;
        }
        if(upper >= 2 && lower >= 2 && digit >= 2 && symbol >= 1)
        {
            label.innerHTML=" ";
        }
        else
        {
            label.innerHTML="Password Must Contain Minimum of 2 Uppercase, 2 Lowercase , 2 Digits and 1 Symbol. ";
            flag = false;
        }
    }
    return flag;
}
//Final Function to be called
function validateForm(event){
    event.preventDefault(); // Prevent form submission and page reload

    var flag = true;
    if(isEmpty())
    {
        if(validateEmail() != true)
            flag = false;
        if(validatePassword() != true)
            flag = false;
    }
    return flag;
}


/*
//Final Function to be called
function validateForm(){
    var flag=true;
    if(isEmpty())
    {
        if(validateEmail() != true)
            flag = false;
        if(validatePassword() != true)
            flag = false;
    }
    return flag;
}
*/
// Age calculator
let getAge = () => {

    let dob = new Date(document.getElementById("dob").value);
    let date = new Date();
    let days = parseInt((date - dob) / (1000 * 60 * 60 * 24));
    let years = parseInt(days / 365);
    days = days % 365;
    let months = parseInt(days / 30);
    days = days % 30;
    document.getElementById("res").style.color = "green";
    document.getElementById("res").innerHTML = "You are " + years + " years " + months + " months " + days + " days old.";
} 