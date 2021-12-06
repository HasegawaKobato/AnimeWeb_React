import React from 'react';
import '../css/scope/home.css';


function Menu() {
    return (
        <div className="RWDmenu">
            <div className="custom-wrapper pure-g" id="menu">
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="pure-menu">
                        <span className="pure-menu-heading custom-brand">Anime</span>
                    </div>
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="pure-menu pure-menu-horizontal custom-can-transform">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><span className="pure-menu-link">登入會員</span></li>
                            <li className="pure-menu-item"><span className="pure-menu-link">全站分類</span></li>
                            <li className="pure-menu-item"><span className="pure-menu-link">特殊專區</span></li>
                            <li className="pure-menu-item"><span className="pure-menu-link">熱門排行</span></li>
                        </ul>
                    </div>
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><span className="pure-menu-link">會員專區</span></li>
                            <li className="pure-menu-item"><span className="pure-menu-link">客服中心</span></li>
                            <li className="pure-menu-item"><span className="pure-menu-link">討論區</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
