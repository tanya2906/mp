import React, { useEffect,useState } from 'react'
import '../components/MainBox.css';
import { BannerBox } from './BannerBox';
//import {FaEye,FaHeart,FaShareAlt,FaPlay,FaPause,FaForward,FaStepForward,FaBackward,FaStepBackward} from 'react-icons/fa';
import { AudioList } from './AudioList';
function MainBox({volume,playlist,pageName,searchvalue,artist,setArtist}) {
  const [flag,setflag]=useState(0);
  const [type,setType]=useState('all');
  useEffect(()=>
    {
      const active_item=document.querySelectorAll(".main-box .menu-list ul li");
      function change_active(){
        active_item.forEach(e=>(
          e.classList.remove("active")
        ));
        this.classList.add('active');
      }
      active_item.forEach((e)=>e.addEventListener('click',change_active));
    },
    []
  );
  const popular=()=>{
    setType('popular')
  }
  const all=()=>{
    setType('all')
  }
  const like=()=>{
    setType('like')
  }
  return (
    <div className='main-box'>
      <BannerBox pageName={pageName} artist={artist} setflag={setflag}/>
      <div className='menu-list'>
        <ul>
          <li><a href='#' onClick={popular}>Popular</a></li>
          {/*<li><a href='#'>Albums</a></li>*/}
          <li><a href='#' onClick={all}>Songs</a></li>
          <li><a href='#' onClick={like}>Like{/*Fans*/}</a></li>
          {/*<li><a href='#'>About</a></li>*/}
        </ul>
        <p>
          {/*<i><FaEye/></i>12.3M <span>Followers</span>*/}
        </p>
      </div>
      <AudioList volume={volume} type={type} flag={flag} setflag={setflag} searchvalue={searchvalue} pageName={pageName} playlist={playlist}/>
      {/*<div className='playing-song '>
        <img src="music.jpeg" alt="img" />
        <div className='playing-song-detail'>
          <div className='top'>
            <i className='heart'><FaHeart/></i>
            <div>
              <i><FaStepBackward/></i>
              <i><FaBackward/></i>
              <i><FaPlay/></i>
              <i><FaForward/></i>
              <i><FaStepForward/></i>
            </div>
            <i><FaShareAlt/></i>
          </div>
          <div className='bottom'>
            <p>00:00</p>
            <input type="range" name="" id="" />
            <p>00:00</p>
          </div>
        </div>
  </div>*/}
    </div>
  )
}

export {MainBox}
