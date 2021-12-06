import React from 'react';
import Login from './components/Login';

import './css/frame.css';
import './css/style.css';
import './css/hover.css';
import './css/form.css';
import './css/RWD.css';
import './css/RWDmenu.css';
import './css/grids-responsive-min.css';
import './css/pure-min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
