"use client"

import InputText from "@/components/input-text";
import Button from "@/components/button";
import SelectRatingStars from "@/components/select-rating-stars";
import SelectCategoria from "@/components/select-categoria";

import { update } from "@/actions/filmes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PlusIcon } from '@heroicons/react/24/solid';

import toast from "react-hot-toast";

export default function FormEdit({ filme }) {

    const { push } = useRouter()

    const [errorMessage, setErrorMessage] = useState([])

    const [filmeEdit, setFilmeEdit] = useState(filme)

    async function onSubmit() {
        const resp = await update(filmeEdit)

        if (resp?.error) {
            toast.error(resp.error)
            setErrorMessage(resp.message)
            return
        }

        toast.success("Filme atualizado com sucesso!")
        push("/filmes")
    }

    function handleFieldChange(field, value) {
        if (field === 'categoria') {
          const categoriaFormatada = { id: value };
          setFilmeEdit({
            ...filmeEdit,
            categoria: categoriaFormatada
          });
        } else {
          setFilmeEdit({
            ...filmeEdit,
            [field]: value
          });
        }
      }

    return (
        <main className="container bg-black mt-10 mx-auto rounded p-4 max-w-md">
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold">Editar Filme</h2>
                <form action={onSubmit} className="flex flex-col items-center gap-5 mt-5">
                    <InputText name="nome" placeholder="Nome: " value={filmeEdit.nome} onChange={(e) => handleFieldChange("nome", e.target.value)} />
                    <span className="text-red-500">{errorMessage.find(m => m.field === "nome")?.message}</span>
                    <InputText name="url_imagem" placeholder="URL da Imagem: " value={filmeEdit.url_imagem} onChange={(e) => handleFieldChange("url_imagem", e.target.value)} />
                    <InputText name="descricao" placeholder="Descrição: " value={filmeEdit.descricao} onChange={(e) => handleFieldChange("descricao", e.target.value)} />
                    <SelectCategoria name="categoria" value={filmeEdit.categoria.id} onChange={(value) => handleFieldChange("categoria", value)} />
                    <SelectRatingStars name="classificacao" value={filmeEdit.classificacao} onChange={(value) => handleFieldChange("classificacao", value)} />
                    <Button type="button" icon={<PlusIcon className="h-6 w-6" />}>
                        Salvar Filme
                    </Button>
                </form>
            </div>
        </main>
    )
}