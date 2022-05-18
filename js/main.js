// document.getElementById("text").style.color = "red";

// document.getElementById("btn").onclick = function(){
//     document.getElementById("text").style.fontSize = "50px";
// }

// document.getElementById("btn").onclick = function(){
//     document.getElementById("result").innerHTML = document.getElementById("input").value;
// }

// document.getElementById("btn").onclick = function(){
//     document.getElementById("color").style = "background-color:blue; border-radius:50%; width:300px; height:300px;";
// }

document.getElementById("btn").onclick = function(){
    document.querySelector(".right").style.marginLeft = "-300px";
}

document.getElementById("back").onclick = function(){
    document.querySelector(".right").style.marginLeft = "0";
}