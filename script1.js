const allRate = document.querySelectorAll(".rate");
let selected = document.querySelector(".selected");

for(let i=0;i < allRate.length; i++){
    allRate[i].rateValue = (i + 1);
    ["mouseover", "mouseout","click"].forEach(function(e){
        allRate[i].addEventListener(e, rateselected);
    })
}
function rateselected(e){
    let type = e.type;
    let rateValue = this.rateValue;
    if (type  === "click"){
        if ( rateValue > 1){
            selected.innerText = "You selected" + " "+ rateValue +" " + "out of 5";
        }
    }
    allRate.forEach (function(ele, ind){
        if (type === "click"){
            if(ind < rateValue){
                ele.classList.add("fix");
            }
            else{
                ele.classList.remove("fix");
            }
        }
        if(type==="mouseover"){
            if(ind<rateValue){
                ele.classList.add("over");
            }
            else{
                ele.classList.remove("over");
            }
        }
        if(type==="mouseout"){
            ele.classList.remove("over");
        }
    })
}
function myFunction(){
    alert("Thank You for the feedback");
}