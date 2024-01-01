import { useState, useRef, createRef } from "react";
import styles from "./ImageSlider.module.css";

export default function ImageSlider({ projectImages }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeImage, setFadeImage] = useState(0);
    const imagesRef = useRef([]);
    const fadeImageRef = useRef();
    const currentImageRef = useRef();
    const scrollContainer = useRef();

    imagesRef.current = projectImages.map(
        (_, index) => imagesRef.current[index] ?? createRef()
    );

    function onClickImage(index) {
        if (index === currentImage) {
            return;
        }

        const previousImage = currentImage;

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

        const imageWidth = imagesRef.current[0].current.offsetWidth;
        let scrollBy = scrollContainer.current.scrollLeft;

        if (previousImage > index) {
            scrollBy -= imageWidth;
        } else {
            scrollBy += imageWidth;
        }

        scrollContainer.current.scrollTo({
            top: 0,
            left: scrollBy,
            behavior: "smooth",
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
                <div className={styles["container"]} ref={scrollContainer}>
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
                        const classes =
                            index === currentImage ? styles.active : "";
                        return (
                            <img
                                key={index}
                                src={image}
                                alt=""
                                onClick={() => onClickImage(index)}
                                ref={imagesRef.current[index]}
                                className={classes}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
