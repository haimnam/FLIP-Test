import React, { useState } from 'react';
import {SidebarData} from "./SidebarData";

function Sidebar(props) {
    const [language, setLanguage] = useState(false);
    return (
        <div className="Sidebar">
            <h2>FLIP</h2>
            <center><a className="Switch" href="#">switch to FLIP Class</a></center>
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li className="row" key={key} onClick={() => {window.location.pathname = val.link}}>
                            <div className="icon">{val.icon}</div>
                            <div className="title">{val.title}</div>
                        </li>
                    );
                })}
                <center><table className="Language">
                    <tbody>
                        <tr>
                            <td className={language ? "LanguageSelected" : "LanguageXSelected"}>
                                <div onClick={() => {
                                    setLanguage(true);
                                }}>Kor</div>
                            </td>
                            <td className={language ? "LanguageXSelected" : "LanguageSelected"}>
                                <div onClick={() => {
                                    setLanguage(false);
                                }}>Eng</div>
                            </td>
                        </tr>
                    </tbody>
                </table></center>
                <center><div className="Account">
                    <div className="MyCircle">NH</div><div>Nahee</div>
                </div></center>
            </ul>
        </div>
    );
}

export default Sidebar;