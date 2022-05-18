document.getElementById("btn").onclick = function(){
    document.getElementById("mymodal").style.display = "block";
}
document.getElementById("close").onclick = function(){
    document.getElementById("mymodal").style.display = "none";
}

window.onclick = function(e){
    let modal = document.getElementById("mymodal");
    
    // console.log(e.target);

    if(modal == e.target){
        modal.style.display = "none";
    }
}