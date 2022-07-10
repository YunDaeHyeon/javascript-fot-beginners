// 사용자의 위치(Geolocation) 파악

/*
    navigator.geolocation.getCurrentPosition()
    => JS에서 기본적으로 제공하는 함수
    => 브라우저에서 위치 좌표를 제공
    => WiFi, 위치, GPS등을 제공한다.(getCurrentPosition)

    getCurrentPosition()의 매개변수는 2개이다.
    첫 번째 매개변수 : 성공했을 때 실행될 함수(function)
    두 번째 매개변수 : 실패했을 때 실행될 함수(function)
*/
const API_KEY = "a410a8d973965b479d6bb20dfd24c73b";

// 성공
function onGeoLocationSuccess(position){
    //*getCurrentPosition는 Object를 매개변수로 받아오고 성공 시 그에 따른 정보를 반환한다.)
    // 사용자의 위치를 받아오는데 성공하면
    const lat = position.coords.latitude; // 위도
    const log = position.coords.longitude; // 경도
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(API_URL)
    .then(response => response.json())
    .then(data =>{
        const cityContainer = document.querySelector("#weather span:first-child"); // weather id를 가진 div 태그의 첫 번째 자식 span 가져오기
        const weatherContainer = document.querySelector("#weather span:last-child"); // weather id를 가진 div 태그의 마지막 자식 span 가져오기
        
        cityContainer.innerText = `위치 : ${data.name}`; // span 태그에 json으로 가져온 도시 이름 삽입
        weatherContainer.innerText = `날씨 : ${data.weather[0].main}, 온도 : ${data.main.temp}`; // span 태그에 json으로 가져온 날씨 정보 삽입


    });
    // 해당 URL에 요청을 보내고 요청이 끝나면 response 객체로 json Object를 가져오고
    // 그 요청이 끝나면 json 오브젝트가 저장된 data의 데이터를 가져와라.
    // then이 붙으면 그 코드는 '해당 요청이 끝나면 이것좀 해줘'라는 의미이다.
}   


// 실패
function onGeoLocationFail(){
    // 사용자의 위치 정보를 받아오는데 실패하면
    alert("Can't find you. No weather for you.");

}

navigator.geolocation.getCurrentPosition(onGeoLocationSuccess, onGeoLocationFail);

// 위도와 경도를 장소로 나타나게 해줄 API의 필요성
// openweathermap.org의 API key 가져오기
/*
    Current & Forecast weather data collection API
    openweathermap.org 로그인 -> API -> Current & Forecast weather data collection API의
    Current Weather Data의 API doc(문서) 클릭 ->
    By geographic coordinates를 통해 API Key와 위도 경로를 쿼리스트링으로
    API서버에 요청시킬 수 있는 방법이 기록되어있다.
    해당 URL => https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    API Key는 해당 API 제공 사이트 profile에 존재한다.
    
    해당 API의 성공 반환값은 JSON으로
    사용자의 위치(coord), 날씨 정보(weather), 위도 경도와 일치하는 지역 이름(name), 국가 이름(sys/country) 등등..

    API URL로 요청을 보내 응답을 받아오기 위하여 request, jQuery와 같은 라이브러리가 아닌
    브라우저에 내장된 fetch() 함수를 사용한다.
    fetch는 대표적 비동기 요청방식 중 하나인 Ajax의 방식 중 하나이다.
    fecth()는 첫 번째 인자로 URL, 두 번째 인자로 옵션 객체를 받는다.
    Promise 타입의 객체를 반환한다.(당장 무언가 일어나지 않고 시간이 좀 걸린 뒤 실행)
    API 호출에 성공하면 응답(response) 객체를 반환한다.
    API 호출에 실패하면 예외(Error) 객체를 반환한다.

    즉, 정리를 해본다면 then은 API를 이용하여 백엔드 서버로부터 받아온 정보를 사용할 때 .then()함수를 이용하고
    fetch를 다시 정리해본다면, API를 사용하여 백엔드 서버와 비동기 요청을 하는 방식 중 하나!
    비동기 방식으로 요청하기 때문에 API호출하는 과정이 끝나지 않더라도 다음 코드로 넘어가는 방식!
    이 과정에서 필요한 정보를 사용할땐 .then() 사용!

    fetch(url, options)
        .then((response) => console.log("response:", response))
        .catch((error) => console.log("error:", error));

    기본적으로 불러와지는 온도(temp)는 화씨이다.
    이를 섭씨로 바꾸기 위해 API 문서에 있는 매개변수를 사용한다.
    URL에 units=metric을 추가.
    ex) https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric
*/
