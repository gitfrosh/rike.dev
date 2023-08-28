import React from "react";
import Layout from "../components/layout";
import Events from "../components/events/events";
import Image from "next/legacy/image";
import { fetchEvents } from "../util/cms";
import workshops from "../images/workshops.png";
import Head from "next/head";

const Courses = ({ events }) => {
    return (
        <>
            <Head>
                <title>rike.dev - Web development courses, workshops & talks</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="canonical" href={"https://rike.dev/courses/"} />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="Courses and workshops about web development, web3, and blockchain."
                />
            </Head>
            <Layout>
                <section id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div id="about" className="block">
                            <h2>
                                <span className="line">Courses</span>,<br /> Workshops & Talks
                            </h2>

                            <div className="row bg-half-ring-left gutter-width-lg">
                                <div className="col align-self-top pl-0">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <Image
                                                src={workshops}
                                                className="img-fluid"
                                                alt="Workshops & Kurse"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col align-self-center description">
                                    <h4>
                                        Web development & Web3
                                    </h4>

                                    <p>
                                        I'm hosting workshops, talks, and
                                        extensive training in German or English at irregular
                                        intervals, and cover topics such as Web development, React, Frontend, Web3, and Blockchain.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />

                        <Events lang={"en"} events={events} />
                    </div>
                </section>
                {/* <section>
                    <center>
                        <p style={{ marginTop: "3rem" }} className="p-small">
                            * This includes not only women, but also inter, nonbinary, trans
                            und agender persons.
                        </p>
                    </center>
                </section> */}
            </Layout>
        </>
    );
};

export default Courses;

export async function getStaticProps() {
    const res = await fetchEvents();
    const events = await res.map((p) => {
        return p.fields;
    });
    return {
        props: {
            events,
        },
    };
}
