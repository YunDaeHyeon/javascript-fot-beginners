const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const todoItems = []; // 사용자가 입력한 todoList 아이템

// To Do List에 사용자가 입력한 Item을 저장하는 함수
function saveTodoItems(){
    // JSON.stringify()는 JS Object나 array 또는 어떤 JS이든 모두 문자열로 바꾼다.
    localStorage.setItem("todo-item", JSON.stringify(todoItems));
}

// To Do List의 Item을 삭제하는 함수
function deleteTodo(event){
    // 버튼을 클릭 했을 때 클릭한 버튼의 정보를 가져올 수 있도록 매개변수(event) 지정
    // 버튼이 클릭된 요소의 위치를 알기 위해 event에서 target, parentElement 프로퍼티 접근
    // console.dir(event.target.parentElement);
    const deleteTodoItem = event.target.parentElement; 
    // ▲ 클릭한 버튼(event.target)의 부모(parentElement)를 가져와라.

    deleteTodoItem.remove();
}

// To Do List를 그리는 함수
function paintToDo(newTodo){
    // HTML ul에 li(List Item)을 추가하기 위해 document.createElement로 il 생성
    const todoItem = document.createElement("li"); // li 태그 생성
    const span = document.createElement("span"); // span 태그 생성

    const deleteButton = document.createElement("button"); // button 태그 생성
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteTodo); // 버튼 클릭 리스너 연결
    
    todoItem.appendChild(span); //todoItem(li)에 자식(span)을 넣는 과정
    todoItem.appendChild(deleteButton); //todoItem(li)에 자식(button)을 넣는 과정
    span.innerText = newTodo; // 사용자가 입력한 todo가 span 태그의 Text로 지정

    // 아이디 todo-List의 ul 태그에 li(todoItem)을 할당
    toDoList.appendChild(todoItem);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // To do 입력 칸 값 가져오기
    toDoInput.value = ""; // 사용자가 todo 입력칸에 엔터를 칠 때마다 칸 비우기
    todoItems.push(newTodo); // 사용자가 입력한 Todo를 todoItems(배열)에 저장
    paintToDo(newTodo); // 사용자가 엔터를 누를 시 paintToDo 함수에 newTodo 전달
    saveTodoItems(); // todo 저장 함수 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage는 문자열만 저장한다. (배열 X)

/*
    TodoList 입력의 만들고자 하는 HTML 구조
    <ul>
        <li>
            <span>입력한 todo 1</span>
            <span>삭제 버튼 ..</span>
        </li>
    </ul>
*/