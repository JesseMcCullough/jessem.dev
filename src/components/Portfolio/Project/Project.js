import { forwardRef } from "react";
import ImageSlider from "../../ImageSlider/ImageSlider";
import Button from "../../Button/Button";
import styles from "./Project.module.css";
import reactLogo from "../../../images/icons/react-logo.png";
import cssLogo from "../../../images/icons/css-logo.png";
import phpLogo from "../../../images/icons/php-logo.png";
import htmlLogo from "../../../images/icons/html-logo.png";
import javascriptLogo from "../../../images/icons/javascript-logo.png";
import mysqlLogo from "../../../images/icons/mysql-logo.png";

const supportedTechnologies = new Map();
supportedTechnologies.set("HTML", htmlLogo);
supportedTechnologies.set("CSS", cssLogo);
supportedTechnologies.set("JavaScript", javascriptLogo);
supportedTechnologies.set("React", reactLogo);
supportedTechnologies.set("PHP", phpLogo);
supportedTechnologies.set("MySQL", mysqlLogo);

const Project = forwardRef(
    (
        { name, technologies, projectImages, description, buttonData, onClick },
        ref
    ) => {
        const technologyImages = [];
        for (let technology in technologies) {
            if (technologies[technology]) {
                // supportedTechnologies' keys are the same as technologies' properties.
                technologyImages.push(supportedTechnologies.get(technology));
            }
        }

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
                    {/* <a
                        className={styles.demo}
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a> */}
                    <Button data={buttonData} className={styles.demo} />
                </div>
            </div>
        );
    }
);

export default Project;
