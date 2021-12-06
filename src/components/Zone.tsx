import React from 'react';
import '../css/scope/home.css';
import { DETAIL_PAGE } from '../Data/Enums';
import specialLL from '../img/specialLL.png';
import specialSAO from '../img/specialSAO.png';

const fullWidth = {
    width: '100%'
}

class Zone extends React.Component<{}, { detail: DETAIL_PAGE }> {
    constructor(props: any) {
        super(props);
        this.state = {
            detail: DETAIL_PAGE.NONE,
        };
    }

    render() {
        return (
            <div className="Column">
                <p>專區</p>
                <span onClick={() => this.setState({ detail: DETAIL_PAGE.ZONEDETAIL })}>
                    <div className="item">
                        <img alt="" src={specialLL} style={fullWidth} />
                        <span className="intro">LoveLive</span>
                    </div>
                </span>
                <span onClick={() => this.setState({ detail: DETAIL_PAGE.ZONEDETAIL })}>
                    <div className="item interval">
                        <img alt="" src={specialSAO} style={fullWidth} />
                        <span className="intro">刀劍神域<br />Sword Art Online</span>
                    </div>
                </span>
                <span onClick={() => this.setState({ detail: DETAIL_PAGE.ZONEMORE })}><span
                    className="moreHover">more...</span></span>
            </div>

        );
    }

}

export default Zone;
