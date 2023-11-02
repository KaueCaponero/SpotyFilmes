import { useState, useEffect } from "react";

import { getCategorias } from "@/actions/categorias";

export default function SelectCategoria({ name, placeholder }) {

    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState(null)

    useEffect(() => {
        async function fetchCategorias() {
            try {
                setCategorias(await getCategorias());
            } catch (error) {
                toast.error("Erro ao buscar dados das categorias.")
            }
        }

        fetchCategorias();
    }, []);

    useEffect(() => {
        console.log(categoria)
    }, [categoria]);

    return (
        <div className="flex flex-col gap-1">
            <select name={name} onChange={(e) => {setCategoria({categoria:{id: e.target.value}})}} className="bg-orange-200 text-orange-500 p-1 rounded focus:outline-orange-500  placeholder-orange-500">
                <option value="">
                    {placeholder}
                </option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                        {categoria.nome}
                    </option>
                ))}
            </select>
        </div>
    );
}
