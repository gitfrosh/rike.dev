import React from 'react';
import Link from 'next/link'

const BackToHome = () => {
    return (
        <div className="button align-self-center">
            <Link href="/" title="Back to homepage" className="btn btn-link p-0 border-0 transform-scale-h">Back to homepage</Link>
        </div>
    );
};

export default BackToHome;
