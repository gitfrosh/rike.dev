import React from 'react';

const JournalDescription = ({ text }) => {
    return (
        <div className="description">
            <div className="text"
                dangerouslySetInnerHTML={{
                    __html: `<div>${text}</div>`,
                }}
            />
        </div>
    );
};

export default JournalDescription;
