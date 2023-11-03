"use server"

import { revalidatePath } from "next/cache"

const url = "http://localhost:8080/filmes"

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
            "Content-Type": "application/json"
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
        method: "DELETE"
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 204) {
        return { error: "Erro ao Deletar Filme" }
    }

    revalidatePath("/filmes")

}

export async function get(id) {
    const resp = await fetch(url + "/" + id)

    if (resp.status !== 200) {
        return { error: "Filme não Encontrado" }
    }

    return await resp.json()
}

export async function update(filme) {
    const options = {
        method: "PUT",
        body: JSON.stringify(filme),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url + "/" + filme.id, options)

    if (resp.status !== 200) {
        return { error: "Filme não Encontrado" }
    }

    revalidatePath("/filmes")
}