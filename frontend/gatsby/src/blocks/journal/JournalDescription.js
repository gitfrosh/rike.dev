import React from 'react';

const JournalDescription = ({ text }) => {
    return (
        <div className="description">
            <p className="text"
                dangerouslySetInnerHTML={{
                    __html: `${text}`,
                }}
            />
        </div>
    );
};

export default JournalDescription;
