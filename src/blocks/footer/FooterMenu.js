import React from 'react';
import { Link } from 'gatsby';

const dataFooterMenu = [
    {
        "id": "0",
        "title": "Instagram",
        "link": "https://www.instagram.com/rike.codes"
    },
    {
        "id": "1",
        "title": "Github",
        "link": "https://www.github.com/gitfrosh/"
    },
    {
        "id": "2",
        "title": "LinkedIn",
        "link": "https://www.linkedin.com/in/ulrike-exner-80aa28205/"
    },
    {
        "id": "3",
        "title": "Xing",
        "link": "https://www.xing.com/profile/Ulrike_Exner4"
    },
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
                } ) } | 
                <li></li>
                <li key="legal">
                          <b>  <Link
                                title="Legal"
                                className="btn btn-link transform-scale-h border-0 p-0"
                                to="/legal"
                            >
                                Legal
                            </Link></b>
                        </li>
            </ul>
        </nav>
    );
};

export default FooterMenu;
