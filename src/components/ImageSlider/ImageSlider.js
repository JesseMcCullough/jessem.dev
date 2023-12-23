import { useState, useRef, createRef } from "react";
import styles from "./ImageSlider.module.css";

export default function ImageSlider({ projectImages }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeImage, setFadeImage] = useState(0);
    const imagesRef = useRef([]);
    const fadeImageRef = useRef();
    const currentImageRef = useRef();

    imagesRef.current = projectImages.map(
        (_, index) => imagesRef.current[index] ?? createRef()
    );

    function onClickImage(index) {
        if (index === currentImage) {
            return;
        }

        setFadeImage(currentImage);
        setCurrentImage(index);

        fadeImageRef.current.style.zIndex = 10;
        fadeImageRef.current.style.opacity = 0;

        setTimeout(() => {
            setFadeImage(index);
            fadeImageRef.current.style.zIndex = "auto";
            setTimeout(() => {
                fadeImageRef.current.style.opacity = 1;
            }, 1);
        }, 0.4 * 1000);

        // consider switching to scrollTo() so that scroll-snap-type can be reenabled?
        imagesRef.current[index].current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
        });
    }

    return (
        <div className={styles.images}>
            <img
                src={projectImages[currentImage]}
                className={styles["current-image"]}
                alt=""
                ref={currentImageRef}
            />

            <img
                src={projectImages[fadeImage]}
                className={styles["fade-image"]}
                alt=""
                ref={fadeImageRef}
            />

            <div className={styles["images-slider"]}>
                <div className={styles["container"]}>
                    {currentImage > 0 && (
                        <div
                            className={styles["left-arrow"]}
                            onClick={() => {
                                if (currentImage - 1 < 0) {
                                    return;
                                }

                                onClickImage(currentImage - 1);
                            }}
                        >
                            &lt;
                        </div>
                    )}

                    {currentImage < projectImages.length - 1 && (
                        <div
                            className={styles["right-arrow"]}
                            onClick={() => {
                                if (currentImage + 1 >= projectImages.length) {
                                    return;
                                }

                                onClickImage(currentImage + 1);
                            }}
                        >
                            &gt;
                        </div>
                    )}

                    {projectImages.map((image, index) => {
                        if (index === currentImage) {
                            return (
                                <img
                                    key={index}
                                    src={image}
                                    alt=""
                                    onClick={() => onClickImage(index)}
                                    ref={imagesRef.current[index]}
                                    className={styles.active}
                                />
                            );
                        } else {
                            return (
                                <img
                                    key={index}
                                    src={image}
                                    alt=""
                                    onClick={() => onClickImage(index)}
                                    ref={imagesRef.current[index]}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
