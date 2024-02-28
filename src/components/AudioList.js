import React, { useState } from 'react'
import { useEffect } from 'react';
import {FaRegHeart,FaHeart} from 'react-icons/fa';
import {Songs} from './Songs';
import { MusicPlayer } from './MusicPlayer';

function AudioList({volume,type,searchvalue,playlist,flag ,setflag}) {
    
    const [songs,setSongs]=useState(Songs);
    const [like,setLike]=useState(Songs[0].favourite);
    const [song,setSong]=useState(Songs[0].song);
    const [img,setImg]=useState(Songs[0].imgSrc)
    const [id,setId]=useState(Songs[0].id)
    const [play,setPlay]=useState(false);
    const [i,setI]=useState(0)
   // const [flag,setflag]=useState(0);

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
    /*useEffect(()=>{
        if(type=='popular')
        {
            //console.log('popular')
            setSongs(

            )
        }
        else if (type == "like")
        {
            console.log('like')
        }
        else{
            console.log('all');
        }
    },[type])
    */
    useEffect(
        ()=>{
            setSongs(
                Songs.filter((e)=>{if(e.songName.toLowerCase().includes(searchvalue.toLowerCase())||e.artist.toLowerCase().includes(searchvalue.toLowerCase()))
                {
                    return e;
                }
                })
            )
           // if(songs!=''){
            //    setMainSong(songs[0].imgSrc,songs[0].song,songs[0].favourite,songs[0].id,0,0);
                /*setLike(songs[0].favourite);
                setSong(songs[0].song);
                setImg(songs[0].imgSrc);
                setId(songs[0].id);
                */
           // }
            //console.log(songs)
        },[searchvalue]);
    useEffect(()=>{
        if(type=='like'){
            setSongs(
                Songs.filter((e)=>{if(e.category.toLowerCase().includes(playlist.toLowerCase())&& e.favourite===true)
                   return e;
                })
                
            )
        }
        else{
            setSongs(
                Songs.filter((e)=>{if(e.category.toLowerCase().includes(playlist.toLowerCase())&& e.category.toLowerCase().includes(type.toLowerCase()))
                   return e;
                })
                
            )
        }
        
       /* if(songs!=''){
            
            setMainSong(songs[0].imgSrc,songs[0].song,songs[0].favourite,songs[0].id,0,0);
           // setLike(songs[0].favourite);
           // setSong(songs[0].song);
           // setImg(songs[0].imgSrc);
           // setId(songs[0].id);
        }
        */
    },[playlist,type]);
    
    const changeFavourite=(id)=>{
        Songs.forEach(e=>{
            if (e.id == id) 
            {
                e.favourite = !e.favourite;   
            }
        })
        setSongs([...Songs]);
    }
    const setMainSong=(songImg,songSrc,songlike,songId,j,i)=>{
        setImg(songImg);
        setSong(songSrc);
        setLike(songlike);
        setId(songId);
        setflag(j);
        setI(i);
        
    }
    /*const NEXT=()=>{
        if(id===songs.length || songs.length===1)
        {
            setId(1);
        }
        else{
            setId(id+1);
            
        }
        setImg(songs[id-1].imgSrc);
        setSong(songs[id-1].song);
        setLike(songs[id-1].favourite);
    }
    */const NEXT=()=>{
        if(i===songs.length-1 || songs.length===1)
        {
            setI(0);
        }
        else{
            setI(i+1);
            
        }
        setImg(songs[i].imgSrc);
        setSong(songs[i].song);
        setLike(songs[i].favourite);
        if(play){
            setflag(1);
        }
        else{
            setflag(0);
        }
    }
    /*
    const PREVIOUS=()=>{
        if(id===1){
            setId(songs.length);
        }
        else{
            setId(id-1);
        }
        setImg(songs[id-1].imgSrc);
        setSong(songs[id-1].song);
        setLike(songs[id-1].favourite);
        
    }*/
    const PREVIOUS=()=>{
        if(i===0){
            setI(songs.length-1);
        }
        else{
            setI(i-1);
        }
        setImg(songs[i].imgSrc);
        setSong(songs[i].song);
        setLike(songs[i].favourite);
        
    }
    //const playAll=()=>{}
  return (
    <div className='audio-list'>
      <div className='the-list'>
        <h3>The list</h3>
        <p><span>{`${songs.length}`}</span> Songs </p>
      </div>
      <div className='song-container'>
        {
        
            
            songs.map((e,i)=>(
                <div className='song-item' key={e.id} onClick={()=>setMainSong(e.imgSrc,e.song,e.favourite,e.id,1,i)}>
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
                        {/*
                        <span>
                            <i><FaHeadphones/></i>
                            <p>1234567890</p>
                        </span>
                        <span>
                            <i><FaClock/></i>
                            <p>03:04</p>

                        </span>
                        */}
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
      <MusicPlayer volume={volume} flag={flag} setflag={setflag}  id={id} setId={setId} song={song} setSong={setSong} img={img} setImg={setImg}like={like} setLike={setLike} setSongs={setSongs} Songs={Songs} play={play} setPlay={setPlay} NEXT={NEXT} PREVIOUS={PREVIOUS} />
    </div>
  )
}

export {AudioList};
