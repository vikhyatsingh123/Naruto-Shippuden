let buttonText = document.getElementById("darkmode-button");
let theme=localStorage.getItem('theme');
//    let theme=localStorage.getItem('theme');
let para=document.getElementById('para');
let h1=document.querySelector('h1');
console.log(para.innerText);

var bodyelem=document.body;

function darkmode(){
localStorage.setItem('theme','darkmode');
let val=localStorage.getItem('theme');
// bodyelem=document.body;
bodyelem.classList.add(val);
para.style.color="white";
h1.style.color="white";
}

function lightmode(){
//let bodyelem=document.body;
localStorage.setItem('theme','');
let val=localStorage.getItem('theme');
bodyelem.classList.value=val;
para.style.color="black";
h1.style.color="black";
// localStorage.setItem('theme','');
}
if(theme=='darkmode')
{
darkmode();
}
buttonText.addEventListener('click',()=>{
theme=localStorage.getItem('theme');
console.log(theme);
if(theme==='darkmode')
{
      lightmode();    
}
else
{
    darkmode();
}
})


