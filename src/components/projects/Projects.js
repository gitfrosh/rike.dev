import React, { useEffect, useState } from 'react';   
import { getBrowserLanguage } from '../../util/helpers';

const Projects = () => {
    const [lang] = useState(getBrowserLanguage())
    const [projects, setProjects] = useState([])
    useEffect(() => {
        if (lang === "de") {
            setProjects([{
                "id": "1",
                "title": "The Lord of the Rings API",
                "description": "is the biggest JSON based data source providing information about the trilogy.",
                "url": "https://the-one-api.dev/"
            },
            {
                "id": "2",
                "title": "Dein Weg in die Web-Entwicklung",
                "description": "Online-Kurse für Anfängerinnen und Fortgeschrittene. Women only!",
                "url": "https://rike.dev/kurse",
                "featured": true,
            },
            {
                "id": "4",
                "title": ".. more",
                "description": "on Github!",
                "url": "https://github.com/gitfrosh/"
            }])

        } else {
            setProjects([{
                "id": "1",
                "title": "The Lord of the Rings API",
                "description": "is the biggest JSON based data source providing information about the trilogy.",
                "url": "https://the-one-api.dev/"
            },
            {
                "id": "2",
                "title": "minako",
                "description": "is a super lightweight headless, API-first, flat-file cms written in Node.js/Next.js made for blogs and other small content-driven frontends.",
                "url": "https://github.com/gitfrosh/minako"
            },
            {
                "id": "4",
                "title": ".. more",
                "description": "on Github!",
                "url": "https://github.com/gitfrosh/"
            }])
        }
    }, [lang])
    return (
        <div id="awards" className="block spacer p-top-xl">
            <div className="wrapper">

                <h2>
                    My favourite <span className="line">Projects</span>
                </h2>
            </div>
            <div className="row gutter-width-lg with-pb-lg">
                <div className="wrapper">
                    <div className="row gutter-width-lg with-pb-lg">
                        {projects && projects.map((item, key) => {
                            return (
                                <div key={key} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card">
                                        <div style={{ border: item.featured && '5px solid #ff1e52' }} className="card-body p-large">
                                            <h4><a href={item.url}>{item.title}</a></h4>
                                            <p className="mt-0">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div></div></div>
        </div>
    );
};

export default Projects;
