const player = {
    name : "nico",
    points : 10,
    fat : true
};

console.log(player);
console.log(player.name);
// console.log(player["name"]); 이것은 위 player.name과 같은 결과다.
player.fat = false; // const 변수 자체를 변경하고자 하는 것이 아닌 '수정'이기에 오류 X
console.log(player);

player.lastName = "potato"; // 오브젝트에는 언제든지 프로퍼티를 추가할 수 있다.
player.points = player.points + 15;
console.log(player);

// Objects 안에서는 대입 연산자 = 등호가 아닌 :을 사용한다.