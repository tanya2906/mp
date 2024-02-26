import React from 'react'
import {IoIosMore} from 'react-icons/io';
import {FaHeadphones,FaCheck} from 'react-icons/fa';
function BannerBox({pageName,artist,setflag}) {
  const play=()=>{
    document.querySelector('.banner-box .content .artist .right a:first-child').classList.add('play');
    setflag(1);
  }
  return (
    <div className='banner-box'>
      <img src="music.jpeg" alt="banner img" className='banner-img'/>
      <div className='content'>
        <div className='content-top'>
            <p>{pageName} {/*<span>/Popular Artist</span>*/}</p>
            <i><IoIosMore/></i>
        </div>
        <div className='artist'>
            <div className='left'>
                <h2>{artist}</h2>
                {/* 
                <span>
                    <p><i><FaHeadphones/></i>123124144 <span> Monthly Listener</span></p>
                </span>
                */}
            </div>
            <div className='right'>
                <a href='#' onClick={play}>Play</a>
                <a href='#' className='play'><i><FaCheck/></i>Follow</a>
             </div>
        </div>
      </div>
      <div className='bottom-background'></div>
    </div>
  )
}

export  {BannerBox};
