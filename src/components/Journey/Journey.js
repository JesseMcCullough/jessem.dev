import { useState, useRef } from "react";
import RelationalTimeline from "../RelationalTimeline/RelationalTimeline";
import styles from "./Journey.module.css";
import journeyData from "../../journeyData";

export default function Journey() {
    const [isFullyVisible, setIsFullyVisible] = useState(false);
    const [events, setEvents] = useState(journeyData);
    const isFiltered = useRef(false);
    const sectionClasses =
        isFullyVisible || journeyData.length < 4
            ? styles.journey
            : `${styles.journey} ${styles.shorten}`;

    function onClick() {
        if (isFullyVisible) {
            return;
        }

        setIsFullyVisible(true);
    }

    function onClickFilter() {
        if (isFiltered.current) {
            setEvents(journeyData);
            isFiltered.current = false;
            return;
        }

        setEvents(journeyData.filter((event) => event.highlight));
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
                            Read more about my journey
                        </button>
                    </div>
                )}
                <h2>
                    My unique journey in <br />
                    <span className="highlight">
                        becoming a software engineer
                    </span>
                    .
                </h2>

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
