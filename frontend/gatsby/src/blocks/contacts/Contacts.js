import React from 'react';

const Contacts = () => {
    return (
        <section id="contact" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="text-center">
                    <h2 className="mb-0 after">Want to get in  <span className="line">contact</span>?</h2>

                    <div className="block spacer p-top-sm">
                        <a title="Contact" href={"/contact" } className="btn btn-dark btn-bold transform-scale-h border-0">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
