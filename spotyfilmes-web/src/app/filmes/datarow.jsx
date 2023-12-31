"use client"

import { StarIcon, HeartIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { destroy } from '@/actions/filmes'
import { useRouter } from "next/navigation";

export default function DataRow({ filme }) {

    const estrelasPintadas = filme.classificacao;

    const [imagemCarregada, setImagemCarregada] = useState(true);

    const { push } = useRouter()

    const handleDelete = () => {
        destroy(filme.id)
    }

    const handleEdit = () => {
        push("/filmes/" + filme.id)
    }

    useEffect(() => {
        const img = new Image();
        img.src = filme.url_imagem;

        img.onload = () => {
            setImagemCarregada(true);
        };

        img.onerror = () => {
            setImagemCarregada(false);
        };
    }, [filme.url_imagem]);

    const pintarEstrelas = () => {
        const estrelas = [];
        for (let i = 0; i < 5; i++) {
            if (i < estrelasPintadas) {
                estrelas.push(<StarIcon className="h-6 w-6 text-orange-500" key={i} />);
            } else {
                estrelas.push(<StarIcon className="h-6 w-6 text-orange-200" key={i} />);
            }
        }
        return estrelas;
    };

    return (
        <div className="flex justify-between mt-5 gap-2 p-2 rounded max-w-md">
            <div className="w-1/2">
                {imagemCarregada ? (
                    <img src={filme.url_imagem} alt={filme.nome} className="w-full h-80 object-cover rounded" />
                ) : (
                    <img src="/img/img-error.png" alt="Erro" className="w-full h-80 object-cover rounded" />
                )}
            </div>

            <div className="w-1/2 flex flex-col justify-center items-center">
                <div>
                    <h2 className="font-bold text-center mb-4">{filme.nome}</h2>
                    <p className="text-sm ml-2 mb-4">{filme.descricao}</p>
                    <p className="font-bold text-center mb-4">{filme.categoria.nome}</p>
                </div>
                <div className="flex gap-1 mb-4">
                    {pintarEstrelas()}
                </div>
                <div className="flex gap-8">
                    <button><HeartIcon className="h-6 w-6 text-orange-200 hover:text-orange-500 transition-colors" /></button>
                    <button onClick={handleEdit}><PencilIcon className="h-6 w-6 text-orange-200 hover:text-orange-500 transition-colors" /></button>
                    <button onClick={handleDelete}><TrashIcon className="h-6 w-6 text-orange-200 hover:text-orange-500 transition-colors" /></button>
                </div>
            </div>
        </div>
    );
}
