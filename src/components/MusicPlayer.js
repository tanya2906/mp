import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import {FaHeart,FaRegHeart,FaShareAlt,FaPlay,FaPause,FaForward,FaStepForward,FaBackward,FaStepBackward} from 'react-icons/fa';
function MusicPlayer({volume,setflag,flag,play,setPlay,id,setId,song,setSong,img,setImg,like,setLike,setSongs,Songs,NEXT,PREVIOUS}) {
    const audioPlayer=useRef();
    const progressBar=useRef();
    const play_pause=useRef();
    //const [play,setPlay]=useState(false);
    const [duration, setDuration]=useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    
    useEffect(() => {
      // Add event listener for timeupdate event to update progress bar
      audioPlayer.current.addEventListener('timeupdate', updateProgressBar);
      return () => {
          // Clean up the event listener when component unmounts
          audioPlayer.current.removeEventListener('timeupdate', updateProgressBar);
      };
      
      // Initialize progressBar ref here
     //progressBar = progressBar.current;
  
  }, [/*audioPlayer*/]); 
  
  
  
    /*useEffect(()=>{
      if(flag===1)
      {
        document.querySelector('audio').setAttribute('autoplay',true);
        setPlay(true);
        play_pause.current=requestAnimationFrame(whilePlaying);
      }
      
    },[flag])
    */
    useEffect(()=>{
      const sec=Math.floor(audioPlayer.current.duration);
        if(!isNaN(sec)){
          setDuration(sec)
        progressBar.current.max=sec;
        
        }
        if(flag===1)
      {
        audioPlayer.current.play();//document.querySelector('audio').setAttribute('autoplay',true);
        setPlay(true);
        
      }
      //console.log(volume)
      audioPlayer.current.volume=volume;
      /* () => {
        cancelAnimationFrame(play_pause.current);
    };*/
      //console.log(audioPlayer.current.volume)
    },[audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState,flag,volume]);
   
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
      const currentTime = progressBar.current.value;
    setCurrentTime(currentTime);
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
            play_pause.current = requestAnimationFrame(whilePlaying);
        
        }
        else{
            audioPlayer.current.pause();
            setflag(0);
            cancelAnimationFrame(play_pause.current);
        }
        setPlay(!play);
        
    }
    const updateProgressBar = () => {
      const currentTime = audioPlayer.current.currentTime;
      const duration = audioPlayer.current.duration;
      const progressBarElement = progressBar.current; // Use the progressBar ref directly
      if (progressBarElement && duration) {
          progressBarElement.value = currentTime;
          progressBarElement.max = duration;
          const progressWidth = (currentTime / duration) * 100 + '%';
          progressBarElement.style.setProperty('--player-played', progressWidth);
          changeCurrentTime();
      }
  };
    const autoNext=()=>{
      NEXT();
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
        <audio controls  src={song} ref={audioPlayer} onEnded={autoNext} id='audioplaying'/>
        <div className='playing-song-detail'>
          <div className='top'>
            <i className='heart' onClick={()=>changeLove()}>{like?<FaHeart/>:<FaRegHeart/>}</i>
            <div>
              <i><FaStepBackward onClick={()=>previousSong()}/></i>
             {/*  <i><FaBackward/></i> */}
              <i onClick={()=>changePlay()}>{play?<FaPause/>:<FaPlay/>}</i>
              {/* <i><FaForward/></i>*/}
              <i><FaStepForward onClick={()=>nextSong()}/></i>
            </div>
            <i><FaShareAlt /></i>
          </div>
          <div className='bottom'>
            <p>{isNaN(currentTime)?`00:00`:calculateTime(currentTime)}</p>
            <input type="range" name="" id="" ref={progressBar} onChange={changeProgress} min="0" max={duration || 0} value={currentTime}/>
            <p>{isNaN(duration)?`00:00`:calculateTime(duration)}</p>
          </div>
        </div>
      </div>
  )
}

export {MusicPlayer}
