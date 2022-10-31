import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App(){
  const hitory=useNavigate();
  const [input,setInput]=useState({
    imgurL:"",
    title:"",
    date: "",
    content:""
  });
  let name,value;
  const bloginput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setInput({...input,[name]:value})
  }

  const submitdata=async(e)=>{
    e.preventDefault();
    const res=await fetch("/creatblog",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        imgurL:input.imgurL,
        title:input.title,
        date:input.date,
        content:input.content
      })

    })
    const Data= await res.json();
    if(!Data){
      console.log(Data)
    }else{
      window.alert("Blog Add Successfully")
      hitory("/")
    }
  }

  return(
    <>
      <div className='creatblog'>
        <h1>Create Your Blog</h1>
        <form method='POST' onSubmit={submitdata}>
          <input type="text" className='input' name="imgurL" value={input.imgurL} onChange={bloginput} placeholder="Image Url..." required></input>
          <input type="text" name="title" className='input' value={input.title} onChange={bloginput} placeholder="Title..." required></input>
          <input type="date" name='date' className='input' value={input.date} onChange={bloginput} required></input>
          <textarea type="text" name="content" value={input.content} onChange={bloginput} placeholder="Content..." required ></textarea>
          <button>submit</button>
          
        </form>
      </div>
    
      
    </>
  )
}

export default App;
