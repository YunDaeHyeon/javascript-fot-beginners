const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // To do 입력 칸 값 가져오기
    toDoInput.value = ""; // 사용자가 todo 입력칸에 엔터를 칠 때마다 칸 비우기
}

toDoForm.addEventListener("submit", handleToDoSubmit);