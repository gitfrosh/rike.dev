import React from 'react';

const dataFooterMenu = [
    {
        "id": "1",
        "title": "Github",
        "link": "https://www.github.com/gitfrosh/"
    },
    {
        "id": "2",
        "title": "Instagram",
        "link": "https://www.instagram.com/ueberdiespree/"
    },
    {
        "id": "3",
        "title": "Xing",
        "link": "https://www.xing.de/ulrike_exner4"
    }
]

const FooterMenu = () => {
    return (
        <nav className="menu-secondary">
            <ul className="clearfix list-unstyled">
                { dataFooterMenu && dataFooterMenu.map( ( item, key ) => {
                    return (
                        <li key={ key }>
                            <a
                                title={ item.title }
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href={ item.link }
                            >
                                { item.title }
                            </a>
                        </li>
                    );
                } ) }
            </ul>
        </nav>
    );
};

export default FooterMenu;
