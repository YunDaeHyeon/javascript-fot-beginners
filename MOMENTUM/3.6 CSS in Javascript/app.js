const h1 = document.querySelector("div.hello:first-child h1");
const h2 = document.querySelector("div.hello h2");

function handleFirstTitleClick(){
    if(h1.style.color === "blue"){
        h1.style.color = "tomato";
    }else{
        h1.style.color = "blue";
    }
}

// 위 코드를 더욱 깔끔하게!
// color의 현재 상태를 저장하는 방법 사용
function handleSecondTitleClick(){
    const currentColor = h2.style.color; // 현재 컬러 값 저장 / 상수
    let newColor; // 변수
    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h2.style.color = newColor; // 컬러 지정
}

h1.addEventListener("click", handleFirstTitleClick);
h2.addEventListener("click", handleSecondTitleClick);


/*
JS에서 == 는 Equal Operator이고, ===는 Strict Equal Operator이다.

 >> == 는 a == b 라고 할 때, a와 b의 값이 일치하는지 판별.
 >> === a === b 라고 할 때, 값과 값의 종류(Data Type)까지 모두 같은지 판별한다.
*/


// Connect to HTML, CSS, JS 방법 1
const h3 = document.querySelector("div.hello h3");

function handleThirdTitleClick(){
    // h3.className = "active"; // h3의 클래스 이름을 "active"로 바꿈으로써 css의 .active가 실행될 수 있도록 지정
    if(h3.className === "clicked"){ // 만약, h3의 클래스 이름이 active라면
        h3.className = ""; // 클래스 이름을 비운다.
    }else{ // 만약, active가 아니라면
        h3.className = "clicked"; // 클래스 이름을 active로 지정한다.
    }
}

h3.addEventListener("click", handleThirdTitleClick);

// Connect to HTML, CSS, JS 방법 2 - raw String의 에러 최소화 (단, 초기에 클래스가 존재한다면 에러)
// h1Value의 className 자체를 바꾸기 때문에 초기값(default) 값은 사라짐.
// ClassList는 class들의 목록으로 작업을 할 수 있게끔 허용한다.
const h1Value = document.querySelector("div.bye h1");

function studyFirstTitleClick(){
    const clickedClass = "clicked";
    if(h1Value.className === clickedClass){
        h1Value.className = "";
    }else{
        h1Value.className = clickedClass;
    }
}

h1Value.addEventListener("click", studyFirstTitleClick);

// Best 방법!
// Connect to HTML, CSS< JS 방법 3 - Class List 사용하기
const h2Value = document.querySelector("div.bye h2");

function studySecondTitleClick(){
    const clickedClass = "clicked";
    if(h2Value.classList.contains(clickedClass)){
         //classList의 contains 함수는 명시한 class가 HTML element에 포함되어 있는지 판별한다.
        h2Value.classList.remove(clickedClass); // h2Value의 element에 clickedClass가 포함되어 있다면 삭제
    }else{ // 포함되어있지 않다면
        h2Value.classList.add(clickedClass); // clickedClass 추가
    }
}

h2Value.addEventListener("click", studySecondTitleClick);

// 가장 효율적이며 편리하고, 좋은 방법
// Connect to HTML, CSS, JS 방법 4 - Toggle Function 사용하기
// 이 방법은 방법 3를 더욱 편리하게 사용할 수 있다.
const toggle = document.querySelector("div.toggle h1");

function toggleFirstTitleClick(){
    toggle.classList.toggle("clicked");
    // toggle은 매개변수가 요소에 있는지 없는지 판별하며,
    // 만약 매개변수가 HTML element에 존재한다면 요소를 삭제, 존재하지 않는다면 매개변수를 요소로 추가한다.
}

toggle.addEventListener("click", toggleFirstTitleClick);