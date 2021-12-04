import React, { ReactElement } from 'react';
import '../css/scope/home.css';
import kiminonawaC from '../img/kiminonawaC.jpg';

class Onsale extends React.Component<{}, { detail: string }> {

    render() {
        return (
            <div className="Column">
                <p>特價區</p>

                <div className="item">
                    <img src={kiminonawaC} /><br />
                    <span className="intro">你的名字</span>
                </div>
            </div>


        );
    }

}

export default Onsale;
