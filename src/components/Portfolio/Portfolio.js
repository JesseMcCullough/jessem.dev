import { useState, useRef, createRef } from "react";
import Project from "./Project/Project";
import styles from "./Portfolio.module.css";
import portfolioData from "../../portfolioData.js";

export default function Portfolio() {
    const [currentProject, setCurrentProject] = useState(0);
    const projectsRef = useRef([]);
    const scrollContainer = useRef();

    projectsRef.current = portfolioData.map(
        (_, index) => projectsRef.current[index] ?? createRef()
    );

    function onClickProject(index) {
        if (currentProject === index) {
            return;
        }

        const previousProject = currentProject;

        setCurrentProject(index);

        const projectWidth = projectsRef.current[0].current.offsetWidth;
        let scrollBy = scrollContainer.current.scrollLeft;

        if (previousProject > index) {
            scrollBy -= projectWidth;
        } else {
            scrollBy += projectWidth;
        }

        scrollContainer.current.scrollTo({
            top: 0,
            left: scrollBy,
            behavior: "smooth",
        });
    }

    return (
        <section className={styles.portfolio} id="portfolio">
            <div className="container">
                <h2>
                    I make{" "}
                    <span className="highlight">data-driven web apps</span>,
                    <br />
                    <span className="highlight">
                        full-stack responsive websites
                    </span>
                    ,
                    <br />
                    and <span className="highlight">REST APIs</span>.
                </h2>

                <div className={styles.grid}>
                    {currentProject > 0 && (
                        <div
                            className={styles["left-arrow"]}
                            onClick={() => {
                                if (currentProject - 1 < 0) {
                                    return;
                                }

                                onClickProject(currentProject - 1);
                            }}
                        >
                            &lt;
                        </div>
                    )}
                    {currentProject < portfolioData.length - 1 && (
                        <div
                            className={styles["right-arrow"]}
                            onClick={() => {
                                if (
                                    currentProject + 1 >=
                                    portfolioData.length
                                ) {
                                    return;
                                }

                                onClickProject(currentProject + 1);
                            }}
                        >
                            &gt;
                        </div>
                    )}
                    <div className={styles.container} ref={scrollContainer}>
                        {portfolioData.map((project, index) => (
                            <Project
                                key={index}
                                name={project.name}
                                technologyImages={project.technologyImages}
                                projectImages={project.projectImages}
                                description={project.description}
                                githubLink={project.githubLink}
                                demoLink={project.demoLink}
                                ref={projectsRef.current[index]}
                                onClick={() => onClickProject(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
