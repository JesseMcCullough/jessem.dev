import { forwardRef } from "react";
import ImageSlider from "../../ImageSlider/ImageSlider";
import styles from "./Project.module.css";

const Project = forwardRef(
    (
        {
            name,
            technologyImages,
            projectImages,
            description,
            githubLink,
            demoLink,
            onClick,
        },
        ref
    ) => {
        return (
            <div className={styles.project} onClick={onClick} ref={ref}>
                <h3>{name}</h3>
                <div className={styles.technologies}>
                    {technologyImages.map((image, index) => (
                        <img key={index} src={image} alt="" />
                    ))}
                </div>
                <p>{description}</p>

                <ImageSlider projectImages={projectImages} />

                <div className={styles.buttons}>
                    <a
                        className={styles.demo}
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        );
    }
);

export default Project;
