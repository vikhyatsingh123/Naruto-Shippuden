let input=document.querySelector(".sm-input");
let get=document.querySelector(".sm-get");

get.addEventListener("click",function(event){
    let value=input.value;
    location.href=`#${value}`;

});