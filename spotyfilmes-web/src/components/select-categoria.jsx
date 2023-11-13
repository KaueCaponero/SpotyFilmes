import { useState, useEffect } from "react";

import { getCategorias } from "@/actions/categorias";

export default function SelectCategoria({ name, value, placeholder, onChange }) {
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState(value || '');

    useEffect(() => {
        async function fetchCategorias() {
            try {
                setCategorias(await getCategorias());
            } catch (error) {
                toast.error("Erro ao buscar dados das categorias.");
            }
        }

        fetchCategorias();
    }, []);

    const handleCategoriaChange = (e) => {
        const selectedCategoryId = e.target.value;
        setCategoria(selectedCategoryId);
        if (onChange) {
            onChange(selectedCategoryId);
        }
    };

    return (
        <div className="flex flex-col gap-1">
            <select
                name={name}
                value={categoria}
                onChange={handleCategoriaChange}
                className="bg-orange-200 text-orange-500 p-1 rounded focus:outline-orange-500 placeholder-orange-500"
            >
                {placeholder && (
                    <option value="">{placeholder}</option>
                )}
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                        {categoria.nome}
                    </option>
                ))}
            </select>
        </div>
    );
}
