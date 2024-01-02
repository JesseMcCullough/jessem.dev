import styles from "./About.module.css";
import jessemdev1 from "../../images/projects/jessemdev/jessemdev-1.jpg";

export default function About() {
    return (
        <section className={styles.about}>
            <div className={`${styles.container} container`}>
                <h2>
                    Here's a little bit{" "}
                    <span className="highlight">about me</span>.
                </h2>
                <div className={styles.entry}>
                    <div className={styles.box}>
                        <h3>I redesigned my portfolio</h3>
                        <img src={jessemdev1} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris pulvinar finibus tempor. Fusce
                            venenatis mi eget purus porta tempus. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus.
                            Fusce vitae lectus sed enim finibus ultrices in a
                            dolor. Maecenas pharetra neque erat, nec gravida
                            elit volutpat ac. Duis non diam tempor, pulvinar
                            nunc sit amet, cursus turpis. Donec mattis nulla
                            nisl, quis tristique erat consectetur sed.
                        </p>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.line}></div>
                        <span className={styles.month}>
                            Dec<span className={styles.year}>2023</span>
                        </span>
                    </div>
                </div>
                <div className={styles.entry}>
                    <div className={styles.box}>
                        <h3>I redesigned my portfolio</h3>
                        <img src={jessemdev1} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris pulvinar finibus tempor. Fusce
                            venenatis mi eget purus porta tempus. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus.
                            Fusce vitae lectus sed enim finibus ultrices in a
                            dolor. Maecenas pharetra neque erat, nec gravida
                            elit volutpat ac. Duis non diam tempor, pulvinar
                            nunc sit amet, cursus turpis. Donec mattis nulla
                            nisl, quis tristique erat consectetur sed.
                        </p>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.line}></div>
                        <span className={styles.month}>
                            Dec<span className={styles.year}>2023</span>
                        </span>
                    </div>
                </div>
                <div className={styles.entry}>
                    <div className={styles.box}>
                        <h3>I redesigned my portfolio</h3>
                        <img src={jessemdev1} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris pulvinar finibus tempor. Fusce
                            venenatis mi eget purus porta tempus. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus.
                            Fusce vitae lectus sed enim finibus ultrices in a
                            dolor. Maecenas pharetra neque erat, nec gravida
                            elit volutpat ac. Duis non diam tempor, pulvinar
                            nunc sit amet, cursus turpis. Donec mattis nulla
                            nisl, quis tristique erat consectetur sed.
                        </p>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.line}></div>
                        <span className={styles.month}>
                            Dec<span className={styles.year}>2023</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
