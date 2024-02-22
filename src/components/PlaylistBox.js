import React, { useEffect } from 'react'
import {FaPlus,FaTrash} from 'react-icons/fa';
import { BsMusicNoteList } from 'react-icons/bs';
import { PlaylistList } from './PlaylistList';
function PlaylistBox({setPlaylist,setArtist}) {
  
  useEffect(()=>{
    const activeItem=document.querySelectorAll('.playlist-list ul li');
    function changeActive(){
        activeItem.forEach(element => (
            element.classList.remove("Active")
        ));
        this.classList.add('Active');
        setPlaylist(this.innerText);
        setArtist(this.innerText);
    }
    activeItem.forEach((element) => element.addEventListener("click",changeActive));
  },[]);
  return (
    <div className='playlist-box'>
      <div className='playlist-container-name'>
        <p>Playlist</p>
        <i><FaPlus/></i>
      </div>
      <div className='playlist-list'>
        
        <ul>
          {
            PlaylistList.map((element)=>(
              <li key={element.id}>
                <i><BsMusicNoteList/></i>
                <p>{element.name.substring(0,19)}</p>
                <i><FaTrash/></i>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export  {PlaylistBox};
