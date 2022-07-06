const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 유저 이름 유효성 검사 - 
// 1. 너무 길지 않을 것
// 2. 비어있지 않을 것
function onLoginButtonClick(){
    const userName = loginInput.value; // input의 value 가져오기
    console.log(userName);
}

loginButton.addEventListener("click", onLoginButtonClick);