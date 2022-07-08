const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); // 현재 시간 가져오기
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// 사이트가 로딩되자마자 getClock()을 호출시킨 뒤 setInterval 호출 (사이트 실행 시 1초의 딜레이 발생을 방지)
getClock();
setInterval(getClock, 1000); // 1초마다 getClock 함수 호출 -> 매 초 Date() 오브젝트 호출

/*
    setTimeout("원하는 함수", "기다리고자 하는 ms 단위")
    setTimeout은 setInterval과 반대의 동작을 수행한다.
    setTimeout은 설정한 ms가 흐른 뒤 함수가 실행된다.

    Date는 JS에서 정의되어있는 Object이다.
    new Date() -> 현재 날짜를 가져온다. (날짜에 대한 객체 생성, 다양한 메서드 사용 가능)
    date() -> 날짜에 대한 단순 문자열 생성
*/