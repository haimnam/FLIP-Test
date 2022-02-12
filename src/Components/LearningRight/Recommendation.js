import React from 'react';
import "../Learning.css";

const Recommendation = ({recommendation}) => {
    return (
        <div>
            <h3>This Week's Recommendation<span className="collegeLife">{recommendation.title}</span></h3>
            <div className="recommendationContents">
                <p>{recommendation.contents}</p>
                <p className="greyContents">{recommendation.discussion}</p>
            </div>
            <div className="goToDiscussion">Go to this week's discussion topic</div>
        </div>
    );
};

export default Recommendation;