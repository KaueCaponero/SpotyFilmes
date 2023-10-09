"use server"

import { revalidatePath } from "next/cache"

const url = "http://localhost:8080/filmes"

export async function create(data) {
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
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
        return { error: "Erro ao Deletar Filme"}
    }

    revalidatePath("/filmes")

}