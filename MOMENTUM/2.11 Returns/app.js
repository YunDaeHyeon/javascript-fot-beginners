const calculator = {
    plus : function(a, b){
        return a + b;
    },
    minus : function(a, b){
        return a - b;
    },
    times : function(a, b){
        return a * b;
    },
    divide : function(a, b){
        return a / b;
    },
    power : function(a, b){
        return a ** b;
    },
};

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult,10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult,plusResult);
const poserResult = calculator.power(divideResult,minusResult);

// function 내부의 return 키워드는 다른 프로그래밍 언어와 같은 역할을 수행한다.
// 즉 매개변수 반환의 역할 
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);