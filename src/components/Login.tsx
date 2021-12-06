import React from 'react';
import LoginContent from './LoginContent';
import LoginFooter from './LoginFooter';
import Menu from './Menu';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div className="loginLine"></div>
                <LoginContent></LoginContent>
                <LoginFooter></LoginFooter>
            </div>
        );
    }

}

export default Login;
