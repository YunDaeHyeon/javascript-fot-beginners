const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "userName";

/*
    사이트 접속 시 LocalStorage를 체크하여 Username이 있으면 form 비활성
    만약 비어있으면 form 제공
*/
function onLoginSubmit(event){ // 폼 버튼 클릭
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName); 
    paintGreetings(userName);
}

function paintGreetings(userName){ // 요소 출력 (화면에 보이기)
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // 요소 활성화
}

const savedUserName = localStorage.getItem(USERNAME_KEY); // LS로부터 userName 저장

if(savedUserName === null){ // LS에 userName이 비어있다면 form 표시
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 폼 활성화
    loginForm.addEventListener("submit", onLoginSubmit); // 이벤트 리스너 연동
}else{ // userName이 있다면 요소 표시
    // show the greeting
    paintGreetings(savedUserName);
}