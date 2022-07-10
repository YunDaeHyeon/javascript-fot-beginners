const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); // 현재 시간 가져오기
    const hours = String(date.getHours()).padStart(2,"0"); // 시, 분, 초는 기본적으로 number이기에 String으로 캐스팅
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); 

/*
    padStart(maxLength,"추가하고자 하는 문자");
    ex) "1".padStart(2,"0"); // 1이라는 문자열의 길이를 2로 설정한 뒤 공백만큼 앞쪽에 0을 추가.
    => "01";
    ex) "12".padStart(2,"0");
    => "12";
    ex) "12".padStart(3,"0");
    => "012";

    padEnd(maxLength,"추가하고자 하는 문자"); // 이는 Start와 달리 문자열 끝에 추가
    ex) "1".padEnd(2, "0");
    => "10";
    ex) "hello".padStart(20, "x");
    => "xxxxxxxxxxxxxxhello";
*/