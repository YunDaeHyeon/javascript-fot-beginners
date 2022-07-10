const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOITEM_KEY = "todo-item"; // 로컬 스토리지에 들어가는 KEY 이름 지정

let todoItems = []; // 사용자가 입력한 todoList 아이템

/*
    JSON.stringify() -> JS Object 혹은 Array를 문자열로 변환 (Object -> String)
    JSON.parse() -> 문자열을 JS가 이해할 수 있는 Array로 변환 (String -> Array)
*/

// To Do List에 사용자가 입력한 Item을 저장하는 함수
function saveTodoItems(){
    // String의 형태로 저장하기 위해 stringify 사용
    localStorage.setItem(TODOITEM_KEY, JSON.stringify(todoItems));
}

// To Do List의 Item을 삭제하는 함수
function deleteTodo(event){
    const deleteTodoItem = event.target.parentElement; 
    deleteTodoItem.remove();
}

// To Do List를 그리는 함수
function paintToDo(newTodo){
    const todoItem = document.createElement("li");
    const span = document.createElement("span");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteTodo);
    
    todoItem.appendChild(span);
    todoItem.appendChild(deleteButton);
    span.innerText = newTodo;

    toDoList.appendChild(todoItem);
}

// To Do List에 아이템 추가 버튼 핸들링
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    todoItems.push(newTodo);
    paintToDo(newTodo);
    saveTodoItems();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodoItems = localStorage.getItem(TODOITEM_KEY); // TODO 아이템 가져오기

if(savedTodoItems !== null){ // 만약, 로컬스토리지에 아이템이 존재한다면
    const parsedTodoItem = JSON.parse(savedTodoItems); //불러온 saveTodoItems(String)을 Array으로 변경
    // JS는 Array에 있는 각각의 item에 대해 function을 실행할 수 있도록 도와준다.
    // forEach -> 배열에 있는 각각의 item에 대해 function 실행
    todoItems = parsedTodoItem; // 페이지가 새로 시작되었을 때 기존 LS에 데이터가 있으면 복원
    parsedTodoItem.forEach(element => {
        paintToDo(element);
    });
}
/*
    TodoList 입력의 만들고자 하는 HTML 구조
    <ul>
        <li>
            <span>입력한 todo 1</span>
            <span>삭제 버튼 ..</span>
        </li>
    </ul>

    JS의 truthy/falsy 조건 문법
    if(saveTodoItems)이면 0과 false만 거짓으로 판단하는게 아니라
    null, NaN, undefined까지 거짓으로 판단한다.
    즉, 변수안에 값이 있기만 하면 대강 참인것으로(truthy) 판단

        parsedTodoItem.forEach(element => {
        console.log("this is the turn of "+element);
        });
        이것과
        function sayHello(item){
            console.log("this is the turn of "+item);
        }
        parsedTodoItem.forEach(sayHello)
        이것은 같은 역할을 수행한다.
    JS는 지금 실행되고있는 아이템의 정보 또한 이벤트 리스너와 같이 제공한다.

    ! Array의 각각 요소(아이템, index)별 function을 넣기 위해서는
    ! Arrow function 혹은 function 선언식을 사용해야한다.
*/