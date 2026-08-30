var password = 6362;

var passwordDiv = document.getElementById("passwordDiv");
var passwordText = document.getElementById("passwordText"); 
var textBox = document.getElementById("textBox");
var SignInButton = document.getElementById("signInButton");
var MainDiv = document.getElementById("mainDiv");

function SignIn(){
	var input = textBox.value;
	console.log(input);
	if (input.match("[0-9]{3,}")) {
		if(Number(textBox.value) == password) {
			clearBox(passwordDiv);
			MainDiv.style.visibility = "visible";
		}
		else {
			passwordText.innerHTML = "Wrong Password! Please Try again!";
		}
	}
	else {
		passwordText.innerHTML = "Please Use Only Numbers!";
	}
}

function clearBox(element) { 
	while(element.firstChild) { 
		element.removeChild(element.firstChild); 
	} 
	element.remove();
} 
