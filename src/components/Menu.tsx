import React from 'react';
import '../css/scope/home.css';


function Menu() {
    return (
        <div className="RWDmenu">
            <div className="custom-wrapper pure-g" id="menu">
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="pure-menu">
                        <a href="#" className="pure-menu-heading custom-brand">Anime</a>
                    </div>
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="pure-menu pure-menu-horizontal custom-can-transform">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">登入會員</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">全站分類</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">特殊專區</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">熱門排行</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                    <div className="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a className="pure-menu-link">會員專區</a></li>
                            <li className="pure-menu-item"><a className="pure-menu-link">客服中心</a></li>
                            <li className="pure-menu-item"><a className="pure-menu-link">討論區</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
