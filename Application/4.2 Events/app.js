const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(tomato){
//     /*
//         모든 EventListener Function의 첫 번째 매개변수는 방금 발생한 이벤트 정보들이다.
//     */
//     tomato.preventDefault(); // preventDefault()는 브라우저의 기본 동작을 막는다.
//     console.log(tomato);
// }

function onLoginSubmit(event){ // 방금 발생한 이벤트 정보를 매개변수로 가져오기. (함수 호출 때 매개변수 지정 안함.)
    event.preventDefault();
    const userName = loginInput.value;
    console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit); //submit 감지 이벤트 (엔터, 혹은 버튼 클릭)
/*
    submit 버튼을 클릭했을 때 value값의 증발, 페이지 새로고침 현상이 발생하는 이유는
    브라우저에서 작동되는 기본동작이기 때문에 이를 막으면 된다.
    막는 방법은, preventDefault() 함수를 사용한다. 이 함수는 브라우저의 기본 동작을 막는 역할을 수행한다.
    e.preventDefault()의 e는 사용자가 함수를 호출할 때 매개변수를 지정할 필요 없이
    function 선언부에서 매개변수를 입력하면 방금 발생한 이벤트 정보를 자동적으로 가져오게 된다.
    그 이유는, JS에서 모든 EventListener Function의 첫 번째 매개변수는 방금 발생한 이벤트 정보들이기 때문이다.

    !! 1. addEventListener 안에 있는 함수는 직접 실행되는 것이 아닌, 브라우저가 실행한다.
    !! 2. 브라우저는 실행만 시켜주는 역할이 아닌 event에 대한 정보도 담는다.
*/

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

const link = document.querySelector("a");
link.addEventListener("click", handleLinkClick);