"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import toast from "react-hot-toast";

const url = process.env.NEXT_PUBLIC_API_URL + "/categorias"

const token = cookies().get("spotyfilmes_jwt")?.value

export async function getCategorias() {

    const options = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try {
        const response = await fetch(url, options);

        if (response.status !== 200) {
            toast.error("Erro ao buscar dados das categorias.");
            return;
        }

        const data = await response.json();
        return data.content;
        
    } catch (error) {
        console.error("Erro na requisição:", error);
        toast.error("Erro ao buscar dados das categorias.");
        return null;
    }
}

export async function create(data) {
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201) {
        const message = await resp.json()
        return {
            error: "Erro ao Cadastrar Categoria",
            message
        }
    }

    revalidatePath("/categorias")
}

export async function destroy(id) {
    const options = {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 204) {
        return { error: "Erro ao Deletar Categoria" }
    }

    revalidatePath("/categorias")

}

export async function get(id) {

    const options = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 200) {
        return { error: "Categoria não Encontrada" }
    }

    return await resp.json()
}

export async function update(categoria) {
    const options = {
        method: "PUT",
        body: JSON.stringify(categoria),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + categoria.id, options)

    if (resp.status !== 200) {
        return { error: "Categoria não Encontrada" }
    }

    revalidatePath("/categorias")
}

export async function carregarCategorias() {

    const options = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 200) {
        throw new Error(`Erro ao buscar dados das categorias: (${resp.status})`)
    }

    return await resp.json();
}