// function -> 반복해서 사용할 수 있는 코드 조각
// Java에서는 메소드 역할
// argument는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법을 말함.
// Parameter 혹은 매개변수를 칭한다.

function sayHello(nameOfPerson, age){
    console.log("Hello my name is "+nameOfPerson+" and I'm "+age+"years.");
}

sayHello("Daehyeon",10);
sayHello("dal",23);
sayHello("lynn",21);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

function divide(a, b){
    console.log(a/b);
}

plus(8, 60);
divide(98, 20);

// function의 Objects(객체)화
const player = {
    name : "daehyeon",
    sayHello : function(otherPersonsName){
        console.log("hello "+ otherPersonsName + " nice to meet you");
    },
}

console.log(player.name);
player.sayHello("daehyeon");
