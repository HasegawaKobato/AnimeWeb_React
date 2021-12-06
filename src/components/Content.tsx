import React from 'react';
import '../css/scope/home.css';
import { PAGE_TYPE } from '../Data/Enums';
import Base from './Base';
import search from '../img/search.png';

const SEARCH = {
    'width': '15px'
};

const FOOTTITLE: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '12px'
};


class Content extends React.Component<{}, { type: PAGE_TYPE }> {

    constructor(props: any) {
        super(props);
        this.state = {
            type: PAGE_TYPE.NONE,
        };
    }

    private isLogin(): boolean {
        let loginData = document.cookie.split(';').filter(d => d.includes('data'));
        if (loginData.length) {
            let data = window.atob(loginData[0].split('=')[1]);
            let isLogin: boolean = JSON.parse(data).isLogin;
            return isLogin;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className="html">
                <div className="header">
                    <div className="menu">
                        <ul>
                            <li className="menuItem1" onClick={() => { window.location.href = "" }}><span className="menuLink">首頁<br />Home</span></li>
                            {this.isLogin() ? <li className="menuItem2"><span className="menuLink">登出<br />Logout</span></li> :
                                <li className="menuItem2"><span className="menuLink">登入<br />Login</span></li>}
                            <li className="menuItem2"><span className="menuLink">會員專區<br />Member Only</span></li>
                            <li className="menuItem2"><span className="menuLink">客服中心<br />Customer Service</span></li>
                            <li className="menuItem3"><span className="menuLink">討論區<br />Forum</span></li>
                        </ul>
                    </div>
                    <div className="logoArea">
                        <div className="headerLogo">
                            <span className="home">Anime</span>
                        </div>
                        <div className="headerNear">
                            <div className="searchField">
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
                        </div>
                    </div>
                    <div className="itemType">
                        <ul>
                            <li onClick={() => this.setState({ type: PAGE_TYPE.TRANDITIONBOOK })}>中文書</li>
                            <li onClick={() => this.setState({ type: PAGE_TYPE.JAPANESEBOOK })}>日文書</li>
                            <li onClick={() => this.setState({ type: PAGE_TYPE.ALNUM })}>畫冊</li>
                            <li onClick={() => this.setState({ type: PAGE_TYPE.DVD })}>ＤＶＤ</li>
                            <li onClick={() => this.setState({ type: PAGE_TYPE.CD })}>ＣＤ</li>
                            <li onClick={() => this.setState({ type: PAGE_TYPE.MODEL })}>模型</li>
                            <li onClick={() => this.setState({ type: PAGE_TYPE.POSTER })}>海報</li>
                            <li onClick={() => this.setState({ type: PAGE_TYPE.MERCHANDISE })}>其他周邊</li>
                        </ul>
                    </div>
                </div>

                <div className="body">
                    {this.state.type === PAGE_TYPE.NONE && <Base></Base>}
                    {this.state.type === PAGE_TYPE.TRANDITIONBOOK && <p>trad-book works!</p>}
                    {this.state.type === PAGE_TYPE.JAPANESEBOOK && <p>japan-book works!</p>}
                    {this.state.type === PAGE_TYPE.ALNUM && <p>Album works!</p>}
                    {this.state.type === PAGE_TYPE.DVD && <p>DVD works!</p>}
                    {this.state.type === PAGE_TYPE.CD && <p>CD works!</p>}
                    {this.state.type === PAGE_TYPE.MODEL && <p>Model works!</p>}
                    {this.state.type === PAGE_TYPE.POSTER && <p>Poster works!</p>}
                    {this.state.type === PAGE_TYPE.MERCHANDISE && <p>Merchandise works!</p>}
                </div>
                <div className="root">
                    <div className="footLogo">
                        <span className="home">Anime</span>
                    </div>
                    <div className="features">
                        <div className="link">
                            <ul>
                                <li><span className="rootLink">首頁</span></li>
                                <li>關於</li>
                                <li><span className="rootLink">客服中心</span></li>
                                <li><span className="rootLink">討論區</span></li>
                            </ul>
                        </div>
                        <div className="RWDlink">
                            <ul>
                                <li>關於</li>
                                <li><span className="rootLink">客服中心</span></li>
                                <li><span className="rootLink">討論區</span></li>
                            </ul>
                        </div>
                        <div className="ourInfo">
                            <p>專線：02-23456789</p>
                            <p>地址：台北市中正區濟南路一段321號</p><br />
                        </div>
                    </div>
                    <p style={FOOTTITLE}>動漫周邊購物網　&copy;Anime Shopping site.</p>
                </div>
            </div>)
    }

}

export default Content;
