import { fromPairs } from 'lodash';
import React from 'react';
import {Link} from 'gatsby'

const BackToHome = () => {
    return (
        <div className="button align-self-center">
            <Link title="Back to homepage" className="btn btn-link p-0 border-0 transform-scale-h" to={"/" }><i className="icon-c icon-arrow-left" />Back to homepage</Link>
        </div>
    );
};

export default BackToHome;
