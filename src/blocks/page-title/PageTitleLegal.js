import React from 'react';

const PageTitleLegal = ({ language }) => {
    return (
        <section id="page-title">
            <div className="wrapper">
                <div className="title position-relative">
                    <h1 className="small">{language === 'en' ? "Legal Notice" : 'Impressum'}</h1>
                </div>
            </div>
        </section>
    );
};

export default PageTitleLegal;
