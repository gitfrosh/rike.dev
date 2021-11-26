import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'gatsby'
import { getBrowserLanguage } from '../../util/helpers';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Events = ({ events }) => {
    const [lang] = useState(getBrowserLanguage())
    const [isGermanSelected, toggleGerman] = useState(false)
    const [isEnglishSelected, toggleEnglish] = useState(true)

    useEffect(() => {
        if (lang === "de") {
            toggleGerman(true)
        }
    }, [lang])

    const filteredEvents = useMemo(() => events.filter(item => {
        if ((isGermanSelected && item.node.language === "de") || (isEnglishSelected && item.node.language === "en")) {
            return item
        }
    }), [events, isGermanSelected, isEnglishSelected]);

    const futureEvents = useMemo(() => {
        return filteredEvents.filter(event => {
            const isFuture = Date.parse(event.node.date) - Date.parse(new Date()) > 0;

            if (isFuture) return event;
        })
    }, [filteredEvents])

    const pastEvents = useMemo(() => {
        return filteredEvents.filter(event => {
            const isPast = Date.parse(event.node.date) - Date.parse(new Date()) < 0;

            if (isPast) return event;
        })
    }, [filteredEvents])


    const Item = ({ item }) => {
        const date = new Date(item.node.date).toLocaleDateString(lang == 'de' ? "de-DE" : "en-US")
        const dateEnd = !item.node.dateEnd ? "" : new Date(item.node.dateEnd).toLocaleDateString(lang == 'de' ? "de-DE" : "en-US")

        return (
            <div
                style={{ marginBottom: '3rem' }}
                key={item.node.id}
                className="example col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
            >
                <div className="card border-0">
                    <div className="card-body p-0">
                        <h5>
                            <span className="line">{item.node.type}</span>{' '}
                            {item.node.link ? <a rel="noopener noreferrer"
                                target="_blank" href={`${item.node.link}/`}>
                                {lang === "de" ? item.node.titleDe ? item.node.titleDe : item.node.titleEn : item.node.titleEn}
                            </a> : lang === "de" ? item.node.titleDe ? item.node.titleDe : item.node.titleEn : item.node.titleEn
                            } </h5>

                        <p style={{ marginTop: "-1rem" }} className="p-small">
                            <span className="text-secondary bold"> {item.node.event} </span>  {dateEnd ? `${date}-${dateEnd}` : date} {' '}
                            {item.node.slides && <span><button className="btn btn-xs has-text-color has-white-color has-background has-gray-background-color"><a style={{ color: '#fff' }} href={item.node.slides}>Slides</a></button></span>}{' '}
                            {item.node.replay && <span><button className="btn btn-xs has-text-color has-white-color has-background has-gray-background-color"><a style={{ color: '#fff' }} href={item.node.replay}>Replay</a></button></span>}

                        </p>


                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="blog" className="bg-gray-light block spacer p-top-xl">
            <div className="wrapper">
                <h2 className="text-right">
                    <button
                        onClick={() => toggleGerman(!isGermanSelected)}
                        type="button"
                        className="btn btn-link border-0 p-0 transform-scale-h"
                    >
                        <span className={isGermanSelected ? 'underline' : undefined}>de</span>
                    </button> { }
                    <button
                        onClick={() => toggleEnglish(!isEnglishSelected)}
                        style={{ marginRight: '2rem' }}
                        type="button"
                        className="btn btn-link border-0 p-0 transform-scale-h"
                    >
                        <span className={isEnglishSelected ? 'underline' : undefined}>en</span>

                    </button>

                    <span className="line">Events</span>

                </h2>
            </div>
            <div className="ptb-blog">
                <div className="wrapper">
                    <h4>Upcoming</h4>
                    <br />
                    {!futureEvents.length && <div className="wrapper">
                        <div className="ptb-blog text-center"><span>No items.</span></div></div>}
                    {
                        futureEvents.map((item) => <Item item={item} />)
                    }

                    <h4>{lang === "de" ? "Vergangene" : "Previous"}</h4>
                    <br />

                    {!pastEvents.length && <div className="wrapper">
                        <div className="ptb-blog text-center"><span>No items.</span></div></div>}
                    {
                        pastEvents.map((item) => <Item item={item} />)
                    }


                </div>
            </div>
        </div>
    )
}

export default Events
