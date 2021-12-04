import React, { ReactElement } from 'react';
import '../css/scope/home.css';
import specialLL from '../img/specialLL.png';
import specialSAO from '../img/specialSAO.png';

const fullWidth = {
    width: '100%'
}

class Zone extends React.Component<{}, { detail: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            detail: 'None',
        };
    }

    render() {
        return (
            <div className="Column">
                <p>專區</p>
                <a onClick={() => this.setState({ detail: 'ZoneDetail' })}>
                    <div className="item">
                        <img src={specialLL} style={fullWidth}/>
                        <span className="intro">LoveLive</span>
                    </div>
                </a>
                <a onClick={() => this.setState({ detail: 'ZoneDetail' })}>
                    <div className="item interval">
                        <img src={specialSAO} style={fullWidth} />
                        <span className="intro">刀劍神域<br />Sword Art Online</span>
                    </div>
                </a>
                <a onClick={() => this.setState({ detail: 'ZoneMore' })}><span
                    className="moreHover">more...</span></a>
            </div>

        );
    }

}

export default Zone;
