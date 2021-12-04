import React from 'react';
import logo from './logo.svg';
import Menu from './components/Menu';
import Content from './components/Content';

import './css/frame.css';
import './css/style.css';
import './css/hover.css';
import './css/form.css';
import './css/RWD.css';
import './css/RWDmenu.css';
import './css/grids-responsive-min.css';
import './css/pure-min.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <Menu></Menu>
        <div className="line"></div>
        <Content></Content>
      </div>);
  }
}

export default App;
