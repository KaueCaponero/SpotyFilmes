import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function SelectRatingStars() {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [estrelasPintadas, setEstrelasPintadas] = useState(0);

    const pintarEstrelas = () => {
        const estrelas = [];
        for (let i = 0; i < 5; i++) {
            const isHovered = i <= hoveredIndex;
            const isPintada = i < estrelasPintadas;
            const starClassName = `h-6 w-6 ${isPintada ? "text-orange-500" : isHovered ? "text-orange-500" : "text-orange-200"
                } transition-colors`;

            estrelas.push(
                <button
                    key={i}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    onClick={() => handleEstrelaClick(i)}
                >
                    <StarIcon className={starClassName} />
                </button>
            );
        }
        return estrelas;
    };

    const handleEstrelaClick = (index) => {
        if (index === estrelasPintadas - 1) {
            setEstrelasPintadas(0);
        } else {
            setEstrelasPintadas(index + 1);
        }
    };

    return (
        <>
            <label htmlFor="classificacao">Classificação: </label>
            <input type="hidden" name="classificacao" value={estrelasPintadas} />
            <div className="flex gap-1">{pintarEstrelas()}</div>
        </>
    );
}
