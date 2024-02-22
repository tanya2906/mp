
import { useState } from 'react';
import './App.css';
import { LeftBox } from './components/LeftBox';
import { MainBox } from './components/MainBox';
import { RightBox } from './components/RightBox';
function App() {
  const [pageName,setPageName]=useState('Home')
  const [artist,setArtist]=useState("All");
  const [searchvalue,setSearchvalue]=useState('');
  const [playlist,setPlaylist]=useState('all');
  return (
    <div className='app'>
      <LeftBox pageName={pageName} setPageName={setPageName} searchvalue={searchvalue}  setSearchvalue={setSearchvalue} artist={artist} setArtist={setArtist} setPlaylist={setPlaylist}/>
      <MainBox searchvalue={searchvalue} pageName={pageName} artist={artist} setArtist={setArtist} playlist={playlist}/>
      <RightBox/>
    </div>
  );
}

export default App;
