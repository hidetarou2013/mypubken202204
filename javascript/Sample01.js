// コメント
console.log('This is Sample01 Javascript');

// ユーザがテキストフィールド内で何か入力し、ENTERしたタイミングで値を取り出す
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

// localStorageから取得:画面リロード時の処理を前半に挿入
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
        todoText = todo.text;
    }
    const li = document.createElement("li")
    li.innerText = todoText;
    li.classList.add("list-group-item");

    if(todo && todo.completed){
        li.classList.add("text-decoration-line-through");
    }

    // 右クリックでItem削除機能追加
    li.addEventListener("contextmenu", function (event) {
        // defaultのイベントを無効にする。
        event.preventDefault();
        li.remove();
        // Listから削除したので保存先も連動させておく
        saveData();
    });

    // 左クリックでItem取り消し線：Task完了フラグの代わり
    li.addEventListener("click", function () {
        // classの切り替え：打ち消し線classが設定されていなければ追加、設定されてれば除外⇒toggle
        li.classList.toggle("text-decoration-line-through");
        saveData();
    });

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
        let todo = {
            text: value.innerText,
            completed: value.classList.contains("text-decoration-line-through")
        };
        todos.push(todo)
    });
    console.log(todos);
    console.log(JSON.stringify(todos));
    localStorage.setItem("todos", JSON.stringify(todos));
}

// localStorageから取り出す
function aaa(){

}