"use client"

import { StarIcon, HeartIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { destroy } from '@/actions/categorias'
import { useRouter } from "next/navigation";

export default function DataRow({ categoria }) {

	const estrelasPintadas = categoria.classificacao;

	const [imagemCarregada, setImagemCarregada] = useState(true);

	const { push } = useRouter()

	const handleDelete = () => {
		destroy(categoria.id)
	}

	const handleEdit = () => {
		push("/categorias/" + categoria.id)
	}

	useEffect(() => {
		const img = new Image();
		img.src = categoria.url_imagem;

		img.onload = () => {
			setImagemCarregada(true);
		};

		img.onerror = () => {
			setImagemCarregada(false);
		};
	}, [categoria.url_imagem]);

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
					<img src={categoria.url_imagem} alt={categoria.nome} className="w-full h-80 object-cover rounded" />
				) : (
					<img src="/img/img-error.png" alt="Erro" className="w-full h-80 object-cover rounded" />
				)}
			</div>

			<div className="w-1/2 flex flex-col justify-center items-center">
				<div>
					<h2 className="font-bold text-center mb-4">{categoria.nome}</h2>
					<p className="text-sm ml-2 mb-4">{categoria.descricao}</p>
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
