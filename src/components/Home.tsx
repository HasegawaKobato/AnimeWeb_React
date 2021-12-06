import React from 'react';
import '../css/scope/home.css';
import Content from './Content';
import Menu from './Menu';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Menu></Menu>
                <div className="line"></div>
                <Content></Content>
            </div>
        );
    }

}

export default Home;
