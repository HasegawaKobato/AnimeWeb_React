import React from 'react';
import '../css/scope/home.css';
import kuzuC from '../img/kuzuC.jpg'
import kataC from '../img/kataC.jpg'
import konosubaC from '../img/konosubaC.jpg'
import { DETAIL_PAGE } from '../Data/Enums';

class CTTB extends React.Component<{}, { detail: DETAIL_PAGE }> {
    constructor(props: any) {
        super(props);
        this.state = {
            detail: DETAIL_PAGE.NONE,
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
                        <span onClick={() => this.setState({ detail: DETAIL_PAGE.CTTB })}>
                            <span>more...</span>
                        </span>
                    </div>
                </div>
                <div className="cot">
                    <div className="centerItem">
                        <img alt="" src={kuzuC} /><br />
                        <span className="intro">人渣的本願 06</span>
                    </div>
                    <div className="centerItem">
                        <img alt="" src={kataC} /><br />
                        <span className="intro">亞人醬有話要說 04</span>
                    </div>
                    <div className="centerItemE">
                        <img alt="" src={konosubaC} /><br />
                        <span className="intro">為美好的世界獻上祝福 08</span>
                    </div>
                </div>
            </div>


        );
    }

}

export default CTTB;
