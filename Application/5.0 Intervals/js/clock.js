const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5000);

/*
    interval -> 매번 발생하다
    setInterval("실행하고자 하는 함수", "ms 단위의 시간") -> 설정한 시간만큼 설정한 함수 시작
*/
