import React, {useEffect, useState} from 'react';
import Logo from '../logo/Logo';
import MenuModal from '../../components/modal/MenuModal';
import { getBrowserLanguage } from '../../util/helpers';

const Header = ({ location }) => {
    const [lang] = useState(getBrowserLanguage())

    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="align-self-center">
                    <Logo />
                </div>
                <MenuModal lang={lang} location={location} />
            </div>
        </header>
    );
};

export default Header;
