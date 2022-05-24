import React from "react";
import Link from "next/link";

const Contacts = () => {
    return (
        <section id="contact" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="text-center">
                    <h2 className="mb-0 after">
                        Want to get in <span className="line">contact</span>?
                    </h2>

                    <div className="block spacer p-top-sm">
                        <Link title="Contact" href={"/contact"}>
                            <button className="btn btn-dark btn-bold transform-scale-h border-0">
                                Contact                        </button>

                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
