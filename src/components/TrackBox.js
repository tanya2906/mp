import React, { useRef } from 'react'
import { BsMusicNoteList } from 'react-icons/bs';
import { IoMdVolumeHigh,IoMdVolumeOff } from 'react-icons/io'
function TrackBox({setVolume,artist}) {
  const Volume=useRef();
  const animation=useRef();
  const changeVolume=()=>{
    console.log(Volume.current.value/100);
    setVolume(Volume.current.value/100);
    Volume.current.style.setProperty('--volume-range',`${Volume.current.value}%`)
    animation.current=requestAnimationFrame(changeVolume);
  }
  return (
    <div className='track-box'>
      <div className='top'>
        <img src="music.jpeg" alt="" />
        <span>
            <h3>{artist}</h3>
            <p>Artist</p>
        </span>
      </div>
      <div className='bottom'>
        <i><IoMdVolumeHigh/></i>
        <input type="range" name="" id="" ref={Volume} onChange={changeVolume}/>
        <i><BsMusicNoteList/></i>
        
      </div>
    </div>
  )
}

export { TrackBox}
