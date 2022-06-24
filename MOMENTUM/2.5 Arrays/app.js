const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push("sun");
// 이때, daysOfWeek는 const로 선언된 상수인데 값을 추가할 수 있는 이유는
// const는 daysOfWeek = ["aa"] 처럼 변수 자체를 변경하는 것을 방지한다.
// 따라서 const로 선언된 배열의 값이 변경되는 것은 무관하다.



// const nonsense = [1, 2, "hello", false, null, true, undefined, "daehyeon"];

// console.log(daysOfWeek, nonsense);