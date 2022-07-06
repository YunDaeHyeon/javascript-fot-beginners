const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 유저 이름 유효성 검사
// 1. 너무 길지 않을 것
// 2. 비어있지 않을 것
function onLoginButtonClick(){
    const userName = loginInput.value; // input의 value 가져오기
    if(value === ""){ // value가 비어있다면
        alert("Please write your name");
    }else if(userName.length > 15){ // 유저의 이름이 15자가 넘으면
        alert("Your name is too long.");
    }
    
}

loginButton.addEventListener("click", onLoginButtonClick);