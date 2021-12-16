import "../assets/css/login.css";

import logo from "../assets/img/logo.png"

export default function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt />
                        <h1>SP Medical Group</h1>
                    </div>
                </div>
                <div className="links">
                </div>
            </header>
        </div>
    )
}