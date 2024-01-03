import { useState } from "react";
import styles from "./About.module.css";
import jessemdev1 from "../../images/projects/jessemdev/jessemdev-1.jpg";

export default function About() {
    const [isFullyVisible, setIsFullyVisible] = useState(false);
    const sectionClasses = isFullyVisible
        ? styles.about
        : `${styles.about} ${styles.shorten}`;

    function onClick() {
        if (isFullyVisible) {
            return;
        }

        setIsFullyVisible(true);
    }

    return (
        <section className={sectionClasses}>
            <div className={`${styles.container} container`}>
                {!isFullyVisible && (
                    <div className={styles.shortener}>
                        <button
                            className={styles.button}
                            type="button"
                            onClick={onClick}
                        >
                            Read more about me
                        </button>
                    </div>
                )}
                <h2>
                    Here's a little bit{" "}
                    <span className="highlight">about me</span>.
                </h2>
                <div className={styles.entries}>
                    <div className={styles.entry}>
                        <div className={styles.box}>
                            <h3>I redesigned my portfolio</h3>
                            <img src={jessemdev1} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris pulvinar finibus tempor.
                                Fusce venenatis mi eget purus porta tempus.
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce vitae lectus sed enim finibus
                                ultrices in a dolor. Maecenas pharetra neque
                                erat, nec gravida elit volutpat ac. Duis non
                                diam tempor, pulvinar nunc sit amet, cursus
                                turpis. Donec mattis nulla nisl, quis tristique
                                erat consectetur sed.
                            </p>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.line}></div>
                            <div className={styles.date}>
                                <span className={styles.month}>Dec</span>
                                <span className={styles.year}>2023</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.entry}>
                        <div className={styles.box}>
                            <h3>I redesigned my portfolio</h3>
                            <img src={jessemdev1} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris pulvinar finibus tempor.
                                Fusce venenatis mi eget purus porta tempus.
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce vitae lectus sed enim finibus
                                ultrices in a dolor. Maecenas pharetra neque
                                erat, nec gravida elit volutpat ac. Duis non
                                diam tempor, pulvinar nunc sit amet, cursus
                                turpis. Donec mattis nulla nisl, quis tristique
                                erat consectetur sed.
                            </p>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.line}></div>
                            <div className={styles.date}>
                                <span className={styles.month}>Dec</span>
                                <span className={styles.year}>2023</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.entry}>
                        <div className={styles.box}>
                            <h3>I redesigned my portfolio</h3>
                            <img src={jessemdev1} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris pulvinar finibus tempor.
                                Fusce venenatis mi eget purus porta tempus.
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce vitae lectus sed enim finibus
                                ultrices in a dolor. Maecenas pharetra neque
                                erat, nec gravida elit volutpat ac. Duis non
                                diam tempor, pulvinar nunc sit amet, cursus
                                turpis. Donec mattis nulla nisl, quis tristique
                                erat consectetur sed.
                            </p>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.line}></div>
                            <div className={styles.date}>
                                <span className={styles.month}>Dec</span>
                                <span className={styles.year}>2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
