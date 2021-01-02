let input = document.getElementById("input");
let text = input.value;
//action BUTTONS SET UP
let aButton = document.getElementById("transformLower");
aButton.addEventListener("click", transformToLowerCase);

let bButton = document.getElementById("transformUpper");
bButton.addEventListener("click", transformToUpperCase);

let cButton = document.getElementById("transformSentence");
cButton.addEventListener("click", transformSentance);

let dButton = document.getElementById("transformWords");
dButton.addEventListener("click", transformEachWord);

//command BUTTONS SET UP
let button01 = document.getElementById("clear");
button01.addEventListener("click", clearText);

let button02 = document.getElementById("paste");
button02.addEventListener("click", pasteText);

let button03 = document.getElementById("copy");
button03.addEventListener("click", copyText);

//---
input.addEventListener("keydown", inputUpdate);


//transforms text to lower case
function transformToLowerCase() {
    text = input.value;
    let newText = text.toLowerCase();
    input.value = "";
    input.value = newText;
    inputUpdate();
}
// transfrom to upper case function
function transformToUpperCase() {
    text = input.value;
    let newText = text.toUpperCase();
    input.value = "";
    input.value = newText;
    inputUpdate();
}
// transform Capitalize sentence function
function transformSentance() {
    text = input.value;
    let lowertext = text.toLowerCase();
    let newText = lowertext.charAt(0).toUpperCase() + lowertext.substring(1);
    input.value = "";
    input.value = newText;
    inputUpdate();
}
// transform Capitalize every word function
function transformEachWord() {
    text = input.value;
    let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    input.value = "";
    input.value = newText;
    inputUpdate();
}

// clear textarea
function clearText() {
    input.value = "";
    inputUpdate();
}
// copy text from clipboard to textarea
function pasteText(){
    input.focus();
    document.execCommand('paste');
    inputUpdate();
}
// paste text to clipboard to textarea
function copyText(){
    text = input.value;
    navigator.clipboard.writeText(text);
    input.style.backgroundColor='rgb(157, 230, 134)';
}

function inputUpdate() {
    input.style.backgroundColor='ivory';
}