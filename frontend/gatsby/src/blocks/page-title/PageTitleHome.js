import React, { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import img from "../../images/rike_exner.png"
import Fader from 'react-fader'
let scroll = Scroll.animateScroll;

const PageTitleHome = () => {
    const [hello, setHello] = useState("Hallo")

    useEffect(() => {
        setTimeout(function () {
            setHello("やあ")
            setTimeout(function () {
                setHello("Hola")
                setTimeout(function () {
                    setHello("Salut")
                    setTimeout(function () {
                        setHello("Hello")
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 2000);

    }, []);

    const scrollToBottom = () => {
        scroll.scrollToBottom(100, { smooth: true });
    }

    return (
        <section id="page-title" className="block">
            <div className="wrapper">
                <div className="row">
                    <div className="col col-1 position-relative">
                        <div className="title">
                            <Fader fadeInTransitionDuration={1000} fadeOutTransitionDuration={1000}><h1 className="h">{hello}<span className="dot">.</span></h1></Fader>
                            <div className="title-clone">{hello}</div>
                        </div>

                        <div className="spacer p-top-lg">
                            <p className="p-large w-75">I'm ulrike (or just <b>rike</b>) and I am a software developer from
                            Berlin with a focus on <b>web technologies</b> including · JavaScript ·
                            Node.js · HTML5 · CSS3 · React · Vue.js · Redux . GraphQL ·
                            Django · Flask · PostgreSQL · MongoDB and others. I hold a
                            Master's degree in computer science and I have worked as online content manager, librarian and
                            freelance web developer. Annually, I give talks for beginners in
              web development at <a
                                    target="_blank"
                                    className="fancy-link"
                                    href="https://www.informatica-feminale.de/"
                                    rel="noopener noreferrer"
                                >
                                    Informatica Feminale
              </a> in Bremen to inspire more women to get into web development.
              Sometimes I produce audio podcasts for scientific purposes and I
              like <a className="btn-link" onClick={scrollToBottom}>
                                    writing
              </a>
              . If you'd like to connect, do not hesitate to drop a line! <br /></p>
                        </div>
                    </div>

                    <div className="col col-2 d-none d-sm-block">
                        <div className="d-flex">
                            <div className="align-self-start w-100">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={img} alt="Rike Exner" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="align-self-end p-left-scroll">
                                <a className="btn btn-link btn-vertical transform-scale-h border-0 p-0 scroll-to-id d-flex"
                                    onClick={scrollToBottom}>
                                    <span className="vertical-text">
                                        <span>S</span>
                                        <span>c</span>
                                        <span>r</span>
                                        <span>o</span>
                                        <span>l</span>
                                        <span>l</span>
                                    </span>

                                    <span className="align-self-end">
                                        <i className="icon-c icon-arrow-down" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitleHome;
