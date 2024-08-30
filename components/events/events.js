import React, { useState, useMemo } from "react";
import Link from "next/link";
import LoadMoreButtonEvents from "../loadmore/LoadMoreEvents";

const Events = ({ lang, events }) => {
    const [isGermanSelected, toggleGerman] = useState(true);
    const [isEnglishSelected, toggleEnglish] = useState(true);
    const [eventsAmount, increaseEventsAmount] = useState(6)

    const filteredEvents = useMemo(
        () =>
            events.filter((item) => {
                if (
                    (isGermanSelected && item.language === "de") ||
                    (isEnglishSelected && item.language === "en")
                ) {
                    return item;
                }
            }),
        [events, isGermanSelected, isEnglishSelected]
    );


    const futureEvents = useMemo(() => {
        return filteredEvents.filter((event) => {
            const isFuture = Date.parse(event.date) - Date.parse(new Date()) > 0;
            event.isPast = false;

            if (isFuture) return event;
        });
    }, [filteredEvents]);

    const pastEvents = useMemo(() => {
        const events = filteredEvents.filter((event) => {
            const isPast = Date.parse(event.date) - Date.parse(new Date()) < 0;
            event.isPast = true;
            if (isPast) return event;
        });
        return events.slice(-eventsAmount)
    }, [filteredEvents, eventsAmount]);


    const Item = ({ item, isFuture }) => {
        if (!item) return null;
        const date = new Date(item.date).toLocaleDateString(
            lang == "de" ? "de-DE" : "en-US"
        );
        const dateEnd = !item.dateEnd
            ? ""
            : new Date(item.dateEnd).toLocaleDateString(
                lang == "de" ? "de-DE" : "en-US"
            );
        return (
            <div
                style={{ marginBottom: "3rem" }}
                key={item.id}
                className="example col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
            >
                <div className="card border-0">
                    <div className="card-body p-0">
                        <h5>
                            <span className="line">{item.type}</span>{" "}
                            {item.link ? (
                                <Link
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={`${item.link}/`}
                                >
                                    {lang === "de"
                                        ? item.titleDe
                                            ? item.titleDe
                                            : item.titleEn
                                        : item.titleEn}
                                </Link>
                            ) : lang === "de" ? (
                                item.titleDe ? (
                                    item.titleDe
                                ) : (
                                    item.titleEn
                                )
                            ) : (
                                item.titleEn
                            )}{" "}
                            (
                            {item.language === "de"
                                ? lang === "de"
                                    ? "Deutsch"
                                    : "German"
                                : lang === "de"
                                    ? "Englisch"
                                    : "English"}
                            ){" "}
                        </h5>

                        <p style={{ marginTop: "-1rem" }} className="p-small">
                            <span className="text-secondary bold"> {item.event} </span>{" "}
                            {dateEnd ? `${date}-${dateEnd}` : date}{" "}
                            {item.slides && (
                                <span>
                                    <a target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }} href={item.slides}>
                                        <button className="btn btn-xs has-text-color has-white-color has-background has-gray-background-color">
                                            Slides
                                        </button>
                                    </a>
                                </span>
                            )}{" "}
                            {item.replay && (
                                <span>
                                    <button className="btn btn-xs has-text-color has-white-color has-background has-gray-background-color">
                                        <a target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }} href={item.replay}>
                                            Replay
                                        </a>
                                    </button>
                                </span>
                            )}{' '}
                            {isFuture &&
                                (!item.registrationOpen ? (
                                    <span
                                        style={{ color: "#7c989a" }}
                                        className="has-background has-gray-light-background-color"
                                    >
                                        &#10000;
                                        {lang === "de"
                                            ? "Anmeldung bald offen"
                                            : "Registration opening soon"}
                                    </span>
                                ) : (
                                    <Link passHref style={{ color: "#fff" }} href={item.link}>
                                        <button className="btn btn-xs has-text-color has-white-color has-background has-red-background-color">
                                            {lang === "de" ? "Jetzt anmelden!" : "Sign up now!"}
                                        </button>
                                    </Link>
                                ))}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div id="blog" className="bg-gray-light block spacer p-top-lg">
            <div className="wrapper">
                <h2 className="text-right">
                    <button
                        onClick={() => toggleGerman(!isGermanSelected)}
                        type="button"
                        className="btn btn-link border-0 p-0 transform-scale-h"
                    >
                        <span className={isGermanSelected ? "underline" : undefined}>
                            de
                        </span>
                    </button>{" "}
                    { }
                    <button
                        onClick={() => toggleEnglish(!isEnglishSelected)}
                        style={{ marginRight: "2rem" }}
                        type="button"
                        className="btn btn-link border-0 p-0 transform-scale-h"
                    >
                        <span className={isEnglishSelected ? "underline" : undefined}>
                            en
                        </span>
                    </button>
                    <span className="line">Events</span>
                </h2>
            </div>
            <div className="ptb-blog">
                <div className="wrapper">
                    <h4>Upcoming</h4>
                    <br />
                    {!futureEvents.length && (
                        <div className="wrapper">
                            <div className="ptb-blog text-center">
                                <span>No items.</span>
                            </div>
                        </div>
                    )}
                    {futureEvents.map((item, i) => (
                        <Item key={i} isFuture={true} item={item} />
                    ))}

                    <h4>{lang === "de" ? "Vergangene" : "Previous"}</h4>
                    <br />

                    {!pastEvents.length && (
                        <div className="wrapper">
                            <div className="ptb-blog text-center">
                                <span>No items.</span>
                            </div>
                        </div>
                    )}
                    {pastEvents && pastEvents.reverse().map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                    <div className="text-center">
                        <LoadMoreButtonEvents events={events} eventsAmount={eventsAmount} increaseEventsAmount={increaseEventsAmount} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
