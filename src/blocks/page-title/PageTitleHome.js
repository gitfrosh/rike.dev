import React, { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import Fader from 'react-fader'
import { Link } from "gatsby";                                                                                                                                                                                                                                         
let scroll = Scroll.animateScroll;
import Image from 'gatsby-image';

const PageTitleHome = ({ image }) => {
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
                            <p style={{ fontSize: "2rem"}}  className="p-large w-75">I'm ulrike (or just <b>rike</b>) and I am a software developer and lecturer from
                            Berlin, Germany with a focus on <b>web technologies</b>.
                        <br />I love to inspire women to get into coding and <a href="/kurse">offer online web development courses in German.</a></p>
        
                        
                        </div>
                    </div>

                    <div className="col col-2 d-none d-sm-block">
                        <div className="d-flex">
                            <div className="align-self-start w-100">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <Image alt="Ulrike Exner" fluid={image} className="img-fluid" />
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
