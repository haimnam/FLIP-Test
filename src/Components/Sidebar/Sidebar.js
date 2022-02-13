import React, { useState } from 'react';
import {SidebarData} from "./SidebarData";

const Sidebar = ({account}) => {
    const [language, setLanguage] = useState(false);
    return (
        <div className="sidebar">
            <h2>FLIP</h2>
            <center><a className="switch" href="#">switch to FLIP Class</a></center>
            <ul className="sidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li className="row" key={key} onClick={() => {window.location.pathname = val.link}}>
                            <div className="icon">{val.icon}</div>
                            <div className="title">{val.title}</div>
                        </li>
                    );
                })}
                <center><div className="language">
                    <div className={language ? "languageSelected" : "languageXSelected"}>
                        <div onClick={() => {
                            setLanguage(true);
                        }}>Kor</div>
                    </div>
                    <div className={language ? "languageXSelected" : "languageSelected"}>
                        <div onClick={() => {
                            setLanguage(false);
                        }}>Eng</div>
                    </div>
                </div></center>
                <center><div className="account">
                    <div className="myCircle">{account.initial}</div><div>{account.name}</div>
                </div></center>
            </ul>
        </div>
    );
};

export default Sidebar;