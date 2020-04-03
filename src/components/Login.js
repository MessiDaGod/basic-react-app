import React, { Component } from 'react';
import "./Login.css";

import PasswordInput2 from "./PasswordInput2";

class Login extends Component {

    render() {
        return (
            <form id="Form1" method="post" runat="server">
                <div id="wrapper">
                    <div className="bgimg">
                        <div id="innerwrapper">
                            <div id="logincontainer" className="directional">
                                <div className="container_lft">
                                </div>
                                <div className="columnwidth46">
                                    <div className="client-logo">
                                    </div>
                                    <div id="ctmcontentcontainer">
                                        <ul className="divcenter" id="tblLogin1" runat="server">
                                        </ul>
                                        <ul className="divcenter" id="tblLogin" runat="server">
                                            <PasswordInput2 />
                                            <li><span className="arrow">&nbsp;</span>
                                                <input type="submit" id="cmdLogin" name="cmdLogin" className="loginformbutton" value="LOGIN" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;