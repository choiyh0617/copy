const menu =document.querySelector("#in");
menu.onclick = View;
let count = 0;
function View(){
    if (count == 0){
        document.querySelector("#views").style.display = "block";
        count = 1;
    }
    else{
        document.querySelector("#views").style.display = "none";
        count = 0;
    }
}

// menu.addEventListener("mouseover", ()=>{
//     document.querySelector("#views").style.display = "block";
// });

// menu.addEventListener("mouseout", ()=>{
//     document.querySelector("#views").style.display = "none";
// });