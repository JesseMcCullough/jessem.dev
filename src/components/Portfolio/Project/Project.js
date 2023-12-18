import styles from "./Project.module.css";

export default function Project({name, technologyImages, projectImage,
    description, githubLink, demoLink}) {
    return (
        <div className={styles.project}>
            <h3>{name}</h3>
            <div className={styles.technologies}>
                {technologyImages.map(image => <img src={image} alt="" />)}
            </div>
            <p>{description}</p>
            <img src={projectImage} className={styles["project-image"]} alt="" />
            <div className={styles.buttons}>
                <a className={styles.github} href={githubLink} target="_blank"
                    rel="noreferrer">GitHub</a>
                <a className={styles.demo} href={demoLink} target="_blank"
                    rel="noreferrer">Live Demo</a>
            </div>
        </div>
    );
}
