//const age = prompt("How old are you?");
const age = parseInt(prompt("How old are you?"));
console.log(age);
console.log(typeof age);
console.log(typeof "15", typeof parseInt("15"));
//prompt() -> 팝업창을 사용자에게 출력시킴
// typeof 키워드 -> 변수의 자료형 확인
// parseInt() -> 정수로 캐스팅
// NaN -> Not a Number 
// isNaN() -> 입력된 파라미터가 NaN인지 판별하며 반환값은 boolean이다.
//         -> 파라미터가 NaN이라면 true, 아니면 false 반환

console.log(isNaN(age));

// condition (조건문)

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if(age <18){
    console.log("You are too young.");
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else if(age > 50 && age <= 80){
    console.log("You should exercise");
} else if(age > 80){
    console.log("You can do whatever you want.");
}