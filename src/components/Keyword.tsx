import React, { ReactElement } from 'react';
import '../css/scope/home.css';

const fullWidth = {
    width: '100%'
}

class Keyword extends React.Component<{}, { detail: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            detail: 'None',
        };
    }

    render() {
        return (
            <div className="Column interval">
                <p>熱門關鍵字</p>
                <ul className="keyword">
                    <li><a href="#">你的名字</a></li>
                    <li><a href="#">1月新番</a></li>
                    <li><a href="#">進擊的巨人</a></li>
                    <li><a href="#">聲之形</a></li>
                    <li><a href="#">RE</a></li>
                    <li><a href="#">從零開始的異世界生活</a></li>
                    <li><a href="#">雷姆</a></li>
                    <li><a href="#">拉姆</a></li>
                    <li><a href="#">伊澤塔</a></li>
                    <li><a href="#">芬涅</a></li>
                </ul>
            </div>
        );
    }

}

export default Keyword;
