import React, { ReactElement } from 'react';
import '../css/scope/home.css';
import Base from './Base';


class Content extends React.Component<{}, {type: string}> {

    constructor(props: any) {
        super(props);
        this.state = {
            type: 'None',
        };
    }

    render() {
        return (
            <div className="html">
                <div className="header">
                    <div className="menu">
                        <ul>
                            <li className="menuItem1"><a className="menuLink">首頁<br />Home</a></li>
                            <li className="menuItem2"><a className="menuLink">登入<br />Login</a></li>
                            <li className="menuItem2"><a className="menuLink">會員專區<br />Member Only</a></li>
                            <li className="menuItem2"><a className="menuLink">客服中心<br />Customer Service</a></li>
                            <li className="menuItem3"><a className="menuLink">討論區<br />Forum</a></li>
                        </ul>
                    </div>
                    <div className="logoArea">
                        <div className="headerLogo">
                            <a className="home">Anime</a>
                        </div>
                        <div className="headerNear">
                            <div className="searchField">
                                {/* <img src="assets/img/search.png" style="width:15px;"><input type ="text" name="search" className ="search"> */}
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
                                {/* <input type ="button" value="搜尋"> */}
                            </div>
                        </div>
                    </div>
                    <div className="itemType">
                        <ul>
                            <li onClick={() => this.setState({ type: 'TraditionalBook' })}>中文書</li>
                            <li onClick={() => this.setState({ type: 'JapaneseBook' })}>日文書</li>
                            <li onClick={() => this.setState({ type: 'Album' })}>畫冊</li>
                            <li onClick={() => this.setState({ type: 'DVD' })}>ＤＶＤ</li>
                            <li onClick={() => this.setState({ type: 'CD' })}>ＣＤ</li>
                            <li onClick={() => this.setState({ type: 'Model' })}>模型</li>
                            <li onClick={() => this.setState({ type: 'Poster' })}>海報</li>
                            <li onClick={() => this.setState({ type: 'Merchandise' })}>其他周邊</li>
                        </ul>
                    </div>
                </div>

                <div className="body">
                    {this.state.type === 'None' && <Base></Base>}
                    {this.state.type === 'TraditionalBook' && <p>trad-book works!</p>}
                    {this.state.type === 'JapaneseBook' && <p>japan-book works!</p>}
                    {this.state.type === 'Album' && <p>Album works!</p>}
                    {this.state.type === 'DVD' && <p>DVD works!</p>}
                    {this.state.type === 'CD' && <p>CD works!</p>}
                    {this.state.type === 'Model' && <p>Model works!</p>}
                    {this.state.type === 'Poster' && <p>Poster works!</p>}
                    {this.state.type === 'Merchandise' && <p>Merchandise works!</p>}
                </div>
                <div className="root">
                    <div className="footLogo">
                        <a className="home">Anime</a>
                    </div>
                    <div className="features">
                        <div className="link">
                            <ul>
                                <li><a className="rootLink">首頁</a></li>
                                <li>關於</li>
                                <li><a className="rootLink">客服中心</a></li>
                                <li><a className="rootLink">討論區</a></li>
                            </ul>
                        </div>
                        <div className="RWDlink">
                            <ul>
                                <li>關於</li>
                                <li><a className="rootLink">客服中心</a></li>
                                <li><a className="rootLink">討論區</a></li>
                            </ul>
                        </div>
                        <div className="ourInfo">
                            <p>專線：02-23456789</p>
                            <p>地址：台北市中正區濟南路一段321號</p><br />
                        </div>
                    </div>
                    {/* <p style="text-align:center;font-size:12px;">動漫周邊購物網　&copy;Anime Shopping site.</p> */}
                </div>
            </div>)
    }

}

export default Content;
