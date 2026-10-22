

setTimeout(()=>{
    (()=>{
        let sound=document.getElementsByTagName('audio')[0];
        sound.play()
        console.log(sound);
    })()
    
},1000)