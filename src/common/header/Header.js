import React from "react";
import "./Header.css";
import logo from './logo.svg';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt="My logo" className="logo" />
            </div>
        );
    }
}

export default Header;