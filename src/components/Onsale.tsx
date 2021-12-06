import React from 'react';
import '../css/scope/home.css';
import kiminonawaC from '../img/kiminonawaC.jpg';

class Onsale extends React.Component {

    render() {
        return (
            <div className="Column">
                <p>特價區</p>

                <div className="item">
                    <img alt="" src={kiminonawaC} /><br />
                    <span className="intro">你的名字</span>
                </div>
            </div>


        );
    }

}

export default Onsale;
