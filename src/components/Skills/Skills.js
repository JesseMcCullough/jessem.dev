import { useRef, useState, createRef, useLayoutEffect, useEffect } from "react";
import reactLogo from "../../images/icons/react-logo.png";
import cssLogo from "../../images/icons/css-logo.png";
import phpLogo from "../../images/icons/php-logo.png";
import htmlLogo from "../../images/icons/html-logo.png";
import javascriptLogo from "../../images/icons/javascript-logo.png";
import mysqlLogo from "../../images/icons/mysql-logo.png";
import javaLogo from "../../images/icons/java-logo.png";
import styles from "./Skills.module.css";

export default function Skills() {
    const [logos, setLogos] = useState([
        { id: 1, logo: javascriptLogo },
        { id: 2, logo: "empty" },
        { id: 3, logo: htmlLogo },
        { id: 4, logo: cssLogo },
        { id: 5, logo: mysqlLogo },
        { id: 6, logo: javaLogo },
        { id: 7, logo: phpLogo },
        { id: 8, logo: reactLogo },
    ]);
    const [isRunning, setIsRunning] = useState(false);
    const boxRefs = useRef([]);
    const containerRefs = useRef([]);

    boxRefs.current = logos.map(
        (_, index) => boxRefs.current[index] ?? createRef()
    );

    containerRefs.current = logos.map(
        (_, index) => containerRefs.current[index] ?? createRef()
    );

    useLayoutEffect(() => {
        removeFakeBoxes();
        resetBoxesPositions();
    }, [logos]);

    useEffect(() => {
        setTimeout(() => {
            for (let x = 0; x < boxRefs.current.length; x++) {
                const box = boxRefs.current[x].current;
                box.classList.remove(styles["stop-transitions"]);
            }
        }, 20); // fixes box growing out of bounds.
    }, [logos]);

    useInterval(moveBoxes, (1.5 * 2 + 0) * 1000); // (transition-duration * 2 + active-duration) * 1000

    function removeFakeBoxes() {
        for (let x = 0; x < containerRefs.current.length; x++) {
            const container = containerRefs.current[x].current;
            container.classList.remove(styles["fake-box"]);
            container.style.backgroundImage = "";
        }
    }

    function resetBoxesPositions() {
        for (let x = 0; x < boxRefs.current.length; x++) {
            const box = boxRefs.current[x].current;
            box.classList.add(styles["stop-transitions"]);
            box.style.top = 0;
            box.style.left = 0;
        }
    }

    function moveBoxes() {
        if (isRunning) {
            return;
        }
        setIsRunning(true);

        // Move Box 0 to Box 1 right.
        moveBox(0, 1, "right");
        // Resize Box 0 container.
        containerRefs.current[0].current.classList.remove(styles.large);

        // Move Box 1 to Box 2 down.
        moveBox(1, 2, "down");

        // Move Box 2 to Box 3 down.
        moveBox(2, 3, "down");

        // Move Box 3 to Box 4 down.
        moveBox(3, 4, "down");

        // Move Box 4 to Box 5 left.
        moveBox(4, 5, "left");

        // Move Box 5 to Box 6 left.
        moveBox(5, 6, "left");

        // Move Box 6 to Box 7 left.
        moveBox(6, 7, "left");

        // Move Box 7 to Box 0 up.
        moveBox(7, 1, "up");

        setTimeout(() => {
            addFakeBoxes();
            shiftLogos();
            setIsRunning(false);
        }, 1.5 * 1000);
    }

    function shiftLogos() {
        const newLogos = [...logos];

        const last = newLogos.pop();
        newLogos.unshift(last);

        setLogos(newLogos);
    }

    function moveBox(fromBox, toBox, direction) {
        const box1 = boxRefs.current[fromBox].current;
        const box2 = boxRefs.current[toBox].current;

        const box1Rect = box1.getBoundingClientRect();
        const box2Rect = box2.getBoundingClientRect();

        // NOTE: Commenting out shiftLogos will make the elements "reset" in motion cause distance from box 1 to box 2 is literally 0, which is the starting position.
        if (direction === "right") {
            let distance = box2Rect.left - box1Rect.left;
            box1.style.left = distance + "px";
        }

        if (direction === "left") {
            let distance = -(box1Rect.left - box2Rect.left);
            box1.style.left = distance + "px";
        }

        if (direction === "up") {
            let distance = box2Rect.top - box1Rect.top;
            box1.style.top = distance + "px";
        }

        if (direction === "down") {
            let distance = -(box1Rect.top - box2Rect.top);
            box1.style.top = distance + "px";
        }
    }

    function addFakeBoxes() {
        for (let x = 0; x < containerRefs.current.length; x++) {
            const container = containerRefs.current[x].current;
            container.classList.add(styles["fake-box"]);
            container.style.backgroundImage = container.dataset.backgroundImage;
        }
    }

    return (
        <section className={styles.skills} id="#skills">
            <div className={`${styles.container} container`}>
                <div className={styles.text}>
                    <h2>
                        I know <span className="highlight">JavaScript</span>,{" "}
                        <span className="highlight">React.js</span>,{" "}
                        <span className="highlight">PHP</span>,{" "}
                        <span className="highlight">Java</span>, and more. Plus,
                        I'm <span className="highlight">always learning</span>{" "}
                        new things.
                    </h2>
                </div>
                <div className={styles.grid}>
                    {logos.map((logo, index) => {
                        const classes =
                            index === 0
                                ? `${styles.active} ${styles.large}`
                                : "";

                        // there's a more mathematical way to do this, but this is an easy fix for correcting the grid display.
                        if (index === 4) {
                            index = 7;
                        } else if (index === 5) {
                            index = 6;
                        } else if (index === 6) {
                            index = 5;
                        } else if (index === 7) {
                            index = 4;
                        }

                        let containerIndex = index - 1;
                        if (containerIndex < 0) {
                            containerIndex = logos.length - 1;
                        }

                        return (
                            <div
                                key={logo.id}
                                className={classes}
                                ref={containerRefs.current[index]}
                                data-background-image={`url(${logos[containerIndex].logo})`}
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${logos[index].logo})`,
                                    }}
                                    ref={boxRefs.current[index]}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}
