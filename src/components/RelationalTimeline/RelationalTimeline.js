import { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import ImageSlider from "../ImageSlider/ImageSlider";
import styles from "./RelationalTimeline.module.css";
import starIcon from "../../images/icons/star-icon-blue.png";

// The events, must be ordered by ascending id.
// Children must be ordered by ascending id and must be greater than the parent id.
// line width is in pixels, exclude the unit though.
export default function RelationalTimeline({
    events,
    lineWidth,
    onClickFilterHighlights,
    isFiltered,
}) {
    let hasCalculatedIndents = useRef(false);
    let hasCalculatedOffsets = useRef(false);

    // it'd be cool if there was a way to specify how many intents you want and how much to indent them by,
    // instead of having to specify the initialLineIndent.
    const initialLineIndent = 60;
    const indentBy = 5;
    const maximumIndents = Math.floor(initialLineIndent / indentBy);
    const padding = 15;

    const eventsWithChildren = events.filter((entry) => entry.children);

    // Relations in format parent => [children]
    const relations = new Map(
        eventsWithChildren.map((entry) => [entry.id, entry.children])
    );

    // Ranges in format parent => lastChild
    const ranges = new Map(
        eventsWithChildren.map((entry) => [entry.id, entry.children.at(-1)])
    );

    const childParents = new Map();

    // A record of all indents.
    const indents = useRef(calculateIndents());

    // Vertical offsets in format [relationId, offset]
    const verticalOffsets = useRef(calculateOffsets());

    useEffect(() => {
        setTimeout(
            () => {
                drawLines();
                window.addEventListener("resize", drawLines);
            },
            window.innerWidth <= 770 ? 0.4 * 1000 : 0 // to allow mobile padding-right transition to complete.
        );

        return () => {
            window.removeEventListener("resize", drawLines);
        };
        // eslint-disable-next-line
    }, [events]);

    function drawLines() {
        for (let [parent, children] of relations) {
            for (let child of children) {
                const relationId = getRelationId(parent, child);

                const parentElement = document.querySelector(
                    `div[data-id="${parent}"]`
                );
                const childElement = document.querySelector(
                    `div[data-id="${child}"]`
                );

                if (!parentElement || !childElement) {
                    continue;
                }

                const parentRect = parentElement.getBoundingClientRect();
                const childRect = childElement.getBoundingClientRect();

                const parentRectTop = parentRect.top;
                const childRectTop = childRect.top;

                const parentRectHeight = parentRect.height;
                const childRectHeight = childRect.height;

                const parentRectMiddle = parentRectTop + parentRectHeight / 2;
                const childRectMiddle = childRectTop + childRectHeight / 2;

                let line = parentElement.querySelector(
                    `.${styles.line}[data-relation-id="${relationId}"]`
                );
                if (!line) {
                    line = document.createElement("div");
                    line.classList.add(styles.line);
                    line.setAttribute("data-relation-id", relationId);
                    line.setAttribute(
                        "data-indent",
                        (initialLineIndent -
                            indents.current.get(getRelationId(parent, child))) /
                            indentBy +
                            1
                    );

                    if (events[parent - 1].lineColor) {
                        line.style.borderColor = events[parent - 1].lineColor;
                    }

                    line.style.zIndex =
                        initialLineIndent -
                        indents.current.get(getRelationId(parent, child));
                }
                const offset = verticalOffsets.current.get(relationId);
                const halfLineWidth = lineWidth / 2;

                line.style.height =
                    childRectMiddle -
                    parentRectMiddle +
                    halfLineWidth +
                    2 +
                    (offset.child - offset.parent) +
                    "px";
                line.style.top =
                    "calc(50% - " +
                    halfLineWidth +
                    "px + " +
                    offset.parent +
                    "px)";

                const indent = indents.current.get(relationId);
                line.style.right = -indent - padding + "px";
                line.style.width = padding + indent + "px";

                parentElement.appendChild(line);
            }
        }
    }

    function calculateIndents() {
        if (hasCalculatedIndents.current) {
            return;
        }
        hasCalculatedIndents.current = true;

        // A record of indents as the relations are processed.
        // Sorted by descending indent.
        const loadingIndents = new Map();
        for (let x = maximumIndents; x > 0; x--) {
            loadingIndents.set(x * indentBy, [0, 0]); // (indent, untilRelation) // maybe change to previousRelation
        }

        const indents = new Map();
        let previousParent = 1;

        // Loop through each parent
        for (let [parent, children] of relations) {
            let lineIndent = initialLineIndent;

            // Loop through each child
            for (let child of children) {
                // If the parent is between the range of the previous parent
                // but not the same parent as the previous parent.
                if (parent !== previousParent) {
                    // for indents that take up the highest indent available.
                    for (let [indent, until] of loadingIndents) {
                        const untilParentRange = ranges.get(until[0]);

                        // If the parent is greater than the range of the relation at the current indent
                        // or if the current indent doesn't have a relation
                        if (
                            parent >= untilParentRange ||
                            untilParentRange === undefined
                        ) {
                            lineIndent = indent;
                            break;
                        }
                    }
                    // for indents that go underneath each other, never going beyond its nearest sibling.
                    // add support to component later, not needed right now.
                    // for (let [indent, until] of loadingIndents) {
                    //     // Loop through all loadingIndents with their previous relations
                    //     const untilParentRange = ranges.get(until[0]); // until[0] is the parent of the previous relation
                    //     console.log("untilParentRange", untilParentRange);

                    //     // If the parent is greater than the range of the relation at the current indent
                    //     // or if the current indent doesn't have a relation

                    //     if (untilParentRange === undefined) {
                    //         console.log("It's undefined, so no more checking.");
                    //         lineIndent = indent;
                    //         break;
                    //     }

                    //     if (parent >= untilParentRange) {
                    //         console.log(
                    //             "parent was greater than " +
                    //                 untilParentRange +
                    //                 ", so now checking below"
                    //         );
                    //         // It could be the indent. Must check all indents below it to confirm.
                    //         let isValidIndent = true;
                    //         for (
                    //             let indentBelow = indent - indentBy;
                    //             indentBelow >= indentBy;
                    //             indentBelow -= indentBy
                    //         ) {
                    //             const belowParent =
                    //                 loadingIndents.get(indentBelow)[0];
                    //             console.log("belowParent", belowParent);
                    //             const belowParentRange =
                    //                 ranges.get(belowParent);
                    //             console.log(
                    //                 "belowParentRange",
                    //                 belowParentRange
                    //             );

                    //             if (belowParentRange === undefined) {
                    //                 console.log(
                    //                     "Below at " +
                    //                         indentBelow +
                    //                         " was undefined, so it's good for indent " +
                    //                         indent
                    //                 );
                    //                 break; // looks good.
                    //             }

                    //             if (parent >= belowParentRange) {
                    //                 console.log(
                    //                     "Below at " +
                    //                         indentBelow +
                    //                         ", parent was greater than its range " +
                    //                         belowParentRange +
                    //                         ", still checking indent " +
                    //                         indent
                    //                 );
                    //                 continue; // looks good
                    //             } else {
                    //                 console.log(
                    //                     "Below at " +
                    //                         indentBelow +
                    //                         ", parent was *less* than its range " +
                    //                         belowParentRange +
                    //                         ", must not be intent " +
                    //                         indent
                    //                 );
                    //                 isValidIndent = false;
                    //                 break;
                    //             }
                    //         }

                    //         if (isValidIndent) {
                    //             lineIndent = indent;
                    //             console.log(
                    //                 "It was valid, so the indent is " + indent
                    //             );
                    //             // might need to reset indents below this one.
                    //             break;
                    //         }
                    //     }
                    // }
                }

                loadingIndents.set(lineIndent, [parent, child]);

                indents.set(getRelationId(parent, child), lineIndent);

                // Add a record of this child with its parent and the indent.
                if (childParents.get(child)) {
                    if (Array.isArray(...childParents.get(child))) {
                        childParents.set(child, [
                            ...childParents.get(child),
                            [parent, lineIndent],
                        ]);
                    } else {
                        childParents.set(child, [
                            childParents.get(child),
                            [parent, lineIndent],
                        ]);
                    }
                } else {
                    childParents.set(child, [parent, lineIndent]);
                }

                previousParent = parent;
            }
        }

        return indents;
    }

    function calculateOffsets() {
        if (hasCalculatedOffsets.current) {
            return;
        }
        hasCalculatedOffsets.current = true;

        const verticalOffsets = new Map();
        const sortedChildParents = new Map();

        for (let [child, parentData] of childParents) {
            // Only one entry, already sorted.
            if (!Array.isArray(...parentData)) {
                sortedChildParents.set(child, parentData);
                continue;
            }

            const sorted = [...parentData].sort((a, b) => {
                return a[1] - b[1];
            });

            sortedChildParents.set(child, sorted);
        }

        for (let [child] of childParents) {
            const hasMultipleParents = Array.isArray(
                ...childParents.get(child)
            );

            const numOfParents = hasMultipleParents
                ? childParents.get(child).length
                : 1;

            const isChildParent = relations.has(child);
            const numOfConnections = isChildParent
                ? numOfParents + 1
                : numOfParents;

            let offset = -Math.floor(numOfConnections / 2);
            let multiplier = indentBy; // to do, add actual multiplier

            if (numOfConnections % 2 === 0) {
                offset += 0.5;
            }

            if (hasMultipleParents) {
                for (let [parent] of sortedChildParents.get(child)) {
                    if (verticalOffsets.has(getRelationId(parent, child))) {
                        verticalOffsets.set(getRelationId(parent, child), {
                            ...verticalOffsets.get(
                                getRelationId(parent, child)
                            ),
                            child: offset * multiplier,
                        });
                    } else {
                        verticalOffsets.set(getRelationId(parent, child), {
                            parent: 0,
                            child: offset * multiplier,
                        });
                    }

                    offset++;
                }
            } else {
                const parent = sortedChildParents.get(child)[0];

                if (verticalOffsets.has(getRelationId(parent, child))) {
                    verticalOffsets.set(getRelationId(parent, child), {
                        ...verticalOffsets.get(getRelationId(parent, child)),
                        child: offset * multiplier,
                    });
                } else {
                    verticalOffsets.set(getRelationId(parent, child), {
                        parent: 0,
                        child: offset * multiplier,
                    });
                }

                offset++;
            }

            if (isChildParent) {
                const parent = child;
                for (let childOfParent of relations.get(parent)) {
                    if (
                        verticalOffsets.has(
                            getRelationId(parent, childOfParent)
                        )
                    ) {
                        verticalOffsets.set(
                            getRelationId(parent, childOfParent),
                            {
                                ...verticalOffsets.get(
                                    getRelationId(parent, childOfParent)
                                ),
                                parent: offset * multiplier,
                            }
                        );
                    } else {
                        verticalOffsets.set(
                            getRelationId(parent, childOfParent),
                            {
                                parent: offset * multiplier,
                                child: 0,
                            }
                        );
                    }
                }
            }
        }

        return verticalOffsets;
    }

    function getRelationId(parent, child) {
        return `[${parent}, ${child}]`;
    }

    const eventsClasses = isFiltered
        ? `${styles.events} ${styles.filtered}`
        : `${styles.events}`;

    return (
        <div className={eventsClasses}>
            {events.map((event, index) => {
                const eventClasses = event.highlight
                    ? `${styles.event} ${styles.highlight}`
                    : styles.event;

                return (
                    <div className={eventClasses} key={event.id}>
                        <div className={styles.box} data-id={event.id}>
                            {event.highlight && (
                                <div className={styles["highlight-label"]}>
                                    <img src={starIcon} alt="" />
                                    <span>Highlight</span>
                                </div>
                            )}
                            <Markdown
                                components={{
                                    p: "h3",
                                    // Rewrite "strong" tag to "span".
                                    strong(props) {
                                        const { node, ...rest } = props;
                                        return (
                                            <span
                                                className="highlight"
                                                {...rest}
                                            />
                                        );
                                    },
                                    em(props) {
                                        const { node, ...rest } = props;
                                        return (
                                            <span
                                                className={styles["small-text"]}
                                                {...rest}
                                            />
                                        );
                                    },
                                }}
                            >
                                {event.title}
                            </Markdown>
                            {event.images && event.images.length > 1 && (
                                <div className={styles["image-slider"]}>
                                    <ImageSlider
                                        projectImages={event.images}
                                        classNames={{
                                            active: styles[
                                                "image-slider-active"
                                            ],
                                        }}
                                    />
                                </div>
                            )}
                            {event.images && event.images.length === 1 && (
                                <img src={event.images[0]} alt="" />
                            )}
                            {event.description && (
                                <Markdown
                                    components={{
                                        strong(props) {
                                            const { node, ...rest } = props;
                                            return (
                                                <span
                                                    className="highlight"
                                                    {...rest}
                                                />
                                            );
                                        },
                                        em(props) {
                                            const { node, ...rest } = props;
                                            return (
                                                <span
                                                    className={
                                                        styles["small-text"]
                                                    }
                                                    {...rest}
                                                />
                                            );
                                        },
                                    }}
                                >
                                    {event.description}
                                </Markdown>
                            )}
                            {index === 0 && (
                                <label className={styles["filter-highlights"]}>
                                    {isFiltered && (
                                        <input
                                            type="checkbox"
                                            onChange={onClickFilterHighlights}
                                            checked
                                        />
                                    )}
                                    {!isFiltered && (
                                        <input
                                            type="checkbox"
                                            onChange={onClickFilterHighlights}
                                        />
                                    )}
                                    Show only Highlights
                                </label>
                            )}
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.line}></div>
                            <div className={styles.date}>
                                <span className={styles.month}>
                                    {event.month}
                                </span>
                                <span className={styles.year}>
                                    {event.year}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
