import React, { Component } from 'react';
import "./Login.css";

import PasswordInput2 from "./PasswordInput2";

class Login extends Component {

    render() {
        return (
            <form id="Form1" method="post">
                <div id="wrapper">
                    <div id="innerwrapper">
                        <div id="logincontainer columnwidth46">
                            <div id="ctmcontentcontainer">
                                <PasswordInput2 />
                                <li>
                                    <input type="submit" name="login" value="Login" />
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;