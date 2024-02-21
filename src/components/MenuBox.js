import React,{ useEffect } from 'react'

function MenuBox({title,object}) {
  useEffect(()=>{
    const activeItem=document.querySelectorAll('.menu-box ul li');
    function changeActive(){
        activeItem.forEach(element => (
            element.classList.remove("active")
        ));
        this.classList.add('active');
    }
    activeItem.forEach((element) => element.addEventListener("click",changeActive));
  },[]);
  return (
    <div className='menu-box'>
      <p className='title'>{title}</p>
      <ul>
        {
            object.map((e)=>(
                <li key={e.id}>
                    <a href="#">
                        <i>{e.icon}</i>
                        <span>{e.name}</span>
                    </a>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export  {MenuBox};
