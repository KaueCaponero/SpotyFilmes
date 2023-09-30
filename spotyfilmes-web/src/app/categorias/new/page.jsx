import NavBar from "@/components/navbar";
import InputText from "@/components/input-text";
import Button from "@/components/button";

import { create } from "@/actions/categorias";

import { PlusIcon } from '@heroicons/react/24/solid';

export default function CategoriaNew() {

    async function onSubmit(formData) {
        "use server"

        const resp = create(formData)

        if (resp?.error) alert(resp.error)
    }

    return (
        <>
            <NavBar />
            <main className="container bg-black mt-10 mx-auto rounded p-4 max-w-md">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold">Cadastrar Categoria</h2>
                    <form action ={onSubmit} className="flex flex-col items-start gap-5 mt-5">
                        <InputText placeholder="Nome: "/>
                        <InputText placeholder="URL da Imagem: "/>
                        <InputText placeholder="Descrição: "/>
                        <InputText placeholder="Classificação: "/>
                        <Button type="button" icon={<PlusIcon className="h-6 w-6" />}>
                            Cadastrar Categoria
                        </Button>
                    </form>
                </div>
            </main>
        </>
    );
}