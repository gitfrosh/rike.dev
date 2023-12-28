import React, { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects([
            {
                id: "8",
                title: "Swarm IQ | Charge & Load",
                description:
                    "Keep your electric vehicles optimally charged and ready for action at all times with IAV’s software solution.",
                url: "https://swarmiq.io/",
            },
            {
                id: "2",
                title: "The Lord of the Rings API",
                description:
                    "is the biggest JSON based data source providing information about the trilogy.",
                url: "https://the-one-api.dev/",
            },
            {
                id: "1",
                title: "Web3 & beyond",
                description:
                    "A resources collection for Web3 and Blockchain development.",
                url: "https://rike.dev/web3",
            },
            {
                id: "3",
                title: "ColorHueState",
                description:
                    "is an on-chain image machine rendering the heartbeat of the Ethereum blockchain.",
                url: "https://colorhuestate.xyz/",
            },
            {
                id: "4",
                title: "SHIFT",
                description:
                    "is a performance-based media artwork transcoding work wear into digital wearables.",
                url: "https://shiftwork.cc",
            },

            ,
            {
                id: "6",
                title: "wom3n.dao",
                description:
                    "I'm supporting the female founders circle as a tech lead in all DAO-specific questions.",
                url: "https://wom3n.io",
            },
            {
                id: "7",
                title: "SystAIn3r",
                description:
                    "I'm fellow of this network of pioneering women in AI, Web3, and sustainability.",
                url: "https://www.systain3r.com/",
            },
        ]);
    }, []);
    return (
        <div id="awards" className="block spacer p-top-xl">
            <div className="wrapper">
                <h2>
                    My favourite <span className="line">Projects</span> and{" "}
                    <span className="line">Collabs</span>
                </h2>
            </div>
            <div className="row gutter-width-lg with-pb-lg">
                <div className="wrapper">
                    <div className="row center gutter-width-lg with-pb-lg">
                        {projects &&
                            projects.map((item, key) => {
                                return (
                                    <div
                                        key={key}
                                        className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                                    >
                                        <div className="card">
                                            <div
                                                style={{ border: item.featured && "5px solid #ff1e52" }}
                                                className="card-body p-large"
                                            >
                                                <h4>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={item.url}
                                                    >
                                                        {item.title}
                                                    </a>
                                                </h4>
                                                <p className="mt-0">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
