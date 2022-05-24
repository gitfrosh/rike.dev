import React from 'react';
import ReactMarkdown from 'react-markdown';

const JournalDescription = ({ text }) => {
    return (
        <div className="description">
            <div className="text"
            >
                <ReactMarkdown children={text} />
            </div>
        </div>
    );
};

export default JournalDescription;
