import React from 'react';
import '../css/scope/home.css';

class Keyword extends React.Component {

    render() {
        return (
            <div className="Column interval">
                <p>熱門關鍵字</p>
                <ul className="keyword">
                    <li><span>你的名字</span></li>
                    <li><span>1月新番</span></li>
                    <li><span>進擊的巨人</span></li>
                    <li><span>聲之形</span></li>
                    <li><span>RE</span></li>
                    <li><span>從零開始的異世界生活</span></li>
                    <li><span>雷姆</span></li>
                    <li><span>拉姆</span></li>
                    <li><span>伊澤塔</span></li>
                    <li><span>芬涅</span></li>
                </ul>
            </div>
        );
    }

}

export default Keyword;
