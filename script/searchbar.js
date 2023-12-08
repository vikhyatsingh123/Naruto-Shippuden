const icon = document.querySelector('.icon');
const search = document.querySelector('.search');


icon.addEventListener('click',()=>{
    search.classList.toggle('activated');
})


const search_box = document.querySelector('#mysearch');

search_box.addEventListener('input',()=>{

    window.scrollTo(0, 1383.33);
    
   const filter = search_box.value.toUpperCase(); 
    
   
    let container =  document.getElementById('cont');
    let cont = container.getElementsByClassName('card')
   
     for(let i=0;i<cont.length;i++)
     {
        const h = cont[i].getElementsByTagName('h2')[0];

        const textValue = h.textContent.toUpperCase()
      

        if(textValue.includes(filter))
        {
            cont[i].style.display = 'block'
        }
        else{
            cont[i].style.display = 'none';
        }
     }
   
   

})
