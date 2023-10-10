import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function SelectRatingStars({ value }) {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [paintedStars, setPaintedStars] = useState(value || 0);

    useEffect(() => {
        setPaintedStars(value || 0);
    }, [value]);

    const paintStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const isHovered = i <= hoveredIndex;
            const isPainted = i < paintedStars;
            const starClassName = `h-6 w-6 ${isPainted ? "text-orange-500" : isHovered ? "text-orange-500" : "text-orange-200"
                } transition-colors`;

            stars.push(
                <button
                    key={i}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    onClick={() => handleStarClick(i)}
                >
                    <StarIcon className={starClassName} />
                </button>
            );
        }
        return stars;
    };

    const handleStarClick = (index) => {
        if (index === paintedStars - 1) {
            setPaintedStars(0);
        } else {
            setPaintedStars(index + 1);
        }
    };

    return (
        <>
            <label htmlFor="classificacao">Rating: </label>
            <input type="hidden" name="classificacao" value={paintedStars} />
            <div className="flex gap-1">{paintStars()}</div>
        </>
    );
}