import { useState, useRef, useEffect } from "react";
import RelationalTimeline from "../RelationalTimeline/RelationalTimeline";
import styles from "./Journey.module.css";
import journeyData from "../../journeyData";
import { useStrapi, getStrapiUrl } from "../../hooks/useStrapi";
import Markdown from "react-markdown";

export default function Journey() {
    const { loading, error, data } = useStrapi("/home?populate=journey");
    const strapiEvents = useStrapi("/events?populate=*");
    const [isFullyVisible, setIsFullyVisible] = useState(false);
    const [events, setEvents] = useState([]);
    const isFiltered = useRef(false);
    const initialEvents = useRef([]);
    const sectionClasses =
        isFullyVisible || events.length < 4
            ? styles.journey
            : `${styles.journey} ${styles.shorten}`;

    useEffect(() => {
        const rawEvents = strapiEvents.data;
        if (rawEvents === null) {
            return;
        }

        console.log(rawEvents);
        const formattedEvents = [];
        for (let event of rawEvents.data) {
            const eventId = event.id;
            const eventTitle = event.attributes.title;
            const eventDate = event.attributes.date;
            const eventHighlight = event.attributes.highlight;
            const eventChildren = [];
            const eventImages = [];

            for (let eventChild of event.attributes.children.data) {
                const eventChildId = eventChild.id;
                eventChildren.push(eventChildId);
            }

            if (event.attributes.images.data) {
                for (let eventImage of event.attributes.images.data) {
                    eventImages.push(getStrapiUrl(eventImage.attributes.url));
                }
            }

            formattedEvents.push({
                id: eventId,
                title: eventTitle,
                date: eventDate,
                highlight: eventHighlight,
                children: eventChildren,
                images: eventImages,
            });
        }

        if (initialEvents.current.length === 0) {
            initialEvents.current = formattedEvents;
        }

        setEvents(formattedEvents);
    }, [strapiEvents.data]);

    if (loading || strapiEvents.loading) return;
    if (error || strapiEvents.error) return;

    const journey = data.data.attributes.journey;
    const title = journey.title;
    const buttonText = journey.buttonText;

    function onClick() {
        if (isFullyVisible) {
            return;
        }

        setIsFullyVisible(true);
    }

    function onClickFilter() {
        if (isFiltered.current) {
            setEvents(initialEvents.current);
            isFiltered.current = false;
            return;
        }

        setEvents((previousEvents) =>
            previousEvents.filter((event) => event.highlight)
        );
        isFiltered.current = true;
    }

    return (
        <section className={sectionClasses} id="journey">
            <div className={`${styles.container} container`}>
                {!isFullyVisible && journeyData.length > 4 && (
                    <div className={styles.shortener}>
                        <button
                            className={styles.button}
                            type="button"
                            onClick={onClick}
                        >
                            {buttonText}
                        </button>
                    </div>
                )}
                <Markdown components={{ p: "h2" }}>{title}</Markdown>

                <RelationalTimeline
                    events={events}
                    lineWidth={3}
                    onClickFilterHighlights={onClickFilter}
                    isFiltered={isFiltered.current}
                />
            </div>
        </section>
    );
}
