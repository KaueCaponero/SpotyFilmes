"use client"

import NavBar from "@/components/navbar";
import InputText from "@/components/input-text";
import Button from "@/components/button";

import { create } from "@/actions/categorias";
import { PlusIcon } from '@heroicons/react/24/solid';
import { useRouter } from "next/navigation";
import { useState } from "react";

import toast from "react-hot-toast";
import SelectRatingStars from "@/components/select-rating-stars";

export default function CategoriaNew() {

    const { push } = useRouter()
    const [errorMessage, setErrorMessage] = useState([])

    async function onSubmit(formData) {
        const resp = await create(formData)

        if (resp?.error) {
            toast.error(resp.error)
            setErrorMessage(resp.message)
            return
        }

        toast.success("Categoria cadastrada com sucesso!")
        push("/categorias")
    }

    return (
        <>
            <NavBar />
            <main className="container bg-black mt-10 mx-auto rounded p-4 max-w-md">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold">Cadastrar Categoria</h2>
                    <form action={onSubmit} className="flex flex-col items-center gap-5 mt-5">
                        <InputText name="nome" placeholder="Nome: " />
                        <span className={`text-red-500 ${errorMessage.find(m => m.field === "nome") ? 'block' : 'hidden'}`}>
                            {errorMessage.find(m => m.field === "nome")?.message}
                        </span>
                        <InputText name="url_imagem" placeholder="URL da Imagem: " />
                        <InputText name="descricao" placeholder="Descrição: " />
                        <SelectRatingStars name="classificacao" />
                        <Button type="button" icon={<PlusIcon className="h-6 w-6" />}>
                            Salvar Categoria
                        </Button>
                    </form>
                </div>
            </main>
        </>
    );
}