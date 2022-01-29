import React, { Component } from 'react';
import {SidebarData} from "./SidebarData";

class Sidebar extends Component {
    render() {
        this.state = {
            isActive: false
        };
        console.log(this.state.isActive);
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
                                <td className={this.state.isActive ? "LanguageSelected" : "LanguageXSelected"}>
                                    <div onClick={() => {
                                        this.setState({isActive: true});
                                    }}>Kor</div>
                                </td>
                                <td className={this.state.isActive ? "LanguageXSelected" : "LanguageSelected"}>
                                    <div onClick={() => {
                                        this.setState({isActive: false});
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
}

export default Sidebar;