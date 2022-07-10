const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOITEM_KEY = "todo-item"; // 로컬 스토리지에 들어가는 KEY 이름 지정

let todoItems = []; // 사용자가 입력한 todoList 아이템

/*
    LocalStorage에 들어갈 todoItems의 형태를 다음과 같이 만든다.
    todoItems = [
        {
            id:12132123(난수),
            text:"사용자가 입력한 to do 내용"
        },
        {
            ...
        }
    ]
    즉, 사용자가 입력한 todo 아이템 각각에게 id를 부여하는 방법을 사용한다.
    삭제버튼(X) 클릭 시 localStorage에서 지우기 위해 사용한다.
    이는, 사용자가 입력할 때 문자열이 아닌 애초에 Object로 받아 효율성을 상승시킨다.

    사용자가 입력한 todo 아이템 각각에게 무작위 id를 부여하기 위해 Date.now()를 사용한다.
    Date.now() => 현재 시간을 ms 단위로 변환하여 제공하는 함수로, 이를 사용하여 to do 아이템 개별 id를 부여한다.
    (이건 좀 놀랐다. 이런 방법이 있구나 세상에..)
*/

// To Do List에 사용자가 입력한 Item을 저장하는 함수
function saveTodoItems(){
    // String의 형태로 저장하기 위해 stringify 사용
    localStorage.setItem(TODOITEM_KEY, JSON.stringify(todoItems));
}

// To Do List의 Item을 삭제하는 함수
function deleteTodo(event){
    const deleteTodoItem = event.target.parentElement; // 버튼을 클릭한 대상(event.target)의 부모(parentelement -> li태그)를 deleteTodoItem에 저장
    // console.log(deleteTodoItem.id); // 버튼을 클릭한 대상의 부모 li가 deleTodoItem이므로 .id를 통해 li 태그 id를 불러올 수 있음.
    todoItems = todoItems.filter((wantDeleteItem) => wantDeleteItem.id !== parseInt(deleteTodoItem.id));
    // * parentElement로 가져온 요소는 기본적으로 String이기 때문에 parseInt로 number형으로 캐스팅한다.
    // 위 코드는 filter를 사용했으며 지우고자 하는 아이템의 id가 클릭한 버튼(li)의 id와 일치(false)하면
    // 해당 id 오브젝트만 제외시켜 todoItems에 대입한다.
    saveTodoItems(); // todoItems를 지웠으므로 saveTodoItems를 호출시켜 기존 LocalStorage를 갱신한다.
    deleteTodoItem.remove();
}

// To Do List를 그리는 함수
function paintToDo(newTodoObject){
    const todoItem = document.createElement("li");
    todoItem.id = newTodoObject.id; // 각각의 to do item을 가지고 있는 li 태그에 Date.now()로 생성한 아이디 지정
    const span = document.createElement("span");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteTodo);
    
    todoItem.appendChild(span);
    todoItem.appendChild(deleteButton);
    span.innerText = newTodoObject.text;

    toDoList.appendChild(todoItem);
}

// To Do List에 아이템 추가 버튼 핸들링
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // to do item 아이디 부여를 위한 Object 생성
    const newTodoObject = {
        text:newTodo,
        id:Date.now(),
    };
    todoItems.push(newTodoObject); // 사용자가 입력한 텍스트를 todoItems에 푸쉬
    paintToDo(newTodoObject); // 사용자가 입력한 오브젝트를 그릴 수 있게 paintToDo에 전달
    saveTodoItems();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodoItems = localStorage.getItem(TODOITEM_KEY); // TODO 아이템 가져오기

if(savedTodoItems !== null){ 
    const parsedTodoItem = JSON.parse(savedTodoItems);
    todoItems = parsedTodoItem;
    parsedTodoItem.forEach(element => {
        paintToDo(element);
    });
}

function filters(){
    return true
}
[1, 2, 3, 4, 5].filter(filters);
/*
    filter 함수 -> Array 에서 특정 요소를 지우는 것이 아닌, 지우고자 하는 요소만 빼고 새로운 Array를 만든다. (중요) *지우는 것이 아닌 제외!
    ex) todoItems.filter(function) => forEach와 똑같은 구조로, Array의 각 요소 별 function을 호츌한다.
    * filter로 전달한 function은 반드시 true를 반환해야한다.
    [1, 2, 3, 4].filter(function)일 때
    function(1)에서 요소 1을 유지하고자 하면 true를 반환, 요소 1을 제외하고자 하면 false를 반환하는 원리이다.
    ex)
    function filters(item){
        return item ! == 3; // 3이 아닌 모든 item은 true 반환
    }
    [1, 2, 3, 4, ,5].filter(filters);
    => (4) [1, 2, 4, 5]
*/
