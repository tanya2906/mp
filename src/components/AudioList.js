import React, { useState } from 'react'
import { useEffect } from 'react';
import {FaHeadphones,FaClock,FaRegHeart,FaHeart} from 'react-icons/fa';
import {Songs} from './Songs';
import { MusicPlayer } from './MusicPlayer';
function AudioList({searchvalue}) {
    const [like,setLike]=useState(Songs[0].favourite);
    const [songs,setSongs]=useState(Songs);
    const [song,setSong]=useState(Songs[0].song);
    const [img,setImg]=useState(Songs[0].imgSrc)
    const [id,setId]=useState(Songs[0].id)
    const [play,setPlay]=useState(false);
    useEffect(()=>{
        const song_item=document.querySelectorAll('.audio-list .song-container .song-item');
        function changeActiveSong(){
            song_item.forEach(e=>(
                e.classList.remove('active')
            ))
            this.classList.add('active')
        }
        song_item.forEach(e=>e.addEventListener('click',changeActiveSong));
    },[]);
    useEffect(
        ()=>{
            setSongs(
                songs.filter((e)=>{if(e.songName.includes(searchvalue)||e.artist.includes(searchvalue))
                return e;
                })
            )
            console.log(songs)
        },[searchvalue])
    const changeFavourite=(id)=>{
        Songs.forEach(e=>{
            if (e.id == id) 
            {
                e.favourite = !e.favourite;   
            }
        })
        setSongs([...Songs]);
    }
    const setMainSong=(songImg,songSrc,songlike,songId)=>{
        setImg(songImg);
        setSong(songSrc);
        setLike(songlike);
        setId(songId);
        
        
    }
    const NEXT=()=>{
        if(id===Songs.length ){
            setId(1);
        }
        else{
            setId(id+1);
            
        }
        setImg(Songs[id-1].imgSrc);
        setSong(Songs[id-1].song);
        setLike(Songs[id-1].favourite);
        
    }
    const PREVIOUS=()=>{
        if(id===1){
            setId(Songs.length);
        }
        else{
            setId(id-1);
        }
        setImg(Songs[id-1].imgSrc);
        setSong(Songs[id-1].song);
        setLike(Songs[id-1].favourite);
        
    }
  return (
    <div className='audio-list'>
      <div className='the-list'>
        <h3>The list</h3>
        <p><span>{`${Songs.length}`}</span> Songs </p>
      </div>
      <div className='song-container'>
        {
        
            
            songs.map((e,i)=>(
                <div className='song-item' key={e.id} onClick={()=>setMainSong(e.imgSrc,e.song,e.favourite,e.id)}>
                    <div className='div1'>
                        <p>{`#${i+1}`}</p>
                        <img src={e.imgSrc} alt="" />
                        <p className='song-item-info'>{e.songName} - {e.artist}</p>
                    </div>
                     {/* 
                    <div className='div2'>
                    <p>{e.artist}</p>
                    </div>
                    */}
                    <div className='div3'>
                        <span>
                            <i><FaHeadphones/></i>
                            <p>1234567890</p>
                        </span>
                        <span>
                            <i><FaClock/></i>
                            <p>03:04</p>
                        </span>
                        <i className='like' onClick={()=>changeFavourite(e.id)}>
                        {
                            e.favourite?<FaHeart/>:<FaRegHeart/>
                        }
                        </i>
                    </div>
                </div>
            ))
        }
        
       
      </div>
      <MusicPlayer id={id} setId={setId} song={song} setSong={setSong} img={img} setImg={setImg}like={like} setLike={setLike} setSongs={setSongs} Songs={Songs} play={play} setPlay={setPlay} NEXT={NEXT} PREVIOUS={PREVIOUS}/>
    </div>
  )
}

export {AudioList};
