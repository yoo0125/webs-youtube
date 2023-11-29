import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Today from "./pages/Today";
import Developer from "./pages/Developer";
import Webd from "./pages/Webd";
import Website from "./pages/Website";
import Gsap from "./pages/Gsap";
import Port from "./pages/Port";
import Youtube from "./pages/Youtube";
import Channel from "./pages/Channel";
import Video from "./pages/Video";
import Search from "./pages/Search";
import Not from "./pages/Not";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route pate='/' element={<Home/>} />
          <Route pate='/today' element={<Today/>}/>
          <Route pate='/developer' element={<Developer/>}/>
          <Route pate='/webd' element={<Webd/>}/>
          <Route pate='/website' element={<Website/>}/>
          <Route pate='/gsap' element={<Gsap/>}/>
          <Route pate='/port' element={<Port/>}/>
          <Route pate='/youtube' element={<Youtube/>}/>
          <Route pate='/channel/:channelID' element={<Channel/>}/>
          <Route pate='/video/:video:ID' element={<Video/>}/>
          <Route pate='/video/:search:ID' element={<Search/>}/>
          <Route pate='/*' element={<Not/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;