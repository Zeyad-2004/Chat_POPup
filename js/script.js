let chat = document.getElementById('chatForm');

let value = 0;
function chatDisplay(){
    value++;
    chat.style.display = ((value%2)? "block" : "none");
    
}