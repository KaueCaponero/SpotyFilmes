"use client"

import InputText from "@/components/input-text";
import Button from "@/components/button";
import SelectRatingStars from "@/components/select-rating-stars";

import { update } from "@/actions/categorias";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PlusIcon } from '@heroicons/react/24/solid';

import toast from "react-hot-toast";

export default function FormEdit({categoria}) {

    const { push } = useRouter()

    const [errorMessage, setErrorMessage] = useState([])

    const [categoriaEdit, setCategoriaEdit] = useState(categoria)

    async function onSubmit() {
        const resp = await update(categoriaEdit)

        if (resp?.error) {
            toast.error(resp.error)
            setErrorMessage(resp.message)
            return
        }

        toast.success("Categoria atualizada com sucesso!")
        push("/categorias")
    }

    function handleFieldChange(field, value) {
        setCategoriaEdit({
          ...categoriaEdit,
          [field]: value
        });
      }

    return (
        <main className="container bg-black mt-10 mx-auto rounded p-4 max-w-md">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold">Editar Categoria</h2>
                    <form action ={onSubmit} className="flex flex-col items-center gap-5 mt-5">
                        <InputText name="nome" placeholder="Nome: " value={categoriaEdit.nome} onChange={(e) => handleFieldChange("nome", e.target.value)}/>
                        <span className="text-red-500">{errorMessage.find(m => m.field === "nome")?.message}</span>
                        <InputText name="url_imagem" placeholder="URL da Imagem: " value={categoriaEdit.url_imagem} onChange={(e) => handleFieldChange("url_imagem", e.target.value)}/>
                        <InputText name="descricao" placeholder="Descrição: " value={categoriaEdit.descricao} onChange={(e) => handleFieldChange("descricao", e.target.value)}/>
                        <SelectRatingStars name="classificacao" value={categoriaEdit.classificacao} onChange={(value) => handleFieldChange("classificacao", value)} />
                        <Button type="button" icon={<PlusIcon className="h-6 w-6" />}>
                            Salvar Categoria
                        </Button>
                    </form>
                </div>
            </main>
    )
}