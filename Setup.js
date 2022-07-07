let world = [];
for (let i = 0; i < 64; i++){

//create row
world[i] = [];

//create columns
for (let j = 0; j < 64; j++){

world[i][j] = 0;

}
}

let buttons = "";
for (i = 0; i < 64; i++){
buttons = buttons + '<button type="button" class="white"></button>\n'
}

function addButtons(){
const div = document.createElement("div");
div.innerHTML = buttons;
document.getElementById("div").appendChild(div);
}
