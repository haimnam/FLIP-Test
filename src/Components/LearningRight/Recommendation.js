import React from 'react';
import "../Learning.css";

function Recommendation(props) {
    return (
        <div>
            <h3>This Week's Recommendation<span className="collegeLife">{props.recommendation.title}</span></h3>
            <div className="recommendationContents">
                <p>{props.recommendation.contents}</p>
                <p className="greyContents">{props.recommendation.discussion}</p>
            </div>
            <div className="goToDiscussion">Go to this week's discussion topic</div>
        </div>
    );
}

export default Recommendation;