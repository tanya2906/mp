import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import {FaHeart,FaRegHeart,FaShareAlt,FaPlay,FaPause,FaForward,FaStepForward,FaBackward,FaStepBackward} from 'react-icons/fa';
function MusicPlayer({play,setPlay,id,setId,song,setSong,img,setImg,like,setLike,setSongs,Songs,NEXT,PREVIOUS}) {
    const audioPlayer=useRef();
    const progressBar=useRef();
    const play_pause=useRef();
    //const [play,setPlay]=useState(false);
    const [duration, setDuration]=useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    
    useEffect(()=>{
      const sec=Math.floor(audioPlayer.current.duration);
        setDuration(sec)
        progressBar.current.max=sec;
    },[audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);
   
    const whilePlaying=()=>{
      progressBar.current.value=audioPlayer.current.currentTime;
      changeCurrentTime();
      play_pause.current=requestAnimationFrame(whilePlaying)
      
    }
    
    const calculateTime=(sec)=>{
        const min = Math.floor(sec/60);
        const Min=min<10?`0${min}`:`${min}`;
        const Sec = Math.floor(sec % 60);
        const Secs=Sec<10?`0${Sec}`:`${Sec}`;
        return `${Min}:${Secs}`
    }

    const changeProgress=()=>{
        audioPlayer.current.currentTime=progressBar.current.value;
        changeCurrentTime();
        
    }
    const changeCurrentTime=()=>{
      progressBar.current.style.setProperty('--player-played',`${(progressBar.current.value / duration)*100}%`);
      setCurrentTime(progressBar.current.value);
      
      
  }
    const changeLove=()=>{
        Songs.forEach(e=>{
            if (e.id == id) 
            {
                e.favourite = !e.favourite;   
            }
        })
        setLike(!like)
        setSongs([...Songs]);
    }
    const changePlay=()=>{
        
        if(!play)
        {
            audioPlayer.current.play();
            play_pause.current=requestAnimationFrame(whilePlaying);
        }
        else{
            audioPlayer.current.pause();
            cancelAnimationFrame(play_pause.current);
        }
        setPlay(!play);
        
    }
    const nextSong=()=>{
      NEXT();
      
    }
    const previousSong=()=>{
      PREVIOUS();
    }
  return (
    
    <div className='playing-song '>
        <img src={img} alt="img" />
        <audio src={song} ref={audioPlayer} id='audioplaying'/>
        <div className='playing-song-detail'>
          <div className='top'>
            <i className='heart' onClick={()=>changeLove()}>{like?<FaHeart/>:<FaRegHeart/>}</i>
            <div>
              <i><FaStepBackward onClick={()=>previousSong()}/></i>
              <i><FaBackward/></i>
              <i onClick={()=>changePlay()}>{play?<FaPause/>:<FaPlay/>}</i>
              <i><FaForward/></i>
              <i><FaStepForward onClick={()=>nextSong()}/></i>
            </div>
            <i><FaShareAlt /></i>
          </div>
          <div className='bottom'>
            <p>{isNaN(currentTime)?`00:00`:calculateTime(currentTime)}</p>
            <input type="range" name="" id="" ref={progressBar} onChange={changeProgress}/>
            <p>{isNaN(duration)?`00:00`:calculateTime(duration)}</p>
          </div>
        </div>
      </div>
  )
}

export {MusicPlayer}
