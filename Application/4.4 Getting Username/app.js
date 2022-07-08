const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 표기 (관습)

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden"); // 로그인 입력 form에 .hidden을 추가하여 화면에서 사라지게 만듬.
    const userName = loginInput.value;
    greeting.innerText = `Hello ${userName}`; // #greeting에 텍스트 추가 ``에 ${}을 활용하여 변수 서식문자 지정
    greeting.classList.remove(HIDDEN_CLASSNAME); // #greeting의 초기값은 hidden이므로 form에서 입력받았을 시 삭제
}

loginForm.addEventListener("submit", onLoginSubmit);