import React from 'react'
import { BsMusicNoteList } from 'react-icons/bs';
import { IoMdVolumeHigh,IoMdVolumeOff } from 'react-icons/io'
function TrackBox() {
  return (
    <div className='track-box'>
      <div className='top'>
        <img src="music.jpeg" alt="" />
        <span>
            <h3>Track Title</h3>
            <p>Artist</p>
        </span>
      </div>
      <div className='bottom'>
        <i><IoMdVolumeHigh/></i>
        <input type="range" name="" id="" />
        <i><BsMusicNoteList/></i>
        
      </div>
    </div>
  )
}

export { TrackBox}
