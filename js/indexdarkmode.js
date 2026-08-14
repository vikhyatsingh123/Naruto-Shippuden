    let buttonText = document.getElementById("switch");
    let theme=localStorage.getItem('theme');
var bodyelem=document.body;
function darkmode(){
    localStorage.setItem('theme','darkmode');
    let val=localStorage.getItem('theme');

    bodyelem.classList.add(val);    
}
function lightmode(){
    //let bodyelem=document.body;
    localStorage.setItem('theme','');
    let val=localStorage.getItem('theme');
    bodyelem.classList.value=val;
   // localStorage.setItem('theme','');
}
if(theme=='darkmode')
{
    darkmode();
    buttonText.checked = true;
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
