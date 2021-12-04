import React, { ReactElement } from 'react';
import '../css/scope/home.css';
import kuzuC from '../img/kuzuC.jpg'
import kataC from '../img/kataC.jpg'
import konosubaC from '../img/konosubaC.jpg'

class CTTB extends React.Component<{}, { detail: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            detail: 'None',
        };
    }

    render() {
        return (
            <div className="centerColumn">
                <div className="title">
                    <div className="subject">
                        <p>新番中文書</p>
                    </div>
                    <div className="more moreHover">
                        <a onClick={() => this.setState({ detail: 'ComingTVTradBook' })}>
                            <span>more...</span>
                        </a>
                    </div>
                </div>
                <div className="cot">
                    <div className="centerItem">
                        <img src={kuzuC} /><br />
                        <span className="intro">人渣的本願 06</span>
                    </div>
                    <div className="centerItem">
                        <img src={kataC} /><br />
                        <span className="intro">亞人醬有話要說 04</span>
                    </div>
                    <div className="centerItemE">
                        <img src={konosubaC} /><br />
                        <span className="intro">為美好的世界獻上祝福 08</span>
                    </div>
                </div>
            </div>


        );
    }

}

export default CTTB;
