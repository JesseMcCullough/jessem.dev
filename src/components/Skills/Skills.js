import reactLogo from "../../images/icons/react-logo.png";
import cssLogo from "../../images/icons/css-logo.png";
import phpLogo from "../../images/icons/php-logo.png";
import htmlLogo from "../../images/icons/html-logo.png";
import javascriptLogo from "../../images/icons/javascript-logo.png";
import mysqlLogo from "../../images/icons/mysql-logo.png";
import javaLogo from "../../images/icons/java-logo.png";
import styles from "./Skills.module.css";

export default function Skills() {
    const logos = [
        { id: 1, logo: javascriptLogo },
        { id: 2, logo: reactLogo },
        { id: 3, logo: phpLogo },
        { id: 4, logo: javaLogo },
        { id: 5, logo: "empty" },
        { id: 6, logo: mysqlLogo },
        { id: 7, logo: cssLogo },
        { id: 8, logo: htmlLogo },
    ];

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
                <div className={styles["grid-wrapper"]}>
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

                            return (
                                <div key={logo.id} className={classes}>
                                    <div
                                        style={{
                                            backgroundImage: `url(${logos[index].logo})`,
                                        }}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
