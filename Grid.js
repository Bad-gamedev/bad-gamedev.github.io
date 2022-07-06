let buttons = "";
for (let i = 0; i < 64; i++){
buttons = buttons + '<button type="button" class="white"></button>\n';
}
document.getElementByTagName("div").innerHTML = buttons;
