const quotes = [
    {
        quote : "우리는 나이가 들면서 변하는 게 아니다. 보다 자기 다뤄지는 것이다.",
        author : "린홀",
    },
    {
        quote : "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
        author : "하버트 개서",
    },
    {
        quote : "우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
        author : "윌리엄 제임스",
    },
    {
        quote : "너 자신이 돼라. 다른 사람은 이미 있으니까.",
        author : "오스카 와일드",
    },
    {
        quote : "세상에 공짜는 없다.",
        author : "미상",
    },
    {
        quote : "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
        author : "찰리 채플린",
    },
    {
        quote : "승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
        author : "J. 하버스",
    },
    {
        quote : "인생을 다시 산다면 다음 번에는 더 많은 실수를 저지르리라.",
        author : "나딘 스테어",
    },
    {
        quote : "최고에 도달하려면 최저에서 시작해라.",
        author : "P. 시루스",
    },
    {
        quote : "배움은 의무도, 생존도 아니다.",
        author : "애드워즈 데밍",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 배열의 길이를 범위로 지정한 난수 생성
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// 배열의 길이에서 -1을 하면 마지막 요소에 접근 가능하다. array.length-1 => 마지막 요소
/*
    Math
    Math 모듈은 JS에서 기본적으로 제공하는 Object이다.
    수학과 관련된 함수를 제공하며 주로 사용되는 함수는 random()이다.
    Math.random() => 0과 1사이의 무작위 숫자 제공
    ! Math.random()에 10을 곱하면 1과 10사이의 무작위 숫자 생성
    ! Math.ramdom() * 10 => 1~10 난수 생성
     * 하지만, 위와 같은 함수는 실수이기 때문에 Integer(number)로 변경해야함.
     * 이때, 반올림을 시키거나(round()), 한 숫자의 끝까지 올리는 방법을 사용한다. (ceil())
     * floor()은 ceil()과 반대로 한 숫자의 최저까지 내린다.
     * 이상적인 1부터 10까지의 난수를 얻기 위해서 floor()에 random()*10을 매개변수로 지정한다.
     ex) Math.floor(Math.random()*10);
*/