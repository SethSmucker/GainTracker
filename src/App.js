import { Route, Routes } from 'react-router-dom';
//import { useContext } from 'react';

import Navbar from './layouts/Navbar/Navbar';
import Home from './pages/Home/index';
import AllGains from './pages/AllGains/index';
import Settings from './pages/Settings/index';
import DevTools from './pages/DevTools/index';
import GainAdder from './components/GainAdder/GainAdder';
//import LocalGainsContext from './context/local-gains-context';

function App() {

  //const localGainsCtx = useContext(LocalGainsContext);

  return (
    <div>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/AllGains' element={<AllGains />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/DevTools' element={<DevTools />} />
          </Routes>
          <GainAdder />
        </div>
    </div>
  );
}

export default App;

