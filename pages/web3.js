import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
import web3 from "../images/web3.png";
import Head from "next/head";

const Web3 = () => {
    return (
        <>
            <Head>
                <title>rike.dev - Web3 development resources</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="canonical" href={"https://rike.dev/web3/"} />
                <meta
                    name="description"
                    content="Resources, links, information about the decentralized web and blockchain development."
                />
            </Head>
            <Layout>
                <section
                    style={{ marginTop: -60 }}
                    id="page-content"
                    className="spacer"
                >
                    <div className="wrapper">
                        <div id="about" className="block">
                            <div className="row bg-half-ring-right gutter-width-lg">
                                <div className="col align-self-top pl-0">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <Image
                                                src={web3}
                                                className="img-fluid"
                                                alt="Workshops & Kurse"
                                            />{" "}
                                        </div>
                                    </div>
                                </div>

                                <div className="col align-self-center description">
                                    <p>
                                        As an engineer or advocate, you have maybe already heard of
                                        Web3 lately. This new version of the World Wide Web is
                                        getting a lot of hype at the moment and promotes the idea of
                                        decentralized protocols, known from blockchain technology.
                                        Below you'll find my notes from months of researching,
                                        building and reading about this space.{" "}
                                        <b>Have fun exploring!</b>
                                        <p style={{ marginTop: "3rem" }} className="p-small">
                                            If you can't see the embedded page, just visit{" "}
                                            <a
                                                href="https://web3-resources.netlify.app/"
                                                target="_blank"
                                            >
                                                this Notion site.
                                            </a>
                                        </p>
                                    </p>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ marginTop: 30 }} id="notion">
                    <iframe src="https://web3-resources.netlify.app/"></iframe>
                </section>
            </Layout>
        </>
    );
};

export default Web3;
