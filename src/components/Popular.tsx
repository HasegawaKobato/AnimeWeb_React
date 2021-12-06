import React from 'react';
import '../css/scope/home.css';
import kiminonawaJ from '../img/kiminonawaJ.jpg';

class Popular extends React.Component {

    render() {
        return (
            <div className="Column interval">
                <p>熱門排行</p>

                <div className="item">
                    <img alt="" src={kiminonawaJ} /><br />
                    <span className="intro">君の名は</span>
                </div>
            </div>



        );
    }

}

export default Popular;
