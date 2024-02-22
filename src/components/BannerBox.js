import React from 'react'
import {IoIosMore} from 'react-icons/io';
import {FaHeadphones,FaCheck} from 'react-icons/fa';
function BannerBox({pageName,artist}) {
  
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
                <a href='#'>Play</a>
                <a href='#'><i><FaCheck/></i>Follow</a>
             </div>
        </div>
      </div>
      <div className='bottom-background'></div>
    </div>
  )
}

export  {BannerBox};
