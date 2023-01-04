import React from "react";

const Consult = () => {
    return (
        <section id="contact" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="text-center">
                    <h2 className="mb-0 after">
                        Need help with your projects?
                    </h2>
                    <p>I'm offering 1:1 consulting sessions. Book a slot!</p>
                    <div className="block spacer p-top-sm">
                        <a target={"_blank"} title="Consulting" href={"https://cal.com/rikecodes"}>
                            <button className="btn btn-dark btn-bold transform-scale-h border-0">
                                Consult me                        </button>

                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consult;



