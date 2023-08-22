const loginForm = document.getElementById("login");
const errorMsg = document.getElementById("error-msg");
const success = document.getElementById("suc-msg");
const btnsub = document.getElementById("btn-Sub");


btnsub.addEventListener("click",(e) =>{ 

e.preventDefault();
const email = loginForm.email.value;
const password = loginForm.pwd.value;


if (email === "praveendinujaya.2006@gmail.com" && password === "test123") {
	success.classList.remove("visually-hidden");
	errorMsg.classList.add("visually-hidden");



}
else{
	success.classList.add("visually-hidden");
	errorMsg.classList.remove("visually-hidden");
}




})
