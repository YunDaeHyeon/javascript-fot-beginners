const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// JS에서 HTML에 요소 추가하기
const backgroundImage = document.createElement("img"); //createElement는 HTML에 요소를 생성하는 역할이다.

backgroundImage.src = `img/${chosenImage}`; //.src을 호출하여 랜덤 이미지 주소를 설정
//위 backgroundImage는 Js에만 존재하지 document에는 존재하지 않으므로
//body에 추가해야한다.
document.body.appendChild(backgroundImage);
//JS에서 생성한 document 요소를 appendChild를 통해 body(document)에 추가한다.