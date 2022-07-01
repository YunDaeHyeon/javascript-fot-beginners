const hellos = document.getElementsByClassName("hello");
// getElementsByClassName은 클래스의 이름이 파라미터인 것을 불러옴.
// 클래스 혹은 아이디의 값이 중복된 태그를 동시 호출할 경우
// 배열형태로 불러온다.

const title = document.getElementsByTagName("h1");
// getElementsByTagName는 파라미터와 같은 태그의 이름이 있는 객체를 가져옴.

const titles = document.querySelector(".hello h1");
// const titles = document.querySelectorAll(".hello h1");
// querySelector는 요소(element)를 CSS 방식으로 검색할 수 있음.
// 일치하는 요소가 여러개일 경우 무조건 일치하는 첫 번째 값 리턴
// 일치하지 않으면 null 리턴
// 여러개 값들을 모두 가져오고 싶다면 querySelectorAll을 사용.
// ".hello h1" -> 클래스 hello 안에 있는 h1 요소를 가져와라.
// 예를 들어 querySelector("#hello")와 getElementById("hello")는 같다.

console.log(hellos);
console.log(title);
console.log(titles);

titles.innerText = "바보";
