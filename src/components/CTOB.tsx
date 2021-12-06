import React from 'react';
import '../css/scope/home.css';
import kuzuJ from '../img/kuzuJ.jpg'
import kataJ from '../img/kataJ.jpg'
import konosubaJ from '../img/konosubaJ.jpg'

class CTOB extends React.Component {
    render() {
        return (
            <div className="centerColumn">
                <div className="title">
                    <div className="subject">
                        <p>新番原文書</p>
                    </div>
                    <div className="more moreHover">
                        <span>
                            <span>more...</span>
                        </span>
                    </div>
                </div>
                <div className="cot">
                    <div className="centerItem">
                        <img alt="" src={kuzuJ} /><br />
                        <span className="intro">クズの本懐 06</span>
                    </div>
                    <div className="centerItem">
                        <img alt="" src={kataJ} /><br />
                        <span className="intro">亜人ちゃんは語りたい 04</span>
                    </div>
                    <div className="centerItemE">
                        <img alt="" src={konosubaJ} /><br />
                        <span className="intro">この素晴らしい世界に祝福を 08</span>
                    </div>
                </div>
            </div>

        );
    }

}

export default CTOB;
