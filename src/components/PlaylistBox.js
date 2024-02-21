import React from 'react'
import {FaPlus,FaTrash} from 'react-icons/fa';
import { BsMusicNoteList } from 'react-icons/bs';
import { PlaylistList } from './PlaylistList';
function PlaylistBox() {
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
