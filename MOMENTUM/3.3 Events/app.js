const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

//title.innerText = "Hello";

//title.style.color = "blue";

// title에 Event를 Listen한다. "Click"이벤트를.

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}
// 첫 번째 파라미터는 이벤트 종류, 두번 째 파라미터는 function
h1.addEventListener("click", handleTitleClick); // handleTitleClick()가 아닌 괄호를 뺀 이유는
// JS가 이벤트 리스너를 실행시키기 위함.
// title.onClick = handTitleClick; 의 방법도 위와 같은 방법과 동일하게 작동된다.

h1.addEventListener("mouseenter", handleMouseEnter); // 마우스 올림 이벤트
// title.onmouseenter = handleMouseEnter;

h1.addEventListener("mouseleave", handleMouseLeave); // 마우스 올림 X 이벤트
// title.onmouseleave = handleMouseLeave
/*
addEventListener를 선호하는 이유는 나중에 removeEventListener를 통해 이벤트 리스너 제거 가능
*/

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD!");
}

//window도 기본적으로 제공된다.
window.addEventListener("resize", handleWindowResize); // resize 이벤트
window.addEventListener("copy",handleWindowCopy); // copy 감지 이벤트
window.addEventListener("offline", handleWindowOffline); // WIFI 감지 이벤트 / 오프라인일 시
window.addEventListener("online", handleWindowOnline); // WIFI 감지 이벤트 / 온라인일 시