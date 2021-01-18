import React from 'react';
import Logo from '../logo/Logo';
import MenuModal from '../../components/modal/MenuModal';

const Header = ({ location }) => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="align-self-center">
                    <Logo />
                </div>
                <MenuModal location={location} />
            </div>
        </header>
    );
};

export default Header;
