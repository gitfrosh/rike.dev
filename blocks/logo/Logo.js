import React from 'react';
import Link from 'next/link'


const Logo = () => {
    return (
        <div className="logo">
            <button type="button" className="btn btn-link border-0 p-0 transform-scale-h">


                <Link href={"/"}>rike.dev
                </Link>
            </button>

        </div>
    );
};

export default Logo;
