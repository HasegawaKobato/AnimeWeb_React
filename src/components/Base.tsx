import React from 'react';
import '../css/scope/home.css';
import CTOB from './CTOB';
import CTTB from './CTTB';
import Keyword from './Keyword';
import New from './New';
import Onsale from './Onsale';
import Popular from './Popular';
import Zone from './Zone';
import search from '../img/search.png';

const SEARCH = {
    'width': '15px'
}

class Base extends React.Component {

    render() {
        return (
            <div>
                <div className="left">

                    <Zone></Zone>
                    <div className="Column interval">
                        <p>會員優惠</p>

                        <span className="moreHover">more...</span>
                    </div>
                    <div className="Column interval">
                    </div>
                </div>
                <div className="center">


                    <div className="RWDsearchField">
                        <img alt="" src={search} style={SEARCH} /><input type="text" name="search" className="search" />
                        <select>
                            <option>中文書</option>
                            <option>日文書</option>
                            <option>畫冊</option>
                            <option>DVD</option>
                            <option>CD</option>
                            <option>模型</option>
                            <option>海報</option>
                            <option>其他周邊</option>
                        </select>
                        <input type="button" value="搜尋" />
                    </div>

                    <New></New>
                    <CTOB></CTOB>
                    <CTTB></CTTB>

                </div>
                <div className="right">
                    <Onsale></Onsale>
                    <Popular></Popular>
                    <Keyword></Keyword>
                </div>

            </div>
        );
    }
}

export default Base;
