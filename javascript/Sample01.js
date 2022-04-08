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
    
    if(input.value.length > 0){
        add();
    }


});

// Listに追加
function add(){
    const li = document.createElement("li")
    li.innerText = input.value;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
}