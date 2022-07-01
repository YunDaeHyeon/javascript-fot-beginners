// HTML은 CSS와 JS를 불러옴.
// JS를 사용하는 HTML과 상호작용을 위함.
// HTML의 요소들을 JS를 통해 변경할 수 있음.

/* document는 브라우저에서 정의되어있는 객체.
 이는 정말 중요한 개념으로써 JS에서 HTML에 정의되어있는 객체들을 JS 관점으로
 불러올 수 있음
*/
console.dir(document);
console.log(document.title);

// 만약, JS에서 document를 호출해 HTML 타이틀을 바꾼다면?
console.log(document.title);
document.title = "Test";
console.log(document.title);

// HTML에 body 불러오기
document.body;