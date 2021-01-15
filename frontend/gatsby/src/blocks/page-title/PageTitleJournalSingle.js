import React from 'react';

const PageTitleJournalSingle = ({ text}) => {
    return (
        <section id="page-title">
            <div className="wrapper">
                <div className="title position-relative">
                    <h1 className="small">{text}</h1>
                </div>
            </div>
        </section>
    );
};

export default PageTitleJournalSingle;
