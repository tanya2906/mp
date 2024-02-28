import React from 'react'
import '../components/RightBox.css';
import { FaRegHeart } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

function RightBox() {
  
  return (
    <div className='right-box'>
      <div className='top'>
        <i>{/*<FaRegHeart />*/}</i>
      </div>
      <div className='bottom'>
        <i><CiSettings /></i>
      </div>
    </div>
  )
}

export  {RightBox};