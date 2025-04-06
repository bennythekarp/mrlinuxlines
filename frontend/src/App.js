import { useEffect, useState } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
//api-calls
import getAllGames from './API-calls/getAllGames';

//functions

//components
import NavBar from './components/NavBar';
import Home from './components/Home';
import LiveGameStats from './components/LiveGameStats';
import Teams from './components/Teams';
import Players from './components/Players';
import Stats from './components/Stats'

//css
import StyledApp from './styles/StyledApp';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <StyledApp>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/game-stats' element={<LiveGameStats />}></Route>
        <Route path='/teams' element={<Teams />}></Route>
        <Route path='/players' element={<Players />}></Route>
        <Route path='players/:id/:name' element={<Stats />}></Route>
        {/* Catch-all route to redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
    </StyledApp>
  );
}

export default App;
