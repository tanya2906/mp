import React, {useRef, useState} from 'react'
import '../components/LeftBox.css';
import {ImMusic} from 'react-icons/im';
import {IoIosMore,IoIosSearch} from 'react-icons/io';
import { MenuBox } from './MenuBox';
import { MenuList } from './MenuList';
import { PlaylistBox } from './PlaylistBox';
import { TrackBox } from './TrackBox';
function LeftBox({setVolume,artist,setArtist,pageName,setPageName,searchvalue,setSearchvalue,setPlaylist}) {
  const search=useRef();
  const changeSearch=(e)=>{
      setSearchvalue(e.target.value);
  }
  return (
    <div className='left-box'>
      <div className='logo-container'>
        <i><ImMusic/></i>
        <h1>Music Player</h1>
        <i><IoIosMore/></i>
      </div>
      <div className='search-container'>
        <i><IoIosSearch/></i>
        <input type="text" value={searchvalue} name='search' placeholder='Search' ref={search} onChange={changeSearch}/>
      </div>
      <MenuBox title="Menu" object={MenuList}  setPageName={setPageName}/>
      <PlaylistBox setPlaylist={setPlaylist} setArtist={setArtist}/>
      <TrackBox artist={artist} setVolume={setVolume}/>
    </div>
  )
}

export  {LeftBox}
