import React from 'react';
import "../Learning.css";

function HelloHeader(props) {
    return (
        <h1>Hello, {props.account.name}!</h1>
    );
}

export default HelloHeader;