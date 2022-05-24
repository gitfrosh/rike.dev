import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import FooterMenu from "../../blocks/footer/FooterMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import { getBrowserLanguage } from "../../util/helpers";

const MenuModal = () => {
    const location = useRouter();
    const [lang] = useState(getBrowserLanguage());

    const [showModal, setShowModal] = useState(false);

    const open = () => {
        setShowModal(true);
    };

    const close = () => {
        setShowModal(false);
    };

    return (
        <div className="menu-toggle align-self-center no-space">
            <button
                onClick={() => open()}
                type="button"
                className="btn btn-link border-0 p-0 transform-scale-h"
                data-toggle="modal"
                data-target="#menu-modal"
            >
                <span className="align-middle">Menu</span>
                <i className="icon-c icon-menu" />
            </button>

            <Modal
                className="modal modal-adv-1 modal-body-pr fade"
                id="menu-modal"
                show={showModal}
                onHide={() => close()}
                backdrop={false}
                aria-labelledby="menu-modal"
                aria-hidden="true"
                dialogClassName="modal-full wrapper h-100"
            >
                <Modal.Header>
                    <Link
                        title="Logo"
                        className="logo logo-secondary transform-scale-h"
                        href={"/"}
                    >
                        rike.dev
                    </Link>

                    <button
                        onClick={() => close()}
                        type="button"
                        className="close btn btn-link border-0 transform-scale-h"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">
                            <span className="align-middle">Close</span>
                            <i className="icon-c icon-close" />
                        </span>
                    </button>
                </Modal.Header>

                <Modal.Body className="d-flex justify-content-between">
                    <div className="align-self-end">
                        <FooterMenu />
                    </div>

                    <div className="align-self-center animated fadeinright w-100">
                        <nav className="menu-primary">
                            <ul className="clearfix list-unstyled">
                                <li
                                    className={
                                        "menu-item" +
                                        (location?.pathname === "/" ? " current-menu-item" : "")
                                    }
                                >
                                    <Link title="Home" href={"/"}>
                                        Home
                                    </Link>
                                </li>

                                <li
                                    className={
                                        "menu-item" +
                                        (location?.pathname === "/kurse" ||
                                            location?.pathname === "/courses"
                                            ? " current-menu-item"
                                            : "")
                                    }
                                >
                                    <Link
                                        title={lang === "de" ? "Kurse" : "Courses"}
                                        href={lang === "de" ? "/kurse" : "/courses"}
                                    >
                                        {lang === "de" ? "Kurse" : "Courses"}
                                    </Link>
                                </li>
                                <li
                                    className={
                                        "menu-item" +
                                        (location?.pathname === "/web3" ? " current-menu-item" : "")
                                    }
                                >
                                    <Link title="Web3" href={"/web3"}>
                                        Web3
                                    </Link>
                                </li>

                                <li
                                    className={
                                        "menu-item" +
                                        (location?.pathname === "/contact"
                                            ? " current-menu-item"
                                            : "")
                                    }
                                >
                                    <Link title="Contacts" href={"/contact"}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MenuModal;
