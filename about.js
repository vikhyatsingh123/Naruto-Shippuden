function darkmode() {
    // console.log("hello");
    var element1 = document.querySelector(".loader");
    var element2=document.querySelector("body")
    if(element1.classList.contains("lightmode"))
    {element1.classList.add("dark-mode");element1.classList.remove("lightmode");
    element2.classList.add("dark-mode");element2.classList.remove("lightmode");
    document.querySelector("#toggler").innerHTML="LightMode" 
   }
    else
    {
        element1.classList.add("lightmode");element1.classList.remove("dark-mode");
        element2.classList.add("lightmode");element2.classList.remove("dark-mode");
        document.querySelector("#toggler").innerHTML="DarkMode"; 
    }
}
let p=false;
function darkmode1() {
    var e1= document.querySelector("body");
    if(p==false){
        e1.classList.add("dark-mode");
        e1.classList.remove("lightmode");
        document.querySelector("#toggler").innerHTML="LightMode" 
        p=true;
    }
    else{
        e1.classList.add("lightmode");
        e1.classList.remove("dark-mode");
        document.querySelector("#toggler").innerHTML="DarkMode"; 
        p=false;
    }
}