import React, { useState } from 'react';
import '../css/scope/home.css';
import loginImg from '../img/loginImg.jpg';

const SUBMIT_STYLE: React.CSSProperties = {
    textAlign: 'center',
    margin: '50px'
}

function LoginContent() {
    const [registeData, setRegisteData] = useState({
        Email: '',
        newPW: '',
        confirmNewPW: '',
        name: '',
        gender: '',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
        tel: '',
        address: '',
        valid: false
    });

    const [loginData, setLoginData] = useState({
        account: '',
        password: '',
        valid: false
    })

    function onRegeisterFormChanged(event: any) {
        let type: 'Email' | 'newPW' | 'confirmNewPW' | 'name' | 'gender' | 'birthYear' | 'birthMonth' | 'birthDay' | 'tel' | 'address' = event.target.name;
        registeData[type] = event.target.value;
        setRegisteData(registeData);
    }

    function onLoginFormChanged(event: any) {
        let type: 'account' | 'password' = event.target.name;
        loginData[type] = event.target.value;
        setLoginData(loginData)
    }

    function onSubmitRegister(event: any) {
        event.preventDefault();
        if (validRegisterData()) {
            login();
        } else {
            alert("錯誤的輸入內容。資料皆為必填選項。")
        }
    }

    function onSubmitLogin(event: any) {
        event.preventDefault();
        if (validLoginData()) {
            login();
        } else {
            alert("錯誤的輸入內容。請輸入您的帳號密碼。")
        }
    }

    function login() {
        let cookieData = window.btoa('{"isLogin": true}');
        let expires = new Date().setHours(new Date().getHours() + 1);
        document.cookie = `data=${cookieData};Expires=${new Date(expires).toUTCString()}`;
        window.location.href = '/home';
    }

    function validRegisterData() {
        return registeData.Email &&
            registeData.newPW &&
            (registeData.newPW === registeData.confirmNewPW) &&
            registeData.name &&
            registeData.gender &&
            registeData.birthYear &&
            registeData.birthMonth &&
            registeData.birthDay &&
            registeData.tel &&
            registeData.address;
    }

    function validLoginData() {
        return loginData.account &&
            loginData.password;
    }

    return (
        <div className="login">
            <div className="loginHead">
                <div className="headerLogo"><span className="home">Anime</span>
                </div>
            </div>

            <form onSubmit={onSubmitLogin}>
                <div className="loginField">
                    帳號：<input type="text" name="account" className="account" onChange={onLoginFormChanged} />
                    密碼：<input type="password" name="password" className="password" onChange={onLoginFormChanged} />
                    <input type="submit" value="登入" name="login" className="loginButton" />
                </div>
            </form>

            <div className="loginBody">
                <div className="loginImg">
                    <img alt="" src={loginImg} />
                </div>
                <div className="register">
                    <h3>註冊會員</h3>
                    <form onSubmit={onSubmitRegister} >
                        <ul>
                            <li><span className="memberDataField">Ｅ－ｍａｉｌ </span><span className="colon">：</span><input type="email" name="Email" className="Email" onChange={onRegeisterFormChanged} /></li>
                            <li><span className="memberDataField">密碼 </span><span className="colon">　　　　：</span><input type="password" name="newPW" className="newPW" onChange={onRegeisterFormChanged} /></li>
                            <li><span className="memberDataField">確認密碼 </span><span className="colon">　　：</span><input type="password" name="confirmNewPW" className="confirmNewPW" onChange={onRegeisterFormChanged} /></li>
                            <li><span className="memberDataField">姓名 </span><span className="colon">　　　　：</span><input type="text" name="name" className="name" onChange={onRegeisterFormChanged} /></li>
                            <li><span className="memberDataField">性別 </span><span className="colon">　　　　：</span><input type="radio" name="gender" value="woman" onChange={onRegeisterFormChanged} />女<input type="radio" name="gender" value="man" onChange={onRegeisterFormChanged} />男</li>
                            <li><span className="memberDataField">生日 </span><span className="colon">　　　　：</span>西元<input type="text" name="birthYear" className="birthYear" onChange={onRegeisterFormChanged} />年
                                <input type="text" name="birthMonth" className="birthMonth" onChange={onRegeisterFormChanged} />月
                                <input type="text" name="birthDay" className="birthDay" onChange={onRegeisterFormChanged} />日</li>
                            <li><span className="memberDataField">手機 </span><span className="colon">　　　　：</span><input type="text" name="tel" className="tel" onChange={onRegeisterFormChanged} /></li>
                            <li><span className="memberDataField">住址 </span><span className="colon">　　　　：</span><input type="text" name="address" className="address" onChange={onRegeisterFormChanged} /></li>
                        </ul>
                        <div><input type="submit" style={SUBMIT_STYLE} value="確認送出" name="send" /></div>
                    </form>
                </div>
            </div>
        </div>

    );

}

export default LoginContent;
