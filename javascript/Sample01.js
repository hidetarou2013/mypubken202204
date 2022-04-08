// コメント
console.log('This is Sample01 Javascript');

// ユーザがテキストフィールド内で何か入力し、ENTERしたタイミングで値を取り出す
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

// localStorageから取得
const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
    todos.forEach(todo => {
        add(todo);
    });
}

// form内でENTER押されたら
form.addEventListener("submit",function (event){
    console.log(input.value);
    // defaultのイベントを無効にする。⇒reloadを停止
    event.preventDefault();
    // 条件：文字入力があった場合にリストに追加する⇒型変換されるので簡略に記載できる
    if(input.value){
        add();
    }


});

// Listに追加
function add(todo){
    let todoText = input.value;
    if(todo){
        todoText = todo;
    }
    const li = document.createElement("li")
    li.innerText = todoText;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
    saveData();
}

// localStorageに保存
function saveData(){
    const lists = document.querySelectorAll("li.list-group-item");
    let todos = [];
    console.log(lists);
    //localStorage.add();
    lists.forEach(value => {
        todos.push(value.innerText)
    });
    console.log(todos);
    console.log(JSON.stringify(todos));
    localStorage.setItem("todos", JSON.stringify(todos));
}

// localStorageから取り出す
function aaa(){

}