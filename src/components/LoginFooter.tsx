import React from 'react';
import '../css/scope/home.css';

class LoginFooter extends React.Component {
    render() {
        return (

            <div className="loginRoot">
                <div className="loginWidth">
                    <div className="footLogo"><span className="home">Anime</span>
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
                        <div className="ourInfo">
                            <p>專線：02-23456789</p>
                            <p>地址：台北市中正區濟南路一段321號</p><br />
                        </div>
                    </div>
                    <p>動漫周邊購物網　&copy;Anime Shopping site.</p>
                </div>
            </div>

        );
    }

}

export default LoginFooter;
