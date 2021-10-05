const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
// icon.onclick = function(){
//     search.classList.toggle('activated')
// }


icon.addEventListener('click',()=>{
    search.classList.toggle('activated');
})


const search_box = document.querySelector('#mysearch');

search_box.addEventListener('keyup',()=>{
    
   const filter = search_box.value.toUpperCase(); 
    
   console.log(String(filter));
    let container =  document.getElementById('cont');
    let cont = container.getElementsByClassName('card mb-3 card-bg my-4')
   
     for(let i=0;i<cont.length;i++)
     {
        const h = cont[i].getElementsByTagName('h2')[0];

        const textValue = h.textContent
        console.log(textValue)

        if(textValue.toUpperCase().indexOf(filter) > -1)
        {
            cont[i].style.display = ''
        }
        else{
            cont[i].style.display = 'none';
        }
     }
   
   

})
