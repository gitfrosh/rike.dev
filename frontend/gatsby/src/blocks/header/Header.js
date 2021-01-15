import React from 'react';
import Logo from '../logo/Logo';
import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';

const Header = () => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="align-self-center">
                    <Logo />
                </div>

                <SearchModal />

                <MenuModal />
            </div>
        </header>
    );
};

export default Header;
