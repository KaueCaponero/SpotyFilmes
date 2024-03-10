"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import toast from "react-hot-toast";

const url = process.env.NEXT_PUBLIC_API_URL + "/filmes"

const token = cookies().get("spotyfilmes_jwt")?.value

function formatFormData(formData) {
    const formattedData = {};

    formData.forEach((value, key) => {
        if (key === 'categoria') {
            formattedData[key] = { id: parseInt(value) };
        } else {
            formattedData[key] = value;
        }
    });

    return formattedData;
}

export async function create(data) {
    
    const formattedData = formatFormData(data);

    const options = {
        method: "POST",
        body: JSON.stringify(formattedData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201) {
        const message = await resp.json()
        return {
            error: "Erro ao Cadastrar Filme",
            message
        }
    }

    revalidatePath("/filmes")
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
        return { error: "Erro ao Deletar Filme" }
    }

    revalidatePath("/filmes")

}

export async function get(id) {

    const options = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 200) {
        return { error: "Filme não Encontrado" }
    }

    return await resp.json()
}

export async function update(filme) {
    console.log(filme)
    const options = {
        method: "PUT",
        body: JSON.stringify(filme),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + filme.id, options)

    if (resp.status !== 200) {
        return { error: "Filme não Encontrado" }
    }

    revalidatePath("/filmes")
}

export async function carregarFilmes() {

    const options = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 200) {
        throw new Error(`Erro ao buscar dados dos filmes: (${resp.status})`)
    }

    return await resp.json();
}