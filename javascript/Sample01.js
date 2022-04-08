// コメント
console.log('This is Sample01 Javascript');

// ユーザがテキストフィールド内で何か入力し、ENTERしたタイミングで値を取り出す
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

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
function add(){
    let todoText = input.value;
    const li = document.createElement("li")
    li.innerText = todoText;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
}