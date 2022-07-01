document.getElementById("title");
// document 오브젝트에서 id 라는 태그를 가지고 있는 요소를 가져와라.
/* console.log()
  : 웹 콘솔에 메시지를 출력한다.
  메시지는 (선택적 대체값을 포함한) 단일 문자열이거나 더 많은 JS 객체 중 하나일 수 있다.
  log()는 Element를 HTML 트리구조로 출력.
  dir()은 요소를 JSON과 같은 트리구조로 출력.
*/ 
console.log(document.getElementById("title"));

// #은 id, .은 class

const title = document.getElementById("title");
title.innerText = "My name is DaeHyeon!"; // innerText 키워드는 태그의 내용을 변경한다.

console.log(title.id); // 해당 태그의 id 확인
console.log(title.className); // 해당 태그의 className 확인