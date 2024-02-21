
import { useState } from 'react';
import './App.css';
import { LeftBox } from './components/LeftBox';
import { MainBox } from './components/MainBox';
import { RightBox } from './components/RightBox';
function App() {
  
  const [searchvalue,setSearchvalue]=useState('');
  return (
    <div className='app'>
      <LeftBox searchvalue={searchvalue}  setSearchvalue={setSearchvalue}/>
      <MainBox searchvalue={searchvalue}/>
      <RightBox/>
    </div>
  );
}

export default App;
