let buttonText = document.getElementById("togglemode-button");
let navbar = document.getElementById("toggle-navbar")
let theme = localStorage.getItem('theme');
var bodyelem = document.body;

function darkmode(){
    localStorage.setItem('theme','darkmode');
    let val = localStorage.getItem('theme');
    bodyelem.classList.add(val);    
    buttonText.innerHTML = "🔅";
}

function lightmode(){
    localStorage.setItem('theme','');
    let val = localStorage.getItem('theme');
    bodyelem.classList.value=val;
    buttonText.innerHTML = "🔆";
}

if(theme == 'darkmode'){
    darkmode();
}
else{
    lightmode();
}

buttonText.addEventListener('click',()=>{
    theme = localStorage.getItem('theme');
    console.log(theme);
    if(theme === 'darkmode'){
        lightmode();
    }
    else{
        darkmode();
    }
})