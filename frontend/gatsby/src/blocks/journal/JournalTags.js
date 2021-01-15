import React from 'react';

const JournalTags = ({ text }) => {
    return (
        <div className="tags">
            <p>
            <h2 className="line">{text}</h2>
{/* 
                <span className="line tags-title">Tag:</span>
                {text} */}

            </p>
        </div>
    );
};

export default JournalTags;
