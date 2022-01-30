var form = document.querySelector("form")
var username = document.getElementById("username")
var email = document.getElementById("email")
var passwd = document.getElementById("passwd")
var confPasswd = document.getElementById("confPasswd")

form.addEventListener("submit", submitForm)

function submitForm(doeven) {
    doeven.preventDefault();
  // alert("Your Form Has been Submitted Succesfully.!!")
  //validate();
  checkUserName(username);
  checkEmail(email);
  checkPasswd(passwd);
  checkConfPasswd(confPasswd);
}

function checkUserName(element) {
  var nameOfUser = element.value;
  if (nameOfUser === "") {
    setError(element, "User name cannot be empty");
  } else {
    onSuccess(element , );
  }
}

function checkEmail(element) {
  var emailValue = element.value;
  if (emailValue === "") {
    setError(element, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setError(element, "This is not a valid email");
  } else {
    onSuccess(element );
  }
}

function checkPassword(element) {
  var sc = ["@", "@","(", "#"];
  var passwordValue = element.value;
  for( i=0; i< sc.length ; i++) {
  //   if(!passwordValue.includes(sc[i])) {
  //     setError(element, "above pass is missing this following : * ,@,#");
  //     console.log(sc);
  //  } 
     if(!passwordValue.includes(sc[0])) {
        setError(element, "above pass is missing this following : ( ");
     } 
     else if(!passwordValue.includes(sc[1])){
      setError(element, "above pass is missing this following : @  ");
     }
     else if(!passwordValue.includes(sc[2])){
      setError(element, "Use Strong Password:Mix of #,@,() ");
     }
     else if (passwordValue === "") {
        setError(element, "how it can be empty? #error!");
     }
     else {
        onSuccess(element); 
     }
  }   
}

function checkConfirmPassword(element) {
  var passwordValue = passwd.value;
  var confirmPasswordValue = element.value;
  if (confirmPasswordValue === "") {
    setError(element, "confirm password cannot be empty");
  } else if (passwordValue !== confirmPasswordValue) {
    setError(element, "passwords do not match");
  } else {
    onSuccess(element);
  }
}


function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setError(element, errorMessage) {
  var formControl = element.parentElement;
  formControl.className = "form-control failure";
  formControl.querySelector("small").innerText = errorMessage;
}

function onSuccess(element , ) {
  var formControl = element.parentElement;
  formControl.className = "form-control success";
  
}

username.addEventListener("change", (e) => console.log(e.target.value))









/*
function validate() {
    var uname= username.value;
    if(uname==="md"){
    var postSubmit = username.parentElement;
    postSubmit.className = "form-control done";
    }else{
    var postSubmit = username.parentElement;
    postSubmit.className = "form-control undo";

   }*/



