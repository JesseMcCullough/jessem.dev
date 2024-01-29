import { useState, useRef, createRef } from "react";
import Project from "./Project/Project";
import styles from "./Portfolio.module.css";
// import portfolioData from "../../portfolioData.js";
import Markdown from "react-markdown";
import { useStrapi, getStrapiUrl } from "../../hooks/useStrapi";

export default function Portfolio() {
    const [currentProject, setCurrentProject] = useState(0);
    const projectsRef = useRef([]);
    const scrollContainer = useRef();
    const { loading, error, data } = useStrapi(
        "/home?populate[portfolio][populate][0]=project.images&populate[portfolio][populate][1]=project.technologies&populate[portfolio][populate][2]=project.button"
    );

    if (loading) return;
    if (error) return;

    const portfolio = data.data.attributes.portfolio;
    const title = portfolio.title;
    const projects = portfolio.project;

    projectsRef.current = projects.map(
        (_, index) => projectsRef.current[index] ?? createRef()
    );

    function onClickProject(index) {
        if (currentProject === index) {
            return;
        }

        const previousProject = currentProject;

        setCurrentProject(index);

        const project0 = projectsRef.current[0].current;
        const project1 = projectsRef.current[1].current;

        const project0Rect = project0.getBoundingClientRect();
        const project1Rect = project1.getBoundingClientRect();

        const projectWidth = project0.offsetWidth;
        const projectGap = Math.abs(project0Rect.right - project1Rect.left);

        const indexDifference = Math.abs(index - previousProject);

        let scrollBy = scrollContainer.current.scrollLeft;
        if (previousProject > index) {
            scrollBy -= (projectWidth + projectGap) * indexDifference;
        } else {
            scrollBy += (projectWidth + projectGap) * indexDifference;
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
                <Markdown components={{ p: "h2" }}>{title}</Markdown>
            </div>

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
                {currentProject < projects.length - 1 && (
                    <div
                        className={styles["right-arrow"]}
                        onClick={() => {
                            if (currentProject + 1 >= projects.length) {
                                return;
                            }

                            onClickProject(currentProject + 1);
                        }}
                    >
                        &gt;
                    </div>
                )}
                <div className={styles.container} ref={scrollContainer}>
                    {projects.map((project, index) => {
                        const onClick =
                            window.innerWidth > 1100
                                ? () => onClickProject(index)
                                : () => "";
                        const images = [];
                        if (project.images.data) {
                            for (let image of project.images.data) {
                                images.push(getStrapiUrl(image.attributes.url));
                            }
                        }

                        // const technologies = {
                        //     HTML: project.HTML,
                        //     CSS: project.CSS,
                        //     JavaScript: project.JavaScript,
                        //     React: project.React,
                        //     PHP: project.PHP,
                        //     MySQL: project.MySQL,
                        // };

                        return (
                            <Project
                                key={index}
                                name={project.name}
                                technologies={project.technologies}
                                projectImages={images}
                                description={project.description}
                                buttonData={project.button}
                                ref={projectsRef.current[index]}
                                onClick={onClick}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
