import React, { useState } from 'react';
import "../Learning.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function FlipNote(props) {
    const [language, setLanguage] = useState("English");
    return (
        <div>
            <div className="flipNote">
                <div>
                    <h3>This Week's FLIP notes</h3>
                </div>
                <div className="languageSelect">
                    <div className="arrowCircle" onClick={() => {
                        setLanguage("Korean");
                    }}><ChevronLeftIcon/></div>
                    {language}
                    <div className="arrowCircle" onClick={() => {
                        setLanguage("English");
                    }}><ChevronRightIcon/></div>
                </div>
            </div>
            <p className="greyContents">Check out what other people are learning in their langauge exchange!</p>
            <div class="itemsContainer">
                <div class="item"><div className="circle">OS</div> clueless</div>
                <div class="item"><div className="circle">SJ</div> obviously</div>
                <div class="item"><div className="circle">CH</div> I don't think so</div>
                <div class="item"><div className="circle">HJ</div> as opposed to</div>
                <div class="item"><div className="circle">GH</div> commitment</div>
                <div class="item"><div className="circle">SJ</div> compatible</div>
                <div class="item"><div className="circle">YJ</div> looking forward to it</div>
                <div class="item"><div className="circle">NH</div> reel it in</div>
                <div class="item"><div className="circle">EF</div> agree to disagree</div>
                <div class="item"><div className="circle">RG</div> surprise surprise</div>
                <div class="item"><div className="circle">ML</div> excuse me</div>
            </div>
        </div>
    );
}

export default FlipNote;