import React, { useState } from 'react';
import {SidebarData} from "./SidebarData";

function Sidebar(props) {
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
                <center><table className="language">
                    <tbody>
                        <tr>
                            <td className={language ? "languageSelected" : "languageXSelected"}>
                                <div onClick={() => {
                                    setLanguage(true);
                                }}>Kor</div>
                            </td>
                            <td className={language ? "languageXSelected" : "languageSelected"}>
                                <div onClick={() => {
                                    setLanguage(false);
                                }}>Eng</div>
                            </td>
                        </tr>
                    </tbody>
                </table></center>
                <center><div className="account">
                    <div className="myCircle">NH</div><div>Nahee</div>
                </div></center>
            </ul>
        </div>
    );
}

export default Sidebar;