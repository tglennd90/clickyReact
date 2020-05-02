import React from "react";
import '../App.css';

function Header() {
    return (
        <div className="fixed-top bg-success" id="header">
            <ul id="headerUl">
                <li>Clicky Game</li>
                <li>Guess</li>
                <li>Score</li>
            </ul>
        </div>
    );
};

export default Header;